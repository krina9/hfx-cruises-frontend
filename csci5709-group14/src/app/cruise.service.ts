import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CruiseService {

  apiUrl = "http://localhost:3000/api";

  constructor(private http: HttpClient) { }

  getCruiseList() : Observable<any> {
    return this.http.get(this.apiUrl + '/cruiselist/');
  }

  getCruiseById(id: string) : Observable<any> {
    return this.http.get(this.apiUrl + '/cruiselist/' + id);
  }

  getCruiseDetails(id: string) : Observable<any> {
    return this.http.get(this.apiUrl + '/cruisedetail/' + id);
  }
}
