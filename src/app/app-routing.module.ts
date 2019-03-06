import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { ResumeComponent } from './resume/resume.component'
import { ContactComponent } from './contact/contact.component'
import { PageNotFoundComponent } from './errors/page-not-found.component'
import { UnknownErrorComponent } from './errors/unknown-error.component'
import { SupportComponent } from './support/support.component'

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'resume', component: ResumeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'support', component: SupportComponent },
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
