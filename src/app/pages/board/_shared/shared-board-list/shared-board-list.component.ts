import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterService } from '../../../../providers/router.service';

@Component({
  selector: 'app-shared-board-list',
  templateUrl: './shared-board-list.component.html',
  styleUrls: ['./shared-board-list.component.css']
})
export class SharedBoardListComponent implements OnInit {

    page = {
      size : 8,
      totlaElements : 0,
      totalPages : 0,
      pageNumber : 0
    };
    isLoading : boolean;
    ticker : any;
    rows : any[] = [];
    boardName : string;
    
    constructor(private route: ActivatedRoute, public routerService : RouterService) {
      this.page.pageNumber = 0;    
    }

    ngOnInit(){
        this.route.parent.params.subscribe( (param: any) => this.boardName = param['id'] );
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
                  "boardId" : this.boardName,
                  "id"    : i,
                  "title" : `${ i }번글 제목 테스트입니다.`,
                  "write" : "ㅇㅇ",
                  "date"  : "18:23",
                  "hits"  : 1023,
                  "likes"  : 10
                };

                count ++;
            }

            this.isLoading = false;

        }, 1);
    }

    onActivate(e) {
        if(e.type === 'click') this.routerService.onRouter(`/board/${e.row.boardId}/detail/${e.row.id}`);    
    }


}
