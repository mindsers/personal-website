import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'


import { ServiceWorkerModule } from '@angular/service-worker'
import { AppComponent } from './app.component'

import { environment } from '../environments/environment'
import { SharedModule } from './shared/shared.module'
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
