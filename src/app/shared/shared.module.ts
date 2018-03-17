import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { InstagramService } from './instagram.service'
import { PopinComponent } from './popin/popin.component'
import { StopClickPropagationDirective } from './stop-click-propagation.directive'

@NgModule({
  declarations: [PopinComponent, StopClickPropagationDirective],
  imports: [CommonModule],
  exports: [PopinComponent, StopClickPropagationDirective],
  providers: [InstagramService]
})
export class SharedModule { }
