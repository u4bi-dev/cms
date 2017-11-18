import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-board-comment',
  templateUrl: './detail-board-comment.component.html',
  styleUrls: ['./detail-board-comment.component.css']
})
export class DetailBoardCommentComponent implements OnInit {

    commentText : string;

    constructor() { }

    ngOnInit() {
    }

    sendComment(){
        let data = { commentText : this.commentText };
        
        alert(JSON.stringify(data));
        this.commentText = '';
    }

}
