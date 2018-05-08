import { Injectable, Inject, LOCALE_ID } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { DomSanitizer } from '@angular/platform-browser'

import { Observable } from 'rxjs'
import 'rxjs/add/observable/from'
import 'rxjs/add/observable/of'

import { environment } from '../../environments/environment'
import { WINDOW } from '../shared/native-api'

@Injectable()
export class ResumeService {
  constructor(
    private httpService: HttpClient,
    @Inject(LOCALE_ID) private locale: string,
    @Inject(WINDOW) private window: Window
  ) {}

  getResume() {
    return this.httpService.get(`${environment.api}/resume?locale=${this.locale}`)
      .map(response => response['data'])
  }

  getResumeFile() {
    return this.httpService.get(`${environment.api}/resume/file?locale=${this.locale}`, { responseType: 'blob' })
      .map(blob => new Blob([blob], { type: 'application/pdf' }))
      .map(blob => this.window.URL.createObjectURL(blob))
  }
}
