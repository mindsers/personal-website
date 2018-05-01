import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PopinContainerComponent } from './popin-container.component'
import { PopinService } from './popin.service'

describe('PopinComponent', () => {
  let component: PopinContainerComponent
  let fixture: ComponentFixture<PopinContainerComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopinContainerComponent ],
      providers: [
        { provide: PopinService, useValue: { registerContainer() {} } }
      ]
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
