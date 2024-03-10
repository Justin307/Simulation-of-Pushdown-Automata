import { PushdownAutomata } from "./pushdownAutomata";
import { checkPushdownAutomata } from "./pushdownAutomataChecker";
import { InputSymbol, StackSymbol, State, TransitionFunction, compareInputSymbol, compareStackSymbol, compareState, compareTransitionFunction, toString } from "./pushdownAutomataTypes";
import { SimulatorUI } from "./simulatorUI";
import { menuPage, newAutomataPage, mainPage, simulatorPage, g_ui, g_automataBuilder, g_storage, changePage, PageEnum} from "./globals";

type itemType = State | InputSymbol | StackSymbol;

export class FormAutomataBuilder {
    private states: State[]
    private inputSymbols: InputSymbol[]
    private stackSymbols: StackSymbol[]
    private initialState?: State;
    private initialStackSymbol?: StackSymbol;
    private acceptingStates: State[] | null
    private transitionFunctions: TransitionFunction[]

    private statesDiv: HTMLDivElement;
    private inputSymbolDiv: HTMLDivElement;
    private stackSymbolDiv: HTMLDivElement;
    private transitionFunctionDiv: HTMLDivElement;

    private initialStateSelect: HTMLSelectElement;
    private initialStackSymbolSelect: HTMLSelectElement;
    private acceptingStatesSelect: HTMLSelectElement;

    private keyError: HTMLParagraphElement;
    private stateError: HTMLParagraphElement;
    private inputSymbolError: HTMLParagraphElement;
    private stackSymbolError: HTMLParagraphElement;
    private initialStateError: HTMLParagraphElement;
    private initialStackSymbolError: HTMLParagraphElement;
    private acceptingStateError: HTMLParagraphElement;
    private transitionFunctionError: HTMLParagraphElement;

    private keyboardState: HTMLDivElement;
    private keyboardInputSymbol: HTMLDivElement;
    private keyboardStackSymbol: HTMLDivElement;
    private keyboardDeleteButton: HTMLButtonElement;

    private transitionFunctionParts: HTMLParagraphElement[];

    private activePart: number;

    private keyInput: HTMLInputElement;

    constructor(){
        this.states = [];
        this.inputSymbols = [];
        this.stackSymbols = [];
        this.acceptingStates = [];
        this.transitionFunctions = [];

        this.statesDiv = document.getElementById('newAutomataStates') as HTMLDivElement;
        this.inputSymbolDiv = document.getElementById('newAutomataInputSymbols') as HTMLDivElement;
        this.stackSymbolDiv = document.getElementById('newAutomataStackSymbols') as HTMLDivElement;
        this.transitionFunctionDiv = document.getElementById('newAutomataTranstitionFunctions') as HTMLDivElement;

        this.initialStateSelect = document.getElementById('newAutomataInitialStateSelect') as HTMLSelectElement;
        this.initialStackSymbolSelect = document.getElementById('newAutomataInitialStackSymbolSelect') as HTMLSelectElement;
        this.acceptingStatesSelect = document.getElementById('newAutomataAcceptingStatesSelect') as HTMLSelectElement;

        this.keyError = document.getElementById('keyError') as HTMLParagraphElement;
        this.stateError = document.getElementById('stateError') as HTMLParagraphElement;
        this.inputSymbolError = document.getElementById('inputSymbolError') as HTMLParagraphElement;
        this.stackSymbolError = document.getElementById('stackSymbolError') as HTMLParagraphElement;
        this.initialStateError = document.getElementById('initialStateError') as HTMLParagraphElement;
        this.initialStackSymbolError = document.getElementById('initialStackSymbolError') as HTMLParagraphElement;
        this.acceptingStateError = document.getElementById('acceptingStateError') as HTMLParagraphElement;
        this.transitionFunctionError = document.getElementById('transitionFunctionError') as HTMLParagraphElement;
    
        this.keyboardState = document.getElementById('keyboardState') as HTMLDivElement;
        this.keyboardInputSymbol = document.getElementById('keyboardInputSymbol') as HTMLDivElement;
        this.keyboardStackSymbol = document.getElementById('keyboardStackSymbol') as HTMLDivElement;
    
        this.transitionFunctionParts = [];
        this.transitionFunctionParts.push(document.getElementById('transtitionFromState') as HTMLParagraphElement);
        this.transitionFunctionParts.push(document.getElementById('transtionPopSymbol') as HTMLParagraphElement);
        this.transitionFunctionParts.push(document.getElementById('transitionSymbol') as HTMLParagraphElement);
        this.transitionFunctionParts.push(document.getElementById('transitionToState') as HTMLParagraphElement);
        this.transitionFunctionParts.push(document.getElementById('transitionPushSymbols') as HTMLParagraphElement);

        this.activePart = -1;

        this.keyboardInputSymbol.append(this.createKeyboardButton({isEpsylon: true}, 1));
        this.keyboardDeleteButton = this.createKeyboardButton({value: '←'}, 3);
        this.keyboardDeleteButton.style.display = "none";
        this.keyboardStackSymbol.append(this.keyboardDeleteButton);

        this.keyInput = document.getElementById('newAutomataKey') as HTMLInputElement;
    }

    registerEvents(){
        document.getElementById('newAutomataStateForm')?.addEventListener('submit', this.stateFormSubmitHandler.bind(this));
        document.getElementById('newAutomataInputSymbolForm')?.addEventListener('submit', this.inputSymbolSubmitHandler.bind(this));
        document.getElementById('newAutomataStackSymbolForm')?.addEventListener('submit', this.stackSymbolSubmitHandler.bind(this));
        this.initialStateSelect.addEventListener('change', this.initialStateChangeHandler.bind(this));
        this.initialStackSymbolSelect.addEventListener('change', this.initialStackSymbolChangeHandler.bind(this));
        document.getElementById('acceptanceEmptyStackCheckBox')?.addEventListener('click', this.acceptingStateEmptyChangeHandler.bind(this));
        this.acceptingStatesSelect.addEventListener('change', this.acceptingStatesChangeHandler.bind(this));
        document.getElementById("addTransitionFunction")?.addEventListener('click', this.transitionFunctionAddHandler.bind(this));
        this.transitionFunctionParts[0]?.addEventListener('click', (event: Event) => {this.transitionFunctionPartChangeHandler(event, 0)});
        this.transitionFunctionParts[1]?.addEventListener('click', (event: Event) => {this.transitionFunctionPartChangeHandler(event, 1)});
        this.transitionFunctionParts[2]?.addEventListener('click', (event: Event) => {this.transitionFunctionPartChangeHandler(event, 2)});
        this.transitionFunctionParts[3]?.addEventListener('click', (event: Event) => {this.transitionFunctionPartChangeHandler(event, 3)});
        this.transitionFunctionParts[4]?.addEventListener('click', (event: Event) => {this.transitionFunctionPartChangeHandler(event, 4)});
        document.getElementById('addTransitionFunctionButton')?.addEventListener('click', this.transitionFunctionAddHandler.bind(this));
        document.getElementById('newAutomataSaveButton')?.addEventListener('click', this.saveEventHandler.bind(this));
        document.getElementById('newAutomataCancelButton')?.addEventListener('click', () => {
            this.reset();
            changePage(PageEnum.MENU);
        });
    }

    reset(){
        //properties
        this.states = [];
        this.inputSymbols = [];
        this.stackSymbols = [];
        this.acceptingStates = [];
        this.transitionFunctions = [];
        //divs
        this.statesDiv.innerHTML = '';
        this.inputSymbolDiv.innerHTML = '';
        this.stackSymbolDiv.innerHTML = '';
        this.transitionFunctionDiv.innerHTML = '';
        //inputs
        (document.getElementById('stateInput') as HTMLInputElement).value = '';
        (document.getElementById('inputSymbolInput') as HTMLInputElement).value = '';
        (document.getElementById('stackSymbolInput') as HTMLInputElement).value = '';
        //selects
        let option = document.createElement('option');
        option.value = '';
        option.innerText = 'Choose initial state ...';
        option.disabled = true;
        option.selected = true;
        option.hidden = true;
        this.initialStateSelect.innerHTML = '';
        this.initialStateSelect.append(option);
        option = document.createElement('option');
        option.value = '';
        option.innerText = 'Choose initial stack symbol...';
        option.disabled = true;
        option.selected = true;
        option.hidden = true;
        this.initialStackSymbolSelect.innerHTML = '';
        this.initialStackSymbolSelect.append(option);
        this.acceptingStatesSelect.innerHTML = '';
        this.acceptingStatesSelect.disabled = true;
        //checkbox
        (document.getElementById('acceptanceEmptyStackCheckBox') as HTMLInputElement).checked = false;
        this.acceptingStatesSelect.style.display = 'block';
        //transition function parts
        for(let t of this.transitionFunctionParts){
            t.innerText = '';
        }
        //keyboard
        this.keyboardState.innerHTML = '';
        this.keyboardState.style.display = 'none';
        this.keyboardInputSymbol.innerHTML = '';
        this.keyboardInputSymbol.append(this.createKeyboardButton({isEpsylon: true}, 1));
        this.keyboardInputSymbol.style.display = 'none';
        this.keyboardStackSymbol.innerHTML = '';
        this.keyboardStackSymbol.append(this.keyboardDeleteButton);
        this.keyboardDeleteButton.style.display = "none";
        this.keyboardStackSymbol.style.display = 'none';
        //errors
        this.keyError.style.display = 'none';
        this.stateError.style.display = 'none';
        this.stackSymbolError.style.display = 'none';
        this.inputSymbolError.style.display = 'none';
        this.initialStateError.style.display = 'none';
        this.acceptingStateError.style.display = 'none';
        this.initialStateError.style.display = 'none';
        this.initialStackSymbolError.style.display = 'none';
        this.transitionFunctionError.style.display = 'none';
        //key
        this.keyInput.value = '';
    }

    editAutomata(key: string, pda: PushdownAutomata)
    {
        this.reset();
        //key
        this.keyInput.value = key;
        //states
        for(let s of pda.states){
            this.newItem<State>(compareState, s, 'State');
        }
        //input symbols
        for(let s of pda.inputSymbols){
            this.newItem<InputSymbol>(compareInputSymbol, s, 'InputSymbol');
        }
        //stack symbols
        for(let s of pda.stackSymbols){
            this.newItem<StackSymbol>(compareStackSymbol, s, 'StackSymbol');

        }
        //initial state
        let option = this.initialStateSelect.options.namedItem("initialStateOption" + pda.initialState.value);
        if(option){
            this.initialState = pda.initialState;
            option.selected = true;
        }
        else{
            this.initialStateError.style.display = 'block';
            this.initialStateError.innerText = 'Error: Initial state must be defined';
        }
        //initial stack symbol
        let option2 = this.initialStackSymbolSelect.options.namedItem("stackSymbolOption" + pda.initialStackSymbol.value);
        if(option2){
            this.initialStackSymbol = pda.initialStackSymbol;
            option2.selected = true;
        }
        else{
            this.initialStackSymbolError.style.display = 'block';
            this.initialStackSymbolError.innerText = 'Error: Initial stack symbol must be defined';
        }
        //accepting states
        if(pda.acceptingState === null){
            (document.getElementById('acceptanceEmptyStackCheckBox') as HTMLInputElement).checked = true;
            this.acceptingStatesSelect.style.display = 'none';
            this.acceptingStates = null;
        }
        else{
            this.acceptingStates = [];
            (document.getElementById('acceptanceEmptyStackCheckBox') as HTMLInputElement).checked = false;
            this.acceptingStatesSelect.style.display = 'block';
            for(let a of pda.acceptingState){
                let option = this.acceptingStatesSelect.options.namedItem("acceptingStateOption" + a.value);
                if(option){
                    option.selected = true;
                    this.acceptingStates.push(a);
                }
                else{
                    for(let i = 0; i < this.acceptingStatesSelect.options.length; i++){
                        this.acceptingStatesSelect.options[i].selected = false;
                    }
                    this.acceptingStateError.style.display = 'block';
                    this.acceptingStateError.innerText = 'Error: Accepting state does not exist';
                    this.acceptingStates = [];
                    break;
                }
            }

        }
        //transition functions
        for(let t of pda.transitionFunction){
            this.transitionFunctions.push(t);
            let div = this.createTransitionFunctionDiv(t)
            div.addEventListener('click', (event: Event) => {
                let left = (div.children[0].children[0] as HTMLDivElement).innerText.split(' ');
                let middle = (div.children[0].children[1].children[0] as HTMLDivElement).innerText;
                let right = (div.children[0].children[2] as HTMLDivElement).innerText.split(' ');
    
                this.transitionFunctionParts[0].innerText = left[0];
                this.transitionFunctionParts[1].innerText = left[1];
                this.transitionFunctionParts[2].innerText = middle;
                this.transitionFunctionParts[3].innerText = right[0];
                this.transitionFunctionParts[4].innerText = right[1] ?? "";
            });
            this.transitionFunctionDiv.append(div);
        }
        this.transitionSort();
    }

    stateFormSubmitHandler(event: SubmitEvent){
        event.preventDefault();
        let form = event.target as HTMLFormElement;
        let inputField = form.elements.namedItem('stateInput') as HTMLInputElement;
        let inputValue = inputField.value;
        inputField.value = '';
        let item: State = {
            value: inputValue,
        };
        this.newItem<State>(compareState, item, 'State');
    }

    inputSymbolSubmitHandler(event: SubmitEvent){
        event.preventDefault();
        let form = event.target as HTMLFormElement;
        let inputField = form.elements.namedItem('inputSymbolInput') as HTMLInputElement;
        let inputValue = inputField.value;
        if(inputValue.length == 1) {
            inputField.value = '';
            let item: InputSymbol = {
                isEpsylon: false,
                value: inputValue,
            };
            this.newItem<InputSymbol>(compareInputSymbol, item, 'InputSymbol');
        }
        else {
            this.inputSymbolError.style.display = 'block';
            this.inputSymbolError.innerText = 'Error: Input symbol must be a single character';
        }
    };

    stackSymbolSubmitHandler(event: SubmitEvent){
        event.preventDefault();
        let form = event.target as HTMLFormElement;
        let inputField = form.elements.namedItem('stackSymbolInput') as HTMLInputElement;
        let inputValue = inputField.value;
        if(inputValue.length == 1) {
            inputField.value = '';
            let item: StackSymbol = {
                value: inputValue,
            };
            this.newItem<StackSymbol>(compareStackSymbol, item, 'StackSymbol');
        }
        else {
            this.stackSymbolError.style.display = 'block';
            this.stackSymbolError.innerText = 'Error: Stack symbol must be a single character';
        }
    };

    initialStateChangeHandler(event: Event){
        event.preventDefault();
        let select = event.target as HTMLSelectElement;
        let selectedOption = select.options[select.selectedIndex];
        if(selectedOption.value === ''){
            this.initialState = undefined;
        }
        else{
            let item = {
                value: selectedOption.value
            }
            this.initialState = item;
        }
    };

    initialStackSymbolChangeHandler(event: Event){
        event.preventDefault();
        let select = event.target as HTMLSelectElement;
        let selectedOption = select.options[select.selectedIndex];
        if(selectedOption.value === ''){
            this.initialStackSymbol = undefined;
        }
        else{
            let item = {
                value: selectedOption.value
            }
            this.initialStackSymbol = item;
        }
    };

    acceptingStateEmptyChangeHandler(event: Event){
        let checkbox = event.target as HTMLInputElement;
        if(checkbox.checked){
            for(let a of this.states){
                let option = this.acceptingStatesSelect.options.namedItem("acceptingStateOption" + a.value);
                if(option){
                    option.selected = false;
                }
            }
            this.acceptingStates = null;
            this.acceptingStatesSelect.style.display = 'none';
        }
        else{
            this.acceptingStates = [];
            this.acceptingStatesSelect.style.display = 'block';
        }
    };

    acceptingStatesChangeHandler(event: Event){
        event.preventDefault();
        this.acceptingStates = [];
        for(let a of this.states){
            let option = this.acceptingStatesSelect.options.namedItem("acceptingStateOption" + a.value);
            if(option){
                if(option.selected){
                    this.acceptingStates?.push(a);
                }
            }
        }
    };

    transitionFunctionAddHandler(event: Event){
        event.preventDefault();
        for(let i = 0; i < 4; i++){
            if(this.transitionFunctionParts[i].innerText === ''){
                this.transitionFunctionError.style.display = 'block';
                this.transitionFunctionError.innerText = 'Error: First 4 fields must be filled';
                return;
            }
        }
        let fromState = {value: this.transitionFunctionParts[0].innerText};
        let startSymbol = {value: this.transitionFunctionParts[1].innerText};
        let inputSymbol = this.transitionFunctionParts[2].innerText === 'ε' ? {isEpsylon: true} : {isEpsylon: false, value: this.transitionFunctionParts[2].innerText};
        let toState = {value: this.transitionFunctionParts[3].innerText};
        let pushedSymbols = this.transitionFunctionParts[4].innerHTML.split('').map((s) => {return {value: s}});
        let item: TransitionFunction = {
            fromState: fromState,
            startSymbol: startSymbol,
            inputSymbol: inputSymbol,
            toState: toState,
            pushedSymbols: pushedSymbols,
        };
        for(let t of this.transitionFunctions){
            if(compareTransitionFunction(t, item)){
                this.transitionFunctionError.style.display = 'block';
                this.transitionFunctionError.innerText = 'Error: Transition already exists';
                return;
            }
        }
        this.transitionFunctions.push(item);
        let div = this.createTransitionFunctionDiv(item)
        div.addEventListener('click', (event: Event) => {
            let left = (div.children[0].children[0] as HTMLDivElement).innerText.split(' ');
            let middle = (div.children[0].children[1].children[0] as HTMLDivElement).innerText;
            let right = (div.children[0].children[2] as HTMLDivElement).innerText.split(' ');

            this.transitionFunctionParts[0].innerText = left[0];
            this.transitionFunctionParts[1].innerText = left[1];
            this.transitionFunctionParts[2].innerText = middle;
            this.transitionFunctionParts[3].innerText = right[0];
            this.transitionFunctionParts[4].innerText = right[1] ?? "";
        });
        this.transitionFunctionDiv.append(div);
        this.transitionFunctionError.style.display = 'none';

        this.transitionSort();

        for(let t of this.transitionFunctionParts){
            t.innerText = '';
        }
    }

    createTransitionFunctionDiv(item: TransitionFunction): HTMLDivElement{
        let div = document.createElement('div');
        div.classList.add('flex', 'p-2', 'bg-slate-100', 'rounded', 'm-2', 'flex-row', 'justify-center', 'items-center');
        let t = SimulatorUI.generateTransitionFunction(item);
        div.append(t);
        let button = document.createElement('button');
        button.classList.add('rounded-full', 'bg-slate-300', 'w-6', 'h-6', 'ml-2');
        button.innerText = 'X';
        div.append(button);
        button.addEventListener('click', this.deleteTransitionFunction.bind(this, item, div));
        return div;
    }

    newItem<T extends itemType>(compareFunction: (arg1: T, arg2: T) => boolean, item: T, type: string): void{
        let arr : T[];
        let error: HTMLParagraphElement;
        let errorMsg: string;
        if(type === 'State'){
            arr = this.states as T[];
            error = this.stateError;
            errorMsg = 'Error: State already exists';
        } else if(type === 'InputSymbol'){
            arr = this.inputSymbols as T[];
            error = this.inputSymbolError;
            errorMsg = 'Error: Input symbol already exists';
        } else if(type === 'StackSymbol'){
            arr = this.stackSymbols as T[];
            error = this.stackSymbolError;
            errorMsg = 'Error: Stack symbol already exists';
        }
        let exists = false;
        for(let i of arr){
            if(compareFunction(i, item)){
                exists = true;
                break;
            }
        }
        if(!exists){
            arr.push(item);
            let div = document.createElement('div');
            div.classList.add('flex', 'p-2', 'bg-slate-100', 'rounded', 'm-2');
            let p = document.createElement('p');
            p.classList.add('pr-2');
            p.innerText = item.value ?? 'ε';
            div.append(p);
            let button = document.createElement('button');
            button.classList.add('rounded-full', 'bg-slate-300', 'w-6', 'h-6');
            button.innerText = 'X';
            div.append(button);
            if(type === 'State'){
                let keyboardButton = this.createKeyboardButton(item,0);
                button.addEventListener('click', this.deleteState.bind(this, item, div, keyboardButton));
                this.statesDiv.append(div);
                this.stateAdded(item as State, keyboardButton);
            } else if(type === 'InputSymbol'){
                let keyboardButton = this.createKeyboardButton(item,1);
                button.addEventListener('click', this.deleteInputSymbol.bind(this, item, div, keyboardButton));
                this.inputSymbolDiv.append(div);
                this.inputSymbolAdded(item as InputSymbol, keyboardButton);
            } else if(type === 'StackSymbol'){
                let keyboardButton = this.createKeyboardButton(item,2);
                button.addEventListener('click', this.deleteStackSymbol.bind(this, item, div, keyboardButton));
                this.stackSymbolDiv.append(div);
                this.stackSymbolAdded(item as StackSymbol, keyboardButton);
            }
            error.style.display = 'none';
        }
        else{
            error.style.display = 'block';
            error.innerText = errorMsg;
        }
    }

    deleteState(item: State, div: HTMLDivElement, keyboardButton: HTMLButtonElement){
        this.statesDiv.removeChild(div);
        this.states.splice(this.states.indexOf(item), 1);
        if(this.initialState && compareState(this.initialState, item)){
            this.initialState = undefined;
        }
        this.acceptingStates = this.acceptingStates?.filter(a => !compareState(a, item)) ?? null;
        this.stateDeleted(item);
        keyboardButton.remove();
        //TODO: Clear div
        //NOTE: I don't know what this TODO means
    }

    deleteInputSymbol(item: InputSymbol, div: HTMLDivElement, keyboardButton: HTMLButtonElement){
        this.inputSymbolDiv.removeChild(div);
        this.inputSymbols.splice(this.inputSymbols.indexOf(item), 1);
        this.inputSymbolDeleted(item);
        keyboardButton.remove();
        //TODO: Clear div
        //NOTE: I don't know what this TODO means
    }

    deleteStackSymbol(item: StackSymbol, div: HTMLDivElement, keyboardButton: HTMLButtonElement){
        this.stackSymbolDiv.removeChild(div);
        this.stackSymbols.splice(this.stackSymbols.indexOf(item), 1);
        if(this.initialStackSymbol && compareStackSymbol(this.initialStackSymbol, item)){
            this.initialStackSymbol = undefined;
        }
        this.stackSymbolDeleted(item);
        keyboardButton.remove();
        //TODO: Clear div
        //NOTE: I don't know what this TODO means
    }

    deleteTransitionFunction(item: TransitionFunction, div: HTMLDivElement){
        this.transitionFunctionDiv.removeChild(div);
        this.transitionFunctions.splice(this.transitionFunctions.indexOf(item), 1);
    };

    stateAdded(item: State, keyboardButton: HTMLButtonElement){
        let option = document.createElement('option');
        option.value = item.value;
        option.innerText = item.value;
        option.id = "initialStateOption" + item.value;
        this.initialStateSelect.append(option);

        option = document.createElement('option');
        option.value = item.value;
        option.innerText = item.value;
        option.id = "acceptingStateOption" + item.value;
        this.acceptingStatesSelect.append(option);

        this.keyboardState.append(keyboardButton);

        this.transitionCheck();
    };
    
    inputSymbolAdded(item: InputSymbol, keyboardButton: HTMLButtonElement){
        this.keyboardInputSymbol.append(keyboardButton);

        this.transitionCheck();
    };

    stackSymbolAdded(item: StackSymbol, keyboardButton: HTMLButtonElement){
        let option = document.createElement('option');
        option.value = item.value;
        option.innerText = item.value;
        option.id = "stackSymbolOption" + item.value;
        this.initialStackSymbolSelect.append(option);

        this.keyboardStackSymbol.append(keyboardButton);

        this.transitionCheck();
    };

    stateDeleted(item: State){
        let option = this.initialStateSelect.options.namedItem("initialStateOption" + item.value)
        if(option){
            if(option.selected){
                this.initialStateSelect.options[0].selected = true;
            }
            option.remove();
        }
        let option2 = this.acceptingStatesSelect.options.namedItem("acceptingStateOption" + item.value)
        if(option2){
            option2.remove();
        }
        if(this.transitionFunctionParts[0].innerText === item.value){
            this.transitionFunctionParts[0].innerText = '';
        }
        if(this.transitionFunctionParts[3].innerText === item.value){
            this.transitionFunctionParts[3].innerText = '';
        }

        this.transitionCheck();
    };

    inputSymbolDeleted(item: InputSymbol){
        if(this.transitionFunctionParts[2].innerText === item.value){
            this.transitionFunctionParts[2].innerText = '';
        }

        this.transitionCheck();
    };

    stackSymbolDeleted(item: StackSymbol){
        let option = this.initialStackSymbolSelect.options.namedItem("stackSymbolOption" + item.value)
        if(option){
            if(option.selected){
                this.initialStackSymbolSelect.options[0].selected = true;
            }
            option.remove();
        }
        if(this.transitionFunctionParts[1].innerText === item.value){
            this.transitionFunctionParts[1].innerText = '';
        }
        if(this.transitionFunctionParts[4].innerText.includes(item.value)){
            this.transitionFunctionParts[4].innerText = '';
        }

        this.transitionCheck();
    };

    createKeyboardButton(item: itemType, type: number): HTMLButtonElement{
        let button = document.createElement('button');
        button.classList.add('flex', 'justify-center', 'items-center', 'px-2', 'h-8', 'bg-slate-100', 'm-1');
        button.innerText = item.value ?? 'ε';
        button.addEventListener('click', (event: SubmitEvent) => this.keyboardButtonPressed(event, type));
        return button;
    }
    
    keyboardButtonPressed(event: Event, type: number){
        event.preventDefault();
        switch(type){
            //State
            case 0:
                if(this.activePart === 0 || this.activePart === 3){
                    let button = event.target as HTMLButtonElement;
                    let inputField = this.transitionFunctionParts[this.activePart] as HTMLParagraphElement;
                    inputField.innerText = button.innerText;
                }
                return;
            //Input Symbol
            case 1:
                if(this.activePart === 2){
                    let button = event.target as HTMLButtonElement;
                    let inputField = this.transitionFunctionParts[this.activePart] as HTMLParagraphElement;
                    inputField.innerText = button.innerText;
                }
                return;
            //Stack Symbol
            case 2:
                if(this.activePart === 1){
                    let button = event.target as HTMLButtonElement;
                    let inputField = this.transitionFunctionParts[this.activePart] as HTMLParagraphElement;
                    inputField.innerText = button.innerText;
                }
                else if(this.activePart === 4){
                    let button = event.target as HTMLButtonElement;
                    let inputField = this.transitionFunctionParts[this.activePart] as HTMLParagraphElement;
                    inputField.innerText += button.innerText;
                }
                return;
            case 3:
                if(this.activePart === 4){
                    let inputField = this.transitionFunctionParts[this.activePart] as HTMLParagraphElement;
                    inputField.innerHTML = inputField.innerText.slice(0,-1);
                }
                return;
            default:
                return;
        }

    }

    transitionFunctionPartChangeHandler(event: Event, index: number){
        event.preventDefault();
        if(this.activePart && this.activePart == index){
            return;
        }

        if(this.activePart >= 0){
            this.transitionFunctionParts[this.activePart].classList.remove('bg-slate-300');
            this.transitionFunctionParts[this.activePart].classList.add('bg-slate-100');

            if(this.activePart === 0 || this.activePart === 3){
                this.keyboardState.style.display = 'none';
            }
            else if(this.activePart === 1 || this.activePart === 4){
                this.keyboardStackSymbol.style.display = 'none';
            }
            else {
                this.keyboardInputSymbol.style.display = 'none';
            }
        }

        this.activePart = index;

        this.transitionFunctionParts[this.activePart].classList.remove('bg-slate-100');
        this.transitionFunctionParts[this.activePart].classList.add('bg-slate-300');

        if(this.activePart === 4){
            this.keyboardDeleteButton.style.display = "block";
        }
        else{
            this.keyboardDeleteButton.style.display = "none";
        }

        if(this.activePart === 0 || this.activePart === 3){
            this.keyboardState.style.display = 'flex';
        }
        else if(this.activePart === 1 || this.activePart === 4){
            this.keyboardStackSymbol.style.display = 'flex';
        }
        else {
            this.keyboardInputSymbol.style.display = 'flex';
        }
    }

    transitionCheck(): boolean{
        let anyInvalid = false;
        for(let i = 0; i < this.transitionFunctions.length; i++){
            let t = this.transitionFunctions[i];
            let tD = this.transitionFunctionDiv.children[i] as HTMLDivElement;
            //From state
            let fromState = this.states.find((s) => compareState(s, t.fromState));
            if(!fromState){
                anyInvalid = true;
                tD.style.border = "1px solid rgb(224 36 36)";
                continue;
            }
            //To state
            let toState = this.states.find((s) => compareState(s, t.toState));
            if(!toState){
                anyInvalid = true;
                tD.style.border = "1px solid rgb(224 36 36)";
                continue;
            }
            //Input symbol
            if(!t.inputSymbol.isEpsylon){
                let inputSymbol = this.inputSymbols.find((s) => compareInputSymbol(s, t.inputSymbol));
                if(!inputSymbol){
                    anyInvalid = true;
                    tD.style.border = "1px solid rgb(224 36 36)";
                    continue;
                }
            }
            //Start symbol
            let startSymbol = this.stackSymbols.find((s) => compareStackSymbol(s, t.startSymbol));
            if(!startSymbol){
                anyInvalid = true;
                tD.style.border = "1px solid rgb(224 36 36)";
                continue;
            }
            //Pushed symbols
            let checker = false;
            for(let s of t.pushedSymbols){
                let stackSymbol = this.stackSymbols.find((s2) => compareStackSymbol(s2, s));
                if(!stackSymbol){
                    anyInvalid = true;
                    checker = true;
                    tD.style.border = "1px solid rgb(224 36 36)";
                    break;
                }
            }
            if(checker){
                continue;
            }
            //Correct transition
            tD.style.border = "";
        }
        return anyInvalid;
    }

    transitionSort(): void{
        let cmp = (a: TransitionFunction, b: TransitionFunction): boolean => toString(a) < toString(b);
        for(let i = 1; i < this.transitionFunctions.length; i++){
            let j = i;
            while(j > 0 && cmp(this.transitionFunctions[j], this.transitionFunctions[j-1])){
                let temp = this.transitionFunctions[j];
                this.transitionFunctions[j] = this.transitionFunctions[j-1];
                this.transitionFunctions[j-1] = temp;
                let tempDiv = this.transitionFunctionDiv.children[j];
                this.transitionFunctionDiv.insertBefore(tempDiv, this.transitionFunctionDiv.children[j-1]);
                j--;
            }
        }
        /*
        //Debug - print array - has to match divs rendered on site
        for(let t of this.transitionFunctions){
            console.log(toString(t));
        }*/
    }


    saveEventHandler(event: Event): void{
        event.preventDefault();
        let error = false;
        //States
        if(this.states.length === 0){
            this.stateError.style.display = 'block';
            this.stateError.innerText = 'Error: At least one state must be defined';
            error = true;
        }
        //Input symbols
        if(this.inputSymbols.length === 0){
            this.inputSymbolError.style.display = 'block';
            this.inputSymbolError.innerText = 'Error: At least one input symbol must be defined';
            error = true;
        }
        //Stack symbols
        if(this.stackSymbols.length === 0){
            this.stackSymbolError.style.display = 'block';
            this.stackSymbolError.innerText = 'Error: At least one stack symbol must be defined';
            error = true;
        }
        //Initial state
        if(!this.initialState){
            this.initialStateError.style.display = 'block';
            this.initialStateError.innerText = 'Error: Initial state must be defined';
            error = true;
        }
        else{
            this.initialStateError.style.display = 'none';
        }
        //Initial stack symbol
        if(!this.initialStackSymbol){
            this.initialStackSymbolError.style.display = 'block';
            this.initialStackSymbolError.innerText = 'Error: Initial stack symbol must be defined';
            error = true;
        }
        else{
            this.initialStackSymbolError.style.display = 'none';
        }
        //Accepting states
        if(this.acceptingStates !== null){
            if(this.acceptingStates.length === 0){
                this.acceptingStateError.style.display = 'block';
                this.acceptingStateError.innerText = 'Error: At least one accepting state must be defined or acceptance by empty stack must be checked';
                error = true;
            }
            else{
                this.initialStateError.style.display = 'none';
            }
        }
        //Transition functions
        if(this.transitionFunctions.length === 0){
            this.transitionFunctionError.style.display = 'block';
            this.transitionFunctionError.innerText = 'Error: At least one transition function must be defined';
            error = true;
        }
        //Key
        let key = this.keyInput.value.trim();
        if(key === ''){
            this.keyError.style.display = 'block';
            error = true;
        }
        else{
            this.keyError.style.display = 'none';
        }
        //Whole automata
        if(error || !checkPushdownAutomata(this.states, this.stackSymbols, this.inputSymbols, this.initialState, this.initialStackSymbol, this.acceptingStates, this.transitionFunctions)){
            return;
        }
        //Valid
        let pda = new PushdownAutomata(this.states, this.inputSymbols, this.stackSymbols, this.initialState, this.initialStackSymbol, this.acceptingStates, this.transitionFunctions);
        let result = g_storage.saveAutomata(key, pda);
        if(result){
            this.reset();
            changePage(PageEnum.SIMULATOR);
            g_ui.setAutomata(g_storage.loadAutomata(key));
        }
    }
}