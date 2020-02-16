import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { InstagramLinksComponent } from './instagram-links.component'

describe('InstagramLinksComponent', () => {
  let component: InstagramLinksComponent
  let fixture: ComponentFixture<InstagramLinksComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstagramLinksComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramLinksComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
