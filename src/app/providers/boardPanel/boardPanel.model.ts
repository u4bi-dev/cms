export interface BoardPanelModel{
    id       : string | number;
    name     : string,
    uri      : string,
    isButton : boolean,
    limit    : number
}

export interface BoardPanelServiceModel{
    getBoardPanels();
    getLaTestBoardPanel();
    getDetailBoardPanel(boardUri : string);
}