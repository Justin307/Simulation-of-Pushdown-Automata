export interface StackSymbol{
    value: string;
}

export interface InputSymbol{
    isEpsylon: false;
    value: string;
}

export interface EpsylonSymbol{
    isEpsylon: true;
}

export interface State{
    id: number;
    value: string;
}

export class TransitionFunction{
    fromState: State;
    inputSymbol: InputSymbol | EpsylonSymbol;
    startSymbol: StackSymbol | null;
    toState: State;
    pushedSymbols: StackSymbol[];
    constructor(fromState: State, startSymbol: StackSymbol, inputSymbol: InputSymbol | EpsylonSymbol, toState: State, pushedSymbols: StackSymbol[])
    {
        this.fromState = fromState;
        this.startSymbol = startSymbol;
        this.inputSymbol = inputSymbol;
        this.toState = toState;
        this.pushedSymbols = pushedSymbols;
    }
}

export class PushdownAutomata{
    states: State[];
    inputSymbols: InputSymbol[];
    stackSymbols: StackSymbol[];
    initialState: State;
    initialStackSymbol: StackSymbol | null;
    finalStates: State[] | null;
    transitionFunction: TransitionFunction[];
    constructor(states: State[], inputSymbols: InputSymbol[], stackSymbols: StackSymbol[], initialState: State, initialStackSymbol: StackSymbol, finalStates: State[] | null, transitionFunction: TransitionFunction[])
    {
        this.states = states;
        this.inputSymbols = inputSymbols;
        this.stackSymbols = stackSymbols;
        this.initialState = initialState;
        this.initialStackSymbol = initialStackSymbol;
        this.finalStates = finalStates;
        this.transitionFunction = transitionFunction;
    }
}