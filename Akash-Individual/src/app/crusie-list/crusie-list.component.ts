import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crusie-list',
  templateUrl: './crusie-list.component.html',
  styleUrls: ['./crusie-list.component.css']
})
export class CrusieListComponent {
  constructor(private router: Router) {
  }

  public onClick(id: number) {
    this.router.navigate(['cruise-details']);
  }
}
