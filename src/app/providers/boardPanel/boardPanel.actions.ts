import { Action } from '@ngrx/store';
import { BoardPanelModel } from './boardPanel.model';

export const GET_BOARD_PANELS    = '[BoardPanels] GetBoardPanels';
export const GET_BOARD_PANELS_SUCCESS    = '[BoardPanels] GetBoardPanelsSuccess';

export const GET_LATEST_BOARD_PANEL = '[BoardPanels] GetLaTestBoardPanel';
export const GET_LATEST_BOARD_PANEL_SUCCESS = '[BoardPanels] GetLaTestBoardPanelSucess';

export const GET_DETAIL_BOARD_PANEL = '[BoardPanels] GetDetailBoardPanel';
export const GET_DETAIL_BOARD_PANEL_SUCCESS = '[BoardPanels] GetDetailBoardPanelSucess';

export class GetBoardPanels implements Action {
    readonly type = GET_BOARD_PANELS;
}

export class GetBoardPanelsSuccess implements Action {
    readonly type = GET_BOARD_PANELS_SUCCESS;

    constructor(public tapBoard: BoardPanelModel[]){}
}

export class GetLaTestBoardPanel implements Action {
    readonly type = GET_LATEST_BOARD_PANEL;
}

export class GetLaTestBoardPanelSuccess implements Action {
    readonly type = GET_LATEST_BOARD_PANEL_SUCCESS;

    constructor(public mainBoard : BoardPanelModel){}
}

export class GetDetailBoardPanel implements Action {
    readonly type = GET_DETAIL_BOARD_PANEL;

    constructor(public boardUri : string){}
}

export class GetDetailBoardPanelSuccess implements Action {
    readonly type = GET_DETAIL_BOARD_PANEL_SUCCESS;

    constructor(public detailBoard : BoardPanelModel){}
}

export type All
    = GetBoardPanels
    | GetBoardPanelsSuccess
    | GetLaTestBoardPanel
    | GetLaTestBoardPanelSuccess
    | GetDetailBoardPanel
    | GetDetailBoardPanelSuccess;