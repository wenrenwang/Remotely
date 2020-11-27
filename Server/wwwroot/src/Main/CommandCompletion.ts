﻿import { UserSettings } from "./UserSettings.js";
import { ConsoleCommand } from "../Shared/Models/ConsoleCommand.js";
import { CommandLineParameter } from "../Shared/Models/CommandLineParameter.js";
import { WebCommands } from "../Main/Commands/WebCommands.js";
import { Parameter } from "../Shared/Models/Parameter.js";
import * as UI from "./UI.js"
import { CMDCommands } from "./Commands/CMDCommands.js";
import { PSCommands } from "./Commands/PSCommands.js";
import { BashCommands } from "./Commands/BashCommands.js";

export const CommandCompletionStore = new class {
    CompletionPosition = -1;
    CompletionTimeout: number;
    InputHistoryPosition = -1;
    InputHistoryItems: Array<string> = [];
}

export function DisplayCommandCompletions(commands: Array<ConsoleCommand>, relevantText: string) {
    CommandCompletionStore.CompletionTimeout = window.setTimeout(() => {
        commands.forEach(x => {
            var commandCompletionItem = document.createElement("div");
            commandCompletionItem.classList.add("command-completion-item");
            commandCompletionItem.innerHTML = x.Name;
            commandCompletionItem.onclick = function () {
                var commandText = UI.ConsoleTextArea.value;
                var insertCommandStart = commandText.lastIndexOf(relevantText);
                UI.ConsoleTextArea.value = commandText.substring(0, insertCommandStart) + commandCompletionItem.innerHTML;
                UI.CommandCompletionDiv.classList.add("hidden");
                UI.CommandInfoDiv.classList.add("hidden");
            };
            commandCompletionItem.onfocus = function () {
                ShowCommandInfo(x);
            }
            UI.CommandCompletionDiv.appendChild(commandCompletionItem);
        });

        if (commands.length > 0) {
            var currentText = UI.ConsoleTextArea.value.toLowerCase();
            if (commands.some(x => x.Name.toLowerCase().startsWith(currentText))) {
                CommandCompletionStore.CompletionPosition = commands.findIndex(x => x.Name.toLowerCase().startsWith(currentText));
            }
            UI.CommandCompletionDiv.classList.remove("hidden");
            HighlightCompletionWindowItem(CommandCompletionStore.CompletionPosition);
            ShowCommandInfo(commands[CommandCompletionStore.CompletionPosition]);
            PositionCommandCompletionWindow();
        }
    }, Math.min(commands.length, 1000));
}
export function DisplayParameterCompletions(command: ConsoleCommand, parameters: CommandLineParameter[], commandText: string) {
    if (parameters.length > 0 && !parameters.some(x => x.Value.length == 0) && !commandText.endsWith("-")) {
        return;
    }
    UI.CommandCompletionDiv.classList.remove("hidden");

    var remainingParams = command.Parameters.filter(x => !parameters.some(y =>
        y.Name.toLowerCase() == x.Name.toLowerCase() &&
        y.Value.length > 0))
        .filter(x => x.Name.toLowerCase()
            .startsWith(UI.ConsoleTextArea.value.substring(UI.ConsoleTextArea.value.lastIndexOf("-") + 1).toLowerCase())
        );

    remainingParams.forEach(param => {
        var commandCompletionItem = document.createElement("div");
        commandCompletionItem.classList.add("command-completion-item");
        commandCompletionItem.innerHTML = param.Name;
        commandCompletionItem.onclick = function () {
            var preParam = UI.ConsoleTextArea.value.substring(0, UI.ConsoleTextArea.value.lastIndexOf(" "));
            UI.ConsoleTextArea.value = preParam.trim() + ` -${commandCompletionItem.innerText}`;
            UI.CommandCompletionDiv.classList.add("hidden");
            UI.CommandInfoDiv.classList.add("hidden");
        };
        commandCompletionItem.onfocus = function () {
            ShowParameterInfo(param);
        }
        UI.CommandCompletionDiv.appendChild(commandCompletionItem);
    });
    if (!UI.CommandCompletionDiv.classList.contains("hidden") && remainingParams.length > 0) {
        SetCommandCompletionPositionToIncompleteParam(parameters);
        HighlightCompletionWindowItem(CommandCompletionStore.CompletionPosition);
        ShowParameterInfo(remainingParams[CommandCompletionStore.CompletionPosition]);
        PositionCommandCompletionWindow();
    }
}

export function DisplayCommandShortcuts(shortcutText: string) {
    UI.CommandCompletionDiv.classList.remove("hidden");
    var matchingShortcuts = Object.keys(UserSettings.CommandModeShortcuts).filter(x =>
        UserSettings.CommandModeShortcuts[x].slice(1).toLowerCase().startsWith(shortcutText.toLowerCase()));

    matchingShortcuts.forEach(x => {
        var commandCompletionItem = document.createElement("div");
        commandCompletionItem.classList.add("command-completion-item");
        commandCompletionItem.innerHTML = UserSettings.CommandModeShortcuts[x].slice(1);
        commandCompletionItem.onclick = function () {
            UI.CommandModeSelect.value = x;
            UI.ConsoleTextArea.value = "";
            UI.CommandCompletionDiv.classList.add("hidden");
            UI.CommandInfoDiv.classList.add("hidden");
        };
        commandCompletionItem.onfocus = function () {}
        UI.CommandCompletionDiv.appendChild(commandCompletionItem);
    })
    if (!UI.CommandCompletionDiv.classList.contains("hidden") && matchingShortcuts.length > 0) {
        HighlightCompletionWindowItem(CommandCompletionStore.CompletionPosition);
        PositionCommandCompletionWindow();
    }
}

export function GetCommandCompletions(commandText: string): ConsoleCommand[] {
    var commandList:ConsoleCommand[];
    switch (UI.CommandModeSelect.value) {
        case "Web":
            commandList = WebCommands;
            break;
        case "CMD":
            commandList = CMDCommands;
            break;
        case "PSCore":
        case "WinPS":
            commandList = PSCommands;
            break;
        case "Bash":
            commandList = BashCommands;
            break;
        default:
            UI.CommandCompletionDiv.classList.add("hidden");
            return;
    }

    var filteredList = commandList.filter(x => x.Name.toLowerCase().indexOf(commandText.toLowerCase()) > -1);
    filteredList.sort((a, b) => a.Name.localeCompare(b.Name));
    return filteredList;
}

export function SetCommandCompletionPositionToIncompleteParam(parameters: CommandLineParameter[]) {
    var lastParam = parameters[parameters.length - 1];
    if (typeof lastParam != 'undefined' && lastParam.Value.length == 0) {
        for (var i = 0; i < UI.CommandCompletionDiv.children.length; i++) {
            if (UI.CommandCompletionDiv.children[i].innerHTML.startsWith(lastParam.Name)) {
                CommandCompletionStore.CompletionPosition = i;
                break;
            }
        }
    }
}
export function HighlightCompletionWindowItem(index: number) {
    UI.CommandCompletionDiv.querySelectorAll("div.selected").forEach(x => {
        x.classList.remove("selected");
    });

    if (UI.CommandCompletionDiv.children.length >= index + 1) {
        UI.CommandCompletionDiv.children[index].classList.add("selected");
        UI.CommandCompletionDiv.children[Math.max(0, index - 1)].scrollIntoView();
    }
}
export function ShowCommandInfo(command: ConsoleCommand) {
    UI.CommandInfoDiv.innerHTML = command.PartialHelp;
    UI.CommandInfoDiv.classList.remove("hidden");
}

export function ShowParameterInfo(parameter: Parameter) {
    if (parameter.Summary.length > 0) {
        var paramText = "";
        if (parameter.ParameterType) {
            paramText = ` [${parameter.ParameterType}]`;
        }
        UI.CommandInfoDiv.innerHTML = `<span class='text-primary'>${parameter.Name}${paramText}: </span>
                                ${parameter.Summary}`;
        UI.CommandInfoDiv.classList.remove("hidden");
    }
}
export function PositionCommandCompletionWindow() {
    var computedStyle = window.getComputedStyle(UI.ConsoleTextArea);
    UI.MeasurementContext.font = computedStyle.fontSize + " " + computedStyle.fontFamily;
    var width = UI.MeasurementContext.measureText(UI.ConsoleTextArea.value).width;
    UI.CommandCompletionDiv.style.marginLeft = String(width + 10) + "px";

    var wrapper = document.querySelector("#commandCompletionWrapper") as HTMLDivElement;
    var inputRect = UI.ConsoleTextArea.getBoundingClientRect();
    wrapper.style.left = String(inputRect.left) + "px";
    if (inputRect.top / document.documentElement.clientHeight > .5) {
        UI.CommandCompletionDiv.style.verticalAlign = "bottom";
        UI.CommandInfoDiv.style.verticalAlign = "bottom";
        wrapper.style.top = String(inputRect.top - wrapper.clientHeight) + "px";
    }
    else {
        UI.CommandCompletionDiv.style.verticalAlign = "top";
        UI.CommandInfoDiv.style.verticalAlign = "top";
        wrapper.style.top = String(inputRect.bottom + 5) + "px";
    }
}