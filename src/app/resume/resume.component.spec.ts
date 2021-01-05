import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { from } from 'rxjs'

import { ResumeComponent } from './resume.component'
import { ResumeService } from './resume.service'
import { PopinService } from '../shared/popin/popin.service'
import { DOCUMENT } from '../shared/native-api'

describe('ResumeComponent', () => {
  let component: ResumeComponent
  let fixture: ComponentFixture<ResumeComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeComponent ],
      providers: [
        { provide: ResumeService, useValue: { getResume() { return from([]) } } },
        { provide: PopinService, useValue: {} },
        { provide: DOCUMENT, useValue: {} }
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
