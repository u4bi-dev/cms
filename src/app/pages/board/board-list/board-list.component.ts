import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterService } from '../../../providers/router.service';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {
  
  rows : any[] = [
    { "boardId" : 'programming', "id"    : 1, "title" : "1번글 제목 테스트입니다.", "write" : "ㅇㅇ", "date"  : "18:23", "hits"  : 1023, "likes"  : 10 },
    { "boardId" : 'programming', "id"    : 2, "title" : "2번글 제목 테스트입니다.", "write" : "ㅇㅇ", "date"  : "18:23", "hits"  : 1023, "likes"  : 10 },
    { "boardId" : 'programming', "id"    : 3, "title" : "3번글 제목 테스트입니다.", "write" : "ㅇㅇ", "date"  : "18:23", "hits"  : 1023, "likes"  : 10 },
    { "boardId" : 'programming', "id"    : 4, "title" : "4번글 제목 테스트입니다.", "write" : "ㅇㅇ", "date"  : "18:23", "hits"  : 1023, "likes"  : 10 },
    { "boardId" : 'programming', "id"    : 5, "title" : "5번글 제목 테스트입니다.", "write" : "ㅇㅇ", "date"  : "18:23", "hits"  : 1023, "likes"  : 10 },
    { "boardId" : 'programming', "id"    : 6, "title" : "6번글 제목 테스트입니다.", "write" : "ㅇㅇ", "date"  : "18:23", "hits"  : 1023, "likes"  : 10 },
    { "boardId" : 'programming', "id"    : 7, "title" : "7번글 제목 테스트입니다.", "write" : "ㅇㅇ", "date"  : "18:23", "hits"  : 1023, "likes"  : 10 },
    { "boardId" : 'programming', "id"    : 8, "title" : "8번글 제목 테스트입니다.", "write" : "ㅇㅇ", "date"  : "18:23", "hits"  : 1023, "likes"  : 10 },
    { "boardId" : 'programming', "id"    : 9, "title" : "9번글 제목 테스트입니다.", "write" : "ㅇㅇ", "date"  : "18:23", "hits"  : 1023, "likes"  : 10 }
  ];
  boardName : string;

  offset : number = 0;
  
  constructor(private route: ActivatedRoute, public routerService : RouterService) {

  }

  ngOnInit(){
      this.route.parent.params.subscribe( (param: any) => this.boardName = param['id'] );

  }

  onPage(e) {
    if(this.offset <= e.offset && this.offset !== e.offset){
      this.offset = e.offset;

      setTimeout(()=>{
          for(let i = 9; i--;){
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

      }, 300);
      
    }
    
    // document.documentElement.scrollTop = 0;      

  }

  onActivate(e) {
      if(e.type === 'click') this.routerService.onRouter(`/board/${e.row.boardId}/detail/${e.row.id}`);    
  }

  
}
