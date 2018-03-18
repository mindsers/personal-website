import { Injectable, Type, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class PopinService {
  private container = new BehaviorSubject<ViewContainerRef>(null)

  constructor(private resolver: ComponentFactoryResolver) { }

  registerContainer(container: ViewContainerRef): void {
    this.container.next(container)
  }

  openPopin<C>(componentClass: Type<C>): void {
    this.container.subscribe(container => {
      if (container == null) {
        return
      }

      container.clear()
      container.createComponent(
        this.resolver.resolveComponentFactory(componentClass)
      )
    })
  }
}
