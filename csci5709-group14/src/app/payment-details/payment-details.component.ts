import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-payment-details',
	templateUrl: './payment-details.component.html',
	styleUrls: ['./payment-details.component.css'],
})
export class PaymentDetailsComponent {
	cardnumber = '';
	name = '';
	cvv = '';
	expdate = '';
	cvvFail = false;
	nameFail = false;
	cardnumberFail = false;
	expdateFail = false;
	cruiseIdError = 'Please enter the Cruise ID.';

	constructor(private readonly router: Router) {}

	ngOnInit() {}
	onSubmit(f: NgForm) {}

	checkNumeric(event: any) {
		if (event.keyCode > 47 && event.keyCode < 58) {
			return true;
		}
		return false;
	}
	checkAlpha(event: any) {
		if (
			(event.keyCode > 64 && event.keyCode < 91) ||
			(event.keyCode > 96 && event.keyCode < 123)
		) {
			return true;
		}
		return false;
	}
}
