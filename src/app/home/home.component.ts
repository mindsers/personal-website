import { Component, OnInit } from '@angular/core'
import { SafeUrl } from '@angular/platform-browser'

import { InstagramService } from '../influencer/shared/instagram.service'

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  instagramUrls: SafeUrl[] = []
  instagramFollowersCount: number = null
  postCount: number = null
  ossProjectCount: number = null

  constructor(private instagramService: InstagramService) { }

  ngOnInit() {
    this.instagramService
      .getRandomPictures(3)
      .subscribe(
        imageUrl => this.instagramUrls.push(imageUrl),
        console.error
      )

    this.instagramService
      .getUserInfo()
      .subscribe(
        user => this.instagramFollowersCount = user.followers,
        console.error
      )

    this.postCount = 160
    this.ossProjectCount = 3
    this.techInterestDuration = (new Date()).getYear() - 2005
  }
}
