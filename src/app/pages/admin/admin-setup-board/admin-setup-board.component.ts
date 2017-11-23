import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { BoardPanelModel } from '../../../providers/boardPanel/boardPanel.model';
import { GetBoardPanels, GetLaTestBoardPanel } from '../../../providers/boardPanel/boardPanel.actions';

interface MainState{
  boardPanel : any;
}

@Component({
  selector: 'app-admin-setup-board',
  templateUrl: './admin-setup-board.component.html',
  styleUrls: ['./admin-setup-board.component.css']
})
export class AdminSetupBoardComponent implements OnInit, OnDestroy {

  @ViewChild('selectedGroup') selectedGroup : any;
  private sub : Subscription;
  private boardPanel$ : Observable<any>;

  tapBoard : BoardPanelModel[] = [];
  selectedBoard : BoardPanelModel;

  constructor(private store : Store<MainState>) {
    
    this.boardPanel$ = this.store.select('boardPanel');
    this.sub = this.boardPanel$.subscribe(e => {
        if(e){
            this.tapBoard = e.tapBoard;
        }
    });
    
    this.store.dispatch(new GetBoardPanels());
    this.store.dispatch(new GetLaTestBoardPanel());
    
  }

  ngOnInit() {
  }
  
  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  selected(id){
    this.selectedGroup.value = 'view';
    this.selectedBoard = this.tapBoard.filter(e => e.id === id)[0];
  }

  send(type){
    alert(type);
  }
  
}
