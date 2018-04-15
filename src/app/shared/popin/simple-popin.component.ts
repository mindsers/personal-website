import { Component } from '@angular/core'

@Component({
  template: `
  <p>
    {{ message }}
  </p>
  <p class="actions">
    <a class="btn" (click)="handleClick()">Valider</a>
  </p>
  `,
  styleUrls: ['./simple-popin.component.scss']
})
export class SimplePopinComponent {
  message = 'This is the default popin. You might have forgotten to customize your popin.'

  handleClick() {
    // close
  }
}
