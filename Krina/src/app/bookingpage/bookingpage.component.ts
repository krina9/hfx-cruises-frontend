import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bookingpage',
  templateUrl: './bookingpage.component.html',
  styleUrls: ['./bookingpage.component.css']
})
export class BookingpageComponent {
  bookingForm: FormGroup;
constructor(private router: Router,private formBuilder: FormBuilder) {
  this.bookingForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', Validators.required],
    address: ['', Validators.required],
    country: ['', Validators.required],
    pincode: ['', Validators.required],
    password: ['', Validators.required]
  });
}
 newPage(){
  this.router.navigate(['paymentpage']);
}
}