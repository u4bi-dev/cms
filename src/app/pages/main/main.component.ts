import { Component, OnInit } from '@angular/core';
import { ViewBoard } from '../../models/view-board.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  tapBoard : ViewBoard[] = [];
  mainBoard : ViewBoard;
  
  constructor() {
    this.tapBoard = [
      { name : '이시각 핫플레이스', uri : 'hot', isButton : true, limit : 5 },
      { name : '프론트엔드', uri : 'frontend', isButton : true, limit : 5 },
      { name : '백엔드', uri : 'backend', isButton : true, limit : 5 },
      { name : '시스템', uri : 'sysdev', isButton : true, limit : 5 },
      { name : '알고리즘', uri : 'algorithm', isButton : true, limit : 5 }
    ];

    this.mainBoard = { name : '최근글', uri : 'latest', isButton : false, limit : 10 };

  }

  ngOnInit() {
  }

}
