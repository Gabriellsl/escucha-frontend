import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inappropriate',
  templateUrl: './inappropriate.component.html',
  styleUrls: ['./inappropriate.component.css']
})
export class InappropriateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showDetails(){
    this.router.navigate(["details"]);
  }

}
