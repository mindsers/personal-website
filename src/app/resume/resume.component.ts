import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core'

import { ResumeService } from './resume.service'
import { PopinService } from '../shared/popin/popin.service'
import { DOCUMENT } from '../shared/native-api'
import { RuntimeTranslatorService } from '../shared/translator/translator.service'

@Component({
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  displayedExperiences = []
  displayedStudies = []
  displayedSkills = []

  private experiences = []

  constructor(
    private resumeService: ResumeService,
    private popinService: PopinService,
    private translator: RuntimeTranslatorService,
    @Inject(DOCUMENT) private document: Document
  ) {}

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

  toogleExperiences(min = 0): void {
    if (this.displayedExperiences.length <= min) {
      this.displayedExperiences = this.experiences

      return
    }

    this.displayedExperiences = this.experiences.slice(0, min)
  }

  openResumeFile(): void {
    this.resumeService.getResumeFile()
      .subscribe(
        file => {
          const link = this.document.createElement('a')
          link.href = file
          link.download = 'cv_nathanael_cherrier.pdf'

          link.click()
        },
        error => {
          this.popinService.openPopin(null, {
            message: this.translator.translate('resume.file.error')
          })
        }
      )
  }
}

