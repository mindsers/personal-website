import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { OpenSourcererComponent } from './open-sourcerer.component'

describe('OpenSourcererComponent', () => {
  let component: OpenSourcererComponent
  let fixture: ComponentFixture<OpenSourcererComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenSourcererComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenSourcererComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
