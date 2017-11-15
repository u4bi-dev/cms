import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterService } from '../../../providers/router.service';

@Component({
  selector: 'app-board-detail',
  templateUrl: './board-detail.component.html',
  styleUrls: ['./board-detail.component.css']
})
export class BoardDetailComponent implements OnInit {

  private editor;
  boardName : string;
  boardDetailId : number; 

  constructor(private route: ActivatedRoute, public routerService : RouterService) { }

  ngOnInit() {
    this.route.parent.params.subscribe( (param: any) => this.boardName = param['id'] );
  }

  editorReady(quill) {
    this.editor = quill;

    this.route.params.subscribe( (param: any) => {
      this.boardDetailId = +param['id'];
      this.viewContent(this.boardName ,this.boardDetailId);
    });
  }

  viewContent(board : string , id : number){
    let data = {"ops":[{"attributes":{"size":"large"},"insert":`${ board }게시판 ${ id }번글 테스트입니다. \n`},{"insert":"\n\n"},{"attributes":{"size":"large"},"insert":"테스트 입니다 테스트 테스트"},{"insert":"\n"}]};
    this.editor.setContents(data);
  }

  page(num : number){
    if(num === -1 && this.boardDetailId === 0)return;
    this.routerService.onRouter(`/board/${ this.boardName }/detail/${ this.boardDetailId + num }`);
  }

}
