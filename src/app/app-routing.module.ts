import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { MissingComponent } from './components/missing/missing.component';
import { ResumeComponent } from './components/resume/resume.component';
import { WorkComponent } from './components/work/work.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'resume', component:ResumeComponent},
  {path: 'works', component: WorkComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: MissingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
