import { Component } from '@angular/core'

import { PopinService } from './shared/popin/popin.service'
import { ContactComponent } from './contact/contact.component'
import { RuntimeTranslationService } from './shared/translator/translator.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private translator: RuntimeTranslationService,
    private popinService: PopinService
  ) {}

  handleOnContactButtonClick() {
    this.popinService.openPopin(ContactComponent)
  }
}
