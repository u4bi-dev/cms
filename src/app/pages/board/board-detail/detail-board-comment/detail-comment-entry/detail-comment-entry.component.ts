import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/timer';

@Component({
  selector: 'app-detail-comment-entry',
  templateUrl: './detail-comment-entry.component.html',
  styleUrls: ['./detail-comment-entry.component.css']
})
export class DetailCommentEntryComponent implements OnInit {

    @ViewChild('replyField') replyField : ElementRef;
    @Input('replyThread') replyThread : number = 0;
    
    replyTicker : Subscription;
    isReply : boolean;

    constructor() { }

    ngOnInit() {
    }

    viewReply = () => {
        this.isReply = !this.isReply;
        let timer = Observable.timer(100);
        this.replyTicker = timer.subscribe(v => {
            if(this.replyField) this.replyField.nativeElement.focus();
            this.replyTicker.unsubscribe();
        });

    };

    sendReply(){
        this.replyTicker.unsubscribe();

        if(this.replyField.nativeElement.value){
            let data = { replyText : this.replyField.nativeElement.value };
            alert(JSON.stringify(data));
        }

        this.replyField.nativeElement.value = '';
        this.isReply = !this.isReply;
    }

}
