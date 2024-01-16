import { FrontEndStructure } from "./frontEndStructure";
import { PushdownAutomata } from "./pushdownAutomata";

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
            pushedSymbols: [{value: "I"}]
        },
    ]
);


