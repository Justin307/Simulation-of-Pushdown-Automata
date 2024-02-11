import { PushdownAutomata } from "./pushdownAutomata";
import { State, StackSymbol, InputSymbol, TransitionFunction } from "./pushdownAutomataTypes";
export declare function checkPushdownAutomata(pda: PushdownAutomata): boolean;
export declare function checkPushdownAutomata(state: State[], stackSymbol: StackSymbol[], inputSymbol: InputSymbol[], initialState: State, initialStackSymbol: StackSymbol, acceptingState: State[] | null, transitionFunction: TransitionFunction[]): boolean;
