import { Component, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core'
import { Subject, Observable } from 'rxjs'

import { PopinService } from './popin.service'

@Component({
  selector: 'app-popin-container',
  templateUrl: './popin-container.component.html',
  styleUrls: ['./popin-container.component.scss']
})
export class PopinContainerComponent implements AfterViewInit {
  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef

  get isVisible(): boolean { return this._isVisible }

  private closeFnCalled: Subject<any>
  private _isVisible = false

  constructor(private popinService: PopinService) {}

  ngAfterViewInit(): void {
    this.registerSelfAsMainContainer()
  }

  open(): Observable<any> {
    this._isVisible = true

    this.closeFnCalled = new Subject()
    return this.closeFnCalled
  }

  close(data: any): void {
    this._isVisible = false
    this.container.clear()

    this.closeFnCalled.next(data)
    this.closeFnCalled.complete()
  }

  private registerSelfAsMainContainer(): void {
    this.popinService.registerContainer(this)
  }
}
