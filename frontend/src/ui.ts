import { PushdownAutomataSimulator } from "./pushdownAutomataSimulator";
import { PushdownAutomata } from "./pushdownAutomata";
import { TransitionFunction, InputSymbol, StackSymbol, State } from "./pushdownAutomataTypes";

export class UI{
    simulator?: PushdownAutomataSimulator;
    transtitionHistory?: HTMLDivElement;
    tape?: HTMLDivElement;
    stack?: HTMLDivElement;
    state?: HTMLDivElement;

    constructor(automata?: PushdownAutomata){
        if(automata){
            this.setAutomata(automata);
            this.fillInformation();
        }
        this.transtitionHistory = document.getElementById("transitionHistoryDiv") as HTMLDivElement;
        this.tape = document.getElementById("tapeDiv") as HTMLDivElement;
        this.stack = document.getElementById("stackDiv") as HTMLDivElement;
        this.state = document.getElementById("stateDiv") as HTMLDivElement;
    }

    setAutomata(automata: PushdownAutomata): void{
        this.simulator = new PushdownAutomataSimulator(automata);
        this.fillInformation();
    }

    private generateTransitionFunction(f: TransitionFunction): HTMLDivElement {
        let res = document.createElement("div") as HTMLDivElement;
        res.classList.add("flex", "flex-row", "flex-nowrap", "justify-center", "pt-3");

        let left = document.createElement("div") as HTMLDivElement;
        left.innerText = f.fromState.value + " " + f.startSymbol.value ?? "";
        res.append(left);

        let arrow = document.createElement("div") as HTMLDivElement;
        arrow.classList.add("px-1", "relative");
        arrow.innerText = "──>";
        res.append(arrow);

        let symbol = document.createElement("div") as HTMLDivElement;
        symbol.classList.add("absolute", "top-0", "left-1/2", "-translate-x-[100%]", "-translate-y-2");
        symbol.innerText = f.inputSymbol.isEpsylon ? "ε" : f.inputSymbol.value;
        arrow.append(symbol);

        let right = document.createElement("div") as HTMLDivElement;
        right.innerText = f.toState.value + " " + f.pushedSymbols.map(s => s.value).join("");
        res.append(right);

        return res;
    }

    fillInformation(): void{
        //States
        document.getElementById("infoStates")!.innerText = this.simulator?.automata.states.map((s) => s.value).join(", ");
        //Input symbols
        document.getElementById("infoInputSymbols")!.innerText = this.simulator?.automata.inputSymbols.map((s) => s.value).join(", ");
        //Stack symbols
        document.getElementById("infoStackSymbols")!.innerText = this.simulator?.automata.stackSymbols.map((s) => s.value).join(", ");
        //Initial state
        document.getElementById("infoInitialState")!.innerText = this.simulator?.automata.initialState.value;
        //Initial stack symbol
        document.getElementById("infoInitialStackSymbol")!.innerText = this.simulator?.automata.initialStackSymbol?.value ?? "Empty stack";
        //Accepting states
        document.getElementById("infoAcceptingState")!.innerText = this.simulator?.automata.acceptingState?.map((s) => s.value).join(", ") ?? "Acceptance by Empty Stack";
        //Transition functions
        let tFunction =  document.getElementById("infoTranstionFunction") as HTMLDivElement;
        tFunction.innerHTML = "";
        for(let f of this.simulator?.automata.transitionFunction ?? []){
            console.log(f);
            tFunction.append(this.generateTransitionFunction(f));
        }
    }

    addToHistory(f: TransitionFunction): void{
        if(this.transtitionHistory){
            this.transtitionHistory.prepend(this.generateTransitionFunction(f));
        }
    }

    removeFromHistory(): void{
        if(this.transtitionHistory && this.transtitionHistory.childElementCount > 0){
            this.transtitionHistory.removeChild(this.transtitionHistory.firstChild);
        }
    }

    addToTape(s: InputSymbol): void{
        let symbol = document.createElement("div") as HTMLDivElement;
        symbol.classList.add("bg-red-500","h-16","w-16","m-2","flex-shrink-0","flex","justify-center","items-center")
        symbol.innerText = s.value;

        this.tape?.prepend(symbol);
    }

    removeFromTape(): void{
        if(this.tape && this.tape.childElementCount > 0){
            this.tape.removeChild(this.tape.firstChild);
        }
    }

    changeState(s: State): void{
        if(this.state){
            this.state.innerText = s.value;
        }
    }

    addToStack(s: StackSymbol): void{
        let symbol = document.createElement("div") as HTMLDivElement;
        symbol.classList.add("bg-green-500","h-16","w-16","m-2","flex-shrink-0","flex","justify-center","items-center","first:mt-auto")
        symbol.innerText = s.value;

        this.stack?.prepend(symbol);
    }

    removeFromStack(): void{
        if(this.stack && this.stack.childElementCount > 0){
            this.stack.removeChild(this.stack.firstChild);
        }
    }
}