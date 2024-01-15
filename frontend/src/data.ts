import { Stack } from "./stack";
import { StackSymbol, State } from "./pushdownAutomataTypes";
import { PushdownAutomata } from "./pushdownAutomata";

export class FrontEndStructure{
    inputTape: string;
    stack: Stack<StackSymbol>;
    currentState: State;
    finalState: State | null;
    automata: PushdownAutomata;
    //TODO Add used transitions history

    //TODO Constructor

    //TODO Reset function

    //TODO Apply transition function

    //TODO Check validity of input tape

    //TODO Check if imput is accepted

    //TODO Next step

    //TODO Back step

    //TODO Set new input

    //TODO Check Automata validity
}