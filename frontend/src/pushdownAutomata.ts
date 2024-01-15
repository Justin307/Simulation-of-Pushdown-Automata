import { State, InputSymbol, StackSymbol, TransitionFunction } from "./pushdownAutomataTypes";

export class PushdownAutomata{
    states: State[];
    inputSymbols: InputSymbol[];
    stackSymbols: StackSymbol[];
    initialState: State;
    initialStackSymbol: StackSymbol | null;
    finalStates: State[] | null;
    transitionFunction: TransitionFunction[];
    constructor(states: State[], inputSymbols: InputSymbol[], stackSymbols: StackSymbol[], initialState: State, initialStackSymbol: StackSymbol, finalStates: State[] | null, transitionFunction: TransitionFunction[])
    {
        this.states = states;
        this.inputSymbols = inputSymbols;
        this.stackSymbols = stackSymbols;
        this.initialState = initialState;
        this.initialStackSymbol = initialStackSymbol;
        this.finalStates = finalStates;
        this.transitionFunction = transitionFunction;
    }

    //TODO Check functionality of check functions

    checkStatesExistence() :[string, State][]{
        var errorMsg :[string, State][] = [];

        if(!this.states.includes(this.initialState)){
            errorMsg.push(["Initial state does not exist", this.initialState]);
        }

        if(this.finalStates != null){
            for(let finalState of this.finalStates){
                if(!this.states.includes(finalState)){
                    errorMsg.push(["Final state does not exist", finalState]);
                }
            }
        }

        return errorMsg;
    }
    
    checkSymbolExistence() :[string, StackSymbol][]{
        var errorMsg :[string, StackSymbol][] = [];

        if(this.initialStackSymbol != null){
            if(!this.stackSymbols.includes(this.initialStackSymbol)){
                errorMsg.push(["Initial stack symbol does not exist", this.initialStackSymbol]);
            }
        }

        return errorMsg;
    }
    
    //TODO Check Transition functions
}