import { Component, OnInit } from '@angular/core';
import { RouterService } from '../../providers/router.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  rows: any[] = [];

  constructor(public routerService : RouterService) {
    
      let data = {
        "boardId" : 'free',
        "id"    : 1,
        "title" : "제목 테스트입니다.",
        "write" : "ㅇㅇ",
        "date"  : "18:23",
        "hits"  : 1023,
        "likes"  : 10
      };

      for(let i = 10; i--;)this.rows.push(data);

  }

  ngOnInit() {
  }

  onActivate(e) {
      if(e.type === 'click') this.routerService.onRouter(`/board/${e.row.boardId}/detail/${e.row.id}`);
  }

}
