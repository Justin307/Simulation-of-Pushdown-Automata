import { Stack } from "./stack";
import { StackSymbol, State, TransitionFunction } from "./pushdownAutomataTypes";
import { compareState } from "./pushdownAutomataTypes";
import { PushdownAutomata } from "./pushdownAutomata";

export class FrontEndStructure{
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
        console.log("Applying transition function:");
        console.log(f);
        this.inputTape = this.inputTape.substring(1);
        this.stack.pop();
        for(let s of f.pushedSymbols){
            this.stack.push(s);
        }
        this.currentState = f.toState;
        this.history.push(f);
        //TODO modify UI
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

    nextStep(): void{
        let result: boolean = this.acceptedInput();

        if(result){
            //TODO raise alert - accepted
            throw new Error("Input already accepted");
        }

        if(this.inputTape === ""){
            //TODO raise alert - no more input / not accepted
            throw new Error("No more input");
        }

        let possibleTransitionFunctions: TransitionFunction[] = this.automata.getTransitionFunctions(this.inputTape[0], this.currentState, this.stack.top());

        if(possibleTransitionFunctions.length === 0){
            //TODO raise alert - no possible transition function
            throw new Error("No possible transition function");
        }
        else if(possibleTransitionFunctions.length == 1){
            this.applyTransitionFunction(possibleTransitionFunctions[0]);
        }
        else{
            //TODO raise alert - multiple transition functions
            // And let the user choose
            throw new Error("Multiple transition functions");
        }
    }

    backStep(): void{
        if(this.history.length === 0){
            //TODO raise alert - no history available
            throw new Error("No previous step");
        }

        let last: TransitionFunction = this.history.pop();
        this.currentState = last.fromState;
        for(let i = 0; i < last.pushedSymbols.length; i++){ 
            this.stack.pop();
        }
        this.stack.push(last.startSymbol);
        this.inputTape = last.inputSymbol?.value + this.inputTape;
        //TODO modify UI
    }

    setNewInput(input: string): void{
        this.reset();
        this.inputTape = input;
    }

    //TODO Check Automata validity

    uiSetAutomataInformation(): void{
        //States
        document.getElementById("infoStates")!.innerHTML = this.automata.states.map((s) => s.value).join(", ");
        //Input symbols
        document.getElementById("infoInputSymbols")!.innerHTML = this.automata.inputSymbols.map((s) => s.value).join(", ");
        //Stack symbols
        document.getElementById("infoStackSymbols")!.innerHTML = this.automata.stackSymbols.map((s) => s.value).join(", ");
        //Initial state
        document.getElementById("infoInitialState")!.innerHTML = this.automata.initialState.value;
        //Initial stack symbol
        document.getElementById("infoInitialStackSymbol")!.innerHTML = this.automata.initialStackSymbol?.value ?? "Empty stack";
        //Accepting states
        document.getElementById("infoAcceptingState")!.innerHTML = this.automata.acceptingState?.map((s) => s.value).join(", ") ?? "Acceptance by Empty Stack";
        //Transition functions
        document.getElementById("infoTranstionFunction")!.innerHTML = this.automata.transitionFunction.map((f) => JSON.stringify(f)).join("<br>");
    }
}