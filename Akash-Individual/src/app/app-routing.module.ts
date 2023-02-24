import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CruiseCareersComponent } from './cruise-careers/cruise-careers.component';
import { HomepageComponent } from './homepage/homepage.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobFormComponent } from './job-form/job-form.component';

const routes: Routes = [
  { path:'', component:HomepageComponent},
  { path:'careers', component:CruiseCareersComponent},
  { path:'jobdetails', component:JobDetailsComponent},
  { path:'jobform', component:JobFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
