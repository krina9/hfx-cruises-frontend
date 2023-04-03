import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-event-detials',
	templateUrl: './event-detials.component.html',
	styleUrls: ['./event-detials.component.css'],
})
export class EventDetialsComponent {
	eventDetail = {
		contactDetails: {
			firstName: 'Nani',
			lastName: 'Ba',
			email: 'nab@gmail.com',
			phone: '9029893196',
			_id: '642a313a3d2ea99e6bfec52c',
		},
		event: {
			name: 'Music Night',
			location: 'Halifax',
			date: '2023-04-21T00:00:00.000Z',
			time: '22:39',
			_id: '642a313a3d2ea99e6bfec52d',
		},
		details: {
			description:
				"we're dedicated to providing our clients with exceptional travel packages and land deals. While we offer an extensive range of travel opportunities to various destinations, we acknowledge that we may not always have precisely what you're searching for. That's why we offer tailored vacation packages that cater to your specific needs and budget. Whether you desire a luxurious escape, an adventurous getaway ",
			highlights: ['DJ', 'wgwg', 'wgw'],
			additionalDetails:
				'Our team of experienced travel advisors will work with you to create an unforgettable experience, with personalized itineraries and unparalleled customer service. Let us help you create memories that last a lifetime',
			_id: '642a313a3d2ea99e6bfec52e',
		},
		_id: '642a313a3d2ea99e6bfec52b',
		__v: 0,
	};
	ngOnInit(): void {}
}
