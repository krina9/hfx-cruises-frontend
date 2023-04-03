import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rentlist',
  templateUrl: './rentlist.component.html',
  styleUrls: ['./rentlist.component.css']
})
export class RentlistComponent {
  constructor(private route : Router){}

  ngOnInit(): void {

  }

  goTobook(){
    this.route.navigate(["book"]);
  }

gridColumns = 3;

toggleGridColumns() {
  this.gridColumns = this.gridColumns === 3 ? 4 : 3;
}

title = 'halifaxcruise';
boats = [{
  name : "Carnival Cruise Line International",
  port : "Halifax",
  description : "string",
  image : "https://i.insider.com/5a996be98d60262b008b457d?width=700",
  price : 20
},
{
  name : "Carnival Cruise Line International",
  port : "Halifax",
  description : "string",
  image : "https://www.travelandleisure.com/thmb/PIrrNVmeeMvIhVqmFR2EWCrSug4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rc-wonder-of-the-seas-sunset-aerial-LRGSTSHIP0422-8230b27121c3438b9984b9dc63877937.jpg",
  price : 20
},{
  name : "Carnival Cruise Line International",
  port : "Halifax",
  description : "string",
  image : "https://www.travelandleisure.com/thmb/PIrrNVmeeMvIhVqmFR2EWCrSug4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rc-wonder-of-the-seas-sunset-aerial-LRGSTSHIP0422-8230b27121c3438b9984b9dc63877937.jpg",
  price : 20
},{
  name : "Carnival Cruise Line International",
  port : "Halifax",
  description : "string",
  image : "https://www.travelandleisure.com/thmb/PIrrNVmeeMvIhVqmFR2EWCrSug4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rc-wonder-of-the-seas-sunset-aerial-LRGSTSHIP0422-8230b27121c3438b9984b9dc63877937.jpg",
  price : 20
},{
  name : "Carnival Cruise Line International",
  port : "Halifax",
  description : "string",
  image : "https://www.travelandleisure.com/thmb/PIrrNVmeeMvIhVqmFR2EWCrSug4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rc-wonder-of-the-seas-sunset-aerial-LRGSTSHIP0422-8230b27121c3438b9984b9dc63877937.jpg",
  price : 20
},{
  name : "Carnival Cruise Line International",
  port : "Halifax",
  description : "string",
  image : "https://www.travelandleisure.com/thmb/PIrrNVmeeMvIhVqmFR2EWCrSug4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rc-wonder-of-the-seas-sunset-aerial-LRGSTSHIP0422-8230b27121c3438b9984b9dc63877937.jpg",
  price : 20
},{
  name : "Carnival Cruise Line International",
  port : "Halifax",
  description : "string",
  image : "https://www.travelandleisure.com/thmb/PIrrNVmeeMvIhVqmFR2EWCrSug4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rc-wonder-of-the-seas-sunset-aerial-LRGSTSHIP0422-8230b27121c3438b9984b9dc63877937.jpg",
  price : 20
},{
  name : "Carnival Cruise Line International",
  port : "Halifax",
  description : "string",
  image : "https://www.travelandleisure.com/thmb/PIrrNVmeeMvIhVqmFR2EWCrSug4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rc-wonder-of-the-seas-sunset-aerial-LRGSTSHIP0422-8230b27121c3438b9984b9dc63877937.jpg",
  price : 20
},{
  name : "Carnival Cruise Line International",
  port : "Halifax",
  description : "string",
  image : "https://www.travelandleisure.com/thmb/PIrrNVmeeMvIhVqmFR2EWCrSug4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rc-wonder-of-the-seas-sunset-aerial-LRGSTSHIP0422-8230b27121c3438b9984b9dc63877937.jpg",
  price : 20
},{
  name : "Carnival Cruise Line International",
  port : "Halifax",
  description : "string",
  image : "https://www.travelandleisure.com/thmb/PIrrNVmeeMvIhVqmFR2EWCrSug4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rc-wonder-of-the-seas-sunset-aerial-LRGSTSHIP0422-8230b27121c3438b9984b9dc63877937.jpg",
  price : 20
}];

}
