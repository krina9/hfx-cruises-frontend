import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CruisseLeaseService {

  id: String = '';

  constructor() { 

  }

  getId(){
    console.log(this.id + 'k');
    return this.id;
  }

  setId(id: String){
    console.log(this.id + 'a');
    this.id = id;
  }

}
