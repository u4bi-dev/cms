import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterService } from '../../../providers/router.service';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {

  page = {
    size : 0,
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
                "boardId" : this.boardName,
                "id"    : this.rows.length+1,
                "title" : `${ this.rows.length+1 }번글 제목 테스트입니다.`,
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
      if(e.type === 'click') this.routerService.onRouter(`/board/${e.row.boardId}/detail/${e.row.id}`);    
  }

  
}
