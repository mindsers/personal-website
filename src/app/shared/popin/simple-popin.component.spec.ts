import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { SimplePopinComponent } from './simple-popin.component'
import { POPIN_DATA, POPIN_VIEWREF } from './popin'

describe('SimplePopinComponent', () => {
  let component: SimplePopinComponent
  let fixture: ComponentFixture<SimplePopinComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplePopinComponent ],
      providers: [
        { provide: POPIN_DATA, useValue: {} },
        { provide: POPIN_VIEWREF, useValue: {} }
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplePopinComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
