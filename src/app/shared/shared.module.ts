import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { InstagramService } from './instagram.service'
import { PopinContainerComponent } from './popin/popin-container.component'
import { StopClickPropagationDirective } from './stop-click-propagation.directive'
import { MatchValidatorDirective } from './match-validator.directive'
import { EmailValidatorDirective } from './email-validator.directive'
import { PopinService } from './popin/popin.service'
import { SimplePopinComponent } from './popin/simple-popin.component'
import { WINDOW, DOCUMENT } from './native-api'

@NgModule({
  declarations: [
    PopinContainerComponent,
    StopClickPropagationDirective,
    MatchValidatorDirective,
    EmailValidatorDirective,
    SimplePopinComponent
  ],
  imports: [CommonModule],
  exports: [
    PopinContainerComponent,
    StopClickPropagationDirective,
    MatchValidatorDirective,
    EmailValidatorDirective
  ],
  entryComponents: [SimplePopinComponent],
  providers: [
    InstagramService,
    PopinService,
    { provide: WINDOW, useValue: window },
    { provide: DOCUMENT, useValue: window.document }
  ]
})
export class SharedModule {}
