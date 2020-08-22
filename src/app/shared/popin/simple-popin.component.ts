import { Component, Inject, OnInit } from '@angular/core'

import { POPIN_VIEWREF, POPIN_DATA } from './popin'

@Component({
  template: `
  <p>
    {{ message }}
    <ng-container *ngIf="message == null || message.length < 1" i18n="Fallback message of the popin">
      This is the default popin. You might have forgotten to customize your popin.
    </ng-container>
  </p>
  <p class="actions">
    <a *ngFor="let action of actions" class="btn" (click)="handleClick(action.value)">{{ action.label }}</a>
  </p>
  `,
  styleUrls: ['./simple-popin.component.scss']
})
export class SimplePopinComponent implements OnInit {
  message: string
  actions: { label: string, value: any }[]

  constructor(
    @Inject(POPIN_VIEWREF) private popinRef,
    @Inject(POPIN_DATA) private data: SimplePopinData = {}
  ) {}

  ngOnInit() {
    const {
      message = null,
      actions = [
        { label: 'OK', value: null }
      ]
    } = this.data

    this.actions = actions
    this.message = message
  }

  handleClick(value) {
    this.popinRef.close(value)
  }
}

interface SimplePopinData {
  message?: string
  actions?: { label: string, value: any }[]
}
