import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterService } from '../../../providers/router.service';

import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { GetDetailBoardPanel } from '../../../providers/boardPanel/boardPanel.actions';
import { BoardPanelModel } from '../../../providers/boardPanel/boardPanel.model';

interface MainState{
  boardPanel : any;
}

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit, OnDestroy {

  page = {
    size : 0,
    totlaElements : 0,
    totalPages : 0,
    pageNumber : 0
  };
  isLoading : boolean;
  ticker : any;
  rows : any[] = [];

  private boardPanel$ : Observable<any>;
  private sub : Subscription;

  detailBoard : BoardPanelModel;
  
  constructor(private route: ActivatedRoute, public routerService : RouterService, private store : Store<MainState>) {
    this.page.pageNumber = 0;

    this.boardPanel$ = this.store.select('boardPanel');
    this.sub = this.boardPanel$.subscribe(e => {
        if(e){
            this.detailBoard = e.detailBoard;
        }
    });

  }

  ngOnDestroy(){
      this.sub.unsubscribe();
  }

  ngOnInit(){
      this.route.parent.params.subscribe( (param: any) =>{
          this.store.dispatch(new GetDetailBoardPanel(param['id']));        
      });

      this.loadView(8);
  }

  setPage(pageInfo) {

      if(this.page.pageNumber <= pageInfo.offset && this.page.pageNumber !== pageInfo.offset){
        
        this.isLoading = true;

        this.page.pageNumber = pageInfo.offset;
        this.page.size = pageInfo.pageSize;
        const start = (this.page.pageNumber + 1) * this.page.size;
        this.loadView(start);

      }

  }

  loadView(start : number){
      clearTimeout(this.ticker);
      
      this.ticker = setTimeout(() => {
        
          for(let i = this.rows.length; i < start; i++){

              this.rows.push({
                "uri" : this.detailBoard.uri,
                "id"    : this.rows.length,
                "title" : `${ this.detailBoard.name } 제목${ this.rows.length }`,
                "write" : "ㅇㅇ",
                "date"  : "18:23",
                "hits"  : 1023,
                "likes"  : 10
              });
          }

          this.isLoading = false;
          // console.log(start);

      }, 1);
  }

  onActivate(e) {
      if(e.type === 'click') this.routerService.onRouter(`/board/${e.row.uri}/detail/${e.row.id}`);    
  }

  
}
