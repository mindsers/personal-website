import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { Observable } from 'rxjs/observable'
import 'rxjs/add/observable/of'
import { ResumeComponent } from './resume.component'
import { ResumeService } from './resume.service'

describe('ResumeComponent', () => {
  let component: ResumeComponent
  let fixture: ComponentFixture<ResumeComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeComponent ],
      providers: [
        { provide: ResumeService, useValue: {
          getExperiences() { return Observable.of([]) },
          getStudies() { return Observable.of([]) },
          getSkills() { return Observable.of([]) }
        } }
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
