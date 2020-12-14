import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { NO_ERRORS_SCHEMA } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { ContactComponent } from './contact.component'
import { ContactService } from './contact.service'

describe('ContactComponent', () => {
  let component: ContactComponent
  let fixture: ComponentFixture<ContactComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [FormsModule],
      providers: [{ provide: ContactService, useValue: {} }]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
