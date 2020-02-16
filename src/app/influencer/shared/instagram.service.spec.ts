import { TestBed, inject } from '@angular/core/testing'

import { InstagramService } from './instagram.service'
import { HttpClient } from '@angular/common/http'

describe('InstagramService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstagramService, { provide: HttpClient, useValue: {} }]
    })
  })

  it('should be created', inject([InstagramService], (service: InstagramService) => {
    expect(service).toBeTruthy()
  }))
})
