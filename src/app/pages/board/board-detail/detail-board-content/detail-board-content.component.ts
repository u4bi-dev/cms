import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterService } from '../../../../providers/router.service';

import { BoardPanelModel } from '../../../../providers/boardPanel/boardPanel.model';

@Component({
  selector: 'app-detail-board-content',
  templateUrl: './detail-board-content.component.html',
  styleUrls: ['./detail-board-content.component.css']
})
export class DetailBoardContentComponent implements OnInit {

    private editor;
    boardDetailId : number;
    @Input('detailBoard') detailBoard : BoardPanelModel;

    constructor(private route: ActivatedRoute, public routerService : RouterService) { }

    ngOnInit() {
    }

    editorReady(quill) {
        this.editor = quill;

        this.route.params.subscribe( (param: any) => {
            this.boardDetailId = +param['id'];
            this.viewContent(this.detailBoard.name ,this.boardDetailId);
        });
    }

    viewContent(board : string , id : number){
        let data = {"ops":[{"attributes":{"size":"normal"},"insert":`${ board }게시판 ${ id }번글 테스트입니다. \n`},{"insert":"\n"},{"attributes":{"size":"normal"},"insert":"테스트 입니다 테스트 테스트"},{"insert":"\n"}]};
        this.editor.setContents(data);
    }

}
