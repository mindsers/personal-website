import { Injectable, Type, ViewContainerRef, ComponentFactoryResolver, ComponentRef, OnDestroy } from '@angular/core'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

import { PopinContainerComponent } from './popin-container.component'

@Injectable()
export class PopinService implements OnDestroy {
  private popinContainer = new BehaviorSubject<PopinContainerComponent>(null)

  constructor(private resolver: ComponentFactoryResolver) { }

  registerContainer(popin: PopinContainerComponent): void {
    this.popinContainer.next(popin)
  }

  openPopin<C>(componentClass: Type<C>): void {
    this.popinContainer.subscribe(popinRef => {
      if (popinRef == null || popinRef.container == null) {
        return
      }

      popinRef.container.clear()
      popinRef.container.createComponent(
        this.resolver.resolveComponentFactory(componentClass)
      )

      popinRef.open()
    })
  }

  ngOnDestroy() {
    this.popinContainer.complete()
  }
}
