import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterService } from '../../../providers/router.service';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {
  
  rows : any[] = [];
  boardName : string;
  
  constructor(private route: ActivatedRoute, public routerService : RouterService) {

  }

  ngOnInit(){
      this.route.parent.params.subscribe( (param: any) => this.boardName = param['id'] );
      
      let data = {
        "boardId" : this.boardName,
        "id"    : 1,
        "title" : "제목 테스트입니다.",
        "write" : "ㅇㅇ",
        "date"  : "18:23",
        "hits"  : 1023,
        "likes"  : 10
      };

      for(let i = 20; i--;)this.rows.push(data);

  }

  onPage(e) {
      console.log('page', e);
      document.documentElement.scrollTop = 0;      
  }

  onActivate(e) {
      if(e.type === 'click') this.routerService.onRouter(`/board/${e.row.boardId}/detail/${e.row.id}`);    
  }

  
}
