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
    let tempError = false;
    for(let s of pda.inputSymbols){
        if(s.value.length != 1) {
            tempError = true
        }
    }
    if(tempError){
        error = true;
        errorMSg.push("All input symbols must be one character long");
        tempError = false;
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
    for(let s of pda.stackSymbols){
        if(s.value.length != 1) {
            tempError = true
        }
    }
    if(tempError){
        error = true;
        errorMSg.push("All stack symbols must be one character long");
        tempError = false;
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
        let errorMessagePushed = false;
        for(let finalState of pda.acceptingState){
            if(!pda.states.some(s => compareState(s, finalState))){
                if(!errorMessagePushed){
                    error = true;
                    errorMessagePushed = true;
                    errorMSg.push("These accepting states do not exist:");
                }
                errorMSg.push("-> " + finalState.value);
                break;
            }
        }  
    }
    //Transition function
    if(pda.transitionFunction.length === 0){
        error = true;
        errorMSg.push("No transition function");
    }
    let errorMessagePushed = false;
    let pushMessage = () => {
        if(!errorMessagePushed){
            error = true;
            errorMessagePushed = true;
            errorMSg.push("These transitions are invalid:");
        }
    }
    let errorTransitionPushed = false;
    let pushTransition = (t: TransitionFunction) => {
        if(!errorTransitionPushed){
            error = true;
            errorTransitionPushed = true;
             errorMSg.push("-> " + t.fromState.value + " " + t.startSymbol.value + " -- " + (t.inputSymbol.isEpsilon ? "ε" : t.inputSymbol.value) + " -> " + t.toState.value + " " + t.pushedSymbols.map(s => s.value).join(" "));
        }
    }
    for(let t of pda.transitionFunction){
        errorTransitionPushed = false;
        if(!pda.states.some(s => compareState(s, t.fromState))){
            pushMessage();
            pushTransition(t);
            errorMSg.push("   From state does not exist");
        }
        if(!pda.states.some(s => compareState(s, t.toState))){
            pushMessage();
            pushTransition(t);
            errorMSg.push("   To state does not exist");
        }
        if(!(t.inputSymbol.isEpsilon || (!t.inputSymbol.isEpsilon && pda.inputSymbols.some(i => compareInputSymbol(i, t.inputSymbol))))){
            pushMessage();
            pushTransition(t);
            errorMSg.push("   Input symbol does not exist");
        }
        if(!pda.stackSymbols.some(s => compareStackSymbol(s, t.startSymbol))){
            pushMessage();
            pushTransition(t);
            errorMSg.push("   Popped symbol does not exist");
        }
        for(let pushedSymbol of t.pushedSymbols){
            if(!pda.stackSymbols.some(s => compareStackSymbol(s, pushedSymbol))){
                pushMessage();
                pushTransition(t);
                errorMSg.push("   Pushed symbol " + pushedSymbol.value + " does not exist");
            }
        }
    }

    if(error){
        alert("Error in PDA: \n " + errorMSg.join("\n "));
        return false;
    }

    return true;
}