import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-paymentpage',
  templateUrl: './paymentpage.component.html',
  styleUrls: ['./paymentpage.component.css']
})
export class PaymentpageComponent implements OnInit {
  paymentForm!: FormGroup;
  months: { value: string; viewValue: string }[] = [];
  years: { value: string; viewValue: string }[] = [];

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.paymentForm = this.fb.group({ 
      cardNumber: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      cardholderName: ['', [Validators.required]],
      expirationMonth: ['', [Validators.required]],
      expirationYear: ['', [Validators.required]],
      cvv: ['', [Validators.required, Validators.pattern('[0-9]*')]]
    });
    for (let i = 1; i <= 12; i++) {
      const month = i < 10 ? '0' + i.toString() : i.toString();
      this.months.push({ value: month, viewValue: month });
    }

    const currentYear = new Date().getFullYear();
    for (let i = 0; i < 10; i++) {
      const year = (currentYear + i).toString();
      this.years.push({ value: year, viewValue: year });
    }
  }

  nextPage() {
    this.router.navigate(['confirmationpage']);
  }

}
