import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobApplicationService {

  apiUrl = "http://localhost:3000/api";

  constructor(private http: HttpClient) { }

  jobApplicationForm(data:any): Observable<any> {
    console.log("data"+JSON.stringify(data));
    return this.http.post(this.apiUrl + '/jobApplication/',data);
  }

}
