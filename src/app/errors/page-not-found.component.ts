import { Component, OnInit } from '@angular/core'

import { ErrorComponent } from './error-component'
import { RuntimeTranslationService } from '../shared/translator/translator.service'

@Component({
  templateUrl: './error-component.html',
  styleUrls: ['./error-component.scss']
})
export class PageNotFoundComponent implements ErrorComponent, OnInit {
  errorCode = 404
  message = ''

  constructor(private translator: RuntimeTranslationService) {}

  ngOnInit() {
    this.message = this.translator.translate('error-page.404.message')
  }
}
