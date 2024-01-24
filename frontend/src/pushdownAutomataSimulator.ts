import { Stack } from "./stack";
import { StackSymbol, State, TransitionFunction } from "./pushdownAutomataTypes";
import { compareState } from "./pushdownAutomataTypes";
import { PushdownAutomata } from "./pushdownAutomata";

export class PushdownAutomataSimulator{
    inputTape: string;
    stack: Stack<StackSymbol>;
    currentState: State;
    acceptingState: State[] | null;
    automata: PushdownAutomata;
    history: TransitionFunction[] = [];

    constructor(automata: PushdownAutomata){
        this.automata = automata;
        this.inputTape = "";
        this.stack = new Stack<StackSymbol>();
        if(this.automata.initialStackSymbol != null){
            this.stack.push(this.automata.initialStackSymbol);
        }
        this.currentState = this.automata.initialState;
        this.acceptingState = this.automata.acceptingState;
        this.history = [];
    }

    reset(): void{
        this.inputTape = "";
        this.stack.clear();
        if(this.automata.initialStackSymbol != null){
            this.stack.push(this.automata.initialStackSymbol);
        }
        this.currentState = this.automata.initialState;
        this.acceptingState = this.automata.acceptingState;
        this.history = [];
    }

    applyTransitionFunction(f: TransitionFunction): void{
        this.inputTape = this.inputTape.substring(1);
        this.stack.pop();
        for(let i = f.pushedSymbols.length-1; i >= 0; i--){
            this.stack.push(f.pushedSymbols[i]);
        }
        this.currentState = f.toState;
        this.history.push(f);
    }

    checkInputTapeValidity(): void{
        let invalidSymbols: string[] = this.automata.checkInputTapeValidity(this.inputTape);
        if(invalidSymbols.length > 0){
            throw new Error("Invalid input tape: " + invalidSymbols.join(", "));
        }
    }

    acceptedInput(): boolean{
        if(this.inputTape !== ""){
            return false;
        }

        if(this.acceptingState == null){
            return this.stack.empty();
        }
        
        for(let s of this.acceptingState){
            if(compareState(s, this.currentState)){
                return true;
            }
        }

        return false;
    }

    nextStep(): TransitionFunction[]{
        if(this.acceptedInput()){
            return [];
        }

        let possibleTransitionFunctions: TransitionFunction[] = this.automata.getTransitionFunctions(this.inputTape[0], this.currentState, this.stack.top());

        return possibleTransitionFunctions;
    }

    backStep(): TransitionFunction | null{
        if(this.history.length === 0){
            return null;
        }

        let last: TransitionFunction = this.history.pop();
        this.currentState = last.fromState;
        for(let i = 0; i < last.pushedSymbols.length; i++){ 
            this.stack.pop();
        }
        this.stack.push(last.startSymbol);
        this.inputTape = last.inputSymbol?.value + this.inputTape;
        
        return last;
    }

    setNewInput(input: string): void{
        this.reset();
        this.inputTape = input;
    }

    //TODO Check Automata validity
}