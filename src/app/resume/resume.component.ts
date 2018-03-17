import { Component, OnInit } from '@angular/core'

import { ResumeService } from './resume.service'

@Component({
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  displayedExperiences = []
  displayedStudies = []
  displayedSkills = []

  private experiences = []

  constructor(private resumeService: ResumeService) {}

  ngOnInit() {
    this.resumeService.getExperiences()
      .subscribe(
        experiences => {
          this.experiences = experiences
          this.displayedExperiences = experiences

          this.toogleExperiences(3)
        },
        console.error
      )

    this.resumeService.getStudies()
      .subscribe(
        studies => this.displayedStudies = studies,
        console.error
      )

    this.resumeService.getSkills()
      .subscribe(
        skills => this.displayedSkills = skills,
        console.error
      )
  }

  toogleExperiences(min = 0) {
    if (this.displayedExperiences.length <= min) {
      this.displayedExperiences = this.experiences

      return
    }

    this.displayedExperiences = this.experiences.slice(0, min)
  }
}

