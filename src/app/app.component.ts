import { Component } from '@angular/core'

import { PopinService } from './shared/popin/popin.service'
import { ContactComponent } from './contact/contact.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private popinService: PopinService) {}

  handleOnContactButtonClick() {
    this.popinService
      .openPopin(ContactComponent)
      .afterClose()
      .subscribe()
  }
}
