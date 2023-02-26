import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CruiseDataService } from '../cruise-data.service';

@Component({
  selector: 'app-cruise-booking',
  templateUrl: './cruise-booking.component.html',
  styleUrls: ['./cruise-booking.component.css']
})
export class CruiseBookingComponent {
  
  cruiseDetails!: any;

  constructor(private route: ActivatedRoute, private router: Router, private dataService: CruiseDataService) { }
  
  ngOnInit(): void {
    const id: any = this.route.snapshot.paramMap.get('id');
    this.cruiseDetails = this.dataService.getCruiseDetailsById(id);
  }

  navigate() {
    this.router.navigate(['bookingpage']);
  }
}
