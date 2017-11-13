import { BoardPanelModel } from './boardPanel.model';

export class BoardPanel {
    id      : string | number;
    name     : string;
    uri      : string;
    isButton : boolean;
    limit    : number;

    constructor(boardPanel : BoardPanelModel){
        this.id       = boardPanel.id;
        this.name     = boardPanel.name;
        this.uri      = boardPanel.uri;
        this.isButton = boardPanel.isButton;
        this.limit    = boardPanel.limit;
    }

}