import { Component, Inject, LOCALE_ID } from '@angular/core'

import { PopinService } from './shared/popin/popin.service'
import { ContactComponent } from './contact/contact.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  get blogURL() {
    return `https://blog.nathanaelcherrier.com/${this.userLocale}/`
  }

  constructor(
    @Inject(LOCALE_ID) private userLocale: string,
    private popinService: PopinService
  ) {}

  handleOnContactButtonClick() {
    this.popinService.openPopin(ContactComponent)
  }
}
