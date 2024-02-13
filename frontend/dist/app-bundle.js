/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/events.ts":
/*!***********************!*\
  !*** ./src/events.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   automataOverviewPage: () => (/* binding */ automataOverviewPage),
/* harmony export */   loadAutomataPage: () => (/* binding */ loadAutomataPage),
/* harmony export */   mainPage: () => (/* binding */ mainPage),
/* harmony export */   menuPage: () => (/* binding */ menuPage),
/* harmony export */   newAutomataPage: () => (/* binding */ newAutomataPage),
/* harmony export */   registerEvents: () => (/* binding */ registerEvents),
/* harmony export */   savedAutomatasPage: () => (/* binding */ savedAutomatasPage),
/* harmony export */   simulatorPage: () => (/* binding */ simulatorPage)
/* harmony export */ });
var divAutomataDefinition;
var divTransitionHistory;
var infoDiv;
var mainPage;
var menuPage;
var newAutomataPage;
var savedAutomatasPage;
var simulatorPage;
var automataOverviewPage;
var loadAutomataPage;
function infoDivSwitch() {
    infoDiv.classList.toggle("hidden");
    infoDiv.classList.toggle("absolute");
    infoDiv.classList.toggle("top-0");
    infoDiv.classList.toggle("bottom-0");
    infoDiv.classList.toggle("left-0");
    infoDiv.classList.toggle("-right-20");
    infoDiv.classList.toggle("-translate-x-20");
    infoDiv.classList.toggle("md:-right-0");
    infoDiv.classList.toggle("md:-translate-x-0");
}
;
function registerEvents(storage) {
    divAutomataDefinition = document.getElementById("automataDefinitionDiv");
    divTransitionHistory = document.getElementById("transitionHistoryDiv");
    infoDiv = document.getElementById("infoDiv");
    mainPage = document.getElementById("mainPage");
    menuPage = document.getElementById("menuPage");
    newAutomataPage = document.getElementById("newAutomataPage");
    savedAutomatasPage = document.getElementById("savedAutamatasPage");
    simulatorPage = document.getElementById("simulatorPage");
    automataOverviewPage = document.getElementById("automataOverviewPage");
    loadAutomataPage = document.getElementById("loadAutomataPage");
    document.getElementById("automataDefinitionButton")?.addEventListener("click", () => {
        divAutomataDefinition.style.display = "block";
        divTransitionHistory.style.display = "none";
    });
    document.getElementById("transitionHistoryButton")?.addEventListener("click", () => {
        divTransitionHistory.style.display = "flex";
        divAutomataDefinition.style.display = "none";
    });
    document.getElementById("showInfoButton")?.addEventListener("click", infoDivSwitch);
    document.getElementById("hideInfoButton")?.addEventListener("click", infoDivSwitch);
    document.getElementById("newAutomataButton")?.addEventListener("click", () => {
        menuPage.style.display = "none";
        newAutomataPage.style.display = "flex";
    });
    document.getElementById("uploadAutomataButton")?.addEventListener("click", () => {
        menuPage.style.display = "none";
        loadAutomataPage.style.display = "flex";
    });
    document.getElementById("savedAutomatasButton")?.addEventListener("click", () => {
        menuPage.style.display = "none";
        savedAutomatasPage.style.display = "flex";
        storage?.printAutomatas();
    });
    document.getElementById("savedAutomatasBackButton")?.addEventListener("click", () => {
        menuPage.style.display = "flex";
        savedAutomatasPage.style.display = "none";
    });
    document.getElementById("hideOverviewButton")?.addEventListener("click", () => {
        savedAutomatasPage.style.display = "flex";
        automataOverviewPage.style.display = "none";
    });
    document.getElementById("hideLoadButton")?.addEventListener("click", () => {
        menuPage.style.display = "flex";
        loadAutomataPage.style.display = "none";
        document.getElementById("loadKeyInput").value = "";
        document.getElementById("loadFileInput").value = "";
    });
}


/***/ }),

/***/ "./src/formAutomataBuilder.ts":
/*!************************************!*\
  !*** ./src/formAutomataBuilder.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormAutomataBuilder: () => (/* binding */ FormAutomataBuilder)
/* harmony export */ });
/* harmony import */ var _pushdownAutomata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pushdownAutomata */ "./src/pushdownAutomata.ts");
/* harmony import */ var _pushdownAutomataChecker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pushdownAutomataChecker */ "./src/pushdownAutomataChecker.ts");
/* harmony import */ var _pushdownAutomataTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pushdownAutomataTypes */ "./src/pushdownAutomataTypes.ts");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui */ "./src/ui.ts");




class FormAutomataBuilder {
    storage;
    ui;
    states;
    inputSymbols;
    stackSymbols;
    initialState;
    initialStackSymbol;
    acceptingStates;
    transitionFunctions;
    statesDiv;
    inputSymbolDiv;
    stackSymbolDiv;
    transitionFunctionDiv;
    initialStateSelect;
    initialStackSymbolSelect;
    acceptingStatesSelect;
    keyError;
    stateError;
    inputSymbolError;
    stackSymbolError;
    initialStateError;
    initialStackSymbolError;
    acceptingStateError;
    transitionFunctionError;
    keyboardState;
    keyboardInputSymbol;
    keyboardStackSymbol;
    keyboardDeleteButton;
    transitionFunctionParts;
    activePart;
    keyInput;
    constructor(storage, ui) {
        this.storage = storage;
        this.ui = ui;
        this.states = [];
        this.inputSymbols = [];
        this.stackSymbols = [];
        this.acceptingStates = null;
        this.transitionFunctions = [];
        this.statesDiv = document.getElementById('newAutomataStates');
        this.inputSymbolDiv = document.getElementById('newAutomataInputSymbols');
        this.stackSymbolDiv = document.getElementById('newAutomataStackSymbols');
        this.transitionFunctionDiv = document.getElementById('newAutomataTranstitionFunctions');
        this.initialStateSelect = document.getElementById('newAutomataInitialStateSelect');
        this.initialStackSymbolSelect = document.getElementById('newAutomataInitialStackSymbolSelect');
        this.acceptingStatesSelect = document.getElementById('newAutomataAcceptingStatesSelect');
        this.keyError = document.getElementById('keyError');
        this.stateError = document.getElementById('stateError');
        this.inputSymbolError = document.getElementById('inputSymbolError');
        this.stackSymbolError = document.getElementById('stackSymbolError');
        this.initialStateError = document.getElementById('initialStateError');
        this.initialStackSymbolError = document.getElementById('initialStackSymbolError');
        this.acceptingStateError = document.getElementById('acceptingStateError');
        this.transitionFunctionError = document.getElementById('transitionFunctionError');
        this.keyboardState = document.getElementById('keyboardState');
        this.keyboardInputSymbol = document.getElementById('keyboardInputSymbol');
        this.keyboardStackSymbol = document.getElementById('keyboardStackSymbol');
        this.transitionFunctionParts = [];
        this.transitionFunctionParts.push(document.getElementById('transtitionFromState'));
        this.transitionFunctionParts.push(document.getElementById('transtionPopSymbol'));
        this.transitionFunctionParts.push(document.getElementById('transitionSymbol'));
        this.transitionFunctionParts.push(document.getElementById('transitionToState'));
        this.transitionFunctionParts.push(document.getElementById('transitionPushSymbols'));
        this.activePart = -1;
        this.keyboardInputSymbol.append(this.createKeyboardButton({ isEpsylon: true }, 1));
        this.keyboardDeleteButton = this.createKeyboardButton({ value: '←' }, 3);
        this.keyboardDeleteButton.style.display = "none";
        this.keyboardStackSymbol.append(this.keyboardDeleteButton);
        this.keyInput = document.getElementById('newAutomataKey');
    }
    registerEvents() {
        document.getElementById('newAutomataStateForm')?.addEventListener('submit', this.stateFormSubmitHandler.bind(this));
        document.getElementById('newAutomataInputSymbolForm')?.addEventListener('submit', this.inputSymbolSubmitHandler.bind(this));
        document.getElementById('newAutomataStackSymbolForm')?.addEventListener('submit', this.stackSymbolSubmitHandler.bind(this));
        this.initialStateSelect.addEventListener('change', this.initialStateChangeHandler.bind(this));
        this.initialStackSymbolSelect.addEventListener('change', this.initialStackSymbolChangeHandler.bind(this));
        document.getElementById('acceptanceEmptyStackCheckBox')?.addEventListener('click', this.acceptingStateEmptyChangeHandler.bind(this));
        this.acceptingStatesSelect.addEventListener('change', this.acceptingStatesChangeHandler.bind(this));
        document.getElementById("addTransitionFunction")?.addEventListener('click', this.transitionFunctionAddHandler.bind(this));
        this.transitionFunctionParts[0]?.addEventListener('click', (event) => { this.transitionFunctionPartChangeHandler(event, 0); });
        this.transitionFunctionParts[1]?.addEventListener('click', (event) => { this.transitionFunctionPartChangeHandler(event, 1); });
        this.transitionFunctionParts[2]?.addEventListener('click', (event) => { this.transitionFunctionPartChangeHandler(event, 2); });
        this.transitionFunctionParts[3]?.addEventListener('click', (event) => { this.transitionFunctionPartChangeHandler(event, 3); });
        this.transitionFunctionParts[4]?.addEventListener('click', (event) => { this.transitionFunctionPartChangeHandler(event, 4); });
        document.getElementById('addTransitionFunctionButton')?.addEventListener('click', this.transitionFunctionAddHandler.bind(this));
        document.getElementById('newAutomataSaveButton')?.addEventListener('click', this.saveEventHandler.bind(this));
    }
    reset() {
        //divs
        this.statesDiv.innerHTML = '';
        this.inputSymbolDiv.innerHTML = '';
        this.stackSymbolDiv.innerHTML = '';
        this.transitionFunctionDiv.innerHTML = '';
        //inputs
        document.getElementById('stateInput').value = '';
        document.getElementById('inputSymbolInput').value = '';
        document.getElementById('stackSymbolInput').value = '';
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
        document.getElementById('acceptanceEmptyStackCheckBox').checked = true;
        //transition function parts
        for (let t of this.transitionFunctionParts) {
            t.innerText = '';
        }
        //keyboard
        this.keyboardState.innerHTML = '';
        this.keyboardInputSymbol.innerHTML = '';
        this.keyboardInputSymbol.append(this.createKeyboardButton({ isEpsylon: true }, 1));
        this.keyboardStackSymbol.innerHTML = '';
        this.keyboardStackSymbol.append(this.keyboardDeleteButton);
        this.keyboardDeleteButton.style.display = "none";
        //errors
        this.stateError.style.display = 'none';
        this.stackSymbolError.style.display = 'none';
        this.inputSymbolError.style.display = 'none';
        this.initialStateError.style.display = 'none';
        this.acceptingStateError.style.display = 'none';
        this.initialStateError.style.display = 'none';
        this.initialStackSymbolError.style.display = 'none';
        this.transitionFunctionError.style.display = 'none';
    }
    stateFormSubmitHandler(event) {
        event.preventDefault();
        let form = event.target;
        let inputField = form.elements.namedItem('stateInput');
        let inputValue = inputField.value;
        inputField.value = '';
        let item = {
            value: inputValue,
        };
        this.newItem(_pushdownAutomataTypes__WEBPACK_IMPORTED_MODULE_2__.compareState, item, 'State');
    }
    inputSymbolSubmitHandler(event) {
        event.preventDefault();
        let form = event.target;
        let inputField = form.elements.namedItem('inputSymbolInput');
        let inputValue = inputField.value;
        inputField.value = '';
        let item = {
            isEpsylon: false,
            value: inputValue,
        };
        this.newItem(_pushdownAutomataTypes__WEBPACK_IMPORTED_MODULE_2__.compareInputSymbol, item, 'InputSymbol');
    }
    ;
    stackSymbolSubmitHandler(event) {
        event.preventDefault();
        let form = event.target;
        let inputField = form.elements.namedItem('stackSymbolInput');
        let inputValue = inputField.value;
        inputField.value = '';
        let item = {
            value: inputValue,
        };
        this.newItem(_pushdownAutomataTypes__WEBPACK_IMPORTED_MODULE_2__.compareStackSymbol, item, 'StackSymbol');
    }
    ;
    initialStateChangeHandler(event) {
        event.preventDefault();
        let select = event.target;
        let selectedOption = select.options[select.selectedIndex];
        if (selectedOption.value === '') {
            this.initialState = undefined;
        }
        else {
            let item = {
                value: selectedOption.value
            };
            this.initialState = item;
        }
    }
    ;
    initialStackSymbolChangeHandler(event) {
        event.preventDefault();
        let select = event.target;
        let selectedOption = select.options[select.selectedIndex];
        if (selectedOption.value === '') {
            this.initialStackSymbol = undefined;
        }
        else {
            let item = {
                value: selectedOption.value
            };
            this.initialStackSymbol = item;
        }
    }
    ;
    acceptingStateEmptyChangeHandler(event) {
        let checkbox = event.target;
        if (checkbox.checked) {
            for (let a of this.states) {
                let option = this.acceptingStatesSelect.options.namedItem("acceptingStateOption" + a.value);
                if (option) {
                    option.selected = false;
                }
            }
            this.acceptingStates = null;
            this.acceptingStatesSelect.style.display = 'none';
        }
        else {
            this.acceptingStates = [];
            this.acceptingStatesSelect.style.display = 'block';
        }
    }
    ;
    acceptingStatesChangeHandler(event) {
        event.preventDefault();
        this.acceptingStates = [];
        for (let a of this.states) {
            let option = this.acceptingStatesSelect.options.namedItem("acceptingStateOption" + a.value);
            if (option) {
                if (option.selected) {
                    this.acceptingStates?.push(a);
                }
            }
        }
        console.log(this.acceptingStates);
    }
    ;
    transitionFunctionAddHandler(event) {
        event.preventDefault();
        for (let i = 0; i < 4; i++) {
            if (this.transitionFunctionParts[i].innerText === '') {
                this.transitionFunctionError.style.display = 'block';
                this.transitionFunctionError.innerText = 'Error: First 4 fields must be filled';
                return;
            }
        }
        let fromState = { value: this.transitionFunctionParts[0].innerText };
        let startSymbol = { value: this.transitionFunctionParts[1].innerText };
        let inputSymbol = this.transitionFunctionParts[2].innerText === 'ε' ? { isEpsylon: true } : { isEpsylon: false, value: this.transitionFunctionParts[2].innerText };
        let toState = { value: this.transitionFunctionParts[3].innerText };
        let pushedSymbols = this.transitionFunctionParts[4].innerHTML.split('').map((s) => { return { value: s }; });
        let item = {
            fromState: fromState,
            startSymbol: startSymbol,
            inputSymbol: inputSymbol,
            toState: toState,
            pushedSymbols: pushedSymbols,
        };
        for (let t of this.transitionFunctions) {
            if ((0,_pushdownAutomataTypes__WEBPACK_IMPORTED_MODULE_2__.compareTransitionFunction)(t, item)) {
                console.log(t, item);
                this.transitionFunctionError.style.display = 'block';
                return;
            }
        }
        this.transitionFunctions.push(item);
        this.transitionFunctionDiv.append(this.createTransitionFunctionDiv(item));
        this.transitionFunctionError.style.display = 'none';
        for (let t of this.transitionFunctionParts) {
            t.innerText = '';
        }
    }
    createTransitionFunctionDiv(item) {
        let div = document.createElement('div');
        div.classList.add('flex', 'p-2', 'bg-slate-100', 'rounded', 'm-2', 'flex-row', 'justify-center', 'items-center');
        let t = _ui__WEBPACK_IMPORTED_MODULE_3__.UI.generateTransitionFunction(item);
        div.append(t);
        let button = document.createElement('button');
        button.classList.add('rounded-full', 'bg-slate-300', 'w-6', 'h-6', 'ml-2');
        button.innerText = 'X';
        div.append(button);
        button.addEventListener('click', this.deleteTransitionFunction.bind(this, item, div));
        return div;
    }
    newItem(compareFunction, item, type) {
        let arr;
        let error;
        let errorMsg;
        if (type === 'State') {
            arr = this.states;
            error = this.stateError;
            errorMsg = 'Error: State already exists';
        }
        else if (type === 'InputSymbol') {
            arr = this.inputSymbols;
            error = this.inputSymbolError;
            errorMsg = 'Error: Input symbol already exists';
        }
        else if (type === 'StackSymbol') {
            arr = this.stackSymbols;
            error = this.stackSymbolError;
            errorMsg = 'Error: Stack symbol already exists';
        }
        let exists = false;
        for (let i of arr) {
            if (compareFunction(i, item)) {
                exists = true;
                break;
            }
        }
        if (!exists) {
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
            if (type === 'State') {
                let keyboardButton = this.createKeyboardButton(item, 0);
                button.addEventListener('click', this.deleteState.bind(this, item, div, keyboardButton));
                this.statesDiv.append(div);
                this.stateAdded(item, keyboardButton);
            }
            else if (type === 'InputSymbol') {
                let keyboardButton = this.createKeyboardButton(item, 1);
                button.addEventListener('click', this.deleteInputSymbol.bind(this, item, div, keyboardButton));
                this.inputSymbolDiv.append(div);
                this.inputSymbolAdded(item, keyboardButton);
            }
            else if (type === 'StackSymbol') {
                let keyboardButton = this.createKeyboardButton(item, 2);
                button.addEventListener('click', this.deleteStackSymbol.bind(this, item, div, keyboardButton));
                this.stackSymbolDiv.append(div);
                this.stackSymbolAdded(item, keyboardButton);
            }
            error.style.display = 'none';
        }
        else {
            error.style.display = 'block';
            error.innerText = errorMsg;
        }
    }
    deleteState(item, div, keyboardButton) {
        this.statesDiv.removeChild(div);
        this.states.splice(this.states.indexOf(item), 1);
        if ((0,_pushdownAutomataTypes__WEBPACK_IMPORTED_MODULE_2__.compareState)(this.initialState, item)) {
            this.initialState = undefined;
        }
        this.acceptingStates = this.acceptingStates?.filter(a => !(0,_pushdownAutomataTypes__WEBPACK_IMPORTED_MODULE_2__.compareState)(a, item)) ?? null;
        this.stateDeleted(item);
        keyboardButton.remove();
        //TODO: Clear div
        //NOTE: I don't know what this TODO means
    }
    deleteInputSymbol(item, div, keyboardButton) {
        this.inputSymbolDiv.removeChild(div);
        this.inputSymbols.splice(this.inputSymbols.indexOf(item), 1);
        this.inputSymbolDeleted(item);
        keyboardButton.remove();
        //TODO: Clear div
        //NOTE: I don't know what this TODO means
    }
    deleteStackSymbol(item, div, keyboardButton) {
        this.stackSymbolDiv.removeChild(div);
        this.stackSymbols.splice(this.stackSymbols.indexOf(item), 1);
        if ((0,_pushdownAutomataTypes__WEBPACK_IMPORTED_MODULE_2__.compareStackSymbol)(this.initialStackSymbol, item)) {
            this.initialStackSymbol = undefined;
        }
        this.stackSymbolDeleted(item);
        keyboardButton.remove();
        //TODO: Clear div
        //NOTE: I don't know what this TODO means
    }
    deleteTransitionFunction(item, div) {
        this.transitionFunctionDiv.removeChild(div);
        this.transitionFunctions.splice(this.transitionFunctions.indexOf(item), 1);
    }
    ;
    stateAdded(item, keyboardButton) {
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
    }
    ;
    inputSymbolAdded(item, keyboardButton) {
        this.keyboardInputSymbol.append(keyboardButton);
        this.transitionCheck();
    }
    ;
    stackSymbolAdded(item, keyboardButton) {
        let option = document.createElement('option');
        option.value = item.value;
        option.innerText = item.value;
        option.id = "stackSymbolOption" + item.value;
        this.initialStackSymbolSelect.append(option);
        this.keyboardStackSymbol.append(keyboardButton);
        this.transitionCheck();
    }
    ;
    stateDeleted(item) {
        let option = this.initialStateSelect.options.namedItem("initialStateOption" + item.value);
        if (option) {
            if (option.selected) {
                this.initialStateSelect.options[0].selected = true;
            }
            option.remove();
        }
        let option2 = this.acceptingStatesSelect.options.namedItem("acceptingStateOption" + item.value);
        if (option2) {
            option2.remove();
        }
        if (this.transitionFunctionParts[0].innerText === item.value) {
            this.transitionFunctionParts[0].innerText = '';
        }
        if (this.transitionFunctionParts[3].innerText === item.value) {
            this.transitionFunctionParts[3].innerText = '';
        }
        this.transitionCheck();
    }
    ;
    inputSymbolDeleted(item) {
        if (this.transitionFunctionParts[2].innerText === item.value) {
            this.transitionFunctionParts[2].innerText = '';
        }
        this.transitionCheck();
    }
    ;
    stackSymbolDeleted(item) {
        let option = this.initialStackSymbolSelect.options.namedItem("stackSymbolOption" + item.value);
        if (option) {
            if (option.selected) {
                this.initialStackSymbolSelect.options[0].selected = true;
            }
            option.remove();
        }
        if (this.transitionFunctionParts[1].innerText === item.value) {
            this.transitionFunctionParts[1].innerText = '';
        }
        if (this.transitionFunctionParts[4].innerText.includes(item.value)) {
            this.transitionFunctionParts[4].innerText = '';
        }
        this.transitionCheck();
    }
    ;
    createKeyboardButton(item, type) {
        let button = document.createElement('button');
        button.classList.add('flex', 'justify-center', 'items-center', 'px-2', 'h-8', 'bg-slate-100', 'm-1');
        button.innerText = item.value ?? 'ε';
        button.addEventListener('click', (event) => this.keyboardButtonPressed(event, type));
        return button;
    }
    keyboardButtonPressed(event, type) {
        event.preventDefault();
        console.log(type, this.activePart);
        switch (type) {
            //State
            case 0:
                if (this.activePart === 0 || this.activePart === 3) {
                    let button = event.target;
                    let inputField = this.transitionFunctionParts[this.activePart];
                    inputField.innerText = button.innerText;
                }
                return;
            //Input Symbol
            case 1:
                if (this.activePart === 2) {
                    let button = event.target;
                    let inputField = this.transitionFunctionParts[this.activePart];
                    inputField.innerText = button.innerText;
                }
                return;
            //Stack Symbol
            case 2:
                if (this.activePart === 1) {
                    let button = event.target;
                    let inputField = this.transitionFunctionParts[this.activePart];
                    inputField.innerText = button.innerText;
                }
                else if (this.activePart === 4) {
                    let button = event.target;
                    let inputField = this.transitionFunctionParts[this.activePart];
                    inputField.innerText += button.innerText;
                }
                return;
            case 3:
                if (this.activePart === 4) {
                    let inputField = this.transitionFunctionParts[this.activePart];
                    inputField.innerHTML = inputField.innerText.slice(0, -1);
                }
                return;
            default:
                return;
        }
    }
    transitionFunctionPartChangeHandler(event, index) {
        event.preventDefault();
        if (this.activePart && this.activePart == index) {
            return;
        }
        if (this.activePart >= 0) {
            this.transitionFunctionParts[this.activePart].classList.remove('bg-slate-300');
            this.transitionFunctionParts[this.activePart].classList.add('bg-slate-100');
            if (this.activePart === 0 || this.activePart === 3) {
                this.keyboardState.style.display = 'none';
            }
            else if (this.activePart === 1 || this.activePart === 4) {
                this.keyboardStackSymbol.style.display = 'none';
            }
            else {
                this.keyboardInputSymbol.style.display = 'none';
            }
        }
        this.activePart = index;
        this.transitionFunctionParts[this.activePart].classList.remove('bg-slate-100');
        this.transitionFunctionParts[this.activePart].classList.add('bg-slate-300');
        if (this.activePart === 4) {
            this.keyboardDeleteButton.style.display = "block";
        }
        else {
            this.keyboardDeleteButton.style.display = "none";
        }
        if (this.activePart === 0 || this.activePart === 3) {
            this.keyboardState.style.display = 'flex';
        }
        else if (this.activePart === 1 || this.activePart === 4) {
            this.keyboardStackSymbol.style.display = 'flex';
        }
        else {
            this.keyboardInputSymbol.style.display = 'flex';
        }
    }
    transitionCheck() {
        let anyInvalid = false;
        for (let i = 0; i < this.transitionFunctions.length; i++) {
            let t = this.transitionFunctions[i];
            let tD = this.transitionFunctionDiv.children[i];
            //From state
            let fromState = this.states.find((s) => (0,_pushdownAutomataTypes__WEBPACK_IMPORTED_MODULE_2__.compareState)(s, t.fromState));
            if (!fromState) {
                anyInvalid = true;
                tD.style.border = "1px solid rgb(224 36 36)";
                continue;
            }
            //To state
            let toState = this.states.find((s) => (0,_pushdownAutomataTypes__WEBPACK_IMPORTED_MODULE_2__.compareState)(s, t.toState));
            if (!toState) {
                anyInvalid = true;
                tD.style.border = "1px solid rgb(224 36 36)";
                continue;
            }
            //Input symbol
            if (!t.inputSymbol.isEpsylon) {
                let inputSymbol = this.inputSymbols.find((s) => (0,_pushdownAutomataTypes__WEBPACK_IMPORTED_MODULE_2__.compareInputSymbol)(s, t.inputSymbol));
                if (!inputSymbol) {
                    anyInvalid = true;
                    tD.style.border = "1px solid rgb(224 36 36)";
                    continue;
                }
            }
            //Start symbol
            let startSymbol = this.stackSymbols.find((s) => (0,_pushdownAutomataTypes__WEBPACK_IMPORTED_MODULE_2__.compareStackSymbol)(s, t.startSymbol));
            if (!startSymbol) {
                anyInvalid = true;
                tD.style.border = "1px solid rgb(224 36 36)";
                continue;
            }
            //Pushed symbols
            let checker = false;
            for (let s of t.pushedSymbols) {
                let stackSymbol = this.stackSymbols.find((s2) => (0,_pushdownAutomataTypes__WEBPACK_IMPORTED_MODULE_2__.compareStackSymbol)(s2, s));
                if (!stackSymbol) {
                    anyInvalid = true;
                    checker = true;
                    tD.style.border = "1px solid rgb(224 36 36)";
                    break;
                }
            }
            if (checker) {
                continue;
            }
            //Correct transition
            tD.style.border = "";
        }
        return anyInvalid;
    }
    saveEventHandler(event) {
        event.preventDefault();
        //States
        if (this.states.length === 0) {
            this.stateError.style.display = 'block';
            this.stateError.innerText = 'Error: At least one state must be defined';
            return;
        }
        //Input symbols
        if (this.inputSymbols.length === 0) {
            this.inputSymbolError.style.display = 'block';
            this.inputSymbolError.innerText = 'Error: At least one input symbol must be defined';
            return;
        }
        //Stack symbols
        if (this.stackSymbols.length === 0) {
            this.stackSymbolError.style.display = 'block';
            this.stackSymbolError.innerText = 'Error: At least one stack symbol must be defined';
            return;
        }
        //Initial state
        if (!this.initialState) {
            this.initialStateError.style.display = 'block';
            this.initialStateError.innerText = 'Error: Initial state must be defined';
            return;
        }
        else {
            this.initialStateError.style.display = 'none';
        }
        //Initial stack symbol
        if (!this.initialStackSymbol) {
            this.initialStackSymbolError.style.display = 'block';
            this.initialStackSymbolError.innerText = 'Error: Initial stack symbol must be defined';
            return;
        }
        else {
            this.initialStackSymbolError.style.display = 'none';
        }
        //Accepting states
        if (this.acceptingStates !== null) {
            if (this.acceptingStates.length === 0) {
                this.acceptingStateError.style.display = 'block';
                this.acceptingStateError.innerText = 'Error: At least one accepting state must be defined or enable acceptance by empty stack';
                return;
            }
            else {
                this.initialStateError.style.display = 'none';
            }
        }
        //Transition functions
        if (this.transitionFunctions.length === 0) {
            this.transitionFunctionError.style.display = 'block';
            this.transitionFunctionError.innerText = 'Error: At least one transition function must be defined';
            return;
        }
        //Whole automata
        if (!(0,_pushdownAutomataChecker__WEBPACK_IMPORTED_MODULE_1__.checkPushdownAutomata)(this.states, this.stackSymbols, this.inputSymbols, this.initialState, this.initialStackSymbol, this.acceptingStates, this.transitionFunctions)) {
            return;
        }
        //Key
        let key = this.keyInput.value.trim();
        if (key === '') {
            this.keyError.style.display = 'block';
        }
        else {
            this.keyError.style.display = 'none';
        }
        //Valid
        let pda = new _pushdownAutomata__WEBPACK_IMPORTED_MODULE_0__.PushdownAutomata(this.states, this.inputSymbols, this.stackSymbols, this.initialState, this.initialStackSymbol, this.acceptingStates, this.transitionFunctions);
        let result = this.storage.saveAutomata(key, pda);
        if (result) {
            /*this.reset();
            newAutomataPage.style.display = "none";
            menuPage.style.display = "flex";
            mainPage.style.display = "none";
            simulatorPage.style.display = "flex";
            this.ui.setAutomata(this.storage.loadAutomata(key));*/
            console.log("Valid automata:", pda);
        }
    }
}


/***/ }),

/***/ "./src/pushdownAutomata.ts":
/*!*********************************!*\
  !*** ./src/pushdownAutomata.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PushdownAutomata: () => (/* binding */ PushdownAutomata)
/* harmony export */ });
/* harmony import */ var _pushdownAutomataTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pushdownAutomataTypes */ "./src/pushdownAutomataTypes.ts");

class PushdownAutomata {
    states;
    inputSymbols;
    stackSymbols;
    initialState;
    initialStackSymbol;
    acceptingState;
    transitionFunction;
    constructor(states, inputSymbols, stackSymbols, initialState, initialStackSymbol, acceptingState, transitionFunction) {
        this.states = states;
        this.inputSymbols = inputSymbols;
        this.stackSymbols = stackSymbols;
        this.initialState = initialState;
        this.initialStackSymbol = initialStackSymbol;
        this.acceptingState = acceptingState;
        this.transitionFunction = transitionFunction;
    }
    stateExists(state) {
        for (let s of this.states) {
            if ((0,_pushdownAutomataTypes__WEBPACK_IMPORTED_MODULE_0__.compareState)(s, state)) {
                return true;
            }
        }
        return false;
    }
    inputSymbolExists(inputSymbol) {
        for (let i of this.inputSymbols) {
            if ((0,_pushdownAutomataTypes__WEBPACK_IMPORTED_MODULE_0__.compareInputSymbol)(i, inputSymbol)) {
                return true;
            }
        }
        return false;
    }
    stackSymbolExists(stackSymbol) {
        for (let s of this.stackSymbols) {
            if ((0,_pushdownAutomataTypes__WEBPACK_IMPORTED_MODULE_0__.compareStackSymbol)(s, stackSymbol)) {
                return true;
            }
        }
        return false;
    }
    checkStatesExistence() {
        var errorMsg = [];
        if (!this.stateExists(this.initialState)) {
            errorMsg.push(["Initial state does not exist", this.initialState]);
        }
        if (this.acceptingState != null) {
            for (let finalState of this.acceptingState) {
                if (!this.stateExists(finalState)) {
                    errorMsg.push(["Accepting state does not exist", finalState]);
                }
            }
        }
        return errorMsg;
    }
    checkSymbolExistence() {
        var errorMsg = [];
        if (this.initialStackSymbol != null) {
            if (!this.stackSymbolExists(this.initialStackSymbol)) {
                errorMsg.push(["Initial stack symbol does not exist", this.initialStackSymbol]);
            }
        }
        return errorMsg;
    }
    checkTransitionFunctions() {
        var errorMsg = [];
        for (let transitionFunction of this.transitionFunction) {
            if (!this.stateExists(transitionFunction.fromState)) {
                errorMsg.push(["From state does not exist", transitionFunction]);
            }
            if (!this.inputSymbolExists(transitionFunction.inputSymbol)) {
                errorMsg.push(["Input symbol does not exist", transitionFunction]);
            }
            if (transitionFunction.startSymbol != null && !this.stackSymbolExists(transitionFunction.startSymbol)) {
                errorMsg.push(["Stack symbol does not exist", transitionFunction]);
            }
            if (!this.stateExists(transitionFunction.toState)) {
                errorMsg.push(["To state does not exist", transitionFunction]);
            }
            for (let pushedSymbol of transitionFunction.pushedSymbols) {
                if (!this.stackSymbolExists(pushedSymbol)) {
                    errorMsg.push(["Pushed symbol does not exist", transitionFunction]);
                }
            }
        }
        return errorMsg;
    }
    checkInputTapeValidity(inputTape) {
        let invalidSymbols = [];
        let symbols = new Set(inputTape.split(""));
        for (let s of symbols) {
            let invalid = true;
            for (let inputSymbol of this.inputSymbols) {
                if (inputSymbol.isEpsylon == false && inputSymbol.value == s) {
                    invalid = false;
                    break;
                }
            }
            if (invalid) {
                invalidSymbols.push(s);
            }
        }
        return invalidSymbols;
    }
    getTransitionFunctions(tapeSymbol, state, stackSymbol) {
        let possibleTransitionFunctions = [];
        let inputSymbol;
        if (tapeSymbol === "") {
            inputSymbol = { isEpsylon: true };
        }
        else {
            inputSymbol = { isEpsylon: false, value: tapeSymbol };
        }
        for (let transitionFunction of this.transitionFunction) {
            if (!(0,_pushdownAutomataTypes__WEBPACK_IMPORTED_MODULE_0__.compareInputSymbol)(inputSymbol, transitionFunction.inputSymbol) && !transitionFunction.inputSymbol.isEpsylon) {
                continue;
            }
            if (!(0,_pushdownAutomataTypes__WEBPACK_IMPORTED_MODULE_0__.compareState)(state, transitionFunction.fromState)) {
                continue;
            }
            if (!(0,_pushdownAutomataTypes__WEBPACK_IMPORTED_MODULE_0__.compareStackSymbol)(stackSymbol, transitionFunction.startSymbol)) {
                continue;
            }
            possibleTransitionFunctions.push(transitionFunction);
        }
        return possibleTransitionFunctions;
    }
}


/***/ }),

/***/ "./src/pushdownAutomataChecker.ts":
/*!****************************************!*\
  !*** ./src/pushdownAutomataChecker.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkPushdownAutomata: () => (/* binding */ checkPushdownAutomata)
/* harmony export */ });
/* harmony import */ var _pushdownAutomata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pushdownAutomata */ "./src/pushdownAutomata.ts");
/* harmony import */ var _pushdownAutomataTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pushdownAutomataTypes */ "./src/pushdownAutomataTypes.ts");


function includeDuplicates(arr, compare) {
    return arr.some((value, index, self) => self.filter(x => compare(x, value)).length > 1);
}
function checkPushdownAutomata(state, stackSymbol, inputSymbol, initialState, initialStackSymbol, acceptingState, transitionFunction) {
    let pda;
    if (state instanceof _pushdownAutomata__WEBPACK_IMPORTED_MODULE_0__.PushdownAutomata) {
        pda = state;
    }
    else {
        pda = new _pushdownAutomata__WEBPACK_IMPORTED_MODULE_0__.PushdownAutomata(state, inputSymbol, stackSymbol, initialState, initialStackSymbol, acceptingState, transitionFunction);
    }
    //States
    let error = false;
    let errorMSg = [];
    if (pda.states.length === 0) {
        error = true;
        errorMSg.push("No states");
    }
    if (includeDuplicates(pda.states, _pushdownAutomataTypes__WEBPACK_IMPORTED_MODULE_1__.compareState)) {
        error = true;
        errorMSg.push("Duplicate states");
    }
    //Input symbols
    if (pda.inputSymbols.length === 0) {
        error = true;
        errorMSg.push("No input symbols");
    }
    if (includeDuplicates(pda.inputSymbols, _pushdownAutomataTypes__WEBPACK_IMPORTED_MODULE_1__.compareInputSymbol)) {
        error = true;
        errorMSg.push("Duplicate input symbols");
    }
    //Stack symbols
    if (pda.stackSymbols.length === 0) {
        error = true;
        errorMSg.push("No stack symbols");
    }
    if (includeDuplicates(pda.stackSymbols, _pushdownAutomataTypes__WEBPACK_IMPORTED_MODULE_1__.compareStackSymbol)) {
        error = true;
        errorMSg.push("Duplicate stack symbols");
    }
    //Initial state
    if (pda.initialState === null) {
        error = true;
        errorMSg.push("No initial state");
    }
    if (!pda.states.some(s => (0,_pushdownAutomataTypes__WEBPACK_IMPORTED_MODULE_1__.compareState)(s, pda.initialState))) {
        error = true;
        errorMSg.push("Initial state does not exist");
    }
    //Initial stack symbol
    if (pda.initialStackSymbol !== null) {
        if (!pda.stackSymbols.some(s => (0,_pushdownAutomataTypes__WEBPACK_IMPORTED_MODULE_1__.compareStackSymbol)(s, pda.initialStackSymbol))) {
            error = true;
            errorMSg.push("Initial stack symbol does not exist");
        }
    }
    //Accepting state
    if (pda.acceptingState !== null) {
        let tempError = false;
        for (let finalState of pda.acceptingState) {
            if (!pda.states.some(s => (0,_pushdownAutomataTypes__WEBPACK_IMPORTED_MODULE_1__.compareState)(s, finalState))) {
                tempError = true;
                break;
            }
        }
        if (tempError) {
            error = true;
            errorMSg.push("At least one accepting state does not exist");
        }
    }
    //Transition function
    if (pda.transitionFunction.length === 0) {
        error = true;
        errorMSg.push("No transition function");
    }
    let tempError = false;
    for (let t of pda.transitionFunction) {
        if (!pda.states.some(s => (0,_pushdownAutomataTypes__WEBPACK_IMPORTED_MODULE_1__.compareState)(s, t.fromState))) {
            tempError = true;
            break;
        }
        if (!(t.inputSymbol.isEpsylon || (!t.inputSymbol.isEpsylon && pda.inputSymbols.some(i => (0,_pushdownAutomataTypes__WEBPACK_IMPORTED_MODULE_1__.compareInputSymbol)(i, t.inputSymbol))))) {
            tempError = true;
            break;
        }
        if (!pda.stackSymbols.some(s => (0,_pushdownAutomataTypes__WEBPACK_IMPORTED_MODULE_1__.compareStackSymbol)(s, t.startSymbol))) {
            tempError = true;
            break;
        }
        for (let pushedSymbol of t.pushedSymbols) {
            if (!pda.stackSymbols.some(s => (0,_pushdownAutomataTypes__WEBPACK_IMPORTED_MODULE_1__.compareStackSymbol)(s, pushedSymbol))) {
                tempError = true;
                break;
            }
        }
    }
    if (tempError) {
        error = true;
        errorMSg.push("At least one transition function is incorrect");
    }
    if (error) {
        alert("Error in PDA: \n -" + errorMSg.join("\n -"));
        return false;
    }
    return true;
}


/***/ }),

/***/ "./src/pushdownAutomataSimulator.ts":
/*!******************************************!*\
  !*** ./src/pushdownAutomataSimulator.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PushdownAutomataSimulator: () => (/* binding */ PushdownAutomataSimulator)
/* harmony export */ });
/* harmony import */ var _stack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stack */ "./src/stack.ts");
/* harmony import */ var _pushdownAutomataTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pushdownAutomataTypes */ "./src/pushdownAutomataTypes.ts");


class PushdownAutomataSimulator {
    inputTape;
    stack;
    currentState;
    acceptingState;
    automata;
    history = [];
    constructor(automata) {
        this.automata = automata;
        this.inputTape = "";
        this.stack = new _stack__WEBPACK_IMPORTED_MODULE_0__.Stack();
        if (this.automata.initialStackSymbol != null) {
            this.stack.push(this.automata.initialStackSymbol);
        }
        this.currentState = this.automata.initialState;
        this.acceptingState = this.automata.acceptingState;
        this.history = [];
    }
    reset() {
        this.inputTape = "";
        this.stack.clear();
        if (this.automata.initialStackSymbol != null) {
            this.stack.push(this.automata.initialStackSymbol);
        }
        this.currentState = this.automata.initialState;
        this.acceptingState = this.automata.acceptingState;
        this.history = [];
    }
    applyTransitionFunction(f) {
        this.inputTape = this.inputTape.substring(1);
        this.stack.pop();
        for (let i = f.pushedSymbols.length - 1; i >= 0; i--) {
            this.stack.push(f.pushedSymbols[i]);
        }
        this.currentState = f.toState;
        this.history.push(f);
    }
    checkInputTapeValidity() {
        let invalidSymbols = this.automata.checkInputTapeValidity(this.inputTape);
        if (invalidSymbols.length > 0) {
            throw new Error("Invalid input tape: " + invalidSymbols.join(", "));
        }
    }
    acceptedInput() {
        if (this.inputTape !== "") {
            return false;
        }
        if (this.acceptingState == null) {
            return this.stack.empty();
        }
        for (let s of this.acceptingState) {
            if ((0,_pushdownAutomataTypes__WEBPACK_IMPORTED_MODULE_1__.compareState)(s, this.currentState)) {
                return true;
            }
        }
        return false;
    }
    nextStep() {
        if (this.acceptedInput()) {
            return [];
        }
        console.log(this.inputTape[0], this.currentState, this.stack.top());
        console.log(this.automata);
        console.log(typeof this.automata);
        console.log(typeof this.automata.getTransitionFunctions);
        let possibleTransitionFunctions;
        if (this.inputTape === "") {
            possibleTransitionFunctions = this.automata.getTransitionFunctions("", this.currentState, this.stack.top());
        }
        else {
            possibleTransitionFunctions = this.automata.getTransitionFunctions(this.inputTape[0], this.currentState, this.stack.top());
        }
        return possibleTransitionFunctions;
    }
    backStep() {
        if (this.history.length === 0) {
            return null;
        }
        let last = this.history.pop();
        this.currentState = last.fromState;
        for (let i = 0; i < last.pushedSymbols.length; i++) {
            this.stack.pop();
        }
        this.stack.push(last.startSymbol);
        if (!last.inputSymbol.isEpsylon)
            this.inputTape = last.inputSymbol.value + this.inputTape;
        return last;
    }
    setNewInput(input) {
        this.reset();
        this.inputTape = input;
    }
}


/***/ }),

/***/ "./src/pushdownAutomataTypes.ts":
/*!**************************************!*\
  !*** ./src/pushdownAutomataTypes.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compareInputSymbol: () => (/* binding */ compareInputSymbol),
/* harmony export */   compareStackSymbol: () => (/* binding */ compareStackSymbol),
/* harmony export */   compareState: () => (/* binding */ compareState),
/* harmony export */   compareTransitionFunction: () => (/* binding */ compareTransitionFunction)
/* harmony export */ });
function compareStackSymbol(a, b) {
    if (a != null && typeof (a) == typeof (b)) {
        return a.value == b.value;
    }
    if (a == null && b == null) {
        return true;
    }
    return false;
}
function compareInputSymbol(a, b) {
    if (a.isEpsylon == b.isEpsylon) {
        if (a.isEpsylon == false) {
            return a.value == b.value;
        }
        else {
            return true;
        }
    }
    return false;
}
function compareState(a, b) {
    return a.value == b.value;
}
function compareTransitionFunction(a, b) {
    //fromState
    if (!compareState(a.fromState, b.fromState)) {
        return false;
    }
    //startSymbol
    if (!compareStackSymbol(a.startSymbol, b.startSymbol)) {
        return false;
    }
    //inputSymbol
    if (!compareInputSymbol(a.inputSymbol, b.inputSymbol)) {
        return false;
    }
    //toState
    if (!compareState(a.toState, b.toState)) {
        return false;
    }
    //pushedSymbols
    if (a.pushedSymbols.length != b.pushedSymbols.length) {
        return false;
    }
    for (let i = 0; i < a.pushedSymbols.length; i++) {
        if (!compareStackSymbol(a.pushedSymbols[i], b.pushedSymbols[i])) {
            return false;
        }
    }
    return true;
}


/***/ }),

/***/ "./src/stack.ts":
/*!**********************!*\
  !*** ./src/stack.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Stack: () => (/* binding */ Stack)
/* harmony export */ });
class Stack {
    data = [];
    pop() {
        this.data.pop();
    }
    push(item) {
        this.data.push(item);
    }
    top() {
        return this.data[this.data.length - 1] ?? null;
    }
    empty() {
        return this.data.length === 0;
    }
    size() {
        return this.data.length;
    }
    clear() {
        this.data = [];
    }
    print() {
        console.log(JSON.stringify(this.data));
    }
}


/***/ }),

/***/ "./src/storage.ts":
/*!************************!*\
  !*** ./src/storage.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Storage: () => (/* binding */ Storage)
/* harmony export */ });
/* harmony import */ var _pushdownAutomata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pushdownAutomata */ "./src/pushdownAutomata.ts");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/ui.ts");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events */ "./src/events.ts");



class Storage {
    savedAutomatasTable;
    ui;
    constructor(ui) {
        this.savedAutomatasTable = document.getElementById("savedAutomatasTable");
        if (ui) {
            this.ui = ui;
        }
    }
    registerEvents() {
        document.getElementById("loadFileForm").addEventListener("submit", this.loadFile.bind(this));
    }
    loadFile(e) {
        e.preventDefault();
        let keyInput = document.getElementById("loadKeyInput");
        let key = keyInput?.value;
        let fileInput = document.getElementById("loadFileInput");
        let file = fileInput?.files?.[0];
        if (!key || !file) {
            alert("Please fill in all fields");
            return;
        }
        let overwrite = false;
        if (this.keyExists(key)) {
            if (!confirm("Key already exists. Overwrite?")) {
                return;
            }
            else {
                overwrite = true;
            }
        }
        try {
            const reader = new FileReader();
            reader.onload = () => {
                const jsonStr = reader.result;
                const automata = JSON.parse(jsonStr);
                this.save(key, automata);
                if (!overwrite) {
                    this.insertRow(key);
                }
                _events__WEBPACK_IMPORTED_MODULE_2__.loadAutomataPage.style.display = "none";
                _events__WEBPACK_IMPORTED_MODULE_2__.menuPage.style.display = "flex";
                _events__WEBPACK_IMPORTED_MODULE_2__.mainPage.style.display = "none";
                _events__WEBPACK_IMPORTED_MODULE_2__.simulatorPage.style.display = "flex";
                this.ui.setAutomata(this.loadAutomata(key));
                keyInput.value = "";
                fileInput.value = "";
            };
            reader.readAsText(file);
        }
        catch (error) {
            alert("Error loading file. Please try again.");
            return;
        }
    }
    save(key, item) {
        localStorage.setItem(key, JSON.stringify(item));
    }
    load(key) {
        const item = localStorage.getItem(key);
        if (!item) {
            return null;
        }
        try {
            return JSON.parse(item);
        }
        catch (error) {
            console.error(`Error parsing localStorage item at key "${key}".`, error);
            return null;
        }
    }
    delete(key) {
        localStorage.removeItem(key);
    }
    keyExists(key) {
        for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i) === key) {
                return true;
            }
        }
        return false;
    }
    saveAutomata(key, automata) {
        if (this.keyExists(key)) {
            if (!confirm("Key already exists. Overwrite?")) {
                return false;
            }
        }
        this.save(key, automata);
        return true;
    }
    loadAutomata(key) {
        return Object.setPrototypeOf(this.load(key), _pushdownAutomata__WEBPACK_IMPORTED_MODULE_0__.PushdownAutomata.prototype);
    }
    insertRow(key) {
        let automata = this.loadAutomata(key);
        if (automata) {
            let row = this.savedAutomatasTable.insertRow();
            row.classList.add("border-b");
            let cell = row.insertCell();
            cell.classList.add("p-2", "font-bold");
            cell.innerText = key;
            cell = row.insertCell();
            cell.classList.add("p-2", "text-center");
            let button = document.createElement("button");
            button.innerHTML = '<svg class="w-6 h-6"version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve"><g id="Layer_1"><path d="M25,39c13.036,0,23.352-12.833,23.784-13.379L49.275,25l-0.491-0.621C48.352,23.833,38.036,11,25,11S1.648,23.833,1.216,24.379L0.725,25l0.491,0.621C1.648,26.167,11.964,39,25,39z M25,13c10.494,0,19.47,9.46,21.69,12C44.473,27.542,35.509,37,25,37C14.506,37,5.53,27.54,3.31,25C5.527,22.458,14.491,13,25,13z"></path><path d="M25,34c4.963,0,9-4.038,9-9s-4.037-9-9-9s-9,4.038-9,9S20.037,34,25,34z M25,18c3.859,0,7,3.14,7,7s-3.141,7-7,7s-7-3.14-7-7S21.141,18,25,18z"></path></g><g></g></svg>';
            button.addEventListener("click", this.showAutomata.bind(this, key));
            cell.append(button);
            cell = row.insertCell();
            cell.classList.add("p-2", "text-center");
            button = document.createElement("button");
            button.innerHTML = '<svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19V6c0-.6.4-1 1-1h4c.3 0 .6.1.8.4l1.9 2.2c.2.3.5.4.8.4H16c.6 0 1 .4 1 1v1M3 19l3-8h15l-3 8H3Z"/></svg>';
            button.addEventListener("click", () => {
                _events__WEBPACK_IMPORTED_MODULE_2__.mainPage.style.display = "none";
                _events__WEBPACK_IMPORTED_MODULE_2__.simulatorPage.style.display = "flex";
                this.ui.setAutomata(this.loadAutomata(key));
            });
            cell.append(button);
            cell = row.insertCell();
            cell.classList.add("p-2", "text-center");
            button = document.createElement("button");
            button.innerHTML = '<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"/></svg>';
            button.addEventListener("click", () => {
                const jsonStr = JSON.stringify(this.loadAutomata(key), null, 2);
                const blob = new Blob([jsonStr], { type: "application/json" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = `${key}.json`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            });
            cell.append(button);
            cell = row.insertCell();
            cell.classList.add("p-2", "text-center");
            button = document.createElement("button");
            button.innerHTML = '<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 58.67"><defs><style>.cls-1{fill:#35353d;}</style></defs><title>Asset 25</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M61.33,5.33H48V2.67A2.66,2.66,0,0,0,45.33,0H18.67A2.66,2.66,0,0,0,16,2.67V5.33H2.67a2.67,2.67,0,0,0,0,5.34H8v40a8,8,0,0,0,8,8H48a8,8,0,0,0,8-8v-40h5.33a2.67,2.67,0,1,0,0-5.34ZM50.67,50.67A2.67,2.67,0,0,1,48,53.33H16a2.67,2.67,0,0,1-2.67-2.66v-40H50.67Z"></path><path class="cls-1" d="M24,45.33a2.67,2.67,0,0,0,2.67-2.66V21.33a2.67,2.67,0,0,0-5.34,0V42.67A2.67,2.67,0,0,0,24,45.33Z"></path><path class="cls-1" d="M40,45.33a2.67,2.67,0,0,0,2.67-2.66V21.33a2.67,2.67,0,0,0-5.34,0V42.67A2.67,2.67,0,0,0,40,45.33Z"></path></g></g></svg>';
            button.addEventListener("click", () => {
                this.delete(key);
                row.remove();
            });
            cell.append(button);
        }
    }
    printAutomatas() {
        if (this.savedAutomatasTable) {
            let l = this.savedAutomatasTable.rows.length;
            for (let i = 0; i < l; i++) {
                this.savedAutomatasTable.deleteRow(0);
            }
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);
                this.insertRow(key);
            }
        }
    }
    showAutomata(key) {
        let automata = this.loadAutomata(key);
        //Key/name
        document.getElementById("overviewName").innerText = key;
        //States
        document.getElementById("overviewStates").innerText = automata.states.map((s) => s.value).join(", ");
        //Input symbols
        document.getElementById("overviewInputSymbols").innerText = automata.inputSymbols.map((s) => s.value).join(", ");
        //Stack symbols
        document.getElementById("overviewStackSymbols").innerText = automata.stackSymbols.map((s) => s.value).join(", ");
        //Initial state
        document.getElementById("overviewInitialState").innerText = automata.initialState.value;
        //Initial stack symbol
        document.getElementById("overviewInitialStackSymbol").innerText = automata.initialStackSymbol?.value;
        //Accepting states
        document.getElementById("overviewAcceptingState").innerText = automata.acceptingState?.map((s) => s.value).join(", ") ?? "Acceptance by Empty Stack";
        //Transition functions
        let tFunction = document.getElementById("overviewTranstionFunction");
        tFunction.innerHTML = "";
        for (let f of automata.transitionFunction ?? []) {
            tFunction.append(_ui__WEBPACK_IMPORTED_MODULE_1__.UI.generateTransitionFunction(f));
        }
        _events__WEBPACK_IMPORTED_MODULE_2__.savedAutomatasPage.style.display = "none";
        _events__WEBPACK_IMPORTED_MODULE_2__.automataOverviewPage.style.display = "flex";
    }
}


/***/ }),

/***/ "./src/ui.ts":
/*!*******************!*\
  !*** ./src/ui.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UI: () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _pushdownAutomataSimulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pushdownAutomataSimulator */ "./src/pushdownAutomataSimulator.ts");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ "./src/events.ts");


class UI {
    simulator;
    transtitionHistory;
    tape;
    stack;
    state;
    infoButton;
    transitionOptions;
    tapeFormError;
    tapeForm;
    tapePosition = 0;
    isChoosing = false;
    isRunnig = false;
    directionForward = true;
    speed = 1000;
    timeout = null;
    constructor(automata) {
        if (automata) {
            this.setAutomata(automata);
            this.fillInformation();
        }
        this.transtitionHistory = document.getElementById("transitionHistoryDiv");
        this.tape = document.getElementById("tapeDiv");
        this.stack = document.getElementById("stackDiv");
        this.state = document.getElementById("stateDiv");
        this.infoButton = document.getElementById("showInfoButton");
        this.transitionOptions = document.getElementById("transitionOptions");
        this.tapeFormError = document.getElementById("tapeFormError");
        this.tapeForm = document.getElementById("tapeFormModal");
    }
    setAutomata(automata) {
        this.simulator = new _pushdownAutomataSimulator__WEBPACK_IMPORTED_MODULE_0__.PushdownAutomataSimulator(automata);
        this.fillInformation();
        this.resetUI();
        this.tapePosition = 0;
        if (this.tapeForm) {
            this.tapeForm.style.display = "flex";
        }
    }
    registerEvents() {
        document.getElementById("buttonNext")?.addEventListener("click", this.nextStep.bind(this));
        document.getElementById("buttonBack")?.addEventListener("click", this.backStep.bind(this));
        document.getElementById("speed-control")?.addEventListener('input', (event) => {
            this.speed = parseInt(event.target.value);
        });
        document.getElementById("buttonNextAuto")?.addEventListener("click", () => {
            if (this.timeout) {
                clearTimeout(this.timeout);
                this.timeout = null;
            }
            this.isRunnig = true;
            this.directionForward = true;
            this.nextStep();
        });
        document.getElementById("buttonBackAuto")?.addEventListener("click", () => {
            if (this.timeout) {
                clearTimeout(this.timeout);
                this.timeout = null;
            }
            this.isRunnig = true;
            this.directionForward = false;
            this.backStep();
        });
        document.getElementById("buttonStop")?.addEventListener("click", () => {
            if (this.timeout) {
                clearTimeout(this.timeout);
                this.timeout = null;
            }
            this.isRunnig = false;
        });
        document.getElementById("showTapeModalButton").addEventListener("click", () => {
            if (this.tapeForm) {
                this.tapeForm.style.display = "flex";
            }
        });
        document.getElementById("hideSetTapeButton")?.addEventListener("click", () => {
            if (this.tapeForm) {
                this.tapeForm.style.display = "none";
            }
        });
        document.getElementById("setTape").addEventListener("submit", this.setTapeForm.bind(this));
        document.getElementById("tapeInput")?.addEventListener("input", (event) => {
            let tapeInput = event.target.value;
            this.checkTapeInputValidity(tapeInput);
        });
        document.getElementById("closeSimulatorButton")?.addEventListener("click", () => {
            _events__WEBPACK_IMPORTED_MODULE_1__.simulatorPage.style.display = "none";
            _events__WEBPACK_IMPORTED_MODULE_1__.mainPage.style.display = "flex";
            if (this.timeout) {
                clearTimeout(this.timeout);
                this.timeout = null;
            }
        });
    }
    setTapeForm(event) {
        event.preventDefault();
        let form = event.target;
        let tapeInput = form.elements.namedItem("tapeInput");
        if (this.checkTapeInputValidity(tapeInput.value)) {
            this.setTape(tapeInput.value);
            if (this.tapeForm) {
                this.tapeForm.style.display = "none";
            }
        }
        return;
    }
    checkTapeInputValidity(tapeInput) {
        console.log("Checking tape input");
        if (!this.simulator)
            return false;
        let allowed = this.simulator.automata.inputSymbols.map((s) => s.value);
        for (let s of tapeInput) {
            if (!allowed.includes(s)) {
                this.tapeFormError?.classList.remove("hidden");
                return false;
            }
        }
        this.tapeFormError?.classList.add("hidden");
        return true;
    }
    ;
    static generateTransitionFunction(f) {
        let res = document.createElement("div");
        res.classList.add("flex", "flex-row", "flex-nowrap", "justify-center", "pt-3");
        let left = document.createElement("div");
        left.innerText = f.fromState.value + " " + f.startSymbol.value ?? "";
        res.append(left);
        let arrow = document.createElement("div");
        arrow.classList.add("px-1", "relative");
        arrow.innerText = "──>";
        res.append(arrow);
        let symbol = document.createElement("div");
        symbol.classList.add("absolute", "top-0", "left-1/2", "-translate-x-[100%]", "-translate-y-2");
        symbol.innerText = f.inputSymbol.isEpsylon ? "ε" : f.inputSymbol.value;
        arrow.append(symbol);
        let right = document.createElement("div");
        right.innerText = f.toState.value + " " + f.pushedSymbols.map(s => s.value).join("");
        res.append(right);
        return res;
    }
    fillInformation() {
        //States
        document.getElementById("infoStates").innerText = this.simulator?.automata.states.map((s) => s.value).join(", ");
        //Input symbols
        document.getElementById("infoInputSymbols").innerText = this.simulator?.automata.inputSymbols.map((s) => s.value).join(", ");
        //Stack symbols
        document.getElementById("infoStackSymbols").innerText = this.simulator?.automata.stackSymbols.map((s) => s.value).join(", ");
        //Initial state
        document.getElementById("infoInitialState").innerText = this.simulator?.automata.initialState.value;
        //Initial stack symbol
        document.getElementById("infoInitialStackSymbol").innerText = this.simulator?.automata.initialStackSymbol?.value;
        //Accepting states
        document.getElementById("infoAcceptingState").innerText = this.simulator?.automata.acceptingState?.map((s) => s.value).join(", ") ?? "Acceptance by Empty Stack";
        //Transition functions
        let tFunction = document.getElementById("infoTranstionFunction");
        tFunction.innerHTML = "";
        for (let f of this.simulator?.automata.transitionFunction ?? []) {
            tFunction.append(UI.generateTransitionFunction(f));
        }
    }
    addToHistory(f) {
        if (this.transtitionHistory) {
            this.transtitionHistory.prepend(UI.generateTransitionFunction(f));
        }
    }
    removeFromHistory() {
        if (this.transtitionHistory && this.transtitionHistory.childElementCount > 0) {
            this.transtitionHistory.removeChild(this.transtitionHistory.firstChild);
        }
    }
    addToTape(s, append) {
        let symbol = document.createElement("div");
        symbol.classList.add("bg-red-500", "h-16", "w-16", "m-2", "flex-shrink-0", "flex", "justify-center", "items-center");
        symbol.innerText = s.value;
        if (append && append == true) {
            this.tape?.append(symbol);
        }
        else {
            this.tape?.prepend(symbol);
        }
    }
    removeFromTape() {
        if (this.tape && this.tape.childElementCount > 0) {
            this.tape.removeChild(this.tape.firstChild);
        }
    }
    /*
    0 -> read
    1 -> reading
    2 -> not read
    */
    setSymbolToState(s, state) {
        switch (state) {
            case 0: {
                s.classList.remove("bg-red-500");
                s.classList.remove("bg-red-900");
                s.classList.add("bg-red-300");
                return;
            }
            case 1: {
                s.classList.remove("bg-red-300");
                s.classList.remove("bg-red-500");
                s.classList.add("bg-red-900");
                return;
            }
            default: {
                s.classList.remove("bg-red-300");
                s.classList.remove("bg-red-900");
                s.classList.add("bg-red-500");
                return;
            }
        }
    }
    moveTape(backward = false) {
        let symbols = this.tape?.children;
        if (symbols && symbols.length > 1) {
            if (backward == true) {
                this.tapePosition--;
                this.setSymbolToState(symbols[this.tapePosition + 1], 2);
                console.log(this.tapePosition + 1, 2);
                if (this.tapePosition >= 0) {
                    this.setSymbolToState(symbols[this.tapePosition], 1);
                    console.log(this.tapePosition, 1);
                }
            }
            else {
                this.tapePosition++;
                this.setSymbolToState(symbols[this.tapePosition - 1], 0);
                console.log(this.tapePosition - 1, 0);
                if (this.tapePosition < symbols.length) {
                    this.setSymbolToState(symbols[this.tapePosition], 1);
                    console.log(this.tapePosition, 1);
                }
            }
        }
    }
    changeState(s) {
        if (this.state) {
            this.state.innerText = s.value;
        }
    }
    addToStack(s) {
        let symbol = document.createElement("div");
        symbol.classList.add("bg-green-500", "h-16", "w-16", "m-2", "flex-shrink-0", "flex", "justify-center", "items-center", "first:mt-auto");
        symbol.innerText = s.value;
        this.stack?.prepend(symbol);
    }
    removeFromStack() {
        if (this.stack && this.stack.childElementCount > 0) {
            this.stack.removeChild(this.stack.firstChild);
        }
    }
    resetUI() {
        if (this.stack) {
            this.stack.innerHTML = "";
        }
        if (this.state) {
            this.state.innerHTML = "";
        }
        if (this.tape) {
            this.tape.innerHTML = "";
        }
        if (this.transtitionHistory) {
            this.transtitionHistory.innerHTML = "";
        }
        if (this.simulator) {
            this.state.innerText = this.simulator.automata.initialState.value;
            if (this.simulator.automata.initialStackSymbol) {
                this.addToStack(this.simulator.automata.initialStackSymbol);
            }
        }
        this.isChoosing = false;
        this.isRunnig = false;
        this.directionForward = true;
        this.speed = 1000;
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
        this.tapePosition = 0;
    }
    setTape(tape) {
        this.simulator?.setNewInput(tape);
        this.resetUI();
        if (this.tape) {
            this.tape.innerHTML = "";
            for (let s of tape) {
                this.addToTape({ isEpsylon: false, value: s }, true);
            }
        }
        let temp = this.tape?.children[0];
        if (temp) {
            this.setSymbolToState(temp, 1);
        }
    }
    useTransition(f) {
        console.log(f);
        this.simulator?.applyTransitionFunction(f);
        this.changeState(f.toState);
        if (!f.inputSymbol.isEpsylon) {
            this.moveTape();
        }
        if (f.startSymbol != null) {
            this.removeFromStack();
        }
        for (let i = f.pushedSymbols.length - 1; i >= 0; i--) {
            this.addToStack(f.pushedSymbols[i]);
        }
        this.addToHistory(f);
        this.isChoosing = false;
    }
    generateOptions(options) {
        if (this.infoButton) {
            this.infoButton.classList.remove("flex");
            this.infoButton.classList.add("hidden");
        }
        if (this.transitionOptions) {
            this.transitionOptions.innerHTML = "";
        }
        for (let o of options) {
            let option = document.createElement("button");
            option.classList.add("px-2", "py-1", "mx-auto");
            option.append(UI.generateTransitionFunction(o));
            option.addEventListener("click", () => {
                this.useTransition(o);
                if (this.transitionOptions) {
                    this.transitionOptions.innerHTML = "";
                }
                this.infoButton.classList.add("flex");
                this.infoButton.classList.remove("hidden");
                if (this.isRunnig && this.directionForward) {
                    let dir = this.directionForward;
                    this.timeout = setTimeout(() => {
                        if (this.isRunnig && this.directionForward == dir)
                            this.nextStep();
                    }, this.speed);
                }
            });
            this.transitionOptions?.append(option);
        }
    }
    nextStep() {
        if (!this.isChoosing) {
            if (this.simulator) {
                let possibleTranstions = this.simulator.nextStep();
                if (possibleTranstions.length == 0) {
                    throw new Error("No possible transitions");
                }
                else if (possibleTranstions.length == 1) {
                    this.useTransition(possibleTranstions[0]);
                    if (this.isRunnig && this.directionForward) {
                        let dir = this.directionForward;
                        this.timeout = setTimeout(() => {
                            if (this.isRunnig && this.directionForward == dir)
                                this.nextStep();
                        }, this.speed);
                    }
                }
                else {
                    this.isChoosing = true;
                    this.generateOptions(possibleTranstions);
                }
            }
        }
    }
    backStep() {
        if (this.isChoosing) {
            this.isChoosing = false;
            if (this.transitionOptions) {
                this.transitionOptions.innerHTML = "";
            }
            this.infoButton.classList.add("flex");
            this.infoButton.classList.remove("hidden");
            return;
        }
        if (this.simulator) {
            let last = this.simulator.backStep();
            if (last) {
                this.removeFromHistory();
                this.changeState(last.fromState);
                if (!last.inputSymbol.isEpsylon) {
                    this.moveTape(true);
                }
                for (let i = 0; i < last.pushedSymbols.length; i++) {
                    this.removeFromStack();
                }
                if (last.startSymbol != null) {
                    this.addToStack(last.startSymbol);
                }
            }
            if (this.isRunnig && !this.directionForward) {
                let dir = this.directionForward;
                this.timeout = setTimeout(() => {
                    if (this.isRunnig && this.directionForward == dir)
                        this.backStep();
                }, this.speed);
            }
        }
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/ui.ts");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ "./src/events.ts");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/storage.ts");
/* harmony import */ var _formAutomataBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formAutomataBuilder */ "./src/formAutomataBuilder.ts");




let storage;
let ui;
let automataBuilder;
document.addEventListener("DOMContentLoaded", () => {
    ui = new _ui__WEBPACK_IMPORTED_MODULE_0__.UI();
    storage = new _storage__WEBPACK_IMPORTED_MODULE_2__.Storage(ui);
    automataBuilder = new _formAutomataBuilder__WEBPACK_IMPORTED_MODULE_3__.FormAutomataBuilder(storage, ui);
    (0,_events__WEBPACK_IMPORTED_MODULE_1__.registerEvents)(storage);
    ui.registerEvents();
    storage.registerEvents();
    automataBuilder.registerEvents();
    ui.setTape("aabb");
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dGEvLi9zcmMvZXZlbnRzLnRzIiwid2VicGFjazovL3NpbXVsYXRpb25fb2ZfcHVzaGRvd25fYXV0b21hdGEvLi9zcmMvZm9ybUF1dG9tYXRhQnVpbGRlci50cyIsIndlYnBhY2s6Ly9zaW11bGF0aW9uX29mX3B1c2hkb3duX2F1dG9tYXRhLy4vc3JjL3B1c2hkb3duQXV0b21hdGEudHMiLCJ3ZWJwYWNrOi8vc2ltdWxhdGlvbl9vZl9wdXNoZG93bl9hdXRvbWF0YS8uL3NyYy9wdXNoZG93bkF1dG9tYXRhQ2hlY2tlci50cyIsIndlYnBhY2s6Ly9zaW11bGF0aW9uX29mX3B1c2hkb3duX2F1dG9tYXRhLy4vc3JjL3B1c2hkb3duQXV0b21hdGFTaW11bGF0b3IudHMiLCJ3ZWJwYWNrOi8vc2ltdWxhdGlvbl9vZl9wdXNoZG93bl9hdXRvbWF0YS8uL3NyYy9wdXNoZG93bkF1dG9tYXRhVHlwZXMudHMiLCJ3ZWJwYWNrOi8vc2ltdWxhdGlvbl9vZl9wdXNoZG93bl9hdXRvbWF0YS8uL3NyYy9zdGFjay50cyIsIndlYnBhY2s6Ly9zaW11bGF0aW9uX29mX3B1c2hkb3duX2F1dG9tYXRhLy4vc3JjL3N0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vc2ltdWxhdGlvbl9vZl9wdXNoZG93bl9hdXRvbWF0YS8uL3NyYy91aS50cyIsIndlYnBhY2s6Ly9zaW11bGF0aW9uX29mX3B1c2hkb3duX2F1dG9tYXRhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NpbXVsYXRpb25fb2ZfcHVzaGRvd25fYXV0b21hdGEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NpbXVsYXRpb25fb2ZfcHVzaGRvd25fYXV0b21hdGEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zaW11bGF0aW9uX29mX3B1c2hkb3duX2F1dG9tYXRhL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2ltdWxhdGlvbl9vZl9wdXNoZG93bl9hdXRvbWF0YS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xyXG5cclxudmFyIGRpdkF1dG9tYXRhRGVmaW5pdGlvbjogSFRNTERpdkVsZW1lbnQ7XHJcbnZhciBkaXZUcmFuc2l0aW9uSGlzdG9yeTogSFRNTERpdkVsZW1lbnQ7XHJcbnZhciBpbmZvRGl2OiBIVE1MRGl2RWxlbWVudDtcclxuZXhwb3J0IHZhciBtYWluUGFnZTogSFRNTERpdkVsZW1lbnQ7XHJcbmV4cG9ydCB2YXIgbWVudVBhZ2U6IEhUTUxEaXZFbGVtZW50O1xyXG5leHBvcnQgdmFyIG5ld0F1dG9tYXRhUGFnZTogSFRNTERpdkVsZW1lbnQ7XHJcbmV4cG9ydCB2YXIgc2F2ZWRBdXRvbWF0YXNQYWdlOiBIVE1MRGl2RWxlbWVudDtcclxuZXhwb3J0IHZhciBzaW11bGF0b3JQYWdlOiBIVE1MRGl2RWxlbWVudDtcclxuZXhwb3J0IHZhciBhdXRvbWF0YU92ZXJ2aWV3UGFnZTogSFRNTERpdkVsZW1lbnRcclxuZXhwb3J0IHZhciBsb2FkQXV0b21hdGFQYWdlOiBIVE1MRGl2RWxlbWVudDtcclxuXHJcbmZ1bmN0aW9uIGluZm9EaXZTd2l0Y2goKTogdm9pZCB7XHJcbiAgICBpbmZvRGl2LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XHJcbiAgICBpbmZvRGl2LmNsYXNzTGlzdC50b2dnbGUoXCJhYnNvbHV0ZVwiKTtcclxuICAgIGluZm9EaXYuY2xhc3NMaXN0LnRvZ2dsZShcInRvcC0wXCIpO1xyXG4gICAgaW5mb0Rpdi5jbGFzc0xpc3QudG9nZ2xlKFwiYm90dG9tLTBcIik7XHJcbiAgICBpbmZvRGl2LmNsYXNzTGlzdC50b2dnbGUoXCJsZWZ0LTBcIik7XHJcbiAgICBpbmZvRGl2LmNsYXNzTGlzdC50b2dnbGUoXCItcmlnaHQtMjBcIik7XHJcbiAgICBpbmZvRGl2LmNsYXNzTGlzdC50b2dnbGUoXCItdHJhbnNsYXRlLXgtMjBcIik7XHJcbiAgICBpbmZvRGl2LmNsYXNzTGlzdC50b2dnbGUoXCJtZDotcmlnaHQtMFwiKTtcclxuICAgIGluZm9EaXYuY2xhc3NMaXN0LnRvZ2dsZShcIm1kOi10cmFuc2xhdGUteC0wXCIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyRXZlbnRzKHN0b3JhZ2U6IFN0b3JhZ2UpOiB2b2lkIHtcclxuICAgIGRpdkF1dG9tYXRhRGVmaW5pdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXV0b21hdGFEZWZpbml0aW9uRGl2XCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgZGl2VHJhbnNpdGlvbkhpc3RvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYW5zaXRpb25IaXN0b3J5RGl2XCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgaW5mb0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mb0RpdlwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIG1haW5QYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluUGFnZVwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIG1lbnVQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51UGFnZVwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIG5ld0F1dG9tYXRhUGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3QXV0b21hdGFQYWdlXCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgc2F2ZWRBdXRvbWF0YXNQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYXZlZEF1dGFtYXRhc1BhZ2VcIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBzaW11bGF0b3JQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaW11bGF0b3JQYWdlXCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgYXV0b21hdGFPdmVydmlld1BhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1dG9tYXRhT3ZlcnZpZXdQYWdlXCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgbG9hZEF1dG9tYXRhUGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZEF1dG9tYXRhUGFnZVwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1dG9tYXRhRGVmaW5pdGlvbkJ1dHRvblwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBkaXZBdXRvbWF0YURlZmluaXRpb24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICBkaXZUcmFuc2l0aW9uSGlzdG9yeS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYW5zaXRpb25IaXN0b3J5QnV0dG9uXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGRpdlRyYW5zaXRpb25IaXN0b3J5LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICBkaXZBdXRvbWF0YURlZmluaXRpb24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG93SW5mb0J1dHRvblwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGluZm9EaXZTd2l0Y2gpO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlkZUluZm9CdXR0b25cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBpbmZvRGl2U3dpdGNoKTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0F1dG9tYXRhQnV0dG9uXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIG1lbnVQYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBuZXdBdXRvbWF0YVBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cGxvYWRBdXRvbWF0YUJ1dHRvblwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBtZW51UGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgbG9hZEF1dG9tYXRhUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNhdmVkQXV0b21hdGFzQnV0dG9uXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIG1lbnVQYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBzYXZlZEF1dG9tYXRhc1BhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIHN0b3JhZ2U/LnByaW50QXV0b21hdGFzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNhdmVkQXV0b21hdGFzQmFja0J1dHRvblwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBtZW51UGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgc2F2ZWRBdXRvbWF0YXNQYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlkZU92ZXJ2aWV3QnV0dG9uXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHNhdmVkQXV0b21hdGFzUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgYXV0b21hdGFPdmVydmlld1BhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaWRlTG9hZEJ1dHRvblwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBtZW51UGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgbG9hZEF1dG9tYXRhUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZEtleUlucHV0XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID0gXCJcIjtcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkRmlsZUlucHV0XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID0gXCJcIjtcclxuICAgIH0pO1xyXG59IiwiaW1wb3J0IHsgUHVzaGRvd25BdXRvbWF0YSB9IGZyb20gXCIuL3B1c2hkb3duQXV0b21hdGFcIjtcclxuaW1wb3J0IHsgY2hlY2tQdXNoZG93bkF1dG9tYXRhIH0gZnJvbSBcIi4vcHVzaGRvd25BdXRvbWF0YUNoZWNrZXJcIjtcclxuaW1wb3J0IHsgSW5wdXRTeW1ib2wsIFN0YWNrU3ltYm9sLCBTdGF0ZSwgVHJhbnNpdGlvbkZ1bmN0aW9uLCBjb21wYXJlSW5wdXRTeW1ib2wsIGNvbXBhcmVTdGFja1N5bWJvbCwgY29tcGFyZVN0YXRlLCBjb21wYXJlVHJhbnNpdGlvbkZ1bmN0aW9uIH0gZnJvbSBcIi4vcHVzaGRvd25BdXRvbWF0YVR5cGVzXCI7XHJcbmltcG9ydCB7IFVJIH0gZnJvbSBcIi4vdWlcIjtcclxuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcclxuaW1wb3J0IHsgbWVudVBhZ2UsIG5ld0F1dG9tYXRhUGFnZSwgbWFpblBhZ2UsIHNpbXVsYXRvclBhZ2V9IGZyb20gXCIuL2V2ZW50c1wiO1xyXG5cclxudHlwZSBpdGVtVHlwZSA9IFN0YXRlIHwgSW5wdXRTeW1ib2wgfCBTdGFja1N5bWJvbDtcclxuXHJcbmV4cG9ydCBjbGFzcyBGb3JtQXV0b21hdGFCdWlsZGVyIHtcclxuICAgIHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZTtcclxuICAgIHByaXZhdGUgdWk6IFVJO1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGVzOiBTdGF0ZVtdXHJcbiAgICBwcml2YXRlIGlucHV0U3ltYm9sczogSW5wdXRTeW1ib2xbXVxyXG4gICAgcHJpdmF0ZSBzdGFja1N5bWJvbHM6IFN0YWNrU3ltYm9sW11cclxuICAgIHByaXZhdGUgaW5pdGlhbFN0YXRlPzogU3RhdGU7XHJcbiAgICBwcml2YXRlIGluaXRpYWxTdGFja1N5bWJvbD86IFN0YWNrU3ltYm9sO1xyXG4gICAgcHJpdmF0ZSBhY2NlcHRpbmdTdGF0ZXM6IFN0YXRlW10gfCBudWxsXHJcbiAgICBwcml2YXRlIHRyYW5zaXRpb25GdW5jdGlvbnM6IFRyYW5zaXRpb25GdW5jdGlvbltdXHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0ZXNEaXY6IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBpbnB1dFN5bWJvbERpdjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHN0YWNrU3ltYm9sRGl2OiBIVE1MRGl2RWxlbWVudDtcclxuICAgIHByaXZhdGUgdHJhbnNpdGlvbkZ1bmN0aW9uRGl2OiBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgICBwcml2YXRlIGluaXRpYWxTdGF0ZVNlbGVjdDogSFRNTFNlbGVjdEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGluaXRpYWxTdGFja1N5bWJvbFNlbGVjdDogSFRNTFNlbGVjdEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGFjY2VwdGluZ1N0YXRlc1NlbGVjdDogSFRNTFNlbGVjdEVsZW1lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSBrZXlFcnJvcjogSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHN0YXRlRXJyb3I6IEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBpbnB1dFN5bWJvbEVycm9yOiBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICAgIHByaXZhdGUgc3RhY2tTeW1ib2xFcnJvcjogSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGluaXRpYWxTdGF0ZUVycm9yOiBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICAgIHByaXZhdGUgaW5pdGlhbFN0YWNrU3ltYm9sRXJyb3I6IEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBhY2NlcHRpbmdTdGF0ZUVycm9yOiBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICAgIHByaXZhdGUgdHJhbnNpdGlvbkZ1bmN0aW9uRXJyb3I6IEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG5cclxuICAgIHByaXZhdGUga2V5Ym9hcmRTdGF0ZTogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGtleWJvYXJkSW5wdXRTeW1ib2w6IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBrZXlib2FyZFN0YWNrU3ltYm9sOiBIVE1MRGl2RWxlbWVudDtcclxuICAgIHByaXZhdGUga2V5Ym9hcmREZWxldGVCdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xyXG5cclxuICAgIHByaXZhdGUgdHJhbnNpdGlvbkZ1bmN0aW9uUGFydHM6IEhUTUxQYXJhZ3JhcGhFbGVtZW50W107XHJcblxyXG4gICAgcHJpdmF0ZSBhY3RpdmVQYXJ0OiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBrZXlJbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzdG9yYWdlOiBTdG9yYWdlLCB1aTogVUkpe1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2U7XHJcbiAgICAgICAgdGhpcy51aSA9IHVpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaW5wdXRTeW1ib2xzID0gW107XHJcbiAgICAgICAgdGhpcy5zdGFja1N5bWJvbHMgPSBbXTtcclxuICAgICAgICB0aGlzLmFjY2VwdGluZ1N0YXRlcyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25zID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGVzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0F1dG9tYXRhU3RhdGVzJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5pbnB1dFN5bWJvbERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdBdXRvbWF0YUlucHV0U3ltYm9scycpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuc3RhY2tTeW1ib2xEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3QXV0b21hdGFTdGFja1N5bWJvbHMnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICB0aGlzLnRyYW5zaXRpb25GdW5jdGlvbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdBdXRvbWF0YVRyYW5zdGl0aW9uRnVuY3Rpb25zJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdGlhbFN0YXRlU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0F1dG9tYXRhSW5pdGlhbFN0YXRlU2VsZWN0JykgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsU3RhY2tTeW1ib2xTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3QXV0b21hdGFJbml0aWFsU3RhY2tTeW1ib2xTZWxlY3QnKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcclxuICAgICAgICB0aGlzLmFjY2VwdGluZ1N0YXRlc1NlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdBdXRvbWF0YUFjY2VwdGluZ1N0YXRlc1NlbGVjdCcpIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xyXG5cclxuICAgICAgICB0aGlzLmtleUVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2tleUVycm9yJykgYXMgSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5zdGF0ZUVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXRlRXJyb3InKSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICAgICAgICB0aGlzLmlucHV0U3ltYm9sRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRTeW1ib2xFcnJvcicpIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuc3RhY2tTeW1ib2xFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFja1N5bWJvbEVycm9yJykgYXMgSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsU3RhdGVFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbml0aWFsU3RhdGVFcnJvcicpIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbFN0YWNrU3ltYm9sRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5pdGlhbFN0YWNrU3ltYm9sRXJyb3InKSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICAgICAgICB0aGlzLmFjY2VwdGluZ1N0YXRlRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWNjZXB0aW5nU3RhdGVFcnJvcicpIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJhbnNpdGlvbkZ1bmN0aW9uRXJyb3InKSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICAgIFxyXG4gICAgICAgIHRoaXMua2V5Ym9hcmRTdGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrZXlib2FyZFN0YXRlJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5rZXlib2FyZElucHV0U3ltYm9sID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2tleWJvYXJkSW5wdXRTeW1ib2wnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICB0aGlzLmtleWJvYXJkU3RhY2tTeW1ib2wgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna2V5Ym9hcmRTdGFja1N5bWJvbCcpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25QYXJ0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydHMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJhbnN0aXRpb25Gcm9tU3RhdGUnKSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25QYXJ0cy5wdXNoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFuc3Rpb25Qb3BTeW1ib2wnKSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25QYXJ0cy5wdXNoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFuc2l0aW9uU3ltYm9sJykgYXMgSFRNTFBhcmFncmFwaEVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydHMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJhbnNpdGlvblRvU3RhdGUnKSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25QYXJ0cy5wdXNoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFuc2l0aW9uUHVzaFN5bWJvbHMnKSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudCk7XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZlUGFydCA9IC0xO1xyXG5cclxuICAgICAgICB0aGlzLmtleWJvYXJkSW5wdXRTeW1ib2wuYXBwZW5kKHRoaXMuY3JlYXRlS2V5Ym9hcmRCdXR0b24oe2lzRXBzeWxvbjogdHJ1ZX0sIDEpKTtcclxuICAgICAgICB0aGlzLmtleWJvYXJkRGVsZXRlQnV0dG9uID0gdGhpcy5jcmVhdGVLZXlib2FyZEJ1dHRvbih7dmFsdWU6ICfihpAnfSwgMyk7XHJcbiAgICAgICAgdGhpcy5rZXlib2FyZERlbGV0ZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgdGhpcy5rZXlib2FyZFN0YWNrU3ltYm9sLmFwcGVuZCh0aGlzLmtleWJvYXJkRGVsZXRlQnV0dG9uKTtcclxuXHJcbiAgICAgICAgdGhpcy5rZXlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdBdXRvbWF0YUtleScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJFdmVudHMoKXtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3QXV0b21hdGFTdGF0ZUZvcm0nKT8uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5zdGF0ZUZvcm1TdWJtaXRIYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdBdXRvbWF0YUlucHV0U3ltYm9sRm9ybScpPy5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmlucHV0U3ltYm9sU3VibWl0SGFuZGxlci5iaW5kKHRoaXMpKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3QXV0b21hdGFTdGFja1N5bWJvbEZvcm0nKT8uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5zdGFja1N5bWJvbFN1Ym1pdEhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsU3RhdGVTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5pbml0aWFsU3RhdGVDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbFN0YWNrU3ltYm9sU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuaW5pdGlhbFN0YWNrU3ltYm9sQ2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWNjZXB0YW5jZUVtcHR5U3RhY2tDaGVja0JveCcpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYWNjZXB0aW5nU3RhdGVFbXB0eUNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5hY2NlcHRpbmdTdGF0ZXNTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5hY2NlcHRpbmdTdGF0ZXNDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVHJhbnNpdGlvbkZ1bmN0aW9uXCIpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uQWRkSGFuZGxlci5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnRyYW5zaXRpb25GdW5jdGlvblBhcnRzWzBdPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogRXZlbnQpID0+IHt0aGlzLnRyYW5zaXRpb25GdW5jdGlvblBhcnRDaGFuZ2VIYW5kbGVyKGV2ZW50LCAwKX0pO1xyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydHNbMV0/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBFdmVudCkgPT4ge3RoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydENoYW5nZUhhbmRsZXIoZXZlbnQsIDEpfSk7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25QYXJ0c1syXT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IEV2ZW50KSA9PiB7dGhpcy50cmFuc2l0aW9uRnVuY3Rpb25QYXJ0Q2hhbmdlSGFuZGxlcihldmVudCwgMil9KTtcclxuICAgICAgICB0aGlzLnRyYW5zaXRpb25GdW5jdGlvblBhcnRzWzNdPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogRXZlbnQpID0+IHt0aGlzLnRyYW5zaXRpb25GdW5jdGlvblBhcnRDaGFuZ2VIYW5kbGVyKGV2ZW50LCAzKX0pO1xyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydHNbNF0/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBFdmVudCkgPT4ge3RoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydENoYW5nZUhhbmRsZXIoZXZlbnQsIDQpfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRyYW5zaXRpb25GdW5jdGlvbkJ1dHRvbicpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uQWRkSGFuZGxlci5iaW5kKHRoaXMpKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3QXV0b21hdGFTYXZlQnV0dG9uJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zYXZlRXZlbnRIYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KCl7XHJcbiAgICAgICAgLy9kaXZzXHJcbiAgICAgICAgdGhpcy5zdGF0ZXNEaXYuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgdGhpcy5pbnB1dFN5bWJvbERpdi5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB0aGlzLnN0YWNrU3ltYm9sRGl2LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uRGl2LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIC8vaW5wdXRzXHJcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0ZUlucHV0JykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPSAnJztcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0U3ltYm9sSW5wdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9ICcnO1xyXG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhY2tTeW1ib2xJbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID0gJyc7XHJcbiAgICAgICAgLy9zZWxlY3RzXHJcbiAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgIG9wdGlvbi52YWx1ZSA9ICcnO1xyXG4gICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSAnQ2hvb3NlIGluaXRpYWwgc3RhdGUgLi4uJztcclxuICAgICAgICBvcHRpb24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgb3B0aW9uLmhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsU3RhdGVTZWxlY3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsU3RhdGVTZWxlY3QuYXBwZW5kKG9wdGlvbik7XHJcbiAgICAgICAgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gJyc7XHJcbiAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9ICdDaG9vc2UgaW5pdGlhbCBzdGFjayBzeW1ib2wuLi4nO1xyXG4gICAgICAgIG9wdGlvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICBvcHRpb24uaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmluaXRpYWxTdGFja1N5bWJvbFNlbGVjdC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB0aGlzLmluaXRpYWxTdGFja1N5bWJvbFNlbGVjdC5hcHBlbmQob3B0aW9uKTtcclxuICAgICAgICB0aGlzLmFjY2VwdGluZ1N0YXRlc1NlbGVjdC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB0aGlzLmFjY2VwdGluZ1N0YXRlc1NlbGVjdC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgLy9jaGVja2JveFxyXG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWNjZXB0YW5jZUVtcHR5U3RhY2tDaGVja0JveCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIC8vdHJhbnNpdGlvbiBmdW5jdGlvbiBwYXJ0c1xyXG4gICAgICAgIGZvcihsZXQgdCBvZiB0aGlzLnRyYW5zaXRpb25GdW5jdGlvblBhcnRzKXtcclxuICAgICAgICAgICAgdC5pbm5lclRleHQgPSAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9rZXlib2FyZFxyXG4gICAgICAgIHRoaXMua2V5Ym9hcmRTdGF0ZS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB0aGlzLmtleWJvYXJkSW5wdXRTeW1ib2wuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgdGhpcy5rZXlib2FyZElucHV0U3ltYm9sLmFwcGVuZCh0aGlzLmNyZWF0ZUtleWJvYXJkQnV0dG9uKHtpc0Vwc3lsb246IHRydWV9LCAxKSk7XHJcbiAgICAgICAgdGhpcy5rZXlib2FyZFN0YWNrU3ltYm9sLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHRoaXMua2V5Ym9hcmRTdGFja1N5bWJvbC5hcHBlbmQodGhpcy5rZXlib2FyZERlbGV0ZUJ1dHRvbik7XHJcbiAgICAgICAgdGhpcy5rZXlib2FyZERlbGV0ZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgLy9lcnJvcnNcclxuICAgICAgICB0aGlzLnN0YXRlRXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB0aGlzLnN0YWNrU3ltYm9sRXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB0aGlzLmlucHV0U3ltYm9sRXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB0aGlzLmluaXRpYWxTdGF0ZUVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgdGhpcy5hY2NlcHRpbmdTdGF0ZUVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsU3RhdGVFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbFN0YWNrU3ltYm9sRXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB0aGlzLnRyYW5zaXRpb25GdW5jdGlvbkVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGVGb3JtU3VibWl0SGFuZGxlcihldmVudDogU3VibWl0RXZlbnQpe1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGZvcm0gPSBldmVudC50YXJnZXQgYXMgSFRNTEZvcm1FbGVtZW50O1xyXG4gICAgICAgIGxldCBpbnB1dEZpZWxkID0gZm9ybS5lbGVtZW50cy5uYW1lZEl0ZW0oJ3N0YXRlSW5wdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIGxldCBpbnB1dFZhbHVlID0gaW5wdXRGaWVsZC52YWx1ZTtcclxuICAgICAgICBpbnB1dEZpZWxkLnZhbHVlID0gJyc7XHJcbiAgICAgICAgbGV0IGl0ZW06IFN0YXRlID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogaW5wdXRWYWx1ZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubmV3SXRlbTxTdGF0ZT4oY29tcGFyZVN0YXRlLCBpdGVtLCAnU3RhdGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dFN5bWJvbFN1Ym1pdEhhbmRsZXIoZXZlbnQ6IFN1Ym1pdEV2ZW50KXtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBmb3JtID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxGb3JtRWxlbWVudDtcclxuICAgICAgICBsZXQgaW5wdXRGaWVsZCA9IGZvcm0uZWxlbWVudHMubmFtZWRJdGVtKCdpbnB1dFN5bWJvbElucHV0JykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICBsZXQgaW5wdXRWYWx1ZSA9IGlucHV0RmllbGQudmFsdWU7XHJcbiAgICAgICAgaW5wdXRGaWVsZC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGxldCBpdGVtOiBJbnB1dFN5bWJvbCA9IHtcclxuICAgICAgICAgICAgaXNFcHN5bG9uOiBmYWxzZSxcclxuICAgICAgICAgICAgdmFsdWU6IGlucHV0VmFsdWUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm5ld0l0ZW08SW5wdXRTeW1ib2w+KGNvbXBhcmVJbnB1dFN5bWJvbCwgaXRlbSwgJ0lucHV0U3ltYm9sJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHN0YWNrU3ltYm9sU3VibWl0SGFuZGxlcihldmVudDogU3VibWl0RXZlbnQpe1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGZvcm0gPSBldmVudC50YXJnZXQgYXMgSFRNTEZvcm1FbGVtZW50O1xyXG4gICAgICAgIGxldCBpbnB1dEZpZWxkID0gZm9ybS5lbGVtZW50cy5uYW1lZEl0ZW0oJ3N0YWNrU3ltYm9sSW5wdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIGxldCBpbnB1dFZhbHVlID0gaW5wdXRGaWVsZC52YWx1ZTtcclxuICAgICAgICBpbnB1dEZpZWxkLnZhbHVlID0gJyc7XHJcbiAgICAgICAgbGV0IGl0ZW06IFN0YWNrU3ltYm9sID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogaW5wdXRWYWx1ZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubmV3SXRlbTxTdGFja1N5bWJvbD4oY29tcGFyZVN0YWNrU3ltYm9sLCBpdGVtLCAnU3RhY2tTeW1ib2wnKTtcclxuICAgIH07XHJcblxyXG4gICAgaW5pdGlhbFN0YXRlQ2hhbmdlSGFuZGxlcihldmVudDogRXZlbnQpe1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IHNlbGVjdCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MU2VsZWN0RWxlbWVudDtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRPcHRpb24gPSBzZWxlY3Qub3B0aW9uc1tzZWxlY3Quc2VsZWN0ZWRJbmRleF07XHJcbiAgICAgICAgaWYoc2VsZWN0ZWRPcHRpb24udmFsdWUgPT09ICcnKXtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsU3RhdGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0ge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHNlbGVjdGVkT3B0aW9uLnZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsU3RhdGUgPSBpdGVtO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaW5pdGlhbFN0YWNrU3ltYm9sQ2hhbmdlSGFuZGxlcihldmVudDogRXZlbnQpe1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IHNlbGVjdCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MU2VsZWN0RWxlbWVudDtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRPcHRpb24gPSBzZWxlY3Qub3B0aW9uc1tzZWxlY3Quc2VsZWN0ZWRJbmRleF07XHJcbiAgICAgICAgaWYoc2VsZWN0ZWRPcHRpb24udmFsdWUgPT09ICcnKXtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsU3RhY2tTeW1ib2wgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0ge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHNlbGVjdGVkT3B0aW9uLnZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsU3RhY2tTeW1ib2wgPSBpdGVtO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgYWNjZXB0aW5nU3RhdGVFbXB0eUNoYW5nZUhhbmRsZXIoZXZlbnQ6IEV2ZW50KXtcclxuICAgICAgICBsZXQgY2hlY2tib3ggPSBldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICBpZihjaGVja2JveC5jaGVja2VkKXtcclxuICAgICAgICAgICAgZm9yKGxldCBhIG9mIHRoaXMuc3RhdGVzKXtcclxuICAgICAgICAgICAgICAgIGxldCBvcHRpb24gPSB0aGlzLmFjY2VwdGluZ1N0YXRlc1NlbGVjdC5vcHRpb25zLm5hbWVkSXRlbShcImFjY2VwdGluZ1N0YXRlT3B0aW9uXCIgKyBhLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGlmKG9wdGlvbil7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5hY2NlcHRpbmdTdGF0ZXMgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmFjY2VwdGluZ1N0YXRlc1NlbGVjdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLmFjY2VwdGluZ1N0YXRlcyA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmFjY2VwdGluZ1N0YXRlc1NlbGVjdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGFjY2VwdGluZ1N0YXRlc0NoYW5nZUhhbmRsZXIoZXZlbnQ6IEV2ZW50KXtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuYWNjZXB0aW5nU3RhdGVzID0gW107XHJcbiAgICAgICAgZm9yKGxldCBhIG9mIHRoaXMuc3RhdGVzKXtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuYWNjZXB0aW5nU3RhdGVzU2VsZWN0Lm9wdGlvbnMubmFtZWRJdGVtKFwiYWNjZXB0aW5nU3RhdGVPcHRpb25cIiArIGEudmFsdWUpO1xyXG4gICAgICAgICAgICBpZihvcHRpb24pe1xyXG4gICAgICAgICAgICAgICAgaWYob3B0aW9uLnNlbGVjdGVkKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY2VwdGluZ1N0YXRlcz8ucHVzaChhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFjY2VwdGluZ1N0YXRlcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRyYW5zaXRpb25GdW5jdGlvbkFkZEhhbmRsZXIoZXZlbnQ6IEV2ZW50KXtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCA0OyBpKyspe1xyXG4gICAgICAgICAgICBpZih0aGlzLnRyYW5zaXRpb25GdW5jdGlvblBhcnRzW2ldLmlubmVyVGV4dCA9PT0gJycpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25FcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uRXJyb3IuaW5uZXJUZXh0ID0gJ0Vycm9yOiBGaXJzdCA0IGZpZWxkcyBtdXN0IGJlIGZpbGxlZCc7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGZyb21TdGF0ZSA9IHt2YWx1ZTogdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25QYXJ0c1swXS5pbm5lclRleHR9O1xyXG4gICAgICAgIGxldCBzdGFydFN5bWJvbCA9IHt2YWx1ZTogdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25QYXJ0c1sxXS5pbm5lclRleHR9O1xyXG4gICAgICAgIGxldCBpbnB1dFN5bWJvbCA9IHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydHNbMl0uaW5uZXJUZXh0ID09PSAnzrUnID8ge2lzRXBzeWxvbjogdHJ1ZX0gOiB7aXNFcHN5bG9uOiBmYWxzZSwgdmFsdWU6IHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydHNbMl0uaW5uZXJUZXh0fTtcclxuICAgICAgICBsZXQgdG9TdGF0ZSA9IHt2YWx1ZTogdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25QYXJ0c1szXS5pbm5lclRleHR9O1xyXG4gICAgICAgIGxldCBwdXNoZWRTeW1ib2xzID0gdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25QYXJ0c1s0XS5pbm5lckhUTUwuc3BsaXQoJycpLm1hcCgocykgPT4ge3JldHVybiB7dmFsdWU6IHN9fSk7XHJcbiAgICAgICAgbGV0IGl0ZW06IFRyYW5zaXRpb25GdW5jdGlvbiA9IHtcclxuICAgICAgICAgICAgZnJvbVN0YXRlOiBmcm9tU3RhdGUsXHJcbiAgICAgICAgICAgIHN0YXJ0U3ltYm9sOiBzdGFydFN5bWJvbCxcclxuICAgICAgICAgICAgaW5wdXRTeW1ib2w6IGlucHV0U3ltYm9sLFxyXG4gICAgICAgICAgICB0b1N0YXRlOiB0b1N0YXRlLFxyXG4gICAgICAgICAgICBwdXNoZWRTeW1ib2xzOiBwdXNoZWRTeW1ib2xzLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZm9yKGxldCB0IG9mIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9ucyl7XHJcbiAgICAgICAgICAgIGlmKGNvbXBhcmVUcmFuc2l0aW9uRnVuY3Rpb24odCwgaXRlbSkpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codCwgaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25GdW5jdGlvbkVycm9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9ucy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uRGl2LmFwcGVuZCh0aGlzLmNyZWF0ZVRyYW5zaXRpb25GdW5jdGlvbkRpdihpdGVtKSk7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25FcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICAgICAgICBmb3IobGV0IHQgb2YgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25QYXJ0cyl7XHJcbiAgICAgICAgICAgIHQuaW5uZXJUZXh0ID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVRyYW5zaXRpb25GdW5jdGlvbkRpdihpdGVtOiBUcmFuc2l0aW9uRnVuY3Rpb24pOiBIVE1MRGl2RWxlbWVudHtcclxuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2ZsZXgnLCAncC0yJywgJ2JnLXNsYXRlLTEwMCcsICdyb3VuZGVkJywgJ20tMicsICdmbGV4LXJvdycsICdqdXN0aWZ5LWNlbnRlcicsICdpdGVtcy1jZW50ZXInKTtcclxuICAgICAgICBsZXQgdCA9IFVJLmdlbmVyYXRlVHJhbnNpdGlvbkZ1bmN0aW9uKGl0ZW0pO1xyXG4gICAgICAgIGRpdi5hcHBlbmQodCk7XHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyb3VuZGVkLWZ1bGwnLCAnYmctc2xhdGUtMzAwJywgJ3ctNicsICdoLTYnLCAnbWwtMicpO1xyXG4gICAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSAnWCc7XHJcbiAgICAgICAgZGl2LmFwcGVuZChidXR0b24pO1xyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZGVsZXRlVHJhbnNpdGlvbkZ1bmN0aW9uLmJpbmQodGhpcywgaXRlbSwgZGl2KSk7XHJcbiAgICAgICAgcmV0dXJuIGRpdjtcclxuICAgIH1cclxuXHJcbiAgICBuZXdJdGVtPFQgZXh0ZW5kcyBpdGVtVHlwZT4oY29tcGFyZUZ1bmN0aW9uOiAoYXJnMTogVCwgYXJnMjogVCkgPT4gYm9vbGVhbiwgaXRlbTogVCwgdHlwZTogc3RyaW5nKTogdm9pZHtcclxuICAgICAgICBsZXQgYXJyIDogVFtdO1xyXG4gICAgICAgIGxldCBlcnJvcjogSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbiAgICAgICAgbGV0IGVycm9yTXNnOiBzdHJpbmc7XHJcbiAgICAgICAgaWYodHlwZSA9PT0gJ1N0YXRlJyl7XHJcbiAgICAgICAgICAgIGFyciA9IHRoaXMuc3RhdGVzIGFzIFRbXTtcclxuICAgICAgICAgICAgZXJyb3IgPSB0aGlzLnN0YXRlRXJyb3I7XHJcbiAgICAgICAgICAgIGVycm9yTXNnID0gJ0Vycm9yOiBTdGF0ZSBhbHJlYWR5IGV4aXN0cyc7XHJcbiAgICAgICAgfSBlbHNlIGlmKHR5cGUgPT09ICdJbnB1dFN5bWJvbCcpe1xyXG4gICAgICAgICAgICBhcnIgPSB0aGlzLmlucHV0U3ltYm9scyBhcyBUW107XHJcbiAgICAgICAgICAgIGVycm9yID0gdGhpcy5pbnB1dFN5bWJvbEVycm9yO1xyXG4gICAgICAgICAgICBlcnJvck1zZyA9ICdFcnJvcjogSW5wdXQgc3ltYm9sIGFscmVhZHkgZXhpc3RzJztcclxuICAgICAgICB9IGVsc2UgaWYodHlwZSA9PT0gJ1N0YWNrU3ltYm9sJyl7XHJcbiAgICAgICAgICAgIGFyciA9IHRoaXMuc3RhY2tTeW1ib2xzIGFzIFRbXTtcclxuICAgICAgICAgICAgZXJyb3IgPSB0aGlzLnN0YWNrU3ltYm9sRXJyb3I7XHJcbiAgICAgICAgICAgIGVycm9yTXNnID0gJ0Vycm9yOiBTdGFjayBzeW1ib2wgYWxyZWFkeSBleGlzdHMnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZXhpc3RzID0gZmFsc2U7XHJcbiAgICAgICAgZm9yKGxldCBpIG9mIGFycil7XHJcbiAgICAgICAgICAgIGlmKGNvbXBhcmVGdW5jdGlvbihpLCBpdGVtKSl7XHJcbiAgICAgICAgICAgICAgICBleGlzdHMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIWV4aXN0cyl7XHJcbiAgICAgICAgICAgIGFyci5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdmbGV4JywgJ3AtMicsICdiZy1zbGF0ZS0xMDAnLCAncm91bmRlZCcsICdtLTInKTtcclxuICAgICAgICAgICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIHAuY2xhc3NMaXN0LmFkZCgncHItMicpO1xyXG4gICAgICAgICAgICBwLmlubmVyVGV4dCA9IGl0ZW0udmFsdWUgPz8gJ861JztcclxuICAgICAgICAgICAgZGl2LmFwcGVuZChwKTtcclxuICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgncm91bmRlZC1mdWxsJywgJ2JnLXNsYXRlLTMwMCcsICd3LTYnLCAnaC02Jyk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSAnWCc7XHJcbiAgICAgICAgICAgIGRpdi5hcHBlbmQoYnV0dG9uKTtcclxuICAgICAgICAgICAgaWYodHlwZSA9PT0gJ1N0YXRlJyl7XHJcbiAgICAgICAgICAgICAgICBsZXQga2V5Ym9hcmRCdXR0b24gPSB0aGlzLmNyZWF0ZUtleWJvYXJkQnV0dG9uKGl0ZW0sMCk7XHJcbiAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRlbGV0ZVN0YXRlLmJpbmQodGhpcywgaXRlbSwgZGl2LCBrZXlib2FyZEJ1dHRvbikpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZXNEaXYuYXBwZW5kKGRpdik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlQWRkZWQoaXRlbSBhcyBTdGF0ZSwga2V5Ym9hcmRCdXR0b24pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYodHlwZSA9PT0gJ0lucHV0U3ltYm9sJyl7XHJcbiAgICAgICAgICAgICAgICBsZXQga2V5Ym9hcmRCdXR0b24gPSB0aGlzLmNyZWF0ZUtleWJvYXJkQnV0dG9uKGl0ZW0sMSk7XHJcbiAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRlbGV0ZUlucHV0U3ltYm9sLmJpbmQodGhpcywgaXRlbSwgZGl2LCBrZXlib2FyZEJ1dHRvbikpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dFN5bWJvbERpdi5hcHBlbmQoZGl2KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRTeW1ib2xBZGRlZChpdGVtIGFzIElucHV0U3ltYm9sLCBrZXlib2FyZEJ1dHRvbik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZih0eXBlID09PSAnU3RhY2tTeW1ib2wnKXtcclxuICAgICAgICAgICAgICAgIGxldCBrZXlib2FyZEJ1dHRvbiA9IHRoaXMuY3JlYXRlS2V5Ym9hcmRCdXR0b24oaXRlbSwyKTtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZGVsZXRlU3RhY2tTeW1ib2wuYmluZCh0aGlzLCBpdGVtLCBkaXYsIGtleWJvYXJkQnV0dG9uKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YWNrU3ltYm9sRGl2LmFwcGVuZChkaXYpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFja1N5bWJvbEFkZGVkKGl0ZW0gYXMgU3RhY2tTeW1ib2wsIGtleWJvYXJkQnV0dG9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBlcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgZXJyb3IuaW5uZXJUZXh0ID0gZXJyb3JNc2c7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVN0YXRlKGl0ZW06IFN0YXRlLCBkaXY6IEhUTUxEaXZFbGVtZW50LCBrZXlib2FyZEJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQpe1xyXG4gICAgICAgIHRoaXMuc3RhdGVzRGl2LnJlbW92ZUNoaWxkKGRpdik7XHJcbiAgICAgICAgdGhpcy5zdGF0ZXMuc3BsaWNlKHRoaXMuc3RhdGVzLmluZGV4T2YoaXRlbSksIDEpO1xyXG4gICAgICAgIGlmKGNvbXBhcmVTdGF0ZSh0aGlzLmluaXRpYWxTdGF0ZSwgaXRlbSkpe1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxTdGF0ZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hY2NlcHRpbmdTdGF0ZXMgPSB0aGlzLmFjY2VwdGluZ1N0YXRlcz8uZmlsdGVyKGEgPT4gIWNvbXBhcmVTdGF0ZShhLCBpdGVtKSkgPz8gbnVsbDtcclxuICAgICAgICB0aGlzLnN0YXRlRGVsZXRlZChpdGVtKTtcclxuICAgICAgICBrZXlib2FyZEJ1dHRvbi5yZW1vdmUoKTtcclxuICAgICAgICAvL1RPRE86IENsZWFyIGRpdlxyXG4gICAgICAgIC8vTk9URTogSSBkb24ndCBrbm93IHdoYXQgdGhpcyBUT0RPIG1lYW5zXHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlSW5wdXRTeW1ib2woaXRlbTogSW5wdXRTeW1ib2wsIGRpdjogSFRNTERpdkVsZW1lbnQsIGtleWJvYXJkQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCl7XHJcbiAgICAgICAgdGhpcy5pbnB1dFN5bWJvbERpdi5yZW1vdmVDaGlsZChkaXYpO1xyXG4gICAgICAgIHRoaXMuaW5wdXRTeW1ib2xzLnNwbGljZSh0aGlzLmlucHV0U3ltYm9scy5pbmRleE9mKGl0ZW0pLCAxKTtcclxuICAgICAgICB0aGlzLmlucHV0U3ltYm9sRGVsZXRlZChpdGVtKTtcclxuICAgICAgICBrZXlib2FyZEJ1dHRvbi5yZW1vdmUoKTtcclxuICAgICAgICAvL1RPRE86IENsZWFyIGRpdlxyXG4gICAgICAgIC8vTk9URTogSSBkb24ndCBrbm93IHdoYXQgdGhpcyBUT0RPIG1lYW5zXHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlU3RhY2tTeW1ib2woaXRlbTogU3RhY2tTeW1ib2wsIGRpdjogSFRNTERpdkVsZW1lbnQsIGtleWJvYXJkQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCl7XHJcbiAgICAgICAgdGhpcy5zdGFja1N5bWJvbERpdi5yZW1vdmVDaGlsZChkaXYpO1xyXG4gICAgICAgIHRoaXMuc3RhY2tTeW1ib2xzLnNwbGljZSh0aGlzLnN0YWNrU3ltYm9scy5pbmRleE9mKGl0ZW0pLCAxKTtcclxuICAgICAgICBpZihjb21wYXJlU3RhY2tTeW1ib2wodGhpcy5pbml0aWFsU3RhY2tTeW1ib2wsIGl0ZW0pKXtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsU3RhY2tTeW1ib2wgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RhY2tTeW1ib2xEZWxldGVkKGl0ZW0pO1xyXG4gICAgICAgIGtleWJvYXJkQnV0dG9uLnJlbW92ZSgpO1xyXG4gICAgICAgIC8vVE9ETzogQ2xlYXIgZGl2XHJcbiAgICAgICAgLy9OT1RFOiBJIGRvbid0IGtub3cgd2hhdCB0aGlzIFRPRE8gbWVhbnNcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVUcmFuc2l0aW9uRnVuY3Rpb24oaXRlbTogVHJhbnNpdGlvbkZ1bmN0aW9uLCBkaXY6IEhUTUxEaXZFbGVtZW50KXtcclxuICAgICAgICB0aGlzLnRyYW5zaXRpb25GdW5jdGlvbkRpdi5yZW1vdmVDaGlsZChkaXYpO1xyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9ucy5zcGxpY2UodGhpcy50cmFuc2l0aW9uRnVuY3Rpb25zLmluZGV4T2YoaXRlbSksIDEpO1xyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0ZUFkZGVkKGl0ZW06IFN0YXRlLCBrZXlib2FyZEJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQpe1xyXG4gICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICBvcHRpb24udmFsdWUgPSBpdGVtLnZhbHVlO1xyXG4gICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBpdGVtLnZhbHVlO1xyXG4gICAgICAgIG9wdGlvbi5pZCA9IFwiaW5pdGlhbFN0YXRlT3B0aW9uXCIgKyBpdGVtLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbFN0YXRlU2VsZWN0LmFwcGVuZChvcHRpb24pO1xyXG5cclxuICAgICAgICBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICBvcHRpb24udmFsdWUgPSBpdGVtLnZhbHVlO1xyXG4gICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBpdGVtLnZhbHVlO1xyXG4gICAgICAgIG9wdGlvbi5pZCA9IFwiYWNjZXB0aW5nU3RhdGVPcHRpb25cIiArIGl0ZW0udmFsdWU7XHJcbiAgICAgICAgdGhpcy5hY2NlcHRpbmdTdGF0ZXNTZWxlY3QuYXBwZW5kKG9wdGlvbik7XHJcblxyXG4gICAgICAgIHRoaXMua2V5Ym9hcmRTdGF0ZS5hcHBlbmQoa2V5Ym9hcmRCdXR0b24pO1xyXG5cclxuICAgICAgICB0aGlzLnRyYW5zaXRpb25DaGVjaygpO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgaW5wdXRTeW1ib2xBZGRlZChpdGVtOiBJbnB1dFN5bWJvbCwga2V5Ym9hcmRCdXR0b246IEhUTUxCdXR0b25FbGVtZW50KXtcclxuICAgICAgICB0aGlzLmtleWJvYXJkSW5wdXRTeW1ib2wuYXBwZW5kKGtleWJvYXJkQnV0dG9uKTtcclxuXHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uQ2hlY2soKTtcclxuICAgIH07XHJcblxyXG4gICAgc3RhY2tTeW1ib2xBZGRlZChpdGVtOiBTdGFja1N5bWJvbCwga2V5Ym9hcmRCdXR0b246IEhUTUxCdXR0b25FbGVtZW50KXtcclxuICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gaXRlbS52YWx1ZTtcclxuICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gaXRlbS52YWx1ZTtcclxuICAgICAgICBvcHRpb24uaWQgPSBcInN0YWNrU3ltYm9sT3B0aW9uXCIgKyBpdGVtLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbFN0YWNrU3ltYm9sU2VsZWN0LmFwcGVuZChvcHRpb24pO1xyXG5cclxuICAgICAgICB0aGlzLmtleWJvYXJkU3RhY2tTeW1ib2wuYXBwZW5kKGtleWJvYXJkQnV0dG9uKTtcclxuXHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uQ2hlY2soKTtcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGVEZWxldGVkKGl0ZW06IFN0YXRlKXtcclxuICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5pbml0aWFsU3RhdGVTZWxlY3Qub3B0aW9ucy5uYW1lZEl0ZW0oXCJpbml0aWFsU3RhdGVPcHRpb25cIiArIGl0ZW0udmFsdWUpXHJcbiAgICAgICAgaWYob3B0aW9uKXtcclxuICAgICAgICAgICAgaWYob3B0aW9uLnNlbGVjdGVkKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbFN0YXRlU2VsZWN0Lm9wdGlvbnNbMF0uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wdGlvbi5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG9wdGlvbjIgPSB0aGlzLmFjY2VwdGluZ1N0YXRlc1NlbGVjdC5vcHRpb25zLm5hbWVkSXRlbShcImFjY2VwdGluZ1N0YXRlT3B0aW9uXCIgKyBpdGVtLnZhbHVlKVxyXG4gICAgICAgIGlmKG9wdGlvbjIpe1xyXG4gICAgICAgICAgICBvcHRpb24yLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnRyYW5zaXRpb25GdW5jdGlvblBhcnRzWzBdLmlubmVyVGV4dCA9PT0gaXRlbS52YWx1ZSl7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydHNbMF0uaW5uZXJUZXh0ID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydHNbM10uaW5uZXJUZXh0ID09PSBpdGVtLnZhbHVlKXtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25QYXJ0c1szXS5pbm5lclRleHQgPSAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkNoZWNrKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGlucHV0U3ltYm9sRGVsZXRlZChpdGVtOiBJbnB1dFN5bWJvbCl7XHJcbiAgICAgICAgaWYodGhpcy50cmFuc2l0aW9uRnVuY3Rpb25QYXJ0c1syXS5pbm5lclRleHQgPT09IGl0ZW0udmFsdWUpe1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25GdW5jdGlvblBhcnRzWzJdLmlubmVyVGV4dCA9ICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uQ2hlY2soKTtcclxuICAgIH07XHJcblxyXG4gICAgc3RhY2tTeW1ib2xEZWxldGVkKGl0ZW06IFN0YWNrU3ltYm9sKXtcclxuICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5pbml0aWFsU3RhY2tTeW1ib2xTZWxlY3Qub3B0aW9ucy5uYW1lZEl0ZW0oXCJzdGFja1N5bWJvbE9wdGlvblwiICsgaXRlbS52YWx1ZSlcclxuICAgICAgICBpZihvcHRpb24pe1xyXG4gICAgICAgICAgICBpZihvcHRpb24uc2VsZWN0ZWQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsU3RhY2tTeW1ib2xTZWxlY3Qub3B0aW9uc1swXS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3B0aW9uLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnRyYW5zaXRpb25GdW5jdGlvblBhcnRzWzFdLmlubmVyVGV4dCA9PT0gaXRlbS52YWx1ZSl7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydHNbMV0uaW5uZXJUZXh0ID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydHNbNF0uaW5uZXJUZXh0LmluY2x1ZGVzKGl0ZW0udmFsdWUpKXtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25QYXJ0c1s0XS5pbm5lclRleHQgPSAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkNoZWNrKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNyZWF0ZUtleWJvYXJkQnV0dG9uKGl0ZW06IGl0ZW1UeXBlLCB0eXBlOiBudW1iZXIpOiBIVE1MQnV0dG9uRWxlbWVudHtcclxuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2ZsZXgnLCAnanVzdGlmeS1jZW50ZXInLCAnaXRlbXMtY2VudGVyJywgJ3B4LTInLCAnaC04JywgJ2JnLXNsYXRlLTEwMCcsICdtLTEnKTtcclxuICAgICAgICBidXR0b24uaW5uZXJUZXh0ID0gaXRlbS52YWx1ZSA/PyAnzrUnO1xyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogU3VibWl0RXZlbnQpID0+IHRoaXMua2V5Ym9hcmRCdXR0b25QcmVzc2VkKGV2ZW50LCB0eXBlKSk7XHJcbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcclxuICAgIH1cclxuICAgIFxyXG4gICAga2V5Ym9hcmRCdXR0b25QcmVzc2VkKGV2ZW50OiBFdmVudCwgdHlwZTogbnVtYmVyKXtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHR5cGUsIHRoaXMuYWN0aXZlUGFydCk7XHJcbiAgICAgICAgc3dpdGNoKHR5cGUpe1xyXG4gICAgICAgICAgICAvL1N0YXRlXHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuYWN0aXZlUGFydCA9PT0gMCB8fCB0aGlzLmFjdGl2ZVBhcnQgPT09IDMpe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBidXR0b24gPSBldmVudC50YXJnZXQgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlucHV0RmllbGQgPSB0aGlzLnRyYW5zaXRpb25GdW5jdGlvblBhcnRzW3RoaXMuYWN0aXZlUGFydF0gYXMgSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRGaWVsZC5pbm5lclRleHQgPSBidXR0b24uaW5uZXJUZXh0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAvL0lucHV0IFN5bWJvbFxyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmFjdGl2ZVBhcnQgPT09IDIpe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBidXR0b24gPSBldmVudC50YXJnZXQgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlucHV0RmllbGQgPSB0aGlzLnRyYW5zaXRpb25GdW5jdGlvblBhcnRzW3RoaXMuYWN0aXZlUGFydF0gYXMgSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRGaWVsZC5pbm5lclRleHQgPSBidXR0b24uaW5uZXJUZXh0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAvL1N0YWNrIFN5bWJvbFxyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmFjdGl2ZVBhcnQgPT09IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBidXR0b24gPSBldmVudC50YXJnZXQgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlucHV0RmllbGQgPSB0aGlzLnRyYW5zaXRpb25GdW5jdGlvblBhcnRzW3RoaXMuYWN0aXZlUGFydF0gYXMgSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRGaWVsZC5pbm5lclRleHQgPSBidXR0b24uaW5uZXJUZXh0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZih0aGlzLmFjdGl2ZVBhcnQgPT09IDQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBidXR0b24gPSBldmVudC50YXJnZXQgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlucHV0RmllbGQgPSB0aGlzLnRyYW5zaXRpb25GdW5jdGlvblBhcnRzW3RoaXMuYWN0aXZlUGFydF0gYXMgSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRGaWVsZC5pbm5lclRleHQgKz0gYnV0dG9uLmlubmVyVGV4dDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5hY3RpdmVQYXJ0ID09PSA0KXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5wdXRGaWVsZCA9IHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydHNbdGhpcy5hY3RpdmVQYXJ0XSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dEZpZWxkLmlubmVySFRNTCA9IGlucHV0RmllbGQuaW5uZXJUZXh0LnNsaWNlKDAsLTEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgdHJhbnNpdGlvbkZ1bmN0aW9uUGFydENoYW5nZUhhbmRsZXIoZXZlbnQ6IEV2ZW50LCBpbmRleDogbnVtYmVyKXtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKHRoaXMuYWN0aXZlUGFydCAmJiB0aGlzLmFjdGl2ZVBhcnQgPT0gaW5kZXgpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmFjdGl2ZVBhcnQgPj0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydHNbdGhpcy5hY3RpdmVQYXJ0XS5jbGFzc0xpc3QucmVtb3ZlKCdiZy1zbGF0ZS0zMDAnKTtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25QYXJ0c1t0aGlzLmFjdGl2ZVBhcnRdLmNsYXNzTGlzdC5hZGQoJ2JnLXNsYXRlLTEwMCcpO1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5hY3RpdmVQYXJ0ID09PSAwIHx8IHRoaXMuYWN0aXZlUGFydCA9PT0gMyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleWJvYXJkU3RhdGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMuYWN0aXZlUGFydCA9PT0gMSB8fCB0aGlzLmFjdGl2ZVBhcnQgPT09IDQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlib2FyZFN0YWNrU3ltYm9sLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleWJvYXJkSW5wdXRTeW1ib2wuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmVQYXJ0ID0gaW5kZXg7XHJcblxyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydHNbdGhpcy5hY3RpdmVQYXJ0XS5jbGFzc0xpc3QucmVtb3ZlKCdiZy1zbGF0ZS0xMDAnKTtcclxuICAgICAgICB0aGlzLnRyYW5zaXRpb25GdW5jdGlvblBhcnRzW3RoaXMuYWN0aXZlUGFydF0uY2xhc3NMaXN0LmFkZCgnYmctc2xhdGUtMzAwJyk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuYWN0aXZlUGFydCA9PT0gNCl7XHJcbiAgICAgICAgICAgIHRoaXMua2V5Ym9hcmREZWxldGVCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5rZXlib2FyZERlbGV0ZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmFjdGl2ZVBhcnQgPT09IDAgfHwgdGhpcy5hY3RpdmVQYXJ0ID09PSAzKXtcclxuICAgICAgICAgICAgdGhpcy5rZXlib2FyZFN0YXRlLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5hY3RpdmVQYXJ0ID09PSAxIHx8IHRoaXMuYWN0aXZlUGFydCA9PT0gNCl7XHJcbiAgICAgICAgICAgIHRoaXMua2V5Ym9hcmRTdGFja1N5bWJvbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5rZXlib2FyZElucHV0U3ltYm9sLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRyYW5zaXRpb25DaGVjaygpOiBib29sZWFue1xyXG4gICAgICAgIGxldCBhbnlJbnZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9ucy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGxldCB0ID0gdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25zW2ldO1xyXG4gICAgICAgICAgICBsZXQgdEQgPSB0aGlzLnRyYW5zaXRpb25GdW5jdGlvbkRpdi5jaGlsZHJlbltpXSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICAgICAgLy9Gcm9tIHN0YXRlXHJcbiAgICAgICAgICAgIGxldCBmcm9tU3RhdGUgPSB0aGlzLnN0YXRlcy5maW5kKChzKSA9PiBjb21wYXJlU3RhdGUocywgdC5mcm9tU3RhdGUpKTtcclxuICAgICAgICAgICAgaWYoIWZyb21TdGF0ZSl7XHJcbiAgICAgICAgICAgICAgICBhbnlJbnZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRELnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIHJnYigyMjQgMzYgMzYpXCI7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL1RvIHN0YXRlXHJcbiAgICAgICAgICAgIGxldCB0b1N0YXRlID0gdGhpcy5zdGF0ZXMuZmluZCgocykgPT4gY29tcGFyZVN0YXRlKHMsIHQudG9TdGF0ZSkpO1xyXG4gICAgICAgICAgICBpZighdG9TdGF0ZSl7XHJcbiAgICAgICAgICAgICAgICBhbnlJbnZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRELnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIHJnYigyMjQgMzYgMzYpXCI7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL0lucHV0IHN5bWJvbFxyXG4gICAgICAgICAgICBpZighdC5pbnB1dFN5bWJvbC5pc0Vwc3lsb24pe1xyXG4gICAgICAgICAgICAgICAgbGV0IGlucHV0U3ltYm9sID0gdGhpcy5pbnB1dFN5bWJvbHMuZmluZCgocykgPT4gY29tcGFyZUlucHV0U3ltYm9sKHMsIHQuaW5wdXRTeW1ib2wpKTtcclxuICAgICAgICAgICAgICAgIGlmKCFpbnB1dFN5bWJvbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgYW55SW52YWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdEQuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgcmdiKDIyNCAzNiAzNilcIjtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL1N0YXJ0IHN5bWJvbFxyXG4gICAgICAgICAgICBsZXQgc3RhcnRTeW1ib2wgPSB0aGlzLnN0YWNrU3ltYm9scy5maW5kKChzKSA9PiBjb21wYXJlU3RhY2tTeW1ib2wocywgdC5zdGFydFN5bWJvbCkpO1xyXG4gICAgICAgICAgICBpZighc3RhcnRTeW1ib2wpe1xyXG4gICAgICAgICAgICAgICAgYW55SW52YWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0RC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCByZ2IoMjI0IDM2IDM2KVwiO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9QdXNoZWQgc3ltYm9sc1xyXG4gICAgICAgICAgICBsZXQgY2hlY2tlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmb3IobGV0IHMgb2YgdC5wdXNoZWRTeW1ib2xzKXtcclxuICAgICAgICAgICAgICAgIGxldCBzdGFja1N5bWJvbCA9IHRoaXMuc3RhY2tTeW1ib2xzLmZpbmQoKHMyKSA9PiBjb21wYXJlU3RhY2tTeW1ib2woczIsIHMpKTtcclxuICAgICAgICAgICAgICAgIGlmKCFzdGFja1N5bWJvbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgYW55SW52YWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdEQuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgcmdiKDIyNCAzNiAzNilcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihjaGVja2VyKXtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vQ29ycmVjdCB0cmFuc2l0aW9uXHJcbiAgICAgICAgICAgIHRELnN0eWxlLmJvcmRlciA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhbnlJbnZhbGlkO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVFdmVudEhhbmRsZXIoZXZlbnQ6IEV2ZW50KTogdm9pZHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vU3RhdGVzXHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZXMubGVuZ3RoID09PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZUVycm9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlRXJyb3IuaW5uZXJUZXh0ID0gJ0Vycm9yOiBBdCBsZWFzdCBvbmUgc3RhdGUgbXVzdCBiZSBkZWZpbmVkJztcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL0lucHV0IHN5bWJvbHNcclxuICAgICAgICBpZih0aGlzLmlucHV0U3ltYm9scy5sZW5ndGggPT09IDApe1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0U3ltYm9sRXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRTeW1ib2xFcnJvci5pbm5lclRleHQgPSAnRXJyb3I6IEF0IGxlYXN0IG9uZSBpbnB1dCBzeW1ib2wgbXVzdCBiZSBkZWZpbmVkJztcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1N0YWNrIHN5bWJvbHNcclxuICAgICAgICBpZih0aGlzLnN0YWNrU3ltYm9scy5sZW5ndGggPT09IDApe1xyXG4gICAgICAgICAgICB0aGlzLnN0YWNrU3ltYm9sRXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhY2tTeW1ib2xFcnJvci5pbm5lclRleHQgPSAnRXJyb3I6IEF0IGxlYXN0IG9uZSBzdGFjayBzeW1ib2wgbXVzdCBiZSBkZWZpbmVkJztcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL0luaXRpYWwgc3RhdGVcclxuICAgICAgICBpZighdGhpcy5pbml0aWFsU3RhdGUpe1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxTdGF0ZUVycm9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxTdGF0ZUVycm9yLmlubmVyVGV4dCA9ICdFcnJvcjogSW5pdGlhbCBzdGF0ZSBtdXN0IGJlIGRlZmluZWQnO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFN0YXRlRXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9Jbml0aWFsIHN0YWNrIHN5bWJvbFxyXG4gICAgICAgIGlmKCF0aGlzLmluaXRpYWxTdGFja1N5bWJvbCl7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFN0YWNrU3ltYm9sRXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFN0YWNrU3ltYm9sRXJyb3IuaW5uZXJUZXh0ID0gJ0Vycm9yOiBJbml0aWFsIHN0YWNrIHN5bWJvbCBtdXN0IGJlIGRlZmluZWQnO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFN0YWNrU3ltYm9sRXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9BY2NlcHRpbmcgc3RhdGVzXHJcbiAgICAgICAgaWYodGhpcy5hY2NlcHRpbmdTdGF0ZXMgIT09IG51bGwpe1xyXG4gICAgICAgICAgICBpZih0aGlzLmFjY2VwdGluZ1N0YXRlcy5sZW5ndGggPT09IDApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NlcHRpbmdTdGF0ZUVycm9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NlcHRpbmdTdGF0ZUVycm9yLmlubmVyVGV4dCA9ICdFcnJvcjogQXQgbGVhc3Qgb25lIGFjY2VwdGluZyBzdGF0ZSBtdXN0IGJlIGRlZmluZWQgb3IgZW5hYmxlIGFjY2VwdGFuY2UgYnkgZW1wdHkgc3RhY2snO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxTdGF0ZUVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9UcmFuc2l0aW9uIGZ1bmN0aW9uc1xyXG4gICAgICAgIGlmKHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9ucy5sZW5ndGggPT09IDApe1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25GdW5jdGlvbkVycm9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25GdW5jdGlvbkVycm9yLmlubmVyVGV4dCA9ICdFcnJvcjogQXQgbGVhc3Qgb25lIHRyYW5zaXRpb24gZnVuY3Rpb24gbXVzdCBiZSBkZWZpbmVkJztcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1dob2xlIGF1dG9tYXRhXHJcbiAgICAgICAgaWYoIWNoZWNrUHVzaGRvd25BdXRvbWF0YSh0aGlzLnN0YXRlcywgdGhpcy5zdGFja1N5bWJvbHMsIHRoaXMuaW5wdXRTeW1ib2xzLCB0aGlzLmluaXRpYWxTdGF0ZSwgdGhpcy5pbml0aWFsU3RhY2tTeW1ib2wsIHRoaXMuYWNjZXB0aW5nU3RhdGVzLCB0aGlzLnRyYW5zaXRpb25GdW5jdGlvbnMpKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL0tleVxyXG4gICAgICAgIGxldCBrZXkgPSB0aGlzLmtleUlucHV0LnZhbHVlLnRyaW0oKTtcclxuICAgICAgICBpZihrZXkgPT09ICcnKXtcclxuICAgICAgICAgICAgdGhpcy5rZXlFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5rZXlFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1ZhbGlkXHJcbiAgICAgICAgbGV0IHBkYSA9IG5ldyBQdXNoZG93bkF1dG9tYXRhKHRoaXMuc3RhdGVzLCB0aGlzLmlucHV0U3ltYm9scywgdGhpcy5zdGFja1N5bWJvbHMsIHRoaXMuaW5pdGlhbFN0YXRlLCB0aGlzLmluaXRpYWxTdGFja1N5bWJvbCwgdGhpcy5hY2NlcHRpbmdTdGF0ZXMsIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9ucyk7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuc3RvcmFnZS5zYXZlQXV0b21hdGEoa2V5LCBwZGEpO1xyXG4gICAgICAgIGlmKHJlc3VsdCl7XHJcbiAgICAgICAgICAgIC8qdGhpcy5yZXNldCgpO1xyXG4gICAgICAgICAgICBuZXdBdXRvbWF0YVBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBtZW51UGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgICAgIG1haW5QYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgc2ltdWxhdG9yUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgICAgIHRoaXMudWkuc2V0QXV0b21hdGEodGhpcy5zdG9yYWdlLmxvYWRBdXRvbWF0YShrZXkpKTsqL1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlZhbGlkIGF1dG9tYXRhOlwiLCBwZGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IFN0YXRlLCBJbnB1dFN5bWJvbCwgU3RhY2tTeW1ib2wsIFRyYW5zaXRpb25GdW5jdGlvbiB9IGZyb20gXCIuL3B1c2hkb3duQXV0b21hdGFUeXBlc1wiO1xyXG5pbXBvcnQgeyBjb21wYXJlU3RhdGUsIGNvbXBhcmVJbnB1dFN5bWJvbCwgY29tcGFyZVN0YWNrU3ltYm9sIH0gZnJvbSBcIi4vcHVzaGRvd25BdXRvbWF0YVR5cGVzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHVzaGRvd25BdXRvbWF0YXtcclxuICAgIHN0YXRlczogU3RhdGVbXTtcclxuICAgIGlucHV0U3ltYm9sczogSW5wdXRTeW1ib2xbXTtcclxuICAgIHN0YWNrU3ltYm9sczogU3RhY2tTeW1ib2xbXTtcclxuICAgIGluaXRpYWxTdGF0ZTogU3RhdGU7XHJcbiAgICBpbml0aWFsU3RhY2tTeW1ib2w6IFN0YWNrU3ltYm9sO1xyXG4gICAgYWNjZXB0aW5nU3RhdGU6IFN0YXRlW10gfCBudWxsO1xyXG4gICAgdHJhbnNpdGlvbkZ1bmN0aW9uOiBUcmFuc2l0aW9uRnVuY3Rpb25bXTtcclxuICAgIGNvbnN0cnVjdG9yKHN0YXRlczogU3RhdGVbXSwgaW5wdXRTeW1ib2xzOiBJbnB1dFN5bWJvbFtdLCBzdGFja1N5bWJvbHM6IFN0YWNrU3ltYm9sW10sIGluaXRpYWxTdGF0ZTogU3RhdGUsIGluaXRpYWxTdGFja1N5bWJvbDogU3RhY2tTeW1ib2wsIGFjY2VwdGluZ1N0YXRlOiBTdGF0ZVtdIHwgbnVsbCwgdHJhbnNpdGlvbkZ1bmN0aW9uOiBUcmFuc2l0aW9uRnVuY3Rpb25bXSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLnN0YXRlcyA9IHN0YXRlcztcclxuICAgICAgICB0aGlzLmlucHV0U3ltYm9scyA9IGlucHV0U3ltYm9scztcclxuICAgICAgICB0aGlzLnN0YWNrU3ltYm9scyA9IHN0YWNrU3ltYm9scztcclxuICAgICAgICB0aGlzLmluaXRpYWxTdGF0ZSA9IGluaXRpYWxTdGF0ZTtcclxuICAgICAgICB0aGlzLmluaXRpYWxTdGFja1N5bWJvbCA9IGluaXRpYWxTdGFja1N5bWJvbDtcclxuICAgICAgICB0aGlzLmFjY2VwdGluZ1N0YXRlID0gYWNjZXB0aW5nU3RhdGU7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb24gPSB0cmFuc2l0aW9uRnVuY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0ZUV4aXN0cyhzdGF0ZTogU3RhdGUpOiBib29sZWFue1xyXG4gICAgICAgIGZvcihsZXQgcyBvZiB0aGlzLnN0YXRlcyl7XHJcbiAgICAgICAgICAgIGlmKGNvbXBhcmVTdGF0ZShzLCBzdGF0ZSkpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlucHV0U3ltYm9sRXhpc3RzKGlucHV0U3ltYm9sOiBJbnB1dFN5bWJvbCk6IGJvb2xlYW57XHJcbiAgICAgICAgZm9yKGxldCBpIG9mIHRoaXMuaW5wdXRTeW1ib2xzKXtcclxuICAgICAgICAgICAgaWYoY29tcGFyZUlucHV0U3ltYm9sKGksIGlucHV0U3ltYm9sKSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhY2tTeW1ib2xFeGlzdHMoc3RhY2tTeW1ib2w6IFN0YWNrU3ltYm9sKTogYm9vbGVhbntcclxuICAgICAgICBmb3IobGV0IHMgb2YgdGhpcy5zdGFja1N5bWJvbHMpe1xyXG4gICAgICAgICAgICBpZihjb21wYXJlU3RhY2tTeW1ib2wocywgc3RhY2tTeW1ib2wpKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tTdGF0ZXNFeGlzdGVuY2UoKSA6W3N0cmluZywgU3RhdGVdW117XHJcbiAgICAgICAgdmFyIGVycm9yTXNnIDpbc3RyaW5nLCBTdGF0ZV1bXSA9IFtdO1xyXG5cclxuICAgICAgICBpZighdGhpcy5zdGF0ZUV4aXN0cyh0aGlzLmluaXRpYWxTdGF0ZSkpe1xyXG4gICAgICAgICAgICBlcnJvck1zZy5wdXNoKFtcIkluaXRpYWwgc3RhdGUgZG9lcyBub3QgZXhpc3RcIiwgdGhpcy5pbml0aWFsU3RhdGVdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuYWNjZXB0aW5nU3RhdGUgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgZmluYWxTdGF0ZSBvZiB0aGlzLmFjY2VwdGluZ1N0YXRlKXtcclxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLnN0YXRlRXhpc3RzKGZpbmFsU3RhdGUpKXtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvck1zZy5wdXNoKFtcIkFjY2VwdGluZyBzdGF0ZSBkb2VzIG5vdCBleGlzdFwiLCBmaW5hbFN0YXRlXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBlcnJvck1zZztcclxuICAgIH1cclxuICAgIFxyXG4gICAgY2hlY2tTeW1ib2xFeGlzdGVuY2UoKSA6W3N0cmluZywgU3RhY2tTeW1ib2xdW117XHJcbiAgICAgICAgdmFyIGVycm9yTXNnIDpbc3RyaW5nLCBTdGFja1N5bWJvbF1bXSA9IFtdO1xyXG5cclxuICAgICAgICBpZih0aGlzLmluaXRpYWxTdGFja1N5bWJvbCAhPSBudWxsKXtcclxuICAgICAgICAgICAgaWYoIXRoaXMuc3RhY2tTeW1ib2xFeGlzdHModGhpcy5pbml0aWFsU3RhY2tTeW1ib2wpKXtcclxuICAgICAgICAgICAgICAgIGVycm9yTXNnLnB1c2goW1wiSW5pdGlhbCBzdGFjayBzeW1ib2wgZG9lcyBub3QgZXhpc3RcIiwgdGhpcy5pbml0aWFsU3RhY2tTeW1ib2xdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGVycm9yTXNnO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjaGVja1RyYW5zaXRpb25GdW5jdGlvbnMoKSA6W3N0cmluZywgVHJhbnNpdGlvbkZ1bmN0aW9uXVtde1xyXG4gICAgICAgIHZhciBlcnJvck1zZyA6W3N0cmluZywgVHJhbnNpdGlvbkZ1bmN0aW9uXVtdID0gW107XHJcblxyXG4gICAgICAgIGZvcihsZXQgdHJhbnNpdGlvbkZ1bmN0aW9uIG9mIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uKXtcclxuICAgICAgICAgICAgaWYoIXRoaXMuc3RhdGVFeGlzdHModHJhbnNpdGlvbkZ1bmN0aW9uLmZyb21TdGF0ZSkpe1xyXG4gICAgICAgICAgICAgICAgZXJyb3JNc2cucHVzaChbXCJGcm9tIHN0YXRlIGRvZXMgbm90IGV4aXN0XCIsIHRyYW5zaXRpb25GdW5jdGlvbl0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZighdGhpcy5pbnB1dFN5bWJvbEV4aXN0cyh0cmFuc2l0aW9uRnVuY3Rpb24uaW5wdXRTeW1ib2wpKXtcclxuICAgICAgICAgICAgICAgIGVycm9yTXNnLnB1c2goW1wiSW5wdXQgc3ltYm9sIGRvZXMgbm90IGV4aXN0XCIsIHRyYW5zaXRpb25GdW5jdGlvbl0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZih0cmFuc2l0aW9uRnVuY3Rpb24uc3RhcnRTeW1ib2wgIT0gbnVsbCAmJiAhdGhpcy5zdGFja1N5bWJvbEV4aXN0cyh0cmFuc2l0aW9uRnVuY3Rpb24uc3RhcnRTeW1ib2wpKXtcclxuICAgICAgICAgICAgICAgIGVycm9yTXNnLnB1c2goW1wiU3RhY2sgc3ltYm9sIGRvZXMgbm90IGV4aXN0XCIsIHRyYW5zaXRpb25GdW5jdGlvbl0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZighdGhpcy5zdGF0ZUV4aXN0cyh0cmFuc2l0aW9uRnVuY3Rpb24udG9TdGF0ZSkpe1xyXG4gICAgICAgICAgICAgICAgZXJyb3JNc2cucHVzaChbXCJUbyBzdGF0ZSBkb2VzIG5vdCBleGlzdFwiLCB0cmFuc2l0aW9uRnVuY3Rpb25dKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBwdXNoZWRTeW1ib2wgb2YgdHJhbnNpdGlvbkZ1bmN0aW9uLnB1c2hlZFN5bWJvbHMpe1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuc3RhY2tTeW1ib2xFeGlzdHMocHVzaGVkU3ltYm9sKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNc2cucHVzaChbXCJQdXNoZWQgc3ltYm9sIGRvZXMgbm90IGV4aXN0XCIsIHRyYW5zaXRpb25GdW5jdGlvbl0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZXJyb3JNc2c7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tJbnB1dFRhcGVWYWxpZGl0eShpbnB1dFRhcGU6IHN0cmluZyk6IHN0cmluZ1tde1xyXG4gICAgICAgIGxldCBpbnZhbGlkU3ltYm9sczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgc3ltYm9scyA9IG5ldyBTZXQoaW5wdXRUYXBlLnNwbGl0KFwiXCIpKTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBzIG9mIHN5bWJvbHMpe1xyXG4gICAgICAgICAgICBsZXQgaW52YWxpZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaW5wdXRTeW1ib2wgb2YgdGhpcy5pbnB1dFN5bWJvbHMpe1xyXG4gICAgICAgICAgICAgICAgaWYoaW5wdXRTeW1ib2wuaXNFcHN5bG9uID09IGZhbHNlICYmIGlucHV0U3ltYm9sLnZhbHVlID09IHMpe1xyXG4gICAgICAgICAgICAgICAgICAgIGludmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihpbnZhbGlkKXtcclxuICAgICAgICAgICAgICAgIGludmFsaWRTeW1ib2xzLnB1c2gocyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBpbnZhbGlkU3ltYm9scztcclxuICAgIH1cclxuXHJcbiAgICBnZXRUcmFuc2l0aW9uRnVuY3Rpb25zKHRhcGVTeW1ib2w6IHN0cmluZywgc3RhdGU6IFN0YXRlLCBzdGFja1N5bWJvbDogIFN0YWNrU3ltYm9sIHwgbnVsbCk6IFRyYW5zaXRpb25GdW5jdGlvbltde1xyXG4gICAgICAgIGxldCBwb3NzaWJsZVRyYW5zaXRpb25GdW5jdGlvbnM6IFRyYW5zaXRpb25GdW5jdGlvbltdID0gW107XHJcblxyXG4gICAgICAgIGxldCBpbnB1dFN5bWJvbDogSW5wdXRTeW1ib2w7XHJcbiAgICAgICAgaWYodGFwZVN5bWJvbCA9PT0gXCJcIil7XHJcbiAgICAgICAgICAgIGlucHV0U3ltYm9sID0ge2lzRXBzeWxvbjogdHJ1ZX1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgaW5wdXRTeW1ib2wgPSB7aXNFcHN5bG9uOiBmYWxzZSwgdmFsdWU6IHRhcGVTeW1ib2x9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IHRyYW5zaXRpb25GdW5jdGlvbiBvZiB0aGlzLnRyYW5zaXRpb25GdW5jdGlvbil7XHJcbiAgICAgICAgICAgIGlmKCFjb21wYXJlSW5wdXRTeW1ib2woaW5wdXRTeW1ib2wsIHRyYW5zaXRpb25GdW5jdGlvbi5pbnB1dFN5bWJvbCkgJiYgIXRyYW5zaXRpb25GdW5jdGlvbi5pbnB1dFN5bWJvbC5pc0Vwc3lsb24pe1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoIWNvbXBhcmVTdGF0ZShzdGF0ZSwgdHJhbnNpdGlvbkZ1bmN0aW9uLmZyb21TdGF0ZSkpe1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoIWNvbXBhcmVTdGFja1N5bWJvbChzdGFja1N5bWJvbCwgdHJhbnNpdGlvbkZ1bmN0aW9uLnN0YXJ0U3ltYm9sKSl7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwb3NzaWJsZVRyYW5zaXRpb25GdW5jdGlvbnMucHVzaCh0cmFuc2l0aW9uRnVuY3Rpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHBvc3NpYmxlVHJhbnNpdGlvbkZ1bmN0aW9ucztcclxuICAgIH1cclxufSIsImltcG9ydCB7IFB1c2hkb3duQXV0b21hdGEgfSBmcm9tIFwiLi9wdXNoZG93bkF1dG9tYXRhXCI7IFxyXG5pbXBvcnQgeyBTdGF0ZSwgU3RhY2tTeW1ib2wsIElucHV0U3ltYm9sLCBUcmFuc2l0aW9uRnVuY3Rpb24gfSBmcm9tIFwiLi9wdXNoZG93bkF1dG9tYXRhVHlwZXNcIjtcclxuaW1wb3J0IHsgY29tcGFyZVN0YXRlLCBjb21wYXJlU3RhY2tTeW1ib2wsIGNvbXBhcmVJbnB1dFN5bWJvbCwgY29tcGFyZVRyYW5zaXRpb25GdW5jdGlvbiB9IGZyb20gXCIuL3B1c2hkb3duQXV0b21hdGFUeXBlc1wiO1xyXG5cclxudHlwZSBjdXN0b21UeXBlID0gU3RhdGUgfCBTdGFja1N5bWJvbCB8IElucHV0U3ltYm9sIHwgVHJhbnNpdGlvbkZ1bmN0aW9uO1xyXG5cclxuZnVuY3Rpb24gaW5jbHVkZUR1cGxpY2F0ZXM8VCBleHRlbmRzIGN1c3RvbVR5cGU+KGFycjogVFtdLCBjb21wYXJlOiAoYTogVCwgYjogVCkgPT4gYm9vbGVhbik6IGJvb2xlYW57XHJcbiAgICByZXR1cm4gYXJyLnNvbWUoKHZhbHVlLCBpbmRleCwgc2VsZikgPT4gc2VsZi5maWx0ZXIoeCA9PiBjb21wYXJlKHgsIHZhbHVlKSkubGVuZ3RoID4gMSApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tQdXNoZG93bkF1dG9tYXRhKHBkYTogUHVzaGRvd25BdXRvbWF0YSk6IGJvb2xlYW47XHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja1B1c2hkb3duQXV0b21hdGEoc3RhdGU6IFN0YXRlW10sIHN0YWNrU3ltYm9sOiBTdGFja1N5bWJvbFtdLCBpbnB1dFN5bWJvbDogSW5wdXRTeW1ib2xbXSwgaW5pdGlhbFN0YXRlOiBTdGF0ZSwgaW5pdGlhbFN0YWNrU3ltYm9sOiBTdGFja1N5bWJvbCwgYWNjZXB0aW5nU3RhdGU6IFN0YXRlW10gfCBudWxsLCB0cmFuc2l0aW9uRnVuY3Rpb246IFRyYW5zaXRpb25GdW5jdGlvbltdKTogYm9vbGVhbjtcclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrUHVzaGRvd25BdXRvbWF0YShzdGF0ZTogU3RhdGVbXSB8IFB1c2hkb3duQXV0b21hdGEsIHN0YWNrU3ltYm9sPzogU3RhY2tTeW1ib2xbXSwgaW5wdXRTeW1ib2w/OiBJbnB1dFN5bWJvbFtdLCBpbml0aWFsU3RhdGU/OiBTdGF0ZSwgaW5pdGlhbFN0YWNrU3ltYm9sPzogU3RhY2tTeW1ib2wsIGFjY2VwdGluZ1N0YXRlPzogU3RhdGVbXSB8IG51bGwsIHRyYW5zaXRpb25GdW5jdGlvbj86IFRyYW5zaXRpb25GdW5jdGlvbltdKTogYm9vbGVhbiB7XHJcbiAgICBsZXQgcGRhOiBQdXNoZG93bkF1dG9tYXRhO1xyXG4gICAgaWYoc3RhdGUgaW5zdGFuY2VvZiBQdXNoZG93bkF1dG9tYXRhKXtcclxuICAgICAgICBwZGEgPSBzdGF0ZTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHBkYSA9IG5ldyBQdXNoZG93bkF1dG9tYXRhKHN0YXRlIGFzIFN0YXRlW10saW5wdXRTeW1ib2whLHN0YWNrU3ltYm9sISxpbml0aWFsU3RhdGUhLCBpbml0aWFsU3RhY2tTeW1ib2whLCBhY2NlcHRpbmdTdGF0ZSEsIHRyYW5zaXRpb25GdW5jdGlvbiEpO1xyXG4gICAgfVxyXG4gICAgLy9TdGF0ZXNcclxuICAgIGxldCBlcnJvciA9IGZhbHNlO1xyXG4gICAgbGV0IGVycm9yTVNnOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgaWYocGRhLnN0YXRlcy5sZW5ndGggPT09IDApe1xyXG4gICAgICAgIGVycm9yID0gdHJ1ZTtcclxuICAgICAgICBlcnJvck1TZy5wdXNoKFwiTm8gc3RhdGVzXCIpO1xyXG4gICAgfVxyXG4gICAgaWYoaW5jbHVkZUR1cGxpY2F0ZXMocGRhLnN0YXRlcywgY29tcGFyZVN0YXRlKSl7XHJcbiAgICAgICAgZXJyb3IgPSB0cnVlO1xyXG4gICAgICAgIGVycm9yTVNnLnB1c2goXCJEdXBsaWNhdGUgc3RhdGVzXCIpO1xyXG4gICAgfVxyXG4gICAgLy9JbnB1dCBzeW1ib2xzXHJcbiAgICBpZihwZGEuaW5wdXRTeW1ib2xzLmxlbmd0aCA9PT0gMCl7XHJcbiAgICAgICAgZXJyb3IgPSB0cnVlO1xyXG4gICAgICAgIGVycm9yTVNnLnB1c2goXCJObyBpbnB1dCBzeW1ib2xzXCIpO1xyXG4gICAgfVxyXG4gICAgaWYoaW5jbHVkZUR1cGxpY2F0ZXMocGRhLmlucHV0U3ltYm9scywgY29tcGFyZUlucHV0U3ltYm9sKSl7XHJcbiAgICAgICAgZXJyb3IgPSB0cnVlO1xyXG4gICAgICAgIGVycm9yTVNnLnB1c2goXCJEdXBsaWNhdGUgaW5wdXQgc3ltYm9sc1wiKTtcclxuICAgIH1cclxuICAgIC8vU3RhY2sgc3ltYm9sc1xyXG4gICAgaWYocGRhLnN0YWNrU3ltYm9scy5sZW5ndGggPT09IDApe1xyXG4gICAgICAgIGVycm9yID0gdHJ1ZTtcclxuICAgICAgICBlcnJvck1TZy5wdXNoKFwiTm8gc3RhY2sgc3ltYm9sc1wiKTtcclxuICAgIH1cclxuICAgIGlmKGluY2x1ZGVEdXBsaWNhdGVzKHBkYS5zdGFja1N5bWJvbHMsIGNvbXBhcmVTdGFja1N5bWJvbCkpe1xyXG4gICAgICAgIGVycm9yID0gdHJ1ZTtcclxuICAgICAgICBlcnJvck1TZy5wdXNoKFwiRHVwbGljYXRlIHN0YWNrIHN5bWJvbHNcIik7XHJcbiAgICB9XHJcbiAgICAvL0luaXRpYWwgc3RhdGVcclxuICAgIGlmKHBkYS5pbml0aWFsU3RhdGUgPT09IG51bGwpe1xyXG4gICAgICAgIGVycm9yID0gdHJ1ZTtcclxuICAgICAgICBlcnJvck1TZy5wdXNoKFwiTm8gaW5pdGlhbCBzdGF0ZVwiKTtcclxuICAgIH1cclxuICAgIGlmKCFwZGEuc3RhdGVzLnNvbWUocyA9PiBjb21wYXJlU3RhdGUocywgcGRhLmluaXRpYWxTdGF0ZSkpKXtcclxuICAgICAgICBlcnJvciA9IHRydWU7XHJcbiAgICAgICAgZXJyb3JNU2cucHVzaChcIkluaXRpYWwgc3RhdGUgZG9lcyBub3QgZXhpc3RcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy9Jbml0aWFsIHN0YWNrIHN5bWJvbFxyXG4gICAgaWYocGRhLmluaXRpYWxTdGFja1N5bWJvbCAhPT0gbnVsbCl7XHJcbiAgICAgICAgaWYoIXBkYS5zdGFja1N5bWJvbHMuc29tZShzID0+IGNvbXBhcmVTdGFja1N5bWJvbChzLCBwZGEuaW5pdGlhbFN0YWNrU3ltYm9sKSkpe1xyXG4gICAgICAgICAgICBlcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgIGVycm9yTVNnLnB1c2goXCJJbml0aWFsIHN0YWNrIHN5bWJvbCBkb2VzIG5vdCBleGlzdFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL0FjY2VwdGluZyBzdGF0ZVxyXG4gICAgaWYocGRhLmFjY2VwdGluZ1N0YXRlICE9PSBudWxsKXtcclxuICAgICAgICBsZXQgdGVtcEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgZm9yKGxldCBmaW5hbFN0YXRlIG9mIHBkYS5hY2NlcHRpbmdTdGF0ZSl7XHJcbiAgICAgICAgICAgIGlmKCFwZGEuc3RhdGVzLnNvbWUocyA9PiBjb21wYXJlU3RhdGUocywgZmluYWxTdGF0ZSkpKXtcclxuICAgICAgICAgICAgICAgIHRlbXBFcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0ZW1wRXJyb3Ipe1xyXG4gICAgICAgICAgICBlcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgIGVycm9yTVNnLnB1c2goXCJBdCBsZWFzdCBvbmUgYWNjZXB0aW5nIHN0YXRlIGRvZXMgbm90IGV4aXN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vVHJhbnNpdGlvbiBmdW5jdGlvblxyXG4gICAgaWYocGRhLnRyYW5zaXRpb25GdW5jdGlvbi5sZW5ndGggPT09IDApe1xyXG4gICAgICAgIGVycm9yID0gdHJ1ZTtcclxuICAgICAgICBlcnJvck1TZy5wdXNoKFwiTm8gdHJhbnNpdGlvbiBmdW5jdGlvblwiKTtcclxuICAgIH1cclxuICAgIGxldCB0ZW1wRXJyb3IgPSBmYWxzZTtcclxuICAgIGZvcihsZXQgdCBvZiBwZGEudHJhbnNpdGlvbkZ1bmN0aW9uKXtcclxuICAgICAgICBpZighcGRhLnN0YXRlcy5zb21lKHMgPT4gY29tcGFyZVN0YXRlKHMsIHQuZnJvbVN0YXRlKSkpe1xyXG4gICAgICAgICAgICB0ZW1wRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoISh0LmlucHV0U3ltYm9sLmlzRXBzeWxvbiB8fCAoIXQuaW5wdXRTeW1ib2wuaXNFcHN5bG9uICYmIHBkYS5pbnB1dFN5bWJvbHMuc29tZShpID0+IGNvbXBhcmVJbnB1dFN5bWJvbChpLCB0LmlucHV0U3ltYm9sKSkpKSl7XHJcbiAgICAgICAgICAgIHRlbXBFcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighcGRhLnN0YWNrU3ltYm9scy5zb21lKHMgPT4gY29tcGFyZVN0YWNrU3ltYm9sKHMsIHQuc3RhcnRTeW1ib2wpKSl7XHJcbiAgICAgICAgICAgIHRlbXBFcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IHB1c2hlZFN5bWJvbCBvZiB0LnB1c2hlZFN5bWJvbHMpe1xyXG4gICAgICAgICAgICBpZighcGRhLnN0YWNrU3ltYm9scy5zb21lKHMgPT4gY29tcGFyZVN0YWNrU3ltYm9sKHMsIHB1c2hlZFN5bWJvbCkpKXtcclxuICAgICAgICAgICAgICAgIHRlbXBFcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmKHRlbXBFcnJvcil7XHJcbiAgICAgICAgZXJyb3IgPSB0cnVlO1xyXG4gICAgICAgIGVycm9yTVNnLnB1c2goXCJBdCBsZWFzdCBvbmUgdHJhbnNpdGlvbiBmdW5jdGlvbiBpcyBpbmNvcnJlY3RcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoZXJyb3Ipe1xyXG4gICAgICAgIGFsZXJ0KFwiRXJyb3IgaW4gUERBOiBcXG4gLVwiICsgZXJyb3JNU2cuam9pbihcIlxcbiAtXCIpKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0iLCJpbXBvcnQgeyBTdGFjayB9IGZyb20gXCIuL3N0YWNrXCI7XHJcbmltcG9ydCB7IFN0YWNrU3ltYm9sLCBTdGF0ZSwgVHJhbnNpdGlvbkZ1bmN0aW9uIH0gZnJvbSBcIi4vcHVzaGRvd25BdXRvbWF0YVR5cGVzXCI7XHJcbmltcG9ydCB7IGNvbXBhcmVTdGF0ZSB9IGZyb20gXCIuL3B1c2hkb3duQXV0b21hdGFUeXBlc1wiO1xyXG5pbXBvcnQgeyBQdXNoZG93bkF1dG9tYXRhIH0gZnJvbSBcIi4vcHVzaGRvd25BdXRvbWF0YVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFB1c2hkb3duQXV0b21hdGFTaW11bGF0b3J7XHJcbiAgICBpbnB1dFRhcGU6IHN0cmluZztcclxuICAgIHN0YWNrOiBTdGFjazxTdGFja1N5bWJvbD47XHJcbiAgICBjdXJyZW50U3RhdGU6IFN0YXRlO1xyXG4gICAgYWNjZXB0aW5nU3RhdGU6IFN0YXRlW10gfCBudWxsO1xyXG4gICAgYXV0b21hdGE6IFB1c2hkb3duQXV0b21hdGE7XHJcbiAgICBoaXN0b3J5OiBUcmFuc2l0aW9uRnVuY3Rpb25bXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGF1dG9tYXRhOiBQdXNoZG93bkF1dG9tYXRhKXtcclxuICAgICAgICB0aGlzLmF1dG9tYXRhID0gYXV0b21hdGE7XHJcbiAgICAgICAgdGhpcy5pbnB1dFRhcGUgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuc3RhY2sgPSBuZXcgU3RhY2s8U3RhY2tTeW1ib2w+KCk7XHJcbiAgICAgICAgaWYodGhpcy5hdXRvbWF0YS5pbml0aWFsU3RhY2tTeW1ib2wgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhY2sucHVzaCh0aGlzLmF1dG9tYXRhLmluaXRpYWxTdGFja1N5bWJvbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gdGhpcy5hdXRvbWF0YS5pbml0aWFsU3RhdGU7XHJcbiAgICAgICAgdGhpcy5hY2NlcHRpbmdTdGF0ZSA9IHRoaXMuYXV0b21hdGEuYWNjZXB0aW5nU3RhdGU7XHJcbiAgICAgICAgdGhpcy5oaXN0b3J5ID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXQoKTogdm9pZHtcclxuICAgICAgICB0aGlzLmlucHV0VGFwZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5zdGFjay5jbGVhcigpO1xyXG4gICAgICAgIGlmKHRoaXMuYXV0b21hdGEuaW5pdGlhbFN0YWNrU3ltYm9sICE9IG51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLnN0YWNrLnB1c2godGhpcy5hdXRvbWF0YS5pbml0aWFsU3RhY2tTeW1ib2wpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IHRoaXMuYXV0b21hdGEuaW5pdGlhbFN0YXRlO1xyXG4gICAgICAgIHRoaXMuYWNjZXB0aW5nU3RhdGUgPSB0aGlzLmF1dG9tYXRhLmFjY2VwdGluZ1N0YXRlO1xyXG4gICAgICAgIHRoaXMuaGlzdG9yeSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcGx5VHJhbnNpdGlvbkZ1bmN0aW9uKGY6IFRyYW5zaXRpb25GdW5jdGlvbik6IHZvaWR7XHJcbiAgICAgICAgdGhpcy5pbnB1dFRhcGUgPSB0aGlzLmlucHV0VGFwZS5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgdGhpcy5zdGFjay5wb3AoKTtcclxuICAgICAgICBmb3IobGV0IGkgPSBmLnB1c2hlZFN5bWJvbHMubGVuZ3RoLTE7IGkgPj0gMDsgaS0tKXtcclxuICAgICAgICAgICAgdGhpcy5zdGFjay5wdXNoKGYucHVzaGVkU3ltYm9sc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gZi50b1N0YXRlO1xyXG4gICAgICAgIHRoaXMuaGlzdG9yeS5wdXNoKGYpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrSW5wdXRUYXBlVmFsaWRpdHkoKTogdm9pZHtcclxuICAgICAgICBsZXQgaW52YWxpZFN5bWJvbHM6IHN0cmluZ1tdID0gdGhpcy5hdXRvbWF0YS5jaGVja0lucHV0VGFwZVZhbGlkaXR5KHRoaXMuaW5wdXRUYXBlKTtcclxuICAgICAgICBpZihpbnZhbGlkU3ltYm9scy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBpbnB1dCB0YXBlOiBcIiArIGludmFsaWRTeW1ib2xzLmpvaW4oXCIsIFwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFjY2VwdGVkSW5wdXQoKTogYm9vbGVhbntcclxuICAgICAgICBpZih0aGlzLmlucHV0VGFwZSAhPT0gXCJcIil7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuYWNjZXB0aW5nU3RhdGUgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YWNrLmVtcHR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGZvcihsZXQgcyBvZiB0aGlzLmFjY2VwdGluZ1N0YXRlKXtcclxuICAgICAgICAgICAgaWYoY29tcGFyZVN0YXRlKHMsIHRoaXMuY3VycmVudFN0YXRlKSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHRTdGVwKCk6IFRyYW5zaXRpb25GdW5jdGlvbltde1xyXG4gICAgICAgIGlmKHRoaXMuYWNjZXB0ZWRJbnB1dCgpKXtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pbnB1dFRhcGVbMF0sIHRoaXMuY3VycmVudFN0YXRlLCB0aGlzLnN0YWNrLnRvcCgpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmF1dG9tYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgdGhpcy5hdXRvbWF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codHlwZW9mIHRoaXMuYXV0b21hdGEuZ2V0VHJhbnNpdGlvbkZ1bmN0aW9ucyk7XHJcbiAgICAgICAgbGV0IHBvc3NpYmxlVHJhbnNpdGlvbkZ1bmN0aW9uczogVHJhbnNpdGlvbkZ1bmN0aW9uW11cclxuICAgICAgICBpZih0aGlzLmlucHV0VGFwZSA9PT0gXCJcIil7XHJcbiAgICAgICAgICAgIHBvc3NpYmxlVHJhbnNpdGlvbkZ1bmN0aW9ucyA9IHRoaXMuYXV0b21hdGEuZ2V0VHJhbnNpdGlvbkZ1bmN0aW9ucyhcIlwiLCB0aGlzLmN1cnJlbnRTdGF0ZSwgdGhpcy5zdGFjay50b3AoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHBvc3NpYmxlVHJhbnNpdGlvbkZ1bmN0aW9ucyA9IHRoaXMuYXV0b21hdGEuZ2V0VHJhbnNpdGlvbkZ1bmN0aW9ucyh0aGlzLmlucHV0VGFwZVswXSwgdGhpcy5jdXJyZW50U3RhdGUsIHRoaXMuc3RhY2sudG9wKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcG9zc2libGVUcmFuc2l0aW9uRnVuY3Rpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIGJhY2tTdGVwKCk6IFRyYW5zaXRpb25GdW5jdGlvbiB8IG51bGx7XHJcbiAgICAgICAgaWYodGhpcy5oaXN0b3J5Lmxlbmd0aCA9PT0gMCl7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGxhc3Q6IFRyYW5zaXRpb25GdW5jdGlvbiA9IHRoaXMuaGlzdG9yeS5wb3AoKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IGxhc3QuZnJvbVN0YXRlO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsYXN0LnB1c2hlZFN5bWJvbHMubGVuZ3RoOyBpKyspeyBcclxuICAgICAgICAgICAgdGhpcy5zdGFjay5wb3AoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGFjay5wdXNoKGxhc3Quc3RhcnRTeW1ib2wpO1xyXG4gICAgICAgIGlmKCFsYXN0LmlucHV0U3ltYm9sLmlzRXBzeWxvbilcclxuICAgICAgICAgICAgdGhpcy5pbnB1dFRhcGUgPSBsYXN0LmlucHV0U3ltYm9sLnZhbHVlICsgdGhpcy5pbnB1dFRhcGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGxhc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TmV3SW5wdXQoaW5wdXQ6IHN0cmluZyk6IHZvaWR7XHJcbiAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgICAgIHRoaXMuaW5wdXRUYXBlID0gaW5wdXQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTdGFjayB9IGZyb20gXCIuL3N0YWNrXCI7XHJcblxyXG5leHBvcnQgdHlwZSBTdGFja1N5bWJvbCA9IHtcclxuICAgIHZhbHVlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlU3RhY2tTeW1ib2woYTogU3RhY2tTeW1ib2wgfCBudWxsLCBiOiBTdGFja1N5bWJvbCB8IG51bGwpOiBib29sZWFue1xyXG4gICAgaWYoYSAhPSBudWxsICYmIHR5cGVvZihhKSA9PSB0eXBlb2YoYikpe1xyXG4gICAgICAgIHJldHVybiBhLnZhbHVlID09IGIudmFsdWU7XHJcbiAgICB9XHJcbiAgICBpZihhID09IG51bGwgJiYgYiA9PSBudWxsKXtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgSW5wdXRTeW1ib2wgPSB7XHJcbiAgICBpc0Vwc3lsb246IGJvb2xlYW47XHJcbiAgICB2YWx1ZT86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVJbnB1dFN5bWJvbChhOiBJbnB1dFN5bWJvbCwgYjogSW5wdXRTeW1ib2wpOiBib29sZWFue1xyXG4gICAgaWYoYS5pc0Vwc3lsb24gPT0gYi5pc0Vwc3lsb24pe1xyXG4gICAgICAgIGlmKGEuaXNFcHN5bG9uID09IGZhbHNlKXtcclxuICAgICAgICAgICAgcmV0dXJuIGEudmFsdWUgPT0gYi52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBTdGF0ZSA9IHtcclxuICAgIHZhbHVlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlU3RhdGUoYTogU3RhdGUsIGI6IFN0YXRlKTogYm9vbGVhbntcclxuICAgIHJldHVybiBhLnZhbHVlID09IGIudmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFRyYW5zaXRpb25GdW5jdGlvbiA9IHtcclxuICAgIGZyb21TdGF0ZTogU3RhdGU7XHJcbiAgICBzdGFydFN5bWJvbDogU3RhY2tTeW1ib2w7XHJcbiAgICBpbnB1dFN5bWJvbDogSW5wdXRTeW1ib2w7XHJcbiAgICB0b1N0YXRlOiBTdGF0ZTtcclxuICAgIHB1c2hlZFN5bWJvbHM6IFN0YWNrU3ltYm9sW107XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlVHJhbnNpdGlvbkZ1bmN0aW9uKGE6IFRyYW5zaXRpb25GdW5jdGlvbiwgYjogVHJhbnNpdGlvbkZ1bmN0aW9uKTogYm9vbGVhbntcclxuICAgIC8vZnJvbVN0YXRlXHJcbiAgICBpZighY29tcGFyZVN0YXRlKGEuZnJvbVN0YXRlLCBiLmZyb21TdGF0ZSkpe1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvL3N0YXJ0U3ltYm9sXHJcbiAgICBpZighY29tcGFyZVN0YWNrU3ltYm9sKGEuc3RhcnRTeW1ib2wsIGIuc3RhcnRTeW1ib2wpKXtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy9pbnB1dFN5bWJvbFxyXG4gICAgaWYoIWNvbXBhcmVJbnB1dFN5bWJvbChhLmlucHV0U3ltYm9sLCBiLmlucHV0U3ltYm9sKSl7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vdG9TdGF0ZVxyXG4gICAgaWYoIWNvbXBhcmVTdGF0ZShhLnRvU3RhdGUsIGIudG9TdGF0ZSkpe1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvL3B1c2hlZFN5bWJvbHNcclxuICAgIGlmKGEucHVzaGVkU3ltYm9scy5sZW5ndGggIT0gYi5wdXNoZWRTeW1ib2xzLmxlbmd0aCl7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGEucHVzaGVkU3ltYm9scy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgaWYoIWNvbXBhcmVTdGFja1N5bWJvbChhLnB1c2hlZFN5bWJvbHNbaV0sIGIucHVzaGVkU3ltYm9sc1tpXSkpe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG59IiwiaW50ZXJmYWNlIElTdGFjazxUPiB7XHJcbiAgICBwb3AoKTogdm9pZDtcclxuICAgIHB1c2goaXRlbTogVCk6IHZvaWQ7XHJcbiAgICB0b3AoKTogVCB8IG51bGw7XHJcbiAgICBlbXB0eSgpOiBib29sZWFuO1xyXG4gICAgc2l6ZSgpOiBudW1iZXI7XHJcbiAgICBjbGVhcigpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3RhY2s8VD4gaW1wbGVtZW50cyBJU3RhY2s8VD4ge1xyXG4gICAgcHJpdmF0ZSBkYXRhOiBUW10gPSBbXTtcclxuXHJcbiAgICBwb3AoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kYXRhLnBvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1c2goaXRlbTogVCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGF0YS5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRvcCgpOiBUIHwgbnVsbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVt0aGlzLmRhdGEubGVuZ3RoIC0gMV0gPz8gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBlbXB0eSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmxlbmd0aCA9PT0gMDtcclxuICAgIH1cclxuXHJcbiAgICBzaXplKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgcHJpbnQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQdXNoZG93bkF1dG9tYXRhIH0gZnJvbSBcIi4vcHVzaGRvd25BdXRvbWF0YVwiXHJcbmltcG9ydCB7IFVJIH0gZnJvbSBcIi4vdWlcIiBcclxuaW1wb3J0IHsgYXV0b21hdGFPdmVydmlld1BhZ2UsIHNhdmVkQXV0b21hdGFzUGFnZSwgbG9hZEF1dG9tYXRhUGFnZSwgbWFpblBhZ2UsIHNpbXVsYXRvclBhZ2UsIG1lbnVQYWdlIH0gZnJvbSBcIi4vZXZlbnRzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RvcmFnZXtcclxuICAgIHByaXZhdGUgc2F2ZWRBdXRvbWF0YXNUYWJsZT86IEhUTUxUYWJsZUVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHVpOiBVSTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih1aTogVUkpe1xyXG4gICAgICAgIHRoaXMuc2F2ZWRBdXRvbWF0YXNUYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2F2ZWRBdXRvbWF0YXNUYWJsZVwiKSBhcyBIVE1MVGFibGVFbGVtZW50O1xyXG4gICAgICAgIGlmKHVpKXtcclxuICAgICAgICAgICAgdGhpcy51aSA9IHVpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckV2ZW50cygpe1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZEZpbGVGb3JtXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdGhpcy5sb2FkRmlsZS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvYWRGaWxlKGU6IFN1Ym1pdEV2ZW50KSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBrZXlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZEtleUlucHV0XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnRcclxuICAgICAgICBsZXQga2V5ID0ga2V5SW5wdXQ/LnZhbHVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBmaWxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRGaWxlSW5wdXRcIikgYXMgSFRNTElucHV0RWxlbWVudFxyXG4gICAgICAgIGxldCBmaWxlID0gZmlsZUlucHV0Py5maWxlcz8uWzBdO1xyXG4gICAgICAgIGlmKCFrZXkgfHwgIWZpbGUpe1xyXG4gICAgICAgICAgICBhbGVydChcIlBsZWFzZSBmaWxsIGluIGFsbCBmaWVsZHNcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG92ZXJ3cml0ZSA9IGZhbHNlO1xyXG4gICAgICAgIGlmKHRoaXMua2V5RXhpc3RzKGtleSkpe1xyXG4gICAgICAgICAgICBpZighY29uZmlybShcIktleSBhbHJlYWR5IGV4aXN0cy4gT3ZlcndyaXRlP1wiKSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIG92ZXJ3cml0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QganNvblN0ciA9IHJlYWRlci5yZXN1bHQgYXMgc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXV0b21hdGEgPSBKU09OLnBhcnNlKGpzb25TdHIpIGFzIFB1c2hkb3duQXV0b21hdGE7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZShrZXksIGF1dG9tYXRhKTtcclxuICAgICAgICAgICAgICAgIGlmKCFvdmVyd3JpdGUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zZXJ0Um93KGtleSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsb2FkQXV0b21hdGFQYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIG1lbnVQYWdlLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICAgICAgICAgIG1haW5QYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIHNpbXVsYXRvclBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51aS5zZXRBdXRvbWF0YSh0aGlzLmxvYWRBdXRvbWF0YShrZXkpKTtcclxuICAgICAgICAgICAgICAgIGtleUlucHV0LnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGZpbGVJbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKXtcclxuICAgICAgICAgICAgYWxlcnQoXCJFcnJvciBsb2FkaW5nIGZpbGUuIFBsZWFzZSB0cnkgYWdhaW4uXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2F2ZTxUPihrZXk6IHN0cmluZywgaXRlbTogVCl7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShpdGVtKSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvYWQ8VD4oa2V5OiBzdHJpbmcpOiBUIHwgbnVsbHtcclxuICAgICAgICBjb25zdCBpdGVtID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuICAgICAgICBpZiAoIWl0ZW0pe1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoaXRlbSkgYXMgVDtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHBhcnNpbmcgbG9jYWxTdG9yYWdlIGl0ZW0gYXQga2V5IFwiJHtrZXl9XCIuYCwgZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkZWxldGUoa2V5OiBzdHJpbmcpe1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAga2V5RXhpc3RzKGtleTogc3RyaW5nKTogYm9vbGVhbntcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgaWYobG9jYWxTdG9yYWdlLmtleShpKSA9PT0ga2V5KXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlQXV0b21hdGEoa2V5OiBzdHJpbmcsIGF1dG9tYXRhOiBQdXNoZG93bkF1dG9tYXRhKTogYm9vbGVhbntcclxuICAgICAgICBpZih0aGlzLmtleUV4aXN0cyhrZXkpKXtcclxuICAgICAgICAgICAgaWYoIWNvbmZpcm0oXCJLZXkgYWxyZWFkeSBleGlzdHMuIE92ZXJ3cml0ZT9cIikpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2F2ZShrZXksIGF1dG9tYXRhKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkQXV0b21hdGEoa2V5OiBzdHJpbmcpOiBQdXNoZG93bkF1dG9tYXRhIHwgbnVsbHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMubG9hZDxQdXNoZG93bkF1dG9tYXRhPihrZXkpLFB1c2hkb3duQXV0b21hdGEucHJvdG90eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluc2VydFJvdyhrZXk6IHN0cmluZyl7XHJcbiAgICAgICAgbGV0IGF1dG9tYXRhID0gdGhpcy5sb2FkQXV0b21hdGEoa2V5KTtcclxuICAgICAgICBpZihhdXRvbWF0YSl7XHJcbiAgICAgICAgICAgIGxldCByb3cgPSB0aGlzLnNhdmVkQXV0b21hdGFzVGFibGUuaW5zZXJ0Um93KCk7XHJcbiAgICAgICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwiYm9yZGVyLWJcIik7XHJcblxyXG4gICAgICAgICAgICBsZXQgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKClcclxuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwicC0yXCIsIFwiZm9udC1ib2xkXCIpO1xyXG4gICAgICAgICAgICBjZWxsLmlubmVyVGV4dCA9IGtleTtcclxuXHJcbiAgICAgICAgICAgIGNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJwLTJcIiwgXCJ0ZXh0LWNlbnRlclwiKTtcclxuICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnPHN2ZyBjbGFzcz1cInctNiBoLTZcInZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDUwIDUwXCIgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwIDUwO1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+PGcgaWQ9XCJMYXllcl8xXCI+PHBhdGggZD1cIk0yNSwzOWMxMy4wMzYsMCwyMy4zNTItMTIuODMzLDIzLjc4NC0xMy4zNzlMNDkuMjc1LDI1bC0wLjQ5MS0wLjYyMUM0OC4zNTIsMjMuODMzLDM4LjAzNiwxMSwyNSwxMVMxLjY0OCwyMy44MzMsMS4yMTYsMjQuMzc5TDAuNzI1LDI1bDAuNDkxLDAuNjIxQzEuNjQ4LDI2LjE2NywxMS45NjQsMzksMjUsMzl6IE0yNSwxM2MxMC40OTQsMCwxOS40Nyw5LjQ2LDIxLjY5LDEyQzQ0LjQ3MywyNy41NDIsMzUuNTA5LDM3LDI1LDM3QzE0LjUwNiwzNyw1LjUzLDI3LjU0LDMuMzEsMjVDNS41MjcsMjIuNDU4LDE0LjQ5MSwxMywyNSwxM3pcIj48L3BhdGg+PHBhdGggZD1cIk0yNSwzNGM0Ljk2MywwLDktNC4wMzgsOS05cy00LjAzNy05LTktOXMtOSw0LjAzOC05LDlTMjAuMDM3LDM0LDI1LDM0eiBNMjUsMThjMy44NTksMCw3LDMuMTQsNyw3cy0zLjE0MSw3LTcsN3MtNy0zLjE0LTctN1MyMS4xNDEsMTgsMjUsMTh6XCI+PC9wYXRoPjwvZz48Zz48L2c+PC9zdmc+JztcclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnNob3dBdXRvbWF0YS5iaW5kKHRoaXMsIGtleSkpO1xyXG4gICAgICAgICAgICBjZWxsLmFwcGVuZChidXR0b24pO1xyXG5cclxuICAgICAgICAgICAgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInAtMlwiLCBcInRleHQtY2VudGVyXCIpO1xyXG4gICAgICAgICAgICBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gJzxzdmcgY2xhc3M9XCJ3LTYgaC02XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjJcIiBkPVwiTTMgMTlWNmMwLS42LjQtMSAxLTFoNGMuMyAwIC42LjEuOC40bDEuOSAyLjJjLjIuMy41LjQuOC40SDE2Yy42IDAgMSAuNCAxIDF2MU0zIDE5bDMtOGgxNWwtMyA4SDNaXCIvPjwvc3ZnPic7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbWFpblBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgc2ltdWxhdG9yUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVpLnNldEF1dG9tYXRhKHRoaXMubG9hZEF1dG9tYXRhKGtleSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY2VsbC5hcHBlbmQoYnV0dG9uKTtcclxuXHJcbiAgICAgICAgICAgIGNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJwLTJcIiwgXCJ0ZXh0LWNlbnRlclwiKTtcclxuICAgICAgICAgICAgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICc8c3ZnIGNsYXNzPVwidy02IGgtNiB0ZXh0LWdyYXktODAwIGRhcms6dGV4dC13aGl0ZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyXCIgZD1cIk00IDE1djJhMyAzIDAgMCAwIDMgM2gxMGEzIDMgMCAwIDAgMy0zdi0ybS04IDFWNG0wIDEyLTQtNG00IDQgNC00XCIvPjwvc3ZnPic7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uU3RyID0gSlNPTi5zdHJpbmdpZnkodGhpcy5sb2FkQXV0b21hdGEoa2V5KSwgbnVsbCwgMik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2pzb25TdHJdLCB7dHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCJ9KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgICAgICAgICBhLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICBhLmRvd25sb2FkID0gYCR7a2V5fS5qc29uYDtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XHJcbiAgICAgICAgICAgICAgICBhLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGEpO1xyXG4gICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgIGNlbGwuYXBwZW5kKGJ1dHRvbik7XHJcblxyXG4gICAgICAgICAgICBjZWxsID0gcm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwicC0yXCIsIFwidGV4dC1jZW50ZXJcIik7XHJcbiAgICAgICAgICAgIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnPHN2ZyBjbGFzcz1cInctNiBoLTZcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA2NCA1OC42N1wiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojMzUzNTNkO308L3N0eWxlPjwvZGVmcz48dGl0bGU+QXNzZXQgMjU8L3RpdGxlPjxnIGlkPVwiTGF5ZXJfMlwiIGRhdGEtbmFtZT1cIkxheWVyIDJcIj48ZyBpZD1cIkxheWVyXzEtMlwiIGRhdGEtbmFtZT1cIkxheWVyIDFcIj48cGF0aCBjbGFzcz1cImNscy0xXCIgZD1cIk02MS4zMyw1LjMzSDQ4VjIuNjdBMi42NiwyLjY2LDAsMCwwLDQ1LjMzLDBIMTguNjdBMi42NiwyLjY2LDAsMCwwLDE2LDIuNjdWNS4zM0gyLjY3YTIuNjcsMi42NywwLDAsMCwwLDUuMzRIOHY0MGE4LDgsMCwwLDAsOCw4SDQ4YTgsOCwwLDAsMCw4LTh2LTQwaDUuMzNhMi42NywyLjY3LDAsMSwwLDAtNS4zNFpNNTAuNjcsNTAuNjdBMi42NywyLjY3LDAsMCwxLDQ4LDUzLjMzSDE2YTIuNjcsMi42NywwLDAsMS0yLjY3LTIuNjZ2LTQwSDUwLjY3WlwiPjwvcGF0aD48cGF0aCBjbGFzcz1cImNscy0xXCIgZD1cIk0yNCw0NS4zM2EyLjY3LDIuNjcsMCwwLDAsMi42Ny0yLjY2VjIxLjMzYTIuNjcsMi42NywwLDAsMC01LjM0LDBWNDIuNjdBMi42NywyLjY3LDAsMCwwLDI0LDQ1LjMzWlwiPjwvcGF0aD48cGF0aCBjbGFzcz1cImNscy0xXCIgZD1cIk00MCw0NS4zM2EyLjY3LDIuNjcsMCwwLDAsMi42Ny0yLjY2VjIxLjMzYTIuNjcsMi42NywwLDAsMC01LjM0LDBWNDIuNjdBMi42NywyLjY3LDAsMCwwLDQwLDQ1LjMzWlwiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPic7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGUoa2V5KTtcclxuICAgICAgICAgICAgICAgIHJvdy5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNlbGwuYXBwZW5kKGJ1dHRvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaW50QXV0b21hdGFzKCl7XHJcbiAgICAgICAgaWYodGhpcy5zYXZlZEF1dG9tYXRhc1RhYmxlKXtcclxuICAgICAgICAgICAgbGV0IGwgPSB0aGlzLnNhdmVkQXV0b21hdGFzVGFibGUucm93cy5sZW5ndGhcclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGw7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVkQXV0b21hdGFzVGFibGUuZGVsZXRlUm93KDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IGtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluc2VydFJvdyhrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dBdXRvbWF0YShrZXk6IHN0cmluZyl7XHJcbiAgICAgICAgbGV0IGF1dG9tYXRhID0gdGhpcy5sb2FkQXV0b21hdGEoa2V5KTtcclxuICAgICAgICAvL0tleS9uYW1lXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVydmlld05hbWVcIikhLmlubmVyVGV4dCA9IGtleTtcclxuICAgICAgICAvL1N0YXRlc1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcnZpZXdTdGF0ZXNcIikhLmlubmVyVGV4dCA9IGF1dG9tYXRhLnN0YXRlcy5tYXAoKHMpID0+IHMudmFsdWUpLmpvaW4oXCIsIFwiKTtcclxuICAgICAgICAvL0lucHV0IHN5bWJvbHNcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJ2aWV3SW5wdXRTeW1ib2xzXCIpIS5pbm5lclRleHQgPSBhdXRvbWF0YS5pbnB1dFN5bWJvbHMubWFwKChzKSA9PiBzLnZhbHVlKS5qb2luKFwiLCBcIik7XHJcbiAgICAgICAgLy9TdGFjayBzeW1ib2xzXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVydmlld1N0YWNrU3ltYm9sc1wiKSEuaW5uZXJUZXh0ID0gYXV0b21hdGEuc3RhY2tTeW1ib2xzLm1hcCgocykgPT4gcy52YWx1ZSkuam9pbihcIiwgXCIpO1xyXG4gICAgICAgIC8vSW5pdGlhbCBzdGF0ZVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcnZpZXdJbml0aWFsU3RhdGVcIikhLmlubmVyVGV4dCA9IGF1dG9tYXRhLmluaXRpYWxTdGF0ZS52YWx1ZTtcclxuICAgICAgICAvL0luaXRpYWwgc3RhY2sgc3ltYm9sXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVydmlld0luaXRpYWxTdGFja1N5bWJvbFwiKSEuaW5uZXJUZXh0ID0gYXV0b21hdGEuaW5pdGlhbFN0YWNrU3ltYm9sPy52YWx1ZTtcclxuICAgICAgICAvL0FjY2VwdGluZyBzdGF0ZXNcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJ2aWV3QWNjZXB0aW5nU3RhdGVcIikhLmlubmVyVGV4dCA9IGF1dG9tYXRhLmFjY2VwdGluZ1N0YXRlPy5tYXAoKHMpID0+IHMudmFsdWUpLmpvaW4oXCIsIFwiKSA/PyBcIkFjY2VwdGFuY2UgYnkgRW1wdHkgU3RhY2tcIjtcclxuICAgICAgICAvL1RyYW5zaXRpb24gZnVuY3Rpb25zXHJcbiAgICAgICAgbGV0IHRGdW5jdGlvbiA9ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJ2aWV3VHJhbnN0aW9uRnVuY3Rpb25cIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgdEZ1bmN0aW9uLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgZm9yKGxldCBmIG9mIGF1dG9tYXRhLnRyYW5zaXRpb25GdW5jdGlvbiA/PyBbXSl7XHJcbiAgICAgICAgICAgIHRGdW5jdGlvbi5hcHBlbmQoVUkuZ2VuZXJhdGVUcmFuc2l0aW9uRnVuY3Rpb24oZikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzYXZlZEF1dG9tYXRhc1BhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGF1dG9tYXRhT3ZlcnZpZXdQYWdlLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFB1c2hkb3duQXV0b21hdGFTaW11bGF0b3IgfSBmcm9tIFwiLi9wdXNoZG93bkF1dG9tYXRhU2ltdWxhdG9yXCI7XHJcbmltcG9ydCB7IFB1c2hkb3duQXV0b21hdGEgfSBmcm9tIFwiLi9wdXNoZG93bkF1dG9tYXRhXCI7XHJcbmltcG9ydCB7IFRyYW5zaXRpb25GdW5jdGlvbiwgSW5wdXRTeW1ib2wsIFN0YWNrU3ltYm9sLCBTdGF0ZSB9IGZyb20gXCIuL3B1c2hkb3duQXV0b21hdGFUeXBlc1wiO1xyXG5pbXBvcnQgeyBtYWluUGFnZSwgc2ltdWxhdG9yUGFnZSB9IGZyb20gXCIuL2V2ZW50c1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVJe1xyXG4gICAgc2ltdWxhdG9yPzogUHVzaGRvd25BdXRvbWF0YVNpbXVsYXRvcjtcclxuICAgIHRyYW5zdGl0aW9uSGlzdG9yeT86IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgdGFwZT86IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgc3RhY2s/OiBIVE1MRGl2RWxlbWVudDtcclxuICAgIHN0YXRlPzogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBpbmZvQnV0dG9uPzogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICB0cmFuc2l0aW9uT3B0aW9ucz86IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgdGFwZUZvcm1FcnJvcj86IEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gICAgdGFwZUZvcm0/OiBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgICB0YXBlUG9zaXRpb246IG51bWJlciA9IDA7XHJcblxyXG4gICAgaXNDaG9vc2luZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaXNSdW5uaWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGRpcmVjdGlvbkZvcndhcmQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgc3BlZWQ6IG51bWJlciA9IDEwMDA7XHJcblxyXG4gICAgdGltZW91dDogTm9kZUpTLlRpbWVvdXQgfCBudWxsID0gbnVsbDtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoYXV0b21hdGE/OiBQdXNoZG93bkF1dG9tYXRhKXtcclxuICAgICAgICBpZihhdXRvbWF0YSl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXV0b21hdGEoYXV0b21hdGEpO1xyXG4gICAgICAgICAgICB0aGlzLmZpbGxJbmZvcm1hdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRyYW5zdGl0aW9uSGlzdG9yeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhbnNpdGlvbkhpc3RvcnlEaXZcIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy50YXBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXBlRGl2XCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuc3RhY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YWNrRGl2XCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXRlRGl2XCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuaW5mb0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hvd0luZm9CdXR0b25cIikgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uT3B0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhbnNpdGlvbk9wdGlvbnNcIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy50YXBlRm9ybUVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXBlRm9ybUVycm9yXCIpIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gICAgICAgIHRoaXMudGFwZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcGVGb3JtTW9kYWxcIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QXV0b21hdGEoYXV0b21hdGE6IFB1c2hkb3duQXV0b21hdGEpOiB2b2lke1xyXG4gICAgICAgIHRoaXMuc2ltdWxhdG9yID0gbmV3IFB1c2hkb3duQXV0b21hdGFTaW11bGF0b3IoYXV0b21hdGEpO1xyXG4gICAgICAgIHRoaXMuZmlsbEluZm9ybWF0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5yZXNldFVJKCk7XHJcbiAgICAgICAgdGhpcy50YXBlUG9zaXRpb24gPSAwO1xyXG4gICAgICAgIGlmKHRoaXMudGFwZUZvcm0pe1xyXG4gICAgICAgICAgICB0aGlzLnRhcGVGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJFdmVudHMoKTogdm9pZHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbk5leHRcIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLm5leHRTdGVwLmJpbmQodGhpcykpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uQmFja1wiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuYmFja1N0ZXAuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcGVlZC1jb250cm9sXCIpPy5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChldmVudDogSW5wdXRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gcGFyc2VJbnQoKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b25OZXh0QXV0b1wiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYodGhpcy50aW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pc1J1bm5pZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uRm9yd2FyZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dFN0ZXAoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbkJhY2tBdXRvXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZih0aGlzLnRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0ID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmlzUnVubmlnID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25Gb3J3YXJkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYmFja1N0ZXAoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvblN0b3BcIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaXNSdW5uaWcgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3dUYXBlTW9kYWxCdXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYodGhpcy50YXBlRm9ybSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXBlRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZGVTZXRUYXBlQnV0dG9uXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZih0aGlzLnRhcGVGb3JtKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcGVGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2V0VGFwZVwiKS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHRoaXMuc2V0VGFwZUZvcm0uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXBlSW5wdXRcIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQ6IElucHV0RXZlbnQpID0+IHtcclxuICAgICAgICAgICAgbGV0IHRhcGVJbnB1dDogc3RyaW5nID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5jaGVja1RhcGVJbnB1dFZhbGlkaXR5KHRhcGVJbnB1dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZVNpbXVsYXRvckJ1dHRvblwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNpbXVsYXRvclBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBtYWluUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudGltZW91dCl7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFRhcGVGb3JtKGV2ZW50OiBTdWJtaXRFdmVudCk6IHZvaWR7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgZm9ybSA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRm9ybUVsZW1lbnQ7XHJcbiAgICAgICAgbGV0IHRhcGVJbnB1dCA9IGZvcm0uZWxlbWVudHMubmFtZWRJdGVtKFwidGFwZUlucHV0XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgaWYodGhpcy5jaGVja1RhcGVJbnB1dFZhbGlkaXR5KHRhcGVJbnB1dC52YWx1ZSkpe1xyXG4gICAgICAgICAgICB0aGlzLnNldFRhcGUodGFwZUlucHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgaWYodGhpcy50YXBlRm9ybSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcGVGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja1RhcGVJbnB1dFZhbGlkaXR5KHRhcGVJbnB1dDogc3RyaW5nKTogYm9vbGVhbntcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNoZWNraW5nIHRhcGUgaW5wdXRcIik7XHJcbiAgICAgICAgaWYoIXRoaXMuc2ltdWxhdG9yKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgbGV0IGFsbG93ZWQgPSB0aGlzLnNpbXVsYXRvci5hdXRvbWF0YS5pbnB1dFN5bWJvbHMubWFwKChzKSA9PiBzLnZhbHVlKTtcclxuICAgICAgICBmb3IobGV0IHMgb2YgdGFwZUlucHV0KXtcclxuICAgICAgICAgICAgaWYoIWFsbG93ZWQuaW5jbHVkZXMocykpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXBlRm9ybUVycm9yPy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGFwZUZvcm1FcnJvcj8uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIGdlbmVyYXRlVHJhbnNpdGlvbkZ1bmN0aW9uKGY6IFRyYW5zaXRpb25GdW5jdGlvbik6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgICAgICBsZXQgcmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICByZXMuY2xhc3NMaXN0LmFkZChcImZsZXhcIiwgXCJmbGV4LXJvd1wiLCBcImZsZXgtbm93cmFwXCIsIFwianVzdGlmeS1jZW50ZXJcIiwgXCJwdC0zXCIpO1xyXG5cclxuICAgICAgICBsZXQgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgbGVmdC5pbm5lclRleHQgPSBmLmZyb21TdGF0ZS52YWx1ZSArIFwiIFwiICsgZi5zdGFydFN5bWJvbC52YWx1ZSA/PyBcIlwiO1xyXG4gICAgICAgIHJlcy5hcHBlbmQobGVmdCk7XHJcblxyXG4gICAgICAgIGxldCBhcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgYXJyb3cuY2xhc3NMaXN0LmFkZChcInB4LTFcIiwgXCJyZWxhdGl2ZVwiKTtcclxuICAgICAgICBhcnJvdy5pbm5lclRleHQgPSBcIuKUgOKUgD5cIjtcclxuICAgICAgICByZXMuYXBwZW5kKGFycm93KTtcclxuXHJcbiAgICAgICAgbGV0IHN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgc3ltYm9sLmNsYXNzTGlzdC5hZGQoXCJhYnNvbHV0ZVwiLCBcInRvcC0wXCIsIFwibGVmdC0xLzJcIiwgXCItdHJhbnNsYXRlLXgtWzEwMCVdXCIsIFwiLXRyYW5zbGF0ZS15LTJcIik7XHJcbiAgICAgICAgc3ltYm9sLmlubmVyVGV4dCA9IGYuaW5wdXRTeW1ib2wuaXNFcHN5bG9uID8gXCLOtVwiIDogZi5pbnB1dFN5bWJvbC52YWx1ZTtcclxuICAgICAgICBhcnJvdy5hcHBlbmQoc3ltYm9sKTtcclxuXHJcbiAgICAgICAgbGV0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICByaWdodC5pbm5lclRleHQgPSBmLnRvU3RhdGUudmFsdWUgKyBcIiBcIiArIGYucHVzaGVkU3ltYm9scy5tYXAocyA9PiBzLnZhbHVlKS5qb2luKFwiXCIpO1xyXG4gICAgICAgIHJlcy5hcHBlbmQocmlnaHQpO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbGxJbmZvcm1hdGlvbigpOiB2b2lke1xyXG4gICAgICAgIC8vU3RhdGVzXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvU3RhdGVzXCIpIS5pbm5lclRleHQgPSB0aGlzLnNpbXVsYXRvcj8uYXV0b21hdGEuc3RhdGVzLm1hcCgocykgPT4gcy52YWx1ZSkuam9pbihcIiwgXCIpO1xyXG4gICAgICAgIC8vSW5wdXQgc3ltYm9sc1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mb0lucHV0U3ltYm9sc1wiKSEuaW5uZXJUZXh0ID0gdGhpcy5zaW11bGF0b3I/LmF1dG9tYXRhLmlucHV0U3ltYm9scy5tYXAoKHMpID0+IHMudmFsdWUpLmpvaW4oXCIsIFwiKTtcclxuICAgICAgICAvL1N0YWNrIHN5bWJvbHNcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm9TdGFja1N5bWJvbHNcIikhLmlubmVyVGV4dCA9IHRoaXMuc2ltdWxhdG9yPy5hdXRvbWF0YS5zdGFja1N5bWJvbHMubWFwKChzKSA9PiBzLnZhbHVlKS5qb2luKFwiLCBcIik7XHJcbiAgICAgICAgLy9Jbml0aWFsIHN0YXRlXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvSW5pdGlhbFN0YXRlXCIpIS5pbm5lclRleHQgPSB0aGlzLnNpbXVsYXRvcj8uYXV0b21hdGEuaW5pdGlhbFN0YXRlLnZhbHVlO1xyXG4gICAgICAgIC8vSW5pdGlhbCBzdGFjayBzeW1ib2xcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm9Jbml0aWFsU3RhY2tTeW1ib2xcIikhLmlubmVyVGV4dCA9IHRoaXMuc2ltdWxhdG9yPy5hdXRvbWF0YS5pbml0aWFsU3RhY2tTeW1ib2w/LnZhbHVlO1xyXG4gICAgICAgIC8vQWNjZXB0aW5nIHN0YXRlc1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mb0FjY2VwdGluZ1N0YXRlXCIpIS5pbm5lclRleHQgPSB0aGlzLnNpbXVsYXRvcj8uYXV0b21hdGEuYWNjZXB0aW5nU3RhdGU/Lm1hcCgocykgPT4gcy52YWx1ZSkuam9pbihcIiwgXCIpID8/IFwiQWNjZXB0YW5jZSBieSBFbXB0eSBTdGFja1wiO1xyXG4gICAgICAgIC8vVHJhbnNpdGlvbiBmdW5jdGlvbnNcclxuICAgICAgICBsZXQgdEZ1bmN0aW9uID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mb1RyYW5zdGlvbkZ1bmN0aW9uXCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIHRGdW5jdGlvbi5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIGZvcihsZXQgZiBvZiB0aGlzLnNpbXVsYXRvcj8uYXV0b21hdGEudHJhbnNpdGlvbkZ1bmN0aW9uID8/IFtdKXtcclxuICAgICAgICAgICAgdEZ1bmN0aW9uLmFwcGVuZChVSS5nZW5lcmF0ZVRyYW5zaXRpb25GdW5jdGlvbihmKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZFRvSGlzdG9yeShmOiBUcmFuc2l0aW9uRnVuY3Rpb24pOiB2b2lke1xyXG4gICAgICAgIGlmKHRoaXMudHJhbnN0aXRpb25IaXN0b3J5KXtcclxuICAgICAgICAgICAgdGhpcy50cmFuc3RpdGlvbkhpc3RvcnkucHJlcGVuZChVSS5nZW5lcmF0ZVRyYW5zaXRpb25GdW5jdGlvbihmKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUZyb21IaXN0b3J5KCk6IHZvaWR7XHJcbiAgICAgICAgaWYodGhpcy50cmFuc3RpdGlvbkhpc3RvcnkgJiYgdGhpcy50cmFuc3RpdGlvbkhpc3RvcnkuY2hpbGRFbGVtZW50Q291bnQgPiAwKXtcclxuICAgICAgICAgICAgdGhpcy50cmFuc3RpdGlvbkhpc3RvcnkucmVtb3ZlQ2hpbGQodGhpcy50cmFuc3RpdGlvbkhpc3RvcnkuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZFRvVGFwZShzOiBJbnB1dFN5bWJvbCwgYXBwZW5kPzogYm9vbGVhbik6IHZvaWR7XHJcbiAgICAgICAgbGV0IHN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgc3ltYm9sLmNsYXNzTGlzdC5hZGQoXCJiZy1yZWQtNTAwXCIsXCJoLTE2XCIsXCJ3LTE2XCIsXCJtLTJcIixcImZsZXgtc2hyaW5rLTBcIixcImZsZXhcIixcImp1c3RpZnktY2VudGVyXCIsXCJpdGVtcy1jZW50ZXJcIilcclxuICAgICAgICBzeW1ib2wuaW5uZXJUZXh0ID0gcy52YWx1ZTtcclxuICAgICAgICBpZihhcHBlbmQgJiYgYXBwZW5kID09IHRydWUpe1xyXG4gICAgICAgICAgICB0aGlzLnRhcGU/LmFwcGVuZChzeW1ib2wpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLnRhcGU/LnByZXBlbmQoc3ltYm9sKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlRnJvbVRhcGUoKTogdm9pZHtcclxuICAgICAgICBpZih0aGlzLnRhcGUgJiYgdGhpcy50YXBlLmNoaWxkRWxlbWVudENvdW50ID4gMCl7XHJcbiAgICAgICAgICAgIHRoaXMudGFwZS5yZW1vdmVDaGlsZCh0aGlzLnRhcGUuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAwIC0+IHJlYWRcclxuICAgIDEgLT4gcmVhZGluZ1xyXG4gICAgMiAtPiBub3QgcmVhZFxyXG4gICAgKi9cclxuICAgIHNldFN5bWJvbFRvU3RhdGUoczogSFRNTERpdkVsZW1lbnQsIHN0YXRlOiBudW1iZXIpe1xyXG4gICAgICAgIHN3aXRjaChzdGF0ZSl7XHJcbiAgICAgICAgICAgIGNhc2UgMDp7XHJcbiAgICAgICAgICAgICAgICBzLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1yZWQtNTAwXCIpO1xyXG4gICAgICAgICAgICAgICAgcy5jbGFzc0xpc3QucmVtb3ZlKFwiYmctcmVkLTkwMFwiKTtcclxuICAgICAgICAgICAgICAgIHMuY2xhc3NMaXN0LmFkZChcImJnLXJlZC0zMDBcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIDE6e1xyXG4gICAgICAgICAgICAgICAgcy5jbGFzc0xpc3QucmVtb3ZlKFwiYmctcmVkLTMwMFwiKTtcclxuICAgICAgICAgICAgICAgIHMuY2xhc3NMaXN0LnJlbW92ZShcImJnLXJlZC01MDBcIik7XHJcbiAgICAgICAgICAgICAgICBzLmNsYXNzTGlzdC5hZGQoXCJiZy1yZWQtOTAwXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6e1xyXG4gICAgICAgICAgICAgICAgcy5jbGFzc0xpc3QucmVtb3ZlKFwiYmctcmVkLTMwMFwiKTtcclxuICAgICAgICAgICAgICAgIHMuY2xhc3NMaXN0LnJlbW92ZShcImJnLXJlZC05MDBcIik7XHJcbiAgICAgICAgICAgICAgICBzLmNsYXNzTGlzdC5hZGQoXCJiZy1yZWQtNTAwXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1vdmVUYXBlKGJhY2t3YXJkOiBib29sZWFuID0gZmFsc2UpOiB2b2lke1xyXG4gICAgICAgIGxldCBzeW1ib2xzID0gdGhpcy50YXBlPy5jaGlsZHJlbjtcclxuICAgICAgICBpZihzeW1ib2xzICYmIHN5bWJvbHMubGVuZ3RoID4gMSl7XHJcbiAgICAgICAgICAgIGlmKGJhY2t3YXJkID09IHRydWUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXBlUG9zaXRpb24tLTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3ltYm9sVG9TdGF0ZShzeW1ib2xzW3RoaXMudGFwZVBvc2l0aW9uKzFdIGFzIEhUTUxEaXZFbGVtZW50LCAyKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudGFwZVBvc2l0aW9uKzEsIDIpO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy50YXBlUG9zaXRpb24gPj0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTeW1ib2xUb1N0YXRlKHN5bWJvbHNbdGhpcy50YXBlUG9zaXRpb25dIGFzIEhUTUxEaXZFbGVtZW50LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRhcGVQb3NpdGlvbiwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFwZVBvc2l0aW9uKys7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN5bWJvbFRvU3RhdGUoc3ltYm9sc1t0aGlzLnRhcGVQb3NpdGlvbi0xXSBhcyBIVE1MRGl2RWxlbWVudCwgMCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRhcGVQb3NpdGlvbi0xLCAwKTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMudGFwZVBvc2l0aW9uIDwgc3ltYm9scy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3ltYm9sVG9TdGF0ZShzeW1ib2xzW3RoaXMudGFwZVBvc2l0aW9uXSBhcyBIVE1MRGl2RWxlbWVudCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy50YXBlUG9zaXRpb24sIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVN0YXRlKHM6IFN0YXRlKTogdm9pZHtcclxuICAgICAgICBpZih0aGlzLnN0YXRlKXtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5pbm5lclRleHQgPSBzLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGRUb1N0YWNrKHM6IFN0YWNrU3ltYm9sKTogdm9pZHtcclxuICAgICAgICBsZXQgc3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICBzeW1ib2wuY2xhc3NMaXN0LmFkZChcImJnLWdyZWVuLTUwMFwiLFwiaC0xNlwiLFwidy0xNlwiLFwibS0yXCIsXCJmbGV4LXNocmluay0wXCIsXCJmbGV4XCIsXCJqdXN0aWZ5LWNlbnRlclwiLFwiaXRlbXMtY2VudGVyXCIsXCJmaXJzdDptdC1hdXRvXCIpXHJcbiAgICAgICAgc3ltYm9sLmlubmVyVGV4dCA9IHMudmFsdWU7XHJcbiAgICAgICAgdGhpcy5zdGFjaz8ucHJlcGVuZChzeW1ib2wpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUZyb21TdGFjaygpOiB2b2lke1xyXG4gICAgICAgIGlmKHRoaXMuc3RhY2sgJiYgdGhpcy5zdGFjay5jaGlsZEVsZW1lbnRDb3VudCA+IDApe1xyXG4gICAgICAgICAgICB0aGlzLnN0YWNrLnJlbW92ZUNoaWxkKHRoaXMuc3RhY2suZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0VUkoKTogdm9pZHtcclxuICAgICAgICBpZih0aGlzLnN0YWNrKXtcclxuICAgICAgICAgICAgdGhpcy5zdGFjay5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZSl7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuaW5uZXJIVE1MID0gXCJcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy50YXBlKXtcclxuICAgICAgICAgICAgdGhpcy50YXBlLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLnRyYW5zdGl0aW9uSGlzdG9yeSl7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnN0aXRpb25IaXN0b3J5LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLnNpbXVsYXRvcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuaW5uZXJUZXh0ID0gdGhpcy5zaW11bGF0b3IuYXV0b21hdGEuaW5pdGlhbFN0YXRlLnZhbHVlO1xyXG4gICAgICAgICAgICBpZih0aGlzLnNpbXVsYXRvci5hdXRvbWF0YS5pbml0aWFsU3RhY2tTeW1ib2wpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUb1N0YWNrKHRoaXMuc2ltdWxhdG9yLmF1dG9tYXRhLmluaXRpYWxTdGFja1N5bWJvbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaXNDaG9vc2luZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNSdW5uaWcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbkZvcndhcmQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSAxMDAwO1xyXG4gICAgICAgIGlmKHRoaXMudGltZW91dClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRhcGVQb3NpdGlvbiA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGFwZSh0YXBlOiBzdHJpbmcpOiB2b2lke1xyXG4gICAgICAgIHRoaXMuc2ltdWxhdG9yPy5zZXROZXdJbnB1dCh0YXBlKTtcclxuICAgICAgICB0aGlzLnJlc2V0VUkoKTtcclxuICAgICAgICBpZih0aGlzLnRhcGUpe1xyXG4gICAgICAgICAgICB0aGlzLnRhcGUuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgZm9yKGxldCBzIG9mIHRhcGUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUb1RhcGUoe2lzRXBzeWxvbjogZmFsc2UsIHZhbHVlOiBzfSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRlbXAgPSB0aGlzLnRhcGU/LmNoaWxkcmVuWzBdIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIGlmKHRlbXApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN5bWJvbFRvU3RhdGUodGVtcCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVzZVRyYW5zaXRpb24oZjogVHJhbnNpdGlvbkZ1bmN0aW9uKTogdm9pZHtcclxuICAgICAgICBjb25zb2xlLmxvZyhmKTtcclxuICAgICAgICB0aGlzLnNpbXVsYXRvcj8uYXBwbHlUcmFuc2l0aW9uRnVuY3Rpb24oZik7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShmLnRvU3RhdGUpO1xyXG4gICAgICAgIGlmKCFmLmlucHV0U3ltYm9sLmlzRXBzeWxvbil7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZVRhcGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZi5zdGFydFN5bWJvbCAhPSBudWxsKXtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tU3RhY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBpID0gZi5wdXNoZWRTeW1ib2xzLmxlbmd0aC0xOyBpID49IDA7IGktLSl7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkVG9TdGFjayhmLnB1c2hlZFN5bWJvbHNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFkZFRvSGlzdG9yeShmKTtcclxuICAgICAgICB0aGlzLmlzQ2hvb3NpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdlbmVyYXRlT3B0aW9ucyhvcHRpb25zOiBUcmFuc2l0aW9uRnVuY3Rpb25bXSk6IHZvaWR7XHJcbiAgICAgICAgaWYodGhpcy5pbmZvQnV0dG9uKXtcclxuICAgICAgICAgICAgdGhpcy5pbmZvQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJmbGV4XCIpO1xyXG4gICAgICAgICAgICB0aGlzLmluZm9CdXR0b24uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy50cmFuc2l0aW9uT3B0aW9ucyl7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbk9wdGlvbnMuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBvIG9mIG9wdGlvbnMpe1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC5hZGQoXCJweC0yXCIsXCJweS0xXCIsXCJteC1hdXRvXCIpO1xyXG4gICAgICAgICAgICBvcHRpb24uYXBwZW5kKFVJLmdlbmVyYXRlVHJhbnNpdGlvbkZ1bmN0aW9uKG8pKTtcclxuICAgICAgICAgICAgb3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZVRyYW5zaXRpb24obyk7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnRyYW5zaXRpb25PcHRpb25zKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25PcHRpb25zLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZm9CdXR0b24uY2xhc3NMaXN0LmFkZChcImZsZXhcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZm9CdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuaXNSdW5uaWcgJiYgdGhpcy5kaXJlY3Rpb25Gb3J3YXJkKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXIgPSB0aGlzLmRpcmVjdGlvbkZvcndhcmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuaXNSdW5uaWcgJiYgdGhpcy5kaXJlY3Rpb25Gb3J3YXJkID09IGRpcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dFN0ZXAoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCB0aGlzLnNwZWVkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbk9wdGlvbnM/LmFwcGVuZChvcHRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZXh0U3RlcCgpOiB2b2lke1xyXG4gICAgICAgIGlmKCF0aGlzLmlzQ2hvb3Npbmcpe1xyXG4gICAgICAgICAgICBpZih0aGlzLnNpbXVsYXRvcil7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zc2libGVUcmFuc3Rpb25zOiBUcmFuc2l0aW9uRnVuY3Rpb25bXSA9IHRoaXMuc2ltdWxhdG9yLm5leHRTdGVwKCk7XHJcbiAgICAgICAgICAgICAgICBpZihwb3NzaWJsZVRyYW5zdGlvbnMubGVuZ3RoID09IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHBvc3NpYmxlIHRyYW5zaXRpb25zXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZihwb3NzaWJsZVRyYW5zdGlvbnMubGVuZ3RoID09IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlVHJhbnNpdGlvbihwb3NzaWJsZVRyYW5zdGlvbnNbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuaXNSdW5uaWcgJiYgdGhpcy5kaXJlY3Rpb25Gb3J3YXJkKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRpciA9IHRoaXMuZGlyZWN0aW9uRm9yd2FyZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmlzUnVubmlnICYmIHRoaXMuZGlyZWN0aW9uRm9yd2FyZCA9PSBkaXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0U3RlcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0aGlzLnNwZWVkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNDaG9vc2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZU9wdGlvbnMocG9zc2libGVUcmFuc3Rpb25zKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBiYWNrU3RlcCgpOiB2b2lke1xyXG4gICAgICAgIGlmKHRoaXMuaXNDaG9vc2luZyl7XHJcbiAgICAgICAgICAgIHRoaXMuaXNDaG9vc2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZih0aGlzLnRyYW5zaXRpb25PcHRpb25zKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbk9wdGlvbnMuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmluZm9CdXR0b24uY2xhc3NMaXN0LmFkZChcImZsZXhcIik7XHJcbiAgICAgICAgICAgIHRoaXMuaW5mb0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuc2ltdWxhdG9yKXtcclxuICAgICAgICAgICAgbGV0IGxhc3QgPSB0aGlzLnNpbXVsYXRvci5iYWNrU3RlcCgpO1xyXG4gICAgICAgICAgICBpZihsYXN0KXtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRnJvbUhpc3RvcnkoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobGFzdC5mcm9tU3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgaWYoIWxhc3QuaW5wdXRTeW1ib2wuaXNFcHN5bG9uKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVUYXBlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxhc3QucHVzaGVkU3ltYm9scy5sZW5ndGg7IGkrKyl7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRnJvbVN0YWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihsYXN0LnN0YXJ0U3ltYm9sICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9TdGFjayhsYXN0LnN0YXJ0U3ltYm9sKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih0aGlzLmlzUnVubmlnICYmICF0aGlzLmRpcmVjdGlvbkZvcndhcmQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBkaXIgPSB0aGlzLmRpcmVjdGlvbkZvcndhcmQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmlzUnVubmlnICYmIHRoaXMuZGlyZWN0aW9uRm9yd2FyZCA9PSBkaXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFja1N0ZXAoKTtcclxuICAgICAgICAgICAgICAgIH0sIHRoaXMuc3BlZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBVSSB9IGZyb20gXCIuL3VpXCI7XG5pbXBvcnQgeyByZWdpc3RlckV2ZW50cyB9IGZyb20gXCIuL2V2ZW50c1wiO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCB7IEZvcm1BdXRvbWF0YUJ1aWxkZXIgfSBmcm9tIFwiLi9mb3JtQXV0b21hdGFCdWlsZGVyXCI7XG5cbmxldCBzdG9yYWdlOiBTdG9yYWdlO1xubGV0IHVpOiBVSTtcbmxldCBhdXRvbWF0YUJ1aWxkZXI6IEZvcm1BdXRvbWF0YUJ1aWxkZXI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICB1aSA9IG5ldyBVSSgpO1xuICAgIHN0b3JhZ2UgPSBuZXcgU3RvcmFnZSh1aSk7XG4gICAgYXV0b21hdGFCdWlsZGVyID0gbmV3IEZvcm1BdXRvbWF0YUJ1aWxkZXIoc3RvcmFnZSwgdWkpO1xuICAgIHJlZ2lzdGVyRXZlbnRzKHN0b3JhZ2UpO1xuICAgIHVpLnJlZ2lzdGVyRXZlbnRzKCk7XG4gICAgc3RvcmFnZS5yZWdpc3RlckV2ZW50cygpO1xuICAgIGF1dG9tYXRhQnVpbGRlci5yZWdpc3RlckV2ZW50cygpO1xuICAgIHVpLnNldFRhcGUoXCJhYWJiXCIpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=