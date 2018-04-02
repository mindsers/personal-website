import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PopinContainerComponent } from './popin-container.component'

describe('PopinComponent', () => {
  let component: PopinContainerComponent
  let fixture: ComponentFixture<PopinContainerComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopinContainerComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PopinContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
