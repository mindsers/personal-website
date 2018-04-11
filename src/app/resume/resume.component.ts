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
    this.resumeService.getResume()
      .subscribe(
        resume => {
          this.experiences = resume['experiences']
          this.displayedExperiences = resume['experiences']

          this.displayedSkills = resume['skills']

          this.displayedStudies = resume['studies']

          this.toogleExperiences(3)
        },
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

  openResumeFile() {
    this.resumeService.getResumeFile()
      .forEach(file => {
        window.open(file)
      })
  }
}

