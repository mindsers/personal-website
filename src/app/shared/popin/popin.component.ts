import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-popin',
  templateUrl: './popin.component.html',
  styleUrls: ['./popin.component.scss']
})
export class PopinComponent implements OnInit {
  get isVisible(): boolean { return this._isVisible }

  private _isVisible = false

  constructor() {}
  ngOnInit() {}

  open() {
    this._isVisible = true
  }

  close() {
    this._isVisible = false
  }
}
