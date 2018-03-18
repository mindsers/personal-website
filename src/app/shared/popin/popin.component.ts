import { Component, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core'

import { PopinService } from './popin.service'

@Component({
  selector: 'app-popin',
  templateUrl: './popin.component.html',
  styleUrls: ['./popin.component.scss']
})
export class PopinComponent implements AfterViewInit {
  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef

  get isVisible(): boolean { return this._isVisible }

  private _isVisible = true

  constructor(private popinService: PopinService) {}

  ngAfterViewInit() {
    this.popinService.registerContainer(this.container)
  }

  open() {
    this._isVisible = true
  }

  close() {
    this._isVisible = false
  }
}
