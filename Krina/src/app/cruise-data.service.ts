import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CruiseDataService {

  cruiseDetails: any = [
    {
      "id": 1,
      "about": " Galapagos Islands are a unique and fascinating destination,home to some of the world's most unusual wildlife.You can snorkel with sea turtles and penguins,hike through volcanic landscapes, and observe giant tortoises up close.With strict conservation efforts in place, a visit to the Galapagos is a truly responsible way to experience the natural world.",
      "destination": "Alaska",
      "departureDate": "July 21, 2023",
      "arrivalDateAtHalifaxPort": "August 29, 2023",
      "facilities": "Swimming Pool, DJ night, Private Pool, Candle Light Dinner, Different Types of Cusine.",
      "rooms": "Single, Double, Suite, Balcony, Room with Swimming pool.",
      "deals": "Save upto 50 % if booked in next 10 days.",
      "thumbnail": "assets/Alaska.jpg"
    },
    {
      "id": 2,
      "about": "Norwegian Cruise Line has its own private island destination, Great Stirrup Cay in the Bahamas.The island features pristine beaches, crystal-clear waters, and a variety of activities such as snorkeling, kayaking, and parasailing.This is an exclusive destination only accessible to Norwegian Cruise Line passengers, adding an extra layer of luxury and exclusivity to the vacation experience.",
      "destination": "Rome or Norway",
      "departureDate": "June 29,2023",
      "arrivalDateAtHalifaxPort": "July 21,2023",
      "facilities": "Swimming Pool,karaoke,Latin Night,Candle Light Dinner,Different Types of Cusine.",
      "rooms": "Single,Double,Suite,Balcony,Room with Swimming pool.",
      "deals": "Save upto 10% if booked in next 10 days.",
      "thumbnail": "assets/Rome.jpg"
    },
    {
      "id": 3,
      "about": "Virgin Voyages offers passengers a rockstar treatment with luxurious amenities and experiences.Passengers can enjoy private cabanas, spa treatments, and Michelin-starred dining options.The line also has a partnership with tattoo artist and TV personality Ink Master, where passengers can get tattoos and piercings on board.",
      "destination": "Bermuda or Bahamas",
      "departureDate": "May 15,2023",
      "arrivalDateAtHalifaxPort": "June 26,2023",
      "facilities": "Swimming Pool,Dance Floor,Games Night,Private Pool,Candle Light Dinner,Different Types of Cusine.",
      "rooms": "Single,Double,Suite,Balcony,Room with Swimming pool.",
      "deals": "Save upto 5% if booked in next 5 days.",
      "thumbnail": "assets/Bermuda.jpg"
    }];

  constructor() { }

  getAllCruiseDetails(): any {
    return this.cruiseDetails;
  }

  getCruiseDetailsById(id: string) : any {
    return this.cruiseDetails.find((x: any) => x.id == id);
  }
}
