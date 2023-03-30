import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CruiseCareersComponent } from './cruise-careers/cruise-careers.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';

import { JobDetailsService } from './services/job-details.service';
import { FooterComponent } from './footer/footer.component';
import { JobFormComponent } from './job-form/job-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { HomepageComponent } from './homepage/homepage.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material/material.module';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { SignupComponent } from './sigup/sigup.component';
import { EventContactComponent } from './events/event-contact/event-contact.component';
import { EventFormComponent } from './events/event-form/event-form.component';
import { EventSubscribeComponent } from './events/event-subscribe/event-subscribe.component';
import { EventHomeComponent } from './events/event-home/event-home.component';
import { EventComponent } from './events/event/event.component';
import { CruiesListComponent } from './cruies-list/cruies-list.component';
import { CruiesDetailsComponent } from './cruies-details/cruies-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OwnerLeaseComponent } from './owner-lease/owner-lease.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PackageListComponent } from './package-list/package-list.component';
import { PackageDetailsComponent } from './package-details/package-details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [			
		AppComponent,
		CruiseCareersComponent,
		JobDetailsComponent,
		FooterComponent,
		JobFormComponent,
		HomepageComponent,
		LoginComponent,
		NavHeaderComponent,
		SignupComponent,
		EventContactComponent,
		EventFormComponent,
		EventSubscribeComponent,
		EventHomeComponent,
		EventComponent,
		CruiesListComponent,
		CruiesDetailsComponent,
		OwnerLeaseComponent,
		PaymentDetailsComponent,
		PersonalInformationComponent,
      FeedbackComponent,
      PackageListComponent,
      PackageDetailsComponent
   ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		MaterialModule,
		MatAutocompleteModule,
		FormsModule,
		ReactiveFormsModule,
		MaterialModule,
		MdbCarouselModule,
		FlexLayoutModule,
		HttpClientModule
	],
	providers: [JobDetailsService],
	bootstrap: [AppComponent],
})
export class AppModule {}
