import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

  editorInit(quill) {
    this.editor = quill;
  }

  write(){
    console.log(JSON.stringify(this.editor.getContents()));
    alert(JSON.stringify(this.editor.getContents()));
  }

}
