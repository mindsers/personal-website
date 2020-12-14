import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { PopinContainerComponent } from './popin-container.component'
import { PopinService } from './popin.service'

describe('PopinComponent', () => {
  let component: PopinContainerComponent
  let fixture: ComponentFixture<PopinContainerComponent>

  beforeEach(waitForAsync(() => {
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

  describe('#open()', () => {
    it('should make popup visible when called', () => {
      expect(component.isVisible).toBeFalsy()
      component.open()
      expect(component.isVisible).toBeTruthy()
    })
  })

  describe('#close()', () => {
    it('should make popup hidden when called', () => {
      component.open()
      expect(component.isVisible).toBeTruthy()
      component.close(null)
      expect(component.isVisible).toBeFalsy()
    })

    it('should emit args via observable of open methode', () => {
      const wantedValue = 'Bla'

      component.open().subscribe(value => expect(value).toEqual(wantedValue))
      component.close(wantedValue)
    })
  })
})
