import { Component } from '@angular/core';

@Component({
	selector: 'app-homepage',
	templateUrl: './homepage.component.html',
	styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
	sources: string[] = ['Halifax', 'Toronto'];
	destinations: string[] = ['New York', 'Vancouver', 'Montreal'];
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
