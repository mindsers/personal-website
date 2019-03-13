import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { HttpClientModule } from '@angular/common/http'

import { SharedModule } from './shared/shared.module'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { ResumeComponent } from './resume/resume.component'
import { HomeComponent } from './home/home.component'
import { ResumeService } from './resume/resume.service'
import { ContactComponent } from './contact/contact.component'
import { ContactService } from './contact/contact.service'
import { PageNotFoundComponent } from './errors/page-not-found.component'
import { UnknownErrorComponent } from './errors/unknown-error.component'
import { SupportComponent } from './support/support.component'
import { LegalComponent } from './legal/legal.component'

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    HomeComponent,
    ContactComponent,
    PageNotFoundComponent,
    UnknownErrorComponent,
    SupportComponent,
    LegalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [ContactComponent],
  providers: [ResumeService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
