import { Component } from '@angular/core'

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
export class SimplePopinComponent {
  message = 'This is the default popin. You might have forgotten to customize your popin.'
  actions = [
    { label: 'Valider', value: null }
  ]

  handleClick(value) {
    // close
  }
}
