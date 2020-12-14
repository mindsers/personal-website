import { Component } from '@angular/core'

@Component({
  selector: 'app-unknown-error',
  template: `
    <section class="error-message">
      <div class="content">
        <h1>500'</h1>
        <p i18n>
          An unknown error occured. Sorry for trouble.
        </p>
      </div>
    </section>
  `,
  styleUrls: ['./error-component.scss']
})
export class UnknownErrorComponent {}
