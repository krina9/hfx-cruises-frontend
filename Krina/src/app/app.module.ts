import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrusieListComponent } from './crusie-list/crusie-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CruiseBookingComponent } from './cruise-booking/cruise-booking.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule,NativeDateModule } from '@angular/material/core';
import { BookingpageComponent } from './bookingpage/bookingpage.component';
import { PaymentpageComponent } from './paymentpage/paymentpage.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    CrusieListComponent,
    CruiseBookingComponent,
    BookingpageComponent,
    PaymentpageComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MatNativeDateModule,
    NativeDateModule,
    MatSliderModule,
    MatDatepickerModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
