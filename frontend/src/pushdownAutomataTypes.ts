export type StackSymbol = {
    value: string;
}

export type InputSymbol = {
    isEpsylon: boolean;
    value?: string;
}

export type State = {
    id: number;
    value: string;
}

export type TransitionFunction = {
    fromState: State;
    inputSymbol: InputSymbol;
    startSymbol: StackSymbol | null;
    toState: State;
    pushedSymbols: StackSymbol[];
}