// Author: Harsh Vaghani - B00923828 - harsh.vaghani@dal.ca

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-event-form',
	templateUrl: './event-form.component.html',
	styleUrls: ['./event-form.component.css'],
})
export class EventFormComponent implements OnInit {
	public personaldetails = new FormGroup({
		first_name: new FormControl(''),
		last_name: new FormControl(''),
	});

	public contactdetails = new FormGroup({
		email: new FormControl(''),
		phone: new FormControl(''),
	});

	public bookingdetails = new FormGroup({
		city: new FormControl(''),
		date: new FormControl(''),
	});

	public eventdetails = new FormGroup({
		event: new FormControl(''),
		guests: new FormControl(''),
	});

	public additionaldetails = new FormGroup({
		extra: new FormControl(''),
	});

	ngOnInit() {}
}
