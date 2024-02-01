import { UI } from "./ui";
import { PushdownAutomataSimulator } from "./pushdownAutomataSimulator";
import { PushdownAutomata } from "./pushdownAutomata";
import { registerEvents } from "./events";
import { Storage } from "./storage";

const automata = new PushdownAutomata(
    [
        {value: "q1"},
        {value: "q2"}
    ],
    [
        {isEpsylon: false, value: "a"},
        {isEpsylon: false, value: "b"}
    ],
    [
        {value: "O"},
        {value: "I"}
    ],
    {value: "q1"},
    {value: "O"},
    null,
    [
        {
            fromState: {value: "q1"},
            inputSymbol: {isEpsylon: false, value: "a"},
            startSymbol: {value: "O"},
            toState: {value: "q1"},
            pushedSymbols: [{value: "I"}]
        },
        {
            fromState: {value: "q1"},
            inputSymbol: {isEpsylon: false, value: "a"},
            startSymbol: {value: "I"},
            toState: {value: "q1"},
            pushedSymbols: [{value: "I"},{value: "I"}]
        },
        {
            fromState: {value: "q1"},
            inputSymbol: {isEpsylon: false, value: "b"},
            startSymbol: {value: "I"},
            toState: {value: "q2"},
            pushedSymbols: []
        },
        {
            fromState: {value: "q2"},
            inputSymbol: {isEpsylon: false, value: "b"},
            startSymbol: {value: "I"},
            toState: {value: "q2"},
            pushedSymbols: []
        },
    ]
);

const ui: UI = new UI();
ui.setAutomata(automata);
ui.setTape("aaaaaaaaaabbbbbbbbbb");

var storage: Storage;

document.addEventListener("DOMContentLoaded", () => {
    registerEvents();
    ui.registerEvents();
    storage = new Storage();
    storage.registerEvents();
    //storage.saveAutomata("test", automata);
    storage.printAutomatas();
});