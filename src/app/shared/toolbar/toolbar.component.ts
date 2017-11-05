import { Component, OnInit } from '@angular/core';
import { RouterService } from '../../providers/router.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(public routerService : RouterService) { }

  ngOnInit() {
  }

}
