import { Component, OnInit, NgZone } from '@angular/core';
import { RouterService } from '../../providers/router.service';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${ SMALL_WIDTH_BREAKPOINT }px)`);
  
  constructor(private zone: NgZone, public routerService : RouterService) {
    this.mediaMatcher.addListener(mql => zone.run(() => this.mediaMatcher = mql));    
  }

  ngOnInit() {
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

}
