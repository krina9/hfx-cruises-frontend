// Author: Akash Gupta - B00912118 - ak459448@dal.ca

import { Component } from '@angular/core';
import { HomepageService } from '../services/homepage.service';

@Component({
	selector: 'app-homepage',
	templateUrl: './homepage.component.html',
	styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
	sourcesList: any = [];
	destinationList:any=[];

	public constructor(private cruiseDestinationService:HomepageService ) { }

	ngOnInit() {
		this.getCruiseDestination();
		this.getCruiseSource();
	}
	getCruiseSource() {
		this.cruiseDestinationService.CruiseSource().subscribe((data: any) => {
			data.forEach((element: { location: any; }) => {
				this.sourcesList.push(element.location)
			});
		});
		console.log("sources" + this.sourcesList)
	}
	getCruiseDestination() {
		this.cruiseDestinationService.CruiseDestination().subscribe((data: any) => {
			data.forEach((element: { location: any; }) => {
				this.destinationList.push(element.location)
			});
		});
		console.log("destination" + this.destinationList)
		
	}

	happeningsList = [
		{
			img_name: '../../assets/images/newyork.jpg',
			title: 'New york for $900 and under',
			intro: 'Last minute deals',
		},
		{
			img_name: '../../assets/images/newyork.jpg',
			title: 'New york for $900 and under',
			intro: 'Last minute deals',
		},
		{
			img_name: '../../assets/images/newyork.jpg',
			title: 'New york for $900 and under',
			intro: 'Last minute deals',
		},
		{
			img_name: '../../assets/images/newyork.jpg',
			title: 'New york for $900 and under',
			intro: 'Last minute deals',
		},
		{
			img_name: '../../assets/images/newyork.jpg',
			title: 'New york for $900 and under',
			intro: 'Last minute deals',
		},
		{
			img_name: '../../assets/images/newyork.jpg',
			title: 'New york for $900 and under',
			intro: 'Last minute deals',
		},
	];
}
