import { Injectable, Inject, LOCALE_ID } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { DomSanitizer } from '@angular/platform-browser'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/from'
import 'rxjs/add/observable/of'

import { environment } from '../../environments/environment'

@Injectable()
export class ResumeService {
  constructor(
    private httpService: HttpClient,
    @Inject(LOCALE_ID) private locale: string
  ) {}

  getResume() {
    return this.httpService.get(`${environment.api}/resume?locale=${this.locale}`)
      .map(response => response['data'])
  }

  getResumeFile() {
    return this.httpService.get(`${environment.api}/resume/file?locale=${this.locale}`, { responseType: 'blob' })
      .map(blob => URL.createObjectURL(blob))
  }
}
