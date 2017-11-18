import { Component, OnInit, Input } from '@angular/core';
import { RouterService } from '../../../../providers/router.service';

import { BoardPanelModel } from '../../../../providers/boardPanel/boardPanel.model';

@Component({
  selector: 'app-detail-board-list',
  templateUrl: './detail-board-list.component.html',
  styleUrls: ['./detail-board-list.component.css']
})
export class DetailBoardListComponent implements OnInit {

    page = {
        size : 8,
        totlaElements : 0,
        totalPages : 0,
        pageNumber : 0
    };
    isLoading : boolean;
    ticker : any;
    rows : any[] = [];
    @Input('detailBoard') detailBoard : BoardPanelModel;
    
    constructor(public routerService : RouterService) {
        this.page.pageNumber = 0;    
    }

    ngOnInit(){
        this.loadView(0);
    }

    setPage(pageInfo) {
        this.isLoading = true;

        this.page.pageNumber = pageInfo.offset;
        this.page.size = pageInfo.pageSize;
        const start = (this.page.pageNumber) * this.page.size;
        this.loadView(start);
    }

    loadView(start : number){
        clearTimeout(this.ticker);
        // this.rows = [];
        let count = 0;
        this.ticker = setTimeout(() => {
            
            for(let i = start; i < (start + this.page.size); i++){
                this.rows[count] = {
                    "uri" : this.detailBoard.uri,
                    "id"    : i,
                    "title" : `${ this.detailBoard.name } 제목${ i }`,
                    "write" : "ㅇㅇ",
                    "date"  : "18:23",
                    "hits"  : 1023,
                    "likes"  : 10
                };

                count ++;
            }

            this.isLoading = false;

        }, 200);
    }

    onActivate(e) {
        if(e.type === 'click') this.routerService.onRouter(`/board/${e.row.uri}/detail/${e.row.id}`);    
    }
    
}
