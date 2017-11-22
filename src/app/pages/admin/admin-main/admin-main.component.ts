import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent implements OnInit {

  public step = 0;

  constructor() { }
 
  ngOnInit() {
  }
  
  setStep(index: number) {
    this.step = index;
  }

}
