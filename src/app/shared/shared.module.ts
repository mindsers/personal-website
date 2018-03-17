import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { InstagramService } from './instagram.service'
import { PopinComponent } from './popin/popin.component'

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PopinComponent],
  declarations: [PopinComponent],
  providers: [InstagramService]
})
export class SharedModule { }
