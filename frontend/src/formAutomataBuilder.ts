import { InputSymbol, StackSymbol, State, TransitionFunction, compareInputSymbol, compareStackSymbol, compareState } from "./pushdownAutomataTypes";

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


    constructor(){
        this.states = [];
        this.inputSymbols = [];
        this.stackSymbols = [];
        this.acceptingStates = null;
        this.transitionFunctions = [];

        this.statesDiv = document.getElementById('newAutomataStates') as HTMLDivElement;
        this.inputSymbolDiv = document.getElementById('newAutomataInputSymbols') as HTMLDivElement;
        this.stackSymbolDiv = document.getElementById('newAutomataStackSymbols') as HTMLDivElement;
        this.transitionFunctionDiv = document.getElementById('newAutomataTranstitionFunctions') as HTMLDivElement;

        this.initialStateSelect = document.getElementById('newAutomataInitialStateSelect') as HTMLSelectElement;
        this.initialStackSymbolSelect = document.getElementById('newAutomataInitialStackSymbolSelect') as HTMLSelectElement;
        this.acceptingStatesSelect = document.getElementById('newAutomataAcceptingStatesSelect') as HTMLSelectElement;

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
    }

    reset(){
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
        (document.getElementById('acceptanceEmptyStackCheckBox') as HTMLInputElement).checked = true;
        //errors
        //TODO: Clear errors
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
        inputField.value = '';
        let item: InputSymbol = {
            isEpsylon: false,
            value: inputValue,
        };
        this.newItem<InputSymbol>(compareInputSymbol, item, 'InputSymbol');
    };

    stackSymbolSubmitHandler(event: SubmitEvent){
        event.preventDefault();
        let form = event.target as HTMLFormElement;
        let inputField = form.elements.namedItem('stackSymbolInput') as HTMLInputElement;
        let inputValue = inputField.value;
        inputField.value = '';
        let item: StackSymbol = {
            value: inputValue,
        };
        this.newItem<StackSymbol>(compareStackSymbol, item, 'StackSymbol');
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
            this.acceptingStatesSelect.disabled = true;
        }
        else{
            this.acceptingStates = [];
            this.acceptingStatesSelect.disabled = false;
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
        console.log(this.acceptingStates);
    };

    transitionFunctionAddHandler(event: Event){
        event.preventDefault();
        //TODO: Check all five parts and save
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
            let keyboardButton = this.createKeyboardButton(item);
            if(type === 'State'){
                button.addEventListener('click', this.deleteState.bind(this, item, div, keyboardButton));
                this.statesDiv.append(div);
                this.stateAdded(item as State, keyboardButton);
            } else if(type === 'InputSymbol'){
                button.addEventListener('click', this.deleteInputSymbol.bind(this, item, div, keyboardButton));
                this.inputSymbolDiv.append(div);
                this.inputSymbolAdded(item as InputSymbol, keyboardButton);
            } else if(type === 'StackSymbol'){
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
        this.stateDeleted(item);
        keyboardButton.remove();
        //TODO: Clear div
    }

    deleteInputSymbol(item: InputSymbol, div: HTMLDivElement, keyboardButton: HTMLButtonElement){
        this.inputSymbolDiv.removeChild(div);
        this.inputSymbols.splice(this.inputSymbols.indexOf(item), 1);
        this.inputSymbolDeleted(item);
        keyboardButton.remove();
        //TODO: Clear div
    }

    deleteStackSymbol(item: StackSymbol, div: HTMLDivElement, keyboardButton: HTMLButtonElement){
        this.stackSymbolDiv.removeChild(div);
        this.stackSymbols.splice(this.stackSymbols.indexOf(item), 1);
        this.stackSymbolDeleted(item);
        keyboardButton.remove();
        //TODO: Clear div
    }

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
    };
    
    inputSymbolAdded(item: InputSymbol, keyboardButton: HTMLButtonElement){
        this.keyboardInputSymbol.append(keyboardButton);
    };

    stackSymbolAdded(item: StackSymbol, keyboardButton: HTMLButtonElement){
        let option = document.createElement('option');
        option.value = item.value;
        option.innerText = item.value;
        option.id = "stackSymbolOption" + item.value;
        this.initialStackSymbolSelect.append(option);

        this.keyboardStackSymbol.append(keyboardButton);
    };

    stateDeleted(item: State){
        let option = this.initialStateSelect.options.namedItem("initialStateOption" + item.value)
        if(option && option.selected){
            option.remove();
            this.initialStateSelect.options[0].selected = true;
        }
        let option2 = this.acceptingStatesSelect.options.namedItem("acceptingStateOption" + item.value)
        if(option2 && option2.selected){
            option2.remove();
        }
        //TODO: Delete from transition function
        //TODO: Check already defined transition functions
    };

    inputSymbolDeleted(item: InputSymbol){
        //TODO: Delete from transition function
        //TODO: Check already defined transition functions
    };

    stackSymbolDeleted(item: StackSymbol){
        let option = this.initialStateSelect.options.namedItem("stackSymbolOption" + item.value)
        if(option && option.selected){
            option.remove();
        }
        //TODO: Delete from transition function
        //TODO: Check already defined transition functions
    };

    createKeyboardButton(item: itemType): HTMLButtonElement{
        let button = document.createElement('button');
        button.classList.add('flex', 'justify-center', 'items-center', 'px-2', 'h-8', 'bg-slate-100', 'm-1');
        button.innerText = item.value ?? 'ε';
        button.addEventListener('click', this.keyboardButtonPressed.bind(this));
        return button;
    }
    
    keyboardButtonPressed(event: Event){
        event.preventDefault();
    }
}