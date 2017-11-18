import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-comment-entry',
  templateUrl: './detail-comment-entry.component.html',
  styleUrls: ['./detail-comment-entry.component.css']
})
export class DetailCommentEntryComponent implements OnInit {

    isReply : boolean;
    replyText : string;

    constructor() { }

    ngOnInit() {
    }

    viewReply = () => this.isReply = !this.isReply;

    sendReply(){
        let data = { replyText : this.replyText };

        alert(JSON.stringify(data));
        
        this.replyText = '';
        this.viewReply();
    }

}
