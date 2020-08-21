import { Component, OnInit } from '@angular/core'

import { ErrorComponent } from './error-component'
import { RuntimeTranslationService } from '../shared/translator/translator.service'

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
