import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeedbackComponent } from './feedback/feedback.component';
import { OwnerLeaseComponent } from './owner-lease/owner-lease.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { Payment_detailsComponent } from './payment_details/payment_details.component';

const routes: Routes = [
  { path: 'lease', component: OwnerLeaseComponent },
  { path: 'pinfo', component: PersonalInformationComponent },
  { path: 'payment', component: Payment_detailsComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: '',   redirectTo: '/lease', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
