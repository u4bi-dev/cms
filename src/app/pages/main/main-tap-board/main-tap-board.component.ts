import { Component, OnInit, Input } from '@angular/core';
import { RouterService } from '../../../providers/router.service';
import { ViewBoard } from '../../../models/view-board.model';

@Component({
  selector: 'app-main-tap-board',
  templateUrl: './main-tap-board.component.html',
  styleUrls: ['./main-tap-board.component.css']
})
export class MainTapBoardComponent implements OnInit {


  @Input() viewBoard: ViewBoard;

  rows: any[] = [];
  isScrollH : boolean;

  constructor(public routerService : RouterService) {
    this.isScrollH = true;
  }

  ngOnInit() {

    for(let i = 10; i--;)this.rows.push({
      "boardId" : this.viewBoard.uri,
      "id"    : i,
      "title" : this.viewBoard.name+" 제목" + i,
      "write" : "ㅇㅇ",
      "date"  : "18:23",
      "hits"  : 1023,
      "likes"  : 10
    });

    setTimeout( ()=> this.isScrollH = false, 1200);

  }

  onActivate(e) {
    if(e.type === 'click') this.routerService.onRouter(`/board/${e.row.boardId}/detail/${e.row.id}`);
  }

}
