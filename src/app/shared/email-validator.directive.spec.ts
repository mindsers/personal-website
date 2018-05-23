import { EmailValidatorDirective } from './email-validator.directive'
import { AbstractControl } from '@angular/forms'

describe('EmailValidatorDirective', () => {
  it('should create an instance', () => {
    const directive = new EmailValidatorDirective()
    expect(directive).toBeTruthy()
  })

  describe('#validate()', () => {
    it('should return null when value is an email', () => {
      const directive = new EmailValidatorDirective()

      expect(directive.validate({ value: 'test@test101.co' } as AbstractControl))
        .toBeNull()
    })

    it('should return error when value is not an email', () => {
      const directive = new EmailValidatorDirective()
      const result = directive.validate({ value: 'Coucou' } as AbstractControl)

      expect(Object.keys(result).length).toBeGreaterThan(0)
      expect(result.matchEmail.value).toEqual('Coucou', 'Error matchEmail need to contain the value of the field')
    })
  })
})
