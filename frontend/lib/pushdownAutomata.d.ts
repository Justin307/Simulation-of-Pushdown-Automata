import { State, InputSymbol, StackSymbol, TransitionFunction } from "./pushdownAutomataTypes";
export declare class PushdownAutomata {
    states: State[];
    inputSymbols: InputSymbol[];
    stackSymbols: StackSymbol[];
    initialState: State;
    initialStackSymbol: StackSymbol | null;
    acceptingState: State[] | null;
    transitionFunction: TransitionFunction[];
    constructor(states: State[], inputSymbols: InputSymbol[], stackSymbols: StackSymbol[], initialState: State, initialStackSymbol: StackSymbol, acceptingState: State[] | null, transitionFunction: TransitionFunction[]);
    private stateExists;
    private inputSymbolExists;
    private stackSymbolExists;
    checkStatesExistence(): [string, State][];
    checkSymbolExistence(): [string, StackSymbol][];
    checkTransitionFunctions(): [string, TransitionFunction][];
    checkInputTapeValidity(inputTape: string): string[];
}
