import {
  Injectable,
  Type,
  ViewContainerRef,
  ComponentFactoryResolver,
  OnDestroy,
  Injector,
  InjectionToken
} from '@angular/core'

import { Observable } from 'rxjs/Observable'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import 'rxjs/add/operator/switchMap'

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

    const afterClose = () => {
      return this.popinContainer
        .switchMap(popinRef => {
          if (popinRef == null || popinRef.container == null) {
            return
          }

          const componentFactory = this.resolver.resolveComponentFactory(componentClass)
          const injector = Injector.create([
            { provide: POPIN_DATA, useValue: data },
            { provide: POPIN_VIEWREF, useValue: popinRef }
          ], this.injector)

          popinRef.container.clear()
          popinRef.container.createComponent<C>(componentFactory, null, injector)

          return popinRef.open()
        })
    }

    return { afterClose }
  }

  ngOnDestroy(): void {
    this.popinContainer.complete()
  }
}

interface PopinRef {
  afterClose: () => Observable<any>
}
