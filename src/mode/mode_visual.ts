import {ModeName, Mode} from './mode';

export default class VisualMode extends Mode {
    constructor() {
        super(ModeName.Visual);
    }

    ShouldBeActivated(key : string, currentMode : ModeName) : boolean {
        if (currentMode === ModeName.Command)
            return (key === "v" || key === "V")
        else
            return false;
    }
    
    HandleActivation(key : string) : void {
        // do nothing
    }
    
    HandleKeyEvent(key : string) : void {
        this.keyHistory.push(key);
    }
}