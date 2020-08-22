import { Component } from '@angular/core'

@Component({
  template: `
    <section class="error-message">
      <div class="content">
        <h1>404'</h1>
        <p i18n>
          Oups! It seems like we didn't find what you want.
        </p>
      </div>
    </section>
  `,
  styleUrls: ['./error-component.scss']
})
export class PageNotFoundComponent {}
