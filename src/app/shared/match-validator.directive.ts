import { Directive, Input } from '@angular/core'
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms'

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'input[matchPattern]',
  providers: [{provide: NG_VALIDATORS, useExisting: MatchValidatorDirective, multi: true}]
})
export class MatchValidatorDirective implements Validator {
  @Input() matchPattern: RegExp | string

  validate(control: AbstractControl): { [key: string]: any } {
    const pattern = this.matchPattern instanceof RegExp
      ? this.matchPattern
      : new RegExp(this.matchPattern)

    return this.match(pattern, control.value, 'matchPattern')
  }

  protected match(pattern: RegExp, value: string, errorName: string): { [key: string]: any } {
    const error = {
      [errorName]: { value }
    }

    return pattern.test(value) ? null : error
  }
}
