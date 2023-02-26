import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CruiseCareersComponent } from './cruise-careers/cruise-careers.component';
import { CrusieListComponent } from './crusie-list/crusie-list.component';
import { DetailsComponent } from './details/details.component';
import { HomepageComponent } from './homepage/homepage.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobFormComponent } from './job-form/job-form.component';

const routes: Routes = [
  { path:'', component:HomepageComponent},
  { path:'careers', component:CruiseCareersComponent},
  { path:'jobdetails', component:JobDetailsComponent},
  { path:'jobform', component:JobFormComponent},
  {path:'cruise-list',component:CrusieListComponent},
  {path:'cruise-details',component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
