import { Injectable, Inject, LOCALE_ID } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { DomSanitizer } from '@angular/platform-browser'

import { map } from 'rxjs/operators'

import { environment } from '../../environments/environment'

@Injectable()
export class ResumeService {
  constructor(
    private httpService: HttpClient,
    @Inject(LOCALE_ID) private locale: string
  ) {}

  getResume() {
    return this.httpService
      .get(`${environment.api}/resume?locale=${this.locale}`)
      .pipe(
        map(response => response['data'])
      )
  }

  getResumeFile() {
    return this.httpService
      .get(`${environment.api}/resume/file?locale=${this.locale}`, { responseType: 'blob' })
      .pipe(
        map(blob => new Blob([blob], { type: 'application/pdf' })),
        map(blob => URL.createObjectURL(blob))
      )
  }
}
