import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router} from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  name = "";
  email="";
  phone="";
  feedback = "";
  companyname="";
  nameFail = false;
  emailFail = false;
  phoneFail = false;
  feedbackFail = false;

  constructor(private readonly router: Router) { }

  ngOnInit() {
  }
  onSubmit(f: NgForm) {     
    
  }

  checkNumeric(event: any){
    if(event.keyCode>47 && event.keyCode<58){
      return true;
    }
    return false;
  }
  checkAlpha(event: any){
    if((event.keyCode>64 && event.keyCode<91)||(event.keyCode>96 && event.keyCode<123)){
      return true;
    }
    return false;
  }
}
