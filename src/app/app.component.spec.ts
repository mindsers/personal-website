import { TestBed, async } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { NO_ERRORS_SCHEMA } from '@angular/core'
import { PopinService } from './shared/popin/popin.service'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: PopinService, useValue: {} }
      ]
    }).compileComponents()
  }))
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))
})
