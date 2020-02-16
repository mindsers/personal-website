import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { environment } from '../../environments/environment'

@Injectable()
export class ContactService {

  constructor(private httpClient: HttpClient) {}

  sendMail(mail: ContactMessage) {
    return this.httpClient.post(`${environment.api}/mails`, {
      message: mail.message,
      from: mail.sender,
      subject: mail.subject
    })
  }
}

export interface ContactMessage {
  message: string
  sender: string
  subject: string
}
