import { State, InputSymbol, StackSymbol, TransitionFunction } from "./pushdownAutomataTypes";
import { compareState, compareInputSymbol, compareStackSymbol } from "./pushdownAutomataTypes";

export class PushdownAutomata{
    states: State[];
    inputSymbols: InputSymbol[];
    stackSymbols: StackSymbol[];
    initialState: State;
    initialStackSymbol: StackSymbol;
    acceptingState: State[] | null;
    transitionFunction: TransitionFunction[];
    constructor(states: State[], inputSymbols: InputSymbol[], stackSymbols: StackSymbol[], initialState: State, initialStackSymbol: StackSymbol, acceptingState: State[] | null, transitionFunction: TransitionFunction[])
    {
        this.states = states;
        this.inputSymbols = inputSymbols;
        this.stackSymbols = stackSymbols;
        this.initialState = initialState;
        this.initialStackSymbol = initialStackSymbol;
        this.acceptingState = acceptingState;
        this.transitionFunction = transitionFunction;
    }

    private stateExists(state: State): boolean{
        for(let s of this.states){
            if(compareState(s, state)){
                return true;
            }
        }

        return false;
    }

    private inputSymbolExists(inputSymbol: InputSymbol): boolean{
        for(let i of this.inputSymbols){
            if(compareInputSymbol(i, inputSymbol)){
                return true;
            }
        }

        return false;
    }

    private stackSymbolExists(stackSymbol: StackSymbol): boolean{
        for(let s of this.stackSymbols){
            if(compareStackSymbol(s, stackSymbol)){
                return true;
            }
        }

        return false;
    }

    checkStatesExistence() :[string, State][]{
        var errorMsg :[string, State][] = [];

        if(!this.stateExists(this.initialState)){
            errorMsg.push(["Initial state does not exist", this.initialState]);
        }

        if(this.acceptingState != null){
            for(let finalState of this.acceptingState){
                if(!this.stateExists(finalState)){
                    errorMsg.push(["Accepting state does not exist", finalState]);
                }
            }
        }

        return errorMsg;
    }
    
    checkSymbolExistence() :[string, StackSymbol][]{
        var errorMsg :[string, StackSymbol][] = [];

        if(this.initialStackSymbol != null){
            if(!this.stackSymbolExists(this.initialStackSymbol)){
                errorMsg.push(["Initial stack symbol does not exist", this.initialStackSymbol]);
            }
        }

        return errorMsg;
    }
    
    checkTransitionFunctions() :[string, TransitionFunction][]{
        var errorMsg :[string, TransitionFunction][] = [];

        for(let transitionFunction of this.transitionFunction){
            if(!this.stateExists(transitionFunction.fromState)){
                errorMsg.push(["From state does not exist", transitionFunction]);
            }

            if(!this.inputSymbolExists(transitionFunction.inputSymbol)){
                errorMsg.push(["Input symbol does not exist", transitionFunction]);
            }

            if(transitionFunction.startSymbol != null && !this.stackSymbolExists(transitionFunction.startSymbol)){
                errorMsg.push(["Stack symbol does not exist", transitionFunction]);
            }

            if(!this.stateExists(transitionFunction.toState)){
                errorMsg.push(["To state does not exist", transitionFunction]);
            }

            for(let pushedSymbol of transitionFunction.pushedSymbols){
                if(!this.stackSymbolExists(pushedSymbol)){
                    errorMsg.push(["Pushed symbol does not exist", transitionFunction]);
                }
            }
        }

        return errorMsg;
    }

    checkInputTapeValidity(inputTape: string): string[]{
        let invalidSymbols: string[] = [];
        
        let symbols = new Set(inputTape.split(""));

        for(let s of symbols){
            let invalid: boolean = true;
            for(let inputSymbol of this.inputSymbols){
                if(inputSymbol.isEpsilon == false && inputSymbol.value == s){
                    invalid = false;
                    break;
                }
            }
            if(invalid){
                invalidSymbols.push(s);
            }
        }

        return invalidSymbols;
    }

    getTransitionFunctions(tapeSymbol: string, state: State, stackSymbol:  StackSymbol | null): TransitionFunction[]{
        let possibleTransitionFunctions: TransitionFunction[] = [];

        let inputSymbol: InputSymbol;
        if(tapeSymbol === ""){
            inputSymbol = {isEpsilon: true}
        }
        else{
            inputSymbol = {isEpsilon: false, value: tapeSymbol};
        }
        for(let transitionFunction of this.transitionFunction){
            if(!compareInputSymbol(inputSymbol, transitionFunction.inputSymbol) && !transitionFunction.inputSymbol.isEpsilon){
                continue;
            }
            if(!compareState(state, transitionFunction.fromState)){
                continue;
            }
            if(!compareStackSymbol(stackSymbol, transitionFunction.startSymbol)){
                continue;
            }
            possibleTransitionFunctions.push(transitionFunction);
        }

        return possibleTransitionFunctions;
    }
}