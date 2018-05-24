import { Component, OnInit } from '@angular/core'

import { ErrorComponent } from './error-component'
import { RuntimeTranslatorService } from '../shared/translator/translator.service'

@Component({
  selector: 'app-unknown-error',
  templateUrl: './error-component.html',
  styleUrls: ['./error-component.scss']
})
export class UnknownErrorComponent implements ErrorComponent, OnInit {
  errorCode = 500
  message = ''

  constructor(private translator: RuntimeTranslatorService) {}

  ngOnInit() {
    this.message = this.translator.translate('error-page.500.message')
  }
}
