import { PushdownAutomataSimulator } from "./pushdownAutomataSimulator";
import { PushdownAutomata } from "./pushdownAutomata";
import { TransitionFunction, InputSymbol, StackSymbol, State } from "./pushdownAutomataTypes";
export declare class UI {
    simulator?: PushdownAutomataSimulator;
    transtitionHistory?: HTMLDivElement;
    tape?: HTMLDivElement;
    stack?: HTMLDivElement;
    state?: HTMLDivElement;
    constructor(automata?: PushdownAutomata);
    setAutomata(automata: PushdownAutomata): void;
    private generateTransitionFunction;
    fillInformation(): void;
    addToHistory(f: TransitionFunction): void;
    removeFromHistory(): void;
    addToTape(s: InputSymbol): void;
    removeFromTape(): void;
    changeState(s: State): void;
    addToStack(s: StackSymbol): void;
    removeFromStack(): void;
}
