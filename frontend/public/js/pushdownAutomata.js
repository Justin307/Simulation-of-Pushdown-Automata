export class TransitionFunction {
    fromState;
    inputSymbol;
    startSymbol;
    toState;
    pushedSymbols;
    constructor(fromState, startSymbol, inputSymbol, toState, pushedSymbols) {
        this.fromState = fromState;
        this.startSymbol = startSymbol;
        this.inputSymbol = inputSymbol;
        this.toState = toState;
        this.pushedSymbols = pushedSymbols;
    }
}
export class PushdownAutomata {
    states;
    inputSymbols;
    stackSymbols;
    initialState;
    initialStackSymbol;
    finalStates;
    transitionFunction;
    constructor(states, inputSymbols, stackSymbols, initialState, initialStackSymbol, finalStates, transitionFunction) {
        this.states = states;
        this.inputSymbols = inputSymbols;
        this.stackSymbols = stackSymbols;
        this.initialState = initialState;
        this.initialStackSymbol = initialStackSymbol;
        this.finalStates = finalStates;
        this.transitionFunction = transitionFunction;
    }
}
