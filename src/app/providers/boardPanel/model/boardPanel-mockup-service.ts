import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { BoardPanelModel, BoardPanelServiceModel } from '../boardPanel.model';
import { BoardPanel } from '../boardPanel';

@Injectable()
export class BoardPanelMockUPService implements BoardPanelServiceModel{
    
    constructor(){}
    
    render = (boardPanel) => new BoardPanel(boardPanel);
    randId = () => Math.random().toString();
    getBoardPanels = () => {

        let data = [
            { id : this.randId(), name : '이달의 핫플레이스', uri : 'hot', isButton : false, limit : 5 },
            { id : this.randId(), name : '프론트엔드', uri : 'frontend', isButton : true, limit : 5 },
            { id : this.randId(), name : '백엔드', uri : 'backend', isButton : true, limit : 5 },
            { id : this.randId(), name : '시스템', uri : 'sysdev', isButton : true, limit : 5 },
            { id : this.randId(), name : '알고리즘', uri : 'algorithm', isButton : true, limit : 5 }
        ].map(e => this.render(e));

        return Observable.of(data)
        .catch( (error) => this.err(error));
    };
    
    getLaTestBoardPanel = () => Observable.of(this.render({ id : 'main', name : '최근글', uri : 'latest', isButton : false, limit : 10 }));

    private err = (error) => Observable.of(console.error(error));
}