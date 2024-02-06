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
function registerEvents() {
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
/* harmony import */ var _pushdownAutomataTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pushdownAutomataTypes */ "./src/pushdownAutomataTypes.ts");

class FormAutomataBuilder {
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
    constructor() {
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
        //errors
        //TODO: Clear errors
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
        this.newItem(_pushdownAutomataTypes__WEBPACK_IMPORTED_MODULE_0__.compareState, item, 'State');
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
        this.newItem(_pushdownAutomataTypes__WEBPACK_IMPORTED_MODULE_0__.compareInputSymbol, item, 'InputSymbol');
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
        this.newItem(_pushdownAutomataTypes__WEBPACK_IMPORTED_MODULE_0__.compareStackSymbol, item, 'StackSymbol');
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
            this.acceptingStatesSelect.disabled = true;
        }
        else {
            this.acceptingStates = [];
            this.acceptingStatesSelect.disabled = false;
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
        //TODO: Check all five parts and save
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
            let keyboardButton = this.createKeyboardButton(item);
            if (type === 'State') {
                button.addEventListener('click', this.deleteState.bind(this, item, div, keyboardButton));
                this.statesDiv.append(div);
                this.stateAdded(item, keyboardButton);
            }
            else if (type === 'InputSymbol') {
                button.addEventListener('click', this.deleteInputSymbol.bind(this, item, div, keyboardButton));
                this.inputSymbolDiv.append(div);
                this.inputSymbolAdded(item, keyboardButton);
            }
            else if (type === 'StackSymbol') {
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
        this.stateDeleted(item);
        keyboardButton.remove();
        //TODO: Clear div
    }
    deleteInputSymbol(item, div, keyboardButton) {
        this.inputSymbolDiv.removeChild(div);
        this.inputSymbols.splice(this.inputSymbols.indexOf(item), 1);
        this.inputSymbolDeleted(item);
        keyboardButton.remove();
        //TODO: Clear div
    }
    deleteStackSymbol(item, div, keyboardButton) {
        this.stackSymbolDiv.removeChild(div);
        this.stackSymbols.splice(this.stackSymbols.indexOf(item), 1);
        this.stackSymbolDeleted(item);
        keyboardButton.remove();
        //TODO: Clear div
    }
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
    }
    ;
    inputSymbolAdded(item, keyboardButton) {
        this.keyboardInputSymbol.append(keyboardButton);
    }
    ;
    stackSymbolAdded(item, keyboardButton) {
        let option = document.createElement('option');
        option.value = item.value;
        option.innerText = item.value;
        option.id = "stackSymbolOption" + item.value;
        this.initialStackSymbolSelect.append(option);
        this.keyboardStackSymbol.append(keyboardButton);
    }
    ;
    stateDeleted(item) {
        let option = this.initialStateSelect.options.namedItem("initialStateOption" + item.value);
        if (option && option.selected) {
            option.remove();
            this.initialStateSelect.options[0].selected = true;
        }
        let option2 = this.acceptingStatesSelect.options.namedItem("acceptingStateOption" + item.value);
        if (option2 && option2.selected) {
            option2.remove();
        }
        //TODO: Delete from transition function
        //TODO: Check already defined transition functions
    }
    ;
    inputSymbolDeleted(item) {
        //TODO: Delete from transition function
        //TODO: Check already defined transition functions
    }
    ;
    stackSymbolDeleted(item) {
        let option = this.initialStateSelect.options.namedItem("stackSymbolOption" + item.value);
        if (option && option.selected) {
            option.remove();
        }
        //TODO: Delete from transition function
        //TODO: Check already defined transition functions
    }
    ;
    createKeyboardButton(item) {
        let button = document.createElement('button');
        button.classList.add('flex', 'justify-center', 'items-center', 'px-2', 'h-8', 'bg-slate-100', 'm-1');
        button.innerText = item.value ?? 'ε';
        button.addEventListener('click', this.keyboardButtonPressed.bind(this));
        return button;
    }
    keyboardButtonPressed(event) {
        event.preventDefault();
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
    //FIX Delete null and fix coresponding functions
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
    //imputSymbol
    if (!compareInputSymbol(a.inputSymbol, b.inputSymbol)) {
        return false;
    }
    //startSymbol
    if (typeof (a.startSymbol) != typeof (b.startSymbol)) {
        return false;
    }
    if (a.startSymbol != null && !compareStackSymbol(a.startSymbol, b.startSymbol)) {
        return false;
    }
    //toState
    if (!compareState(a.toState, b.toState)) {
        return false;
    }
    //pushedSymbols
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
            //TODO Error
            console.log("Key or file does not exists");
            return;
        }
        let overwrite = false;
        if (this.keyExists(key)) {
            //TODO Change! No confirms!
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
            //TODO Error
            console.log("Try catch error");
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
            //TODO Change! No confirms!
            if (!confirm("Key already exists. Overwrite?")) {
                return;
            }
        }
        this.save(key, automata);
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




var storage;
var ui;
var automataBuilder;
document.addEventListener("DOMContentLoaded", () => {
    ui = new _ui__WEBPACK_IMPORTED_MODULE_0__.UI();
    storage = new _storage__WEBPACK_IMPORTED_MODULE_2__.Storage(ui);
    automataBuilder = new _formAutomataBuilder__WEBPACK_IMPORTED_MODULE_3__.FormAutomataBuilder();
    (0,_events__WEBPACK_IMPORTED_MODULE_1__.registerEvents)();
    ui.registerEvents();
    storage.registerEvents();
    automataBuilder.registerEvents();
    storage.printAutomatas();
    ui.setTape("aabb");
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztJQUMxQixlQUFlLEdBQUcsSUFBSSxxRUFBbUIsRUFBRSxDQUFDO0lBQzVDLHVEQUFjLEVBQUUsQ0FBQztJQUNqQixFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDcEIsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3pCLGVBQWUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNqQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDekIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN2QixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NpbXVsYXRpb25fb2ZfcHVzaGRvd25fYXV0b21hdGEvLi9zcmMvZXZlbnRzLnRzIiwid2VicGFjazovL3NpbXVsYXRpb25fb2ZfcHVzaGRvd25fYXV0b21hdGEvLi9zcmMvZm9ybUF1dG9tYXRhQnVpbGRlci50cyIsIndlYnBhY2s6Ly9zaW11bGF0aW9uX29mX3B1c2hkb3duX2F1dG9tYXRhLy4vc3JjL3B1c2hkb3duQXV0b21hdGEudHMiLCJ3ZWJwYWNrOi8vc2ltdWxhdGlvbl9vZl9wdXNoZG93bl9hdXRvbWF0YS8uL3NyYy9wdXNoZG93bkF1dG9tYXRhU2ltdWxhdG9yLnRzIiwid2VicGFjazovL3NpbXVsYXRpb25fb2ZfcHVzaGRvd25fYXV0b21hdGEvLi9zcmMvcHVzaGRvd25BdXRvbWF0YVR5cGVzLnRzIiwid2VicGFjazovL3NpbXVsYXRpb25fb2ZfcHVzaGRvd25fYXV0b21hdGEvLi9zcmMvc3RhY2sudHMiLCJ3ZWJwYWNrOi8vc2ltdWxhdGlvbl9vZl9wdXNoZG93bl9hdXRvbWF0YS8uL3NyYy9zdG9yYWdlLnRzIiwid2VicGFjazovL3NpbXVsYXRpb25fb2ZfcHVzaGRvd25fYXV0b21hdGEvLi9zcmMvdWkudHMiLCJ3ZWJwYWNrOi8vc2ltdWxhdGlvbl9vZl9wdXNoZG93bl9hdXRvbWF0YS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zaW11bGF0aW9uX29mX3B1c2hkb3duX2F1dG9tYXRhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zaW11bGF0aW9uX29mX3B1c2hkb3duX2F1dG9tYXRhL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc2ltdWxhdGlvbl9vZl9wdXNoZG93bl9hdXRvbWF0YS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NpbXVsYXRpb25fb2ZfcHVzaGRvd25fYXV0b21hdGEvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpdkF1dG9tYXRhRGVmaW5pdGlvbjogSFRNTERpdkVsZW1lbnQ7XHJcbnZhciBkaXZUcmFuc2l0aW9uSGlzdG9yeTogSFRNTERpdkVsZW1lbnQ7XHJcbnZhciBpbmZvRGl2OiBIVE1MRGl2RWxlbWVudDtcclxuZXhwb3J0IHZhciBtYWluUGFnZTogSFRNTERpdkVsZW1lbnQ7XHJcbmV4cG9ydCB2YXIgbWVudVBhZ2U6IEhUTUxEaXZFbGVtZW50O1xyXG5leHBvcnQgdmFyIG5ld0F1dG9tYXRhUGFnZTogSFRNTERpdkVsZW1lbnQ7XHJcbmV4cG9ydCB2YXIgc2F2ZWRBdXRvbWF0YXNQYWdlOiBIVE1MRGl2RWxlbWVudDtcclxuZXhwb3J0IHZhciBzaW11bGF0b3JQYWdlOiBIVE1MRGl2RWxlbWVudDtcclxuZXhwb3J0IHZhciBhdXRvbWF0YU92ZXJ2aWV3UGFnZTogSFRNTERpdkVsZW1lbnRcclxuZXhwb3J0IHZhciBsb2FkQXV0b21hdGFQYWdlOiBIVE1MRGl2RWxlbWVudDtcclxuXHJcbmZ1bmN0aW9uIGluZm9EaXZTd2l0Y2goKTogdm9pZCB7XHJcbiAgICBpbmZvRGl2LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XHJcbiAgICBpbmZvRGl2LmNsYXNzTGlzdC50b2dnbGUoXCJhYnNvbHV0ZVwiKTtcclxuICAgIGluZm9EaXYuY2xhc3NMaXN0LnRvZ2dsZShcInRvcC0wXCIpO1xyXG4gICAgaW5mb0Rpdi5jbGFzc0xpc3QudG9nZ2xlKFwiYm90dG9tLTBcIik7XHJcbiAgICBpbmZvRGl2LmNsYXNzTGlzdC50b2dnbGUoXCJsZWZ0LTBcIik7XHJcbiAgICBpbmZvRGl2LmNsYXNzTGlzdC50b2dnbGUoXCItcmlnaHQtMjBcIik7XHJcbiAgICBpbmZvRGl2LmNsYXNzTGlzdC50b2dnbGUoXCItdHJhbnNsYXRlLXgtMjBcIik7XHJcbiAgICBpbmZvRGl2LmNsYXNzTGlzdC50b2dnbGUoXCJtZDotcmlnaHQtMFwiKTtcclxuICAgIGluZm9EaXYuY2xhc3NMaXN0LnRvZ2dsZShcIm1kOi10cmFuc2xhdGUteC0wXCIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyRXZlbnRzKCk6IHZvaWQge1xyXG4gICAgZGl2QXV0b21hdGFEZWZpbml0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdXRvbWF0YURlZmluaXRpb25EaXZcIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBkaXZUcmFuc2l0aW9uSGlzdG9yeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhbnNpdGlvbkhpc3RvcnlEaXZcIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBpbmZvRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvRGl2XCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgbWFpblBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5QYWdlXCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgbWVudVBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVQYWdlXCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgbmV3QXV0b21hdGFQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdBdXRvbWF0YVBhZ2VcIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBzYXZlZEF1dG9tYXRhc1BhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNhdmVkQXV0YW1hdGFzUGFnZVwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIHNpbXVsYXRvclBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpbXVsYXRvclBhZ2VcIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBhdXRvbWF0YU92ZXJ2aWV3UGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXV0b21hdGFPdmVydmlld1BhZ2VcIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBsb2FkQXV0b21hdGFQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkQXV0b21hdGFQYWdlXCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXV0b21hdGFEZWZpbml0aW9uQnV0dG9uXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGRpdkF1dG9tYXRhRGVmaW5pdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIGRpdlRyYW5zaXRpb25IaXN0b3J5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhbnNpdGlvbkhpc3RvcnlCdXR0b25cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgZGl2VHJhbnNpdGlvbkhpc3Rvcnkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIGRpdkF1dG9tYXRhRGVmaW5pdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3dJbmZvQnV0dG9uXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaW5mb0RpdlN3aXRjaCk7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaWRlSW5mb0J1dHRvblwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGluZm9EaXZTd2l0Y2gpO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3QXV0b21hdGFCdXR0b25cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgbWVudVBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIG5ld0F1dG9tYXRhUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVwbG9hZEF1dG9tYXRhQnV0dG9uXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIG1lbnVQYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBsb2FkQXV0b21hdGFQYWdlLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2F2ZWRBdXRvbWF0YXNCdXR0b25cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgbWVudVBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIHNhdmVkQXV0b21hdGFzUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNhdmVkQXV0b21hdGFzQmFja0J1dHRvblwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBtZW51UGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgc2F2ZWRBdXRvbWF0YXNQYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlkZU92ZXJ2aWV3QnV0dG9uXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHNhdmVkQXV0b21hdGFzUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgYXV0b21hdGFPdmVydmlld1BhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaWRlTG9hZEJ1dHRvblwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBtZW51UGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgbG9hZEF1dG9tYXRhUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZEtleUlucHV0XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID0gXCJcIjtcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkRmlsZUlucHV0XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID0gXCJcIjtcclxuICAgIH0pO1xyXG59IiwiaW1wb3J0IHsgSW5wdXRTeW1ib2wsIFN0YWNrU3ltYm9sLCBTdGF0ZSwgVHJhbnNpdGlvbkZ1bmN0aW9uLCBjb21wYXJlSW5wdXRTeW1ib2wsIGNvbXBhcmVTdGFja1N5bWJvbCwgY29tcGFyZVN0YXRlIH0gZnJvbSBcIi4vcHVzaGRvd25BdXRvbWF0YVR5cGVzXCI7XHJcblxyXG50eXBlIGl0ZW1UeXBlID0gU3RhdGUgfCBJbnB1dFN5bWJvbCB8IFN0YWNrU3ltYm9sO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZvcm1BdXRvbWF0YUJ1aWxkZXIge1xyXG4gICAgcHJpdmF0ZSBzdGF0ZXM6IFN0YXRlW11cclxuICAgIHByaXZhdGUgaW5wdXRTeW1ib2xzOiBJbnB1dFN5bWJvbFtdXHJcbiAgICBwcml2YXRlIHN0YWNrU3ltYm9sczogU3RhY2tTeW1ib2xbXVxyXG4gICAgcHJpdmF0ZSBpbml0aWFsU3RhdGU/OiBTdGF0ZTtcclxuICAgIHByaXZhdGUgaW5pdGlhbFN0YWNrU3ltYm9sPzogU3RhY2tTeW1ib2w7XHJcbiAgICBwcml2YXRlIGFjY2VwdGluZ1N0YXRlczogU3RhdGVbXSB8IG51bGxcclxuICAgIHByaXZhdGUgdHJhbnNpdGlvbkZ1bmN0aW9uczogVHJhbnNpdGlvbkZ1bmN0aW9uW11cclxuXHJcbiAgICBwcml2YXRlIHN0YXRlc0RpdjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGlucHV0U3ltYm9sRGl2OiBIVE1MRGl2RWxlbWVudDtcclxuICAgIHByaXZhdGUgc3RhY2tTeW1ib2xEaXY6IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSB0cmFuc2l0aW9uRnVuY3Rpb25EaXY6IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICAgIHByaXZhdGUgaW5pdGlhbFN0YXRlU2VsZWN0OiBIVE1MU2VsZWN0RWxlbWVudDtcclxuICAgIHByaXZhdGUgaW5pdGlhbFN0YWNrU3ltYm9sU2VsZWN0OiBIVE1MU2VsZWN0RWxlbWVudDtcclxuICAgIHByaXZhdGUgYWNjZXB0aW5nU3RhdGVzU2VsZWN0OiBIVE1MU2VsZWN0RWxlbWVudDtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRlRXJyb3I6IEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBpbnB1dFN5bWJvbEVycm9yOiBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICAgIHByaXZhdGUgc3RhY2tTeW1ib2xFcnJvcjogSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGluaXRpYWxTdGF0ZUVycm9yOiBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICAgIHByaXZhdGUgaW5pdGlhbFN0YWNrU3ltYm9sRXJyb3I6IEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBhY2NlcHRpbmdTdGF0ZUVycm9yOiBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICAgIHByaXZhdGUgdHJhbnNpdGlvbkZ1bmN0aW9uRXJyb3I6IEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG5cclxuICAgIHByaXZhdGUga2V5Ym9hcmRTdGF0ZTogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGtleWJvYXJkSW5wdXRTeW1ib2w6IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBrZXlib2FyZFN0YWNrU3ltYm9sOiBIVE1MRGl2RWxlbWVudDtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLnN0YXRlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaW5wdXRTeW1ib2xzID0gW107XHJcbiAgICAgICAgdGhpcy5zdGFja1N5bWJvbHMgPSBbXTtcclxuICAgICAgICB0aGlzLmFjY2VwdGluZ1N0YXRlcyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25zID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGVzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0F1dG9tYXRhU3RhdGVzJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5pbnB1dFN5bWJvbERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdBdXRvbWF0YUlucHV0U3ltYm9scycpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuc3RhY2tTeW1ib2xEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3QXV0b21hdGFTdGFja1N5bWJvbHMnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICB0aGlzLnRyYW5zaXRpb25GdW5jdGlvbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdBdXRvbWF0YVRyYW5zdGl0aW9uRnVuY3Rpb25zJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdGlhbFN0YXRlU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0F1dG9tYXRhSW5pdGlhbFN0YXRlU2VsZWN0JykgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsU3RhY2tTeW1ib2xTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3QXV0b21hdGFJbml0aWFsU3RhY2tTeW1ib2xTZWxlY3QnKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcclxuICAgICAgICB0aGlzLmFjY2VwdGluZ1N0YXRlc1NlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdBdXRvbWF0YUFjY2VwdGluZ1N0YXRlc1NlbGVjdCcpIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdGVFcnJvcicpIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuaW5wdXRTeW1ib2xFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dFN5bWJvbEVycm9yJykgYXMgSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5zdGFja1N5bWJvbEVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YWNrU3ltYm9sRXJyb3InKSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICAgICAgICB0aGlzLmluaXRpYWxTdGF0ZUVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luaXRpYWxTdGF0ZUVycm9yJykgYXMgSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsU3RhY2tTeW1ib2xFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbml0aWFsU3RhY2tTeW1ib2xFcnJvcicpIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuYWNjZXB0aW5nU3RhdGVFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY2NlcHRpbmdTdGF0ZUVycm9yJykgYXMgSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25FcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFuc2l0aW9uRnVuY3Rpb25FcnJvcicpIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy5rZXlib2FyZFN0YXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2tleWJvYXJkU3RhdGUnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICB0aGlzLmtleWJvYXJkSW5wdXRTeW1ib2wgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna2V5Ym9hcmRJbnB1dFN5bWJvbCcpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIHRoaXMua2V5Ym9hcmRTdGFja1N5bWJvbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrZXlib2FyZFN0YWNrU3ltYm9sJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJFdmVudHMoKXtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3QXV0b21hdGFTdGF0ZUZvcm0nKT8uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5zdGF0ZUZvcm1TdWJtaXRIYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdBdXRvbWF0YUlucHV0U3ltYm9sRm9ybScpPy5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmlucHV0U3ltYm9sU3VibWl0SGFuZGxlci5iaW5kKHRoaXMpKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3QXV0b21hdGFTdGFja1N5bWJvbEZvcm0nKT8uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5zdGFja1N5bWJvbFN1Ym1pdEhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsU3RhdGVTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5pbml0aWFsU3RhdGVDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbFN0YWNrU3ltYm9sU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuaW5pdGlhbFN0YWNrU3ltYm9sQ2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWNjZXB0YW5jZUVtcHR5U3RhY2tDaGVja0JveCcpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYWNjZXB0aW5nU3RhdGVFbXB0eUNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5hY2NlcHRpbmdTdGF0ZXNTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5hY2NlcHRpbmdTdGF0ZXNDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVHJhbnNpdGlvbkZ1bmN0aW9uXCIpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uQWRkSGFuZGxlci5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldCgpe1xyXG4gICAgICAgIC8vZGl2c1xyXG4gICAgICAgIHRoaXMuc3RhdGVzRGl2LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHRoaXMuaW5wdXRTeW1ib2xEaXYuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgdGhpcy5zdGFja1N5bWJvbERpdi5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB0aGlzLnRyYW5zaXRpb25GdW5jdGlvbkRpdi5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAvL2lucHV0c1xyXG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdGVJbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID0gJyc7XHJcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dFN5bWJvbElucHV0JykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPSAnJztcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YWNrU3ltYm9sSW5wdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9ICcnO1xyXG4gICAgICAgIC8vc2VsZWN0c1xyXG4gICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICBvcHRpb24udmFsdWUgPSAnJztcclxuICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gJ0Nob29zZSBpbml0aWFsIHN0YXRlIC4uLic7XHJcbiAgICAgICAgb3B0aW9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIG9wdGlvbi5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbFN0YXRlU2VsZWN0LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbFN0YXRlU2VsZWN0LmFwcGVuZChvcHRpb24pO1xyXG4gICAgICAgIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgIG9wdGlvbi52YWx1ZSA9ICcnO1xyXG4gICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSAnQ2hvb3NlIGluaXRpYWwgc3RhY2sgc3ltYm9sLi4uJztcclxuICAgICAgICBvcHRpb24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgb3B0aW9uLmhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsU3RhY2tTeW1ib2xTZWxlY3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsU3RhY2tTeW1ib2xTZWxlY3QuYXBwZW5kKG9wdGlvbik7XHJcbiAgICAgICAgdGhpcy5hY2NlcHRpbmdTdGF0ZXNTZWxlY3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgdGhpcy5hY2NlcHRpbmdTdGF0ZXNTZWxlY3QuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIC8vY2hlY2tib3hcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjY2VwdGFuY2VFbXB0eVN0YWNrQ2hlY2tCb3gnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAvL2Vycm9yc1xyXG4gICAgICAgIC8vVE9ETzogQ2xlYXIgZXJyb3JzXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGVGb3JtU3VibWl0SGFuZGxlcihldmVudDogU3VibWl0RXZlbnQpe1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGZvcm0gPSBldmVudC50YXJnZXQgYXMgSFRNTEZvcm1FbGVtZW50O1xyXG4gICAgICAgIGxldCBpbnB1dEZpZWxkID0gZm9ybS5lbGVtZW50cy5uYW1lZEl0ZW0oJ3N0YXRlSW5wdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIGxldCBpbnB1dFZhbHVlID0gaW5wdXRGaWVsZC52YWx1ZTtcclxuICAgICAgICBpbnB1dEZpZWxkLnZhbHVlID0gJyc7XHJcbiAgICAgICAgbGV0IGl0ZW06IFN0YXRlID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogaW5wdXRWYWx1ZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubmV3SXRlbTxTdGF0ZT4oY29tcGFyZVN0YXRlLCBpdGVtLCAnU3RhdGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dFN5bWJvbFN1Ym1pdEhhbmRsZXIoZXZlbnQ6IFN1Ym1pdEV2ZW50KXtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBmb3JtID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxGb3JtRWxlbWVudDtcclxuICAgICAgICBsZXQgaW5wdXRGaWVsZCA9IGZvcm0uZWxlbWVudHMubmFtZWRJdGVtKCdpbnB1dFN5bWJvbElucHV0JykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICBsZXQgaW5wdXRWYWx1ZSA9IGlucHV0RmllbGQudmFsdWU7XHJcbiAgICAgICAgaW5wdXRGaWVsZC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGxldCBpdGVtOiBJbnB1dFN5bWJvbCA9IHtcclxuICAgICAgICAgICAgaXNFcHN5bG9uOiBmYWxzZSxcclxuICAgICAgICAgICAgdmFsdWU6IGlucHV0VmFsdWUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm5ld0l0ZW08SW5wdXRTeW1ib2w+KGNvbXBhcmVJbnB1dFN5bWJvbCwgaXRlbSwgJ0lucHV0U3ltYm9sJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHN0YWNrU3ltYm9sU3VibWl0SGFuZGxlcihldmVudDogU3VibWl0RXZlbnQpe1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGZvcm0gPSBldmVudC50YXJnZXQgYXMgSFRNTEZvcm1FbGVtZW50O1xyXG4gICAgICAgIGxldCBpbnB1dEZpZWxkID0gZm9ybS5lbGVtZW50cy5uYW1lZEl0ZW0oJ3N0YWNrU3ltYm9sSW5wdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIGxldCBpbnB1dFZhbHVlID0gaW5wdXRGaWVsZC52YWx1ZTtcclxuICAgICAgICBpbnB1dEZpZWxkLnZhbHVlID0gJyc7XHJcbiAgICAgICAgbGV0IGl0ZW06IFN0YWNrU3ltYm9sID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogaW5wdXRWYWx1ZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubmV3SXRlbTxTdGFja1N5bWJvbD4oY29tcGFyZVN0YWNrU3ltYm9sLCBpdGVtLCAnU3RhY2tTeW1ib2wnKTtcclxuICAgIH07XHJcblxyXG4gICAgaW5pdGlhbFN0YXRlQ2hhbmdlSGFuZGxlcihldmVudDogRXZlbnQpe1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IHNlbGVjdCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MU2VsZWN0RWxlbWVudDtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRPcHRpb24gPSBzZWxlY3Qub3B0aW9uc1tzZWxlY3Quc2VsZWN0ZWRJbmRleF07XHJcbiAgICAgICAgaWYoc2VsZWN0ZWRPcHRpb24udmFsdWUgPT09ICcnKXtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsU3RhdGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0ge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHNlbGVjdGVkT3B0aW9uLnZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsU3RhdGUgPSBpdGVtO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaW5pdGlhbFN0YWNrU3ltYm9sQ2hhbmdlSGFuZGxlcihldmVudDogRXZlbnQpe1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IHNlbGVjdCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MU2VsZWN0RWxlbWVudDtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRPcHRpb24gPSBzZWxlY3Qub3B0aW9uc1tzZWxlY3Quc2VsZWN0ZWRJbmRleF07XHJcbiAgICAgICAgaWYoc2VsZWN0ZWRPcHRpb24udmFsdWUgPT09ICcnKXtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsU3RhY2tTeW1ib2wgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0ge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHNlbGVjdGVkT3B0aW9uLnZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsU3RhY2tTeW1ib2wgPSBpdGVtO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgYWNjZXB0aW5nU3RhdGVFbXB0eUNoYW5nZUhhbmRsZXIoZXZlbnQ6IEV2ZW50KXtcclxuICAgICAgICBsZXQgY2hlY2tib3ggPSBldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICBpZihjaGVja2JveC5jaGVja2VkKXtcclxuICAgICAgICAgICAgZm9yKGxldCBhIG9mIHRoaXMuc3RhdGVzKXtcclxuICAgICAgICAgICAgICAgIGxldCBvcHRpb24gPSB0aGlzLmFjY2VwdGluZ1N0YXRlc1NlbGVjdC5vcHRpb25zLm5hbWVkSXRlbShcImFjY2VwdGluZ1N0YXRlT3B0aW9uXCIgKyBhLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGlmKG9wdGlvbil7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5hY2NlcHRpbmdTdGF0ZXMgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmFjY2VwdGluZ1N0YXRlc1NlbGVjdC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuYWNjZXB0aW5nU3RhdGVzID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuYWNjZXB0aW5nU3RhdGVzU2VsZWN0LmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBhY2NlcHRpbmdTdGF0ZXNDaGFuZ2VIYW5kbGVyKGV2ZW50OiBFdmVudCl7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLmFjY2VwdGluZ1N0YXRlcyA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgYSBvZiB0aGlzLnN0YXRlcyl7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSB0aGlzLmFjY2VwdGluZ1N0YXRlc1NlbGVjdC5vcHRpb25zLm5hbWVkSXRlbShcImFjY2VwdGluZ1N0YXRlT3B0aW9uXCIgKyBhLnZhbHVlKTtcclxuICAgICAgICAgICAgaWYob3B0aW9uKXtcclxuICAgICAgICAgICAgICAgIGlmKG9wdGlvbi5zZWxlY3RlZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NlcHRpbmdTdGF0ZXM/LnB1c2goYSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hY2NlcHRpbmdTdGF0ZXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICB0cmFuc2l0aW9uRnVuY3Rpb25BZGRIYW5kbGVyKGV2ZW50OiBFdmVudCl7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvL1RPRE86IENoZWNrIGFsbCBmaXZlIHBhcnRzIGFuZCBzYXZlXHJcbiAgICB9XHJcblxyXG4gICAgbmV3SXRlbTxUIGV4dGVuZHMgaXRlbVR5cGU+KGNvbXBhcmVGdW5jdGlvbjogKGFyZzE6IFQsIGFyZzI6IFQpID0+IGJvb2xlYW4sIGl0ZW06IFQsIHR5cGU6IHN0cmluZyk6IHZvaWR7XHJcbiAgICAgICAgbGV0IGFyciA6IFRbXTtcclxuICAgICAgICBsZXQgZXJyb3I6IEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gICAgICAgIGxldCBlcnJvck1zZzogc3RyaW5nO1xyXG4gICAgICAgIGlmKHR5cGUgPT09ICdTdGF0ZScpe1xyXG4gICAgICAgICAgICBhcnIgPSB0aGlzLnN0YXRlcyBhcyBUW107XHJcbiAgICAgICAgICAgIGVycm9yID0gdGhpcy5zdGF0ZUVycm9yO1xyXG4gICAgICAgICAgICBlcnJvck1zZyA9ICdFcnJvcjogU3RhdGUgYWxyZWFkeSBleGlzdHMnO1xyXG4gICAgICAgIH0gZWxzZSBpZih0eXBlID09PSAnSW5wdXRTeW1ib2wnKXtcclxuICAgICAgICAgICAgYXJyID0gdGhpcy5pbnB1dFN5bWJvbHMgYXMgVFtdO1xyXG4gICAgICAgICAgICBlcnJvciA9IHRoaXMuaW5wdXRTeW1ib2xFcnJvcjtcclxuICAgICAgICAgICAgZXJyb3JNc2cgPSAnRXJyb3I6IElucHV0IHN5bWJvbCBhbHJlYWR5IGV4aXN0cyc7XHJcbiAgICAgICAgfSBlbHNlIGlmKHR5cGUgPT09ICdTdGFja1N5bWJvbCcpe1xyXG4gICAgICAgICAgICBhcnIgPSB0aGlzLnN0YWNrU3ltYm9scyBhcyBUW107XHJcbiAgICAgICAgICAgIGVycm9yID0gdGhpcy5zdGFja1N5bWJvbEVycm9yO1xyXG4gICAgICAgICAgICBlcnJvck1zZyA9ICdFcnJvcjogU3RhY2sgc3ltYm9sIGFscmVhZHkgZXhpc3RzJztcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGV4aXN0cyA9IGZhbHNlO1xyXG4gICAgICAgIGZvcihsZXQgaSBvZiBhcnIpe1xyXG4gICAgICAgICAgICBpZihjb21wYXJlRnVuY3Rpb24oaSwgaXRlbSkpe1xyXG4gICAgICAgICAgICAgICAgZXhpc3RzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFleGlzdHMpe1xyXG4gICAgICAgICAgICBhcnIucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZmxleCcsICdwLTInLCAnYmctc2xhdGUtMTAwJywgJ3JvdW5kZWQnLCAnbS0yJyk7XHJcbiAgICAgICAgICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBwLmNsYXNzTGlzdC5hZGQoJ3ByLTInKTtcclxuICAgICAgICAgICAgcC5pbm5lclRleHQgPSBpdGVtLnZhbHVlID8/ICfOtSc7XHJcbiAgICAgICAgICAgIGRpdi5hcHBlbmQocCk7XHJcbiAgICAgICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3JvdW5kZWQtZnVsbCcsICdiZy1zbGF0ZS0zMDAnLCAndy02JywgJ2gtNicpO1xyXG4gICAgICAgICAgICBidXR0b24uaW5uZXJUZXh0ID0gJ1gnO1xyXG4gICAgICAgICAgICBkaXYuYXBwZW5kKGJ1dHRvbik7XHJcbiAgICAgICAgICAgIGxldCBrZXlib2FyZEJ1dHRvbiA9IHRoaXMuY3JlYXRlS2V5Ym9hcmRCdXR0b24oaXRlbSk7XHJcbiAgICAgICAgICAgIGlmKHR5cGUgPT09ICdTdGF0ZScpe1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kZWxldGVTdGF0ZS5iaW5kKHRoaXMsIGl0ZW0sIGRpdiwga2V5Ym9hcmRCdXR0b24pKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVzRGl2LmFwcGVuZChkaXYpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZUFkZGVkKGl0ZW0gYXMgU3RhdGUsIGtleWJvYXJkQnV0dG9uKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHR5cGUgPT09ICdJbnB1dFN5bWJvbCcpe1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kZWxldGVJbnB1dFN5bWJvbC5iaW5kKHRoaXMsIGl0ZW0sIGRpdiwga2V5Ym9hcmRCdXR0b24pKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRTeW1ib2xEaXYuYXBwZW5kKGRpdik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0U3ltYm9sQWRkZWQoaXRlbSBhcyBJbnB1dFN5bWJvbCwga2V5Ym9hcmRCdXR0b24pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYodHlwZSA9PT0gJ1N0YWNrU3ltYm9sJyl7XHJcbiAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRlbGV0ZVN0YWNrU3ltYm9sLmJpbmQodGhpcywgaXRlbSwgZGl2LCBrZXlib2FyZEJ1dHRvbikpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFja1N5bWJvbERpdi5hcHBlbmQoZGl2KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhY2tTeW1ib2xBZGRlZChpdGVtIGFzIFN0YWNrU3ltYm9sLCBrZXlib2FyZEJ1dHRvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgZXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIGVycm9yLmlubmVyVGV4dCA9IGVycm9yTXNnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVTdGF0ZShpdGVtOiBTdGF0ZSwgZGl2OiBIVE1MRGl2RWxlbWVudCwga2V5Ym9hcmRCdXR0b246IEhUTUxCdXR0b25FbGVtZW50KXtcclxuICAgICAgICB0aGlzLnN0YXRlc0Rpdi5yZW1vdmVDaGlsZChkaXYpO1xyXG4gICAgICAgIHRoaXMuc3RhdGVzLnNwbGljZSh0aGlzLnN0YXRlcy5pbmRleE9mKGl0ZW0pLCAxKTtcclxuICAgICAgICB0aGlzLnN0YXRlRGVsZXRlZChpdGVtKTtcclxuICAgICAgICBrZXlib2FyZEJ1dHRvbi5yZW1vdmUoKTtcclxuICAgICAgICAvL1RPRE86IENsZWFyIGRpdlxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUlucHV0U3ltYm9sKGl0ZW06IElucHV0U3ltYm9sLCBkaXY6IEhUTUxEaXZFbGVtZW50LCBrZXlib2FyZEJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQpe1xyXG4gICAgICAgIHRoaXMuaW5wdXRTeW1ib2xEaXYucmVtb3ZlQ2hpbGQoZGl2KTtcclxuICAgICAgICB0aGlzLmlucHV0U3ltYm9scy5zcGxpY2UodGhpcy5pbnB1dFN5bWJvbHMuaW5kZXhPZihpdGVtKSwgMSk7XHJcbiAgICAgICAgdGhpcy5pbnB1dFN5bWJvbERlbGV0ZWQoaXRlbSk7XHJcbiAgICAgICAga2V5Ym9hcmRCdXR0b24ucmVtb3ZlKCk7XHJcbiAgICAgICAgLy9UT0RPOiBDbGVhciBkaXZcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVTdGFja1N5bWJvbChpdGVtOiBTdGFja1N5bWJvbCwgZGl2OiBIVE1MRGl2RWxlbWVudCwga2V5Ym9hcmRCdXR0b246IEhUTUxCdXR0b25FbGVtZW50KXtcclxuICAgICAgICB0aGlzLnN0YWNrU3ltYm9sRGl2LnJlbW92ZUNoaWxkKGRpdik7XHJcbiAgICAgICAgdGhpcy5zdGFja1N5bWJvbHMuc3BsaWNlKHRoaXMuc3RhY2tTeW1ib2xzLmluZGV4T2YoaXRlbSksIDEpO1xyXG4gICAgICAgIHRoaXMuc3RhY2tTeW1ib2xEZWxldGVkKGl0ZW0pO1xyXG4gICAgICAgIGtleWJvYXJkQnV0dG9uLnJlbW92ZSgpO1xyXG4gICAgICAgIC8vVE9ETzogQ2xlYXIgZGl2XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGVBZGRlZChpdGVtOiBTdGF0ZSwga2V5Ym9hcmRCdXR0b246IEhUTUxCdXR0b25FbGVtZW50KXtcclxuICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gaXRlbS52YWx1ZTtcclxuICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gaXRlbS52YWx1ZTtcclxuICAgICAgICBvcHRpb24uaWQgPSBcImluaXRpYWxTdGF0ZU9wdGlvblwiICsgaXRlbS52YWx1ZTtcclxuICAgICAgICB0aGlzLmluaXRpYWxTdGF0ZVNlbGVjdC5hcHBlbmQob3B0aW9uKTtcclxuXHJcbiAgICAgICAgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gaXRlbS52YWx1ZTtcclxuICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gaXRlbS52YWx1ZTtcclxuICAgICAgICBvcHRpb24uaWQgPSBcImFjY2VwdGluZ1N0YXRlT3B0aW9uXCIgKyBpdGVtLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuYWNjZXB0aW5nU3RhdGVzU2VsZWN0LmFwcGVuZChvcHRpb24pO1xyXG5cclxuICAgICAgICB0aGlzLmtleWJvYXJkU3RhdGUuYXBwZW5kKGtleWJvYXJkQnV0dG9uKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIGlucHV0U3ltYm9sQWRkZWQoaXRlbTogSW5wdXRTeW1ib2wsIGtleWJvYXJkQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCl7XHJcbiAgICAgICAgdGhpcy5rZXlib2FyZElucHV0U3ltYm9sLmFwcGVuZChrZXlib2FyZEJ1dHRvbik7XHJcbiAgICB9O1xyXG5cclxuICAgIHN0YWNrU3ltYm9sQWRkZWQoaXRlbTogU3RhY2tTeW1ib2wsIGtleWJvYXJkQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCl7XHJcbiAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IGl0ZW0udmFsdWU7XHJcbiAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IGl0ZW0udmFsdWU7XHJcbiAgICAgICAgb3B0aW9uLmlkID0gXCJzdGFja1N5bWJvbE9wdGlvblwiICsgaXRlbS52YWx1ZTtcclxuICAgICAgICB0aGlzLmluaXRpYWxTdGFja1N5bWJvbFNlbGVjdC5hcHBlbmQob3B0aW9uKTtcclxuXHJcbiAgICAgICAgdGhpcy5rZXlib2FyZFN0YWNrU3ltYm9sLmFwcGVuZChrZXlib2FyZEJ1dHRvbik7XHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRlRGVsZXRlZChpdGVtOiBTdGF0ZSl7XHJcbiAgICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuaW5pdGlhbFN0YXRlU2VsZWN0Lm9wdGlvbnMubmFtZWRJdGVtKFwiaW5pdGlhbFN0YXRlT3B0aW9uXCIgKyBpdGVtLnZhbHVlKVxyXG4gICAgICAgIGlmKG9wdGlvbiAmJiBvcHRpb24uc2VsZWN0ZWQpe1xyXG4gICAgICAgICAgICBvcHRpb24ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFN0YXRlU2VsZWN0Lm9wdGlvbnNbMF0uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgb3B0aW9uMiA9IHRoaXMuYWNjZXB0aW5nU3RhdGVzU2VsZWN0Lm9wdGlvbnMubmFtZWRJdGVtKFwiYWNjZXB0aW5nU3RhdGVPcHRpb25cIiArIGl0ZW0udmFsdWUpXHJcbiAgICAgICAgaWYob3B0aW9uMiAmJiBvcHRpb24yLnNlbGVjdGVkKXtcclxuICAgICAgICAgICAgb3B0aW9uMi5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9UT0RPOiBEZWxldGUgZnJvbSB0cmFuc2l0aW9uIGZ1bmN0aW9uXHJcbiAgICAgICAgLy9UT0RPOiBDaGVjayBhbHJlYWR5IGRlZmluZWQgdHJhbnNpdGlvbiBmdW5jdGlvbnNcclxuICAgIH07XHJcblxyXG4gICAgaW5wdXRTeW1ib2xEZWxldGVkKGl0ZW06IElucHV0U3ltYm9sKXtcclxuICAgICAgICAvL1RPRE86IERlbGV0ZSBmcm9tIHRyYW5zaXRpb24gZnVuY3Rpb25cclxuICAgICAgICAvL1RPRE86IENoZWNrIGFscmVhZHkgZGVmaW5lZCB0cmFuc2l0aW9uIGZ1bmN0aW9uc1xyXG4gICAgfTtcclxuXHJcbiAgICBzdGFja1N5bWJvbERlbGV0ZWQoaXRlbTogU3RhY2tTeW1ib2wpe1xyXG4gICAgICAgIGxldCBvcHRpb24gPSB0aGlzLmluaXRpYWxTdGF0ZVNlbGVjdC5vcHRpb25zLm5hbWVkSXRlbShcInN0YWNrU3ltYm9sT3B0aW9uXCIgKyBpdGVtLnZhbHVlKVxyXG4gICAgICAgIGlmKG9wdGlvbiAmJiBvcHRpb24uc2VsZWN0ZWQpe1xyXG4gICAgICAgICAgICBvcHRpb24ucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vVE9ETzogRGVsZXRlIGZyb20gdHJhbnNpdGlvbiBmdW5jdGlvblxyXG4gICAgICAgIC8vVE9ETzogQ2hlY2sgYWxyZWFkeSBkZWZpbmVkIHRyYW5zaXRpb24gZnVuY3Rpb25zXHJcbiAgICB9O1xyXG5cclxuICAgIGNyZWF0ZUtleWJvYXJkQnV0dG9uKGl0ZW06IGl0ZW1UeXBlKTogSFRNTEJ1dHRvbkVsZW1lbnR7XHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmbGV4JywgJ2p1c3RpZnktY2VudGVyJywgJ2l0ZW1zLWNlbnRlcicsICdweC0yJywgJ2gtOCcsICdiZy1zbGF0ZS0xMDAnLCAnbS0xJyk7XHJcbiAgICAgICAgYnV0dG9uLmlubmVyVGV4dCA9IGl0ZW0udmFsdWUgPz8gJ861JztcclxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmtleWJvYXJkQnV0dG9uUHJlc3NlZC5iaW5kKHRoaXMpKTtcclxuICAgICAgICByZXR1cm4gYnV0dG9uO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBrZXlib2FyZEJ1dHRvblByZXNzZWQoZXZlbnQ6IEV2ZW50KXtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU3RhdGUsIElucHV0U3ltYm9sLCBTdGFja1N5bWJvbCwgVHJhbnNpdGlvbkZ1bmN0aW9uIH0gZnJvbSBcIi4vcHVzaGRvd25BdXRvbWF0YVR5cGVzXCI7XHJcbmltcG9ydCB7IGNvbXBhcmVTdGF0ZSwgY29tcGFyZUlucHV0U3ltYm9sLCBjb21wYXJlU3RhY2tTeW1ib2wgfSBmcm9tIFwiLi9wdXNoZG93bkF1dG9tYXRhVHlwZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQdXNoZG93bkF1dG9tYXRhe1xyXG4gICAgc3RhdGVzOiBTdGF0ZVtdO1xyXG4gICAgaW5wdXRTeW1ib2xzOiBJbnB1dFN5bWJvbFtdO1xyXG4gICAgc3RhY2tTeW1ib2xzOiBTdGFja1N5bWJvbFtdO1xyXG4gICAgaW5pdGlhbFN0YXRlOiBTdGF0ZTtcclxuICAgIC8vRklYIERlbGV0ZSBudWxsIGFuZCBmaXggY29yZXNwb25kaW5nIGZ1bmN0aW9uc1xyXG4gICAgaW5pdGlhbFN0YWNrU3ltYm9sOiBTdGFja1N5bWJvbCB8IG51bGw7XHJcbiAgICBhY2NlcHRpbmdTdGF0ZTogU3RhdGVbXSB8IG51bGw7XHJcbiAgICB0cmFuc2l0aW9uRnVuY3Rpb246IFRyYW5zaXRpb25GdW5jdGlvbltdO1xyXG4gICAgY29uc3RydWN0b3Ioc3RhdGVzOiBTdGF0ZVtdLCBpbnB1dFN5bWJvbHM6IElucHV0U3ltYm9sW10sIHN0YWNrU3ltYm9sczogU3RhY2tTeW1ib2xbXSwgaW5pdGlhbFN0YXRlOiBTdGF0ZSwgaW5pdGlhbFN0YWNrU3ltYm9sOiBTdGFja1N5bWJvbCwgYWNjZXB0aW5nU3RhdGU6IFN0YXRlW10gfCBudWxsLCB0cmFuc2l0aW9uRnVuY3Rpb246IFRyYW5zaXRpb25GdW5jdGlvbltdKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc3RhdGVzID0gc3RhdGVzO1xyXG4gICAgICAgIHRoaXMuaW5wdXRTeW1ib2xzID0gaW5wdXRTeW1ib2xzO1xyXG4gICAgICAgIHRoaXMuc3RhY2tTeW1ib2xzID0gc3RhY2tTeW1ib2xzO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbFN0YXRlID0gaW5pdGlhbFN0YXRlO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbFN0YWNrU3ltYm9sID0gaW5pdGlhbFN0YWNrU3ltYm9sO1xyXG4gICAgICAgIHRoaXMuYWNjZXB0aW5nU3RhdGUgPSBhY2NlcHRpbmdTdGF0ZTtcclxuICAgICAgICB0aGlzLnRyYW5zaXRpb25GdW5jdGlvbiA9IHRyYW5zaXRpb25GdW5jdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRlRXhpc3RzKHN0YXRlOiBTdGF0ZSk6IGJvb2xlYW57XHJcbiAgICAgICAgZm9yKGxldCBzIG9mIHRoaXMuc3RhdGVzKXtcclxuICAgICAgICAgICAgaWYoY29tcGFyZVN0YXRlKHMsIHN0YXRlKSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5wdXRTeW1ib2xFeGlzdHMoaW5wdXRTeW1ib2w6IElucHV0U3ltYm9sKTogYm9vbGVhbntcclxuICAgICAgICBmb3IobGV0IGkgb2YgdGhpcy5pbnB1dFN5bWJvbHMpe1xyXG4gICAgICAgICAgICBpZihjb21wYXJlSW5wdXRTeW1ib2woaSwgaW5wdXRTeW1ib2wpKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGFja1N5bWJvbEV4aXN0cyhzdGFja1N5bWJvbDogU3RhY2tTeW1ib2wpOiBib29sZWFue1xyXG4gICAgICAgIGZvcihsZXQgcyBvZiB0aGlzLnN0YWNrU3ltYm9scyl7XHJcbiAgICAgICAgICAgIGlmKGNvbXBhcmVTdGFja1N5bWJvbChzLCBzdGFja1N5bWJvbCkpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja1N0YXRlc0V4aXN0ZW5jZSgpIDpbc3RyaW5nLCBTdGF0ZV1bXXtcclxuICAgICAgICB2YXIgZXJyb3JNc2cgOltzdHJpbmcsIFN0YXRlXVtdID0gW107XHJcblxyXG4gICAgICAgIGlmKCF0aGlzLnN0YXRlRXhpc3RzKHRoaXMuaW5pdGlhbFN0YXRlKSl7XHJcbiAgICAgICAgICAgIGVycm9yTXNnLnB1c2goW1wiSW5pdGlhbCBzdGF0ZSBkb2VzIG5vdCBleGlzdFwiLCB0aGlzLmluaXRpYWxTdGF0ZV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5hY2NlcHRpbmdTdGF0ZSAhPSBudWxsKXtcclxuICAgICAgICAgICAgZm9yKGxldCBmaW5hbFN0YXRlIG9mIHRoaXMuYWNjZXB0aW5nU3RhdGUpe1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuc3RhdGVFeGlzdHMoZmluYWxTdGF0ZSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTXNnLnB1c2goW1wiQWNjZXB0aW5nIHN0YXRlIGRvZXMgbm90IGV4aXN0XCIsIGZpbmFsU3RhdGVdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGVycm9yTXNnO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjaGVja1N5bWJvbEV4aXN0ZW5jZSgpIDpbc3RyaW5nLCBTdGFja1N5bWJvbF1bXXtcclxuICAgICAgICB2YXIgZXJyb3JNc2cgOltzdHJpbmcsIFN0YWNrU3ltYm9sXVtdID0gW107XHJcblxyXG4gICAgICAgIGlmKHRoaXMuaW5pdGlhbFN0YWNrU3ltYm9sICE9IG51bGwpe1xyXG4gICAgICAgICAgICBpZighdGhpcy5zdGFja1N5bWJvbEV4aXN0cyh0aGlzLmluaXRpYWxTdGFja1N5bWJvbCkpe1xyXG4gICAgICAgICAgICAgICAgZXJyb3JNc2cucHVzaChbXCJJbml0aWFsIHN0YWNrIHN5bWJvbCBkb2VzIG5vdCBleGlzdFwiLCB0aGlzLmluaXRpYWxTdGFja1N5bWJvbF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZXJyb3JNc2c7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNoZWNrVHJhbnNpdGlvbkZ1bmN0aW9ucygpIDpbc3RyaW5nLCBUcmFuc2l0aW9uRnVuY3Rpb25dW117XHJcbiAgICAgICAgdmFyIGVycm9yTXNnIDpbc3RyaW5nLCBUcmFuc2l0aW9uRnVuY3Rpb25dW10gPSBbXTtcclxuXHJcbiAgICAgICAgZm9yKGxldCB0cmFuc2l0aW9uRnVuY3Rpb24gb2YgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb24pe1xyXG4gICAgICAgICAgICBpZighdGhpcy5zdGF0ZUV4aXN0cyh0cmFuc2l0aW9uRnVuY3Rpb24uZnJvbVN0YXRlKSl7XHJcbiAgICAgICAgICAgICAgICBlcnJvck1zZy5wdXNoKFtcIkZyb20gc3RhdGUgZG9lcyBub3QgZXhpc3RcIiwgdHJhbnNpdGlvbkZ1bmN0aW9uXSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmlucHV0U3ltYm9sRXhpc3RzKHRyYW5zaXRpb25GdW5jdGlvbi5pbnB1dFN5bWJvbCkpe1xyXG4gICAgICAgICAgICAgICAgZXJyb3JNc2cucHVzaChbXCJJbnB1dCBzeW1ib2wgZG9lcyBub3QgZXhpc3RcIiwgdHJhbnNpdGlvbkZ1bmN0aW9uXSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHRyYW5zaXRpb25GdW5jdGlvbi5zdGFydFN5bWJvbCAhPSBudWxsICYmICF0aGlzLnN0YWNrU3ltYm9sRXhpc3RzKHRyYW5zaXRpb25GdW5jdGlvbi5zdGFydFN5bWJvbCkpe1xyXG4gICAgICAgICAgICAgICAgZXJyb3JNc2cucHVzaChbXCJTdGFjayBzeW1ib2wgZG9lcyBub3QgZXhpc3RcIiwgdHJhbnNpdGlvbkZ1bmN0aW9uXSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKCF0aGlzLnN0YXRlRXhpc3RzKHRyYW5zaXRpb25GdW5jdGlvbi50b1N0YXRlKSl7XHJcbiAgICAgICAgICAgICAgICBlcnJvck1zZy5wdXNoKFtcIlRvIHN0YXRlIGRvZXMgbm90IGV4aXN0XCIsIHRyYW5zaXRpb25GdW5jdGlvbl0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IHB1c2hlZFN5bWJvbCBvZiB0cmFuc2l0aW9uRnVuY3Rpb24ucHVzaGVkU3ltYm9scyl7XHJcbiAgICAgICAgICAgICAgICBpZighdGhpcy5zdGFja1N5bWJvbEV4aXN0cyhwdXNoZWRTeW1ib2wpKXtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvck1zZy5wdXNoKFtcIlB1c2hlZCBzeW1ib2wgZG9lcyBub3QgZXhpc3RcIiwgdHJhbnNpdGlvbkZ1bmN0aW9uXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBlcnJvck1zZztcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0lucHV0VGFwZVZhbGlkaXR5KGlucHV0VGFwZTogc3RyaW5nKTogc3RyaW5nW117XHJcbiAgICAgICAgbGV0IGludmFsaWRTeW1ib2xzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBzeW1ib2xzID0gbmV3IFNldChpbnB1dFRhcGUuc3BsaXQoXCJcIikpO1xyXG5cclxuICAgICAgICBmb3IobGV0IHMgb2Ygc3ltYm9scyl7XHJcbiAgICAgICAgICAgIGxldCBpbnZhbGlkOiBib29sZWFuID0gdHJ1ZTtcclxuICAgICAgICAgICAgZm9yKGxldCBpbnB1dFN5bWJvbCBvZiB0aGlzLmlucHV0U3ltYm9scyl7XHJcbiAgICAgICAgICAgICAgICBpZihpbnB1dFN5bWJvbC5pc0Vwc3lsb24gPT0gZmFsc2UgJiYgaW5wdXRTeW1ib2wudmFsdWUgPT0gcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaW52YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGludmFsaWQpe1xyXG4gICAgICAgICAgICAgICAgaW52YWxpZFN5bWJvbHMucHVzaChzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGludmFsaWRTeW1ib2xzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRyYW5zaXRpb25GdW5jdGlvbnModGFwZVN5bWJvbDogc3RyaW5nLCBzdGF0ZTogU3RhdGUsIHN0YWNrU3ltYm9sOiAgU3RhY2tTeW1ib2wgfCBudWxsKTogVHJhbnNpdGlvbkZ1bmN0aW9uW117XHJcbiAgICAgICAgbGV0IHBvc3NpYmxlVHJhbnNpdGlvbkZ1bmN0aW9uczogVHJhbnNpdGlvbkZ1bmN0aW9uW10gPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IGlucHV0U3ltYm9sOiBJbnB1dFN5bWJvbDtcclxuICAgICAgICBpZih0YXBlU3ltYm9sID09PSBcIlwiKXtcclxuICAgICAgICAgICAgaW5wdXRTeW1ib2wgPSB7aXNFcHN5bG9uOiB0cnVlfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBpbnB1dFN5bWJvbCA9IHtpc0Vwc3lsb246IGZhbHNlLCB2YWx1ZTogdGFwZVN5bWJvbH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgdHJhbnNpdGlvbkZ1bmN0aW9uIG9mIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uKXtcclxuICAgICAgICAgICAgaWYoIWNvbXBhcmVJbnB1dFN5bWJvbChpbnB1dFN5bWJvbCwgdHJhbnNpdGlvbkZ1bmN0aW9uLmlucHV0U3ltYm9sKSAmJiAhdHJhbnNpdGlvbkZ1bmN0aW9uLmlucHV0U3ltYm9sLmlzRXBzeWxvbil7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZighY29tcGFyZVN0YXRlKHN0YXRlLCB0cmFuc2l0aW9uRnVuY3Rpb24uZnJvbVN0YXRlKSl7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZighY29tcGFyZVN0YWNrU3ltYm9sKHN0YWNrU3ltYm9sLCB0cmFuc2l0aW9uRnVuY3Rpb24uc3RhcnRTeW1ib2wpKXtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBvc3NpYmxlVHJhbnNpdGlvbkZ1bmN0aW9ucy5wdXNoKHRyYW5zaXRpb25GdW5jdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcG9zc2libGVUcmFuc2l0aW9uRnVuY3Rpb25zO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU3RhY2sgfSBmcm9tIFwiLi9zdGFja1wiO1xyXG5pbXBvcnQgeyBTdGFja1N5bWJvbCwgU3RhdGUsIFRyYW5zaXRpb25GdW5jdGlvbiB9IGZyb20gXCIuL3B1c2hkb3duQXV0b21hdGFUeXBlc1wiO1xyXG5pbXBvcnQgeyBjb21wYXJlU3RhdGUgfSBmcm9tIFwiLi9wdXNoZG93bkF1dG9tYXRhVHlwZXNcIjtcclxuaW1wb3J0IHsgUHVzaGRvd25BdXRvbWF0YSB9IGZyb20gXCIuL3B1c2hkb3duQXV0b21hdGFcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQdXNoZG93bkF1dG9tYXRhU2ltdWxhdG9ye1xyXG4gICAgaW5wdXRUYXBlOiBzdHJpbmc7XHJcbiAgICBzdGFjazogU3RhY2s8U3RhY2tTeW1ib2w+O1xyXG4gICAgY3VycmVudFN0YXRlOiBTdGF0ZTtcclxuICAgIGFjY2VwdGluZ1N0YXRlOiBTdGF0ZVtdIHwgbnVsbDtcclxuICAgIGF1dG9tYXRhOiBQdXNoZG93bkF1dG9tYXRhO1xyXG4gICAgaGlzdG9yeTogVHJhbnNpdGlvbkZ1bmN0aW9uW10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihhdXRvbWF0YTogUHVzaGRvd25BdXRvbWF0YSl7XHJcbiAgICAgICAgdGhpcy5hdXRvbWF0YSA9IGF1dG9tYXRhO1xyXG4gICAgICAgIHRoaXMuaW5wdXRUYXBlID0gXCJcIjtcclxuICAgICAgICB0aGlzLnN0YWNrID0gbmV3IFN0YWNrPFN0YWNrU3ltYm9sPigpO1xyXG4gICAgICAgIGlmKHRoaXMuYXV0b21hdGEuaW5pdGlhbFN0YWNrU3ltYm9sICE9IG51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLnN0YWNrLnB1c2godGhpcy5hdXRvbWF0YS5pbml0aWFsU3RhY2tTeW1ib2wpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IHRoaXMuYXV0b21hdGEuaW5pdGlhbFN0YXRlO1xyXG4gICAgICAgIHRoaXMuYWNjZXB0aW5nU3RhdGUgPSB0aGlzLmF1dG9tYXRhLmFjY2VwdGluZ1N0YXRlO1xyXG4gICAgICAgIHRoaXMuaGlzdG9yeSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KCk6IHZvaWR7XHJcbiAgICAgICAgdGhpcy5pbnB1dFRhcGUgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuc3RhY2suY2xlYXIoKTtcclxuICAgICAgICBpZih0aGlzLmF1dG9tYXRhLmluaXRpYWxTdGFja1N5bWJvbCAhPSBudWxsKXtcclxuICAgICAgICAgICAgdGhpcy5zdGFjay5wdXNoKHRoaXMuYXV0b21hdGEuaW5pdGlhbFN0YWNrU3ltYm9sKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSB0aGlzLmF1dG9tYXRhLmluaXRpYWxTdGF0ZTtcclxuICAgICAgICB0aGlzLmFjY2VwdGluZ1N0YXRlID0gdGhpcy5hdXRvbWF0YS5hY2NlcHRpbmdTdGF0ZTtcclxuICAgICAgICB0aGlzLmhpc3RvcnkgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBhcHBseVRyYW5zaXRpb25GdW5jdGlvbihmOiBUcmFuc2l0aW9uRnVuY3Rpb24pOiB2b2lke1xyXG4gICAgICAgIHRoaXMuaW5wdXRUYXBlID0gdGhpcy5pbnB1dFRhcGUuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgIHRoaXMuc3RhY2sucG9wKCk7XHJcbiAgICAgICAgZm9yKGxldCBpID0gZi5wdXNoZWRTeW1ib2xzLmxlbmd0aC0xOyBpID49IDA7IGktLSl7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhY2sucHVzaChmLnB1c2hlZFN5bWJvbHNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IGYudG9TdGF0ZTtcclxuICAgICAgICB0aGlzLmhpc3RvcnkucHVzaChmKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0lucHV0VGFwZVZhbGlkaXR5KCk6IHZvaWR7XHJcbiAgICAgICAgbGV0IGludmFsaWRTeW1ib2xzOiBzdHJpbmdbXSA9IHRoaXMuYXV0b21hdGEuY2hlY2tJbnB1dFRhcGVWYWxpZGl0eSh0aGlzLmlucHV0VGFwZSk7XHJcbiAgICAgICAgaWYoaW52YWxpZFN5bWJvbHMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgaW5wdXQgdGFwZTogXCIgKyBpbnZhbGlkU3ltYm9scy5qb2luKFwiLCBcIikpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhY2NlcHRlZElucHV0KCk6IGJvb2xlYW57XHJcbiAgICAgICAgaWYodGhpcy5pbnB1dFRhcGUgIT09IFwiXCIpe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmFjY2VwdGluZ1N0YXRlID09IG51bGwpe1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGFjay5lbXB0eSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBmb3IobGV0IHMgb2YgdGhpcy5hY2NlcHRpbmdTdGF0ZSl7XHJcbiAgICAgICAgICAgIGlmKGNvbXBhcmVTdGF0ZShzLCB0aGlzLmN1cnJlbnRTdGF0ZSkpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0U3RlcCgpOiBUcmFuc2l0aW9uRnVuY3Rpb25bXXtcclxuICAgICAgICBpZih0aGlzLmFjY2VwdGVkSW5wdXQoKSl7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaW5wdXRUYXBlWzBdLCB0aGlzLmN1cnJlbnRTdGF0ZSwgdGhpcy5zdGFjay50b3AoKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hdXRvbWF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codHlwZW9mIHRoaXMuYXV0b21hdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiB0aGlzLmF1dG9tYXRhLmdldFRyYW5zaXRpb25GdW5jdGlvbnMpO1xyXG4gICAgICAgIGxldCBwb3NzaWJsZVRyYW5zaXRpb25GdW5jdGlvbnM6IFRyYW5zaXRpb25GdW5jdGlvbltdXHJcbiAgICAgICAgaWYodGhpcy5pbnB1dFRhcGUgPT09IFwiXCIpe1xyXG4gICAgICAgICAgICBwb3NzaWJsZVRyYW5zaXRpb25GdW5jdGlvbnMgPSB0aGlzLmF1dG9tYXRhLmdldFRyYW5zaXRpb25GdW5jdGlvbnMoXCJcIiwgdGhpcy5jdXJyZW50U3RhdGUsIHRoaXMuc3RhY2sudG9wKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBwb3NzaWJsZVRyYW5zaXRpb25GdW5jdGlvbnMgPSB0aGlzLmF1dG9tYXRhLmdldFRyYW5zaXRpb25GdW5jdGlvbnModGhpcy5pbnB1dFRhcGVbMF0sIHRoaXMuY3VycmVudFN0YXRlLCB0aGlzLnN0YWNrLnRvcCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBvc3NpYmxlVHJhbnNpdGlvbkZ1bmN0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICBiYWNrU3RlcCgpOiBUcmFuc2l0aW9uRnVuY3Rpb24gfCBudWxse1xyXG4gICAgICAgIGlmKHRoaXMuaGlzdG9yeS5sZW5ndGggPT09IDApe1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBsYXN0OiBUcmFuc2l0aW9uRnVuY3Rpb24gPSB0aGlzLmhpc3RvcnkucG9wKCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSBsYXN0LmZyb21TdGF0ZTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGFzdC5wdXNoZWRTeW1ib2xzLmxlbmd0aDsgaSsrKXsgXHJcbiAgICAgICAgICAgIHRoaXMuc3RhY2sucG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RhY2sucHVzaChsYXN0LnN0YXJ0U3ltYm9sKTtcclxuICAgICAgICBpZighbGFzdC5pbnB1dFN5bWJvbC5pc0Vwc3lsb24pXHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRUYXBlID0gbGFzdC5pbnB1dFN5bWJvbC52YWx1ZSArIHRoaXMuaW5wdXRUYXBlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBsYXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldE5ld0lucHV0KGlucHV0OiBzdHJpbmcpOiB2b2lke1xyXG4gICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgICAgICB0aGlzLmlucHV0VGFwZSA9IGlucHV0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vVE9ETyBDaGVjayBBdXRvbWF0YSB2YWxpZGl0eVxyXG59IiwiaW1wb3J0IHsgU3RhY2sgfSBmcm9tIFwiLi9zdGFja1wiO1xyXG5cclxuZXhwb3J0IHR5cGUgU3RhY2tTeW1ib2wgPSB7XHJcbiAgICB2YWx1ZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZVN0YWNrU3ltYm9sKGE6IFN0YWNrU3ltYm9sIHwgbnVsbCwgYjogU3RhY2tTeW1ib2wgfCBudWxsKTogYm9vbGVhbntcclxuICAgIGlmKGEgIT0gbnVsbCAmJiB0eXBlb2YoYSkgPT0gdHlwZW9mKGIpKXtcclxuICAgICAgICByZXR1cm4gYS52YWx1ZSA9PSBiLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgaWYoYSA9PSBudWxsICYmIGIgPT0gbnVsbCl7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIElucHV0U3ltYm9sID0ge1xyXG4gICAgaXNFcHN5bG9uOiBib29sZWFuO1xyXG4gICAgdmFsdWU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlSW5wdXRTeW1ib2woYTogSW5wdXRTeW1ib2wsIGI6IElucHV0U3ltYm9sKTogYm9vbGVhbntcclxuICAgIGlmKGEuaXNFcHN5bG9uID09IGIuaXNFcHN5bG9uKXtcclxuICAgICAgICBpZihhLmlzRXBzeWxvbiA9PSBmYWxzZSl7XHJcbiAgICAgICAgICAgIHJldHVybiBhLnZhbHVlID09IGIudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgU3RhdGUgPSB7XHJcbiAgICB2YWx1ZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZVN0YXRlKGE6IFN0YXRlLCBiOiBTdGF0ZSk6IGJvb2xlYW57XHJcbiAgICByZXR1cm4gYS52YWx1ZSA9PSBiLnZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBUcmFuc2l0aW9uRnVuY3Rpb24gPSB7XHJcbiAgICBmcm9tU3RhdGU6IFN0YXRlO1xyXG4gICAgaW5wdXRTeW1ib2w6IElucHV0U3ltYm9sO1xyXG4gICAgc3RhcnRTeW1ib2w6IFN0YWNrU3ltYm9sIHwgbnVsbDtcclxuICAgIHRvU3RhdGU6IFN0YXRlO1xyXG4gICAgcHVzaGVkU3ltYm9sczogU3RhY2tTeW1ib2xbXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVUcmFuc2l0aW9uRnVuY3Rpb24oYTogVHJhbnNpdGlvbkZ1bmN0aW9uLCBiOiBUcmFuc2l0aW9uRnVuY3Rpb24pOiBib29sZWFue1xyXG4gICAgLy9mcm9tU3RhdGVcclxuICAgIGlmKCFjb21wYXJlU3RhdGUoYS5mcm9tU3RhdGUsIGIuZnJvbVN0YXRlKSl7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vaW1wdXRTeW1ib2xcclxuICAgIGlmKCFjb21wYXJlSW5wdXRTeW1ib2woYS5pbnB1dFN5bWJvbCwgYi5pbnB1dFN5bWJvbCkpe1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvL3N0YXJ0U3ltYm9sXHJcbiAgICBpZih0eXBlb2YoYS5zdGFydFN5bWJvbCkgIT0gdHlwZW9mKGIuc3RhcnRTeW1ib2wpKXtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZihhLnN0YXJ0U3ltYm9sICE9IG51bGwgJiYgIWNvbXBhcmVTdGFja1N5bWJvbChhLnN0YXJ0U3ltYm9sLCBiLnN0YXJ0U3ltYm9sKSl7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vdG9TdGF0ZVxyXG4gICAgaWYoIWNvbXBhcmVTdGF0ZShhLnRvU3RhdGUsIGIudG9TdGF0ZSkpe1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvL3B1c2hlZFN5bWJvbHNcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhLnB1c2hlZFN5bWJvbHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGlmKCFjb21wYXJlU3RhY2tTeW1ib2woYS5wdXNoZWRTeW1ib2xzW2ldLCBiLnB1c2hlZFN5bWJvbHNbaV0pKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSIsImludGVyZmFjZSBJU3RhY2s8VD4ge1xyXG4gICAgcG9wKCk6IHZvaWQ7XHJcbiAgICBwdXNoKGl0ZW06IFQpOiB2b2lkO1xyXG4gICAgdG9wKCk6IFQgfCBudWxsO1xyXG4gICAgZW1wdHkoKTogYm9vbGVhbjtcclxuICAgIHNpemUoKTogbnVtYmVyO1xyXG4gICAgY2xlYXIoKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN0YWNrPFQ+IGltcGxlbWVudHMgSVN0YWNrPFQ+IHtcclxuICAgIHByaXZhdGUgZGF0YTogVFtdID0gW107XHJcblxyXG4gICAgcG9wKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGF0YS5wb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdXNoKGl0ZW06IFQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRhdGEucHVzaChpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICB0b3AoKTogVCB8IG51bGwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFbdGhpcy5kYXRhLmxlbmd0aCAtIDFdID8/IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZW1wdHkoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5sZW5ndGggPT09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgc2l6ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaW50KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSkpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUHVzaGRvd25BdXRvbWF0YSB9IGZyb20gXCIuL3B1c2hkb3duQXV0b21hdGFcIlxyXG5pbXBvcnQgeyBVSSB9IGZyb20gXCIuL3VpXCIgXHJcbmltcG9ydCB7IGF1dG9tYXRhT3ZlcnZpZXdQYWdlLCBzYXZlZEF1dG9tYXRhc1BhZ2UsIGxvYWRBdXRvbWF0YVBhZ2UsIG1haW5QYWdlLCBzaW11bGF0b3JQYWdlLCBtZW51UGFnZSB9IGZyb20gXCIuL2V2ZW50c1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0b3JhZ2V7XHJcbiAgICBzYXZlZEF1dG9tYXRhc1RhYmxlPzogSFRNTFRhYmxlRWxlbWVudDtcclxuICAgIHVpOiBVSTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih1aTogVUkpe1xyXG4gICAgICAgIHRoaXMuc2F2ZWRBdXRvbWF0YXNUYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2F2ZWRBdXRvbWF0YXNUYWJsZVwiKSBhcyBIVE1MVGFibGVFbGVtZW50O1xyXG4gICAgICAgIGlmKHVpKXtcclxuICAgICAgICAgICAgdGhpcy51aSA9IHVpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckV2ZW50cygpe1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZEZpbGVGb3JtXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdGhpcy5sb2FkRmlsZS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvYWRGaWxlKGU6IFN1Ym1pdEV2ZW50KSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBrZXlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZEtleUlucHV0XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnRcclxuICAgICAgICBsZXQga2V5ID0ga2V5SW5wdXQ/LnZhbHVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBmaWxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRGaWxlSW5wdXRcIikgYXMgSFRNTElucHV0RWxlbWVudFxyXG4gICAgICAgIGxldCBmaWxlID0gZmlsZUlucHV0Py5maWxlcz8uWzBdO1xyXG4gICAgICAgIGlmKCFrZXkgfHwgIWZpbGUpe1xyXG4gICAgICAgICAgICAvL1RPRE8gRXJyb3JcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJLZXkgb3IgZmlsZSBkb2VzIG5vdCBleGlzdHNcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG92ZXJ3cml0ZSA9IGZhbHNlO1xyXG4gICAgICAgIGlmKHRoaXMua2V5RXhpc3RzKGtleSkpe1xyXG4gICAgICAgICAgICAvL1RPRE8gQ2hhbmdlISBObyBjb25maXJtcyFcclxuICAgICAgICAgICAgaWYoIWNvbmZpcm0oXCJLZXkgYWxyZWFkeSBleGlzdHMuIE92ZXJ3cml0ZT9cIikpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBvdmVyd3JpdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGpzb25TdHIgPSByZWFkZXIucmVzdWx0IGFzIHN0cmluZztcclxuICAgICAgICAgICAgICAgIGNvbnN0IGF1dG9tYXRhID0gSlNPTi5wYXJzZShqc29uU3RyKSBhcyBQdXNoZG93bkF1dG9tYXRhO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmUoa2V5LCBhdXRvbWF0YSk7XHJcbiAgICAgICAgICAgICAgICBpZighb3ZlcndyaXRlKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluc2VydFJvdyhrZXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbG9hZEF1dG9tYXRhUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICBtZW51UGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgICAgICAgICBtYWluUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICBzaW11bGF0b3JQYWdlLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMudWkuc2V0QXV0b21hdGEodGhpcy5sb2FkQXV0b21hdGEoa2V5KSk7XHJcbiAgICAgICAgICAgICAgICBrZXlJbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBmaWxlSW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcil7XHJcbiAgICAgICAgICAgIC8vVE9ETyBFcnJvclxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRyeSBjYXRjaCBlcnJvclwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNhdmU8VD4oa2V5OiBzdHJpbmcsIGl0ZW06IFQpe1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkPFQ+KGtleTogc3RyaW5nKTogVCB8IG51bGx7XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICAgICAgaWYgKCFpdGVtKXtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGl0ZW0pIGFzIFQ7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBwYXJzaW5nIGxvY2FsU3RvcmFnZSBpdGVtIGF0IGtleSBcIiR7a2V5fVwiLmAsIGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGVsZXRlKGtleTogc3RyaW5nKXtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGtleUV4aXN0cyhrZXk6IHN0cmluZyk6IGJvb2xlYW57XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGlmKGxvY2FsU3RvcmFnZS5rZXkoaSkgPT09IGtleSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZUF1dG9tYXRhKGtleTogc3RyaW5nLCBhdXRvbWF0YTogUHVzaGRvd25BdXRvbWF0YSl7XHJcbiAgICAgICAgaWYodGhpcy5rZXlFeGlzdHMoa2V5KSl7XHJcbiAgICAgICAgICAgIC8vVE9ETyBDaGFuZ2UhIE5vIGNvbmZpcm1zIVxyXG4gICAgICAgICAgICBpZighY29uZmlybShcIktleSBhbHJlYWR5IGV4aXN0cy4gT3ZlcndyaXRlP1wiKSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zYXZlKGtleSwgYXV0b21hdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRBdXRvbWF0YShrZXk6IHN0cmluZyk6IFB1c2hkb3duQXV0b21hdGEgfCBudWxse1xyXG4gICAgICAgIHJldHVybiBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcy5sb2FkPFB1c2hkb3duQXV0b21hdGE+KGtleSksUHVzaGRvd25BdXRvbWF0YS5wcm90b3R5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5zZXJ0Um93KGtleTogc3RyaW5nKXtcclxuICAgICAgICBsZXQgYXV0b21hdGEgPSB0aGlzLmxvYWRBdXRvbWF0YShrZXkpO1xyXG4gICAgICAgIGlmKGF1dG9tYXRhKXtcclxuICAgICAgICAgICAgbGV0IHJvdyA9IHRoaXMuc2F2ZWRBdXRvbWF0YXNUYWJsZS5pbnNlcnRSb3coKTtcclxuICAgICAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoXCJib3JkZXItYlwiKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBjZWxsID0gcm93Lmluc2VydENlbGwoKVxyXG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJwLTJcIiwgXCJmb250LWJvbGRcIik7XHJcbiAgICAgICAgICAgIGNlbGwuaW5uZXJUZXh0ID0ga2V5O1xyXG5cclxuICAgICAgICAgICAgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInAtMlwiLCBcInRleHQtY2VudGVyXCIpO1xyXG4gICAgICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICc8c3ZnIGNsYXNzPVwidy02IGgtNlwidmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgNTAgNTBcIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTAgNTA7XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj48ZyBpZD1cIkxheWVyXzFcIj48cGF0aCBkPVwiTTI1LDM5YzEzLjAzNiwwLDIzLjM1Mi0xMi44MzMsMjMuNzg0LTEzLjM3OUw0OS4yNzUsMjVsLTAuNDkxLTAuNjIxQzQ4LjM1MiwyMy44MzMsMzguMDM2LDExLDI1LDExUzEuNjQ4LDIzLjgzMywxLjIxNiwyNC4zNzlMMC43MjUsMjVsMC40OTEsMC42MjFDMS42NDgsMjYuMTY3LDExLjk2NCwzOSwyNSwzOXogTTI1LDEzYzEwLjQ5NCwwLDE5LjQ3LDkuNDYsMjEuNjksMTJDNDQuNDczLDI3LjU0MiwzNS41MDksMzcsMjUsMzdDMTQuNTA2LDM3LDUuNTMsMjcuNTQsMy4zMSwyNUM1LjUyNywyMi40NTgsMTQuNDkxLDEzLDI1LDEzelwiPjwvcGF0aD48cGF0aCBkPVwiTTI1LDM0YzQuOTYzLDAsOS00LjAzOCw5LTlzLTQuMDM3LTktOS05cy05LDQuMDM4LTksOVMyMC4wMzcsMzQsMjUsMzR6IE0yNSwxOGMzLjg1OSwwLDcsMy4xNCw3LDdzLTMuMTQxLDctNyw3cy03LTMuMTQtNy03UzIxLjE0MSwxOCwyNSwxOHpcIj48L3BhdGg+PC9nPjxnPjwvZz48L3N2Zz4nO1xyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuc2hvd0F1dG9tYXRhLmJpbmQodGhpcywga2V5KSk7XHJcbiAgICAgICAgICAgIGNlbGwuYXBwZW5kKGJ1dHRvbik7XHJcblxyXG4gICAgICAgICAgICBjZWxsID0gcm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwicC0yXCIsIFwidGV4dC1jZW50ZXJcIik7XHJcbiAgICAgICAgICAgIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnPHN2ZyBjbGFzcz1cInctNiBoLTZcIiBhcmlhLWhpZGRlbj1cInRydWVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIGQ9XCJNMyAxOVY2YzAtLjYuNC0xIDEtMWg0Yy4zIDAgLjYuMS44LjRsMS45IDIuMmMuMi4zLjUuNC44LjRIMTZjLjYgMCAxIC40IDEgMXYxTTMgMTlsMy04aDE1bC0zIDhIM1pcIi8+PC9zdmc+JztcclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtYWluUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICBzaW11bGF0b3JQYWdlLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMudWkuc2V0QXV0b21hdGEodGhpcy5sb2FkQXV0b21hdGEoa2V5KSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjZWxsLmFwcGVuZChidXR0b24pO1xyXG5cclxuICAgICAgICAgICAgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInAtMlwiLCBcInRleHQtY2VudGVyXCIpO1xyXG4gICAgICAgICAgICBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gJzxzdmcgY2xhc3M9XCJ3LTYgaC02IHRleHQtZ3JheS04MDAgZGFyazp0ZXh0LXdoaXRlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjJcIiBkPVwiTTQgMTV2MmEzIDMgMCAwIDAgMyAzaDEwYTMgMyAwIDAgMCAzLTN2LTJtLTggMVY0bTAgMTItNC00bTQgNCA0LTRcIi8+PC9zdmc+JztcclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGpzb25TdHIgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmxvYWRBdXRvbWF0YShrZXkpLCBudWxsLCAyKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbanNvblN0cl0sIHt0eXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIn0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICAgICAgICAgIGEuaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgICAgIGEuZG93bmxvYWQgPSBgJHtrZXl9Lmpzb25gO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKTtcclxuICAgICAgICAgICAgICAgIGEuY2xpY2soKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYSk7XHJcbiAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgY2VsbC5hcHBlbmQoYnV0dG9uKTtcclxuXHJcbiAgICAgICAgICAgIGNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJwLTJcIiwgXCJ0ZXh0LWNlbnRlclwiKTtcclxuICAgICAgICAgICAgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICc8c3ZnIGNsYXNzPVwidy02IGgtNlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDY0IDU4LjY3XCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMzNTM1M2Q7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5Bc3NldCAyNTwvdGl0bGU+PGcgaWQ9XCJMYXllcl8yXCIgZGF0YS1uYW1lPVwiTGF5ZXIgMlwiPjxnIGlkPVwiTGF5ZXJfMS0yXCIgZGF0YS1uYW1lPVwiTGF5ZXIgMVwiPjxwYXRoIGNsYXNzPVwiY2xzLTFcIiBkPVwiTTYxLjMzLDUuMzNINDhWMi42N0EyLjY2LDIuNjYsMCwwLDAsNDUuMzMsMEgxOC42N0EyLjY2LDIuNjYsMCwwLDAsMTYsMi42N1Y1LjMzSDIuNjdhMi42NywyLjY3LDAsMCwwLDAsNS4zNEg4djQwYTgsOCwwLDAsMCw4LDhINDhhOCw4LDAsMCwwLDgtOHYtNDBoNS4zM2EyLjY3LDIuNjcsMCwxLDAsMC01LjM0Wk01MC42Nyw1MC42N0EyLjY3LDIuNjcsMCwwLDEsNDgsNTMuMzNIMTZhMi42NywyLjY3LDAsMCwxLTIuNjctMi42NnYtNDBINTAuNjdaXCI+PC9wYXRoPjxwYXRoIGNsYXNzPVwiY2xzLTFcIiBkPVwiTTI0LDQ1LjMzYTIuNjcsMi42NywwLDAsMCwyLjY3LTIuNjZWMjEuMzNhMi42NywyLjY3LDAsMCwwLTUuMzQsMFY0Mi42N0EyLjY3LDIuNjcsMCwwLDAsMjQsNDUuMzNaXCI+PC9wYXRoPjxwYXRoIGNsYXNzPVwiY2xzLTFcIiBkPVwiTTQwLDQ1LjMzYTIuNjcsMi42NywwLDAsMCwyLjY3LTIuNjZWMjEuMzNhMi42NywyLjY3LDAsMCwwLTUuMzQsMFY0Mi42N0EyLjY3LDIuNjcsMCwwLDAsNDAsNDUuMzNaXCI+PC9wYXRoPjwvZz48L2c+PC9zdmc+JztcclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZShrZXkpO1xyXG4gICAgICAgICAgICAgICAgcm93LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY2VsbC5hcHBlbmQoYnV0dG9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpbnRBdXRvbWF0YXMoKXtcclxuICAgICAgICBpZih0aGlzLnNhdmVkQXV0b21hdGFzVGFibGUpe1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGxldCBrZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnNlcnRSb3coa2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93QXV0b21hdGEoa2V5OiBzdHJpbmcpe1xyXG4gICAgICAgIGxldCBhdXRvbWF0YSA9IHRoaXMubG9hZEF1dG9tYXRhKGtleSk7XHJcbiAgICAgICAgLy9LZXkvbmFtZVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcnZpZXdOYW1lXCIpIS5pbm5lclRleHQgPSBrZXk7XHJcbiAgICAgICAgLy9TdGF0ZXNcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJ2aWV3U3RhdGVzXCIpIS5pbm5lclRleHQgPSBhdXRvbWF0YS5zdGF0ZXMubWFwKChzKSA9PiBzLnZhbHVlKS5qb2luKFwiLCBcIik7XHJcbiAgICAgICAgLy9JbnB1dCBzeW1ib2xzXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVydmlld0lucHV0U3ltYm9sc1wiKSEuaW5uZXJUZXh0ID0gYXV0b21hdGEuaW5wdXRTeW1ib2xzLm1hcCgocykgPT4gcy52YWx1ZSkuam9pbihcIiwgXCIpO1xyXG4gICAgICAgIC8vU3RhY2sgc3ltYm9sc1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcnZpZXdTdGFja1N5bWJvbHNcIikhLmlubmVyVGV4dCA9IGF1dG9tYXRhLnN0YWNrU3ltYm9scy5tYXAoKHMpID0+IHMudmFsdWUpLmpvaW4oXCIsIFwiKTtcclxuICAgICAgICAvL0luaXRpYWwgc3RhdGVcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJ2aWV3SW5pdGlhbFN0YXRlXCIpIS5pbm5lclRleHQgPSBhdXRvbWF0YS5pbml0aWFsU3RhdGUudmFsdWU7XHJcbiAgICAgICAgLy9Jbml0aWFsIHN0YWNrIHN5bWJvbFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcnZpZXdJbml0aWFsU3RhY2tTeW1ib2xcIikhLmlubmVyVGV4dCA9IGF1dG9tYXRhLmluaXRpYWxTdGFja1N5bWJvbD8udmFsdWU7XHJcbiAgICAgICAgLy9BY2NlcHRpbmcgc3RhdGVzXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVydmlld0FjY2VwdGluZ1N0YXRlXCIpIS5pbm5lclRleHQgPSBhdXRvbWF0YS5hY2NlcHRpbmdTdGF0ZT8ubWFwKChzKSA9PiBzLnZhbHVlKS5qb2luKFwiLCBcIikgPz8gXCJBY2NlcHRhbmNlIGJ5IEVtcHR5IFN0YWNrXCI7XHJcbiAgICAgICAgLy9UcmFuc2l0aW9uIGZ1bmN0aW9uc1xyXG4gICAgICAgIGxldCB0RnVuY3Rpb24gPSAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVydmlld1RyYW5zdGlvbkZ1bmN0aW9uXCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIHRGdW5jdGlvbi5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIGZvcihsZXQgZiBvZiBhdXRvbWF0YS50cmFuc2l0aW9uRnVuY3Rpb24gPz8gW10pe1xyXG4gICAgICAgICAgICB0RnVuY3Rpb24uYXBwZW5kKFVJLmdlbmVyYXRlVHJhbnNpdGlvbkZ1bmN0aW9uKGYpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2F2ZWRBdXRvbWF0YXNQYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBhdXRvbWF0YU92ZXJ2aWV3UGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQdXNoZG93bkF1dG9tYXRhU2ltdWxhdG9yIH0gZnJvbSBcIi4vcHVzaGRvd25BdXRvbWF0YVNpbXVsYXRvclwiO1xyXG5pbXBvcnQgeyBQdXNoZG93bkF1dG9tYXRhIH0gZnJvbSBcIi4vcHVzaGRvd25BdXRvbWF0YVwiO1xyXG5pbXBvcnQgeyBUcmFuc2l0aW9uRnVuY3Rpb24sIElucHV0U3ltYm9sLCBTdGFja1N5bWJvbCwgU3RhdGUgfSBmcm9tIFwiLi9wdXNoZG93bkF1dG9tYXRhVHlwZXNcIjtcclxuaW1wb3J0IHsgbWFpblBhZ2UsIHNpbXVsYXRvclBhZ2UgfSBmcm9tIFwiLi9ldmVudHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBVSXtcclxuICAgIHNpbXVsYXRvcj86IFB1c2hkb3duQXV0b21hdGFTaW11bGF0b3I7XHJcbiAgICB0cmFuc3RpdGlvbkhpc3Rvcnk/OiBIVE1MRGl2RWxlbWVudDtcclxuICAgIHRhcGU/OiBIVE1MRGl2RWxlbWVudDtcclxuICAgIHN0YWNrPzogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBzdGF0ZT86IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgaW5mb0J1dHRvbj86IEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgdHJhbnNpdGlvbk9wdGlvbnM/OiBIVE1MRGl2RWxlbWVudDtcclxuICAgIHRhcGVGb3JtRXJyb3I/OiBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICAgIHRhcGVGb3JtPzogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgdGFwZVBvc2l0aW9uOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGlzQ2hvb3Npbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGlzUnVubmlnOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBkaXJlY3Rpb25Gb3J3YXJkOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHNwZWVkOiBudW1iZXIgPSAxMDAwO1xyXG5cclxuICAgIHRpbWVvdXQ6IE5vZGVKUy5UaW1lb3V0IHwgbnVsbCA9IG51bGw7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGF1dG9tYXRhPzogUHVzaGRvd25BdXRvbWF0YSl7XHJcbiAgICAgICAgaWYoYXV0b21hdGEpe1xyXG4gICAgICAgICAgICB0aGlzLnNldEF1dG9tYXRhKGF1dG9tYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5maWxsSW5mb3JtYXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50cmFuc3RpdGlvbkhpc3RvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYW5zaXRpb25IaXN0b3J5RGl2XCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIHRoaXMudGFwZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFwZURpdlwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICB0aGlzLnN0YWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFja0RpdlwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICB0aGlzLnN0YXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGF0ZURpdlwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICB0aGlzLmluZm9CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3dJbmZvQnV0dG9uXCIpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbk9wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYW5zaXRpb25PcHRpb25zXCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIHRoaXMudGFwZUZvcm1FcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFwZUZvcm1FcnJvclwiKSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICAgICAgICB0aGlzLnRhcGVGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXBlRm9ybU1vZGFsXCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNldEF1dG9tYXRhKGF1dG9tYXRhOiBQdXNoZG93bkF1dG9tYXRhKTogdm9pZHtcclxuICAgICAgICB0aGlzLnNpbXVsYXRvciA9IG5ldyBQdXNoZG93bkF1dG9tYXRhU2ltdWxhdG9yKGF1dG9tYXRhKTtcclxuICAgICAgICB0aGlzLmZpbGxJbmZvcm1hdGlvbigpO1xyXG4gICAgICAgIHRoaXMucmVzZXRVSSgpO1xyXG4gICAgICAgIGlmKHRoaXMudGFwZUZvcm0pe1xyXG4gICAgICAgICAgICB0aGlzLnRhcGVGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJFdmVudHMoKTogdm9pZHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbk5leHRcIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLm5leHRTdGVwLmJpbmQodGhpcykpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uQmFja1wiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuYmFja1N0ZXAuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcGVlZC1jb250cm9sXCIpPy5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChldmVudDogSW5wdXRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gcGFyc2VJbnQoKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b25OZXh0QXV0b1wiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYodGhpcy50aW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pc1J1bm5pZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uRm9yd2FyZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dFN0ZXAoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbkJhY2tBdXRvXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZih0aGlzLnRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0ID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmlzUnVubmlnID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25Gb3J3YXJkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYmFja1N0ZXAoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvblN0b3BcIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaXNSdW5uaWcgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3dUYXBlTW9kYWxCdXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYodGhpcy50YXBlRm9ybSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXBlRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZGVTZXRUYXBlQnV0dG9uXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZih0aGlzLnRhcGVGb3JtKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcGVGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2V0VGFwZVwiKS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHRoaXMuc2V0VGFwZUZvcm0uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXBlSW5wdXRcIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQ6IElucHV0RXZlbnQpID0+IHtcclxuICAgICAgICAgICAgbGV0IHRhcGVJbnB1dDogc3RyaW5nID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5jaGVja1RhcGVJbnB1dFZhbGlkaXR5KHRhcGVJbnB1dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZVNpbXVsYXRvckJ1dHRvblwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNpbXVsYXRvclBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBtYWluUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudGltZW91dCl7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFRhcGVGb3JtKGV2ZW50OiBTdWJtaXRFdmVudCk6IHZvaWR7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgZm9ybSA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRm9ybUVsZW1lbnQ7XHJcbiAgICAgICAgbGV0IHRhcGVJbnB1dCA9IGZvcm0uZWxlbWVudHMubmFtZWRJdGVtKFwidGFwZUlucHV0XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgaWYodGhpcy5jaGVja1RhcGVJbnB1dFZhbGlkaXR5KHRhcGVJbnB1dC52YWx1ZSkpe1xyXG4gICAgICAgICAgICB0aGlzLnNldFRhcGUodGFwZUlucHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgaWYodGhpcy50YXBlRm9ybSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcGVGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja1RhcGVJbnB1dFZhbGlkaXR5KHRhcGVJbnB1dDogc3RyaW5nKTogYm9vbGVhbntcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNoZWNraW5nIHRhcGUgaW5wdXRcIik7XHJcbiAgICAgICAgaWYoIXRoaXMuc2ltdWxhdG9yKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgbGV0IGFsbG93ZWQgPSB0aGlzLnNpbXVsYXRvci5hdXRvbWF0YS5pbnB1dFN5bWJvbHMubWFwKChzKSA9PiBzLnZhbHVlKTtcclxuICAgICAgICBmb3IobGV0IHMgb2YgdGFwZUlucHV0KXtcclxuICAgICAgICAgICAgaWYoIWFsbG93ZWQuaW5jbHVkZXMocykpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXBlRm9ybUVycm9yPy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGFwZUZvcm1FcnJvcj8uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIGdlbmVyYXRlVHJhbnNpdGlvbkZ1bmN0aW9uKGY6IFRyYW5zaXRpb25GdW5jdGlvbik6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgICAgICBsZXQgcmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICByZXMuY2xhc3NMaXN0LmFkZChcImZsZXhcIiwgXCJmbGV4LXJvd1wiLCBcImZsZXgtbm93cmFwXCIsIFwianVzdGlmeS1jZW50ZXJcIiwgXCJwdC0zXCIpO1xyXG5cclxuICAgICAgICBsZXQgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgbGVmdC5pbm5lclRleHQgPSBmLmZyb21TdGF0ZS52YWx1ZSArIFwiIFwiICsgZi5zdGFydFN5bWJvbC52YWx1ZSA/PyBcIlwiO1xyXG4gICAgICAgIHJlcy5hcHBlbmQobGVmdCk7XHJcblxyXG4gICAgICAgIGxldCBhcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgYXJyb3cuY2xhc3NMaXN0LmFkZChcInB4LTFcIiwgXCJyZWxhdGl2ZVwiKTtcclxuICAgICAgICBhcnJvdy5pbm5lclRleHQgPSBcIuKUgOKUgD5cIjtcclxuICAgICAgICByZXMuYXBwZW5kKGFycm93KTtcclxuXHJcbiAgICAgICAgbGV0IHN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgc3ltYm9sLmNsYXNzTGlzdC5hZGQoXCJhYnNvbHV0ZVwiLCBcInRvcC0wXCIsIFwibGVmdC0xLzJcIiwgXCItdHJhbnNsYXRlLXgtWzEwMCVdXCIsIFwiLXRyYW5zbGF0ZS15LTJcIik7XHJcbiAgICAgICAgc3ltYm9sLmlubmVyVGV4dCA9IGYuaW5wdXRTeW1ib2wuaXNFcHN5bG9uID8gXCLOtVwiIDogZi5pbnB1dFN5bWJvbC52YWx1ZTtcclxuICAgICAgICBhcnJvdy5hcHBlbmQoc3ltYm9sKTtcclxuXHJcbiAgICAgICAgbGV0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICByaWdodC5pbm5lclRleHQgPSBmLnRvU3RhdGUudmFsdWUgKyBcIiBcIiArIGYucHVzaGVkU3ltYm9scy5tYXAocyA9PiBzLnZhbHVlKS5qb2luKFwiXCIpO1xyXG4gICAgICAgIHJlcy5hcHBlbmQocmlnaHQpO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbGxJbmZvcm1hdGlvbigpOiB2b2lke1xyXG4gICAgICAgIC8vU3RhdGVzXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvU3RhdGVzXCIpIS5pbm5lclRleHQgPSB0aGlzLnNpbXVsYXRvcj8uYXV0b21hdGEuc3RhdGVzLm1hcCgocykgPT4gcy52YWx1ZSkuam9pbihcIiwgXCIpO1xyXG4gICAgICAgIC8vSW5wdXQgc3ltYm9sc1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mb0lucHV0U3ltYm9sc1wiKSEuaW5uZXJUZXh0ID0gdGhpcy5zaW11bGF0b3I/LmF1dG9tYXRhLmlucHV0U3ltYm9scy5tYXAoKHMpID0+IHMudmFsdWUpLmpvaW4oXCIsIFwiKTtcclxuICAgICAgICAvL1N0YWNrIHN5bWJvbHNcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm9TdGFja1N5bWJvbHNcIikhLmlubmVyVGV4dCA9IHRoaXMuc2ltdWxhdG9yPy5hdXRvbWF0YS5zdGFja1N5bWJvbHMubWFwKChzKSA9PiBzLnZhbHVlKS5qb2luKFwiLCBcIik7XHJcbiAgICAgICAgLy9Jbml0aWFsIHN0YXRlXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvSW5pdGlhbFN0YXRlXCIpIS5pbm5lclRleHQgPSB0aGlzLnNpbXVsYXRvcj8uYXV0b21hdGEuaW5pdGlhbFN0YXRlLnZhbHVlO1xyXG4gICAgICAgIC8vSW5pdGlhbCBzdGFjayBzeW1ib2xcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm9Jbml0aWFsU3RhY2tTeW1ib2xcIikhLmlubmVyVGV4dCA9IHRoaXMuc2ltdWxhdG9yPy5hdXRvbWF0YS5pbml0aWFsU3RhY2tTeW1ib2w/LnZhbHVlO1xyXG4gICAgICAgIC8vQWNjZXB0aW5nIHN0YXRlc1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mb0FjY2VwdGluZ1N0YXRlXCIpIS5pbm5lclRleHQgPSB0aGlzLnNpbXVsYXRvcj8uYXV0b21hdGEuYWNjZXB0aW5nU3RhdGU/Lm1hcCgocykgPT4gcy52YWx1ZSkuam9pbihcIiwgXCIpID8/IFwiQWNjZXB0YW5jZSBieSBFbXB0eSBTdGFja1wiO1xyXG4gICAgICAgIC8vVHJhbnNpdGlvbiBmdW5jdGlvbnNcclxuICAgICAgICBsZXQgdEZ1bmN0aW9uID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mb1RyYW5zdGlvbkZ1bmN0aW9uXCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIHRGdW5jdGlvbi5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIGZvcihsZXQgZiBvZiB0aGlzLnNpbXVsYXRvcj8uYXV0b21hdGEudHJhbnNpdGlvbkZ1bmN0aW9uID8/IFtdKXtcclxuICAgICAgICAgICAgdEZ1bmN0aW9uLmFwcGVuZChVSS5nZW5lcmF0ZVRyYW5zaXRpb25GdW5jdGlvbihmKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZFRvSGlzdG9yeShmOiBUcmFuc2l0aW9uRnVuY3Rpb24pOiB2b2lke1xyXG4gICAgICAgIGlmKHRoaXMudHJhbnN0aXRpb25IaXN0b3J5KXtcclxuICAgICAgICAgICAgdGhpcy50cmFuc3RpdGlvbkhpc3RvcnkucHJlcGVuZChVSS5nZW5lcmF0ZVRyYW5zaXRpb25GdW5jdGlvbihmKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUZyb21IaXN0b3J5KCk6IHZvaWR7XHJcbiAgICAgICAgaWYodGhpcy50cmFuc3RpdGlvbkhpc3RvcnkgJiYgdGhpcy50cmFuc3RpdGlvbkhpc3RvcnkuY2hpbGRFbGVtZW50Q291bnQgPiAwKXtcclxuICAgICAgICAgICAgdGhpcy50cmFuc3RpdGlvbkhpc3RvcnkucmVtb3ZlQ2hpbGQodGhpcy50cmFuc3RpdGlvbkhpc3RvcnkuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZFRvVGFwZShzOiBJbnB1dFN5bWJvbCwgYXBwZW5kPzogYm9vbGVhbik6IHZvaWR7XHJcbiAgICAgICAgbGV0IHN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgc3ltYm9sLmNsYXNzTGlzdC5hZGQoXCJiZy1yZWQtNTAwXCIsXCJoLTE2XCIsXCJ3LTE2XCIsXCJtLTJcIixcImZsZXgtc2hyaW5rLTBcIixcImZsZXhcIixcImp1c3RpZnktY2VudGVyXCIsXCJpdGVtcy1jZW50ZXJcIilcclxuICAgICAgICBzeW1ib2wuaW5uZXJUZXh0ID0gcy52YWx1ZTtcclxuICAgICAgICBpZihhcHBlbmQgJiYgYXBwZW5kID09IHRydWUpe1xyXG4gICAgICAgICAgICB0aGlzLnRhcGU/LmFwcGVuZChzeW1ib2wpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLnRhcGU/LnByZXBlbmQoc3ltYm9sKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlRnJvbVRhcGUoKTogdm9pZHtcclxuICAgICAgICBpZih0aGlzLnRhcGUgJiYgdGhpcy50YXBlLmNoaWxkRWxlbWVudENvdW50ID4gMCl7XHJcbiAgICAgICAgICAgIHRoaXMudGFwZS5yZW1vdmVDaGlsZCh0aGlzLnRhcGUuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAwIC0+IHJlYWRcclxuICAgIDEgLT4gcmVhZGluZ1xyXG4gICAgMiAtPiBub3QgcmVhZFxyXG4gICAgKi9cclxuICAgIHNldFN5bWJvbFRvU3RhdGUoczogSFRNTERpdkVsZW1lbnQsIHN0YXRlOiBudW1iZXIpe1xyXG4gICAgICAgIHN3aXRjaChzdGF0ZSl7XHJcbiAgICAgICAgICAgIGNhc2UgMDp7XHJcbiAgICAgICAgICAgICAgICBzLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1yZWQtNTAwXCIpO1xyXG4gICAgICAgICAgICAgICAgcy5jbGFzc0xpc3QucmVtb3ZlKFwiYmctcmVkLTkwMFwiKTtcclxuICAgICAgICAgICAgICAgIHMuY2xhc3NMaXN0LmFkZChcImJnLXJlZC0zMDBcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIDE6e1xyXG4gICAgICAgICAgICAgICAgcy5jbGFzc0xpc3QucmVtb3ZlKFwiYmctcmVkLTMwMFwiKTtcclxuICAgICAgICAgICAgICAgIHMuY2xhc3NMaXN0LnJlbW92ZShcImJnLXJlZC01MDBcIik7XHJcbiAgICAgICAgICAgICAgICBzLmNsYXNzTGlzdC5hZGQoXCJiZy1yZWQtOTAwXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6e1xyXG4gICAgICAgICAgICAgICAgcy5jbGFzc0xpc3QucmVtb3ZlKFwiYmctcmVkLTMwMFwiKTtcclxuICAgICAgICAgICAgICAgIHMuY2xhc3NMaXN0LnJlbW92ZShcImJnLXJlZC05MDBcIik7XHJcbiAgICAgICAgICAgICAgICBzLmNsYXNzTGlzdC5hZGQoXCJiZy1yZWQtNTAwXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1vdmVUYXBlKGJhY2t3YXJkOiBib29sZWFuID0gZmFsc2UpOiB2b2lke1xyXG4gICAgICAgIGxldCBzeW1ib2xzID0gdGhpcy50YXBlPy5jaGlsZHJlbjtcclxuICAgICAgICBpZihzeW1ib2xzICYmIHN5bWJvbHMubGVuZ3RoID4gMSl7XHJcbiAgICAgICAgICAgIGlmKGJhY2t3YXJkID09IHRydWUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXBlUG9zaXRpb24tLTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3ltYm9sVG9TdGF0ZShzeW1ib2xzW3RoaXMudGFwZVBvc2l0aW9uKzFdIGFzIEhUTUxEaXZFbGVtZW50LCAyKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudGFwZVBvc2l0aW9uKzEsIDIpO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy50YXBlUG9zaXRpb24gPj0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTeW1ib2xUb1N0YXRlKHN5bWJvbHNbdGhpcy50YXBlUG9zaXRpb25dIGFzIEhUTUxEaXZFbGVtZW50LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRhcGVQb3NpdGlvbiwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFwZVBvc2l0aW9uKys7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN5bWJvbFRvU3RhdGUoc3ltYm9sc1t0aGlzLnRhcGVQb3NpdGlvbi0xXSBhcyBIVE1MRGl2RWxlbWVudCwgMCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRhcGVQb3NpdGlvbi0xLCAwKTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMudGFwZVBvc2l0aW9uIDwgc3ltYm9scy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3ltYm9sVG9TdGF0ZShzeW1ib2xzW3RoaXMudGFwZVBvc2l0aW9uXSBhcyBIVE1MRGl2RWxlbWVudCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy50YXBlUG9zaXRpb24sIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVN0YXRlKHM6IFN0YXRlKTogdm9pZHtcclxuICAgICAgICBpZih0aGlzLnN0YXRlKXtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5pbm5lclRleHQgPSBzLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGRUb1N0YWNrKHM6IFN0YWNrU3ltYm9sKTogdm9pZHtcclxuICAgICAgICBsZXQgc3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICBzeW1ib2wuY2xhc3NMaXN0LmFkZChcImJnLWdyZWVuLTUwMFwiLFwiaC0xNlwiLFwidy0xNlwiLFwibS0yXCIsXCJmbGV4LXNocmluay0wXCIsXCJmbGV4XCIsXCJqdXN0aWZ5LWNlbnRlclwiLFwiaXRlbXMtY2VudGVyXCIsXCJmaXJzdDptdC1hdXRvXCIpXHJcbiAgICAgICAgc3ltYm9sLmlubmVyVGV4dCA9IHMudmFsdWU7XHJcbiAgICAgICAgdGhpcy5zdGFjaz8ucHJlcGVuZChzeW1ib2wpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUZyb21TdGFjaygpOiB2b2lke1xyXG4gICAgICAgIGlmKHRoaXMuc3RhY2sgJiYgdGhpcy5zdGFjay5jaGlsZEVsZW1lbnRDb3VudCA+IDApe1xyXG4gICAgICAgICAgICB0aGlzLnN0YWNrLnJlbW92ZUNoaWxkKHRoaXMuc3RhY2suZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0VUkoKTogdm9pZHtcclxuICAgICAgICBpZih0aGlzLnN0YWNrKXtcclxuICAgICAgICAgICAgdGhpcy5zdGFjay5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZSl7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuaW5uZXJIVE1MID0gXCJcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy50YXBlKXtcclxuICAgICAgICAgICAgdGhpcy50YXBlLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLnRyYW5zdGl0aW9uSGlzdG9yeSl7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnN0aXRpb25IaXN0b3J5LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLnNpbXVsYXRvcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuaW5uZXJUZXh0ID0gdGhpcy5zaW11bGF0b3IuYXV0b21hdGEuaW5pdGlhbFN0YXRlLnZhbHVlO1xyXG4gICAgICAgICAgICBpZih0aGlzLnNpbXVsYXRvci5hdXRvbWF0YS5pbml0aWFsU3RhY2tTeW1ib2wpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUb1N0YWNrKHRoaXMuc2ltdWxhdG9yLmF1dG9tYXRhLmluaXRpYWxTdGFja1N5bWJvbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaXNDaG9vc2luZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNSdW5uaWcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbkZvcndhcmQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSAxMDAwO1xyXG4gICAgICAgIGlmKHRoaXMudGltZW91dClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRUYXBlKHRhcGU6IHN0cmluZyk6IHZvaWR7XHJcbiAgICAgICAgdGhpcy5zaW11bGF0b3I/LnNldE5ld0lucHV0KHRhcGUpO1xyXG4gICAgICAgIHRoaXMucmVzZXRVSSgpO1xyXG4gICAgICAgIGlmKHRoaXMudGFwZSl7XHJcbiAgICAgICAgICAgIHRoaXMudGFwZS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICBmb3IobGV0IHMgb2YgdGFwZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFRvVGFwZSh7aXNFcHN5bG9uOiBmYWxzZSwgdmFsdWU6IHN9LCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdGVtcCA9IHRoaXMudGFwZT8uY2hpbGRyZW5bMF0gYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgaWYodGVtcClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3ltYm9sVG9TdGF0ZSh0ZW1wLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXNlVHJhbnNpdGlvbihmOiBUcmFuc2l0aW9uRnVuY3Rpb24pOiB2b2lke1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGYpO1xyXG4gICAgICAgIHRoaXMuc2ltdWxhdG9yPy5hcHBseVRyYW5zaXRpb25GdW5jdGlvbihmKTtcclxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKGYudG9TdGF0ZSk7XHJcbiAgICAgICAgaWYoIWYuaW5wdXRTeW1ib2wuaXNFcHN5bG9uKXtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlVGFwZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihmLnN0YXJ0U3ltYm9sICE9IG51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUZyb21TdGFjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IGkgPSBmLnB1c2hlZFN5bWJvbHMubGVuZ3RoLTE7IGkgPj0gMDsgaS0tKXtcclxuICAgICAgICAgICAgdGhpcy5hZGRUb1N0YWNrKGYucHVzaGVkU3ltYm9sc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWRkVG9IaXN0b3J5KGYpO1xyXG4gICAgICAgIHRoaXMuaXNDaG9vc2luZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2VuZXJhdGVPcHRpb25zKG9wdGlvbnM6IFRyYW5zaXRpb25GdW5jdGlvbltdKTogdm9pZHtcclxuICAgICAgICBpZih0aGlzLmluZm9CdXR0b24pe1xyXG4gICAgICAgICAgICB0aGlzLmluZm9CdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImZsZXhcIik7XHJcbiAgICAgICAgICAgIHRoaXMuaW5mb0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnRyYW5zaXRpb25PcHRpb25zKXtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uT3B0aW9ucy5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IG8gb2Ygb3B0aW9ucyl7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgICAgICAgICBvcHRpb24uY2xhc3NMaXN0LmFkZChcInB4LTJcIixcInB5LTFcIixcIm14LWF1dG9cIik7XHJcbiAgICAgICAgICAgIG9wdGlvbi5hcHBlbmQoVUkuZ2VuZXJhdGVUcmFuc2l0aW9uRnVuY3Rpb24obykpO1xyXG4gICAgICAgICAgICBvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlVHJhbnNpdGlvbihvKTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMudHJhbnNpdGlvbk9wdGlvbnMpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbk9wdGlvbnMuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuaW5mb0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZmxleFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5mb0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5pc1J1bm5pZyAmJiB0aGlzLmRpcmVjdGlvbkZvcndhcmQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpciA9IHRoaXMuZGlyZWN0aW9uRm9yd2FyZDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5pc1J1bm5pZyAmJiB0aGlzLmRpcmVjdGlvbkZvcndhcmQgPT0gZGlyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0U3RlcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIHRoaXMuc3BlZWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uT3B0aW9ucz8uYXBwZW5kKG9wdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5leHRTdGVwKCk6IHZvaWR7XHJcbiAgICAgICAgaWYoIXRoaXMuaXNDaG9vc2luZyl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc2ltdWxhdG9yKXtcclxuICAgICAgICAgICAgICAgIGxldCBwb3NzaWJsZVRyYW5zdGlvbnM6IFRyYW5zaXRpb25GdW5jdGlvbltdID0gdGhpcy5zaW11bGF0b3IubmV4dFN0ZXAoKTtcclxuICAgICAgICAgICAgICAgIGlmKHBvc3NpYmxlVHJhbnN0aW9ucy5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gcG9zc2libGUgdHJhbnNpdGlvbnNcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKHBvc3NpYmxlVHJhbnN0aW9ucy5sZW5ndGggPT0gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VUcmFuc2l0aW9uKHBvc3NpYmxlVHJhbnN0aW9uc1swXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5pc1J1bm5pZyAmJiB0aGlzLmRpcmVjdGlvbkZvcndhcmQpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGlyID0gdGhpcy5kaXJlY3Rpb25Gb3J3YXJkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuaXNSdW5uaWcgJiYgdGhpcy5kaXJlY3Rpb25Gb3J3YXJkID09IGRpcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHRTdGVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRoaXMuc3BlZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0Nob29zaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlT3B0aW9ucyhwb3NzaWJsZVRyYW5zdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJhY2tTdGVwKCk6IHZvaWR7XHJcbiAgICAgICAgaWYodGhpcy5pc0Nob29zaW5nKXtcclxuICAgICAgICAgICAgdGhpcy5pc0Nob29zaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudHJhbnNpdGlvbk9wdGlvbnMpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uT3B0aW9ucy5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaW5mb0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZmxleFwiKTtcclxuICAgICAgICAgICAgdGhpcy5pbmZvQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5zaW11bGF0b3Ipe1xyXG4gICAgICAgICAgICBsZXQgbGFzdCA9IHRoaXMuc2ltdWxhdG9yLmJhY2tTdGVwKCk7XHJcbiAgICAgICAgICAgIGlmKGxhc3Qpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tSGlzdG9yeSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShsYXN0LmZyb21TdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICBpZighbGFzdC5pbnB1dFN5bWJvbC5pc0Vwc3lsb24pe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVRhcGUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGFzdC5wdXNoZWRTeW1ib2xzLmxlbmd0aDsgaSsrKXsgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tU3RhY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGxhc3Quc3RhcnRTeW1ib2wgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRUb1N0YWNrKGxhc3Quc3RhcnRTeW1ib2wpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHRoaXMuaXNSdW5uaWcgJiYgIXRoaXMuZGlyZWN0aW9uRm9yd2FyZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpciA9IHRoaXMuZGlyZWN0aW9uRm9yd2FyZDtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuaXNSdW5uaWcgJiYgdGhpcy5kaXJlY3Rpb25Gb3J3YXJkID09IGRpcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYWNrU3RlcCgpO1xyXG4gICAgICAgICAgICAgICAgfSwgdGhpcy5zcGVlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFVJIH0gZnJvbSBcIi4vdWlcIjtcbmltcG9ydCB7IFB1c2hkb3duQXV0b21hdGFTaW11bGF0b3IgfSBmcm9tIFwiLi9wdXNoZG93bkF1dG9tYXRhU2ltdWxhdG9yXCI7XG5pbXBvcnQgeyBQdXNoZG93bkF1dG9tYXRhIH0gZnJvbSBcIi4vcHVzaGRvd25BdXRvbWF0YVwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJFdmVudHMgfSBmcm9tIFwiLi9ldmVudHNcIjtcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5pbXBvcnQgeyBGb3JtQXV0b21hdGFCdWlsZGVyIH0gZnJvbSBcIi4vZm9ybUF1dG9tYXRhQnVpbGRlclwiO1xuXG52YXIgc3RvcmFnZTogU3RvcmFnZTtcbnZhciB1aTogVUk7XG52YXIgYXV0b21hdGFCdWlsZGVyOiBGb3JtQXV0b21hdGFCdWlsZGVyO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgdWkgPSBuZXcgVUkoKTtcbiAgICBzdG9yYWdlID0gbmV3IFN0b3JhZ2UodWkpO1xuICAgIGF1dG9tYXRhQnVpbGRlciA9IG5ldyBGb3JtQXV0b21hdGFCdWlsZGVyKCk7XG4gICAgcmVnaXN0ZXJFdmVudHMoKTtcbiAgICB1aS5yZWdpc3RlckV2ZW50cygpO1xuICAgIHN0b3JhZ2UucmVnaXN0ZXJFdmVudHMoKTtcbiAgICBhdXRvbWF0YUJ1aWxkZXIucmVnaXN0ZXJFdmVudHMoKTtcbiAgICBzdG9yYWdlLnByaW50QXV0b21hdGFzKCk7XG4gICAgdWkuc2V0VGFwZShcImFhYmJcIik7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=