import * as BoardActions   from './boardPanel.actions';
import { BoardPanelModel } from './boardPanel.model';
import { BoardPanel }      from './boardPanel';

export type Action = BoardActions.All;

const initialState = {
    pending: false,
    tapBoard : [],
    mainBoard : {},
    detailBoard : {}
};

const newState = (state, newData ) => Object.assign({}, state, newData);

export function boardPanelReducer(state = initialState, action : Action){

    switch(action.type){
        case BoardActions.GET_BOARD_PANELS   :
            return newState(state, { pending: true });
        case BoardActions.GET_BOARD_PANELS_SUCCESS :
            return newState(state, { pending: false, tapBoard : action.tapBoard });
        case BoardActions.GET_LATEST_BOARD_PANEL   :
            return newState(state, { pending: true });
        case BoardActions.GET_LATEST_BOARD_PANEL_SUCCESS :
            return newState(state, { pending: false, mainBoard : action.mainBoard });
        case BoardActions.GET_DETAIL_BOARD_PANEL   :
            return newState(state, { pending: true });
        case BoardActions.GET_DETAIL_BOARD_PANEL_SUCCESS :
            return newState(state, { pending: false, detailBoard : action.detailBoard });
        default : state;
    }

}