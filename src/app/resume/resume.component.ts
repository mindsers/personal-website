import { Component, OnInit } from '@angular/core'

import { ResumeService } from './resume.service'

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  displayedExperiences = []

  private experiences = []

  constructor(private resumeService: ResumeService) {}

  ngOnInit() {
    this.resumeService.getExperiences()
      .subscribe(
        experiences => {
          this.experiences = experiences
          this.displayedExperiences = this.experiences.slice(0, 3)
        },
        console.error
      )
  }

  toogleExperiences() {
    if (this.displayedExperiences.length <= 3) {
      this.displayedExperiences = this.experiences

      return
    }

    this.displayedExperiences = this.experiences.slice(0, 3)
  }
}

