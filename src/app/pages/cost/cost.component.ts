import { CostService } from './../../services/cost.service';
import { Component, OnInit } from '@angular/core';
import { Cost } from 'src/app/models/Interfaces';

@Component({
  selector: 'app-cost',
  templateUrl: './cost.component.html',
  styleUrls: ['./cost.component.css']
})
export class CostComponent implements OnInit {

  cost: Cost = {user:"",length:0,cost:0};

  constructor(private costService: CostService) { }

  async ngOnInit() {
      this.cost = await this.costService.getTotalCost().toPromise();
  }


  getCost(){

  }

}
