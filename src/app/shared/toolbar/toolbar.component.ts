import { Component, OnInit, HostListener } from '@angular/core';
import { RouterService } from '../../providers/router.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  scroll : Object = {};
  
  constructor(public routerService : RouterService) { }

  ngOnInit() {
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    
    let top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    
    this.scroll = top < 100 ? { 'opacity' : '1' } : { 'opacity' : '0' };
    
  }

}
