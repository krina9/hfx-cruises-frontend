// Author: Akash Gupta - B00912118 - ak459448@dal.ca

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {


  apiUrl = "http://localhost:3000/api";

  constructor(private http: HttpClient) { }

  CruiseSource(): Observable<any> {
    return this.http.get(this.apiUrl + '/cruiseSource/');
  }

  CruiseDestination(): Observable<any> {
    return this.http.get(this.apiUrl + '/cruiseDestination/');
  }
}
