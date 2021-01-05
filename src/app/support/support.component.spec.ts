import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { SupportComponent } from './support.component'

describe('ResumeComponent', () => {
  let component: SupportComponent
  let fixture: ComponentFixture<SupportComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportComponent ],
      providers: []
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
