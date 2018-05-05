import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { DomSanitizer } from '@angular/platform-browser'

import { Observable } from 'rxjs'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/observable/from'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'

import { environment } from '../../environments/environment'

@Injectable()
export class InstagramService {
  constructor(private httpService: HttpClient, private domSanitizer: DomSanitizer) {}

  getRandomPictures(quantity = 10) {
    return this.httpService.get<{ data: InstagramInfo }>(`${environment.api}/instagram`)
      .switchMap(({ data: { pictures } }) => pictures.slice(0, quantity))
      .mergeMap(url => this.httpService.get(url, { responseType: 'blob' }))
      .map(blob => URL.createObjectURL(blob))
      .map(unsafeUrl => this.domSanitizer.bypassSecurityTrustUrl(unsafeUrl))
  }

  getUserInfo() {
    return this.httpService.get<{ data: InstagramInfo }>(`${environment.api}/instagram`)
      .map(({ data: { pictures, ...others } }) => others)
  }
}

interface InstagramInfo {
  pictures: string[]
  followers: number
}
