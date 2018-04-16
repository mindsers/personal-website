import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { DomSanitizer } from '@angular/platform-browser'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/from'
import 'rxjs/add/observable/of'

import { environment } from '../../environments/environment'

@Injectable()
export class ResumeService {
  constructor(private httpService: HttpClient) {}

  getResume() {
    return this.httpService.get(`${environment.api}/resume`)
      .map(response => response['data'])
  }

  getResumeFile() {
    return this.httpService.get(`${environment.api}/resume/file`, { responseType: 'blob' })
      .map(blob => URL.createObjectURL(blob))
  }
}
