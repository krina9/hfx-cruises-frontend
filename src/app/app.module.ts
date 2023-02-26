import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OwnerLeaseComponent } from './owner-lease/owner-lease.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { Payment_detailsComponent } from './payment_details/payment_details.component';
import { FeedbackComponent } from './feedback/feedback.component';

@NgModule({
  declarations: [				
    AppComponent,
      OwnerLeaseComponent,
      PersonalInformationComponent,
      Payment_detailsComponent,
      FeedbackComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
