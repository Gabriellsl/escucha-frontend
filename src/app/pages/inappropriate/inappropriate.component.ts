import { Analyzer } from './../../models/Interfaces';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inappropriate',
  templateUrl: './inappropriate.component.html',
  styleUrls: ['./inappropriate.component.css']
})
export class InappropriateComponent implements OnInit {

  audioResult: Analyzer;
  constructor(private router: Router) {
    //const nav = this.router.getCurrentNavigation();
    //this.audioResult = nav.extras.state.audioResult;
    //console.log(this.audioResult);
   }

   async ngOnInit() {
     this.audioResult = await history.state.audioResult;
  }

  showDetails(){
    this.router.navigate(['details'],{state:{audioResult:this.audioResult}});
  }

}
