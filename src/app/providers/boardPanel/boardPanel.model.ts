export interface BoardPanelModel{
    id       : string | number;
    name     : string,
    uri      : string,
    isButton : boolean
}

export interface BoardPanelServiceModel{
    getBoardPanels();
    getLaTestBoardPanel();
    getDetailBoardPanel(boardUri : string);
}