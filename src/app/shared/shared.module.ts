import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { InstagramService } from './instagram.service'
import { PopinContainerComponent } from './popin/popin-container.component'
import { StopClickPropagationDirective } from './stop-click-propagation.directive'
import { MatchValidatorDirective } from './match-validator.directive'
import { EmailValidatorDirective } from './email-validator.directive'
import { PopinService } from './popin/popin.service'

@NgModule({
  declarations: [
    PopinContainerComponent,
    StopClickPropagationDirective,
    MatchValidatorDirective,
    EmailValidatorDirective
  ],
  imports: [CommonModule],
  exports: [
    PopinContainerComponent,
    StopClickPropagationDirective,
    MatchValidatorDirective,
    EmailValidatorDirective
  ],
  providers: [InstagramService, PopinService]
})
export class SharedModule {}
