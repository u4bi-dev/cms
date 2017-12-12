import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { RouterService } from '../../../providers/router.service';
import { BoardPanelModel } from '../../../providers/boardPanel/boardPanel.model';

@Component({
  selector: 'app-main-tap-board',
  templateUrl: './main-tap-board.component.html',
  styleUrls: ['./main-tap-board.component.css']
})
export class MainTapBoardComponent implements OnInit, OnChanges {


  @Input() viewBoard: BoardPanelModel;
  @Input('isTab') isTab: boolean;
  @Input('limit') limit: number;

  rows: any[] = [];
  isScrollH : boolean;

  constructor(public routerService : RouterService) {
    this.isScrollH = true;
  }

  ngOnInit() {

    for(let i = 10; i--;)this.rows.push({
      "boardId" : this.viewBoard.uri,
      "id"    : i,
      "title" : ` ${this.viewBoard.name} ${ i }번글 제목`,
      "write" : "ㅇㅇ",
      "date"  : "18:23",
      "hits"  : 1023,
      "likes"  : 10
    });

    this.tickerScroll();

  }

  ngOnChanges(){
    
      if(this.isTab){
          this.isScrollH = true;
          this.tickerScroll();
      }
  }


  tickerScroll(){
    setTimeout( ()=> this.isScrollH = false, 1200);
  }

  onActivate(e) {
    if(e.type === 'click') this.routerService.onRouter(`/board/${e.row.boardId}/detail/${e.row.id}`);
  }

}
