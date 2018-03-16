import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { DomSanitizer } from '@angular/platform-browser'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/from'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'

@Injectable()
export class InstagramService {
  private followersCount = 3730
  private pictureIds = [
    'BfITPgrnrT8', 'BdngTceHpte', 'BgV4SKRB6Vx', 'Bfgq-6rnZCr', 'BdLHxTQHwNn',
    'BdNsHTHnvuX', 'BZO7XQLHoG4', 'BZn3bPfHy4m', 'BYSuD85nOV1', 'BZ1mpcYHU33',
    'BaCfM6dn43e', 'Ba7KIbCnwlj', 'Bes7VTiHrjx', 'BeI4nWXHpO1', 'BcDOIzWHnAP'
  ]

  constructor(private httpService: HttpClient, private domSanitizer: DomSanitizer) {}

  getRandomPictures(quantity = 10) {
    const pictureIds = this.pictureIds
      .sort((a, b) => 0.5 - Math.random())
      .slice(0, quantity)

    return Observable.from(pictureIds)
      .mergeMap(id => this.httpService.get(`https://www.instagram.com/p/${id}/media`, { responseType: 'blob' }))
      .map(blob => URL.createObjectURL(blob))
      .map(unsafeUrl => this.domSanitizer.bypassSecurityTrustUrl(unsafeUrl))
  }

  getUserInfo() {
    return Observable.of({
      username: 'mindsers.it',
      followers: this.followersCount
    })
  }
}
