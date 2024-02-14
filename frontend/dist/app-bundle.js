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
    result;
    resultText;
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
        this.result = document.getElementById("simulatorResultDiv");
        this.resultText = document.getElementById("simulatorResultContent");
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
        document.getElementById("hideResultButton")?.addEventListener("click", () => {
            if (this.result) {
                this.result.style.display = "none";
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
    showResult(text) {
        if (this.resultText) {
            this.resultText.innerText = text;
        }
        if (this.result) {
            this.result.style.display = "flex";
        }
    }
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
        if (s) {
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
        this.result.style.display = "none";
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
        if (this.simulator?.acceptedInput()) {
            this.showResult("The input was accepted by the automatos.");
        }
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
        console.log(this.tapePosition);
        if (!this.isChoosing) {
            if (this.simulator) {
                let possibleTranstions = this.simulator.nextStep();
                if (possibleTranstions.length == 0) {
                    if (this.isRunnig) {
                        this.isRunnig = false;
                        if (this.timeout) {
                            clearTimeout(this.timeout);
                            this.timeout = null;
                        }
                    }
                    if (!this.simulator.acceptedInput()) {
                        this.showResult("The input was not accepted by the automatos. No possible transitions to be made.");
                    }
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
        console.log(this.tapePosition);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkQsdURBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4QixFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDcEIsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3pCLGVBQWUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNqQyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZCLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2ltdWxhdGlvbl9vZl9wdXNoZG93bl9hdXRvbWF0YS8uL3NyYy9ldmVudHMudHMiLCJ3ZWJwYWNrOi8vc2ltdWxhdGlvbl9vZl9wdXNoZG93bl9hdXRvbWF0YS8uL3NyYy9mb3JtQXV0b21hdGFCdWlsZGVyLnRzIiwid2VicGFjazovL3NpbXVsYXRpb25fb2ZfcHVzaGRvd25fYXV0b21hdGEvLi9zcmMvcHVzaGRvd25BdXRvbWF0YS50cyIsIndlYnBhY2s6Ly9zaW11bGF0aW9uX29mX3B1c2hkb3duX2F1dG9tYXRhLy4vc3JjL3B1c2hkb3duQXV0b21hdGFDaGVja2VyLnRzIiwid2VicGFjazovL3NpbXVsYXRpb25fb2ZfcHVzaGRvd25fYXV0b21hdGEvLi9zcmMvcHVzaGRvd25BdXRvbWF0YVNpbXVsYXRvci50cyIsIndlYnBhY2s6Ly9zaW11bGF0aW9uX29mX3B1c2hkb3duX2F1dG9tYXRhLy4vc3JjL3B1c2hkb3duQXV0b21hdGFUeXBlcy50cyIsIndlYnBhY2s6Ly9zaW11bGF0aW9uX29mX3B1c2hkb3duX2F1dG9tYXRhLy4vc3JjL3N0YWNrLnRzIiwid2VicGFjazovL3NpbXVsYXRpb25fb2ZfcHVzaGRvd25fYXV0b21hdGEvLi9zcmMvc3RvcmFnZS50cyIsIndlYnBhY2s6Ly9zaW11bGF0aW9uX29mX3B1c2hkb3duX2F1dG9tYXRhLy4vc3JjL3VpLnRzIiwid2VicGFjazovL3NpbXVsYXRpb25fb2ZfcHVzaGRvd25fYXV0b21hdGEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2ltdWxhdGlvbl9vZl9wdXNoZG93bl9hdXRvbWF0YS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2ltdWxhdGlvbl9vZl9wdXNoZG93bl9hdXRvbWF0YS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NpbXVsYXRpb25fb2ZfcHVzaGRvd25fYXV0b21hdGEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zaW11bGF0aW9uX29mX3B1c2hkb3duX2F1dG9tYXRhLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XHJcblxyXG52YXIgZGl2QXV0b21hdGFEZWZpbml0aW9uOiBIVE1MRGl2RWxlbWVudDtcclxudmFyIGRpdlRyYW5zaXRpb25IaXN0b3J5OiBIVE1MRGl2RWxlbWVudDtcclxudmFyIGluZm9EaXY6IEhUTUxEaXZFbGVtZW50O1xyXG5leHBvcnQgdmFyIG1haW5QYWdlOiBIVE1MRGl2RWxlbWVudDtcclxuZXhwb3J0IHZhciBtZW51UGFnZTogSFRNTERpdkVsZW1lbnQ7XHJcbmV4cG9ydCB2YXIgbmV3QXV0b21hdGFQYWdlOiBIVE1MRGl2RWxlbWVudDtcclxuZXhwb3J0IHZhciBzYXZlZEF1dG9tYXRhc1BhZ2U6IEhUTUxEaXZFbGVtZW50O1xyXG5leHBvcnQgdmFyIHNpbXVsYXRvclBhZ2U6IEhUTUxEaXZFbGVtZW50O1xyXG5leHBvcnQgdmFyIGF1dG9tYXRhT3ZlcnZpZXdQYWdlOiBIVE1MRGl2RWxlbWVudFxyXG5leHBvcnQgdmFyIGxvYWRBdXRvbWF0YVBhZ2U6IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuZnVuY3Rpb24gaW5mb0RpdlN3aXRjaCgpOiB2b2lkIHtcclxuICAgIGluZm9EaXYuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcclxuICAgIGluZm9EaXYuY2xhc3NMaXN0LnRvZ2dsZShcImFic29sdXRlXCIpO1xyXG4gICAgaW5mb0Rpdi5jbGFzc0xpc3QudG9nZ2xlKFwidG9wLTBcIik7XHJcbiAgICBpbmZvRGl2LmNsYXNzTGlzdC50b2dnbGUoXCJib3R0b20tMFwiKTtcclxuICAgIGluZm9EaXYuY2xhc3NMaXN0LnRvZ2dsZShcImxlZnQtMFwiKTtcclxuICAgIGluZm9EaXYuY2xhc3NMaXN0LnRvZ2dsZShcIi1yaWdodC0yMFwiKTtcclxuICAgIGluZm9EaXYuY2xhc3NMaXN0LnRvZ2dsZShcIi10cmFuc2xhdGUteC0yMFwiKTtcclxuICAgIGluZm9EaXYuY2xhc3NMaXN0LnRvZ2dsZShcIm1kOi1yaWdodC0wXCIpO1xyXG4gICAgaW5mb0Rpdi5jbGFzc0xpc3QudG9nZ2xlKFwibWQ6LXRyYW5zbGF0ZS14LTBcIik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJFdmVudHMoc3RvcmFnZTogU3RvcmFnZSk6IHZvaWQge1xyXG4gICAgZGl2QXV0b21hdGFEZWZpbml0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdXRvbWF0YURlZmluaXRpb25EaXZcIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBkaXZUcmFuc2l0aW9uSGlzdG9yeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhbnNpdGlvbkhpc3RvcnlEaXZcIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBpbmZvRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvRGl2XCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgbWFpblBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5QYWdlXCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgbWVudVBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVQYWdlXCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgbmV3QXV0b21hdGFQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdBdXRvbWF0YVBhZ2VcIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBzYXZlZEF1dG9tYXRhc1BhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNhdmVkQXV0YW1hdGFzUGFnZVwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIHNpbXVsYXRvclBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpbXVsYXRvclBhZ2VcIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBhdXRvbWF0YU92ZXJ2aWV3UGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXV0b21hdGFPdmVydmlld1BhZ2VcIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBsb2FkQXV0b21hdGFQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkQXV0b21hdGFQYWdlXCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXV0b21hdGFEZWZpbml0aW9uQnV0dG9uXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGRpdkF1dG9tYXRhRGVmaW5pdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIGRpdlRyYW5zaXRpb25IaXN0b3J5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhbnNpdGlvbkhpc3RvcnlCdXR0b25cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgZGl2VHJhbnNpdGlvbkhpc3Rvcnkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIGRpdkF1dG9tYXRhRGVmaW5pdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3dJbmZvQnV0dG9uXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaW5mb0RpdlN3aXRjaCk7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaWRlSW5mb0J1dHRvblwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGluZm9EaXZTd2l0Y2gpO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3QXV0b21hdGFCdXR0b25cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgbWVudVBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIG5ld0F1dG9tYXRhUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVwbG9hZEF1dG9tYXRhQnV0dG9uXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIG1lbnVQYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBsb2FkQXV0b21hdGFQYWdlLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2F2ZWRBdXRvbWF0YXNCdXR0b25cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgbWVudVBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIHNhdmVkQXV0b21hdGFzUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgc3RvcmFnZT8ucHJpbnRBdXRvbWF0YXMoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2F2ZWRBdXRvbWF0YXNCYWNrQnV0dG9uXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIG1lbnVQYWdlLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICBzYXZlZEF1dG9tYXRhc1BhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaWRlT3ZlcnZpZXdCdXR0b25cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgc2F2ZWRBdXRvbWF0YXNQYWdlLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICBhdXRvbWF0YU92ZXJ2aWV3UGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZGVMb2FkQnV0dG9uXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIG1lbnVQYWdlLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICBsb2FkQXV0b21hdGFQYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkS2V5SW5wdXRcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRGaWxlSW5wdXRcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPSBcIlwiO1xyXG4gICAgfSk7XHJcbn0iLCJpbXBvcnQgeyBQdXNoZG93bkF1dG9tYXRhIH0gZnJvbSBcIi4vcHVzaGRvd25BdXRvbWF0YVwiO1xyXG5pbXBvcnQgeyBjaGVja1B1c2hkb3duQXV0b21hdGEgfSBmcm9tIFwiLi9wdXNoZG93bkF1dG9tYXRhQ2hlY2tlclwiO1xyXG5pbXBvcnQgeyBJbnB1dFN5bWJvbCwgU3RhY2tTeW1ib2wsIFN0YXRlLCBUcmFuc2l0aW9uRnVuY3Rpb24sIGNvbXBhcmVJbnB1dFN5bWJvbCwgY29tcGFyZVN0YWNrU3ltYm9sLCBjb21wYXJlU3RhdGUsIGNvbXBhcmVUcmFuc2l0aW9uRnVuY3Rpb24gfSBmcm9tIFwiLi9wdXNoZG93bkF1dG9tYXRhVHlwZXNcIjtcclxuaW1wb3J0IHsgVUkgfSBmcm9tIFwiLi91aVwiO1xyXG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xyXG5pbXBvcnQgeyBtZW51UGFnZSwgbmV3QXV0b21hdGFQYWdlLCBtYWluUGFnZSwgc2ltdWxhdG9yUGFnZX0gZnJvbSBcIi4vZXZlbnRzXCI7XHJcblxyXG50eXBlIGl0ZW1UeXBlID0gU3RhdGUgfCBJbnB1dFN5bWJvbCB8IFN0YWNrU3ltYm9sO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZvcm1BdXRvbWF0YUJ1aWxkZXIge1xyXG4gICAgcHJpdmF0ZSBzdG9yYWdlOiBTdG9yYWdlO1xyXG4gICAgcHJpdmF0ZSB1aTogVUk7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0ZXM6IFN0YXRlW11cclxuICAgIHByaXZhdGUgaW5wdXRTeW1ib2xzOiBJbnB1dFN5bWJvbFtdXHJcbiAgICBwcml2YXRlIHN0YWNrU3ltYm9sczogU3RhY2tTeW1ib2xbXVxyXG4gICAgcHJpdmF0ZSBpbml0aWFsU3RhdGU/OiBTdGF0ZTtcclxuICAgIHByaXZhdGUgaW5pdGlhbFN0YWNrU3ltYm9sPzogU3RhY2tTeW1ib2w7XHJcbiAgICBwcml2YXRlIGFjY2VwdGluZ1N0YXRlczogU3RhdGVbXSB8IG51bGxcclxuICAgIHByaXZhdGUgdHJhbnNpdGlvbkZ1bmN0aW9uczogVHJhbnNpdGlvbkZ1bmN0aW9uW11cclxuXHJcbiAgICBwcml2YXRlIHN0YXRlc0RpdjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGlucHV0U3ltYm9sRGl2OiBIVE1MRGl2RWxlbWVudDtcclxuICAgIHByaXZhdGUgc3RhY2tTeW1ib2xEaXY6IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSB0cmFuc2l0aW9uRnVuY3Rpb25EaXY6IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICAgIHByaXZhdGUgaW5pdGlhbFN0YXRlU2VsZWN0OiBIVE1MU2VsZWN0RWxlbWVudDtcclxuICAgIHByaXZhdGUgaW5pdGlhbFN0YWNrU3ltYm9sU2VsZWN0OiBIVE1MU2VsZWN0RWxlbWVudDtcclxuICAgIHByaXZhdGUgYWNjZXB0aW5nU3RhdGVzU2VsZWN0OiBIVE1MU2VsZWN0RWxlbWVudDtcclxuXHJcbiAgICBwcml2YXRlIGtleUVycm9yOiBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICAgIHByaXZhdGUgc3RhdGVFcnJvcjogSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGlucHV0U3ltYm9sRXJyb3I6IEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBzdGFja1N5bWJvbEVycm9yOiBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICAgIHByaXZhdGUgaW5pdGlhbFN0YXRlRXJyb3I6IEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBpbml0aWFsU3RhY2tTeW1ib2xFcnJvcjogSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGFjY2VwdGluZ1N0YXRlRXJyb3I6IEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSB0cmFuc2l0aW9uRnVuY3Rpb25FcnJvcjogSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSBrZXlib2FyZFN0YXRlOiBIVE1MRGl2RWxlbWVudDtcclxuICAgIHByaXZhdGUga2V5Ym9hcmRJbnB1dFN5bWJvbDogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGtleWJvYXJkU3RhY2tTeW1ib2w6IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBrZXlib2FyZERlbGV0ZUJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSB0cmFuc2l0aW9uRnVuY3Rpb25QYXJ0czogSFRNTFBhcmFncmFwaEVsZW1lbnRbXTtcclxuXHJcbiAgICBwcml2YXRlIGFjdGl2ZVBhcnQ6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIGtleUlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHN0b3JhZ2U6IFN0b3JhZ2UsIHVpOiBVSSl7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcclxuICAgICAgICB0aGlzLnVpID0gdWk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGVzID0gW107XHJcbiAgICAgICAgdGhpcy5pbnB1dFN5bWJvbHMgPSBbXTtcclxuICAgICAgICB0aGlzLnN0YWNrU3ltYm9scyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYWNjZXB0aW5nU3RhdGVzID0gbnVsbDtcclxuICAgICAgICB0aGlzLnRyYW5zaXRpb25GdW5jdGlvbnMgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZXNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3QXV0b21hdGFTdGF0ZXMnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICB0aGlzLmlucHV0U3ltYm9sRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0F1dG9tYXRhSW5wdXRTeW1ib2xzJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5zdGFja1N5bWJvbERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdBdXRvbWF0YVN0YWNrU3ltYm9scycpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0F1dG9tYXRhVHJhbnN0aXRpb25GdW5jdGlvbnMnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0aWFsU3RhdGVTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3QXV0b21hdGFJbml0aWFsU3RhdGVTZWxlY3QnKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcclxuICAgICAgICB0aGlzLmluaXRpYWxTdGFja1N5bWJvbFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdBdXRvbWF0YUluaXRpYWxTdGFja1N5bWJvbFNlbGVjdCcpIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuYWNjZXB0aW5nU3RhdGVzU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0F1dG9tYXRhQWNjZXB0aW5nU3RhdGVzU2VsZWN0JykgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIHRoaXMua2V5RXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna2V5RXJyb3InKSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICAgICAgICB0aGlzLnN0YXRlRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdGVFcnJvcicpIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuaW5wdXRTeW1ib2xFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dFN5bWJvbEVycm9yJykgYXMgSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5zdGFja1N5bWJvbEVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YWNrU3ltYm9sRXJyb3InKSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICAgICAgICB0aGlzLmluaXRpYWxTdGF0ZUVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luaXRpYWxTdGF0ZUVycm9yJykgYXMgSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsU3RhY2tTeW1ib2xFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbml0aWFsU3RhY2tTeW1ib2xFcnJvcicpIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuYWNjZXB0aW5nU3RhdGVFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY2NlcHRpbmdTdGF0ZUVycm9yJykgYXMgSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25FcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFuc2l0aW9uRnVuY3Rpb25FcnJvcicpIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy5rZXlib2FyZFN0YXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2tleWJvYXJkU3RhdGUnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICB0aGlzLmtleWJvYXJkSW5wdXRTeW1ib2wgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna2V5Ym9hcmRJbnB1dFN5bWJvbCcpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIHRoaXMua2V5Ym9hcmRTdGFja1N5bWJvbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrZXlib2FyZFN0YWNrU3ltYm9sJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBcclxuICAgICAgICB0aGlzLnRyYW5zaXRpb25GdW5jdGlvblBhcnRzID0gW107XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25QYXJ0cy5wdXNoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFuc3RpdGlvbkZyb21TdGF0ZScpIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50KTtcclxuICAgICAgICB0aGlzLnRyYW5zaXRpb25GdW5jdGlvblBhcnRzLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyYW5zdGlvblBvcFN5bWJvbCcpIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50KTtcclxuICAgICAgICB0aGlzLnRyYW5zaXRpb25GdW5jdGlvblBhcnRzLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyYW5zaXRpb25TeW1ib2wnKSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25QYXJ0cy5wdXNoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFuc2l0aW9uVG9TdGF0ZScpIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50KTtcclxuICAgICAgICB0aGlzLnRyYW5zaXRpb25GdW5jdGlvblBhcnRzLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyYW5zaXRpb25QdXNoU3ltYm9scycpIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50KTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmVQYXJ0ID0gLTE7XHJcblxyXG4gICAgICAgIHRoaXMua2V5Ym9hcmRJbnB1dFN5bWJvbC5hcHBlbmQodGhpcy5jcmVhdGVLZXlib2FyZEJ1dHRvbih7aXNFcHN5bG9uOiB0cnVlfSwgMSkpO1xyXG4gICAgICAgIHRoaXMua2V5Ym9hcmREZWxldGVCdXR0b24gPSB0aGlzLmNyZWF0ZUtleWJvYXJkQnV0dG9uKHt2YWx1ZTogJ+KGkCd9LCAzKTtcclxuICAgICAgICB0aGlzLmtleWJvYXJkRGVsZXRlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB0aGlzLmtleWJvYXJkU3RhY2tTeW1ib2wuYXBwZW5kKHRoaXMua2V5Ym9hcmREZWxldGVCdXR0b24pO1xyXG5cclxuICAgICAgICB0aGlzLmtleUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0F1dG9tYXRhS2V5JykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckV2ZW50cygpe1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdBdXRvbWF0YVN0YXRlRm9ybScpPy5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLnN0YXRlRm9ybVN1Ym1pdEhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0F1dG9tYXRhSW5wdXRTeW1ib2xGb3JtJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuaW5wdXRTeW1ib2xTdWJtaXRIYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdBdXRvbWF0YVN0YWNrU3ltYm9sRm9ybScpPy5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLnN0YWNrU3ltYm9sU3VibWl0SGFuZGxlci5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxTdGF0ZVNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmluaXRpYWxTdGF0ZUNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsU3RhY2tTeW1ib2xTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5pbml0aWFsU3RhY2tTeW1ib2xDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY2NlcHRhbmNlRW1wdHlTdGFja0NoZWNrQm94Jyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hY2NlcHRpbmdTdGF0ZUVtcHR5Q2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLmFjY2VwdGluZ1N0YXRlc1NlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmFjY2VwdGluZ1N0YXRlc0NoYW5nZUhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUcmFuc2l0aW9uRnVuY3Rpb25cIik/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25BZGRIYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydHNbMF0/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBFdmVudCkgPT4ge3RoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydENoYW5nZUhhbmRsZXIoZXZlbnQsIDApfSk7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25QYXJ0c1sxXT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IEV2ZW50KSA9PiB7dGhpcy50cmFuc2l0aW9uRnVuY3Rpb25QYXJ0Q2hhbmdlSGFuZGxlcihldmVudCwgMSl9KTtcclxuICAgICAgICB0aGlzLnRyYW5zaXRpb25GdW5jdGlvblBhcnRzWzJdPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogRXZlbnQpID0+IHt0aGlzLnRyYW5zaXRpb25GdW5jdGlvblBhcnRDaGFuZ2VIYW5kbGVyKGV2ZW50LCAyKX0pO1xyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydHNbM10/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBFdmVudCkgPT4ge3RoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydENoYW5nZUhhbmRsZXIoZXZlbnQsIDMpfSk7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25QYXJ0c1s0XT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IEV2ZW50KSA9PiB7dGhpcy50cmFuc2l0aW9uRnVuY3Rpb25QYXJ0Q2hhbmdlSGFuZGxlcihldmVudCwgNCl9KTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVHJhbnNpdGlvbkZ1bmN0aW9uQnV0dG9uJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25BZGRIYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdBdXRvbWF0YVNhdmVCdXR0b24nKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNhdmVFdmVudEhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXQoKXtcclxuICAgICAgICAvL2RpdnNcclxuICAgICAgICB0aGlzLnN0YXRlc0Rpdi5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB0aGlzLmlucHV0U3ltYm9sRGl2LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHRoaXMuc3RhY2tTeW1ib2xEaXYuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25EaXYuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgLy9pbnB1dHNcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXRlSW5wdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9ICcnO1xyXG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRTeW1ib2xJbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID0gJyc7XHJcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFja1N5bWJvbElucHV0JykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPSAnJztcclxuICAgICAgICAvL3NlbGVjdHNcclxuICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gJyc7XHJcbiAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9ICdDaG9vc2UgaW5pdGlhbCBzdGF0ZSAuLi4nO1xyXG4gICAgICAgIG9wdGlvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICBvcHRpb24uaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmluaXRpYWxTdGF0ZVNlbGVjdC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB0aGlzLmluaXRpYWxTdGF0ZVNlbGVjdC5hcHBlbmQob3B0aW9uKTtcclxuICAgICAgICBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICBvcHRpb24udmFsdWUgPSAnJztcclxuICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gJ0Nob29zZSBpbml0aWFsIHN0YWNrIHN5bWJvbC4uLic7XHJcbiAgICAgICAgb3B0aW9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIG9wdGlvbi5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbFN0YWNrU3ltYm9sU2VsZWN0LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbFN0YWNrU3ltYm9sU2VsZWN0LmFwcGVuZChvcHRpb24pO1xyXG4gICAgICAgIHRoaXMuYWNjZXB0aW5nU3RhdGVzU2VsZWN0LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHRoaXMuYWNjZXB0aW5nU3RhdGVzU2VsZWN0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAvL2NoZWNrYm94XHJcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY2NlcHRhbmNlRW1wdHlTdGFja0NoZWNrQm94JykgYXMgSFRNTElucHV0RWxlbWVudCkuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgLy90cmFuc2l0aW9uIGZ1bmN0aW9uIHBhcnRzXHJcbiAgICAgICAgZm9yKGxldCB0IG9mIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydHMpe1xyXG4gICAgICAgICAgICB0LmlubmVyVGV4dCA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2tleWJvYXJkXHJcbiAgICAgICAgdGhpcy5rZXlib2FyZFN0YXRlLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHRoaXMua2V5Ym9hcmRJbnB1dFN5bWJvbC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB0aGlzLmtleWJvYXJkSW5wdXRTeW1ib2wuYXBwZW5kKHRoaXMuY3JlYXRlS2V5Ym9hcmRCdXR0b24oe2lzRXBzeWxvbjogdHJ1ZX0sIDEpKTtcclxuICAgICAgICB0aGlzLmtleWJvYXJkU3RhY2tTeW1ib2wuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgdGhpcy5rZXlib2FyZFN0YWNrU3ltYm9sLmFwcGVuZCh0aGlzLmtleWJvYXJkRGVsZXRlQnV0dG9uKTtcclxuICAgICAgICB0aGlzLmtleWJvYXJkRGVsZXRlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAvL2Vycm9yc1xyXG4gICAgICAgIHRoaXMuc3RhdGVFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHRoaXMuc3RhY2tTeW1ib2xFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHRoaXMuaW5wdXRTeW1ib2xFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbFN0YXRlRXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB0aGlzLmFjY2VwdGluZ1N0YXRlRXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB0aGlzLmluaXRpYWxTdGF0ZUVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsU3RhY2tTeW1ib2xFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uRXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0ZUZvcm1TdWJtaXRIYW5kbGVyKGV2ZW50OiBTdWJtaXRFdmVudCl7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgZm9ybSA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRm9ybUVsZW1lbnQ7XHJcbiAgICAgICAgbGV0IGlucHV0RmllbGQgPSBmb3JtLmVsZW1lbnRzLm5hbWVkSXRlbSgnc3RhdGVJbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgbGV0IGlucHV0VmFsdWUgPSBpbnB1dEZpZWxkLnZhbHVlO1xyXG4gICAgICAgIGlucHV0RmllbGQudmFsdWUgPSAnJztcclxuICAgICAgICBsZXQgaXRlbTogU3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBpbnB1dFZhbHVlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5uZXdJdGVtPFN0YXRlPihjb21wYXJlU3RhdGUsIGl0ZW0sICdTdGF0ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0U3ltYm9sU3VibWl0SGFuZGxlcihldmVudDogU3VibWl0RXZlbnQpe1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGZvcm0gPSBldmVudC50YXJnZXQgYXMgSFRNTEZvcm1FbGVtZW50O1xyXG4gICAgICAgIGxldCBpbnB1dEZpZWxkID0gZm9ybS5lbGVtZW50cy5uYW1lZEl0ZW0oJ2lucHV0U3ltYm9sSW5wdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIGxldCBpbnB1dFZhbHVlID0gaW5wdXRGaWVsZC52YWx1ZTtcclxuICAgICAgICBpbnB1dEZpZWxkLnZhbHVlID0gJyc7XHJcbiAgICAgICAgbGV0IGl0ZW06IElucHV0U3ltYm9sID0ge1xyXG4gICAgICAgICAgICBpc0Vwc3lsb246IGZhbHNlLFxyXG4gICAgICAgICAgICB2YWx1ZTogaW5wdXRWYWx1ZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubmV3SXRlbTxJbnB1dFN5bWJvbD4oY29tcGFyZUlucHV0U3ltYm9sLCBpdGVtLCAnSW5wdXRTeW1ib2wnKTtcclxuICAgIH07XHJcblxyXG4gICAgc3RhY2tTeW1ib2xTdWJtaXRIYW5kbGVyKGV2ZW50OiBTdWJtaXRFdmVudCl7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgZm9ybSA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRm9ybUVsZW1lbnQ7XHJcbiAgICAgICAgbGV0IGlucHV0RmllbGQgPSBmb3JtLmVsZW1lbnRzLm5hbWVkSXRlbSgnc3RhY2tTeW1ib2xJbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgbGV0IGlucHV0VmFsdWUgPSBpbnB1dEZpZWxkLnZhbHVlO1xyXG4gICAgICAgIGlucHV0RmllbGQudmFsdWUgPSAnJztcclxuICAgICAgICBsZXQgaXRlbTogU3RhY2tTeW1ib2wgPSB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBpbnB1dFZhbHVlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5uZXdJdGVtPFN0YWNrU3ltYm9sPihjb21wYXJlU3RhY2tTeW1ib2wsIGl0ZW0sICdTdGFja1N5bWJvbCcpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpbml0aWFsU3RhdGVDaGFuZ2VIYW5kbGVyKGV2ZW50OiBFdmVudCl7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgc2VsZWN0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxTZWxlY3RFbGVtZW50O1xyXG4gICAgICAgIGxldCBzZWxlY3RlZE9wdGlvbiA9IHNlbGVjdC5vcHRpb25zW3NlbGVjdC5zZWxlY3RlZEluZGV4XTtcclxuICAgICAgICBpZihzZWxlY3RlZE9wdGlvbi52YWx1ZSA9PT0gJycpe1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxTdGF0ZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogc2VsZWN0ZWRPcHRpb24udmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxTdGF0ZSA9IGl0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpbml0aWFsU3RhY2tTeW1ib2xDaGFuZ2VIYW5kbGVyKGV2ZW50OiBFdmVudCl7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgc2VsZWN0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxTZWxlY3RFbGVtZW50O1xyXG4gICAgICAgIGxldCBzZWxlY3RlZE9wdGlvbiA9IHNlbGVjdC5vcHRpb25zW3NlbGVjdC5zZWxlY3RlZEluZGV4XTtcclxuICAgICAgICBpZihzZWxlY3RlZE9wdGlvbi52YWx1ZSA9PT0gJycpe1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxTdGFja1N5bWJvbCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogc2VsZWN0ZWRPcHRpb24udmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxTdGFja1N5bWJvbCA9IGl0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBhY2NlcHRpbmdTdGF0ZUVtcHR5Q2hhbmdlSGFuZGxlcihldmVudDogRXZlbnQpe1xyXG4gICAgICAgIGxldCBjaGVja2JveCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIGlmKGNoZWNrYm94LmNoZWNrZWQpe1xyXG4gICAgICAgICAgICBmb3IobGV0IGEgb2YgdGhpcy5zdGF0ZXMpe1xyXG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuYWNjZXB0aW5nU3RhdGVzU2VsZWN0Lm9wdGlvbnMubmFtZWRJdGVtKFwiYWNjZXB0aW5nU3RhdGVPcHRpb25cIiArIGEudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgaWYob3B0aW9uKXtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmFjY2VwdGluZ1N0YXRlcyA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuYWNjZXB0aW5nU3RhdGVzU2VsZWN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuYWNjZXB0aW5nU3RhdGVzID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuYWNjZXB0aW5nU3RhdGVzU2VsZWN0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgYWNjZXB0aW5nU3RhdGVzQ2hhbmdlSGFuZGxlcihldmVudDogRXZlbnQpe1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5hY2NlcHRpbmdTdGF0ZXMgPSBbXTtcclxuICAgICAgICBmb3IobGV0IGEgb2YgdGhpcy5zdGF0ZXMpe1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5hY2NlcHRpbmdTdGF0ZXNTZWxlY3Qub3B0aW9ucy5uYW1lZEl0ZW0oXCJhY2NlcHRpbmdTdGF0ZU9wdGlvblwiICsgYS52YWx1ZSk7XHJcbiAgICAgICAgICAgIGlmKG9wdGlvbil7XHJcbiAgICAgICAgICAgICAgICBpZihvcHRpb24uc2VsZWN0ZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWNjZXB0aW5nU3RhdGVzPy5wdXNoKGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYWNjZXB0aW5nU3RhdGVzKTtcclxuICAgIH07XHJcblxyXG4gICAgdHJhbnNpdGlvbkZ1bmN0aW9uQWRkSGFuZGxlcihldmVudDogRXZlbnQpe1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDQ7IGkrKyl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydHNbaV0uaW5uZXJUZXh0ID09PSAnJyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25GdW5jdGlvbkVycm9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25FcnJvci5pbm5lclRleHQgPSAnRXJyb3I6IEZpcnN0IDQgZmllbGRzIG11c3QgYmUgZmlsbGVkJztcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZnJvbVN0YXRlID0ge3ZhbHVlOiB0aGlzLnRyYW5zaXRpb25GdW5jdGlvblBhcnRzWzBdLmlubmVyVGV4dH07XHJcbiAgICAgICAgbGV0IHN0YXJ0U3ltYm9sID0ge3ZhbHVlOiB0aGlzLnRyYW5zaXRpb25GdW5jdGlvblBhcnRzWzFdLmlubmVyVGV4dH07XHJcbiAgICAgICAgbGV0IGlucHV0U3ltYm9sID0gdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25QYXJ0c1syXS5pbm5lclRleHQgPT09ICfOtScgPyB7aXNFcHN5bG9uOiB0cnVlfSA6IHtpc0Vwc3lsb246IGZhbHNlLCB2YWx1ZTogdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25QYXJ0c1syXS5pbm5lclRleHR9O1xyXG4gICAgICAgIGxldCB0b1N0YXRlID0ge3ZhbHVlOiB0aGlzLnRyYW5zaXRpb25GdW5jdGlvblBhcnRzWzNdLmlubmVyVGV4dH07XHJcbiAgICAgICAgbGV0IHB1c2hlZFN5bWJvbHMgPSB0aGlzLnRyYW5zaXRpb25GdW5jdGlvblBhcnRzWzRdLmlubmVySFRNTC5zcGxpdCgnJykubWFwKChzKSA9PiB7cmV0dXJuIHt2YWx1ZTogc319KTtcclxuICAgICAgICBsZXQgaXRlbTogVHJhbnNpdGlvbkZ1bmN0aW9uID0ge1xyXG4gICAgICAgICAgICBmcm9tU3RhdGU6IGZyb21TdGF0ZSxcclxuICAgICAgICAgICAgc3RhcnRTeW1ib2w6IHN0YXJ0U3ltYm9sLFxyXG4gICAgICAgICAgICBpbnB1dFN5bWJvbDogaW5wdXRTeW1ib2wsXHJcbiAgICAgICAgICAgIHRvU3RhdGU6IHRvU3RhdGUsXHJcbiAgICAgICAgICAgIHB1c2hlZFN5bWJvbHM6IHB1c2hlZFN5bWJvbHMsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBmb3IobGV0IHQgb2YgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25zKXtcclxuICAgICAgICAgICAgaWYoY29tcGFyZVRyYW5zaXRpb25GdW5jdGlvbih0LCBpdGVtKSl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0LCBpdGVtKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uRXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25EaXYuYXBwZW5kKHRoaXMuY3JlYXRlVHJhbnNpdGlvbkZ1bmN0aW9uRGl2KGl0ZW0pKTtcclxuICAgICAgICB0aGlzLnRyYW5zaXRpb25GdW5jdGlvbkVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgICAgIGZvcihsZXQgdCBvZiB0aGlzLnRyYW5zaXRpb25GdW5jdGlvblBhcnRzKXtcclxuICAgICAgICAgICAgdC5pbm5lclRleHQgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlVHJhbnNpdGlvbkZ1bmN0aW9uRGl2KGl0ZW06IFRyYW5zaXRpb25GdW5jdGlvbik6IEhUTUxEaXZFbGVtZW50e1xyXG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZmxleCcsICdwLTInLCAnYmctc2xhdGUtMTAwJywgJ3JvdW5kZWQnLCAnbS0yJywgJ2ZsZXgtcm93JywgJ2p1c3RpZnktY2VudGVyJywgJ2l0ZW1zLWNlbnRlcicpO1xyXG4gICAgICAgIGxldCB0ID0gVUkuZ2VuZXJhdGVUcmFuc2l0aW9uRnVuY3Rpb24oaXRlbSk7XHJcbiAgICAgICAgZGl2LmFwcGVuZCh0KTtcclxuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3JvdW5kZWQtZnVsbCcsICdiZy1zbGF0ZS0zMDAnLCAndy02JywgJ2gtNicsICdtbC0yJyk7XHJcbiAgICAgICAgYnV0dG9uLmlubmVyVGV4dCA9ICdYJztcclxuICAgICAgICBkaXYuYXBwZW5kKGJ1dHRvbik7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kZWxldGVUcmFuc2l0aW9uRnVuY3Rpb24uYmluZCh0aGlzLCBpdGVtLCBkaXYpKTtcclxuICAgICAgICByZXR1cm4gZGl2O1xyXG4gICAgfVxyXG5cclxuICAgIG5ld0l0ZW08VCBleHRlbmRzIGl0ZW1UeXBlPihjb21wYXJlRnVuY3Rpb246IChhcmcxOiBULCBhcmcyOiBUKSA9PiBib29sZWFuLCBpdGVtOiBULCB0eXBlOiBzdHJpbmcpOiB2b2lke1xyXG4gICAgICAgIGxldCBhcnIgOiBUW107XHJcbiAgICAgICAgbGV0IGVycm9yOiBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICAgICAgICBsZXQgZXJyb3JNc2c6IHN0cmluZztcclxuICAgICAgICBpZih0eXBlID09PSAnU3RhdGUnKXtcclxuICAgICAgICAgICAgYXJyID0gdGhpcy5zdGF0ZXMgYXMgVFtdO1xyXG4gICAgICAgICAgICBlcnJvciA9IHRoaXMuc3RhdGVFcnJvcjtcclxuICAgICAgICAgICAgZXJyb3JNc2cgPSAnRXJyb3I6IFN0YXRlIGFscmVhZHkgZXhpc3RzJztcclxuICAgICAgICB9IGVsc2UgaWYodHlwZSA9PT0gJ0lucHV0U3ltYm9sJyl7XHJcbiAgICAgICAgICAgIGFyciA9IHRoaXMuaW5wdXRTeW1ib2xzIGFzIFRbXTtcclxuICAgICAgICAgICAgZXJyb3IgPSB0aGlzLmlucHV0U3ltYm9sRXJyb3I7XHJcbiAgICAgICAgICAgIGVycm9yTXNnID0gJ0Vycm9yOiBJbnB1dCBzeW1ib2wgYWxyZWFkeSBleGlzdHMnO1xyXG4gICAgICAgIH0gZWxzZSBpZih0eXBlID09PSAnU3RhY2tTeW1ib2wnKXtcclxuICAgICAgICAgICAgYXJyID0gdGhpcy5zdGFja1N5bWJvbHMgYXMgVFtdO1xyXG4gICAgICAgICAgICBlcnJvciA9IHRoaXMuc3RhY2tTeW1ib2xFcnJvcjtcclxuICAgICAgICAgICAgZXJyb3JNc2cgPSAnRXJyb3I6IFN0YWNrIHN5bWJvbCBhbHJlYWR5IGV4aXN0cyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBleGlzdHMgPSBmYWxzZTtcclxuICAgICAgICBmb3IobGV0IGkgb2YgYXJyKXtcclxuICAgICAgICAgICAgaWYoY29tcGFyZUZ1bmN0aW9uKGksIGl0ZW0pKXtcclxuICAgICAgICAgICAgICAgIGV4aXN0cyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZighZXhpc3RzKXtcclxuICAgICAgICAgICAgYXJyLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2ZsZXgnLCAncC0yJywgJ2JnLXNsYXRlLTEwMCcsICdyb3VuZGVkJywgJ20tMicpO1xyXG4gICAgICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgcC5jbGFzc0xpc3QuYWRkKCdwci0yJyk7XHJcbiAgICAgICAgICAgIHAuaW5uZXJUZXh0ID0gaXRlbS52YWx1ZSA/PyAnzrUnO1xyXG4gICAgICAgICAgICBkaXYuYXBwZW5kKHApO1xyXG4gICAgICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyb3VuZGVkLWZ1bGwnLCAnYmctc2xhdGUtMzAwJywgJ3ctNicsICdoLTYnKTtcclxuICAgICAgICAgICAgYnV0dG9uLmlubmVyVGV4dCA9ICdYJztcclxuICAgICAgICAgICAgZGl2LmFwcGVuZChidXR0b24pO1xyXG4gICAgICAgICAgICBpZih0eXBlID09PSAnU3RhdGUnKXtcclxuICAgICAgICAgICAgICAgIGxldCBrZXlib2FyZEJ1dHRvbiA9IHRoaXMuY3JlYXRlS2V5Ym9hcmRCdXR0b24oaXRlbSwwKTtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZGVsZXRlU3RhdGUuYmluZCh0aGlzLCBpdGVtLCBkaXYsIGtleWJvYXJkQnV0dG9uKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlc0Rpdi5hcHBlbmQoZGl2KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVBZGRlZChpdGVtIGFzIFN0YXRlLCBrZXlib2FyZEJ1dHRvbik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZih0eXBlID09PSAnSW5wdXRTeW1ib2wnKXtcclxuICAgICAgICAgICAgICAgIGxldCBrZXlib2FyZEJ1dHRvbiA9IHRoaXMuY3JlYXRlS2V5Ym9hcmRCdXR0b24oaXRlbSwxKTtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZGVsZXRlSW5wdXRTeW1ib2wuYmluZCh0aGlzLCBpdGVtLCBkaXYsIGtleWJvYXJkQnV0dG9uKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0U3ltYm9sRGl2LmFwcGVuZChkaXYpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dFN5bWJvbEFkZGVkKGl0ZW0gYXMgSW5wdXRTeW1ib2wsIGtleWJvYXJkQnV0dG9uKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHR5cGUgPT09ICdTdGFja1N5bWJvbCcpe1xyXG4gICAgICAgICAgICAgICAgbGV0IGtleWJvYXJkQnV0dG9uID0gdGhpcy5jcmVhdGVLZXlib2FyZEJ1dHRvbihpdGVtLDIpO1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kZWxldGVTdGFja1N5bWJvbC5iaW5kKHRoaXMsIGl0ZW0sIGRpdiwga2V5Ym9hcmRCdXR0b24pKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhY2tTeW1ib2xEaXYuYXBwZW5kKGRpdik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YWNrU3ltYm9sQWRkZWQoaXRlbSBhcyBTdGFja1N5bWJvbCwga2V5Ym9hcmRCdXR0b24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGVycm9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICBlcnJvci5pbm5lclRleHQgPSBlcnJvck1zZztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlU3RhdGUoaXRlbTogU3RhdGUsIGRpdjogSFRNTERpdkVsZW1lbnQsIGtleWJvYXJkQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCl7XHJcbiAgICAgICAgdGhpcy5zdGF0ZXNEaXYucmVtb3ZlQ2hpbGQoZGl2KTtcclxuICAgICAgICB0aGlzLnN0YXRlcy5zcGxpY2UodGhpcy5zdGF0ZXMuaW5kZXhPZihpdGVtKSwgMSk7XHJcbiAgICAgICAgaWYoY29tcGFyZVN0YXRlKHRoaXMuaW5pdGlhbFN0YXRlLCBpdGVtKSl7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFN0YXRlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFjY2VwdGluZ1N0YXRlcyA9IHRoaXMuYWNjZXB0aW5nU3RhdGVzPy5maWx0ZXIoYSA9PiAhY29tcGFyZVN0YXRlKGEsIGl0ZW0pKSA/PyBudWxsO1xyXG4gICAgICAgIHRoaXMuc3RhdGVEZWxldGVkKGl0ZW0pO1xyXG4gICAgICAgIGtleWJvYXJkQnV0dG9uLnJlbW92ZSgpO1xyXG4gICAgICAgIC8vVE9ETzogQ2xlYXIgZGl2XHJcbiAgICAgICAgLy9OT1RFOiBJIGRvbid0IGtub3cgd2hhdCB0aGlzIFRPRE8gbWVhbnNcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVJbnB1dFN5bWJvbChpdGVtOiBJbnB1dFN5bWJvbCwgZGl2OiBIVE1MRGl2RWxlbWVudCwga2V5Ym9hcmRCdXR0b246IEhUTUxCdXR0b25FbGVtZW50KXtcclxuICAgICAgICB0aGlzLmlucHV0U3ltYm9sRGl2LnJlbW92ZUNoaWxkKGRpdik7XHJcbiAgICAgICAgdGhpcy5pbnB1dFN5bWJvbHMuc3BsaWNlKHRoaXMuaW5wdXRTeW1ib2xzLmluZGV4T2YoaXRlbSksIDEpO1xyXG4gICAgICAgIHRoaXMuaW5wdXRTeW1ib2xEZWxldGVkKGl0ZW0pO1xyXG4gICAgICAgIGtleWJvYXJkQnV0dG9uLnJlbW92ZSgpO1xyXG4gICAgICAgIC8vVE9ETzogQ2xlYXIgZGl2XHJcbiAgICAgICAgLy9OT1RFOiBJIGRvbid0IGtub3cgd2hhdCB0aGlzIFRPRE8gbWVhbnNcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVTdGFja1N5bWJvbChpdGVtOiBTdGFja1N5bWJvbCwgZGl2OiBIVE1MRGl2RWxlbWVudCwga2V5Ym9hcmRCdXR0b246IEhUTUxCdXR0b25FbGVtZW50KXtcclxuICAgICAgICB0aGlzLnN0YWNrU3ltYm9sRGl2LnJlbW92ZUNoaWxkKGRpdik7XHJcbiAgICAgICAgdGhpcy5zdGFja1N5bWJvbHMuc3BsaWNlKHRoaXMuc3RhY2tTeW1ib2xzLmluZGV4T2YoaXRlbSksIDEpO1xyXG4gICAgICAgIGlmKGNvbXBhcmVTdGFja1N5bWJvbCh0aGlzLmluaXRpYWxTdGFja1N5bWJvbCwgaXRlbSkpe1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxTdGFja1N5bWJvbCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGFja1N5bWJvbERlbGV0ZWQoaXRlbSk7XHJcbiAgICAgICAga2V5Ym9hcmRCdXR0b24ucmVtb3ZlKCk7XHJcbiAgICAgICAgLy9UT0RPOiBDbGVhciBkaXZcclxuICAgICAgICAvL05PVEU6IEkgZG9uJ3Qga25vdyB3aGF0IHRoaXMgVE9ETyBtZWFuc1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVRyYW5zaXRpb25GdW5jdGlvbihpdGVtOiBUcmFuc2l0aW9uRnVuY3Rpb24sIGRpdjogSFRNTERpdkVsZW1lbnQpe1xyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uRGl2LnJlbW92ZUNoaWxkKGRpdik7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25zLnNwbGljZSh0aGlzLnRyYW5zaXRpb25GdW5jdGlvbnMuaW5kZXhPZihpdGVtKSwgMSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRlQWRkZWQoaXRlbTogU3RhdGUsIGtleWJvYXJkQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCl7XHJcbiAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IGl0ZW0udmFsdWU7XHJcbiAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IGl0ZW0udmFsdWU7XHJcbiAgICAgICAgb3B0aW9uLmlkID0gXCJpbml0aWFsU3RhdGVPcHRpb25cIiArIGl0ZW0udmFsdWU7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsU3RhdGVTZWxlY3QuYXBwZW5kKG9wdGlvbik7XHJcblxyXG4gICAgICAgIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IGl0ZW0udmFsdWU7XHJcbiAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IGl0ZW0udmFsdWU7XHJcbiAgICAgICAgb3B0aW9uLmlkID0gXCJhY2NlcHRpbmdTdGF0ZU9wdGlvblwiICsgaXRlbS52YWx1ZTtcclxuICAgICAgICB0aGlzLmFjY2VwdGluZ1N0YXRlc1NlbGVjdC5hcHBlbmQob3B0aW9uKTtcclxuXHJcbiAgICAgICAgdGhpcy5rZXlib2FyZFN0YXRlLmFwcGVuZChrZXlib2FyZEJ1dHRvbik7XHJcblxyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkNoZWNrKCk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBpbnB1dFN5bWJvbEFkZGVkKGl0ZW06IElucHV0U3ltYm9sLCBrZXlib2FyZEJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQpe1xyXG4gICAgICAgIHRoaXMua2V5Ym9hcmRJbnB1dFN5bWJvbC5hcHBlbmQoa2V5Ym9hcmRCdXR0b24pO1xyXG5cclxuICAgICAgICB0aGlzLnRyYW5zaXRpb25DaGVjaygpO1xyXG4gICAgfTtcclxuXHJcbiAgICBzdGFja1N5bWJvbEFkZGVkKGl0ZW06IFN0YWNrU3ltYm9sLCBrZXlib2FyZEJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQpe1xyXG4gICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICBvcHRpb24udmFsdWUgPSBpdGVtLnZhbHVlO1xyXG4gICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBpdGVtLnZhbHVlO1xyXG4gICAgICAgIG9wdGlvbi5pZCA9IFwic3RhY2tTeW1ib2xPcHRpb25cIiArIGl0ZW0udmFsdWU7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsU3RhY2tTeW1ib2xTZWxlY3QuYXBwZW5kKG9wdGlvbik7XHJcblxyXG4gICAgICAgIHRoaXMua2V5Ym9hcmRTdGFja1N5bWJvbC5hcHBlbmQoa2V5Ym9hcmRCdXR0b24pO1xyXG5cclxuICAgICAgICB0aGlzLnRyYW5zaXRpb25DaGVjaygpO1xyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0ZURlbGV0ZWQoaXRlbTogU3RhdGUpe1xyXG4gICAgICAgIGxldCBvcHRpb24gPSB0aGlzLmluaXRpYWxTdGF0ZVNlbGVjdC5vcHRpb25zLm5hbWVkSXRlbShcImluaXRpYWxTdGF0ZU9wdGlvblwiICsgaXRlbS52YWx1ZSlcclxuICAgICAgICBpZihvcHRpb24pe1xyXG4gICAgICAgICAgICBpZihvcHRpb24uc2VsZWN0ZWQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsU3RhdGVTZWxlY3Qub3B0aW9uc1swXS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3B0aW9uLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgb3B0aW9uMiA9IHRoaXMuYWNjZXB0aW5nU3RhdGVzU2VsZWN0Lm9wdGlvbnMubmFtZWRJdGVtKFwiYWNjZXB0aW5nU3RhdGVPcHRpb25cIiArIGl0ZW0udmFsdWUpXHJcbiAgICAgICAgaWYob3B0aW9uMil7XHJcbiAgICAgICAgICAgIG9wdGlvbjIucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydHNbMF0uaW5uZXJUZXh0ID09PSBpdGVtLnZhbHVlKXtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25QYXJ0c1swXS5pbm5lclRleHQgPSAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy50cmFuc2l0aW9uRnVuY3Rpb25QYXJ0c1szXS5pbm5lclRleHQgPT09IGl0ZW0udmFsdWUpe1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25GdW5jdGlvblBhcnRzWzNdLmlubmVyVGV4dCA9ICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uQ2hlY2soKTtcclxuICAgIH07XHJcblxyXG4gICAgaW5wdXRTeW1ib2xEZWxldGVkKGl0ZW06IElucHV0U3ltYm9sKXtcclxuICAgICAgICBpZih0aGlzLnRyYW5zaXRpb25GdW5jdGlvblBhcnRzWzJdLmlubmVyVGV4dCA9PT0gaXRlbS52YWx1ZSl7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydHNbMl0uaW5uZXJUZXh0ID0gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRyYW5zaXRpb25DaGVjaygpO1xyXG4gICAgfTtcclxuXHJcbiAgICBzdGFja1N5bWJvbERlbGV0ZWQoaXRlbTogU3RhY2tTeW1ib2wpe1xyXG4gICAgICAgIGxldCBvcHRpb24gPSB0aGlzLmluaXRpYWxTdGFja1N5bWJvbFNlbGVjdC5vcHRpb25zLm5hbWVkSXRlbShcInN0YWNrU3ltYm9sT3B0aW9uXCIgKyBpdGVtLnZhbHVlKVxyXG4gICAgICAgIGlmKG9wdGlvbil7XHJcbiAgICAgICAgICAgIGlmKG9wdGlvbi5zZWxlY3RlZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxTdGFja1N5bWJvbFNlbGVjdC5vcHRpb25zWzBdLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcHRpb24ucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydHNbMV0uaW5uZXJUZXh0ID09PSBpdGVtLnZhbHVlKXtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25QYXJ0c1sxXS5pbm5lclRleHQgPSAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy50cmFuc2l0aW9uRnVuY3Rpb25QYXJ0c1s0XS5pbm5lclRleHQuaW5jbHVkZXMoaXRlbS52YWx1ZSkpe1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25GdW5jdGlvblBhcnRzWzRdLmlubmVyVGV4dCA9ICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uQ2hlY2soKTtcclxuICAgIH07XHJcblxyXG4gICAgY3JlYXRlS2V5Ym9hcmRCdXR0b24oaXRlbTogaXRlbVR5cGUsIHR5cGU6IG51bWJlcik6IEhUTUxCdXR0b25FbGVtZW50e1xyXG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZmxleCcsICdqdXN0aWZ5LWNlbnRlcicsICdpdGVtcy1jZW50ZXInLCAncHgtMicsICdoLTgnLCAnYmctc2xhdGUtMTAwJywgJ20tMScpO1xyXG4gICAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSBpdGVtLnZhbHVlID8/ICfOtSc7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBTdWJtaXRFdmVudCkgPT4gdGhpcy5rZXlib2FyZEJ1dHRvblByZXNzZWQoZXZlbnQsIHR5cGUpKTtcclxuICAgICAgICByZXR1cm4gYnV0dG9uO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBrZXlib2FyZEJ1dHRvblByZXNzZWQoZXZlbnQ6IEV2ZW50LCB0eXBlOiBudW1iZXIpe1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codHlwZSwgdGhpcy5hY3RpdmVQYXJ0KTtcclxuICAgICAgICBzd2l0Y2godHlwZSl7XHJcbiAgICAgICAgICAgIC8vU3RhdGVcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5hY3RpdmVQYXJ0ID09PSAwIHx8IHRoaXMuYWN0aXZlUGFydCA9PT0gMyl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldCBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5wdXRGaWVsZCA9IHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydHNbdGhpcy5hY3RpdmVQYXJ0XSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dEZpZWxkLmlubmVyVGV4dCA9IGJ1dHRvbi5pbm5lclRleHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIC8vSW5wdXQgU3ltYm9sXHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuYWN0aXZlUGFydCA9PT0gMil7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldCBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5wdXRGaWVsZCA9IHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydHNbdGhpcy5hY3RpdmVQYXJ0XSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dEZpZWxkLmlubmVyVGV4dCA9IGJ1dHRvbi5pbm5lclRleHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIC8vU3RhY2sgU3ltYm9sXHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuYWN0aXZlUGFydCA9PT0gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldCBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5wdXRGaWVsZCA9IHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydHNbdGhpcy5hY3RpdmVQYXJ0XSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dEZpZWxkLmlubmVyVGV4dCA9IGJ1dHRvbi5pbm5lclRleHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKHRoaXMuYWN0aXZlUGFydCA9PT0gNCl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldCBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5wdXRGaWVsZCA9IHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydHNbdGhpcy5hY3RpdmVQYXJ0XSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dEZpZWxkLmlubmVyVGV4dCArPSBidXR0b24uaW5uZXJUZXh0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmFjdGl2ZVBhcnQgPT09IDQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbnB1dEZpZWxkID0gdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25QYXJ0c1t0aGlzLmFjdGl2ZVBhcnRdIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0RmllbGQuaW5uZXJIVE1MID0gaW5wdXRGaWVsZC5pbm5lclRleHQuc2xpY2UoMCwtMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB0cmFuc2l0aW9uRnVuY3Rpb25QYXJ0Q2hhbmdlSGFuZGxlcihldmVudDogRXZlbnQsIGluZGV4OiBudW1iZXIpe1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYodGhpcy5hY3RpdmVQYXJ0ICYmIHRoaXMuYWN0aXZlUGFydCA9PSBpbmRleCl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuYWN0aXZlUGFydCA+PSAwKXtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25QYXJ0c1t0aGlzLmFjdGl2ZVBhcnRdLmNsYXNzTGlzdC5yZW1vdmUoJ2JnLXNsYXRlLTMwMCcpO1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25GdW5jdGlvblBhcnRzW3RoaXMuYWN0aXZlUGFydF0uY2xhc3NMaXN0LmFkZCgnYmctc2xhdGUtMTAwJyk7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmFjdGl2ZVBhcnQgPT09IDAgfHwgdGhpcy5hY3RpdmVQYXJ0ID09PSAzKXtcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5Ym9hcmRTdGF0ZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy5hY3RpdmVQYXJ0ID09PSAxIHx8IHRoaXMuYWN0aXZlUGFydCA9PT0gNCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleWJvYXJkU3RhY2tTeW1ib2wuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5Ym9hcmRJbnB1dFN5bWJvbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmFjdGl2ZVBhcnQgPSBpbmRleDtcclxuXHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25QYXJ0c1t0aGlzLmFjdGl2ZVBhcnRdLmNsYXNzTGlzdC5yZW1vdmUoJ2JnLXNsYXRlLTEwMCcpO1xyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydHNbdGhpcy5hY3RpdmVQYXJ0XS5jbGFzc0xpc3QuYWRkKCdiZy1zbGF0ZS0zMDAnKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5hY3RpdmVQYXJ0ID09PSA0KXtcclxuICAgICAgICAgICAgdGhpcy5rZXlib2FyZERlbGV0ZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLmtleWJvYXJkRGVsZXRlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuYWN0aXZlUGFydCA9PT0gMCB8fCB0aGlzLmFjdGl2ZVBhcnQgPT09IDMpe1xyXG4gICAgICAgICAgICB0aGlzLmtleWJvYXJkU3RhdGUuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLmFjdGl2ZVBhcnQgPT09IDEgfHwgdGhpcy5hY3RpdmVQYXJ0ID09PSA0KXtcclxuICAgICAgICAgICAgdGhpcy5rZXlib2FyZFN0YWNrU3ltYm9sLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmtleWJvYXJkSW5wdXRTeW1ib2wuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdHJhbnNpdGlvbkNoZWNrKCk6IGJvb2xlYW57XHJcbiAgICAgICAgbGV0IGFueUludmFsaWQgPSBmYWxzZTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25zLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgbGV0IHQgPSB0aGlzLnRyYW5zaXRpb25GdW5jdGlvbnNbaV07XHJcbiAgICAgICAgICAgIGxldCB0RCA9IHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uRGl2LmNoaWxkcmVuW2ldIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgICAgICAvL0Zyb20gc3RhdGVcclxuICAgICAgICAgICAgbGV0IGZyb21TdGF0ZSA9IHRoaXMuc3RhdGVzLmZpbmQoKHMpID0+IGNvbXBhcmVTdGF0ZShzLCB0LmZyb21TdGF0ZSkpO1xyXG4gICAgICAgICAgICBpZighZnJvbVN0YXRlKXtcclxuICAgICAgICAgICAgICAgIGFueUludmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdEQuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgcmdiKDIyNCAzNiAzNilcIjtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vVG8gc3RhdGVcclxuICAgICAgICAgICAgbGV0IHRvU3RhdGUgPSB0aGlzLnN0YXRlcy5maW5kKChzKSA9PiBjb21wYXJlU3RhdGUocywgdC50b1N0YXRlKSk7XHJcbiAgICAgICAgICAgIGlmKCF0b1N0YXRlKXtcclxuICAgICAgICAgICAgICAgIGFueUludmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdEQuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgcmdiKDIyNCAzNiAzNilcIjtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vSW5wdXQgc3ltYm9sXHJcbiAgICAgICAgICAgIGlmKCF0LmlucHV0U3ltYm9sLmlzRXBzeWxvbil7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXRTeW1ib2wgPSB0aGlzLmlucHV0U3ltYm9scy5maW5kKChzKSA9PiBjb21wYXJlSW5wdXRTeW1ib2wocywgdC5pbnB1dFN5bWJvbCkpO1xyXG4gICAgICAgICAgICAgICAgaWYoIWlucHV0U3ltYm9sKXtcclxuICAgICAgICAgICAgICAgICAgICBhbnlJbnZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0RC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCByZ2IoMjI0IDM2IDM2KVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vU3RhcnQgc3ltYm9sXHJcbiAgICAgICAgICAgIGxldCBzdGFydFN5bWJvbCA9IHRoaXMuc3RhY2tTeW1ib2xzLmZpbmQoKHMpID0+IGNvbXBhcmVTdGFja1N5bWJvbChzLCB0LnN0YXJ0U3ltYm9sKSk7XHJcbiAgICAgICAgICAgIGlmKCFzdGFydFN5bWJvbCl7XHJcbiAgICAgICAgICAgICAgICBhbnlJbnZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRELnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIHJnYigyMjQgMzYgMzYpXCI7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL1B1c2hlZCBzeW1ib2xzXHJcbiAgICAgICAgICAgIGxldCBjaGVja2VyID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvcihsZXQgcyBvZiB0LnB1c2hlZFN5bWJvbHMpe1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0YWNrU3ltYm9sID0gdGhpcy5zdGFja1N5bWJvbHMuZmluZCgoczIpID0+IGNvbXBhcmVTdGFja1N5bWJvbChzMiwgcykpO1xyXG4gICAgICAgICAgICAgICAgaWYoIXN0YWNrU3ltYm9sKXtcclxuICAgICAgICAgICAgICAgICAgICBhbnlJbnZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0RC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCByZ2IoMjI0IDM2IDM2KVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGNoZWNrZXIpe1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9Db3JyZWN0IHRyYW5zaXRpb25cclxuICAgICAgICAgICAgdEQuc3R5bGUuYm9yZGVyID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFueUludmFsaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZUV2ZW50SGFuZGxlcihldmVudDogRXZlbnQpOiB2b2lke1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy9TdGF0ZXNcclxuICAgICAgICBpZih0aGlzLnN0YXRlcy5sZW5ndGggPT09IDApe1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlRXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGVFcnJvci5pbm5lclRleHQgPSAnRXJyb3I6IEF0IGxlYXN0IG9uZSBzdGF0ZSBtdXN0IGJlIGRlZmluZWQnO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vSW5wdXQgc3ltYm9sc1xyXG4gICAgICAgIGlmKHRoaXMuaW5wdXRTeW1ib2xzLmxlbmd0aCA9PT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRTeW1ib2xFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgdGhpcy5pbnB1dFN5bWJvbEVycm9yLmlubmVyVGV4dCA9ICdFcnJvcjogQXQgbGVhc3Qgb25lIGlucHV0IHN5bWJvbCBtdXN0IGJlIGRlZmluZWQnO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vU3RhY2sgc3ltYm9sc1xyXG4gICAgICAgIGlmKHRoaXMuc3RhY2tTeW1ib2xzLmxlbmd0aCA9PT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhY2tTeW1ib2xFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgdGhpcy5zdGFja1N5bWJvbEVycm9yLmlubmVyVGV4dCA9ICdFcnJvcjogQXQgbGVhc3Qgb25lIHN0YWNrIHN5bWJvbCBtdXN0IGJlIGRlZmluZWQnO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vSW5pdGlhbCBzdGF0ZVxyXG4gICAgICAgIGlmKCF0aGlzLmluaXRpYWxTdGF0ZSl7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFN0YXRlRXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFN0YXRlRXJyb3IuaW5uZXJUZXh0ID0gJ0Vycm9yOiBJbml0aWFsIHN0YXRlIG11c3QgYmUgZGVmaW5lZCc7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsU3RhdGVFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL0luaXRpYWwgc3RhY2sgc3ltYm9sXHJcbiAgICAgICAgaWYoIXRoaXMuaW5pdGlhbFN0YWNrU3ltYm9sKXtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsU3RhY2tTeW1ib2xFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsU3RhY2tTeW1ib2xFcnJvci5pbm5lclRleHQgPSAnRXJyb3I6IEluaXRpYWwgc3RhY2sgc3ltYm9sIG11c3QgYmUgZGVmaW5lZCc7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsU3RhY2tTeW1ib2xFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL0FjY2VwdGluZyBzdGF0ZXNcclxuICAgICAgICBpZih0aGlzLmFjY2VwdGluZ1N0YXRlcyAhPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuYWNjZXB0aW5nU3RhdGVzLmxlbmd0aCA9PT0gMCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjY2VwdGluZ1N0YXRlRXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjY2VwdGluZ1N0YXRlRXJyb3IuaW5uZXJUZXh0ID0gJ0Vycm9yOiBBdCBsZWFzdCBvbmUgYWNjZXB0aW5nIHN0YXRlIG11c3QgYmUgZGVmaW5lZCBvciBlbmFibGUgYWNjZXB0YW5jZSBieSBlbXB0eSBzdGFjayc7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbFN0YXRlRXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL1RyYW5zaXRpb24gZnVuY3Rpb25zXHJcbiAgICAgICAgaWYodGhpcy50cmFuc2l0aW9uRnVuY3Rpb25zLmxlbmd0aCA9PT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uRXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uRXJyb3IuaW5uZXJUZXh0ID0gJ0Vycm9yOiBBdCBsZWFzdCBvbmUgdHJhbnNpdGlvbiBmdW5jdGlvbiBtdXN0IGJlIGRlZmluZWQnO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vV2hvbGUgYXV0b21hdGFcclxuICAgICAgICBpZighY2hlY2tQdXNoZG93bkF1dG9tYXRhKHRoaXMuc3RhdGVzLCB0aGlzLnN0YWNrU3ltYm9scywgdGhpcy5pbnB1dFN5bWJvbHMsIHRoaXMuaW5pdGlhbFN0YXRlLCB0aGlzLmluaXRpYWxTdGFja1N5bWJvbCwgdGhpcy5hY2NlcHRpbmdTdGF0ZXMsIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9ucykpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vS2V5XHJcbiAgICAgICAgbGV0IGtleSA9IHRoaXMua2V5SW5wdXQudmFsdWUudHJpbSgpO1xyXG4gICAgICAgIGlmKGtleSA9PT0gJycpe1xyXG4gICAgICAgICAgICB0aGlzLmtleUVycm9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLmtleUVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vVmFsaWRcclxuICAgICAgICBsZXQgcGRhID0gbmV3IFB1c2hkb3duQXV0b21hdGEodGhpcy5zdGF0ZXMsIHRoaXMuaW5wdXRTeW1ib2xzLCB0aGlzLnN0YWNrU3ltYm9scywgdGhpcy5pbml0aWFsU3RhdGUsIHRoaXMuaW5pdGlhbFN0YWNrU3ltYm9sLCB0aGlzLmFjY2VwdGluZ1N0YXRlcywgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25zKTtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5zdG9yYWdlLnNhdmVBdXRvbWF0YShrZXksIHBkYSk7XHJcbiAgICAgICAgaWYocmVzdWx0KXtcclxuICAgICAgICAgICAgLyp0aGlzLnJlc2V0KCk7XHJcbiAgICAgICAgICAgIG5ld0F1dG9tYXRhUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIG1lbnVQYWdlLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICAgICAgbWFpblBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBzaW11bGF0b3JQYWdlLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICAgICAgdGhpcy51aS5zZXRBdXRvbWF0YSh0aGlzLnN0b3JhZ2UubG9hZEF1dG9tYXRhKGtleSkpOyovXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVmFsaWQgYXV0b21hdGE6XCIsIHBkYSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU3RhdGUsIElucHV0U3ltYm9sLCBTdGFja1N5bWJvbCwgVHJhbnNpdGlvbkZ1bmN0aW9uIH0gZnJvbSBcIi4vcHVzaGRvd25BdXRvbWF0YVR5cGVzXCI7XHJcbmltcG9ydCB7IGNvbXBhcmVTdGF0ZSwgY29tcGFyZUlucHV0U3ltYm9sLCBjb21wYXJlU3RhY2tTeW1ib2wgfSBmcm9tIFwiLi9wdXNoZG93bkF1dG9tYXRhVHlwZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQdXNoZG93bkF1dG9tYXRhe1xyXG4gICAgc3RhdGVzOiBTdGF0ZVtdO1xyXG4gICAgaW5wdXRTeW1ib2xzOiBJbnB1dFN5bWJvbFtdO1xyXG4gICAgc3RhY2tTeW1ib2xzOiBTdGFja1N5bWJvbFtdO1xyXG4gICAgaW5pdGlhbFN0YXRlOiBTdGF0ZTtcclxuICAgIGluaXRpYWxTdGFja1N5bWJvbDogU3RhY2tTeW1ib2w7XHJcbiAgICBhY2NlcHRpbmdTdGF0ZTogU3RhdGVbXSB8IG51bGw7XHJcbiAgICB0cmFuc2l0aW9uRnVuY3Rpb246IFRyYW5zaXRpb25GdW5jdGlvbltdO1xyXG4gICAgY29uc3RydWN0b3Ioc3RhdGVzOiBTdGF0ZVtdLCBpbnB1dFN5bWJvbHM6IElucHV0U3ltYm9sW10sIHN0YWNrU3ltYm9sczogU3RhY2tTeW1ib2xbXSwgaW5pdGlhbFN0YXRlOiBTdGF0ZSwgaW5pdGlhbFN0YWNrU3ltYm9sOiBTdGFja1N5bWJvbCwgYWNjZXB0aW5nU3RhdGU6IFN0YXRlW10gfCBudWxsLCB0cmFuc2l0aW9uRnVuY3Rpb246IFRyYW5zaXRpb25GdW5jdGlvbltdKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc3RhdGVzID0gc3RhdGVzO1xyXG4gICAgICAgIHRoaXMuaW5wdXRTeW1ib2xzID0gaW5wdXRTeW1ib2xzO1xyXG4gICAgICAgIHRoaXMuc3RhY2tTeW1ib2xzID0gc3RhY2tTeW1ib2xzO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbFN0YXRlID0gaW5pdGlhbFN0YXRlO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbFN0YWNrU3ltYm9sID0gaW5pdGlhbFN0YWNrU3ltYm9sO1xyXG4gICAgICAgIHRoaXMuYWNjZXB0aW5nU3RhdGUgPSBhY2NlcHRpbmdTdGF0ZTtcclxuICAgICAgICB0aGlzLnRyYW5zaXRpb25GdW5jdGlvbiA9IHRyYW5zaXRpb25GdW5jdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRlRXhpc3RzKHN0YXRlOiBTdGF0ZSk6IGJvb2xlYW57XHJcbiAgICAgICAgZm9yKGxldCBzIG9mIHRoaXMuc3RhdGVzKXtcclxuICAgICAgICAgICAgaWYoY29tcGFyZVN0YXRlKHMsIHN0YXRlKSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5wdXRTeW1ib2xFeGlzdHMoaW5wdXRTeW1ib2w6IElucHV0U3ltYm9sKTogYm9vbGVhbntcclxuICAgICAgICBmb3IobGV0IGkgb2YgdGhpcy5pbnB1dFN5bWJvbHMpe1xyXG4gICAgICAgICAgICBpZihjb21wYXJlSW5wdXRTeW1ib2woaSwgaW5wdXRTeW1ib2wpKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGFja1N5bWJvbEV4aXN0cyhzdGFja1N5bWJvbDogU3RhY2tTeW1ib2wpOiBib29sZWFue1xyXG4gICAgICAgIGZvcihsZXQgcyBvZiB0aGlzLnN0YWNrU3ltYm9scyl7XHJcbiAgICAgICAgICAgIGlmKGNvbXBhcmVTdGFja1N5bWJvbChzLCBzdGFja1N5bWJvbCkpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja1N0YXRlc0V4aXN0ZW5jZSgpIDpbc3RyaW5nLCBTdGF0ZV1bXXtcclxuICAgICAgICB2YXIgZXJyb3JNc2cgOltzdHJpbmcsIFN0YXRlXVtdID0gW107XHJcblxyXG4gICAgICAgIGlmKCF0aGlzLnN0YXRlRXhpc3RzKHRoaXMuaW5pdGlhbFN0YXRlKSl7XHJcbiAgICAgICAgICAgIGVycm9yTXNnLnB1c2goW1wiSW5pdGlhbCBzdGF0ZSBkb2VzIG5vdCBleGlzdFwiLCB0aGlzLmluaXRpYWxTdGF0ZV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5hY2NlcHRpbmdTdGF0ZSAhPSBudWxsKXtcclxuICAgICAgICAgICAgZm9yKGxldCBmaW5hbFN0YXRlIG9mIHRoaXMuYWNjZXB0aW5nU3RhdGUpe1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuc3RhdGVFeGlzdHMoZmluYWxTdGF0ZSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTXNnLnB1c2goW1wiQWNjZXB0aW5nIHN0YXRlIGRvZXMgbm90IGV4aXN0XCIsIGZpbmFsU3RhdGVdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGVycm9yTXNnO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjaGVja1N5bWJvbEV4aXN0ZW5jZSgpIDpbc3RyaW5nLCBTdGFja1N5bWJvbF1bXXtcclxuICAgICAgICB2YXIgZXJyb3JNc2cgOltzdHJpbmcsIFN0YWNrU3ltYm9sXVtdID0gW107XHJcblxyXG4gICAgICAgIGlmKHRoaXMuaW5pdGlhbFN0YWNrU3ltYm9sICE9IG51bGwpe1xyXG4gICAgICAgICAgICBpZighdGhpcy5zdGFja1N5bWJvbEV4aXN0cyh0aGlzLmluaXRpYWxTdGFja1N5bWJvbCkpe1xyXG4gICAgICAgICAgICAgICAgZXJyb3JNc2cucHVzaChbXCJJbml0aWFsIHN0YWNrIHN5bWJvbCBkb2VzIG5vdCBleGlzdFwiLCB0aGlzLmluaXRpYWxTdGFja1N5bWJvbF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZXJyb3JNc2c7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNoZWNrVHJhbnNpdGlvbkZ1bmN0aW9ucygpIDpbc3RyaW5nLCBUcmFuc2l0aW9uRnVuY3Rpb25dW117XHJcbiAgICAgICAgdmFyIGVycm9yTXNnIDpbc3RyaW5nLCBUcmFuc2l0aW9uRnVuY3Rpb25dW10gPSBbXTtcclxuXHJcbiAgICAgICAgZm9yKGxldCB0cmFuc2l0aW9uRnVuY3Rpb24gb2YgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb24pe1xyXG4gICAgICAgICAgICBpZighdGhpcy5zdGF0ZUV4aXN0cyh0cmFuc2l0aW9uRnVuY3Rpb24uZnJvbVN0YXRlKSl7XHJcbiAgICAgICAgICAgICAgICBlcnJvck1zZy5wdXNoKFtcIkZyb20gc3RhdGUgZG9lcyBub3QgZXhpc3RcIiwgdHJhbnNpdGlvbkZ1bmN0aW9uXSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmlucHV0U3ltYm9sRXhpc3RzKHRyYW5zaXRpb25GdW5jdGlvbi5pbnB1dFN5bWJvbCkpe1xyXG4gICAgICAgICAgICAgICAgZXJyb3JNc2cucHVzaChbXCJJbnB1dCBzeW1ib2wgZG9lcyBub3QgZXhpc3RcIiwgdHJhbnNpdGlvbkZ1bmN0aW9uXSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHRyYW5zaXRpb25GdW5jdGlvbi5zdGFydFN5bWJvbCAhPSBudWxsICYmICF0aGlzLnN0YWNrU3ltYm9sRXhpc3RzKHRyYW5zaXRpb25GdW5jdGlvbi5zdGFydFN5bWJvbCkpe1xyXG4gICAgICAgICAgICAgICAgZXJyb3JNc2cucHVzaChbXCJTdGFjayBzeW1ib2wgZG9lcyBub3QgZXhpc3RcIiwgdHJhbnNpdGlvbkZ1bmN0aW9uXSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKCF0aGlzLnN0YXRlRXhpc3RzKHRyYW5zaXRpb25GdW5jdGlvbi50b1N0YXRlKSl7XHJcbiAgICAgICAgICAgICAgICBlcnJvck1zZy5wdXNoKFtcIlRvIHN0YXRlIGRvZXMgbm90IGV4aXN0XCIsIHRyYW5zaXRpb25GdW5jdGlvbl0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IHB1c2hlZFN5bWJvbCBvZiB0cmFuc2l0aW9uRnVuY3Rpb24ucHVzaGVkU3ltYm9scyl7XHJcbiAgICAgICAgICAgICAgICBpZighdGhpcy5zdGFja1N5bWJvbEV4aXN0cyhwdXNoZWRTeW1ib2wpKXtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvck1zZy5wdXNoKFtcIlB1c2hlZCBzeW1ib2wgZG9lcyBub3QgZXhpc3RcIiwgdHJhbnNpdGlvbkZ1bmN0aW9uXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBlcnJvck1zZztcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0lucHV0VGFwZVZhbGlkaXR5KGlucHV0VGFwZTogc3RyaW5nKTogc3RyaW5nW117XHJcbiAgICAgICAgbGV0IGludmFsaWRTeW1ib2xzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBzeW1ib2xzID0gbmV3IFNldChpbnB1dFRhcGUuc3BsaXQoXCJcIikpO1xyXG5cclxuICAgICAgICBmb3IobGV0IHMgb2Ygc3ltYm9scyl7XHJcbiAgICAgICAgICAgIGxldCBpbnZhbGlkOiBib29sZWFuID0gdHJ1ZTtcclxuICAgICAgICAgICAgZm9yKGxldCBpbnB1dFN5bWJvbCBvZiB0aGlzLmlucHV0U3ltYm9scyl7XHJcbiAgICAgICAgICAgICAgICBpZihpbnB1dFN5bWJvbC5pc0Vwc3lsb24gPT0gZmFsc2UgJiYgaW5wdXRTeW1ib2wudmFsdWUgPT0gcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaW52YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGludmFsaWQpe1xyXG4gICAgICAgICAgICAgICAgaW52YWxpZFN5bWJvbHMucHVzaChzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGludmFsaWRTeW1ib2xzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRyYW5zaXRpb25GdW5jdGlvbnModGFwZVN5bWJvbDogc3RyaW5nLCBzdGF0ZTogU3RhdGUsIHN0YWNrU3ltYm9sOiAgU3RhY2tTeW1ib2wgfCBudWxsKTogVHJhbnNpdGlvbkZ1bmN0aW9uW117XHJcbiAgICAgICAgbGV0IHBvc3NpYmxlVHJhbnNpdGlvbkZ1bmN0aW9uczogVHJhbnNpdGlvbkZ1bmN0aW9uW10gPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IGlucHV0U3ltYm9sOiBJbnB1dFN5bWJvbDtcclxuICAgICAgICBpZih0YXBlU3ltYm9sID09PSBcIlwiKXtcclxuICAgICAgICAgICAgaW5wdXRTeW1ib2wgPSB7aXNFcHN5bG9uOiB0cnVlfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBpbnB1dFN5bWJvbCA9IHtpc0Vwc3lsb246IGZhbHNlLCB2YWx1ZTogdGFwZVN5bWJvbH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgdHJhbnNpdGlvbkZ1bmN0aW9uIG9mIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uKXtcclxuICAgICAgICAgICAgaWYoIWNvbXBhcmVJbnB1dFN5bWJvbChpbnB1dFN5bWJvbCwgdHJhbnNpdGlvbkZ1bmN0aW9uLmlucHV0U3ltYm9sKSAmJiAhdHJhbnNpdGlvbkZ1bmN0aW9uLmlucHV0U3ltYm9sLmlzRXBzeWxvbil7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZighY29tcGFyZVN0YXRlKHN0YXRlLCB0cmFuc2l0aW9uRnVuY3Rpb24uZnJvbVN0YXRlKSl7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZighY29tcGFyZVN0YWNrU3ltYm9sKHN0YWNrU3ltYm9sLCB0cmFuc2l0aW9uRnVuY3Rpb24uc3RhcnRTeW1ib2wpKXtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBvc3NpYmxlVHJhbnNpdGlvbkZ1bmN0aW9ucy5wdXNoKHRyYW5zaXRpb25GdW5jdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcG9zc2libGVUcmFuc2l0aW9uRnVuY3Rpb25zO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUHVzaGRvd25BdXRvbWF0YSB9IGZyb20gXCIuL3B1c2hkb3duQXV0b21hdGFcIjsgXHJcbmltcG9ydCB7IFN0YXRlLCBTdGFja1N5bWJvbCwgSW5wdXRTeW1ib2wsIFRyYW5zaXRpb25GdW5jdGlvbiB9IGZyb20gXCIuL3B1c2hkb3duQXV0b21hdGFUeXBlc1wiO1xyXG5pbXBvcnQgeyBjb21wYXJlU3RhdGUsIGNvbXBhcmVTdGFja1N5bWJvbCwgY29tcGFyZUlucHV0U3ltYm9sLCBjb21wYXJlVHJhbnNpdGlvbkZ1bmN0aW9uIH0gZnJvbSBcIi4vcHVzaGRvd25BdXRvbWF0YVR5cGVzXCI7XHJcblxyXG50eXBlIGN1c3RvbVR5cGUgPSBTdGF0ZSB8IFN0YWNrU3ltYm9sIHwgSW5wdXRTeW1ib2wgfCBUcmFuc2l0aW9uRnVuY3Rpb247XHJcblxyXG5mdW5jdGlvbiBpbmNsdWRlRHVwbGljYXRlczxUIGV4dGVuZHMgY3VzdG9tVHlwZT4oYXJyOiBUW10sIGNvbXBhcmU6IChhOiBULCBiOiBUKSA9PiBib29sZWFuKTogYm9vbGVhbntcclxuICAgIHJldHVybiBhcnIuc29tZSgodmFsdWUsIGluZGV4LCBzZWxmKSA9PiBzZWxmLmZpbHRlcih4ID0+IGNvbXBhcmUoeCwgdmFsdWUpKS5sZW5ndGggPiAxICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja1B1c2hkb3duQXV0b21hdGEocGRhOiBQdXNoZG93bkF1dG9tYXRhKTogYm9vbGVhbjtcclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrUHVzaGRvd25BdXRvbWF0YShzdGF0ZTogU3RhdGVbXSwgc3RhY2tTeW1ib2w6IFN0YWNrU3ltYm9sW10sIGlucHV0U3ltYm9sOiBJbnB1dFN5bWJvbFtdLCBpbml0aWFsU3RhdGU6IFN0YXRlLCBpbml0aWFsU3RhY2tTeW1ib2w6IFN0YWNrU3ltYm9sLCBhY2NlcHRpbmdTdGF0ZTogU3RhdGVbXSB8IG51bGwsIHRyYW5zaXRpb25GdW5jdGlvbjogVHJhbnNpdGlvbkZ1bmN0aW9uW10pOiBib29sZWFuO1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tQdXNoZG93bkF1dG9tYXRhKHN0YXRlOiBTdGF0ZVtdIHwgUHVzaGRvd25BdXRvbWF0YSwgc3RhY2tTeW1ib2w/OiBTdGFja1N5bWJvbFtdLCBpbnB1dFN5bWJvbD86IElucHV0U3ltYm9sW10sIGluaXRpYWxTdGF0ZT86IFN0YXRlLCBpbml0aWFsU3RhY2tTeW1ib2w/OiBTdGFja1N5bWJvbCwgYWNjZXB0aW5nU3RhdGU/OiBTdGF0ZVtdIHwgbnVsbCwgdHJhbnNpdGlvbkZ1bmN0aW9uPzogVHJhbnNpdGlvbkZ1bmN0aW9uW10pOiBib29sZWFuIHtcclxuICAgIGxldCBwZGE6IFB1c2hkb3duQXV0b21hdGE7XHJcbiAgICBpZihzdGF0ZSBpbnN0YW5jZW9mIFB1c2hkb3duQXV0b21hdGEpe1xyXG4gICAgICAgIHBkYSA9IHN0YXRlO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcGRhID0gbmV3IFB1c2hkb3duQXV0b21hdGEoc3RhdGUgYXMgU3RhdGVbXSxpbnB1dFN5bWJvbCEsc3RhY2tTeW1ib2whLGluaXRpYWxTdGF0ZSEsIGluaXRpYWxTdGFja1N5bWJvbCEsIGFjY2VwdGluZ1N0YXRlISwgdHJhbnNpdGlvbkZ1bmN0aW9uISk7XHJcbiAgICB9XHJcbiAgICAvL1N0YXRlc1xyXG4gICAgbGV0IGVycm9yID0gZmFsc2U7XHJcbiAgICBsZXQgZXJyb3JNU2c6IHN0cmluZ1tdID0gW107XHJcbiAgICBpZihwZGEuc3RhdGVzLmxlbmd0aCA9PT0gMCl7XHJcbiAgICAgICAgZXJyb3IgPSB0cnVlO1xyXG4gICAgICAgIGVycm9yTVNnLnB1c2goXCJObyBzdGF0ZXNcIik7XHJcbiAgICB9XHJcbiAgICBpZihpbmNsdWRlRHVwbGljYXRlcyhwZGEuc3RhdGVzLCBjb21wYXJlU3RhdGUpKXtcclxuICAgICAgICBlcnJvciA9IHRydWU7XHJcbiAgICAgICAgZXJyb3JNU2cucHVzaChcIkR1cGxpY2F0ZSBzdGF0ZXNcIik7XHJcbiAgICB9XHJcbiAgICAvL0lucHV0IHN5bWJvbHNcclxuICAgIGlmKHBkYS5pbnB1dFN5bWJvbHMubGVuZ3RoID09PSAwKXtcclxuICAgICAgICBlcnJvciA9IHRydWU7XHJcbiAgICAgICAgZXJyb3JNU2cucHVzaChcIk5vIGlucHV0IHN5bWJvbHNcIik7XHJcbiAgICB9XHJcbiAgICBpZihpbmNsdWRlRHVwbGljYXRlcyhwZGEuaW5wdXRTeW1ib2xzLCBjb21wYXJlSW5wdXRTeW1ib2wpKXtcclxuICAgICAgICBlcnJvciA9IHRydWU7XHJcbiAgICAgICAgZXJyb3JNU2cucHVzaChcIkR1cGxpY2F0ZSBpbnB1dCBzeW1ib2xzXCIpO1xyXG4gICAgfVxyXG4gICAgLy9TdGFjayBzeW1ib2xzXHJcbiAgICBpZihwZGEuc3RhY2tTeW1ib2xzLmxlbmd0aCA9PT0gMCl7XHJcbiAgICAgICAgZXJyb3IgPSB0cnVlO1xyXG4gICAgICAgIGVycm9yTVNnLnB1c2goXCJObyBzdGFjayBzeW1ib2xzXCIpO1xyXG4gICAgfVxyXG4gICAgaWYoaW5jbHVkZUR1cGxpY2F0ZXMocGRhLnN0YWNrU3ltYm9scywgY29tcGFyZVN0YWNrU3ltYm9sKSl7XHJcbiAgICAgICAgZXJyb3IgPSB0cnVlO1xyXG4gICAgICAgIGVycm9yTVNnLnB1c2goXCJEdXBsaWNhdGUgc3RhY2sgc3ltYm9sc1wiKTtcclxuICAgIH1cclxuICAgIC8vSW5pdGlhbCBzdGF0ZVxyXG4gICAgaWYocGRhLmluaXRpYWxTdGF0ZSA9PT0gbnVsbCl7XHJcbiAgICAgICAgZXJyb3IgPSB0cnVlO1xyXG4gICAgICAgIGVycm9yTVNnLnB1c2goXCJObyBpbml0aWFsIHN0YXRlXCIpO1xyXG4gICAgfVxyXG4gICAgaWYoIXBkYS5zdGF0ZXMuc29tZShzID0+IGNvbXBhcmVTdGF0ZShzLCBwZGEuaW5pdGlhbFN0YXRlKSkpe1xyXG4gICAgICAgIGVycm9yID0gdHJ1ZTtcclxuICAgICAgICBlcnJvck1TZy5wdXNoKFwiSW5pdGlhbCBzdGF0ZSBkb2VzIG5vdCBleGlzdFwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvL0luaXRpYWwgc3RhY2sgc3ltYm9sXHJcbiAgICBpZihwZGEuaW5pdGlhbFN0YWNrU3ltYm9sICE9PSBudWxsKXtcclxuICAgICAgICBpZighcGRhLnN0YWNrU3ltYm9scy5zb21lKHMgPT4gY29tcGFyZVN0YWNrU3ltYm9sKHMsIHBkYS5pbml0aWFsU3RhY2tTeW1ib2wpKSl7XHJcbiAgICAgICAgICAgIGVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgZXJyb3JNU2cucHVzaChcIkluaXRpYWwgc3RhY2sgc3ltYm9sIGRvZXMgbm90IGV4aXN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vQWNjZXB0aW5nIHN0YXRlXHJcbiAgICBpZihwZGEuYWNjZXB0aW5nU3RhdGUgIT09IG51bGwpe1xyXG4gICAgICAgIGxldCB0ZW1wRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBmb3IobGV0IGZpbmFsU3RhdGUgb2YgcGRhLmFjY2VwdGluZ1N0YXRlKXtcclxuICAgICAgICAgICAgaWYoIXBkYS5zdGF0ZXMuc29tZShzID0+IGNvbXBhcmVTdGF0ZShzLCBmaW5hbFN0YXRlKSkpe1xyXG4gICAgICAgICAgICAgICAgdGVtcEVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRlbXBFcnJvcil7XHJcbiAgICAgICAgICAgIGVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgZXJyb3JNU2cucHVzaChcIkF0IGxlYXN0IG9uZSBhY2NlcHRpbmcgc3RhdGUgZG9lcyBub3QgZXhpc3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9UcmFuc2l0aW9uIGZ1bmN0aW9uXHJcbiAgICBpZihwZGEudHJhbnNpdGlvbkZ1bmN0aW9uLmxlbmd0aCA9PT0gMCl7XHJcbiAgICAgICAgZXJyb3IgPSB0cnVlO1xyXG4gICAgICAgIGVycm9yTVNnLnB1c2goXCJObyB0cmFuc2l0aW9uIGZ1bmN0aW9uXCIpO1xyXG4gICAgfVxyXG4gICAgbGV0IHRlbXBFcnJvciA9IGZhbHNlO1xyXG4gICAgZm9yKGxldCB0IG9mIHBkYS50cmFuc2l0aW9uRnVuY3Rpb24pe1xyXG4gICAgICAgIGlmKCFwZGEuc3RhdGVzLnNvbWUocyA9PiBjb21wYXJlU3RhdGUocywgdC5mcm9tU3RhdGUpKSl7XHJcbiAgICAgICAgICAgIHRlbXBFcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighKHQuaW5wdXRTeW1ib2wuaXNFcHN5bG9uIHx8ICghdC5pbnB1dFN5bWJvbC5pc0Vwc3lsb24gJiYgcGRhLmlucHV0U3ltYm9scy5zb21lKGkgPT4gY29tcGFyZUlucHV0U3ltYm9sKGksIHQuaW5wdXRTeW1ib2wpKSkpKXtcclxuICAgICAgICAgICAgdGVtcEVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFwZGEuc3RhY2tTeW1ib2xzLnNvbWUocyA9PiBjb21wYXJlU3RhY2tTeW1ib2wocywgdC5zdGFydFN5bWJvbCkpKXtcclxuICAgICAgICAgICAgdGVtcEVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgcHVzaGVkU3ltYm9sIG9mIHQucHVzaGVkU3ltYm9scyl7XHJcbiAgICAgICAgICAgIGlmKCFwZGEuc3RhY2tTeW1ib2xzLnNvbWUocyA9PiBjb21wYXJlU3RhY2tTeW1ib2wocywgcHVzaGVkU3ltYm9sKSkpe1xyXG4gICAgICAgICAgICAgICAgdGVtcEVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYodGVtcEVycm9yKXtcclxuICAgICAgICBlcnJvciA9IHRydWU7XHJcbiAgICAgICAgZXJyb3JNU2cucHVzaChcIkF0IGxlYXN0IG9uZSB0cmFuc2l0aW9uIGZ1bmN0aW9uIGlzIGluY29ycmVjdFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBpZihlcnJvcil7XHJcbiAgICAgICAgYWxlcnQoXCJFcnJvciBpbiBQREE6IFxcbiAtXCIgKyBlcnJvck1TZy5qb2luKFwiXFxuIC1cIikpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSIsImltcG9ydCB7IFN0YWNrIH0gZnJvbSBcIi4vc3RhY2tcIjtcclxuaW1wb3J0IHsgU3RhY2tTeW1ib2wsIFN0YXRlLCBUcmFuc2l0aW9uRnVuY3Rpb24gfSBmcm9tIFwiLi9wdXNoZG93bkF1dG9tYXRhVHlwZXNcIjtcclxuaW1wb3J0IHsgY29tcGFyZVN0YXRlIH0gZnJvbSBcIi4vcHVzaGRvd25BdXRvbWF0YVR5cGVzXCI7XHJcbmltcG9ydCB7IFB1c2hkb3duQXV0b21hdGEgfSBmcm9tIFwiLi9wdXNoZG93bkF1dG9tYXRhXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHVzaGRvd25BdXRvbWF0YVNpbXVsYXRvcntcclxuICAgIGlucHV0VGFwZTogc3RyaW5nO1xyXG4gICAgc3RhY2s6IFN0YWNrPFN0YWNrU3ltYm9sPjtcclxuICAgIGN1cnJlbnRTdGF0ZTogU3RhdGU7XHJcbiAgICBhY2NlcHRpbmdTdGF0ZTogU3RhdGVbXSB8IG51bGw7XHJcbiAgICBhdXRvbWF0YTogUHVzaGRvd25BdXRvbWF0YTtcclxuICAgIGhpc3Rvcnk6IFRyYW5zaXRpb25GdW5jdGlvbltdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoYXV0b21hdGE6IFB1c2hkb3duQXV0b21hdGEpe1xyXG4gICAgICAgIHRoaXMuYXV0b21hdGEgPSBhdXRvbWF0YTtcclxuICAgICAgICB0aGlzLmlucHV0VGFwZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5zdGFjayA9IG5ldyBTdGFjazxTdGFja1N5bWJvbD4oKTtcclxuICAgICAgICBpZih0aGlzLmF1dG9tYXRhLmluaXRpYWxTdGFja1N5bWJvbCAhPSBudWxsKXtcclxuICAgICAgICAgICAgdGhpcy5zdGFjay5wdXNoKHRoaXMuYXV0b21hdGEuaW5pdGlhbFN0YWNrU3ltYm9sKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSB0aGlzLmF1dG9tYXRhLmluaXRpYWxTdGF0ZTtcclxuICAgICAgICB0aGlzLmFjY2VwdGluZ1N0YXRlID0gdGhpcy5hdXRvbWF0YS5hY2NlcHRpbmdTdGF0ZTtcclxuICAgICAgICB0aGlzLmhpc3RvcnkgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldCgpOiB2b2lke1xyXG4gICAgICAgIHRoaXMuaW5wdXRUYXBlID0gXCJcIjtcclxuICAgICAgICB0aGlzLnN0YWNrLmNsZWFyKCk7XHJcbiAgICAgICAgaWYodGhpcy5hdXRvbWF0YS5pbml0aWFsU3RhY2tTeW1ib2wgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhY2sucHVzaCh0aGlzLmF1dG9tYXRhLmluaXRpYWxTdGFja1N5bWJvbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gdGhpcy5hdXRvbWF0YS5pbml0aWFsU3RhdGU7XHJcbiAgICAgICAgdGhpcy5hY2NlcHRpbmdTdGF0ZSA9IHRoaXMuYXV0b21hdGEuYWNjZXB0aW5nU3RhdGU7XHJcbiAgICAgICAgdGhpcy5oaXN0b3J5ID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgYXBwbHlUcmFuc2l0aW9uRnVuY3Rpb24oZjogVHJhbnNpdGlvbkZ1bmN0aW9uKTogdm9pZHtcclxuICAgICAgICB0aGlzLmlucHV0VGFwZSA9IHRoaXMuaW5wdXRUYXBlLnN1YnN0cmluZygxKTtcclxuICAgICAgICB0aGlzLnN0YWNrLnBvcCgpO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IGYucHVzaGVkU3ltYm9scy5sZW5ndGgtMTsgaSA+PSAwOyBpLS0pe1xyXG4gICAgICAgICAgICB0aGlzLnN0YWNrLnB1c2goZi5wdXNoZWRTeW1ib2xzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSBmLnRvU3RhdGU7XHJcbiAgICAgICAgdGhpcy5oaXN0b3J5LnB1c2goZik7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tJbnB1dFRhcGVWYWxpZGl0eSgpOiB2b2lke1xyXG4gICAgICAgIGxldCBpbnZhbGlkU3ltYm9sczogc3RyaW5nW10gPSB0aGlzLmF1dG9tYXRhLmNoZWNrSW5wdXRUYXBlVmFsaWRpdHkodGhpcy5pbnB1dFRhcGUpO1xyXG4gICAgICAgIGlmKGludmFsaWRTeW1ib2xzLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGlucHV0IHRhcGU6IFwiICsgaW52YWxpZFN5bWJvbHMuam9pbihcIiwgXCIpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWNjZXB0ZWRJbnB1dCgpOiBib29sZWFue1xyXG4gICAgICAgIGlmKHRoaXMuaW5wdXRUYXBlICE9PSBcIlwiKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5hY2NlcHRpbmdTdGF0ZSA9PSBudWxsKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhY2suZW1wdHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yKGxldCBzIG9mIHRoaXMuYWNjZXB0aW5nU3RhdGUpe1xyXG4gICAgICAgICAgICBpZihjb21wYXJlU3RhdGUocywgdGhpcy5jdXJyZW50U3RhdGUpKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dFN0ZXAoKTogVHJhbnNpdGlvbkZ1bmN0aW9uW117XHJcbiAgICAgICAgaWYodGhpcy5hY2NlcHRlZElucHV0KCkpe1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlucHV0VGFwZVswXSwgdGhpcy5jdXJyZW50U3RhdGUsIHRoaXMuc3RhY2sudG9wKCkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXV0b21hdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiB0aGlzLmF1dG9tYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgdGhpcy5hdXRvbWF0YS5nZXRUcmFuc2l0aW9uRnVuY3Rpb25zKTtcclxuICAgICAgICBsZXQgcG9zc2libGVUcmFuc2l0aW9uRnVuY3Rpb25zOiBUcmFuc2l0aW9uRnVuY3Rpb25bXVxyXG4gICAgICAgIGlmKHRoaXMuaW5wdXRUYXBlID09PSBcIlwiKXtcclxuICAgICAgICAgICAgcG9zc2libGVUcmFuc2l0aW9uRnVuY3Rpb25zID0gdGhpcy5hdXRvbWF0YS5nZXRUcmFuc2l0aW9uRnVuY3Rpb25zKFwiXCIsIHRoaXMuY3VycmVudFN0YXRlLCB0aGlzLnN0YWNrLnRvcCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgcG9zc2libGVUcmFuc2l0aW9uRnVuY3Rpb25zID0gdGhpcy5hdXRvbWF0YS5nZXRUcmFuc2l0aW9uRnVuY3Rpb25zKHRoaXMuaW5wdXRUYXBlWzBdLCB0aGlzLmN1cnJlbnRTdGF0ZSwgdGhpcy5zdGFjay50b3AoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwb3NzaWJsZVRyYW5zaXRpb25GdW5jdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgYmFja1N0ZXAoKTogVHJhbnNpdGlvbkZ1bmN0aW9uIHwgbnVsbHtcclxuICAgICAgICBpZih0aGlzLmhpc3RvcnkubGVuZ3RoID09PSAwKXtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbGFzdDogVHJhbnNpdGlvbkZ1bmN0aW9uID0gdGhpcy5oaXN0b3J5LnBvcCgpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gbGFzdC5mcm9tU3RhdGU7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxhc3QucHVzaGVkU3ltYm9scy5sZW5ndGg7IGkrKyl7IFxyXG4gICAgICAgICAgICB0aGlzLnN0YWNrLnBvcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YWNrLnB1c2gobGFzdC5zdGFydFN5bWJvbCk7XHJcbiAgICAgICAgaWYoIWxhc3QuaW5wdXRTeW1ib2wuaXNFcHN5bG9uKVxyXG4gICAgICAgICAgICB0aGlzLmlucHV0VGFwZSA9IGxhc3QuaW5wdXRTeW1ib2wudmFsdWUgKyB0aGlzLmlucHV0VGFwZTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gbGFzdDtcclxuICAgIH1cclxuXHJcbiAgICBzZXROZXdJbnB1dChpbnB1dDogc3RyaW5nKTogdm9pZHtcclxuICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICAgICAgdGhpcy5pbnB1dFRhcGUgPSBpbnB1dDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFN0YWNrIH0gZnJvbSBcIi4vc3RhY2tcIjtcclxuXHJcbmV4cG9ydCB0eXBlIFN0YWNrU3ltYm9sID0ge1xyXG4gICAgdmFsdWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVTdGFja1N5bWJvbChhOiBTdGFja1N5bWJvbCB8IG51bGwsIGI6IFN0YWNrU3ltYm9sIHwgbnVsbCk6IGJvb2xlYW57XHJcbiAgICBpZihhICE9IG51bGwgJiYgdHlwZW9mKGEpID09IHR5cGVvZihiKSl7XHJcbiAgICAgICAgcmV0dXJuIGEudmFsdWUgPT0gYi52YWx1ZTtcclxuICAgIH1cclxuICAgIGlmKGEgPT0gbnVsbCAmJiBiID09IG51bGwpe1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBJbnB1dFN5bWJvbCA9IHtcclxuICAgIGlzRXBzeWxvbjogYm9vbGVhbjtcclxuICAgIHZhbHVlPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZUlucHV0U3ltYm9sKGE6IElucHV0U3ltYm9sLCBiOiBJbnB1dFN5bWJvbCk6IGJvb2xlYW57XHJcbiAgICBpZihhLmlzRXBzeWxvbiA9PSBiLmlzRXBzeWxvbil7XHJcbiAgICAgICAgaWYoYS5pc0Vwc3lsb24gPT0gZmFsc2Upe1xyXG4gICAgICAgICAgICByZXR1cm4gYS52YWx1ZSA9PSBiLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFN0YXRlID0ge1xyXG4gICAgdmFsdWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVTdGF0ZShhOiBTdGF0ZSwgYjogU3RhdGUpOiBib29sZWFue1xyXG4gICAgcmV0dXJuIGEudmFsdWUgPT0gYi52YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgVHJhbnNpdGlvbkZ1bmN0aW9uID0ge1xyXG4gICAgZnJvbVN0YXRlOiBTdGF0ZTtcclxuICAgIHN0YXJ0U3ltYm9sOiBTdGFja1N5bWJvbDtcclxuICAgIGlucHV0U3ltYm9sOiBJbnB1dFN5bWJvbDtcclxuICAgIHRvU3RhdGU6IFN0YXRlO1xyXG4gICAgcHVzaGVkU3ltYm9sczogU3RhY2tTeW1ib2xbXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVUcmFuc2l0aW9uRnVuY3Rpb24oYTogVHJhbnNpdGlvbkZ1bmN0aW9uLCBiOiBUcmFuc2l0aW9uRnVuY3Rpb24pOiBib29sZWFue1xyXG4gICAgLy9mcm9tU3RhdGVcclxuICAgIGlmKCFjb21wYXJlU3RhdGUoYS5mcm9tU3RhdGUsIGIuZnJvbVN0YXRlKSl7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vc3RhcnRTeW1ib2xcclxuICAgIGlmKCFjb21wYXJlU3RhY2tTeW1ib2woYS5zdGFydFN5bWJvbCwgYi5zdGFydFN5bWJvbCkpe1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvL2lucHV0U3ltYm9sXHJcbiAgICBpZighY29tcGFyZUlucHV0U3ltYm9sKGEuaW5wdXRTeW1ib2wsIGIuaW5wdXRTeW1ib2wpKXtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy90b1N0YXRlXHJcbiAgICBpZighY29tcGFyZVN0YXRlKGEudG9TdGF0ZSwgYi50b1N0YXRlKSl7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vcHVzaGVkU3ltYm9sc1xyXG4gICAgaWYoYS5wdXNoZWRTeW1ib2xzLmxlbmd0aCAhPSBiLnB1c2hlZFN5bWJvbHMubGVuZ3RoKXtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYS5wdXNoZWRTeW1ib2xzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBpZighY29tcGFyZVN0YWNrU3ltYm9sKGEucHVzaGVkU3ltYm9sc1tpXSwgYi5wdXNoZWRTeW1ib2xzW2ldKSl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0iLCJpbnRlcmZhY2UgSVN0YWNrPFQ+IHtcclxuICAgIHBvcCgpOiB2b2lkO1xyXG4gICAgcHVzaChpdGVtOiBUKTogdm9pZDtcclxuICAgIHRvcCgpOiBUIHwgbnVsbDtcclxuICAgIGVtcHR5KCk6IGJvb2xlYW47XHJcbiAgICBzaXplKCk6IG51bWJlcjtcclxuICAgIGNsZWFyKCk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTdGFjazxUPiBpbXBsZW1lbnRzIElTdGFjazxUPiB7XHJcbiAgICBwcml2YXRlIGRhdGE6IFRbXSA9IFtdO1xyXG5cclxuICAgIHBvcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRhdGEucG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVzaChpdGVtOiBUKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kYXRhLnB1c2goaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9wKCk6IFQgfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhW3RoaXMuZGF0YS5sZW5ndGggLSAxXSA/PyBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGVtcHR5KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEubGVuZ3RoID09PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHNpemUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwcmludCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEpKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFB1c2hkb3duQXV0b21hdGEgfSBmcm9tIFwiLi9wdXNoZG93bkF1dG9tYXRhXCJcclxuaW1wb3J0IHsgVUkgfSBmcm9tIFwiLi91aVwiIFxyXG5pbXBvcnQgeyBhdXRvbWF0YU92ZXJ2aWV3UGFnZSwgc2F2ZWRBdXRvbWF0YXNQYWdlLCBsb2FkQXV0b21hdGFQYWdlLCBtYWluUGFnZSwgc2ltdWxhdG9yUGFnZSwgbWVudVBhZ2UgfSBmcm9tIFwiLi9ldmVudHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdG9yYWdle1xyXG4gICAgcHJpdmF0ZSBzYXZlZEF1dG9tYXRhc1RhYmxlPzogSFRNTFRhYmxlRWxlbWVudDtcclxuICAgIHByaXZhdGUgdWk6IFVJO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHVpOiBVSSl7XHJcbiAgICAgICAgdGhpcy5zYXZlZEF1dG9tYXRhc1RhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYXZlZEF1dG9tYXRhc1RhYmxlXCIpIGFzIEhUTUxUYWJsZUVsZW1lbnQ7XHJcbiAgICAgICAgaWYodWkpe1xyXG4gICAgICAgICAgICB0aGlzLnVpID0gdWk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyRXZlbnRzKCl7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkRmlsZUZvcm1cIikuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB0aGlzLmxvYWRGaWxlLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9hZEZpbGUoZTogU3VibWl0RXZlbnQpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGtleUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkS2V5SW5wdXRcIikgYXMgSFRNTElucHV0RWxlbWVudFxyXG4gICAgICAgIGxldCBrZXkgPSBrZXlJbnB1dD8udmFsdWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGZpbGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZEZpbGVJbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50XHJcbiAgICAgICAgbGV0IGZpbGUgPSBmaWxlSW5wdXQ/LmZpbGVzPy5bMF07XHJcbiAgICAgICAgaWYoIWtleSB8fCAhZmlsZSl7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlIGZpbGwgaW4gYWxsIGZpZWxkc1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgb3ZlcndyaXRlID0gZmFsc2U7XHJcbiAgICAgICAgaWYodGhpcy5rZXlFeGlzdHMoa2V5KSl7XHJcbiAgICAgICAgICAgIGlmKCFjb25maXJtKFwiS2V5IGFscmVhZHkgZXhpc3RzLiBPdmVyd3JpdGU/XCIpKXtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgb3ZlcndyaXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uU3RyID0gcmVhZGVyLnJlc3VsdCBhcyBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhdXRvbWF0YSA9IEpTT04ucGFyc2UoanNvblN0cikgYXMgUHVzaGRvd25BdXRvbWF0YTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlKGtleSwgYXV0b21hdGEpO1xyXG4gICAgICAgICAgICAgICAgaWYoIW92ZXJ3cml0ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnNlcnRSb3coa2V5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxvYWRBdXRvbWF0YVBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgbWVudVBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgICAgICAgICAgbWFpblBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgc2ltdWxhdG9yUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVpLnNldEF1dG9tYXRhKHRoaXMubG9hZEF1dG9tYXRhKGtleSkpO1xyXG4gICAgICAgICAgICAgICAga2V5SW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgZmlsZUlucHV0LnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3Ipe1xyXG4gICAgICAgICAgICBhbGVydChcIkVycm9yIGxvYWRpbmcgZmlsZS4gUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzYXZlPFQ+KGtleTogc3RyaW5nLCBpdGVtOiBUKXtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KGl0ZW0pKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9hZDxUPihrZXk6IHN0cmluZyk6IFQgfCBudWxse1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgICAgIGlmICghaXRlbSl7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShpdGVtKSBhcyBUO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgcGFyc2luZyBsb2NhbFN0b3JhZ2UgaXRlbSBhdCBrZXkgXCIke2tleX1cIi5gLCBlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRlbGV0ZShrZXk6IHN0cmluZyl7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBrZXlFeGlzdHMoa2V5OiBzdHJpbmcpOiBib29sZWFue1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBpZihsb2NhbFN0b3JhZ2Uua2V5KGkpID09PSBrZXkpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVBdXRvbWF0YShrZXk6IHN0cmluZywgYXV0b21hdGE6IFB1c2hkb3duQXV0b21hdGEpOiBib29sZWFue1xyXG4gICAgICAgIGlmKHRoaXMua2V5RXhpc3RzKGtleSkpe1xyXG4gICAgICAgICAgICBpZighY29uZmlybShcIktleSBhbHJlYWR5IGV4aXN0cy4gT3ZlcndyaXRlP1wiKSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zYXZlKGtleSwgYXV0b21hdGEpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRBdXRvbWF0YShrZXk6IHN0cmluZyk6IFB1c2hkb3duQXV0b21hdGEgfCBudWxse1xyXG4gICAgICAgIHJldHVybiBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcy5sb2FkPFB1c2hkb3duQXV0b21hdGE+KGtleSksUHVzaGRvd25BdXRvbWF0YS5wcm90b3R5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5zZXJ0Um93KGtleTogc3RyaW5nKXtcclxuICAgICAgICBsZXQgYXV0b21hdGEgPSB0aGlzLmxvYWRBdXRvbWF0YShrZXkpO1xyXG4gICAgICAgIGlmKGF1dG9tYXRhKXtcclxuICAgICAgICAgICAgbGV0IHJvdyA9IHRoaXMuc2F2ZWRBdXRvbWF0YXNUYWJsZS5pbnNlcnRSb3coKTtcclxuICAgICAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoXCJib3JkZXItYlwiKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBjZWxsID0gcm93Lmluc2VydENlbGwoKVxyXG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJwLTJcIiwgXCJmb250LWJvbGRcIik7XHJcbiAgICAgICAgICAgIGNlbGwuaW5uZXJUZXh0ID0ga2V5O1xyXG5cclxuICAgICAgICAgICAgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInAtMlwiLCBcInRleHQtY2VudGVyXCIpO1xyXG4gICAgICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICc8c3ZnIGNsYXNzPVwidy02IGgtNlwidmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgNTAgNTBcIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTAgNTA7XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj48ZyBpZD1cIkxheWVyXzFcIj48cGF0aCBkPVwiTTI1LDM5YzEzLjAzNiwwLDIzLjM1Mi0xMi44MzMsMjMuNzg0LTEzLjM3OUw0OS4yNzUsMjVsLTAuNDkxLTAuNjIxQzQ4LjM1MiwyMy44MzMsMzguMDM2LDExLDI1LDExUzEuNjQ4LDIzLjgzMywxLjIxNiwyNC4zNzlMMC43MjUsMjVsMC40OTEsMC42MjFDMS42NDgsMjYuMTY3LDExLjk2NCwzOSwyNSwzOXogTTI1LDEzYzEwLjQ5NCwwLDE5LjQ3LDkuNDYsMjEuNjksMTJDNDQuNDczLDI3LjU0MiwzNS41MDksMzcsMjUsMzdDMTQuNTA2LDM3LDUuNTMsMjcuNTQsMy4zMSwyNUM1LjUyNywyMi40NTgsMTQuNDkxLDEzLDI1LDEzelwiPjwvcGF0aD48cGF0aCBkPVwiTTI1LDM0YzQuOTYzLDAsOS00LjAzOCw5LTlzLTQuMDM3LTktOS05cy05LDQuMDM4LTksOVMyMC4wMzcsMzQsMjUsMzR6IE0yNSwxOGMzLjg1OSwwLDcsMy4xNCw3LDdzLTMuMTQxLDctNyw3cy03LTMuMTQtNy03UzIxLjE0MSwxOCwyNSwxOHpcIj48L3BhdGg+PC9nPjxnPjwvZz48L3N2Zz4nO1xyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuc2hvd0F1dG9tYXRhLmJpbmQodGhpcywga2V5KSk7XHJcbiAgICAgICAgICAgIGNlbGwuYXBwZW5kKGJ1dHRvbik7XHJcblxyXG4gICAgICAgICAgICBjZWxsID0gcm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwicC0yXCIsIFwidGV4dC1jZW50ZXJcIik7XHJcbiAgICAgICAgICAgIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnPHN2ZyBjbGFzcz1cInctNiBoLTZcIiBhcmlhLWhpZGRlbj1cInRydWVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIGQ9XCJNMyAxOVY2YzAtLjYuNC0xIDEtMWg0Yy4zIDAgLjYuMS44LjRsMS45IDIuMmMuMi4zLjUuNC44LjRIMTZjLjYgMCAxIC40IDEgMXYxTTMgMTlsMy04aDE1bC0zIDhIM1pcIi8+PC9zdmc+JztcclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtYWluUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICBzaW11bGF0b3JQYWdlLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMudWkuc2V0QXV0b21hdGEodGhpcy5sb2FkQXV0b21hdGEoa2V5KSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjZWxsLmFwcGVuZChidXR0b24pO1xyXG5cclxuICAgICAgICAgICAgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInAtMlwiLCBcInRleHQtY2VudGVyXCIpO1xyXG4gICAgICAgICAgICBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gJzxzdmcgY2xhc3M9XCJ3LTYgaC02IHRleHQtZ3JheS04MDAgZGFyazp0ZXh0LXdoaXRlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjJcIiBkPVwiTTQgMTV2MmEzIDMgMCAwIDAgMyAzaDEwYTMgMyAwIDAgMCAzLTN2LTJtLTggMVY0bTAgMTItNC00bTQgNCA0LTRcIi8+PC9zdmc+JztcclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGpzb25TdHIgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmxvYWRBdXRvbWF0YShrZXkpLCBudWxsLCAyKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbanNvblN0cl0sIHt0eXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIn0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICAgICAgICAgIGEuaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgICAgIGEuZG93bmxvYWQgPSBgJHtrZXl9Lmpzb25gO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKTtcclxuICAgICAgICAgICAgICAgIGEuY2xpY2soKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYSk7XHJcbiAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgY2VsbC5hcHBlbmQoYnV0dG9uKTtcclxuXHJcbiAgICAgICAgICAgIGNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJwLTJcIiwgXCJ0ZXh0LWNlbnRlclwiKTtcclxuICAgICAgICAgICAgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICc8c3ZnIGNsYXNzPVwidy02IGgtNlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDY0IDU4LjY3XCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMzNTM1M2Q7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5Bc3NldCAyNTwvdGl0bGU+PGcgaWQ9XCJMYXllcl8yXCIgZGF0YS1uYW1lPVwiTGF5ZXIgMlwiPjxnIGlkPVwiTGF5ZXJfMS0yXCIgZGF0YS1uYW1lPVwiTGF5ZXIgMVwiPjxwYXRoIGNsYXNzPVwiY2xzLTFcIiBkPVwiTTYxLjMzLDUuMzNINDhWMi42N0EyLjY2LDIuNjYsMCwwLDAsNDUuMzMsMEgxOC42N0EyLjY2LDIuNjYsMCwwLDAsMTYsMi42N1Y1LjMzSDIuNjdhMi42NywyLjY3LDAsMCwwLDAsNS4zNEg4djQwYTgsOCwwLDAsMCw4LDhINDhhOCw4LDAsMCwwLDgtOHYtNDBoNS4zM2EyLjY3LDIuNjcsMCwxLDAsMC01LjM0Wk01MC42Nyw1MC42N0EyLjY3LDIuNjcsMCwwLDEsNDgsNTMuMzNIMTZhMi42NywyLjY3LDAsMCwxLTIuNjctMi42NnYtNDBINTAuNjdaXCI+PC9wYXRoPjxwYXRoIGNsYXNzPVwiY2xzLTFcIiBkPVwiTTI0LDQ1LjMzYTIuNjcsMi42NywwLDAsMCwyLjY3LTIuNjZWMjEuMzNhMi42NywyLjY3LDAsMCwwLTUuMzQsMFY0Mi42N0EyLjY3LDIuNjcsMCwwLDAsMjQsNDUuMzNaXCI+PC9wYXRoPjxwYXRoIGNsYXNzPVwiY2xzLTFcIiBkPVwiTTQwLDQ1LjMzYTIuNjcsMi42NywwLDAsMCwyLjY3LTIuNjZWMjEuMzNhMi42NywyLjY3LDAsMCwwLTUuMzQsMFY0Mi42N0EyLjY3LDIuNjcsMCwwLDAsNDAsNDUuMzNaXCI+PC9wYXRoPjwvZz48L2c+PC9zdmc+JztcclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZShrZXkpO1xyXG4gICAgICAgICAgICAgICAgcm93LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY2VsbC5hcHBlbmQoYnV0dG9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpbnRBdXRvbWF0YXMoKXtcclxuICAgICAgICBpZih0aGlzLnNhdmVkQXV0b21hdGFzVGFibGUpe1xyXG4gICAgICAgICAgICBsZXQgbCA9IHRoaXMuc2F2ZWRBdXRvbWF0YXNUYWJsZS5yb3dzLmxlbmd0aFxyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZWRBdXRvbWF0YXNUYWJsZS5kZWxldGVSb3coMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBsZXQga2V5ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zZXJ0Um93KGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0F1dG9tYXRhKGtleTogc3RyaW5nKXtcclxuICAgICAgICBsZXQgYXV0b21hdGEgPSB0aGlzLmxvYWRBdXRvbWF0YShrZXkpO1xyXG4gICAgICAgIC8vS2V5L25hbWVcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJ2aWV3TmFtZVwiKSEuaW5uZXJUZXh0ID0ga2V5O1xyXG4gICAgICAgIC8vU3RhdGVzXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVydmlld1N0YXRlc1wiKSEuaW5uZXJUZXh0ID0gYXV0b21hdGEuc3RhdGVzLm1hcCgocykgPT4gcy52YWx1ZSkuam9pbihcIiwgXCIpO1xyXG4gICAgICAgIC8vSW5wdXQgc3ltYm9sc1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcnZpZXdJbnB1dFN5bWJvbHNcIikhLmlubmVyVGV4dCA9IGF1dG9tYXRhLmlucHV0U3ltYm9scy5tYXAoKHMpID0+IHMudmFsdWUpLmpvaW4oXCIsIFwiKTtcclxuICAgICAgICAvL1N0YWNrIHN5bWJvbHNcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJ2aWV3U3RhY2tTeW1ib2xzXCIpIS5pbm5lclRleHQgPSBhdXRvbWF0YS5zdGFja1N5bWJvbHMubWFwKChzKSA9PiBzLnZhbHVlKS5qb2luKFwiLCBcIik7XHJcbiAgICAgICAgLy9Jbml0aWFsIHN0YXRlXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVydmlld0luaXRpYWxTdGF0ZVwiKSEuaW5uZXJUZXh0ID0gYXV0b21hdGEuaW5pdGlhbFN0YXRlLnZhbHVlO1xyXG4gICAgICAgIC8vSW5pdGlhbCBzdGFjayBzeW1ib2xcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJ2aWV3SW5pdGlhbFN0YWNrU3ltYm9sXCIpIS5pbm5lclRleHQgPSBhdXRvbWF0YS5pbml0aWFsU3RhY2tTeW1ib2w/LnZhbHVlO1xyXG4gICAgICAgIC8vQWNjZXB0aW5nIHN0YXRlc1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcnZpZXdBY2NlcHRpbmdTdGF0ZVwiKSEuaW5uZXJUZXh0ID0gYXV0b21hdGEuYWNjZXB0aW5nU3RhdGU/Lm1hcCgocykgPT4gcy52YWx1ZSkuam9pbihcIiwgXCIpID8/IFwiQWNjZXB0YW5jZSBieSBFbXB0eSBTdGFja1wiO1xyXG4gICAgICAgIC8vVHJhbnNpdGlvbiBmdW5jdGlvbnNcclxuICAgICAgICBsZXQgdEZ1bmN0aW9uID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcnZpZXdUcmFuc3Rpb25GdW5jdGlvblwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICB0RnVuY3Rpb24uaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBmb3IobGV0IGYgb2YgYXV0b21hdGEudHJhbnNpdGlvbkZ1bmN0aW9uID8/IFtdKXtcclxuICAgICAgICAgICAgdEZ1bmN0aW9uLmFwcGVuZChVSS5nZW5lcmF0ZVRyYW5zaXRpb25GdW5jdGlvbihmKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNhdmVkQXV0b21hdGFzUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgYXV0b21hdGFPdmVydmlld1BhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUHVzaGRvd25BdXRvbWF0YVNpbXVsYXRvciB9IGZyb20gXCIuL3B1c2hkb3duQXV0b21hdGFTaW11bGF0b3JcIjtcclxuaW1wb3J0IHsgUHVzaGRvd25BdXRvbWF0YSB9IGZyb20gXCIuL3B1c2hkb3duQXV0b21hdGFcIjtcclxuaW1wb3J0IHsgVHJhbnNpdGlvbkZ1bmN0aW9uLCBJbnB1dFN5bWJvbCwgU3RhY2tTeW1ib2wsIFN0YXRlIH0gZnJvbSBcIi4vcHVzaGRvd25BdXRvbWF0YVR5cGVzXCI7XHJcbmltcG9ydCB7IG1haW5QYWdlLCBzaW11bGF0b3JQYWdlIH0gZnJvbSBcIi4vZXZlbnRzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVUl7XHJcbiAgICBzaW11bGF0b3I/OiBQdXNoZG93bkF1dG9tYXRhU2ltdWxhdG9yO1xyXG4gICAgdHJhbnN0aXRpb25IaXN0b3J5PzogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICB0YXBlPzogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBzdGFjaz86IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgc3RhdGU/OiBIVE1MRGl2RWxlbWVudDtcclxuICAgIGluZm9CdXR0b24/OiBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIHRyYW5zaXRpb25PcHRpb25zPzogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICB0YXBlRm9ybUVycm9yPzogSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbiAgICB0YXBlRm9ybT86IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgcmVzdWx0PzogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICByZXN1bHRUZXh0PzogSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcblxyXG4gICAgdGFwZVBvc2l0aW9uOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGlzQ2hvb3Npbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGlzUnVubmlnOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBkaXJlY3Rpb25Gb3J3YXJkOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHNwZWVkOiBudW1iZXIgPSAxMDAwO1xyXG5cclxuICAgIHRpbWVvdXQ6IE5vZGVKUy5UaW1lb3V0IHwgbnVsbCA9IG51bGw7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGF1dG9tYXRhPzogUHVzaGRvd25BdXRvbWF0YSl7XHJcbiAgICAgICAgaWYoYXV0b21hdGEpe1xyXG4gICAgICAgICAgICB0aGlzLnNldEF1dG9tYXRhKGF1dG9tYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5maWxsSW5mb3JtYXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50cmFuc3RpdGlvbkhpc3RvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYW5zaXRpb25IaXN0b3J5RGl2XCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIHRoaXMudGFwZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFwZURpdlwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICB0aGlzLnN0YWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFja0RpdlwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICB0aGlzLnN0YXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGF0ZURpdlwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICB0aGlzLmluZm9CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3dJbmZvQnV0dG9uXCIpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbk9wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYW5zaXRpb25PcHRpb25zXCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIHRoaXMudGFwZUZvcm1FcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFwZUZvcm1FcnJvclwiKSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICAgICAgICB0aGlzLnRhcGVGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXBlRm9ybU1vZGFsXCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIHRoaXMucmVzdWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaW11bGF0b3JSZXN1bHREaXZcIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5yZXN1bHRUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaW11bGF0b3JSZXN1bHRDb250ZW50XCIpIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNldEF1dG9tYXRhKGF1dG9tYXRhOiBQdXNoZG93bkF1dG9tYXRhKTogdm9pZHtcclxuICAgICAgICB0aGlzLnNpbXVsYXRvciA9IG5ldyBQdXNoZG93bkF1dG9tYXRhU2ltdWxhdG9yKGF1dG9tYXRhKTtcclxuICAgICAgICB0aGlzLmZpbGxJbmZvcm1hdGlvbigpO1xyXG4gICAgICAgIHRoaXMucmVzZXRVSSgpO1xyXG4gICAgICAgIHRoaXMudGFwZVBvc2l0aW9uID0gMDtcclxuICAgICAgICBpZih0aGlzLnRhcGVGb3JtKXtcclxuICAgICAgICAgICAgdGhpcy50YXBlRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyRXZlbnRzKCk6IHZvaWR7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b25OZXh0XCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5uZXh0U3RlcC5iaW5kKHRoaXMpKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbkJhY2tcIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmJhY2tTdGVwLmJpbmQodGhpcykpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3BlZWQtY29udHJvbFwiKT8uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZXZlbnQ6IElucHV0RXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zcGVlZCA9IHBhcnNlSW50KChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uTmV4dEF1dG9cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaXNSdW5uaWcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbkZvcndhcmQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5leHRTdGVwKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b25CYWNrQXV0b1wiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYodGhpcy50aW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pc1J1bm5pZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uRm9yd2FyZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmJhY2tTdGVwKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b25TdG9wXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZih0aGlzLnRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0ID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmlzUnVubmlnID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG93VGFwZU1vZGFsQnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudGFwZUZvcm0pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFwZUZvcm0uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaWRlU2V0VGFwZUJ1dHRvblwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYodGhpcy50YXBlRm9ybSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXBlRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNldFRhcGVcIikuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB0aGlzLnNldFRhcGVGb3JtLmJpbmQodGhpcykpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFwZUlucHV0XCIpPy5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2ZW50OiBJbnB1dEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0YXBlSW5wdXQ6IHN0cmluZyA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tUYXBlSW5wdXRWYWxpZGl0eSh0YXBlSW5wdXQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2VTaW11bGF0b3JCdXR0b25cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzaW11bGF0b3JQYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgbWFpblBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgICAgICBpZih0aGlzLnRpbWVvdXQpe1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaWRlUmVzdWx0QnV0dG9uXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZih0aGlzLnJlc3VsdCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFRhcGVGb3JtKGV2ZW50OiBTdWJtaXRFdmVudCk6IHZvaWR7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgZm9ybSA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRm9ybUVsZW1lbnQ7XHJcbiAgICAgICAgbGV0IHRhcGVJbnB1dCA9IGZvcm0uZWxlbWVudHMubmFtZWRJdGVtKFwidGFwZUlucHV0XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgaWYodGhpcy5jaGVja1RhcGVJbnB1dFZhbGlkaXR5KHRhcGVJbnB1dC52YWx1ZSkpe1xyXG4gICAgICAgICAgICB0aGlzLnNldFRhcGUodGFwZUlucHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgaWYodGhpcy50YXBlRm9ybSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcGVGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja1RhcGVJbnB1dFZhbGlkaXR5KHRhcGVJbnB1dDogc3RyaW5nKTogYm9vbGVhbntcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNoZWNraW5nIHRhcGUgaW5wdXRcIik7XHJcbiAgICAgICAgaWYoIXRoaXMuc2ltdWxhdG9yKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgbGV0IGFsbG93ZWQgPSB0aGlzLnNpbXVsYXRvci5hdXRvbWF0YS5pbnB1dFN5bWJvbHMubWFwKChzKSA9PiBzLnZhbHVlKTtcclxuICAgICAgICBmb3IobGV0IHMgb2YgdGFwZUlucHV0KXtcclxuICAgICAgICAgICAgaWYoIWFsbG93ZWQuaW5jbHVkZXMocykpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXBlRm9ybUVycm9yPy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGFwZUZvcm1FcnJvcj8uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBzaG93UmVzdWx0KHRleHQ6IHN0cmluZyl7XHJcbiAgICAgICAgaWYodGhpcy5yZXN1bHRUZXh0KXtcclxuICAgICAgICAgICAgdGhpcy5yZXN1bHRUZXh0LmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMucmVzdWx0KXtcclxuICAgICAgICAgICAgdGhpcy5yZXN1bHQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2VuZXJhdGVUcmFuc2l0aW9uRnVuY3Rpb24oZjogVHJhbnNpdGlvbkZ1bmN0aW9uKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgICAgIGxldCByZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIHJlcy5jbGFzc0xpc3QuYWRkKFwiZmxleFwiLCBcImZsZXgtcm93XCIsIFwiZmxleC1ub3dyYXBcIiwgXCJqdXN0aWZ5LWNlbnRlclwiLCBcInB0LTNcIik7XHJcblxyXG4gICAgICAgIGxldCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICBsZWZ0LmlubmVyVGV4dCA9IGYuZnJvbVN0YXRlLnZhbHVlICsgXCIgXCIgKyBmLnN0YXJ0U3ltYm9sLnZhbHVlID8/IFwiXCI7XHJcbiAgICAgICAgcmVzLmFwcGVuZChsZWZ0KTtcclxuXHJcbiAgICAgICAgbGV0IGFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICBhcnJvdy5jbGFzc0xpc3QuYWRkKFwicHgtMVwiLCBcInJlbGF0aXZlXCIpO1xyXG4gICAgICAgIGFycm93LmlubmVyVGV4dCA9IFwi4pSA4pSAPlwiO1xyXG4gICAgICAgIHJlcy5hcHBlbmQoYXJyb3cpO1xyXG5cclxuICAgICAgICBsZXQgc3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICBzeW1ib2wuY2xhc3NMaXN0LmFkZChcImFic29sdXRlXCIsIFwidG9wLTBcIiwgXCJsZWZ0LTEvMlwiLCBcIi10cmFuc2xhdGUteC1bMTAwJV1cIiwgXCItdHJhbnNsYXRlLXktMlwiKTtcclxuICAgICAgICBzeW1ib2wuaW5uZXJUZXh0ID0gZi5pbnB1dFN5bWJvbC5pc0Vwc3lsb24gPyBcIs61XCIgOiBmLmlucHV0U3ltYm9sLnZhbHVlO1xyXG4gICAgICAgIGFycm93LmFwcGVuZChzeW1ib2wpO1xyXG5cclxuICAgICAgICBsZXQgcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIHJpZ2h0LmlubmVyVGV4dCA9IGYudG9TdGF0ZS52YWx1ZSArIFwiIFwiICsgZi5wdXNoZWRTeW1ib2xzLm1hcChzID0+IHMudmFsdWUpLmpvaW4oXCJcIik7XHJcbiAgICAgICAgcmVzLmFwcGVuZChyaWdodCk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsbEluZm9ybWF0aW9uKCk6IHZvaWR7XHJcbiAgICAgICAgLy9TdGF0ZXNcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm9TdGF0ZXNcIikhLmlubmVyVGV4dCA9IHRoaXMuc2ltdWxhdG9yPy5hdXRvbWF0YS5zdGF0ZXMubWFwKChzKSA9PiBzLnZhbHVlKS5qb2luKFwiLCBcIik7XHJcbiAgICAgICAgLy9JbnB1dCBzeW1ib2xzXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvSW5wdXRTeW1ib2xzXCIpIS5pbm5lclRleHQgPSB0aGlzLnNpbXVsYXRvcj8uYXV0b21hdGEuaW5wdXRTeW1ib2xzLm1hcCgocykgPT4gcy52YWx1ZSkuam9pbihcIiwgXCIpO1xyXG4gICAgICAgIC8vU3RhY2sgc3ltYm9sc1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mb1N0YWNrU3ltYm9sc1wiKSEuaW5uZXJUZXh0ID0gdGhpcy5zaW11bGF0b3I/LmF1dG9tYXRhLnN0YWNrU3ltYm9scy5tYXAoKHMpID0+IHMudmFsdWUpLmpvaW4oXCIsIFwiKTtcclxuICAgICAgICAvL0luaXRpYWwgc3RhdGVcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm9Jbml0aWFsU3RhdGVcIikhLmlubmVyVGV4dCA9IHRoaXMuc2ltdWxhdG9yPy5hdXRvbWF0YS5pbml0aWFsU3RhdGUudmFsdWU7XHJcbiAgICAgICAgLy9Jbml0aWFsIHN0YWNrIHN5bWJvbFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mb0luaXRpYWxTdGFja1N5bWJvbFwiKSEuaW5uZXJUZXh0ID0gdGhpcy5zaW11bGF0b3I/LmF1dG9tYXRhLmluaXRpYWxTdGFja1N5bWJvbD8udmFsdWU7XHJcbiAgICAgICAgLy9BY2NlcHRpbmcgc3RhdGVzXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvQWNjZXB0aW5nU3RhdGVcIikhLmlubmVyVGV4dCA9IHRoaXMuc2ltdWxhdG9yPy5hdXRvbWF0YS5hY2NlcHRpbmdTdGF0ZT8ubWFwKChzKSA9PiBzLnZhbHVlKS5qb2luKFwiLCBcIikgPz8gXCJBY2NlcHRhbmNlIGJ5IEVtcHR5IFN0YWNrXCI7XHJcbiAgICAgICAgLy9UcmFuc2l0aW9uIGZ1bmN0aW9uc1xyXG4gICAgICAgIGxldCB0RnVuY3Rpb24gPSAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvVHJhbnN0aW9uRnVuY3Rpb25cIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgdEZ1bmN0aW9uLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgZm9yKGxldCBmIG9mIHRoaXMuc2ltdWxhdG9yPy5hdXRvbWF0YS50cmFuc2l0aW9uRnVuY3Rpb24gPz8gW10pe1xyXG4gICAgICAgICAgICB0RnVuY3Rpb24uYXBwZW5kKFVJLmdlbmVyYXRlVHJhbnNpdGlvbkZ1bmN0aW9uKGYpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVG9IaXN0b3J5KGY6IFRyYW5zaXRpb25GdW5jdGlvbik6IHZvaWR7XHJcbiAgICAgICAgaWYodGhpcy50cmFuc3RpdGlvbkhpc3Rvcnkpe1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zdGl0aW9uSGlzdG9yeS5wcmVwZW5kKFVJLmdlbmVyYXRlVHJhbnNpdGlvbkZ1bmN0aW9uKGYpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlRnJvbUhpc3RvcnkoKTogdm9pZHtcclxuICAgICAgICBpZih0aGlzLnRyYW5zdGl0aW9uSGlzdG9yeSAmJiB0aGlzLnRyYW5zdGl0aW9uSGlzdG9yeS5jaGlsZEVsZW1lbnRDb3VudCA+IDApe1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zdGl0aW9uSGlzdG9yeS5yZW1vdmVDaGlsZCh0aGlzLnRyYW5zdGl0aW9uSGlzdG9yeS5maXJzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVG9UYXBlKHM6IElucHV0U3ltYm9sLCBhcHBlbmQ/OiBib29sZWFuKTogdm9pZHtcclxuICAgICAgICBsZXQgc3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICBzeW1ib2wuY2xhc3NMaXN0LmFkZChcImJnLXJlZC01MDBcIixcImgtMTZcIixcInctMTZcIixcIm0tMlwiLFwiZmxleC1zaHJpbmstMFwiLFwiZmxleFwiLFwianVzdGlmeS1jZW50ZXJcIixcIml0ZW1zLWNlbnRlclwiKVxyXG4gICAgICAgIHN5bWJvbC5pbm5lclRleHQgPSBzLnZhbHVlO1xyXG4gICAgICAgIGlmKGFwcGVuZCAmJiBhcHBlbmQgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIHRoaXMudGFwZT8uYXBwZW5kKHN5bWJvbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMudGFwZT8ucHJlcGVuZChzeW1ib2wpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVGcm9tVGFwZSgpOiB2b2lke1xyXG4gICAgICAgIGlmKHRoaXMudGFwZSAmJiB0aGlzLnRhcGUuY2hpbGRFbGVtZW50Q291bnQgPiAwKXtcclxuICAgICAgICAgICAgdGhpcy50YXBlLnJlbW92ZUNoaWxkKHRoaXMudGFwZS5maXJzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgIDAgLT4gcmVhZFxyXG4gICAgMSAtPiByZWFkaW5nXHJcbiAgICAyIC0+IG5vdCByZWFkXHJcbiAgICAqL1xyXG4gICAgc2V0U3ltYm9sVG9TdGF0ZShzOiBIVE1MRGl2RWxlbWVudCwgc3RhdGU6IG51bWJlcil7XHJcbiAgICAgICAgaWYocyl7XHJcbiAgICAgICAgICAgIHN3aXRjaChzdGF0ZSl7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6e1xyXG4gICAgICAgICAgICAgICAgICAgIHMuY2xhc3NMaXN0LnJlbW92ZShcImJnLXJlZC01MDBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcy5jbGFzc0xpc3QucmVtb3ZlKFwiYmctcmVkLTkwMFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzLmNsYXNzTGlzdC5hZGQoXCJiZy1yZWQtMzAwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSAxOntcclxuICAgICAgICAgICAgICAgICAgICBzLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1yZWQtMzAwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHMuY2xhc3NMaXN0LnJlbW92ZShcImJnLXJlZC01MDBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcy5jbGFzc0xpc3QuYWRkKFwiYmctcmVkLTkwMFwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OntcclxuICAgICAgICAgICAgICAgICAgICBzLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1yZWQtMzAwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHMuY2xhc3NMaXN0LnJlbW92ZShcImJnLXJlZC05MDBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcy5jbGFzc0xpc3QuYWRkKFwiYmctcmVkLTUwMFwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZVRhcGUoYmFja3dhcmQ6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWR7XHJcbiAgICAgICAgbGV0IHN5bWJvbHMgPSB0aGlzLnRhcGU/LmNoaWxkcmVuO1xyXG4gICAgICAgIGlmKHN5bWJvbHMgJiYgc3ltYm9scy5sZW5ndGggPiAxKXtcclxuICAgICAgICAgICAgaWYoYmFja3dhcmQgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcGVQb3NpdGlvbi0tO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTeW1ib2xUb1N0YXRlKHN5bWJvbHNbdGhpcy50YXBlUG9zaXRpb24rMV0gYXMgSFRNTERpdkVsZW1lbnQsIDIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy50YXBlUG9zaXRpb24rMSwgMik7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnRhcGVQb3NpdGlvbiA+PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN5bWJvbFRvU3RhdGUoc3ltYm9sc1t0aGlzLnRhcGVQb3NpdGlvbl0gYXMgSFRNTERpdkVsZW1lbnQsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudGFwZVBvc2l0aW9uLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXBlUG9zaXRpb24rKztcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3ltYm9sVG9TdGF0ZShzeW1ib2xzW3RoaXMudGFwZVBvc2l0aW9uLTFdIGFzIEhUTUxEaXZFbGVtZW50LCAwKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudGFwZVBvc2l0aW9uLTEsIDApO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy50YXBlUG9zaXRpb24gPCBzeW1ib2xzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTeW1ib2xUb1N0YXRlKHN5bWJvbHNbdGhpcy50YXBlUG9zaXRpb25dIGFzIEhUTUxEaXZFbGVtZW50LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRhcGVQb3NpdGlvbiwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlU3RhdGUoczogU3RhdGUpOiB2b2lke1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUpe1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmlubmVyVGV4dCA9IHMudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZFRvU3RhY2soczogU3RhY2tTeW1ib2wpOiB2b2lke1xyXG4gICAgICAgIGxldCBzeW1ib2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIHN5bWJvbC5jbGFzc0xpc3QuYWRkKFwiYmctZ3JlZW4tNTAwXCIsXCJoLTE2XCIsXCJ3LTE2XCIsXCJtLTJcIixcImZsZXgtc2hyaW5rLTBcIixcImZsZXhcIixcImp1c3RpZnktY2VudGVyXCIsXCJpdGVtcy1jZW50ZXJcIixcImZpcnN0Om10LWF1dG9cIilcclxuICAgICAgICBzeW1ib2wuaW5uZXJUZXh0ID0gcy52YWx1ZTtcclxuICAgICAgICB0aGlzLnN0YWNrPy5wcmVwZW5kKHN5bWJvbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlRnJvbVN0YWNrKCk6IHZvaWR7XHJcbiAgICAgICAgaWYodGhpcy5zdGFjayAmJiB0aGlzLnN0YWNrLmNoaWxkRWxlbWVudENvdW50ID4gMCl7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhY2sucmVtb3ZlQ2hpbGQodGhpcy5zdGFjay5maXJzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRVSSgpOiB2b2lke1xyXG4gICAgICAgIGlmKHRoaXMuc3RhY2spe1xyXG4gICAgICAgICAgICB0aGlzLnN0YWNrLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLnN0YXRlKXtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLnRhcGUpe1xyXG4gICAgICAgICAgICB0aGlzLnRhcGUuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMudHJhbnN0aXRpb25IaXN0b3J5KXtcclxuICAgICAgICAgICAgdGhpcy50cmFuc3RpdGlvbkhpc3RvcnkuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuc2ltdWxhdG9yKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5pbm5lclRleHQgPSB0aGlzLnNpbXVsYXRvci5hdXRvbWF0YS5pbml0aWFsU3RhdGUudmFsdWU7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc2ltdWxhdG9yLmF1dG9tYXRhLmluaXRpYWxTdGFja1N5bWJvbCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFRvU3RhY2sodGhpcy5zaW11bGF0b3IuYXV0b21hdGEuaW5pdGlhbFN0YWNrU3ltYm9sKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pc0Nob29zaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc1J1bm5pZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uRm9yd2FyZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IDEwMDA7XHJcbiAgICAgICAgaWYodGhpcy50aW1lb3V0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XHJcbiAgICAgICAgICAgIHRoaXMudGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGFwZVBvc2l0aW9uID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5yZXN1bHQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRhcGUodGFwZTogc3RyaW5nKTogdm9pZHtcclxuICAgICAgICB0aGlzLnNpbXVsYXRvcj8uc2V0TmV3SW5wdXQodGFwZSk7XHJcbiAgICAgICAgdGhpcy5yZXNldFVJKCk7XHJcbiAgICAgICAgaWYodGhpcy50YXBlKXtcclxuICAgICAgICAgICAgdGhpcy50YXBlLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGZvcihsZXQgcyBvZiB0YXBlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9UYXBlKHtpc0Vwc3lsb246IGZhbHNlLCB2YWx1ZTogc30sIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0ZW1wID0gdGhpcy50YXBlPy5jaGlsZHJlblswXSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICBpZih0ZW1wKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTeW1ib2xUb1N0YXRlKHRlbXAsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1c2VUcmFuc2l0aW9uKGY6IFRyYW5zaXRpb25GdW5jdGlvbik6IHZvaWR7XHJcbiAgICAgICAgY29uc29sZS5sb2coZik7XHJcbiAgICAgICAgdGhpcy5zaW11bGF0b3I/LmFwcGx5VHJhbnNpdGlvbkZ1bmN0aW9uKGYpO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoZi50b1N0YXRlKTtcclxuICAgICAgICBpZighZi5pbnB1dFN5bWJvbC5pc0Vwc3lsb24pe1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVUYXBlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGYuc3RhcnRTeW1ib2wgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRnJvbVN0YWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgaSA9IGYucHVzaGVkU3ltYm9scy5sZW5ndGgtMTsgaSA+PSAwOyBpLS0pe1xyXG4gICAgICAgICAgICB0aGlzLmFkZFRvU3RhY2soZi5wdXNoZWRTeW1ib2xzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hZGRUb0hpc3RvcnkoZik7XHJcbiAgICAgICAgdGhpcy5pc0Nob29zaW5nID0gZmFsc2U7XHJcbiAgICAgICAgaWYodGhpcy5zaW11bGF0b3I/LmFjY2VwdGVkSW5wdXQoKSl7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1Jlc3VsdChcIlRoZSBpbnB1dCB3YXMgYWNjZXB0ZWQgYnkgdGhlIGF1dG9tYXRvcy5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2VuZXJhdGVPcHRpb25zKG9wdGlvbnM6IFRyYW5zaXRpb25GdW5jdGlvbltdKTogdm9pZHtcclxuICAgICAgICBpZih0aGlzLmluZm9CdXR0b24pe1xyXG4gICAgICAgICAgICB0aGlzLmluZm9CdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImZsZXhcIik7XHJcbiAgICAgICAgICAgIHRoaXMuaW5mb0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnRyYW5zaXRpb25PcHRpb25zKXtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uT3B0aW9ucy5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IG8gb2Ygb3B0aW9ucyl7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgICAgICAgICBvcHRpb24uY2xhc3NMaXN0LmFkZChcInB4LTJcIixcInB5LTFcIixcIm14LWF1dG9cIik7XHJcbiAgICAgICAgICAgIG9wdGlvbi5hcHBlbmQoVUkuZ2VuZXJhdGVUcmFuc2l0aW9uRnVuY3Rpb24obykpO1xyXG4gICAgICAgICAgICBvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlVHJhbnNpdGlvbihvKTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMudHJhbnNpdGlvbk9wdGlvbnMpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbk9wdGlvbnMuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuaW5mb0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZmxleFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5mb0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5pc1J1bm5pZyAmJiB0aGlzLmRpcmVjdGlvbkZvcndhcmQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpciA9IHRoaXMuZGlyZWN0aW9uRm9yd2FyZDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5pc1J1bm5pZyAmJiB0aGlzLmRpcmVjdGlvbkZvcndhcmQgPT0gZGlyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0U3RlcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIHRoaXMuc3BlZWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uT3B0aW9ucz8uYXBwZW5kKG9wdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5leHRTdGVwKCk6IHZvaWR7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy50YXBlUG9zaXRpb24pO1xyXG4gICAgICAgIGlmKCF0aGlzLmlzQ2hvb3Npbmcpe1xyXG4gICAgICAgICAgICBpZih0aGlzLnNpbXVsYXRvcil7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zc2libGVUcmFuc3Rpb25zOiBUcmFuc2l0aW9uRnVuY3Rpb25bXSA9IHRoaXMuc2ltdWxhdG9yLm5leHRTdGVwKCk7XHJcbiAgICAgICAgICAgICAgICBpZihwb3NzaWJsZVRyYW5zdGlvbnMubGVuZ3RoID09IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuaXNSdW5uaWcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUnVubmlnID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMudGltZW91dCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuc2ltdWxhdG9yLmFjY2VwdGVkSW5wdXQoKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Jlc3VsdChcIlRoZSBpbnB1dCB3YXMgbm90IGFjY2VwdGVkIGJ5IHRoZSBhdXRvbWF0b3MuIE5vIHBvc3NpYmxlIHRyYW5zaXRpb25zIHRvIGJlIG1hZGUuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYocG9zc2libGVUcmFuc3Rpb25zLmxlbmd0aCA9PSAxKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZVRyYW5zaXRpb24ocG9zc2libGVUcmFuc3Rpb25zWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmlzUnVubmlnICYmIHRoaXMuZGlyZWN0aW9uRm9yd2FyZClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkaXIgPSB0aGlzLmRpcmVjdGlvbkZvcndhcmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5pc1J1bm5pZyAmJiB0aGlzLmRpcmVjdGlvbkZvcndhcmQgPT0gZGlyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dFN0ZXAoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGhpcy5zcGVlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQ2hvb3NpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVPcHRpb25zKHBvc3NpYmxlVHJhbnN0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYmFja1N0ZXAoKTogdm9pZHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRhcGVQb3NpdGlvbik7XHJcbiAgICAgICAgaWYodGhpcy5pc0Nob29zaW5nKXtcclxuICAgICAgICAgICAgdGhpcy5pc0Nob29zaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudHJhbnNpdGlvbk9wdGlvbnMpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uT3B0aW9ucy5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaW5mb0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZmxleFwiKTtcclxuICAgICAgICAgICAgdGhpcy5pbmZvQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5zaW11bGF0b3Ipe1xyXG4gICAgICAgICAgICBsZXQgbGFzdCA9IHRoaXMuc2ltdWxhdG9yLmJhY2tTdGVwKCk7XHJcbiAgICAgICAgICAgIGlmKGxhc3Qpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tSGlzdG9yeSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShsYXN0LmZyb21TdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICBpZighbGFzdC5pbnB1dFN5bWJvbC5pc0Vwc3lsb24pe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVRhcGUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGFzdC5wdXNoZWRTeW1ib2xzLmxlbmd0aDsgaSsrKXsgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tU3RhY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGxhc3Quc3RhcnRTeW1ib2wgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRUb1N0YWNrKGxhc3Quc3RhcnRTeW1ib2wpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5pc1J1bm5pZyAmJiAhdGhpcy5kaXJlY3Rpb25Gb3J3YXJkKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXIgPSB0aGlzLmRpcmVjdGlvbkZvcndhcmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuaXNSdW5uaWcgJiYgdGhpcy5kaXJlY3Rpb25Gb3J3YXJkID09IGRpcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFja1N0ZXAoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCB0aGlzLnNwZWVkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgVUkgfSBmcm9tIFwiLi91aVwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJFdmVudHMgfSBmcm9tIFwiLi9ldmVudHNcIjtcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5pbXBvcnQgeyBGb3JtQXV0b21hdGFCdWlsZGVyIH0gZnJvbSBcIi4vZm9ybUF1dG9tYXRhQnVpbGRlclwiO1xuXG5sZXQgc3RvcmFnZTogU3RvcmFnZTtcbmxldCB1aTogVUk7XG5sZXQgYXV0b21hdGFCdWlsZGVyOiBGb3JtQXV0b21hdGFCdWlsZGVyO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgdWkgPSBuZXcgVUkoKTtcbiAgICBzdG9yYWdlID0gbmV3IFN0b3JhZ2UodWkpO1xuICAgIGF1dG9tYXRhQnVpbGRlciA9IG5ldyBGb3JtQXV0b21hdGFCdWlsZGVyKHN0b3JhZ2UsIHVpKTtcbiAgICByZWdpc3RlckV2ZW50cyhzdG9yYWdlKTtcbiAgICB1aS5yZWdpc3RlckV2ZW50cygpO1xuICAgIHN0b3JhZ2UucmVnaXN0ZXJFdmVudHMoKTtcbiAgICBhdXRvbWF0YUJ1aWxkZXIucmVnaXN0ZXJFdmVudHMoKTtcbiAgICB1aS5zZXRUYXBlKFwiYWFiYlwiKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9