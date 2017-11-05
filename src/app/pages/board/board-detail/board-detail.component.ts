import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-board-detail',
  templateUrl: './board-detail.component.html',
  styleUrls: ['./board-detail.component.css']
})
export class BoardDetailComponent implements OnInit {


  boardName : string;
  boardDetailId : number; 

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.params.subscribe( (param: any) => this.boardDetailId = param['id'] );
      this.route.parent.params.subscribe( (param: any) => this.boardName = param['id'] );
  }

}
