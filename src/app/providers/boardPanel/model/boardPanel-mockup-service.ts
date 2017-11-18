import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { BoardPanelModel, BoardPanelServiceModel } from '../boardPanel.model';
import { BoardPanel } from '../boardPanel';;

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

@Injectable()
export class BoardPanelMockUPService implements BoardPanelServiceModel{
    
    constructor(){}
    
    render = (boardPanel) => new BoardPanel(boardPanel);
    randId = () => Math.random().toString();
    getBoardPanels = () => {
        return Observable.of(this.getMockData('boardPanel'))
        .catch( (error) => this.err(error));
    };
    
    getLaTestBoardPanel = () => Observable.of(this.getMockData('latestBoard'));

    getDetailBoardPanel = (boardUri) => Observable.of(this.getMockData('detailBoard', boardUri));

    private err = (error) => Observable.of(console.error(error));

    private getMockData = (type, boardUri?) => {
        let boards = [
            { id : this.randId(), name : '이달의 핫플레이스', uri : 'hot', isButton : false, limit : 5 },
            { id : this.randId(), name : '프론트엔드', uri : 'frontend', isButton : true, limit : 5 },
            { id : this.randId(), name : '백엔드', uri : 'backend', isButton : true, limit : 5 },
            { id : this.randId(), name : '시스템', uri : 'sysdev', isButton : true, limit : 5 },
            { id : this.randId(), name : '알고리즘', uri : 'algorithm', isButton : true, limit : 5 },
            { id : this.randId(), name : '데이터베이스', uri : 'database', isButton : true, limit : 5 },
            { id : 'latest', name : '최근글', uri : 'latest', isButton : false, limit : 10 }
        ].map(e => this.render(e));
        
        switch(type){
            case 'boardPanel' :
                return boards.filter(e => e.id !== 'latest');
            case 'latestBoard' :
                return boards.filter(e => e.id === 'latest')[0];
            case 'detailBoard':
                return boards.filter(e => e.uri === boardUri)[0];
            default : break;
        }
    };
}