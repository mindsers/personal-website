import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/from'

import { ResumeComponent } from './resume.component'
import { ResumeService } from './resume.service'
import { PopinService } from '../shared/popin/popin.service'
import { DOCUMENT } from '../shared/native-api'

describe('ResumeComponent', () => {
  let component: ResumeComponent
  let fixture: ComponentFixture<ResumeComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeComponent ],
      providers: [
        { provide: ResumeService, useValue: { getResume() { return Observable.from([]) } } },
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
