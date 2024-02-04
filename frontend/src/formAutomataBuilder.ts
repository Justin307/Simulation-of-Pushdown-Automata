import { InputSymbol, StackSymbol, State, TransitionFunction } from "./pushdownAutomataTypes";

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
        //TODO: Transition functions
    }

    registerEvents(){
        document.getElementById('newAutomataStateForm')?.addEventListener('submit', this.stateFormSubmitHandler.bind(this));
        document.getElementById('newAutomataInputSymbolForm')?.addEventListener('submit', this.inputSymbolSubmitHandler.bind(this));
        document.getElementById('newAutomataStackSymbolForm')?.addEventListener('submit', this.stackSymbolSubmitHandler.bind(this));
        this.initialStateSelect.addEventListener('change', this.initialStateChangeHandler.bind(this));
        this.initialStackSymbolSelect.addEventListener('change', this.initialStackSymbolChangeHandler.bind(this));
        document.getElementById('acceptanceEmptyStackCheckBox')?.addEventListener('click', this.acceptingStateEmptyChangeHandler.bind(this));
        this.acceptingStatesSelect.addEventListener('change', this.acceptingStatesChangeHandler.bind(this));
    }

    stateFormSubmitHandler(event: SubmitEvent){
        event.preventDefault();
        //TODO: Check duplicates
        //TODO: Add to states
        //TODO: Create div
        //TODO: Update others
    }

    inputSymbolSubmitHandler(event: SubmitEvent){
        event.preventDefault();
        //TODO: Check duplicates
        //TODO: Add to states
        //TODO: Create div
        //TODO: Update others
    };

    stackSymbolSubmitHandler(event: SubmitEvent){
        event.preventDefault();
        //TODO: Check duplicates
        //TODO: Add to states
        //TODO: Create div
        //TODO: Update others
    };

    initialStateChangeHandler(event: Event){
        event.preventDefault();
        //TODO: Update initial state
    };

    initialStackSymbolChangeHandler(event: Event){
        event.preventDefault();
        //TODO: Update initial stack symbol
    };

    acceptingStateEmptyChangeHandler(event: Event){
        event.preventDefault();
        //TODO: Change select visibility
        //TODO: Update accepting states
    };

    acceptingStatesChangeHandler(event: Event){
        event.preventDefault();
        //TODO: Update accepting states
    };

    //TODO: Test
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
        //FIXME: Change to createElement()
        this.initialStateSelect.innerHTML = '<option value="" disabled selected hidden>Choose initial state ...</option>';
        this.initialStackSymbolSelect.innerHTML = '<option value="" disabled selected hidden>Choose initial stack symbol...</option>';
        this.acceptingStatesSelect.innerHTML = '<option value="" disabled selected hidden>Choose accepting states...</option>';
        this.acceptingStatesSelect.disabled = true;
        //checkbox
        (document.getElementById('acceptanceEmptyStackCheckBox') as HTMLInputElement).checked = true;
    }
}