import { Component } from '@angular/core'
import { NgForm } from '@angular/forms'

import { ContactService } from './contact.service'

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  flashMessages: { type: 'success' | 'error' }[] = []

  constructor(private contactService: ContactService) {}

  handleSubmit(form: NgForm) {
    const { email, message, subject } = form.value

    this.contactService
      .sendMail({ sender: email, message, subject })
      .subscribe(
        () => this.flashMessages = [{ type: 'success' }],
        () => this.flashMessages.push({ type: 'error' })
      )
  }
}
