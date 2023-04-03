import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { JobDetailsService } from '../services/job-details.service';
import { CarrersService } from '../services/carrers.service';

@Component({
	selector: 'app-cruise-careers',
	templateUrl: './cruise-careers.component.html',
	styleUrls: ['./cruise-careers.component.css'],
})
export class CruiseCareersComponent implements OnInit {
	public constructor(private jsonJobDetails: JobDetailsService, private careersService: CarrersService) { }
	jobControl = new FormControl('');
	locationControl = new FormControl('');
	filteredJob: Observable<string[]> | undefined;
	filteredLocation: Observable<string[]> | undefined;
	job: string | undefined;
	location: string | undefined;
	filterJobDetails: JSON | undefined;
	jobFound: boolean = false;
	totalFoundJob: number | undefined;
	carrersList: any = [];
	filteredLocationOptions: any = [];
	filteredJobOptions: any = [];
	LocationOptions: any = [];
	JobOptions: any = [];
	noJobFound: string ="No job found for above search !!!"
	currentJobOpening: string = "Job seekers have great opportunity to apply for positions on Halifax tour cruises that are associated with our organisation.The job seekers will receive a confirmation email after submitting their applications"



	ngOnInit() {
		this.getJobTitles();
		this.getJobLocations();
		this.careersService.CareersList().subscribe((data: any) => {
			this.carrersList = data;
			this.totalFoundJob = Object.keys(this.carrersList).length;
		});
	}

	onSubmit() {
		console.log('job selected is' + this.job);
		let filterJobdetail: any;
		console.log('job selected is' + this.location);
		this.careersService.CareersList().subscribe((data: any) => {
			this.carrersList = data;
			console.log("career List before filter" + JSON.stringify(this.carrersList));
			this.carrersList = this.carrersList.filter((item: { location: string | undefined; title: string | undefined; }) => {
				if ((this.job != undefined && this.location != undefined) || (this.job != '' && this.location != '')) {
					filterJobdetail =
						item.location == this.location && item.title == this.job;
				}
				if ((this.job == undefined && this.location != undefined) || (this.job == '' && this.location != '')) {
					filterJobdetail = item.location == this.location;
				}
				if ((this.job != undefined && this.location == undefined) || (this.job != '' && this.location == '')) {
					filterJobdetail = item.title == this.job;
				}
				if ((this.job == undefined && this.location == undefined) || (this.job == '' && this.location == '') || (this.job == undefined && this.location == '') || (this.job == '' && this.location == undefined)) {
					console.log("hello its me!!!")
					filterJobdetail = item;
				}
				console.log("filterJobDetails" + filterJobdetail);
				return filterJobdetail;
			});
			console.log("after filter" + JSON.stringify(this.carrersList));
			this.totalFoundJob = Object.keys(this.carrersList).length;
		});
	}

	apply(seletecJob: any) {
		this.jsonJobDetails.jobJson = seletecJob;
		console.log(this.jsonJobDetails.jobJson);
	}
	getCruiseListData() {
		this.careersService.CareersList().subscribe((data: any) => {
			this.carrersList = data;
			this.totalFoundJob = Object.keys(this.carrersList).length;
		});
	}

	getJobTitles() {
		this.careersService.JobTitles().subscribe((data: any) => {
			data.forEach((element: { title: any; }) => {
				this.filteredJobOptions.push(element.title)
			});
			this.filteredJob = this.jobControl.valueChanges.pipe(
				startWith(''),
				map((value) => this._filterJob(value || ''))
			);
		});
	}

	getJobLocations() {
		this.careersService.JobLocations().subscribe((data: any) => {
			data.forEach((element: { location: any; }) => {
				this.filteredLocationOptions.push(element.location)
			});
			this.filteredLocation = this.locationControl.valueChanges.pipe(
				startWith(''),
				map((value) => this._filterLocation(value || ''))
			);
		});

	}

	private _filterJob(value: string): string[] {
		const filterValue = value.toLowerCase();
		console.log("filterValueJob" + filterValue)

		return this.filteredJobOptions.filter((filteredJobOptions: string) =>
			filteredJobOptions.toLowerCase().includes(filterValue)
		);
	}
	private _filterLocation(value: string): string[] {
		const filterValue = value.toLowerCase();
		console.log("filterValueLocation" + filterValue)

		return this.filteredLocationOptions.filter((filteredLocationOptions: string) =>
			filteredLocationOptions.toLowerCase().includes(filterValue)
		);
	}
}
