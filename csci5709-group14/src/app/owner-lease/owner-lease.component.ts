import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Cruiseowner } from '../service/cruiseowner';

@Component({
	selector: 'app-owner-lease',
	templateUrl: './owner-lease.component.html',
	styleUrls: ['./owner-lease.component.css'],
})
export class OwnerLeaseComponent implements OnInit {
	cruiseowner?: Cruiseowner;
	id = '';
	cruisename = '';
	year = '';
	model = '';
	capacity = 0;
	rooms = 0;
	fromavailability = '';
	toavailability = '';
	firstname = '';
	lastname = '';
	email = '';
	phone = '';
	companyname = '';
	rnumber = '';
	disablebox = false;
	editmydetails = false;
	idFail = false;
	cruisenameFail = false;
	yearFail = false;
	modelFail = false;
	capacityFail = false;
	roomsFail = false;
	fromAvailabilitFail = false;
	toavailabilityFail = false;
	firstnameFail = false;
	lastnameFail = false;
	emailFail = false;
	phoneFail = false;
	cruiseIdError = 'Please enter the Cruise ID.';

	constructor(private readonly router: Router, 
		private readonly http: HttpClient) {}

	ngOnInit() {
		this.id = '';
	}
	onSubmit(f: NgForm) {	
		if(this.id){
			this.http.post("http://localhost:3000/api/cruiseleaseupdate", {
				cruiseID: this.id,
				fromavailability: this.fromavailability,
				toavailability: this.toavailability,
			}).subscribe(response => {
				console.log(response);
			});
			this.router.navigate(['/ownerUpdate']);
		}
		else {
			const cruiseID = Math.random().toString(36).slice(2);
			this.cruiseowner = {
				cruiseID: cruiseID,
				cruisename: this.cruisename,
				year: this.year,
				model: this.model,
				capacity: this.capacity,
				rooms: this.rooms,
				fromavailability: this.fromavailability,
				toavailability: this.toavailability,
				firstname: this.firstname,
				lastname: this.lastname,
				email: this.email,
				phone: this.phone,
				companyname: this.companyname,
				rnumber: this.rnumber
			}
			console.log(this.cruiseowner);
			this.http.post("http://localhost:3000/api/cruiseleaseregistration", this.cruiseowner).subscribe(response => {
				console.log(response);
			});
			this.router.navigate(['/ownerconfirmation']);
		}

	}

	onSubmitlease() {
		if (this.id.length < 1) {
			this.idFail = true;
			this.cruiseIdError = 'Please enter the Cruise ID.';
		} else {
			const cruiseId = {
				cruiseID: this.id
			}
			this.http.post<Cruiseowner>("http://localhost:3000/api/cruiseleasefetch", cruiseId).subscribe(response => {
				this.id = response.cruiseID;
				this.cruisename = response.cruisename;
				this.year = response.year;
				this.model = response.model;
				this.capacity = response.capacity;
				this.rooms = response.rooms;
				this.fromavailability = response.fromavailability;
				this.toavailability = response.toavailability;
				this.firstname = response.firstname;
				this.lastname = response.lastname;
				this.email = response.email;
				this.phone = response.phone;
				this.companyname = response.companyname;
				this.rnumber = response.rnumber;
				
			});
		}
		this.disablebuttons();
	}

	disablebuttons(){
		this.disablebox = true;
	}

	onCancel() {
		const cancelID = {
			cruiseID: this.id
		}
		this.http.post("http://localhost:3000/api/cruiseleasedelete", cancelID).subscribe(response => {
			console.log(response);
		});
		this.router.navigate(['/ownerCancel']);
	}

	refreshErrorPage() {
		this.cruisenameFail = false;
		this.yearFail = false;
		this.modelFail = false;
		this.capacityFail = false;
		this.roomsFail = false;
		this.fromAvailabilitFail = false;
		this.toavailabilityFail = false;
		this.firstnameFail = false;
		this.lastnameFail = false;
		this.emailFail = false;
		this.phoneFail = false;
	}

	checkAlphanumeric(event: any) {
		if (
			(event.keyCode > 47 && event.keyCode < 58) ||
			(event.keyCode > 64 && event.keyCode < 91) ||
			(event.keyCode > 96 && event.keyCode < 123)
		) {
			return true;
		}
		return false;
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
