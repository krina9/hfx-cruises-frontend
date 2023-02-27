import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
	selector: 'app-personal-information',
	templateUrl: './personal-information.component.html',
	styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
	name = '';
	dob = '';
	email = '';
	phone = '';
	address = '';

	nameFail = false;
	dobFail = false;
	emailFail = false;
	phoneFail = false;
	addressFail = false;

	constructor(private readonly router: Router) {}

	ngOnInit() {}
	onSubmit(f: NgForm) {
		this.router.navigate(['paymentdetails']);
	}

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
