import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  sources: string[] = ['Halifax', 'Toronto'];
  destinations: string[] = ['New York', 'Vancouver','Montreal'];
  happeningsList=[
    {
      "img_name":"../../assets/newyork.jpg",
      "title":"New york for $900 and under",
      "intro":"Last minute deals"
    },
    {
      "img_name":"../../assets/newyork.jpg",
      "title":"New york for $900 and under",
      "intro":"Last minute deals"
    },
    {
      "img_name":"../../assets/newyork.jpg",
      "title":"New york for $900 and under",
      "intro":"Last minute deals"
    },
    {
      "img_name":"../../assets/newyork.jpg",
      "title":"New york for $900 and under",
      "intro":"Last minute deals"
    },
    {
      "img_name":"../../assets/newyork.jpg",
      "title":"New york for $900 and under",
      "intro":"Last minute deals"
    },
    {
      "img_name":"../../assets/newyork.jpg",
      "title":"New york for $900 and under",
      "intro":"Last minute deals"
    }
]

cruiseDetails = [
  {
    "cruise_id": 1,
    "company_name": "Royal Caribbean Cruise",
    "company_logo": "../../assets/1.jpg",
    "about": "Embark on an adventure of a lifetime with Royal Caribbean Cruise. With destinations all over the world, you can discover breathtaking landscapes, explore vibrant cultures, and indulge in world-class cuisine on board our luxurious ships.",
  },
  {
    "cruise_id": 2,
    "company_name": "Norwegian Cruise",
    "company_logo": "../../assets/2.jpg",
    "about": "Embark on an adventure of a lifetime with Norwegian Cruise. With destinations all over the world, you can discover breathtaking landscapes, explore vibrant cultures, and indulge in world-class cuisine on board our luxurious ships.",
  },
  {
    "cruise_id": 3,
    "company_name": "Virgin Voyages",
    "company_logo": "../../assets/3.jpg",
    "about": "Embark on an adventure of a lifetime with Virgin Cruise. With destinations all over the world, you can discover breathtaking landscapes, explore vibrant cultures, and indulge in world-class cuisine on board our luxurious ships.",
  }
]
}
