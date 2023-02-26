import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { JobDetailsService } from '../job-details.service';



@Component({
  selector: 'app-cruise-careers',
  templateUrl: './cruise-careers.component.html',
  styleUrls: ['./cruise-careers.component.css']
})
export class CruiseCareersComponent implements OnInit {

  public constructor(private jsonJobDetails: JobDetailsService) {

  }
  jobControl = new FormControl('');
  locationControl = new FormControl('');
  filteredLocationOptions: string[] = ['Halifax', 'Toronto'];
  filteredJobOptions: string[] = ['Captain', 'Jr.Captain', 'Crew'];
  filteredJob: Observable<string[]> | undefined;
  filteredLocation: Observable<string[]> | undefined;
  job: string | undefined;
  location: string | undefined;
  filterJobDetails: JSON | undefined;
  jobFound: boolean = false;
  totalFoundJob: number | undefined;

  ngOnInit() {
    this.totalFoundJob = Object.keys(this.jobDetails).length;
    this.filteredJob = this.jobControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterJob(value || '')),
    );
    console.log(this.filteredJob);
    this.filteredLocation = this.locationControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterLocation(value || '')),
    );
    console.log(this.filteredLocation);
  }

  private _filterJob(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.filteredJobOptions.filter(filteredJobOptions => filteredJobOptions.toLowerCase().includes(filterValue));
  }
  private _filterLocation(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.filteredLocationOptions.filter(filteredLocationOptions => filteredLocationOptions.toLowerCase().includes(filterValue));
  }

  jobDetails = [
    {
      "id": 1,
      "company_name": "Virgin Cruise",
      "title": "Captain",
      "pay": "$80000",
      "email": "virgincruises@gmail.com",
      "days": "5 days ago",
      "location": "Halifax",
      "type":"Full Time",
      "company_logo": "../../assets/virgin_voyages.jpg",
      "about": "Virgin Cruises is a market leader in the cruise tour industry, offering 100,000 tours to customers each year at a low price and convincing them to continue purchasing our trip packages.This company was founded in 1960 with just 10 members, today it has 500 people working in both on- andoff-field positions. The company's mission is to offer excellent customer service at a reasonable cost.",
      "responsibility": "The organisation is looking for a captain to oversee cruise operations on board, including maintaining staff and passenger safety while at sea. You should be able to delegate tasks to every cruise participant in attendance and ensure that everything runs smoothly.",
      "qualification": "1.Minimum 5 years of experience,2.Able to communicate in multiple languages,3.Great understanding of the software system used in modern cruise,4.Leadership and fast decision making capabilities",
      "perks": "Excellent work-life balance, as well as housing assistance, company stock, and health insurance of 100,000 CDN that is redeemable at any time.After 15 years of service with our company, all of our employees are entitled to pensions."
    },
    {
      "id": 2,
      "company_name": "Disney Cruises",
      "title": "Captain",
      "pay": "$80000",
      "employer": "disneycruises@gmail.com",
      "days": "6 days ago",
      "location": "Toronto",
      "type":"Full Time",
      "company_logo": "../../assets/Disney_Cruises.png",
      "about": "Disney Cruises is a market leader in the cruise tour industry, offering 100,000 tours to customers each year at a low price and convincing them to continue purchasing our trip packages.This company was founded in 1960 with just 10 members, today it has 500 people working in both on- andoff-field positions. The company's mission is to offer excellent customer service at a reasonable cost.",
      "responsibility": "The organisation is looking for a captain to oversee cruise operations on board, including maintaining staff and passenger safety while at sea. You should be able to delegate tasks to every cruise participant in attendance and ensure that everything runs smoothly.",
      "qualification": "1.Minimum 5 years of experience,2.Able to communicate in multiple languages,3.Great understanding of the software system used in modern cruise,4.Leadership and fast decision making capabilities",
      "perks": "Excellent work-life balance, as well as housing assistance, company stock, and health insurance of 100,000 CDN that is redeemable at any time.After 15 years of service with our company, all of our employees are entitled to pensions."
    },
    {
      "id": 3,
      "company_name": "Caribbean Cruises",
      "title": "Jr.Captain",
      "pay": "$60000",
      "employer": "Caribbean@gmail.com",
      "days": "3 days ago",
      "description": "looking for cook on my ship",
      "location": "Halifax",
      "type":"Full Time",
      "company_logo": "../../assets/RCL_BIG.png",
      "about": "Caribbean Cruises is a market leader in the cruise tour industry, offering 100,000 tours to customers each year at a low price and convincing them to continue purchasing our trip packages.This company was founded in 1960 with just 10 members, today it has 500 people working in both on- andoff-field positions. The company's mission is to offer excellent customer service at a reasonable cost.",
      "responsibility": "The organisation is looking for a Jr. Captain to oversee cruise operations on board, including maintaining staff and passenger safety while at sea. You should be able to delegate tasks to every cruise participant in attendance and ensure that everything runs smoothly.",
      "qualification": "1.Minimum 5 years of experience,2.Able to communicate in multiple languages,3.Great understanding of the software system used in modern cruise,4.Leadership and fast decision making capabilities",
      "perks": "Excellent work-life balance, as well as housing assistance, company stock, and health insurance of 100,000 CDN that is redeemable at any time.After 15 years of service with our company, all of our employees are entitled to pensions."

    },
    {
      "id": 4,
      "company_name": "P&O Cruises",
      "title": "Jr.Captain",
      "pay": "$40000",
      "employer": "P&OCruises@gmail.com",
      "date": "2 days ago",
      "location": "Toronto",
      "type":"Full Time",
      "company_logo": "../../assets/P&O.png",
      "about": "P&O Cruises is a market leader in the cruise tour industry, offering 100,000 tours to customers each year at a low price and convincing them to continue purchasing our trip packages.This company was founded in 1960 with just 10 members, today it has 500 people working in both on- andoff-field positions. The company's mission is to offer excellent customer service at a reasonable cost.",
      "responsibility": "The organisation is looking for a Jr. Captain to oversee cruise operations on board, including maintaining staff and passenger safety while at sea. You should be able to delegate tasks to every cruise participant in attendance and ensure that everything runs smoothly.",
      "qualification": "1.Minimum 5 years of experience,2.Able to communicate in multiple languages,3.Great understanding of the software system used in modern cruise,4.Leadership and fast decision making capabilities",
      "perks": "Excellent work-life balance, as well as housing assistance, company stock, and health insurance of 100,000 CDN that is redeemable at any time.After 15 years of service with our company, all of our employees are entitled to pensions."

    },
    {
      "id": 5,
      "company_name": "Jack",
      "title": "Crew",
      "pay": "$80000",
      "employer": "jack@gmail.com",
      "date": "2/1/2023",
      "location": "Halifax",
      "type":"Full Time",
      "company_logo": "../../assets/Jack.jpg",
      "about": "Jack Cruises is a market leader in the cruise tour industry, offering 100,000 tours to customers each year at a low price and convincing them to continue purchasing our trip packages.This company was founded in 1960 with just 10 members, today it has 500 people working in both on- andoff-field positions. The company's mission is to offer excellent customer service at a reasonable cost.",
      "responsibility": "The organisation is looking for a crew to oversee cruise operations on board, including maintaining staff and passenger safety while at sea. You should be able to delegate tasks to every cruise participant in attendance and ensure that everything runs smoothly.",
      "qualification": "1.Minimum 5 years of experience,2.Able to communicate in multiple languages,3.Great understanding of the software system used in modern cruise,4.Leadership and fast decision making capabilities",
      "perks": "Excellent work-life balance, as well as housing assistance, company stock, and health insurance of 100,000 CDN that is redeemable at any time.After 15 years of service with our company, all of our employees are entitled to pensions."

    }
  ]

  onSubmit() {

    this.jobDetails = [
      {
        "id": 1,
        "company_name": "Virgin Cruise",
        "title": "Captain",
        "pay": "$80000",
        "email": "virgincruises@gmail.com",
        "days": "5 days ago",
        "location": "Halifax",
        "type":"Full Time",
        "company_logo": "../../assets/virgin_voyages.jpg",
        "about": "Virgin Cruises is a market leader in the cruise tour industry, offering 100,000 tours to customers each year at a low price and convincing them to continue purchasing our trip packages.This company was founded in 1960 with just 10 members, today it has 500 people working in both on- andoff-field positions. The company's mission is to offer excellent customer service at a reasonable cost.",
        "responsibility": "The organisation is looking for a captain to oversee cruise operations on board, including maintaining staff and passenger safety while at sea. You should be able to delegate tasks to every cruise participant in attendance and ensure that everything runs smoothly.",
        "qualification": "1.Minimum 5 years of experience,2.Able to communicate in multiple languages,3.Great understanding of the software system used in modern cruise,4.Leadership and fast decision making capabilities",
        "perks": "Excellent work-life balance, as well as housing assistance, company stock, and health insurance of 100,000 CDN that is redeemable at any time.After 15 years of service with our company, all of our employees are entitled to pensions."
      },
      {
        "id": 2,
        "company_name": "Disney Cruises",
        "title": "Captain",
        "pay": "$80000",
        "employer": "disneycruises@gmail.com",
        "days": "6 days ago",
        "location": "Toronto",
        "type":"Full Time",
        "company_logo": "../../assets/Disney_Cruises.png",
        "about": "Disney Cruises is a market leader in the cruise tour industry, offering 100,000 tours to customers each year at a low price and convincing them to continue purchasing our trip packages.This company was founded in 1960 with just 10 members, today it has 500 people working in both on- andoff-field positions. The company's mission is to offer excellent customer service at a reasonable cost.",
        "responsibility": "The organisation is looking for a captain to oversee cruise operations on board, including maintaining staff and passenger safety while at sea. You should be able to delegate tasks to every cruise participant in attendance and ensure that everything runs smoothly.",
        "qualification": "1.Minimum 5 years of experience,2.Able to communicate in multiple languages,3.Great understanding of the software system used in modern cruise,4.Leadership and fast decision making capabilities",
        "perks": "Excellent work-life balance, as well as housing assistance, company stock, and health insurance of 100,000 CDN that is redeemable at any time.After 15 years of service with our company, all of our employees are entitled to pensions."
      },
      {
        "id": 3,
        "company_name": "Caribbean Cruises",
        "title": "Jr.Captain",
        "pay": "$60000",
        "employer": "Caribbean@gmail.com",
        "days": "3 days ago",
        "description": "looking for cook on my ship",
        "location": "Halifax",
        "type":"Full Time",
        "company_logo": "../../assets/RCL_BIG.png",
        "about": "Caribbean Cruises is a market leader in the cruise tour industry, offering 100,000 tours to customers each year at a low price and convincing them to continue purchasing our trip packages.This company was founded in 1960 with just 10 members, today it has 500 people working in both on- andoff-field positions. The company's mission is to offer excellent customer service at a reasonable cost.",
        "responsibility": "The organisation is looking for a Jr.Captain to oversee cruise operations on board, including maintaining staff and passenger safety while at sea. You should be able to delegate tasks to every cruise participant in attendance and ensure that everything runs smoothly.",
        "qualification": "1.Minimum 5 years of experience,2.Able to communicate in multiple languages,3.Great understanding of the software system used in modern cruise,4.Leadership and fast decision making capabilities",
        "perks": "Excellent work-life balance, as well as housing assistance, company stock, and health insurance of 100,000 CDN that is redeemable at any time.After 15 years of service with our company, all of our employees are entitled to pensions."

      },
      {
        "id": 4,
        "company_name": "P&O Cruises",
        "title": "Jr.Captain",
        "pay": "$40000",
        "employer": "P&OCruises@gmail.com",
        "date": "2 days ago",
        "location": "Toronto",
        "type":"Full Time",
        "company_logo": "../../assets/P&O.png",
        "about": "P&O Cruises is a market leader in the cruise tour industry, offering 100,000 tours to customers each year at a low price and convincing them to continue purchasing our trip packages.This company was founded in 1960 with just 10 members, today it has 500 people working in both on- andoff-field positions. The company's mission is to offer excellent customer service at a reasonable cost.",
        "responsibility": "The organisation is looking for a Jr.Captain to oversee cruise operations on board, including maintaining staff and passenger safety while at sea. You should be able to delegate tasks to every cruise participant in attendance and ensure that everything runs smoothly.",
        "qualification": "1.Minimum 5 years of experience,2.Able to communicate in multiple languages,3.Great understanding of the software system used in modern cruise,4.Leadership and fast decision making capabilities",
        "perks": "Excellent work-life balance, as well as housing assistance, company stock, and health insurance of 100,000 CDN that is redeemable at any time.After 15 years of service with our company, all of our employees are entitled to pensions."

      },
      {
        "id": 5,
        "company_name": "Jack",
        "title": "Crew",
        "pay": "$80000",
        "employer": "jack@gmail.com",
        "date": "2/1/2023",
        "location": "Halifax",
        "type":"Full Time",
        "company_logo": "../../assets/Jack.jpg",
        "about": "Jack Cruises is a market leader in the cruise tour industry, offering 100,000 tours to customers each year at a low price and convincing them to continue purchasing our trip packages.This company was founded in 1960 with just 10 members, today it has 500 people working in both on- andoff-field positions. The company's mission is to offer excellent customer service at a reasonable cost.",
        "responsibility": "The organisation is looking for a crew to oversee cruise operations on board, including maintaining staff and passenger safety while at sea. You should be able to delegate tasks to every cruise participant in attendance and ensure that everything runs smoothly.",
        "qualification": "1.Minimum 5 years of experience,2.Able to communicate in multiple languages,3.Great understanding of the software system used in modern cruise,4.Leadership and fast decision making capabilities",
        "perks": "Excellent work-life balance, as well as housing assistance, company stock, and health insurance of 100,000 CDN that is redeemable at any time.After 15 years of service with our company, all of our employees are entitled to pensions."

      }
    ]

    console.log("job selected is" + this.job);
    let filterJobdetail: any;
    console.log("job selected is" + this.location);
    this.jobDetails = this.jobDetails.filter((item) => {
      if ((this.job != undefined && this.location != undefined) || (this.job != '' && this.location != '')) {
        filterJobdetail = item.location == this.location && item.title == this.job;
      }
      if ((this.job == undefined && this.location != undefined) || (this.job == '' && this.location != '')) {
        filterJobdetail = item.location == this.location;
      }
      if ((this.job != undefined && this.location == undefined) || (this.job != '' && this.location == '')) {
        filterJobdetail = item.title == this.job;
      }
      if ((this.job == undefined && this.location == undefined) || (this.job == '' && this.location == '')) {
        filterJobdetail=this.jobDetails;
      }
      return filterJobdetail;
    });
    console.log(this.jobDetails);
    this.totalFoundJob = Object.keys(this.jobDetails).length;
  }
  apply(seletecJob: any) {
    this.jsonJobDetails.jobJson = seletecJob;
    console.log(this.jsonJobDetails.jobJson)
  }

}
