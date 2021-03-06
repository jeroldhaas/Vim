import {ModeName, Mode} from './mode';
import {showCmdLine} from './../cmd_line/main';
import * as vscode from 'vscode';

export default class CommandMode extends Mode {
    constructor() {
        super(ModeName.Command);
    }

    ShouldBeActivated(key : string, currentMode : ModeName) : boolean {
        return (key === 'esc');
    }

    HandleActivation(key : string) : void {
        // do nothing
    }

    HandleKeyEvent(key : string) : void {
        this.keyHistory.push(key);

        switch (key) {
            case ':':
                showCmdLine();
                break;
            // navigation
            case 'h':
                vscode.commands.executeCommand("cursorLeft");
                break;
            case 'j':
                vscode.commands.executeCommand("cursorDown");
                break;
            case 'k':
                vscode.commands.executeCommand("cursorUp");
                break;
            case 'l':
                vscode.commands.executeCommand("cursorRight");
                break;
			case 'e':
				vscode.commands.executeCommand("cursorWordRight");
				break;
			case 'b':
				vscode.commands.executeCommand("cursorWordLeft");
				break;
            // TODO: currently doesn't meet spec, doesn't place at beginning of word after finding word.
            case 'w':
                vscode.commands.executeCommand("cursorWordRight");
                break;
            case '$':
				vscode.commands.executeCommand("cursorHome");
				break;
			case '^':
				vscode.commands.executeCommand("cursorEnd");
				break;
			// editing
            /*
			case 's':
				// TODO: complete substitute command
				vscode.commands.executeCommand("substituteText");
				break;
			case 'r':
				vscode.commands.executeCommand("replaceText", vscode.Selection);
            */
        }
    }
}