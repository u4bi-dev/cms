import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { BoardPanelModel } from '../../providers/boardPanel/boardPanel.model';
import { GetBoardPanels, GetLaTestBoardPanel } from '../../providers/boardPanel/boardPanel.actions';

interface MainState{
  boardPanel : any;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {

  private sub : Subscription;
  private boardPanel$ : Observable<any>;

  tapBoard : BoardPanelModel[] = [];
  mainBoard : BoardPanelModel;
  
  tabIndex : number = 0;
  
  constructor(private store : Store<MainState>) {
    
    this.boardPanel$ = this.store.select('boardPanel');
    this.sub = this.boardPanel$.subscribe(e => {
      if(e){
        this.tapBoard = e.tapBoard;
        this.mainBoard = e.mainBoard;
      }
    });
    
    this.store.dispatch(new GetBoardPanels());
    this.store.dispatch(new GetLaTestBoardPanel());
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  ngOnInit() {
  }

  onTapChange(e){
    this.tabIndex = e.index;
  }

}
