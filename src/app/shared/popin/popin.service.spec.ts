import { TestBed, inject } from '@angular/core/testing'

import { PopinService } from './popin.service'

describe('PopinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopinService]
    })
  })

  it('should be created', inject([PopinService], (service: PopinService) => {
    expect(service).toBeTruthy()
  }))
})
