import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-cruies-details',
	templateUrl: './cruies-details.component.html',
	styleUrls: ['./cruies-details.component.css'],
})
export class CruiesDetailsComponent {
	gridColumns = 2;
	constructor(private router: Router) {}

	toggleGridColumns() {
		this.gridColumns = this.gridColumns === 3 ? 4 : 3;
	}

	public onClick() {
		this.router.navigate(['personalinfo']);
	}
}
