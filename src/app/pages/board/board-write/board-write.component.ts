import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { GetDetailBoardPanel } from '../../../providers/boardPanel/boardPanel.actions';
import { BoardPanelModel } from '../../../providers/boardPanel/boardPanel.model';

interface MainState{
  boardPanel : any;
}

@Component({
  selector: 'app-board-write',
  templateUrl: './board-write.component.html',
  styleUrls: ['./board-write.component.css']
})
export class BoardWriteComponent implements OnInit, OnDestroy {
  
  private editor;
  public editorOptions = {
    placeholder: "작성해주세요..",
    modules: {
      toolbar: [
        ['bold'],
        [{ 'color': [] }],
        [{ 'align': [] }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        ['link'],
        ['image'],
        ['video'],
        ['code-block']
      ]
    }
  };

  private boardPanel$ : Observable<any>;
  private sub : Subscription;

  detailBoard : BoardPanelModel;

  constructor(private route: ActivatedRoute, private store : Store<MainState>) {

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

  editorInit(quill) {
    this.editor = quill;
  }

  write(){
    console.log(JSON.stringify(this.editor.getContents()));
    alert(JSON.stringify(this.editor.getContents()));
  }

}
