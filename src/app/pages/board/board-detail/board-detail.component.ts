import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterService } from '../../../providers/router.service';

@Component({
  selector: 'app-board-detail',
  templateUrl: './board-detail.component.html',
  styleUrls: ['./board-detail.component.css']
})
export class BoardDetailComponent implements OnInit {

  boardName : string;

  constructor(private route: ActivatedRoute, public routerService : RouterService) { }

  ngOnInit() {
      this.route.parent.params.subscribe( (param: any) => this.boardName = param['id'] );
  }

}
