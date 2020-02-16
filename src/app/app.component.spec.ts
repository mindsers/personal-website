import { TestBed, async } from '@angular/core/testing'
import { NO_ERRORS_SCHEMA } from '@angular/core'

import { AppComponent } from './app.component'
import { PopinService } from './shared/popin/popin.service'
import { ContactComponent } from './contact/contact.component'

describe('AppComponent', () => {
  const popinServiceMock = { openPopin: jasmine.createSpy('openPopin') }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: PopinService, useValue: popinServiceMock }
      ]
    }).compileComponents()
  }))

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))

  describe('#handleOnContactButtonClick()', () => {
    it('should open contact popin', () => {
      const fixture = TestBed.createComponent(AppComponent)
      const app = fixture.debugElement.componentInstance

      popinServiceMock.openPopin.and.returnValue({ afterClose: () => ({ subscribe: () => {} }) })

      app.handleOnContactButtonClick()

      expect(popinServiceMock.openPopin).toHaveBeenCalledWith(ContactComponent)
    })
  })
})
