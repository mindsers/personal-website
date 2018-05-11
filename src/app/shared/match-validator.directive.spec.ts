import { AbstractControl } from '@angular/forms'

import { MatchValidatorDirective } from './match-validator.directive'

describe('MatchValidatorDirective', () => {
  it('should create an instance', () => {
    const directive = new MatchValidatorDirective()
    expect(directive).toBeTruthy()
  })

  describe('#validate()', () => {
    it('should return null when value match string pattern', () => {
      const directive = new MatchValidatorDirective()
      directive.matchPattern = 'Coucou'

      expect(directive.validate({ value: 'Coucou' } as AbstractControl))
        .toBeNull()
    })

    it('should return one error when value do not match string pattern', () => {
      const directive = new MatchValidatorDirective()
      directive.matchPattern = 'AH ah'

      const result = directive.validate({ value: 'Coucou' } as AbstractControl)
      expect(Object.keys(result).length).toBeGreaterThan(0)
      expect(result.matchPattern.value).toEqual('Coucou', 'Error matchPattern need to contain the value of the field')
    })

    it('should return null when value match regex pattern', () => {
      const directive = new MatchValidatorDirective()
      directive.matchPattern = /^\w+$/

      expect(directive.validate({ value: 'Coucou' } as AbstractControl))
        .toBeNull()
    })

    it('should return one error when value do not match regex pattern', () => {
      const directive = new MatchValidatorDirective()
      directive.matchPattern = /^\d+$/

      const result = directive.validate({ value: 'Coucou' } as AbstractControl)
      expect(Object.keys(result).length).toBeGreaterThan(0)
      expect(result.matchPattern.value).toEqual('Coucou', 'Error matchPattern need to contain the value of the field')
    })
  })
})
