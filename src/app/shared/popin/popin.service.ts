import { Injectable, Type, ViewContainerRef, ComponentFactoryResolver, ComponentRef, OnDestroy } from '@angular/core'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import 'rxjs/add/operator/switchMap'

import { PopinContainerComponent } from './popin-container.component'

@Injectable()
export class PopinService implements OnDestroy {
  private popinContainer = new BehaviorSubject<PopinContainerComponent>(null)

  constructor(private resolver: ComponentFactoryResolver) { }

  registerContainer(popin: PopinContainerComponent): void {
    this.popinContainer.next(popin)
  }

  openPopin<C>(componentClass: Type<C>) {
    const afterClose = () => {
      return this.popinContainer
        .switchMap(popinRef => {
          if (popinRef == null || popinRef.container == null) {
            return
          }

          popinRef.container.clear()
          popinRef.container.createComponent(
            this.resolver.resolveComponentFactory(componentClass)
          )

          return popinRef.open()
        })
    }

    return { afterClose }
  }

  ngOnDestroy(): void {
    this.popinContainer.complete()
  }
}
