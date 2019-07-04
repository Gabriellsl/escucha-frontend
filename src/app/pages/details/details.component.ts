import { Car } from './../../models/Interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  cars: Car[];
  // car: Car;
  // contentOrderBy;
  

  constructor() {

    this.cars = [
      {vin:"a",year:"d"},
      {vin:"b",year:"c"},
      {vin:"c",year:"b"},
      {vin:"d",year:"a"},

    ]

    console.log(this.cars);
   }




  ngOnInit() {
  }

}
