import { Stack } from "./stack";
import { StackSymbol, State, TransitionFunction } from "./pushdownAutomataTypes";
import { PushdownAutomata } from "./pushdownAutomata";
export declare class PushdownAutomataSimulator {
    inputTape: string;
    stack: Stack<StackSymbol>;
    currentState: State;
    acceptingState: State[] | null;
    automata: PushdownAutomata;
    history: TransitionFunction[];
    constructor(automata: PushdownAutomata);
    reset(): void;
    applyTransitionFunction(f: TransitionFunction): void;
    checkInputTapeValidity(): void;
    acceptedInput(): boolean;
    nextStep(): TransitionFunction[];
    backStep(): TransitionFunction | null;
    setNewInput(input: string): void;
}
