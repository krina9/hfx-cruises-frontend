import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-cruies-list',
	templateUrl: './cruies-list.component.html',
	styleUrls: ['./cruies-list.component.css'],
})
export class CruiesListComponent {
	constructor(private router: Router) {}

	public onClick(id: number) {
		this.router.navigate(['cruisedetails']);
	}
}
