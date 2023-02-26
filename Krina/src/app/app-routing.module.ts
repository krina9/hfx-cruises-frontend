import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CruiseBookingComponent } from './cruise-booking/cruise-booking.component';
import { CrusieListComponent } from './crusie-list/crusie-list.component';
import { BookingpageComponent } from './bookingpage/bookingpage.component';
import { PaymentpageComponent } from './paymentpage/paymentpage.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

const routes: Routes = [
  {path: '', redirectTo: '/cruiselist', pathMatch: 'full'},
  {path: 'booking/:id', component: CruiseBookingComponent},
  {path: 'cruiselist', component: CrusieListComponent},
  {path: 'bookingpage',component: BookingpageComponent},
  {path: 'paymentpage', component: PaymentpageComponent},
  {path: 'confirmationpage', component: ConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
