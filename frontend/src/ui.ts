import { PushdownAutomataSimulator } from "./pushdownAutomataSimulator";
import { PushdownAutomata } from "./pushdownAutomata";
import { TransitionFunction, InputSymbol, StackSymbol, State } from "./pushdownAutomataTypes";

export class UI{
    simulator?: PushdownAutomataSimulator;
    transtitionHistory?: HTMLDivElement;
    tape?: HTMLDivElement;
    stack?: HTMLDivElement;
    state?: HTMLDivElement;
    infoButton?: HTMLButtonElement;
    transitionOptions?: HTMLDivElement;

    constructor(automata?: PushdownAutomata){
        if(automata){
            this.setAutomata(automata);
            this.fillInformation();
        }
        this.transtitionHistory = document.getElementById("transitionHistoryDiv") as HTMLDivElement;
        this.tape = document.getElementById("tapeDiv") as HTMLDivElement;
        this.stack = document.getElementById("stackDiv") as HTMLDivElement;
        this.state = document.getElementById("stateDiv") as HTMLDivElement;
        this.infoButton = document.getElementById("showInfoButton") as HTMLButtonElement;
        this.transitionOptions = document.getElementById("transitionOptions") as HTMLDivElement;
    }

    setAutomata(automata: PushdownAutomata): void{
        this.simulator = new PushdownAutomataSimulator(automata);
        this.fillInformation();
        this.resetUI();
    }

    registerEvents(): void{
        document.getElementById("buttonNext")?.addEventListener("click", this.nextStep.bind(this));
        document.getElementById("buttonBack")?.addEventListener("click", this.backStep.bind(this));
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

    addToTape(s: InputSymbol, append?: boolean): void{
        let symbol = document.createElement("div") as HTMLDivElement;
        symbol.classList.add("bg-red-500","h-16","w-16","m-2","flex-shrink-0","flex","justify-center","items-center")
        symbol.innerText = s.value;
        if(append && append == true){
            this.tape?.append(symbol);
        }
        else{
            this.tape?.prepend(symbol);
        }
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

    resetUI(): void{
        if(this.stack){
            this.stack.innerHTML = "";
        }

        if(this.state){
            this.state.innerHTML = ""
        }

        if(this.tape){
            this.tape.innerHTML = "";
        }

        if(this.transtitionHistory){
            this.transtitionHistory.innerHTML = "";
        }

        if(this.simulator)
        {
            this.state.innerText = this.simulator.automata.initialState.value;
            if(this.simulator.automata.initialStackSymbol){
                this.addToStack(this.simulator.automata.initialStackSymbol);
            }
        }
    }

    setTape(tape: string): void{
        this.simulator?.setNewInput(tape);
        this.resetUI();
        if(this.tape){
            this.tape.innerHTML = "";
            for(let s of tape){
                this.addToTape({isEpsylon: false, value: s}, true);
            }
        }
    }

    useTransition(f: TransitionFunction): void{
        this.simulator?.applyTransitionFunction(f);
        this.changeState(f.toState);
        if(!f.inputSymbol.isEpsylon){
            this.removeFromTape();
        }
        if(f.startSymbol != null){
            this.removeFromStack();
        }
        for(let i = f.pushedSymbols.length-1; i >= 0; i--){
            this.addToStack(f.pushedSymbols[i]);
        }
        this.addToHistory(f);
    }

    private generateOptions(options: TransitionFunction[]): void{
        if(this.infoButton){
            this.infoButton.classList.remove("flex");
            this.infoButton.classList.add("hidden");
        }
        if(this.transitionOptions){
            this.transitionOptions.innerHTML = "";
        }
        for(let o of options){
            let option = document.createElement("button") as HTMLButtonElement;
            option.classList.add("px-2","py-1","mx-auto");
            option.append(this.generateTransitionFunction(o));
            option.addEventListener("click", () => {
                this.useTransition(o);
                if(this.transitionOptions){
                    this.transitionOptions.innerHTML = "";
                }
                this.infoButton.classList.add("flex");
                this.infoButton.classList.remove("hidden");
            });
            this.transitionOptions?.append(option);
        }
    }

    nextStep(): void{
        if(this.simulator){
            let possibleTranstions: TransitionFunction[] = this.simulator.nextStep();
            if(possibleTranstions.length == 0){
                throw new Error("No possible transitions");
            }
            else if(possibleTranstions.length == 1){
                this.useTransition(possibleTranstions[0]);
            }
            else{
                this.generateOptions(possibleTranstions);
            }
        }
    }

    backStep(): void{
        if(this.simulator){
            let last = this.simulator.backStep();
            if(last){
                this.removeFromHistory();
                this.changeState(last.fromState);
                if(!last.inputSymbol.isEpsylon){
                    this.addToTape(last.inputSymbol, false);
                }
                for(let i = 0; i < last.pushedSymbols.length; i++){ 
                    this.removeFromStack();
                }
                if(last.startSymbol != null){
                    this.addToStack(last.startSymbol);
                }
            }
        }
    }
}