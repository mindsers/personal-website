import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ContactComponent } from './contact.component'
import { NO_ERRORS_SCHEMA } from '@angular/core'
import { FormsModule } from '@angular/forms'

describe('ContactComponent', () => {
  let component: ContactComponent
  let fixture: ComponentFixture<ContactComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [FormsModule]
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
