import { PushdownAutomata } from "./pushdownAutomata"; 
import { State, StackSymbol, InputSymbol, TransitionFunction } from "./pushdownAutomataTypes";
import { compareState, compareStackSymbol, compareInputSymbol, compareTransitionFunction } from "./pushdownAutomataTypes";

type customType = State | StackSymbol | InputSymbol | TransitionFunction;

function includeDuplicates<T extends customType>(arr: T[], compare: (a: T, b: T) => boolean): boolean{
    return arr.some((value, index, self) => self.filter(x => compare(x, value)).length > 1 );
}

export function checkPushdownAutomata(pda: PushdownAutomata): boolean;
export function checkPushdownAutomata(state: State[], stackSymbol: StackSymbol[], inputSymbol: InputSymbol[], initialState: State, initialStackSymbol: StackSymbol, acceptingState: State[] | null, transitionFunction: TransitionFunction[]): boolean;
export function checkPushdownAutomata(state: State[] | PushdownAutomata, stackSymbol?: StackSymbol[], inputSymbol?: InputSymbol[], initialState?: State, initialStackSymbol?: StackSymbol, acceptingState?: State[] | null, transitionFunction?: TransitionFunction[]): boolean {
    let pda: PushdownAutomata;
    if(state instanceof PushdownAutomata){
        pda = state;
    }else{
        pda = new PushdownAutomata(state as State[],inputSymbol!,stackSymbol!,initialState!, initialStackSymbol!, acceptingState!, transitionFunction!);
    }
    //States
    let error = false;
    let errorMSg: string[] = [];
    if(pda.states.length === 0){
        error = true;
        errorMSg.push("No states");
    }
    if(includeDuplicates(pda.states, compareState)){
        error = true;
        errorMSg.push("Duplicate states");
    }
    //Input symbols
    if(pda.inputSymbols.length === 0){
        error = true;
        errorMSg.push("No input symbols");
    }
    if(includeDuplicates(pda.inputSymbols, compareInputSymbol)){
        error = true;
        errorMSg.push("Duplicate input symbols");
    }
    //Stack symbols
    if(pda.stackSymbols.length === 0){
        error = true;
        errorMSg.push("No stack symbols");
    }
    if(includeDuplicates(pda.stackSymbols, compareStackSymbol)){
        error = true;
        errorMSg.push("Duplicate stack symbols");
    }
    //Initial state
    if(pda.initialState === null){
        error = true;
        errorMSg.push("No initial state");
    }
    if(!pda.states.some(s => compareState(s, pda.initialState))){
        error = true;
        errorMSg.push("Initial state does not exist");
    }

    //Initial stack symbol
    if(pda.initialStackSymbol !== null){
        if(!pda.stackSymbols.some(s => compareStackSymbol(s, pda.initialStackSymbol))){
            error = true;
            errorMSg.push("Initial stack symbol does not exist");
        }
    }
    //Accepting state
    if(pda.acceptingState !== null){
        let tempError = false;
        for(let finalState of pda.acceptingState){
            if(!pda.states.some(s => compareState(s, finalState))){
                tempError = true;
                break;
            }
        }
        if(tempError){
            error = true;
            errorMSg.push("At least one accepting state does not exist");
        }
    }
    //Transition function
    if(pda.transitionFunction.length === 0){
        error = true;
        errorMSg.push("No transition function");
    }
    let tempError = false;
    for(let t of pda.transitionFunction){
        if(!pda.states.some(s => compareState(s, t.fromState))){
            tempError = true;
            break;
        }
        if(!(t.inputSymbol.isEpsylon || (!t.inputSymbol.isEpsylon && pda.inputSymbols.some(i => compareInputSymbol(i, t.inputSymbol))))){
            tempError = true;
            break;
        }
        if(!pda.stackSymbols.some(s => compareStackSymbol(s, t.startSymbol))){
            tempError = true;
            break;
        }
        for(let pushedSymbol of t.pushedSymbols){
            if(!pda.stackSymbols.some(s => compareStackSymbol(s, pushedSymbol))){
                tempError = true;
                break;
            }
        }
    }
    if(tempError){
        error = true;
        errorMSg.push("At least one transition function is incorrect");
    }

    if(error){
        alert("Error in PDA: \n -" + errorMSg.join("\n -"));
        return false;
    }

    return true;
}