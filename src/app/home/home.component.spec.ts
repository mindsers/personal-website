import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of'
import { HomeComponent } from './home.component'
import { NO_ERRORS_SCHEMA } from '@angular/core'
import { InstagramService } from '../shared/instagram.service'

describe('HomeComponent', () => {
  let component: HomeComponent
  let fixture: ComponentFixture<HomeComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: InstagramService, useValue: {
          getRandomPictures() { return Observable.of([]) },
          getUserInfo() { return Observable.of([]) }
        } }
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
