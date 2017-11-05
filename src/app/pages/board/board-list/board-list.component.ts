import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {
  
  rows : any[] = [];
  boardName : string;
  
  constructor(private route: ActivatedRoute) {

      let data = {
        "title" : "제목 테스트입니다.",
        "write" : "ㅇㅇ",
        "date"  : "18:23",
        "hits"  : 1023,
        "likes"  : 10
      };

      for(let i = 500; i--;) this.rows.push(data);

  }

  ngOnInit(){
      this.route.parent.params.subscribe( (param: any) => this.boardName = param['id'] );
  }

  onPage(e) {
      console.log('page', e);
  }

  onActivate(e) {
    if(e.type === 'click') console.log('activate', e.row);
  }

  
}
