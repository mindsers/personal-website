import { Component } from '@angular/core'

import { ErrorComponent } from './error-component'

@Component({
  selector: 'app-unknown-error',
  templateUrl: './error-component.html',
  styleUrls: ['./error-component.scss']
})
export class UnknownErrorComponent implements ErrorComponent {
  errorCode = 500
  message = 'An unknown error occured. Sorry for trouble.'
}
