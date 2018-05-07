import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core'

import { ResumeService } from './resume.service'
import { PopinService } from '../shared/popin/popin.service'
import { DOCUMENT } from '../shared/native-api'

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
    @Inject(LOCALE_ID) private locale: string,
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

  toogleExperiences(min = 0) {
    if (this.displayedExperiences.length <= min) {
      this.displayedExperiences = this.experiences

      return
    }

    this.displayedExperiences = this.experiences.slice(0, min)
  }

  openResumeFile() {
    this.resumeService.getResumeFile()
      .subscribe(
        file => {
          const link = this.document.createElement('a')
          link.href = file
          link.download = 'cv_nathanael_cherrier.pdf'

          link.click()
        },
        error => {
          this.popinService
            .openPopin(null, {
              message: this.locale === 'fr'
                ? `Il y a eu une erreur. Nous ne somme pas capable d'ouvrir le CV.`
                : 'An error occured. We are unable to open the resume.'
            })
            .afterClose()
            .subscribe()
        }
      )
  }
}

