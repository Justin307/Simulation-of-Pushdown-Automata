import { Stack } from "./stack";
import { StackSymbol, State, TransitionFunction } from "./pushdownAutomataTypes";
import { PushdownAutomata } from "./pushdownAutomata";
export declare class FrontEndStructure {
    inputTape: string;
    stack: Stack<StackSymbol>;
    currentState: State;
    acceptingState: State[] | null;
    automata: PushdownAutomata;
    history: TransitionFunction[];
    FrontEndStructure(automata: PushdownAutomata): void;
    reset(): void;
    checkInputTapeValidity(): void;
    acceptedInput(): boolean;
    setNewInput(input: string): void;
}
