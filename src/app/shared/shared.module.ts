import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { InstagramService } from './instagram.service'
import { PopinComponent } from './popin/popin.component'
import { StopClickPropagationDirective } from './stop-click-propagation.directive'
import { MatchValidatorDirective } from './match-validator.directive'
import { EmailValidatorDirective } from './email-validator.directive'

@NgModule({
  declarations: [PopinComponent, StopClickPropagationDirective, MatchValidatorDirective, EmailValidatorDirective],
  imports: [CommonModule],
  exports: [PopinComponent, StopClickPropagationDirective, MatchValidatorDirective, EmailValidatorDirective],
  providers: [InstagramService]
})
export class SharedModule { }
