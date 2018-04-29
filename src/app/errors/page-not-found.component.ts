import { Component } from '@angular/core'

import { ErrorComponent } from './error-component'

@Component({
  templateUrl: './error-component.html',
  styleUrls: ['./error-component.scss']
})
export class PageNotFoundComponent implements ErrorComponent {
  errorCode = 404
  message = `Oups! It seems like we didn't find what you want.`
}
