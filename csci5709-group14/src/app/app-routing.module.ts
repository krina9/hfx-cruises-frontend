import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CruiesListComponent } from './cruies-list/cruies-list.component';
import { CruiseCareersComponent } from './cruise-careers/cruise-careers.component';
import { EventComponent } from './events/event/event.component';
import { HomepageComponent } from './homepage/homepage.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobFormComponent } from './job-form/job-form.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './sigup/sigup.component';

const routes: Routes = [
	{ path: '', component: HomepageComponent },
	{ path: 'careers', component: CruiseCareersComponent },
	{ path: 'jobdetails', component: JobDetailsComponent },
	{ path: 'jobform', component: JobFormComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'event', component: EventComponent },
	{ path: 'cruiselist', component: CruiesListComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
