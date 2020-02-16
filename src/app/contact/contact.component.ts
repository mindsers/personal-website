import { Component } from '@angular/core'
import { NgForm } from '@angular/forms'

import { ContactService } from './contact.service'
import { RuntimeTranslationService } from '../shared/translator/translator.service'

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  flashMessages: { type: string, text: string }[] = []

  constructor(private contactService: ContactService, private translator: RuntimeTranslationService) {}

  handleSubmit(form: NgForm) {
    const { email, message, subject } = form.value

    this.contactService
      .sendMail({ sender: email, message, subject })
      .subscribe(
        () => this.flashMessages = [{ type: 'success', text: this.translator.translate('contact.result.success') }],
        () => this.flashMessages.push({ type: 'error', text: this.translator.translate('contact.result.error') })
      )
  }
}
