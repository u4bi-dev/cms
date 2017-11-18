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
  selector: 'app-board-detail',
  templateUrl: './board-detail.component.html',
  styleUrls: ['./board-detail.component.css']
})
export class BoardDetailComponent implements OnInit, OnDestroy {
  
  private boardPanel$ : Observable<any>;
  private sub : Subscription;

  detailBoard : BoardPanelModel;
  
  constructor(
    private route: ActivatedRoute,
    public routerService : RouterService,
    private store : Store<MainState>
  ) {
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

  ngOnInit() {
      this.route.parent.params.subscribe( (param: any) => {
          this.store.dispatch(new GetDetailBoardPanel(param['id']));
      });
  }

}
