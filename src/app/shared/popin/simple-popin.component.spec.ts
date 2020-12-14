import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { SimplePopinComponent } from './simple-popin.component'
import { POPIN_DATA, POPIN_VIEWREF } from './popin'
import { PopinContainerComponent } from './popin-container.component'

describe('SimplePopinComponent', () => {
  let component: SimplePopinComponent
  let fixture: ComponentFixture<SimplePopinComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplePopinComponent ],
      providers: [
        { provide: POPIN_DATA, useValue: {} },
        { provide: POPIN_VIEWREF, useValue: { close: jasmine.createSpy('close') } }
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

  describe('#handleClick()', () => {
    it('should call close function', () => {
      const popinRef = TestBed.get(POPIN_VIEWREF) as PopinContainerComponent
      component.handleClick(null)

      expect(popinRef.close).toHaveBeenCalled()
    })
  })
})
