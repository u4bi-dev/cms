import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';

import * as BoardPanelActions from './boardPanel.actions';
import { BoardPanelService } from './boardPanel.service';

export type Action = BoardPanelActions.All;

@Injectable()
export class BoardPanelEffects {

    constructor(private actions$ : Actions, private boardPanelService : BoardPanelService){}

    @Effect() getBoardPanels$ = this.actions$
        .ofType(BoardPanelActions.GET_BOARD_PANELS)
        .switchMap((action : any) => this.boardPanelService.getBoardPanels())
        .map((v : any) => new BoardPanelActions.GetBoardPanelsSuccess(v));

    @Effect() getLaTestBoardPanel$ = this.actions$
        .ofType(BoardPanelActions.GET_LATEST_BOARD_PANEL)
        .switchMap((action : any) => this.boardPanelService.getLaTestBoardPanel())
        .map((v : any) => new BoardPanelActions.GetLaTestBoardPanelSuccess(v));        
}