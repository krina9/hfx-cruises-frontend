import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BACKEND_URL } from './backend-url';

@Injectable({
	providedIn: 'root',
})
export class EventDetailsService {
	apiUrl = BACKEND_URL;

	constructor(private http: HttpClient) {}

	addEventDetail(eventData: any): Observable<any> {
		console.log('eventData', eventData);
		return this.http.post(this.apiUrl + '/addEvent', eventData);
	}
}
