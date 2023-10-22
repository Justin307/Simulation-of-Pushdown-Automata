import { PushdownAutomata, StackSymbol, State, TransitionFunction } from './pushdownAutomata';

var pushdownAutomata: PushdownAutomata = {
    states: [
        {id: 1, value: "q"}
    ],
    inputSymbols: [
        {isEpsylon: false, value: "a"},
        {isEpsylon: false, value: "b"},
        {isEpsylon: false, value: "c"}
    ],
    stackSymbols: [
        {value: "A"},
        {value: "Z"}
    ],
    initialState: {id: 1, value: "q"},
    initialStackSymbol: {value: "Z"},
    finalStates: null,
    transitionFunction: [
        {
            fromState: {id: 1, value: "q"},
            inputSymbol: {isEpsylon: false, value: "a"},
            startSymbol: {value: "Z"},
            toState: {id: 1, value: "q"},
            pushedSymbols: [
                {value: "A"},
                {value: "Z"}
            ]
        },
        {
            fromState: {id: 1, value: "q"},
            inputSymbol: {isEpsylon: false, value: "a"},
            startSymbol: {value: "A"},
            toState: {id: 1, value: "q"},
            pushedSymbols: [
                {value: "A"},
                {value: "A"}
            ]
        },
        {
            fromState: {id: 1, value: "q"},
            inputSymbol: {isEpsylon: false, value: "b"},
            startSymbol: {value: "A"},
            toState: {id: 1, value: "q"},
            pushedSymbols: [
                {value: "A"},
            ]
        },
        {
            fromState: {id: 1, value: "q"},
            inputSymbol: {isEpsylon: false, value: "b"},
            startSymbol: {value: "Z"},
            toState: {id: 1, value: "q"},
            pushedSymbols: [
                {value: "Z"}
            ]
        },
        {
            fromState: {id: 1, value: "q"},
            inputSymbol: {isEpsylon: false, value: "c"},
            startSymbol: {value: "A"},
            toState: {id: 1, value: "q"},
            pushedSymbols: [
            ]
        },
        {
            fromState: {id: 1, value: "q"},
            inputSymbol: {isEpsylon: true},
            startSymbol: {value: "Z"},
            toState: {id: 1, value: "q"},
            pushedSymbols: [
            ]
        }
    ]
}

var stack: StackSymbol[] = (pushdownAutomata.initialStackSymbol != null ? [pushdownAutomata.initialStackSymbol] : []);  

var input: string = "baabcbac";

var currentState: State = pushdownAutomata.initialState;

var history: TransitionFunction[] = [];

function getNextTransitionFunction(): void {
    console.log("getNextTransitionFunction called")
    console.log("Current state: " + currentState.value);
    console.log("Input symbol: " + input[0]);
    console.log("Start symbol: " + stack[stack.length - 1].value);
    pushdownAutomata.transitionFunction.forEach((value: TransitionFunction, index: number) => {
        console.log("getNextTransitionFunction index: " + index);
        if(value.fromState.id == currentState.id)
        {
            console.log("state ok");
            if(value.inputSymbol.isEpsylon == true || value.inputSymbol.value == input[0])
            {
                console.log("input symbol ok");
                if(value.startSymbol?.value == stack[stack.length-1].value)
                {
                    console.log("start symbol ok");
                    console.log(value);
                }
            }            
        }
    });
    console.log("getNextTransitionFunction ended");
}

window.document.getElementById("next")?.addEventListener("click", getNextTransitionFunction);


