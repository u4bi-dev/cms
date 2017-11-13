import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

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
export class MainComponent implements OnInit {

  private boardPanel$ : Observable<any>;  
  tapBoard : BoardPanelModel[] = [];
  mainBoard : BoardPanelModel;
  
  constructor(private store : Store<MainState>) {
    console.log('dd');
    this.boardPanel$ = this.store.select('boardPanel');
    this.boardPanel$.subscribe(e => {
      if(e){
        this.tapBoard = e.tapBoard;
        this.mainBoard = e.mainBoard;
      }
    });
    
    this.store.dispatch(new GetBoardPanels());
    this.store.dispatch(new GetLaTestBoardPanel());
  }

  ngOnInit() {
  }

}
