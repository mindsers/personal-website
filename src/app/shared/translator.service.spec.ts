import { TestBed, inject } from '@angular/core/testing'

import { RuntimeTranslatorService } from './translator.service'

describe('RuntimeTranslatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RuntimeTranslatorService]
    })
  })

  it('should be created', inject([RuntimeTranslatorService], (service: RuntimeTranslatorService) => {
    expect(service).toBeTruthy()
  }))
})
