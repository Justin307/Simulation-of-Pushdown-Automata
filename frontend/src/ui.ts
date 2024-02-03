import { PushdownAutomataSimulator } from "./pushdownAutomataSimulator";
import { PushdownAutomata } from "./pushdownAutomata";
import { TransitionFunction, InputSymbol, StackSymbol, State } from "./pushdownAutomataTypes";
import { mainPage, simulatorPage } from "./events";

export class UI{
    simulator?: PushdownAutomataSimulator;
    transtitionHistory?: HTMLDivElement;
    tape?: HTMLDivElement;
    stack?: HTMLDivElement;
    state?: HTMLDivElement;
    infoButton?: HTMLButtonElement;
    transitionOptions?: HTMLDivElement;
    tapeFormError?: HTMLParagraphElement;
    tapeForm?: HTMLDivElement;

    tapePosition: number = 0;

    isChoosing: boolean = false;
    isRunnig: boolean = false;
    directionForward: boolean = true;
    speed: number = 1000;

    timeout: NodeJS.Timeout | null = null;


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
        this.tapeFormError = document.getElementById("tapeFormError") as HTMLParagraphElement;
        this.tapeForm = document.getElementById("tapeFormModal") as HTMLDivElement;
    }

    setAutomata(automata: PushdownAutomata): void{
        this.simulator = new PushdownAutomataSimulator(automata);
        this.fillInformation();
        this.resetUI();
        if(this.tapeForm){
            this.tapeForm.style.display = "flex";
        }
    }

    registerEvents(): void{
        document.getElementById("buttonNext")?.addEventListener("click", this.nextStep.bind(this));
        document.getElementById("buttonBack")?.addEventListener("click", this.backStep.bind(this));
        document.getElementById("speed-control")?.addEventListener('input', (event: InputEvent) => {
            this.speed = parseInt((event.target as HTMLInputElement).value);
        });
        document.getElementById("buttonNextAuto")?.addEventListener("click", () => {
            if(this.timeout) {
                clearTimeout(this.timeout);
                this.timeout = null;
            }
            this.isRunnig = true;
            this.directionForward = true;
            this.nextStep();
        });
        document.getElementById("buttonBackAuto")?.addEventListener("click", () => {
            if(this.timeout) {
                clearTimeout(this.timeout);
                this.timeout = null;
            }
            this.isRunnig = true;
            this.directionForward = false;
            this.backStep();
        });
        document.getElementById("buttonStop")?.addEventListener("click", () => {
            if(this.timeout) {
                clearTimeout(this.timeout);
                this.timeout = null;
            }
            this.isRunnig = false;
        });
        document.getElementById("showTapeModalButton").addEventListener("click", () => {
            if(this.tapeForm)
            {
                this.tapeForm.style.display = "flex";
            }
        });
        document.getElementById("hideSetTapeButton")?.addEventListener("click", () => {
            if(this.tapeForm)
            {
                this.tapeForm.style.display = "none";
            }
        });
        document.getElementById("setTape").addEventListener("submit", this.setTapeForm.bind(this));
        document.getElementById("tapeInput")?.addEventListener("input", (event: InputEvent) => {
            let tapeInput: string = (event.target as HTMLInputElement).value;
            this.checkTapeInputValidity(tapeInput);
        });
        document.getElementById("closeSimulatorButton")?.addEventListener("click", () => {
            
            simulatorPage.style.display = "none";
            mainPage.style.display = "flex";
            if(this.timeout){
                clearTimeout(this.timeout);
                this.timeout = null;
            }
        });
    }

    private setTapeForm(event: SubmitEvent): void{
        event.preventDefault();
        let form = event.target as HTMLFormElement;
        let tapeInput = form.elements.namedItem("tapeInput") as HTMLInputElement;
        if(this.checkTapeInputValidity(tapeInput.value)){
            this.setTape(tapeInput.value);
            if(this.tapeForm){
                this.tapeForm.style.display = "none";
            }
        }
        return;
    }

    private checkTapeInputValidity(tapeInput: string): boolean{
        console.log("Checking tape input");
        if(!this.simulator)
            return false;
        let allowed = this.simulator.automata.inputSymbols.map((s) => s.value);
        for(let s of tapeInput){
            if(!allowed.includes(s)){
                this.tapeFormError?.classList.remove("hidden");
                //TODO Print valid symbols
                return false;
            }
        }
        this.tapeFormError?.classList.add("hidden");
        return true;
    };

    static generateTransitionFunction(f: TransitionFunction): HTMLDivElement {
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
        document.getElementById("infoInitialStackSymbol")!.innerText = this.simulator?.automata.initialStackSymbol?.value;
        //Accepting states
        document.getElementById("infoAcceptingState")!.innerText = this.simulator?.automata.acceptingState?.map((s) => s.value).join(", ") ?? "Acceptance by Empty Stack";
        //Transition functions
        let tFunction =  document.getElementById("infoTranstionFunction") as HTMLDivElement;
        tFunction.innerHTML = "";
        for(let f of this.simulator?.automata.transitionFunction ?? []){
            tFunction.append(UI.generateTransitionFunction(f));
        }
    }

    addToHistory(f: TransitionFunction): void{
        if(this.transtitionHistory){
            this.transtitionHistory.prepend(UI.generateTransitionFunction(f));
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

    /*
    0 -> read
    1 -> reading
    2 -> not read
    */
    setSymbolToState(s: HTMLDivElement, state: number){
        switch(state){
            case 0:{
                s.classList.remove("bg-red-500");
                s.classList.remove("bg-red-900");
                s.classList.add("bg-red-300");
                return
            }
            case 1:{
                s.classList.remove("bg-red-300");
                s.classList.remove("bg-red-500");
                s.classList.add("bg-red-900");
                return;
            }
            default:{
                s.classList.remove("bg-red-300");
                s.classList.remove("bg-red-900");
                s.classList.add("bg-red-500");
                return;
            }
        }
    }

    moveTape(backward: boolean = false): void{
        let symbols = this.tape?.children;
        if(symbols && symbols.length > 1){
            if(backward == true){
                this.tapePosition--;
                this.setSymbolToState(symbols[this.tapePosition+1] as HTMLDivElement, 2);
                console.log(this.tapePosition+1, 2);
                if(this.tapePosition >= 0){
                    this.setSymbolToState(symbols[this.tapePosition] as HTMLDivElement, 1);
                    console.log(this.tapePosition, 1);
                }
            }
            else{
                this.tapePosition++;
                this.setSymbolToState(symbols[this.tapePosition-1] as HTMLDivElement, 0);
                console.log(this.tapePosition-1, 0);
                if(this.tapePosition < symbols.length){
                    this.setSymbolToState(symbols[this.tapePosition] as HTMLDivElement, 1);
                    console.log(this.tapePosition, 1);
                }
            }
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

        this.isChoosing = false;
        this.isRunnig = false;
        this.directionForward = true;
        this.speed = 1000;
        if(this.timeout)
        {
            clearTimeout(this.timeout);
            this.timeout = null;
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
        let temp = this.tape?.children[0] as HTMLDivElement;
        if(temp)
        {
            this.setSymbolToState(temp, 1);
        }
    }

    useTransition(f: TransitionFunction): void{
        console.log(f);
        this.simulator?.applyTransitionFunction(f);
        this.changeState(f.toState);
        if(!f.inputSymbol.isEpsylon){
            this.moveTape();
        }
        if(f.startSymbol != null){
            this.removeFromStack();
        }
        for(let i = f.pushedSymbols.length-1; i >= 0; i--){
            this.addToStack(f.pushedSymbols[i]);
        }
        this.addToHistory(f);
        this.isChoosing = false;
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
            option.append(UI.generateTransitionFunction(o));
            option.addEventListener("click", () => {
                this.useTransition(o);
                if(this.transitionOptions){
                    this.transitionOptions.innerHTML = "";
                }
                this.infoButton.classList.add("flex");
                this.infoButton.classList.remove("hidden");
                if(this.isRunnig && this.directionForward)
                {
                    let dir = this.directionForward;
                    this.timeout = setTimeout(() => {
                        if(this.isRunnig && this.directionForward == dir)
                            this.nextStep();
                    }, this.speed);
                }
            });
            this.transitionOptions?.append(option);
        }
    }

    nextStep(): void{
        if(!this.isChoosing){
            if(this.simulator){
                let possibleTranstions: TransitionFunction[] = this.simulator.nextStep();
                if(possibleTranstions.length == 0){
                    throw new Error("No possible transitions");
                }
                else if(possibleTranstions.length == 1){
                    this.useTransition(possibleTranstions[0]);
                    if(this.isRunnig && this.directionForward)
                    {
                        let dir = this.directionForward;
                        this.timeout = setTimeout(() => {
                            if(this.isRunnig && this.directionForward == dir)
                                this.nextStep();
                        }, this.speed);
                    }
                }
                else{
                    this.isChoosing = true;
                    this.generateOptions(possibleTranstions);
                }
            }
        }
    }

    backStep(): void{
        if(this.isChoosing){
            this.isChoosing = false;
            if(this.transitionOptions){
                this.transitionOptions.innerHTML = "";
            }
            this.infoButton.classList.add("flex");
            this.infoButton.classList.remove("hidden");
            return;
        }
        if(this.simulator){
            let last = this.simulator.backStep();
            if(last){
                this.removeFromHistory();
                this.changeState(last.fromState);
                if(!last.inputSymbol.isEpsylon){
                    this.moveTape(true);
                }
                for(let i = 0; i < last.pushedSymbols.length; i++){ 
                    this.removeFromStack();
                }
                if(last.startSymbol != null){
                    this.addToStack(last.startSymbol);
                }
            }
            if(this.isRunnig && !this.directionForward)
            {
                let dir = this.directionForward;
                this.timeout = setTimeout(() => {
                    if(this.isRunnig && this.directionForward == dir)
                        this.backStep();
                }, this.speed);
            }
        }
    }
}