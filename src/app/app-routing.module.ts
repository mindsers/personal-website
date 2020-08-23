import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { ResumeComponent } from './resume/resume.component'
import { ContactComponent } from './contact/contact.component'
import { PageNotFoundComponent } from './errors/page-not-found.component'
import { UnknownErrorComponent } from './errors/unknown-error.component'
import { SupportComponent } from './support/support.component'
import { LegalComponent } from './legal/legal.component'
import { InstagramLinksComponent } from './influencer/instagram-links.component'
import { OpenSourcererComponent } from './open-sourcerer/open-sourcerer.component'

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'legal', component: LegalComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'support', component: SupportComponent },
  { path: 'open-sourcerer', component: OpenSourcererComponent },
  { path: 'instalinks', component: InstagramLinksComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '500', component: UnknownErrorComponent },
  { path: '**', redirectTo: '404' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
