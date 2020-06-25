import {
  Injectable,
  Type,
  ComponentFactoryResolver,
  OnDestroy,
  Injector,
} from '@angular/core'

import { BehaviorSubject, AsyncSubject } from 'rxjs'
import { switchMap } from 'rxjs/operators'

import { PopinContainerComponent } from './popin-container.component'
import { SimplePopinComponent } from './simple-popin.component'
import { POPIN_VIEWREF, POPIN_DATA } from './popin'

@Injectable()
export class PopinService implements OnDestroy {
  private popinContainer = new BehaviorSubject<PopinContainerComponent>(null)

  constructor(private resolver: ComponentFactoryResolver, private injector: Injector) { }

  registerContainer(popin: PopinContainerComponent): void {
    this.popinContainer.next(popin)
  }

  openPopin<C>(componentClass?: Type<C>, data?: any): PopinRef {
    if (componentClass == null) {
      componentClass = SimplePopinComponent as any
    }

    const afterCloseSubject = new AsyncSubject<any>()
    const popinSubscription = this.popinContainer
      .pipe(
        switchMap(popinRef => {
          if (popinRef == null || popinRef.container == null) {
            return
          }

          const componentFactory = this.resolver.resolveComponentFactory(componentClass)
          const injector = Injector.create({
            providers: [
              { provide: POPIN_DATA, useValue: data },
              { provide: POPIN_VIEWREF, useValue: popinRef }
            ],
            parent: this.injector
          })

          popinRef.container.clear()
          popinRef.container.createComponent<C>(componentFactory, null, injector)

          return popinRef.open()
        })
      )
      .subscribe(popinResult => {
        afterCloseSubject.next(popinResult)
        afterCloseSubject.complete()
      })

    return { afterClose: (callback: (value) => void) => afterCloseSubject.subscribe(callback) }
  }

  ngOnDestroy(): void {
    this.popinContainer.complete()
  }
}

interface PopinRef {
  afterClose: (callback: (value) => void) => void
}
