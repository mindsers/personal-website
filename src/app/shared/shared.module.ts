import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { InstagramService } from './instagram.service'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [InstagramService]
})
export class SharedModule { }
