import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { BoardPanel } from './boardPanel';
import { BoardPanelModel, BoardPanelServiceModel } from './boardPanel.model';

import { BoardPanelMockUPService } from './model/boardPanel-mockup-service';

@Injectable()
export class BoardPanelService implements BoardPanelServiceModel{

    constructor(private boardPanelMockUPService : BoardPanelMockUPService){}
    
    getBoardPanels        = () => this.boardPanelMockUPService.getBoardPanels();
    getLaTestBoardPanel   = () => this.boardPanelMockUPService.getLaTestBoardPanel();
    getDetailBoardPanel   = (boardUri) => this.boardPanelMockUPService.getDetailBoardPanel(boardUri);
}