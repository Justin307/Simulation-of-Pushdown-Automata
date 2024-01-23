import { UI } from "./ui";
import { PushdownAutomataSimulator } from "./pushdownAutomataSimulator";
import { PushdownAutomata } from "./pushdownAutomata";
import { registerEvents } from "./events";

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

ui.addToStack({value: "I"});
ui.addToTape({isEpsylon: false, value: "a"});
ui.changeState({value: "q1"});
ui.removeFromStack();
ui.removeFromTape();

/*let frontEndStructure = new PushdownAutomataSimulator(automata);

console.log(frontEndStructure.inputTape);
console.log(JSON.stringify(frontEndStructure.stack));
console.log(frontEndStructure.currentState);
console.log(frontEndStructure.acceptingState);
console.log(frontEndStructure.history);

frontEndStructure.setNewInput("aabb");
console.log("Setting new input");

console.log(frontEndStructure.inputTape);
console.log(JSON.stringify(frontEndStructure.stack));
console.log(frontEndStructure.currentState);
console.log(frontEndStructure.acceptingState);
console.log(frontEndStructure.history);

console.log("Checking input validity");
frontEndStructure.checkInputTapeValidity();

try{
    while(!frontEndStructure.acceptedInput())
    {
        frontEndStructure.nextStep();
        console.log(frontEndStructure.inputTape);
        console.log(JSON.stringify(frontEndStructure.stack));
        console.log(frontEndStructure.currentState);
        console.log(frontEndStructure.acceptingState);
        console.log(frontEndStructure.history);
    }
    console.log("Accepted input");
}
catch(e)
{
    console.log(e);
}


frontEndStructure.backStep();
console.log("Back step");
console.log(frontEndStructure.inputTape);
console.log(JSON.stringify(frontEndStructure.stack));
console.log(frontEndStructure.currentState);
console.log(frontEndStructure.acceptingState);
console.log(frontEndStructure.history);

console.log("New input");
frontEndStructure.setNewInput("a");
frontEndStructure.nextStep();
console.log("Is accepted: " + frontEndStructure.acceptedInput());
*/

document.addEventListener("DOMContentLoaded", () => {
    registerEvents();
});