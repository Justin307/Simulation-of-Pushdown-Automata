export type StackSymbol = {
    value: string;
};
export declare function compareStackSymbol(a: StackSymbol | null, b: StackSymbol | null): boolean;
export type InputSymbol = {
    isEpsylon: boolean;
    value?: string;
};
export declare function compareInputSymbol(a: InputSymbol, b: InputSymbol): boolean;
export type State = {
    value: string;
};
export declare function compareState(a: State, b: State): boolean;
export type TransitionFunction = {
    fromState: State;
    inputSymbol: InputSymbol;
    startSymbol: StackSymbol | null;
    toState: State;
    pushedSymbols: StackSymbol[];
};
export declare function compareTransitionFunction(a: TransitionFunction, b: TransitionFunction): boolean;
