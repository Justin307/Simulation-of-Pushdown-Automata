/// <reference types="node" />
import { PushdownAutomataSimulator } from "./pushdownAutomataSimulator";
import { PushdownAutomata } from "./pushdownAutomata";
import { TransitionFunction, InputSymbol, StackSymbol, State } from "./pushdownAutomataTypes";
export declare class UI {
    simulator?: PushdownAutomataSimulator;
    transtitionHistory?: HTMLDivElement;
    tape?: HTMLDivElement;
    stack?: HTMLDivElement;
    state?: HTMLDivElement;
    infoButton?: HTMLButtonElement;
    transitionOptions?: HTMLDivElement;
    tapePosition: number;
    isChoosing: boolean;
    isRunnig: boolean;
    directionForward: boolean;
    speed: number;
    timeout: NodeJS.Timeout | null;
    constructor(automata?: PushdownAutomata);
    setAutomata(automata: PushdownAutomata): void;
    registerEvents(): void;
    private generateTransitionFunction;
    fillInformation(): void;
    addToHistory(f: TransitionFunction): void;
    removeFromHistory(): void;
    addToTape(s: InputSymbol, append?: boolean): void;
    removeFromTape(): void;
    setSymbolToState(s: HTMLDivElement, state: number): void;
    moveTape(backward?: boolean): void;
    changeState(s: State): void;
    addToStack(s: StackSymbol): void;
    removeFromStack(): void;
    resetUI(): void;
    setTape(tape: string): void;
    useTransition(f: TransitionFunction): void;
    private generateOptions;
    nextStep(): void;
    backStep(): void;
}
