import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-board-write',
  templateUrl: './board-write.component.html',
  styleUrls: ['./board-write.component.css']
})
export class BoardWriteComponent implements OnInit {
  
  boardName : string;
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

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.parent.params.subscribe( (param: any) => this.boardName = param['id'] );
    
  }

  editorInit(quill) {
    this.editor = quill;
  }

  write(){
    console.log(JSON.stringify(this.editor.getContents()));
    alert(JSON.stringify(this.editor.getContents()));
  }

}
