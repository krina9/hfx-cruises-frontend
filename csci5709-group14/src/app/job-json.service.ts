import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class JobJsonService {
	constructor() {}

	jobDetails = [
		{
			id: 1,
			company_name: 'Virgin Cruise',
			title: 'Captain',
			pay: '$80000',
			email: 'virgincruises@gmail.com',
			days: '5 days ago',
			location: 'Halifax',
			company_logo: '../../assets/images/virgin_voyages.jpg',
			about: "Virgin Cruises is a market leader in the cruise tour industry, offering 100,000 tours to customers each year at a low price and convincing them to continue purchasing our trip packages.This company was founded in 1960 with just 10 members, today it has 500 people working in both on- andoff-field positions. The company's mission is to offer excellent customer service at a reasonable cost.",
			responsibility:
				'The organisation is looking for a captain to oversee cruise operations on board, including maintaining staff and passenger safety while at sea. You should be able to delegate tasks to every cruise participant in attendance and ensure that everything runs smoothly.',
			qualification:
				'1.Minimum 5 years of experience,2.Able to communicate in multiple languages,3.Great understanding of the software system used in modern cruise,4.Leadership and fast decision making capabilities',
			perks: 'Excellent work-life balance, as well as housing assistance, company stock, and health insurance of 100,000 CDN that is redeemable at any time.After 15 years of service with our company, all of our employees are entitled to pensions.',
		},
		{
			id: 2,
			company_name: 'Disney Cruises',
			title: 'Captain',
			pay: '$80000',
			employer: 'disneycruises@gmail.com',
			days: '6 days ago',
			location: 'Toronto',
			company_logo: '../../assets/images/Disney_Cruises.png',
			about: "Disney Cruises is a market leader in the cruise tour industry, offering 100,000 tours to customers each year at a low price and convincing them to continue purchasing our trip packages.This company was founded in 1960 with just 10 members, today it has 500 people working in both on- andoff-field positions. The company's mission is to offer excellent customer service at a reasonable cost.",
			responsibility:
				'The organisation is looking for a captain to oversee cruise operations on board, including maintaining staff and passenger safety while at sea. You should be able to delegate tasks to every cruise participant in attendance and ensure that everything runs smoothly.',
			qualification:
				'1.Minimum 5 years of experience,2.Able to communicate in multiple languages,3.Great understanding of the software system used in modern cruise,4.Leadership and fast decision making capabilities',
			perks: 'Excellent work-life balance, as well as housing assistance, company stock, and health insurance of 100,000 CDN that is redeemable at any time.After 15 years of service with our company, all of our employees are entitled to pensions.',
		},
		{
			id: 3,
			company_name: 'Caribbean Cruises',
			title: 'Jr.Captain',
			pay: '$60000',
			employer: 'Caribbean@gmail.com',
			days: '3 days ago',
			description: 'looking for cook on my ship',
			location: 'Halifax',
			company_logo: '../../assets/images/RCL_BIG.png',
			about: "Caribbean Cruises is a market leader in the cruise tour industry, offering 100,000 tours to customers each year at a low price and convincing them to continue purchasing our trip packages.This company was founded in 1960 with just 10 members, today it has 500 people working in both on- andoff-field positions. The company's mission is to offer excellent customer service at a reasonable cost.",
			responsibility:
				'The organisation is looking for a captain to oversee cruise operations on board, including maintaining staff and passenger safety while at sea. You should be able to delegate tasks to every cruise participant in attendance and ensure that everything runs smoothly.',
			qualification:
				'1.Minimum 5 years of experience,2.Able to communicate in multiple languages,3.Great understanding of the software system used in modern cruise,4.Leadership and fast decision making capabilities',
			perks: 'Excellent work-life balance, as well as housing assistance, company stock, and health insurance of 100,000 CDN that is redeemable at any time.After 15 years of service with our company, all of our employees are entitled to pensions.',
		},
		{
			id: 4,
			company_name: 'P&O Cruises',
			title: 'Captain',
			pay: '$40000',
			employer: 'P&OCruises@gmail.com',
			date: '2 days ago',
			location: 'Toronto',
			company_logo: '../../assets/images/P&O.png',
			about: "P&O Cruises is a market leader in the cruise tour industry, offering 100,000 tours to customers each year at a low price and convincing them to continue purchasing our trip packages.This company was founded in 1960 with just 10 members, today it has 500 people working in both on- andoff-field positions. The company's mission is to offer excellent customer service at a reasonable cost.",
			responsibility:
				'The organisation is looking for a captain to oversee cruise operations on board, including maintaining staff and passenger safety while at sea. You should be able to delegate tasks to every cruise participant in attendance and ensure that everything runs smoothly.',
			qualification:
				'1.Minimum 5 years of experience,2.Able to communicate in multiple languages,3.Great understanding of the software system used in modern cruise,4.Leadership and fast decision making capabilities',
			perks: 'Excellent work-life balance, as well as housing assistance, company stock, and health insurance of 100,000 CDN that is redeemable at any time.After 15 years of service with our company, all of our employees are entitled to pensions.',
		},
		{
			id: 5,
			company_name: 'Jack',
			title: 'Cook',
			pay: '$80000',
			employer: 'jack@gmail.com',
			date: '2/1/2023',
			location: 'Halifax',
			company_logo:
				'../../assets/images/josiah-weiss-tthKs4A7XMY-unsplash.jpg',
			about: "Jack Cruises is a market leader in the cruise tour industry, offering 100,000 tours to customers each year at a low price and convincing them to continue purchasing our trip packages.This company was founded in 1960 with just 10 members, today it has 500 people working in both on- andoff-field positions. The company's mission is to offer excellent customer service at a reasonable cost.",
			responsibility:
				'The organisation is looking for a captain to oversee cruise operations on board, including maintaining staff and passenger safety while at sea. You should be able to delegate tasks to every cruise participant in attendance and ensure that everything runs smoothly.',
			qualification:
				'1.Minimum 5 years of experience,2.Able to communicate in multiple languages,3.Great understanding of the software system used in modern cruise,4.Leadership and fast decision making capabilities',
			perks: 'Excellent work-life balance, as well as housing assistance, company stock, and health insurance of 100,000 CDN that is redeemable at any time.After 15 years of service with our company, all of our employees are entitled to pensions.',
		},
	];
}
