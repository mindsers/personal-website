import { Component, Inject, OnInit } from '@angular/core'

import { POPIN_VIEWREF, POPIN_DATA } from './popin'
import { RuntimeTranslationService } from '../translator/translator.service'

@Component({
  template: `
  <p>
    {{ message }}
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
    @Inject(POPIN_DATA) private data: SimplePopinData = {},
    private translator: RuntimeTranslationService
  ) {}

  ngOnInit() {
    const {
      message = this.translator.translate('popin.default-message'),
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
