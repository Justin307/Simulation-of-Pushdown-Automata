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
        //TODO: Transition functions
        this.stateError = document.getElementById('stateError');
        this.inputSymbolError = document.getElementById('inputSymbolError');
        this.stackSymbolError = document.getElementById('stackSymbolError');
        this.initialStateError = document.getElementById('initialStateError');
        this.initialStackSymbolError = document.getElementById('initialStackSymbolError');
        this.acceptingStateError = document.getElementById('acceptingStateError');
        this.transitionFunctionError = document.getElementById('transitionFunctionError');
    }
    registerEvents() {
        document.getElementById('newAutomataStateForm')?.addEventListener('submit', this.stateFormSubmitHandler.bind(this));
        document.getElementById('newAutomataInputSymbolForm')?.addEventListener('submit', this.inputSymbolSubmitHandler.bind(this));
        document.getElementById('newAutomataStackSymbolForm')?.addEventListener('submit', this.stackSymbolSubmitHandler.bind(this));
        this.initialStateSelect.addEventListener('change', this.initialStateChangeHandler.bind(this));
        this.initialStackSymbolSelect.addEventListener('change', this.initialStackSymbolChangeHandler.bind(this));
        document.getElementById('acceptanceEmptyStackCheckBox')?.addEventListener('click', this.acceptingStateEmptyChangeHandler.bind(this));
        this.acceptingStatesSelect.addEventListener('change', this.acceptingStatesChangeHandler.bind(this));
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
                button.addEventListener('click', this.deleteState.bind(this, item, div));
                this.statesDiv.append(div);
                this.stateAdded(item);
            }
            else if (type === 'InputSymbol') {
                button.addEventListener('click', this.deleteInputSymbol.bind(this, item, div));
                this.inputSymbolDiv.append(div);
                this.inputSymbolAdded(item);
            }
            else if (type === 'StackSymbol') {
                button.addEventListener('click', this.deleteStackSymbol.bind(this, item, div));
                this.stackSymbolDiv.append(div);
                this.stackSymbolAdded(item);
            }
            error.style.display = 'none';
            //TODO: Update others
        }
        else {
            error.style.display = 'block';
            error.innerText = errorMsg;
        }
    }
    deleteState(item, div) {
        this.statesDiv.removeChild(div);
        this.states.splice(this.states.indexOf(item), 1);
        this.stateDeleted(item);
        //TODO: Update others
    }
    deleteInputSymbol(item, div) {
        this.inputSymbolDiv.removeChild(div);
        this.inputSymbols.splice(this.inputSymbols.indexOf(item), 1);
        this.inputSymbolDeleted(item);
        //TODO: Update others
    }
    deleteStackSymbol(item, div) {
        this.stackSymbolDiv.removeChild(div);
        this.stackSymbols.splice(this.stackSymbols.indexOf(item), 1);
        this.stackSymbolDeleted(item);
        //TODO: Update others
    }
    stateAdded(item) {
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
        //TODO: Add to transition function
    }
    ;
    inputSymbolAdded(item) {
        //TODO: Add to transition function
    }
    ;
    stackSymbolAdded(item) {
        let option = document.createElement('option');
        option.value = item.value;
        option.innerText = item.value;
        option.id = "stackSymbolOption" + item.value;
        this.initialStackSymbolSelect.append(option);
        //TODO: Add to transition function
        //TODO: Check already defined transition functions
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxFQUFFLENBQUM7Z0JBQ3hCLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkIsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0NBQ0o7Ozs7Ozs7VUM5YkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ04wQjtBQUdnQjtBQUNOO0FBQ3dCO0FBRTVELElBQUksT0FBZ0IsQ0FBQztBQUNyQixJQUFJLEVBQU0sQ0FBQztBQUNYLElBQUksZUFBb0MsQ0FBQztBQUV6QyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFO0lBQy9DLEVBQUUsR0FBRyxJQUFJLG1DQUFFLEVBQUUsQ0FBQztJQUNkLE9BQU8sR0FBRyxJQUFJLDZDQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDMUIsZUFBZSxHQUFHLElBQUkscUVBQW1CLEVBQUUsQ0FBQztJQUM1Qyx1REFBYyxFQUFFLENBQUM7SUFDakIsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3BCLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN6QixlQUFlLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDakMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3pCLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdkIsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW11bGF0aW9uX29mX3B1c2hkb3duX2F1dG9tYXRhLy4vc3JjL2V2ZW50cy50cyIsIndlYnBhY2s6Ly9zaW11bGF0aW9uX29mX3B1c2hkb3duX2F1dG9tYXRhLy4vc3JjL2Zvcm1BdXRvbWF0YUJ1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vc2ltdWxhdGlvbl9vZl9wdXNoZG93bl9hdXRvbWF0YS8uL3NyYy9wdXNoZG93bkF1dG9tYXRhLnRzIiwid2VicGFjazovL3NpbXVsYXRpb25fb2ZfcHVzaGRvd25fYXV0b21hdGEvLi9zcmMvcHVzaGRvd25BdXRvbWF0YVNpbXVsYXRvci50cyIsIndlYnBhY2s6Ly9zaW11bGF0aW9uX29mX3B1c2hkb3duX2F1dG9tYXRhLy4vc3JjL3B1c2hkb3duQXV0b21hdGFUeXBlcy50cyIsIndlYnBhY2s6Ly9zaW11bGF0aW9uX29mX3B1c2hkb3duX2F1dG9tYXRhLy4vc3JjL3N0YWNrLnRzIiwid2VicGFjazovL3NpbXVsYXRpb25fb2ZfcHVzaGRvd25fYXV0b21hdGEvLi9zcmMvc3RvcmFnZS50cyIsIndlYnBhY2s6Ly9zaW11bGF0aW9uX29mX3B1c2hkb3duX2F1dG9tYXRhLy4vc3JjL3VpLnRzIiwid2VicGFjazovL3NpbXVsYXRpb25fb2ZfcHVzaGRvd25fYXV0b21hdGEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2ltdWxhdGlvbl9vZl9wdXNoZG93bl9hdXRvbWF0YS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2ltdWxhdGlvbl9vZl9wdXNoZG93bl9hdXRvbWF0YS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NpbXVsYXRpb25fb2ZfcHVzaGRvd25fYXV0b21hdGEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zaW11bGF0aW9uX29mX3B1c2hkb3duX2F1dG9tYXRhLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBkaXZBdXRvbWF0YURlZmluaXRpb246IEhUTUxEaXZFbGVtZW50O1xyXG52YXIgZGl2VHJhbnNpdGlvbkhpc3Rvcnk6IEhUTUxEaXZFbGVtZW50O1xyXG52YXIgaW5mb0RpdjogSFRNTERpdkVsZW1lbnQ7XHJcbmV4cG9ydCB2YXIgbWFpblBhZ2U6IEhUTUxEaXZFbGVtZW50O1xyXG5leHBvcnQgdmFyIG1lbnVQYWdlOiBIVE1MRGl2RWxlbWVudDtcclxuZXhwb3J0IHZhciBuZXdBdXRvbWF0YVBhZ2U6IEhUTUxEaXZFbGVtZW50O1xyXG5leHBvcnQgdmFyIHNhdmVkQXV0b21hdGFzUGFnZTogSFRNTERpdkVsZW1lbnQ7XHJcbmV4cG9ydCB2YXIgc2ltdWxhdG9yUGFnZTogSFRNTERpdkVsZW1lbnQ7XHJcbmV4cG9ydCB2YXIgYXV0b21hdGFPdmVydmlld1BhZ2U6IEhUTUxEaXZFbGVtZW50XHJcbmV4cG9ydCB2YXIgbG9hZEF1dG9tYXRhUGFnZTogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG5mdW5jdGlvbiBpbmZvRGl2U3dpdGNoKCk6IHZvaWQge1xyXG4gICAgaW5mb0Rpdi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xyXG4gICAgaW5mb0Rpdi5jbGFzc0xpc3QudG9nZ2xlKFwiYWJzb2x1dGVcIik7XHJcbiAgICBpbmZvRGl2LmNsYXNzTGlzdC50b2dnbGUoXCJ0b3AtMFwiKTtcclxuICAgIGluZm9EaXYuY2xhc3NMaXN0LnRvZ2dsZShcImJvdHRvbS0wXCIpO1xyXG4gICAgaW5mb0Rpdi5jbGFzc0xpc3QudG9nZ2xlKFwibGVmdC0wXCIpO1xyXG4gICAgaW5mb0Rpdi5jbGFzc0xpc3QudG9nZ2xlKFwiLXJpZ2h0LTIwXCIpO1xyXG4gICAgaW5mb0Rpdi5jbGFzc0xpc3QudG9nZ2xlKFwiLXRyYW5zbGF0ZS14LTIwXCIpO1xyXG4gICAgaW5mb0Rpdi5jbGFzc0xpc3QudG9nZ2xlKFwibWQ6LXJpZ2h0LTBcIik7XHJcbiAgICBpbmZvRGl2LmNsYXNzTGlzdC50b2dnbGUoXCJtZDotdHJhbnNsYXRlLXgtMFwiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckV2ZW50cygpOiB2b2lkIHtcclxuICAgIGRpdkF1dG9tYXRhRGVmaW5pdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXV0b21hdGFEZWZpbml0aW9uRGl2XCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgZGl2VHJhbnNpdGlvbkhpc3RvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYW5zaXRpb25IaXN0b3J5RGl2XCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgaW5mb0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mb0RpdlwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIG1haW5QYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluUGFnZVwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIG1lbnVQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51UGFnZVwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIG5ld0F1dG9tYXRhUGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3QXV0b21hdGFQYWdlXCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgc2F2ZWRBdXRvbWF0YXNQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYXZlZEF1dGFtYXRhc1BhZ2VcIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBzaW11bGF0b3JQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaW11bGF0b3JQYWdlXCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgYXV0b21hdGFPdmVydmlld1BhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1dG9tYXRhT3ZlcnZpZXdQYWdlXCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgbG9hZEF1dG9tYXRhUGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZEF1dG9tYXRhUGFnZVwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1dG9tYXRhRGVmaW5pdGlvbkJ1dHRvblwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBkaXZBdXRvbWF0YURlZmluaXRpb24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICBkaXZUcmFuc2l0aW9uSGlzdG9yeS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYW5zaXRpb25IaXN0b3J5QnV0dG9uXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGRpdlRyYW5zaXRpb25IaXN0b3J5LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICBkaXZBdXRvbWF0YURlZmluaXRpb24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG93SW5mb0J1dHRvblwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGluZm9EaXZTd2l0Y2gpO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlkZUluZm9CdXR0b25cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBpbmZvRGl2U3dpdGNoKTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0F1dG9tYXRhQnV0dG9uXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIG1lbnVQYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBuZXdBdXRvbWF0YVBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cGxvYWRBdXRvbWF0YUJ1dHRvblwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBtZW51UGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgbG9hZEF1dG9tYXRhUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNhdmVkQXV0b21hdGFzQnV0dG9uXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIG1lbnVQYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBzYXZlZEF1dG9tYXRhc1BhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYXZlZEF1dG9tYXRhc0JhY2tCdXR0b25cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgbWVudVBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIHNhdmVkQXV0b21hdGFzUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZGVPdmVydmlld0J1dHRvblwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBzYXZlZEF1dG9tYXRhc1BhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIGF1dG9tYXRhT3ZlcnZpZXdQYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlkZUxvYWRCdXR0b25cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgbWVudVBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIGxvYWRBdXRvbWF0YVBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRLZXlJbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZEZpbGVJbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9IFwiXCI7XHJcbiAgICB9KTtcclxufSIsImltcG9ydCB7IElucHV0U3ltYm9sLCBTdGFja1N5bWJvbCwgU3RhdGUsIFRyYW5zaXRpb25GdW5jdGlvbiwgY29tcGFyZUlucHV0U3ltYm9sLCBjb21wYXJlU3RhY2tTeW1ib2wsIGNvbXBhcmVTdGF0ZSB9IGZyb20gXCIuL3B1c2hkb3duQXV0b21hdGFUeXBlc1wiO1xyXG5cclxudHlwZSBpdGVtVHlwZSA9IFN0YXRlIHwgSW5wdXRTeW1ib2wgfCBTdGFja1N5bWJvbDtcclxuXHJcbmV4cG9ydCBjbGFzcyBGb3JtQXV0b21hdGFCdWlsZGVyIHtcclxuICAgIHByaXZhdGUgc3RhdGVzOiBTdGF0ZVtdXHJcbiAgICBwcml2YXRlIGlucHV0U3ltYm9sczogSW5wdXRTeW1ib2xbXVxyXG4gICAgcHJpdmF0ZSBzdGFja1N5bWJvbHM6IFN0YWNrU3ltYm9sW11cclxuICAgIHByaXZhdGUgaW5pdGlhbFN0YXRlPzogU3RhdGU7XHJcbiAgICBwcml2YXRlIGluaXRpYWxTdGFja1N5bWJvbD86IFN0YWNrU3ltYm9sO1xyXG4gICAgcHJpdmF0ZSBhY2NlcHRpbmdTdGF0ZXM6IFN0YXRlW10gfCBudWxsXHJcbiAgICBwcml2YXRlIHRyYW5zaXRpb25GdW5jdGlvbnM6IFRyYW5zaXRpb25GdW5jdGlvbltdXHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0ZXNEaXY6IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBpbnB1dFN5bWJvbERpdjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHN0YWNrU3ltYm9sRGl2OiBIVE1MRGl2RWxlbWVudDtcclxuICAgIHByaXZhdGUgdHJhbnNpdGlvbkZ1bmN0aW9uRGl2OiBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgICBwcml2YXRlIGluaXRpYWxTdGF0ZVNlbGVjdDogSFRNTFNlbGVjdEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGluaXRpYWxTdGFja1N5bWJvbFNlbGVjdDogSFRNTFNlbGVjdEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGFjY2VwdGluZ1N0YXRlc1NlbGVjdDogSFRNTFNlbGVjdEVsZW1lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0ZUVycm9yOiBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICAgIHByaXZhdGUgaW5wdXRTeW1ib2xFcnJvcjogSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHN0YWNrU3ltYm9sRXJyb3I6IEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBpbml0aWFsU3RhdGVFcnJvcjogSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGluaXRpYWxTdGFja1N5bWJvbEVycm9yOiBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICAgIHByaXZhdGUgYWNjZXB0aW5nU3RhdGVFcnJvcjogSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHRyYW5zaXRpb25GdW5jdGlvbkVycm9yOiBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLnN0YXRlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaW5wdXRTeW1ib2xzID0gW107XHJcbiAgICAgICAgdGhpcy5zdGFja1N5bWJvbHMgPSBbXTtcclxuICAgICAgICB0aGlzLmFjY2VwdGluZ1N0YXRlcyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25zID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGVzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0F1dG9tYXRhU3RhdGVzJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5pbnB1dFN5bWJvbERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdBdXRvbWF0YUlucHV0U3ltYm9scycpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuc3RhY2tTeW1ib2xEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3QXV0b21hdGFTdGFja1N5bWJvbHMnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICB0aGlzLnRyYW5zaXRpb25GdW5jdGlvbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdBdXRvbWF0YVRyYW5zdGl0aW9uRnVuY3Rpb25zJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdGlhbFN0YXRlU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0F1dG9tYXRhSW5pdGlhbFN0YXRlU2VsZWN0JykgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsU3RhY2tTeW1ib2xTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3QXV0b21hdGFJbml0aWFsU3RhY2tTeW1ib2xTZWxlY3QnKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcclxuICAgICAgICB0aGlzLmFjY2VwdGluZ1N0YXRlc1NlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdBdXRvbWF0YUFjY2VwdGluZ1N0YXRlc1NlbGVjdCcpIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xyXG4gICAgICAgIC8vVE9ETzogVHJhbnNpdGlvbiBmdW5jdGlvbnNcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZUVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXRlRXJyb3InKSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICAgICAgICB0aGlzLmlucHV0U3ltYm9sRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRTeW1ib2xFcnJvcicpIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuc3RhY2tTeW1ib2xFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFja1N5bWJvbEVycm9yJykgYXMgSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsU3RhdGVFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbml0aWFsU3RhdGVFcnJvcicpIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbFN0YWNrU3ltYm9sRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5pdGlhbFN0YWNrU3ltYm9sRXJyb3InKSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICAgICAgICB0aGlzLmFjY2VwdGluZ1N0YXRlRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWNjZXB0aW5nU3RhdGVFcnJvcicpIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJhbnNpdGlvbkZ1bmN0aW9uRXJyb3InKSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckV2ZW50cygpe1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdBdXRvbWF0YVN0YXRlRm9ybScpPy5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLnN0YXRlRm9ybVN1Ym1pdEhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0F1dG9tYXRhSW5wdXRTeW1ib2xGb3JtJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuaW5wdXRTeW1ib2xTdWJtaXRIYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdBdXRvbWF0YVN0YWNrU3ltYm9sRm9ybScpPy5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLnN0YWNrU3ltYm9sU3VibWl0SGFuZGxlci5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxTdGF0ZVNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmluaXRpYWxTdGF0ZUNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsU3RhY2tTeW1ib2xTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5pbml0aWFsU3RhY2tTeW1ib2xDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY2NlcHRhbmNlRW1wdHlTdGFja0NoZWNrQm94Jyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hY2NlcHRpbmdTdGF0ZUVtcHR5Q2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLmFjY2VwdGluZ1N0YXRlc1NlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmFjY2VwdGluZ1N0YXRlc0NoYW5nZUhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXQoKXtcclxuICAgICAgICAvL2RpdnNcclxuICAgICAgICB0aGlzLnN0YXRlc0Rpdi5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB0aGlzLmlucHV0U3ltYm9sRGl2LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHRoaXMuc3RhY2tTeW1ib2xEaXYuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25EaXYuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgLy9pbnB1dHNcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXRlSW5wdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9ICcnO1xyXG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRTeW1ib2xJbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID0gJyc7XHJcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFja1N5bWJvbElucHV0JykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPSAnJztcclxuICAgICAgICAvL3NlbGVjdHNcclxuICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gJyc7XHJcbiAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9ICdDaG9vc2UgaW5pdGlhbCBzdGF0ZSAuLi4nO1xyXG4gICAgICAgIG9wdGlvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICBvcHRpb24uaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmluaXRpYWxTdGF0ZVNlbGVjdC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB0aGlzLmluaXRpYWxTdGF0ZVNlbGVjdC5hcHBlbmQob3B0aW9uKTtcclxuICAgICAgICBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICBvcHRpb24udmFsdWUgPSAnJztcclxuICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gJ0Nob29zZSBpbml0aWFsIHN0YWNrIHN5bWJvbC4uLic7XHJcbiAgICAgICAgb3B0aW9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIG9wdGlvbi5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbFN0YWNrU3ltYm9sU2VsZWN0LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbFN0YWNrU3ltYm9sU2VsZWN0LmFwcGVuZChvcHRpb24pO1xyXG4gICAgICAgIHRoaXMuYWNjZXB0aW5nU3RhdGVzU2VsZWN0LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHRoaXMuYWNjZXB0aW5nU3RhdGVzU2VsZWN0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAvL2NoZWNrYm94XHJcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY2NlcHRhbmNlRW1wdHlTdGFja0NoZWNrQm94JykgYXMgSFRNTElucHV0RWxlbWVudCkuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgLy9lcnJvcnNcclxuICAgICAgICAvL1RPRE86IENsZWFyIGVycm9yc1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRlRm9ybVN1Ym1pdEhhbmRsZXIoZXZlbnQ6IFN1Ym1pdEV2ZW50KXtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBmb3JtID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxGb3JtRWxlbWVudDtcclxuICAgICAgICBsZXQgaW5wdXRGaWVsZCA9IGZvcm0uZWxlbWVudHMubmFtZWRJdGVtKCdzdGF0ZUlucHV0JykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICBsZXQgaW5wdXRWYWx1ZSA9IGlucHV0RmllbGQudmFsdWU7XHJcbiAgICAgICAgaW5wdXRGaWVsZC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGxldCBpdGVtOiBTdGF0ZSA9IHtcclxuICAgICAgICAgICAgdmFsdWU6IGlucHV0VmFsdWUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm5ld0l0ZW08U3RhdGU+KGNvbXBhcmVTdGF0ZSwgaXRlbSwgJ1N0YXRlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXRTeW1ib2xTdWJtaXRIYW5kbGVyKGV2ZW50OiBTdWJtaXRFdmVudCl7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgZm9ybSA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRm9ybUVsZW1lbnQ7XHJcbiAgICAgICAgbGV0IGlucHV0RmllbGQgPSBmb3JtLmVsZW1lbnRzLm5hbWVkSXRlbSgnaW5wdXRTeW1ib2xJbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgbGV0IGlucHV0VmFsdWUgPSBpbnB1dEZpZWxkLnZhbHVlO1xyXG4gICAgICAgIGlucHV0RmllbGQudmFsdWUgPSAnJztcclxuICAgICAgICBsZXQgaXRlbTogSW5wdXRTeW1ib2wgPSB7XHJcbiAgICAgICAgICAgIGlzRXBzeWxvbjogZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbHVlOiBpbnB1dFZhbHVlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5uZXdJdGVtPElucHV0U3ltYm9sPihjb21wYXJlSW5wdXRTeW1ib2wsIGl0ZW0sICdJbnB1dFN5bWJvbCcpO1xyXG4gICAgfTtcclxuXHJcbiAgICBzdGFja1N5bWJvbFN1Ym1pdEhhbmRsZXIoZXZlbnQ6IFN1Ym1pdEV2ZW50KXtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBmb3JtID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxGb3JtRWxlbWVudDtcclxuICAgICAgICBsZXQgaW5wdXRGaWVsZCA9IGZvcm0uZWxlbWVudHMubmFtZWRJdGVtKCdzdGFja1N5bWJvbElucHV0JykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICBsZXQgaW5wdXRWYWx1ZSA9IGlucHV0RmllbGQudmFsdWU7XHJcbiAgICAgICAgaW5wdXRGaWVsZC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGxldCBpdGVtOiBTdGFja1N5bWJvbCA9IHtcclxuICAgICAgICAgICAgdmFsdWU6IGlucHV0VmFsdWUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm5ld0l0ZW08U3RhY2tTeW1ib2w+KGNvbXBhcmVTdGFja1N5bWJvbCwgaXRlbSwgJ1N0YWNrU3ltYm9sJyk7XHJcbiAgICAgICAgXHJcbiAgICB9O1xyXG5cclxuICAgIGluaXRpYWxTdGF0ZUNoYW5nZUhhbmRsZXIoZXZlbnQ6IEV2ZW50KXtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBzZWxlY3QgPSBldmVudC50YXJnZXQgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkT3B0aW9uID0gc2VsZWN0Lm9wdGlvbnNbc2VsZWN0LnNlbGVjdGVkSW5kZXhdO1xyXG4gICAgICAgIGlmKHNlbGVjdGVkT3B0aW9uLnZhbHVlID09PSAnJyl7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFN0YXRlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBzZWxlY3RlZE9wdGlvbi52YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFN0YXRlID0gaXRlbTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGluaXRpYWxTdGFja1N5bWJvbENoYW5nZUhhbmRsZXIoZXZlbnQ6IEV2ZW50KXtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBzZWxlY3QgPSBldmVudC50YXJnZXQgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkT3B0aW9uID0gc2VsZWN0Lm9wdGlvbnNbc2VsZWN0LnNlbGVjdGVkSW5kZXhdO1xyXG4gICAgICAgIGlmKHNlbGVjdGVkT3B0aW9uLnZhbHVlID09PSAnJyl7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFN0YWNrU3ltYm9sID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBzZWxlY3RlZE9wdGlvbi52YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFN0YWNrU3ltYm9sID0gaXRlbTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGFjY2VwdGluZ1N0YXRlRW1wdHlDaGFuZ2VIYW5kbGVyKGV2ZW50OiBFdmVudCl7XHJcbiAgICAgICAgbGV0IGNoZWNrYm94ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgaWYoY2hlY2tib3guY2hlY2tlZCl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgYSBvZiB0aGlzLnN0YXRlcyl7XHJcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5hY2NlcHRpbmdTdGF0ZXNTZWxlY3Qub3B0aW9ucy5uYW1lZEl0ZW0oXCJhY2NlcHRpbmdTdGF0ZU9wdGlvblwiICsgYS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZihvcHRpb24pe1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYWNjZXB0aW5nU3RhdGVzID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5hY2NlcHRpbmdTdGF0ZXNTZWxlY3QuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLmFjY2VwdGluZ1N0YXRlcyA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmFjY2VwdGluZ1N0YXRlc1NlbGVjdC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgYWNjZXB0aW5nU3RhdGVzQ2hhbmdlSGFuZGxlcihldmVudDogRXZlbnQpe1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5hY2NlcHRpbmdTdGF0ZXMgPSBbXTtcclxuICAgICAgICBmb3IobGV0IGEgb2YgdGhpcy5zdGF0ZXMpe1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5hY2NlcHRpbmdTdGF0ZXNTZWxlY3Qub3B0aW9ucy5uYW1lZEl0ZW0oXCJhY2NlcHRpbmdTdGF0ZU9wdGlvblwiICsgYS52YWx1ZSk7XHJcbiAgICAgICAgICAgIGlmKG9wdGlvbil7XHJcbiAgICAgICAgICAgICAgICBpZihvcHRpb24uc2VsZWN0ZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWNjZXB0aW5nU3RhdGVzPy5wdXNoKGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYWNjZXB0aW5nU3RhdGVzKTtcclxuICAgIH07XHJcblxyXG4gICAgbmV3SXRlbTxUIGV4dGVuZHMgaXRlbVR5cGU+KGNvbXBhcmVGdW5jdGlvbjogKGFyZzE6IFQsIGFyZzI6IFQpID0+IGJvb2xlYW4sIGl0ZW06IFQsIHR5cGU6IHN0cmluZyk6IHZvaWR7XHJcbiAgICAgICAgbGV0IGFyciA6IFRbXTtcclxuICAgICAgICBsZXQgZXJyb3I6IEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gICAgICAgIGxldCBlcnJvck1zZzogc3RyaW5nO1xyXG4gICAgICAgIGlmKHR5cGUgPT09ICdTdGF0ZScpe1xyXG4gICAgICAgICAgICBhcnIgPSB0aGlzLnN0YXRlcyBhcyBUW107XHJcbiAgICAgICAgICAgIGVycm9yID0gdGhpcy5zdGF0ZUVycm9yO1xyXG4gICAgICAgICAgICBlcnJvck1zZyA9ICdFcnJvcjogU3RhdGUgYWxyZWFkeSBleGlzdHMnO1xyXG4gICAgICAgIH0gZWxzZSBpZih0eXBlID09PSAnSW5wdXRTeW1ib2wnKXtcclxuICAgICAgICAgICAgYXJyID0gdGhpcy5pbnB1dFN5bWJvbHMgYXMgVFtdO1xyXG4gICAgICAgICAgICBlcnJvciA9IHRoaXMuaW5wdXRTeW1ib2xFcnJvcjtcclxuICAgICAgICAgICAgZXJyb3JNc2cgPSAnRXJyb3I6IElucHV0IHN5bWJvbCBhbHJlYWR5IGV4aXN0cyc7XHJcbiAgICAgICAgfSBlbHNlIGlmKHR5cGUgPT09ICdTdGFja1N5bWJvbCcpe1xyXG4gICAgICAgICAgICBhcnIgPSB0aGlzLnN0YWNrU3ltYm9scyBhcyBUW107XHJcbiAgICAgICAgICAgIGVycm9yID0gdGhpcy5zdGFja1N5bWJvbEVycm9yO1xyXG4gICAgICAgICAgICBlcnJvck1zZyA9ICdFcnJvcjogU3RhY2sgc3ltYm9sIGFscmVhZHkgZXhpc3RzJztcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGV4aXN0cyA9IGZhbHNlO1xyXG4gICAgICAgIGZvcihsZXQgaSBvZiBhcnIpe1xyXG4gICAgICAgICAgICBpZihjb21wYXJlRnVuY3Rpb24oaSwgaXRlbSkpe1xyXG4gICAgICAgICAgICAgICAgZXhpc3RzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFleGlzdHMpe1xyXG4gICAgICAgICAgICBhcnIucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZmxleCcsICdwLTInLCAnYmctc2xhdGUtMTAwJywgJ3JvdW5kZWQnLCAnbS0yJyk7XHJcbiAgICAgICAgICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBwLmNsYXNzTGlzdC5hZGQoJ3ByLTInKTtcclxuICAgICAgICAgICAgcC5pbm5lclRleHQgPSBpdGVtLnZhbHVlID8/ICfOtSc7XHJcbiAgICAgICAgICAgIGRpdi5hcHBlbmQocCk7XHJcbiAgICAgICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3JvdW5kZWQtZnVsbCcsICdiZy1zbGF0ZS0zMDAnLCAndy02JywgJ2gtNicpO1xyXG4gICAgICAgICAgICBidXR0b24uaW5uZXJUZXh0ID0gJ1gnO1xyXG4gICAgICAgICAgICBkaXYuYXBwZW5kKGJ1dHRvbik7XHJcbiAgICAgICAgICAgIGlmKHR5cGUgPT09ICdTdGF0ZScpe1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kZWxldGVTdGF0ZS5iaW5kKHRoaXMsIGl0ZW0sIGRpdikpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZXNEaXYuYXBwZW5kKGRpdik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlQWRkZWQoaXRlbSBhcyBTdGF0ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZih0eXBlID09PSAnSW5wdXRTeW1ib2wnKXtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZGVsZXRlSW5wdXRTeW1ib2wuYmluZCh0aGlzLCBpdGVtLCBkaXYpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRTeW1ib2xEaXYuYXBwZW5kKGRpdik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0U3ltYm9sQWRkZWQoaXRlbSBhcyBJbnB1dFN5bWJvbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZih0eXBlID09PSAnU3RhY2tTeW1ib2wnKXtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZGVsZXRlU3RhY2tTeW1ib2wuYmluZCh0aGlzLCBpdGVtLCBkaXYpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhY2tTeW1ib2xEaXYuYXBwZW5kKGRpdik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YWNrU3ltYm9sQWRkZWQoaXRlbSBhcyBTdGFja1N5bWJvbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgLy9UT0RPOiBVcGRhdGUgb3RoZXJzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGVycm9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICBlcnJvci5pbm5lclRleHQgPSBlcnJvck1zZztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlU3RhdGUoaXRlbTogU3RhdGUsIGRpdjogSFRNTERpdkVsZW1lbnQpe1xyXG4gICAgICAgIHRoaXMuc3RhdGVzRGl2LnJlbW92ZUNoaWxkKGRpdik7XHJcbiAgICAgICAgdGhpcy5zdGF0ZXMuc3BsaWNlKHRoaXMuc3RhdGVzLmluZGV4T2YoaXRlbSksIDEpO1xyXG4gICAgICAgIHRoaXMuc3RhdGVEZWxldGVkKGl0ZW0pO1xyXG4gICAgICAgIC8vVE9ETzogVXBkYXRlIG90aGVyc1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUlucHV0U3ltYm9sKGl0ZW06IElucHV0U3ltYm9sLCBkaXY6IEhUTUxEaXZFbGVtZW50KXtcclxuICAgICAgICB0aGlzLmlucHV0U3ltYm9sRGl2LnJlbW92ZUNoaWxkKGRpdik7XHJcbiAgICAgICAgdGhpcy5pbnB1dFN5bWJvbHMuc3BsaWNlKHRoaXMuaW5wdXRTeW1ib2xzLmluZGV4T2YoaXRlbSksIDEpO1xyXG4gICAgICAgIHRoaXMuaW5wdXRTeW1ib2xEZWxldGVkKGl0ZW0pO1xyXG4gICAgICAgIC8vVE9ETzogVXBkYXRlIG90aGVyc1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVN0YWNrU3ltYm9sKGl0ZW06IFN0YWNrU3ltYm9sLCBkaXY6IEhUTUxEaXZFbGVtZW50KXtcclxuICAgICAgICB0aGlzLnN0YWNrU3ltYm9sRGl2LnJlbW92ZUNoaWxkKGRpdik7XHJcbiAgICAgICAgdGhpcy5zdGFja1N5bWJvbHMuc3BsaWNlKHRoaXMuc3RhY2tTeW1ib2xzLmluZGV4T2YoaXRlbSksIDEpO1xyXG4gICAgICAgIHRoaXMuc3RhY2tTeW1ib2xEZWxldGVkKGl0ZW0pO1xyXG4gICAgICAgIC8vVE9ETzogVXBkYXRlIG90aGVyc1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRlQWRkZWQoaXRlbTogU3RhdGUpe1xyXG4gICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICBvcHRpb24udmFsdWUgPSBpdGVtLnZhbHVlO1xyXG4gICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBpdGVtLnZhbHVlO1xyXG4gICAgICAgIG9wdGlvbi5pZCA9IFwiaW5pdGlhbFN0YXRlT3B0aW9uXCIgKyBpdGVtLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbFN0YXRlU2VsZWN0LmFwcGVuZChvcHRpb24pO1xyXG4gICAgICAgIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IGl0ZW0udmFsdWU7XHJcbiAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IGl0ZW0udmFsdWU7XHJcbiAgICAgICAgb3B0aW9uLmlkID0gXCJhY2NlcHRpbmdTdGF0ZU9wdGlvblwiICsgaXRlbS52YWx1ZTtcclxuICAgICAgICB0aGlzLmFjY2VwdGluZ1N0YXRlc1NlbGVjdC5hcHBlbmQob3B0aW9uKTtcclxuICAgICAgICAvL1RPRE86IEFkZCB0byB0cmFuc2l0aW9uIGZ1bmN0aW9uXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBpbnB1dFN5bWJvbEFkZGVkKGl0ZW06IElucHV0U3ltYm9sKXtcclxuICAgICAgICAvL1RPRE86IEFkZCB0byB0cmFuc2l0aW9uIGZ1bmN0aW9uXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YWNrU3ltYm9sQWRkZWQoaXRlbTogU3RhY2tTeW1ib2wpe1xyXG4gICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICBvcHRpb24udmFsdWUgPSBpdGVtLnZhbHVlO1xyXG4gICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBpdGVtLnZhbHVlO1xyXG4gICAgICAgIG9wdGlvbi5pZCA9IFwic3RhY2tTeW1ib2xPcHRpb25cIiArIGl0ZW0udmFsdWU7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsU3RhY2tTeW1ib2xTZWxlY3QuYXBwZW5kKG9wdGlvbik7XHJcbiAgICAgICAgLy9UT0RPOiBBZGQgdG8gdHJhbnNpdGlvbiBmdW5jdGlvblxyXG4gICAgICAgIC8vVE9ETzogQ2hlY2sgYWxyZWFkeSBkZWZpbmVkIHRyYW5zaXRpb24gZnVuY3Rpb25zXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRlRGVsZXRlZChpdGVtOiBTdGF0ZSl7XHJcbiAgICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuaW5pdGlhbFN0YXRlU2VsZWN0Lm9wdGlvbnMubmFtZWRJdGVtKFwiaW5pdGlhbFN0YXRlT3B0aW9uXCIgKyBpdGVtLnZhbHVlKVxyXG4gICAgICAgIGlmKG9wdGlvbiAmJiBvcHRpb24uc2VsZWN0ZWQpe1xyXG4gICAgICAgICAgICBvcHRpb24ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFN0YXRlU2VsZWN0Lm9wdGlvbnNbMF0uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgb3B0aW9uMiA9IHRoaXMuYWNjZXB0aW5nU3RhdGVzU2VsZWN0Lm9wdGlvbnMubmFtZWRJdGVtKFwiYWNjZXB0aW5nU3RhdGVPcHRpb25cIiArIGl0ZW0udmFsdWUpXHJcbiAgICAgICAgaWYob3B0aW9uMiAmJiBvcHRpb24yLnNlbGVjdGVkKXtcclxuICAgICAgICAgICAgb3B0aW9uMi5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9UT0RPOiBEZWxldGUgZnJvbSB0cmFuc2l0aW9uIGZ1bmN0aW9uXHJcbiAgICAgICAgLy9UT0RPOiBDaGVjayBhbHJlYWR5IGRlZmluZWQgdHJhbnNpdGlvbiBmdW5jdGlvbnNcclxuICAgIH07XHJcblxyXG4gICAgaW5wdXRTeW1ib2xEZWxldGVkKGl0ZW06IElucHV0U3ltYm9sKXtcclxuICAgICAgICAvL1RPRE86IERlbGV0ZSBmcm9tIHRyYW5zaXRpb24gZnVuY3Rpb25cclxuICAgICAgICAvL1RPRE86IENoZWNrIGFscmVhZHkgZGVmaW5lZCB0cmFuc2l0aW9uIGZ1bmN0aW9uc1xyXG4gICAgfTtcclxuXHJcbiAgICBzdGFja1N5bWJvbERlbGV0ZWQoaXRlbTogU3RhY2tTeW1ib2wpe1xyXG4gICAgICAgIGxldCBvcHRpb24gPSB0aGlzLmluaXRpYWxTdGF0ZVNlbGVjdC5vcHRpb25zLm5hbWVkSXRlbShcInN0YWNrU3ltYm9sT3B0aW9uXCIgKyBpdGVtLnZhbHVlKVxyXG4gICAgICAgIGlmKG9wdGlvbiAmJiBvcHRpb24uc2VsZWN0ZWQpe1xyXG4gICAgICAgICAgICBvcHRpb24ucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vVE9ETzogRGVsZXRlIGZyb20gdHJhbnNpdGlvbiBmdW5jdGlvblxyXG4gICAgICAgIC8vVE9ETzogQ2hlY2sgYWxyZWFkeSBkZWZpbmVkIHRyYW5zaXRpb24gZnVuY3Rpb25zXHJcbiAgICB9O1xyXG5cclxufSIsImltcG9ydCB7IFN0YXRlLCBJbnB1dFN5bWJvbCwgU3RhY2tTeW1ib2wsIFRyYW5zaXRpb25GdW5jdGlvbiB9IGZyb20gXCIuL3B1c2hkb3duQXV0b21hdGFUeXBlc1wiO1xyXG5pbXBvcnQgeyBjb21wYXJlU3RhdGUsIGNvbXBhcmVJbnB1dFN5bWJvbCwgY29tcGFyZVN0YWNrU3ltYm9sIH0gZnJvbSBcIi4vcHVzaGRvd25BdXRvbWF0YVR5cGVzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHVzaGRvd25BdXRvbWF0YXtcclxuICAgIHN0YXRlczogU3RhdGVbXTtcclxuICAgIGlucHV0U3ltYm9sczogSW5wdXRTeW1ib2xbXTtcclxuICAgIHN0YWNrU3ltYm9sczogU3RhY2tTeW1ib2xbXTtcclxuICAgIGluaXRpYWxTdGF0ZTogU3RhdGU7XHJcbiAgICAvL0ZJWCBEZWxldGUgbnVsbCBhbmQgZml4IGNvcmVzcG9uZGluZyBmdW5jdGlvbnNcclxuICAgIGluaXRpYWxTdGFja1N5bWJvbDogU3RhY2tTeW1ib2wgfCBudWxsO1xyXG4gICAgYWNjZXB0aW5nU3RhdGU6IFN0YXRlW10gfCBudWxsO1xyXG4gICAgdHJhbnNpdGlvbkZ1bmN0aW9uOiBUcmFuc2l0aW9uRnVuY3Rpb25bXTtcclxuICAgIGNvbnN0cnVjdG9yKHN0YXRlczogU3RhdGVbXSwgaW5wdXRTeW1ib2xzOiBJbnB1dFN5bWJvbFtdLCBzdGFja1N5bWJvbHM6IFN0YWNrU3ltYm9sW10sIGluaXRpYWxTdGF0ZTogU3RhdGUsIGluaXRpYWxTdGFja1N5bWJvbDogU3RhY2tTeW1ib2wsIGFjY2VwdGluZ1N0YXRlOiBTdGF0ZVtdIHwgbnVsbCwgdHJhbnNpdGlvbkZ1bmN0aW9uOiBUcmFuc2l0aW9uRnVuY3Rpb25bXSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLnN0YXRlcyA9IHN0YXRlcztcclxuICAgICAgICB0aGlzLmlucHV0U3ltYm9scyA9IGlucHV0U3ltYm9scztcclxuICAgICAgICB0aGlzLnN0YWNrU3ltYm9scyA9IHN0YWNrU3ltYm9scztcclxuICAgICAgICB0aGlzLmluaXRpYWxTdGF0ZSA9IGluaXRpYWxTdGF0ZTtcclxuICAgICAgICB0aGlzLmluaXRpYWxTdGFja1N5bWJvbCA9IGluaXRpYWxTdGFja1N5bWJvbDtcclxuICAgICAgICB0aGlzLmFjY2VwdGluZ1N0YXRlID0gYWNjZXB0aW5nU3RhdGU7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb24gPSB0cmFuc2l0aW9uRnVuY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0ZUV4aXN0cyhzdGF0ZTogU3RhdGUpOiBib29sZWFue1xyXG4gICAgICAgIGZvcihsZXQgcyBvZiB0aGlzLnN0YXRlcyl7XHJcbiAgICAgICAgICAgIGlmKGNvbXBhcmVTdGF0ZShzLCBzdGF0ZSkpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlucHV0U3ltYm9sRXhpc3RzKGlucHV0U3ltYm9sOiBJbnB1dFN5bWJvbCk6IGJvb2xlYW57XHJcbiAgICAgICAgZm9yKGxldCBpIG9mIHRoaXMuaW5wdXRTeW1ib2xzKXtcclxuICAgICAgICAgICAgaWYoY29tcGFyZUlucHV0U3ltYm9sKGksIGlucHV0U3ltYm9sKSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhY2tTeW1ib2xFeGlzdHMoc3RhY2tTeW1ib2w6IFN0YWNrU3ltYm9sKTogYm9vbGVhbntcclxuICAgICAgICBmb3IobGV0IHMgb2YgdGhpcy5zdGFja1N5bWJvbHMpe1xyXG4gICAgICAgICAgICBpZihjb21wYXJlU3RhY2tTeW1ib2wocywgc3RhY2tTeW1ib2wpKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tTdGF0ZXNFeGlzdGVuY2UoKSA6W3N0cmluZywgU3RhdGVdW117XHJcbiAgICAgICAgdmFyIGVycm9yTXNnIDpbc3RyaW5nLCBTdGF0ZV1bXSA9IFtdO1xyXG5cclxuICAgICAgICBpZighdGhpcy5zdGF0ZUV4aXN0cyh0aGlzLmluaXRpYWxTdGF0ZSkpe1xyXG4gICAgICAgICAgICBlcnJvck1zZy5wdXNoKFtcIkluaXRpYWwgc3RhdGUgZG9lcyBub3QgZXhpc3RcIiwgdGhpcy5pbml0aWFsU3RhdGVdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuYWNjZXB0aW5nU3RhdGUgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgZmluYWxTdGF0ZSBvZiB0aGlzLmFjY2VwdGluZ1N0YXRlKXtcclxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLnN0YXRlRXhpc3RzKGZpbmFsU3RhdGUpKXtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvck1zZy5wdXNoKFtcIkFjY2VwdGluZyBzdGF0ZSBkb2VzIG5vdCBleGlzdFwiLCBmaW5hbFN0YXRlXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBlcnJvck1zZztcclxuICAgIH1cclxuICAgIFxyXG4gICAgY2hlY2tTeW1ib2xFeGlzdGVuY2UoKSA6W3N0cmluZywgU3RhY2tTeW1ib2xdW117XHJcbiAgICAgICAgdmFyIGVycm9yTXNnIDpbc3RyaW5nLCBTdGFja1N5bWJvbF1bXSA9IFtdO1xyXG5cclxuICAgICAgICBpZih0aGlzLmluaXRpYWxTdGFja1N5bWJvbCAhPSBudWxsKXtcclxuICAgICAgICAgICAgaWYoIXRoaXMuc3RhY2tTeW1ib2xFeGlzdHModGhpcy5pbml0aWFsU3RhY2tTeW1ib2wpKXtcclxuICAgICAgICAgICAgICAgIGVycm9yTXNnLnB1c2goW1wiSW5pdGlhbCBzdGFjayBzeW1ib2wgZG9lcyBub3QgZXhpc3RcIiwgdGhpcy5pbml0aWFsU3RhY2tTeW1ib2xdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGVycm9yTXNnO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjaGVja1RyYW5zaXRpb25GdW5jdGlvbnMoKSA6W3N0cmluZywgVHJhbnNpdGlvbkZ1bmN0aW9uXVtde1xyXG4gICAgICAgIHZhciBlcnJvck1zZyA6W3N0cmluZywgVHJhbnNpdGlvbkZ1bmN0aW9uXVtdID0gW107XHJcblxyXG4gICAgICAgIGZvcihsZXQgdHJhbnNpdGlvbkZ1bmN0aW9uIG9mIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uKXtcclxuICAgICAgICAgICAgaWYoIXRoaXMuc3RhdGVFeGlzdHModHJhbnNpdGlvbkZ1bmN0aW9uLmZyb21TdGF0ZSkpe1xyXG4gICAgICAgICAgICAgICAgZXJyb3JNc2cucHVzaChbXCJGcm9tIHN0YXRlIGRvZXMgbm90IGV4aXN0XCIsIHRyYW5zaXRpb25GdW5jdGlvbl0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZighdGhpcy5pbnB1dFN5bWJvbEV4aXN0cyh0cmFuc2l0aW9uRnVuY3Rpb24uaW5wdXRTeW1ib2wpKXtcclxuICAgICAgICAgICAgICAgIGVycm9yTXNnLnB1c2goW1wiSW5wdXQgc3ltYm9sIGRvZXMgbm90IGV4aXN0XCIsIHRyYW5zaXRpb25GdW5jdGlvbl0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZih0cmFuc2l0aW9uRnVuY3Rpb24uc3RhcnRTeW1ib2wgIT0gbnVsbCAmJiAhdGhpcy5zdGFja1N5bWJvbEV4aXN0cyh0cmFuc2l0aW9uRnVuY3Rpb24uc3RhcnRTeW1ib2wpKXtcclxuICAgICAgICAgICAgICAgIGVycm9yTXNnLnB1c2goW1wiU3RhY2sgc3ltYm9sIGRvZXMgbm90IGV4aXN0XCIsIHRyYW5zaXRpb25GdW5jdGlvbl0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZighdGhpcy5zdGF0ZUV4aXN0cyh0cmFuc2l0aW9uRnVuY3Rpb24udG9TdGF0ZSkpe1xyXG4gICAgICAgICAgICAgICAgZXJyb3JNc2cucHVzaChbXCJUbyBzdGF0ZSBkb2VzIG5vdCBleGlzdFwiLCB0cmFuc2l0aW9uRnVuY3Rpb25dKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBwdXNoZWRTeW1ib2wgb2YgdHJhbnNpdGlvbkZ1bmN0aW9uLnB1c2hlZFN5bWJvbHMpe1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuc3RhY2tTeW1ib2xFeGlzdHMocHVzaGVkU3ltYm9sKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNc2cucHVzaChbXCJQdXNoZWQgc3ltYm9sIGRvZXMgbm90IGV4aXN0XCIsIHRyYW5zaXRpb25GdW5jdGlvbl0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZXJyb3JNc2c7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tJbnB1dFRhcGVWYWxpZGl0eShpbnB1dFRhcGU6IHN0cmluZyk6IHN0cmluZ1tde1xyXG4gICAgICAgIGxldCBpbnZhbGlkU3ltYm9sczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgc3ltYm9scyA9IG5ldyBTZXQoaW5wdXRUYXBlLnNwbGl0KFwiXCIpKTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBzIG9mIHN5bWJvbHMpe1xyXG4gICAgICAgICAgICBsZXQgaW52YWxpZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaW5wdXRTeW1ib2wgb2YgdGhpcy5pbnB1dFN5bWJvbHMpe1xyXG4gICAgICAgICAgICAgICAgaWYoaW5wdXRTeW1ib2wuaXNFcHN5bG9uID09IGZhbHNlICYmIGlucHV0U3ltYm9sLnZhbHVlID09IHMpe1xyXG4gICAgICAgICAgICAgICAgICAgIGludmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihpbnZhbGlkKXtcclxuICAgICAgICAgICAgICAgIGludmFsaWRTeW1ib2xzLnB1c2gocyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBpbnZhbGlkU3ltYm9scztcclxuICAgIH1cclxuXHJcbiAgICBnZXRUcmFuc2l0aW9uRnVuY3Rpb25zKHRhcGVTeW1ib2w6IHN0cmluZywgc3RhdGU6IFN0YXRlLCBzdGFja1N5bWJvbDogIFN0YWNrU3ltYm9sIHwgbnVsbCk6IFRyYW5zaXRpb25GdW5jdGlvbltde1xyXG4gICAgICAgIGxldCBwb3NzaWJsZVRyYW5zaXRpb25GdW5jdGlvbnM6IFRyYW5zaXRpb25GdW5jdGlvbltdID0gW107XHJcblxyXG4gICAgICAgIGxldCBpbnB1dFN5bWJvbDogSW5wdXRTeW1ib2w7XHJcbiAgICAgICAgaWYodGFwZVN5bWJvbCA9PT0gXCJcIil7XHJcbiAgICAgICAgICAgIGlucHV0U3ltYm9sID0ge2lzRXBzeWxvbjogdHJ1ZX1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgaW5wdXRTeW1ib2wgPSB7aXNFcHN5bG9uOiBmYWxzZSwgdmFsdWU6IHRhcGVTeW1ib2x9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IHRyYW5zaXRpb25GdW5jdGlvbiBvZiB0aGlzLnRyYW5zaXRpb25GdW5jdGlvbil7XHJcbiAgICAgICAgICAgIGlmKCFjb21wYXJlSW5wdXRTeW1ib2woaW5wdXRTeW1ib2wsIHRyYW5zaXRpb25GdW5jdGlvbi5pbnB1dFN5bWJvbCkgJiYgIXRyYW5zaXRpb25GdW5jdGlvbi5pbnB1dFN5bWJvbC5pc0Vwc3lsb24pe1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoIWNvbXBhcmVTdGF0ZShzdGF0ZSwgdHJhbnNpdGlvbkZ1bmN0aW9uLmZyb21TdGF0ZSkpe1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoIWNvbXBhcmVTdGFja1N5bWJvbChzdGFja1N5bWJvbCwgdHJhbnNpdGlvbkZ1bmN0aW9uLnN0YXJ0U3ltYm9sKSl7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwb3NzaWJsZVRyYW5zaXRpb25GdW5jdGlvbnMucHVzaCh0cmFuc2l0aW9uRnVuY3Rpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHBvc3NpYmxlVHJhbnNpdGlvbkZ1bmN0aW9ucztcclxuICAgIH1cclxufSIsImltcG9ydCB7IFN0YWNrIH0gZnJvbSBcIi4vc3RhY2tcIjtcclxuaW1wb3J0IHsgU3RhY2tTeW1ib2wsIFN0YXRlLCBUcmFuc2l0aW9uRnVuY3Rpb24gfSBmcm9tIFwiLi9wdXNoZG93bkF1dG9tYXRhVHlwZXNcIjtcclxuaW1wb3J0IHsgY29tcGFyZVN0YXRlIH0gZnJvbSBcIi4vcHVzaGRvd25BdXRvbWF0YVR5cGVzXCI7XHJcbmltcG9ydCB7IFB1c2hkb3duQXV0b21hdGEgfSBmcm9tIFwiLi9wdXNoZG93bkF1dG9tYXRhXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHVzaGRvd25BdXRvbWF0YVNpbXVsYXRvcntcclxuICAgIGlucHV0VGFwZTogc3RyaW5nO1xyXG4gICAgc3RhY2s6IFN0YWNrPFN0YWNrU3ltYm9sPjtcclxuICAgIGN1cnJlbnRTdGF0ZTogU3RhdGU7XHJcbiAgICBhY2NlcHRpbmdTdGF0ZTogU3RhdGVbXSB8IG51bGw7XHJcbiAgICBhdXRvbWF0YTogUHVzaGRvd25BdXRvbWF0YTtcclxuICAgIGhpc3Rvcnk6IFRyYW5zaXRpb25GdW5jdGlvbltdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoYXV0b21hdGE6IFB1c2hkb3duQXV0b21hdGEpe1xyXG4gICAgICAgIHRoaXMuYXV0b21hdGEgPSBhdXRvbWF0YTtcclxuICAgICAgICB0aGlzLmlucHV0VGFwZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5zdGFjayA9IG5ldyBTdGFjazxTdGFja1N5bWJvbD4oKTtcclxuICAgICAgICBpZih0aGlzLmF1dG9tYXRhLmluaXRpYWxTdGFja1N5bWJvbCAhPSBudWxsKXtcclxuICAgICAgICAgICAgdGhpcy5zdGFjay5wdXNoKHRoaXMuYXV0b21hdGEuaW5pdGlhbFN0YWNrU3ltYm9sKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSB0aGlzLmF1dG9tYXRhLmluaXRpYWxTdGF0ZTtcclxuICAgICAgICB0aGlzLmFjY2VwdGluZ1N0YXRlID0gdGhpcy5hdXRvbWF0YS5hY2NlcHRpbmdTdGF0ZTtcclxuICAgICAgICB0aGlzLmhpc3RvcnkgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldCgpOiB2b2lke1xyXG4gICAgICAgIHRoaXMuaW5wdXRUYXBlID0gXCJcIjtcclxuICAgICAgICB0aGlzLnN0YWNrLmNsZWFyKCk7XHJcbiAgICAgICAgaWYodGhpcy5hdXRvbWF0YS5pbml0aWFsU3RhY2tTeW1ib2wgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhY2sucHVzaCh0aGlzLmF1dG9tYXRhLmluaXRpYWxTdGFja1N5bWJvbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gdGhpcy5hdXRvbWF0YS5pbml0aWFsU3RhdGU7XHJcbiAgICAgICAgdGhpcy5hY2NlcHRpbmdTdGF0ZSA9IHRoaXMuYXV0b21hdGEuYWNjZXB0aW5nU3RhdGU7XHJcbiAgICAgICAgdGhpcy5oaXN0b3J5ID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgYXBwbHlUcmFuc2l0aW9uRnVuY3Rpb24oZjogVHJhbnNpdGlvbkZ1bmN0aW9uKTogdm9pZHtcclxuICAgICAgICB0aGlzLmlucHV0VGFwZSA9IHRoaXMuaW5wdXRUYXBlLnN1YnN0cmluZygxKTtcclxuICAgICAgICB0aGlzLnN0YWNrLnBvcCgpO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IGYucHVzaGVkU3ltYm9scy5sZW5ndGgtMTsgaSA+PSAwOyBpLS0pe1xyXG4gICAgICAgICAgICB0aGlzLnN0YWNrLnB1c2goZi5wdXNoZWRTeW1ib2xzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSBmLnRvU3RhdGU7XHJcbiAgICAgICAgdGhpcy5oaXN0b3J5LnB1c2goZik7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tJbnB1dFRhcGVWYWxpZGl0eSgpOiB2b2lke1xyXG4gICAgICAgIGxldCBpbnZhbGlkU3ltYm9sczogc3RyaW5nW10gPSB0aGlzLmF1dG9tYXRhLmNoZWNrSW5wdXRUYXBlVmFsaWRpdHkodGhpcy5pbnB1dFRhcGUpO1xyXG4gICAgICAgIGlmKGludmFsaWRTeW1ib2xzLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGlucHV0IHRhcGU6IFwiICsgaW52YWxpZFN5bWJvbHMuam9pbihcIiwgXCIpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWNjZXB0ZWRJbnB1dCgpOiBib29sZWFue1xyXG4gICAgICAgIGlmKHRoaXMuaW5wdXRUYXBlICE9PSBcIlwiKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5hY2NlcHRpbmdTdGF0ZSA9PSBudWxsKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhY2suZW1wdHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yKGxldCBzIG9mIHRoaXMuYWNjZXB0aW5nU3RhdGUpe1xyXG4gICAgICAgICAgICBpZihjb21wYXJlU3RhdGUocywgdGhpcy5jdXJyZW50U3RhdGUpKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dFN0ZXAoKTogVHJhbnNpdGlvbkZ1bmN0aW9uW117XHJcbiAgICAgICAgaWYodGhpcy5hY2NlcHRlZElucHV0KCkpe1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlucHV0VGFwZVswXSwgdGhpcy5jdXJyZW50U3RhdGUsIHRoaXMuc3RhY2sudG9wKCkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXV0b21hdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiB0aGlzLmF1dG9tYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgdGhpcy5hdXRvbWF0YS5nZXRUcmFuc2l0aW9uRnVuY3Rpb25zKTtcclxuICAgICAgICBsZXQgcG9zc2libGVUcmFuc2l0aW9uRnVuY3Rpb25zOiBUcmFuc2l0aW9uRnVuY3Rpb25bXVxyXG4gICAgICAgIGlmKHRoaXMuaW5wdXRUYXBlID09PSBcIlwiKXtcclxuICAgICAgICAgICAgcG9zc2libGVUcmFuc2l0aW9uRnVuY3Rpb25zID0gdGhpcy5hdXRvbWF0YS5nZXRUcmFuc2l0aW9uRnVuY3Rpb25zKFwiXCIsIHRoaXMuY3VycmVudFN0YXRlLCB0aGlzLnN0YWNrLnRvcCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgcG9zc2libGVUcmFuc2l0aW9uRnVuY3Rpb25zID0gdGhpcy5hdXRvbWF0YS5nZXRUcmFuc2l0aW9uRnVuY3Rpb25zKHRoaXMuaW5wdXRUYXBlWzBdLCB0aGlzLmN1cnJlbnRTdGF0ZSwgdGhpcy5zdGFjay50b3AoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwb3NzaWJsZVRyYW5zaXRpb25GdW5jdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgYmFja1N0ZXAoKTogVHJhbnNpdGlvbkZ1bmN0aW9uIHwgbnVsbHtcclxuICAgICAgICBpZih0aGlzLmhpc3RvcnkubGVuZ3RoID09PSAwKXtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbGFzdDogVHJhbnNpdGlvbkZ1bmN0aW9uID0gdGhpcy5oaXN0b3J5LnBvcCgpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gbGFzdC5mcm9tU3RhdGU7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxhc3QucHVzaGVkU3ltYm9scy5sZW5ndGg7IGkrKyl7IFxyXG4gICAgICAgICAgICB0aGlzLnN0YWNrLnBvcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YWNrLnB1c2gobGFzdC5zdGFydFN5bWJvbCk7XHJcbiAgICAgICAgaWYoIWxhc3QuaW5wdXRTeW1ib2wuaXNFcHN5bG9uKVxyXG4gICAgICAgICAgICB0aGlzLmlucHV0VGFwZSA9IGxhc3QuaW5wdXRTeW1ib2wudmFsdWUgKyB0aGlzLmlucHV0VGFwZTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gbGFzdDtcclxuICAgIH1cclxuXHJcbiAgICBzZXROZXdJbnB1dChpbnB1dDogc3RyaW5nKTogdm9pZHtcclxuICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICAgICAgdGhpcy5pbnB1dFRhcGUgPSBpbnB1dDtcclxuICAgIH1cclxuXHJcbiAgICAvL1RPRE8gQ2hlY2sgQXV0b21hdGEgdmFsaWRpdHlcclxufSIsImltcG9ydCB7IFN0YWNrIH0gZnJvbSBcIi4vc3RhY2tcIjtcclxuXHJcbmV4cG9ydCB0eXBlIFN0YWNrU3ltYm9sID0ge1xyXG4gICAgdmFsdWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVTdGFja1N5bWJvbChhOiBTdGFja1N5bWJvbCB8IG51bGwsIGI6IFN0YWNrU3ltYm9sIHwgbnVsbCk6IGJvb2xlYW57XHJcbiAgICBpZihhICE9IG51bGwgJiYgdHlwZW9mKGEpID09IHR5cGVvZihiKSl7XHJcbiAgICAgICAgcmV0dXJuIGEudmFsdWUgPT0gYi52YWx1ZTtcclxuICAgIH1cclxuICAgIGlmKGEgPT0gbnVsbCAmJiBiID09IG51bGwpe1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBJbnB1dFN5bWJvbCA9IHtcclxuICAgIGlzRXBzeWxvbjogYm9vbGVhbjtcclxuICAgIHZhbHVlPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZUlucHV0U3ltYm9sKGE6IElucHV0U3ltYm9sLCBiOiBJbnB1dFN5bWJvbCk6IGJvb2xlYW57XHJcbiAgICBpZihhLmlzRXBzeWxvbiA9PSBiLmlzRXBzeWxvbil7XHJcbiAgICAgICAgaWYoYS5pc0Vwc3lsb24gPT0gZmFsc2Upe1xyXG4gICAgICAgICAgICByZXR1cm4gYS52YWx1ZSA9PSBiLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFN0YXRlID0ge1xyXG4gICAgdmFsdWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVTdGF0ZShhOiBTdGF0ZSwgYjogU3RhdGUpOiBib29sZWFue1xyXG4gICAgcmV0dXJuIGEudmFsdWUgPT0gYi52YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgVHJhbnNpdGlvbkZ1bmN0aW9uID0ge1xyXG4gICAgZnJvbVN0YXRlOiBTdGF0ZTtcclxuICAgIGlucHV0U3ltYm9sOiBJbnB1dFN5bWJvbDtcclxuICAgIHN0YXJ0U3ltYm9sOiBTdGFja1N5bWJvbCB8IG51bGw7XHJcbiAgICB0b1N0YXRlOiBTdGF0ZTtcclxuICAgIHB1c2hlZFN5bWJvbHM6IFN0YWNrU3ltYm9sW107XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlVHJhbnNpdGlvbkZ1bmN0aW9uKGE6IFRyYW5zaXRpb25GdW5jdGlvbiwgYjogVHJhbnNpdGlvbkZ1bmN0aW9uKTogYm9vbGVhbntcclxuICAgIC8vZnJvbVN0YXRlXHJcbiAgICBpZighY29tcGFyZVN0YXRlKGEuZnJvbVN0YXRlLCBiLmZyb21TdGF0ZSkpe1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvL2ltcHV0U3ltYm9sXHJcbiAgICBpZighY29tcGFyZUlucHV0U3ltYm9sKGEuaW5wdXRTeW1ib2wsIGIuaW5wdXRTeW1ib2wpKXtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy9zdGFydFN5bWJvbFxyXG4gICAgaWYodHlwZW9mKGEuc3RhcnRTeW1ib2wpICE9IHR5cGVvZihiLnN0YXJ0U3ltYm9sKSl7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYoYS5zdGFydFN5bWJvbCAhPSBudWxsICYmICFjb21wYXJlU3RhY2tTeW1ib2woYS5zdGFydFN5bWJvbCwgYi5zdGFydFN5bWJvbCkpe1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvL3RvU3RhdGVcclxuICAgIGlmKCFjb21wYXJlU3RhdGUoYS50b1N0YXRlLCBiLnRvU3RhdGUpKXtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy9wdXNoZWRTeW1ib2xzXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYS5wdXNoZWRTeW1ib2xzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBpZighY29tcGFyZVN0YWNrU3ltYm9sKGEucHVzaGVkU3ltYm9sc1tpXSwgYi5wdXNoZWRTeW1ib2xzW2ldKSl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0iLCJpbnRlcmZhY2UgSVN0YWNrPFQ+IHtcclxuICAgIHBvcCgpOiB2b2lkO1xyXG4gICAgcHVzaChpdGVtOiBUKTogdm9pZDtcclxuICAgIHRvcCgpOiBUIHwgbnVsbDtcclxuICAgIGVtcHR5KCk6IGJvb2xlYW47XHJcbiAgICBzaXplKCk6IG51bWJlcjtcclxuICAgIGNsZWFyKCk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTdGFjazxUPiBpbXBsZW1lbnRzIElTdGFjazxUPiB7XHJcbiAgICBwcml2YXRlIGRhdGE6IFRbXSA9IFtdO1xyXG5cclxuICAgIHBvcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRhdGEucG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVzaChpdGVtOiBUKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kYXRhLnB1c2goaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9wKCk6IFQgfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhW3RoaXMuZGF0YS5sZW5ndGggLSAxXSA/PyBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGVtcHR5KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEubGVuZ3RoID09PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHNpemUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwcmludCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEpKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFB1c2hkb3duQXV0b21hdGEgfSBmcm9tIFwiLi9wdXNoZG93bkF1dG9tYXRhXCJcclxuaW1wb3J0IHsgVUkgfSBmcm9tIFwiLi91aVwiIFxyXG5pbXBvcnQgeyBhdXRvbWF0YU92ZXJ2aWV3UGFnZSwgc2F2ZWRBdXRvbWF0YXNQYWdlLCBsb2FkQXV0b21hdGFQYWdlLCBtYWluUGFnZSwgc2ltdWxhdG9yUGFnZSwgbWVudVBhZ2UgfSBmcm9tIFwiLi9ldmVudHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdG9yYWdle1xyXG4gICAgc2F2ZWRBdXRvbWF0YXNUYWJsZT86IEhUTUxUYWJsZUVsZW1lbnQ7XHJcbiAgICB1aTogVUk7XHJcblxyXG4gICAgY29uc3RydWN0b3IodWk6IFVJKXtcclxuICAgICAgICB0aGlzLnNhdmVkQXV0b21hdGFzVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNhdmVkQXV0b21hdGFzVGFibGVcIikgYXMgSFRNTFRhYmxlRWxlbWVudDtcclxuICAgICAgICBpZih1aSl7XHJcbiAgICAgICAgICAgIHRoaXMudWkgPSB1aTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJFdmVudHMoKXtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRGaWxlRm9ybVwiKS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHRoaXMubG9hZEZpbGUuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkRmlsZShlOiBTdWJtaXRFdmVudCkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQga2V5SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRLZXlJbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50XHJcbiAgICAgICAgbGV0IGtleSA9IGtleUlucHV0Py52YWx1ZTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgZmlsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkRmlsZUlucHV0XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnRcclxuICAgICAgICBsZXQgZmlsZSA9IGZpbGVJbnB1dD8uZmlsZXM/LlswXTtcclxuICAgICAgICBpZigha2V5IHx8ICFmaWxlKXtcclxuICAgICAgICAgICAgLy9UT0RPIEVycm9yXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiS2V5IG9yIGZpbGUgZG9lcyBub3QgZXhpc3RzXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBvdmVyd3JpdGUgPSBmYWxzZTtcclxuICAgICAgICBpZih0aGlzLmtleUV4aXN0cyhrZXkpKXtcclxuICAgICAgICAgICAgLy9UT0RPIENoYW5nZSEgTm8gY29uZmlybXMhXHJcbiAgICAgICAgICAgIGlmKCFjb25maXJtKFwiS2V5IGFscmVhZHkgZXhpc3RzLiBPdmVyd3JpdGU/XCIpKXtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgb3ZlcndyaXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uU3RyID0gcmVhZGVyLnJlc3VsdCBhcyBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhdXRvbWF0YSA9IEpTT04ucGFyc2UoanNvblN0cikgYXMgUHVzaGRvd25BdXRvbWF0YTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlKGtleSwgYXV0b21hdGEpO1xyXG4gICAgICAgICAgICAgICAgaWYoIW92ZXJ3cml0ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnNlcnRSb3coa2V5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxvYWRBdXRvbWF0YVBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgbWVudVBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgICAgICAgICAgbWFpblBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgc2ltdWxhdG9yUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVpLnNldEF1dG9tYXRhKHRoaXMubG9hZEF1dG9tYXRhKGtleSkpO1xyXG4gICAgICAgICAgICAgICAga2V5SW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgZmlsZUlucHV0LnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3Ipe1xyXG4gICAgICAgICAgICAvL1RPRE8gRXJyb3JcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUcnkgY2F0Y2ggZXJyb3JcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzYXZlPFQ+KGtleTogc3RyaW5nLCBpdGVtOiBUKXtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KGl0ZW0pKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9hZDxUPihrZXk6IHN0cmluZyk6IFQgfCBudWxse1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgICAgIGlmICghaXRlbSl7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShpdGVtKSBhcyBUO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgcGFyc2luZyBsb2NhbFN0b3JhZ2UgaXRlbSBhdCBrZXkgXCIke2tleX1cIi5gLCBlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRlbGV0ZShrZXk6IHN0cmluZyl7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBrZXlFeGlzdHMoa2V5OiBzdHJpbmcpOiBib29sZWFue1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBpZihsb2NhbFN0b3JhZ2Uua2V5KGkpID09PSBrZXkpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVBdXRvbWF0YShrZXk6IHN0cmluZywgYXV0b21hdGE6IFB1c2hkb3duQXV0b21hdGEpe1xyXG4gICAgICAgIGlmKHRoaXMua2V5RXhpc3RzKGtleSkpe1xyXG4gICAgICAgICAgICAvL1RPRE8gQ2hhbmdlISBObyBjb25maXJtcyFcclxuICAgICAgICAgICAgaWYoIWNvbmZpcm0oXCJLZXkgYWxyZWFkeSBleGlzdHMuIE92ZXJ3cml0ZT9cIikpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2F2ZShrZXksIGF1dG9tYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkQXV0b21hdGEoa2V5OiBzdHJpbmcpOiBQdXNoZG93bkF1dG9tYXRhIHwgbnVsbHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMubG9hZDxQdXNoZG93bkF1dG9tYXRhPihrZXkpLFB1c2hkb3duQXV0b21hdGEucHJvdG90eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluc2VydFJvdyhrZXk6IHN0cmluZyl7XHJcbiAgICAgICAgbGV0IGF1dG9tYXRhID0gdGhpcy5sb2FkQXV0b21hdGEoa2V5KTtcclxuICAgICAgICBpZihhdXRvbWF0YSl7XHJcbiAgICAgICAgICAgIGxldCByb3cgPSB0aGlzLnNhdmVkQXV0b21hdGFzVGFibGUuaW5zZXJ0Um93KCk7XHJcbiAgICAgICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwiYm9yZGVyLWJcIik7XHJcblxyXG4gICAgICAgICAgICBsZXQgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKClcclxuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwicC0yXCIsIFwiZm9udC1ib2xkXCIpO1xyXG4gICAgICAgICAgICBjZWxsLmlubmVyVGV4dCA9IGtleTtcclxuXHJcbiAgICAgICAgICAgIGNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJwLTJcIiwgXCJ0ZXh0LWNlbnRlclwiKTtcclxuICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnPHN2ZyBjbGFzcz1cInctNiBoLTZcInZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDUwIDUwXCIgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwIDUwO1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+PGcgaWQ9XCJMYXllcl8xXCI+PHBhdGggZD1cIk0yNSwzOWMxMy4wMzYsMCwyMy4zNTItMTIuODMzLDIzLjc4NC0xMy4zNzlMNDkuMjc1LDI1bC0wLjQ5MS0wLjYyMUM0OC4zNTIsMjMuODMzLDM4LjAzNiwxMSwyNSwxMVMxLjY0OCwyMy44MzMsMS4yMTYsMjQuMzc5TDAuNzI1LDI1bDAuNDkxLDAuNjIxQzEuNjQ4LDI2LjE2NywxMS45NjQsMzksMjUsMzl6IE0yNSwxM2MxMC40OTQsMCwxOS40Nyw5LjQ2LDIxLjY5LDEyQzQ0LjQ3MywyNy41NDIsMzUuNTA5LDM3LDI1LDM3QzE0LjUwNiwzNyw1LjUzLDI3LjU0LDMuMzEsMjVDNS41MjcsMjIuNDU4LDE0LjQ5MSwxMywyNSwxM3pcIj48L3BhdGg+PHBhdGggZD1cIk0yNSwzNGM0Ljk2MywwLDktNC4wMzgsOS05cy00LjAzNy05LTktOXMtOSw0LjAzOC05LDlTMjAuMDM3LDM0LDI1LDM0eiBNMjUsMThjMy44NTksMCw3LDMuMTQsNyw3cy0zLjE0MSw3LTcsN3MtNy0zLjE0LTctN1MyMS4xNDEsMTgsMjUsMTh6XCI+PC9wYXRoPjwvZz48Zz48L2c+PC9zdmc+JztcclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnNob3dBdXRvbWF0YS5iaW5kKHRoaXMsIGtleSkpO1xyXG4gICAgICAgICAgICBjZWxsLmFwcGVuZChidXR0b24pO1xyXG5cclxuICAgICAgICAgICAgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInAtMlwiLCBcInRleHQtY2VudGVyXCIpO1xyXG4gICAgICAgICAgICBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gJzxzdmcgY2xhc3M9XCJ3LTYgaC02XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjJcIiBkPVwiTTMgMTlWNmMwLS42LjQtMSAxLTFoNGMuMyAwIC42LjEuOC40bDEuOSAyLjJjLjIuMy41LjQuOC40SDE2Yy42IDAgMSAuNCAxIDF2MU0zIDE5bDMtOGgxNWwtMyA4SDNaXCIvPjwvc3ZnPic7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbWFpblBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgc2ltdWxhdG9yUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVpLnNldEF1dG9tYXRhKHRoaXMubG9hZEF1dG9tYXRhKGtleSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY2VsbC5hcHBlbmQoYnV0dG9uKTtcclxuXHJcbiAgICAgICAgICAgIGNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJwLTJcIiwgXCJ0ZXh0LWNlbnRlclwiKTtcclxuICAgICAgICAgICAgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICc8c3ZnIGNsYXNzPVwidy02IGgtNiB0ZXh0LWdyYXktODAwIGRhcms6dGV4dC13aGl0ZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyXCIgZD1cIk00IDE1djJhMyAzIDAgMCAwIDMgM2gxMGEzIDMgMCAwIDAgMy0zdi0ybS04IDFWNG0wIDEyLTQtNG00IDQgNC00XCIvPjwvc3ZnPic7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uU3RyID0gSlNPTi5zdHJpbmdpZnkodGhpcy5sb2FkQXV0b21hdGEoa2V5KSwgbnVsbCwgMik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2pzb25TdHJdLCB7dHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCJ9KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgICAgICAgICBhLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICBhLmRvd25sb2FkID0gYCR7a2V5fS5qc29uYDtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XHJcbiAgICAgICAgICAgICAgICBhLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGEpO1xyXG4gICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgIGNlbGwuYXBwZW5kKGJ1dHRvbik7XHJcblxyXG4gICAgICAgICAgICBjZWxsID0gcm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwicC0yXCIsIFwidGV4dC1jZW50ZXJcIik7XHJcbiAgICAgICAgICAgIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnPHN2ZyBjbGFzcz1cInctNiBoLTZcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA2NCA1OC42N1wiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojMzUzNTNkO308L3N0eWxlPjwvZGVmcz48dGl0bGU+QXNzZXQgMjU8L3RpdGxlPjxnIGlkPVwiTGF5ZXJfMlwiIGRhdGEtbmFtZT1cIkxheWVyIDJcIj48ZyBpZD1cIkxheWVyXzEtMlwiIGRhdGEtbmFtZT1cIkxheWVyIDFcIj48cGF0aCBjbGFzcz1cImNscy0xXCIgZD1cIk02MS4zMyw1LjMzSDQ4VjIuNjdBMi42NiwyLjY2LDAsMCwwLDQ1LjMzLDBIMTguNjdBMi42NiwyLjY2LDAsMCwwLDE2LDIuNjdWNS4zM0gyLjY3YTIuNjcsMi42NywwLDAsMCwwLDUuMzRIOHY0MGE4LDgsMCwwLDAsOCw4SDQ4YTgsOCwwLDAsMCw4LTh2LTQwaDUuMzNhMi42NywyLjY3LDAsMSwwLDAtNS4zNFpNNTAuNjcsNTAuNjdBMi42NywyLjY3LDAsMCwxLDQ4LDUzLjMzSDE2YTIuNjcsMi42NywwLDAsMS0yLjY3LTIuNjZ2LTQwSDUwLjY3WlwiPjwvcGF0aD48cGF0aCBjbGFzcz1cImNscy0xXCIgZD1cIk0yNCw0NS4zM2EyLjY3LDIuNjcsMCwwLDAsMi42Ny0yLjY2VjIxLjMzYTIuNjcsMi42NywwLDAsMC01LjM0LDBWNDIuNjdBMi42NywyLjY3LDAsMCwwLDI0LDQ1LjMzWlwiPjwvcGF0aD48cGF0aCBjbGFzcz1cImNscy0xXCIgZD1cIk00MCw0NS4zM2EyLjY3LDIuNjcsMCwwLDAsMi42Ny0yLjY2VjIxLjMzYTIuNjcsMi42NywwLDAsMC01LjM0LDBWNDIuNjdBMi42NywyLjY3LDAsMCwwLDQwLDQ1LjMzWlwiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPic7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGUoa2V5KTtcclxuICAgICAgICAgICAgICAgIHJvdy5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNlbGwuYXBwZW5kKGJ1dHRvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaW50QXV0b21hdGFzKCl7XHJcbiAgICAgICAgaWYodGhpcy5zYXZlZEF1dG9tYXRhc1RhYmxlKXtcclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBsZXQga2V5ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zZXJ0Um93KGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0F1dG9tYXRhKGtleTogc3RyaW5nKXtcclxuICAgICAgICBsZXQgYXV0b21hdGEgPSB0aGlzLmxvYWRBdXRvbWF0YShrZXkpO1xyXG4gICAgICAgIC8vS2V5L25hbWVcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJ2aWV3TmFtZVwiKSEuaW5uZXJUZXh0ID0ga2V5O1xyXG4gICAgICAgIC8vU3RhdGVzXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVydmlld1N0YXRlc1wiKSEuaW5uZXJUZXh0ID0gYXV0b21hdGEuc3RhdGVzLm1hcCgocykgPT4gcy52YWx1ZSkuam9pbihcIiwgXCIpO1xyXG4gICAgICAgIC8vSW5wdXQgc3ltYm9sc1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcnZpZXdJbnB1dFN5bWJvbHNcIikhLmlubmVyVGV4dCA9IGF1dG9tYXRhLmlucHV0U3ltYm9scy5tYXAoKHMpID0+IHMudmFsdWUpLmpvaW4oXCIsIFwiKTtcclxuICAgICAgICAvL1N0YWNrIHN5bWJvbHNcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJ2aWV3U3RhY2tTeW1ib2xzXCIpIS5pbm5lclRleHQgPSBhdXRvbWF0YS5zdGFja1N5bWJvbHMubWFwKChzKSA9PiBzLnZhbHVlKS5qb2luKFwiLCBcIik7XHJcbiAgICAgICAgLy9Jbml0aWFsIHN0YXRlXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVydmlld0luaXRpYWxTdGF0ZVwiKSEuaW5uZXJUZXh0ID0gYXV0b21hdGEuaW5pdGlhbFN0YXRlLnZhbHVlO1xyXG4gICAgICAgIC8vSW5pdGlhbCBzdGFjayBzeW1ib2xcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJ2aWV3SW5pdGlhbFN0YWNrU3ltYm9sXCIpIS5pbm5lclRleHQgPSBhdXRvbWF0YS5pbml0aWFsU3RhY2tTeW1ib2w/LnZhbHVlO1xyXG4gICAgICAgIC8vQWNjZXB0aW5nIHN0YXRlc1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcnZpZXdBY2NlcHRpbmdTdGF0ZVwiKSEuaW5uZXJUZXh0ID0gYXV0b21hdGEuYWNjZXB0aW5nU3RhdGU/Lm1hcCgocykgPT4gcy52YWx1ZSkuam9pbihcIiwgXCIpID8/IFwiQWNjZXB0YW5jZSBieSBFbXB0eSBTdGFja1wiO1xyXG4gICAgICAgIC8vVHJhbnNpdGlvbiBmdW5jdGlvbnNcclxuICAgICAgICBsZXQgdEZ1bmN0aW9uID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcnZpZXdUcmFuc3Rpb25GdW5jdGlvblwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICB0RnVuY3Rpb24uaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBmb3IobGV0IGYgb2YgYXV0b21hdGEudHJhbnNpdGlvbkZ1bmN0aW9uID8/IFtdKXtcclxuICAgICAgICAgICAgdEZ1bmN0aW9uLmFwcGVuZChVSS5nZW5lcmF0ZVRyYW5zaXRpb25GdW5jdGlvbihmKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNhdmVkQXV0b21hdGFzUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgYXV0b21hdGFPdmVydmlld1BhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUHVzaGRvd25BdXRvbWF0YVNpbXVsYXRvciB9IGZyb20gXCIuL3B1c2hkb3duQXV0b21hdGFTaW11bGF0b3JcIjtcclxuaW1wb3J0IHsgUHVzaGRvd25BdXRvbWF0YSB9IGZyb20gXCIuL3B1c2hkb3duQXV0b21hdGFcIjtcclxuaW1wb3J0IHsgVHJhbnNpdGlvbkZ1bmN0aW9uLCBJbnB1dFN5bWJvbCwgU3RhY2tTeW1ib2wsIFN0YXRlIH0gZnJvbSBcIi4vcHVzaGRvd25BdXRvbWF0YVR5cGVzXCI7XHJcbmltcG9ydCB7IG1haW5QYWdlLCBzaW11bGF0b3JQYWdlIH0gZnJvbSBcIi4vZXZlbnRzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVUl7XHJcbiAgICBzaW11bGF0b3I/OiBQdXNoZG93bkF1dG9tYXRhU2ltdWxhdG9yO1xyXG4gICAgdHJhbnN0aXRpb25IaXN0b3J5PzogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICB0YXBlPzogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBzdGFjaz86IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgc3RhdGU/OiBIVE1MRGl2RWxlbWVudDtcclxuICAgIGluZm9CdXR0b24/OiBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIHRyYW5zaXRpb25PcHRpb25zPzogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICB0YXBlRm9ybUVycm9yPzogSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbiAgICB0YXBlRm9ybT86IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICAgIHRhcGVQb3NpdGlvbjogbnVtYmVyID0gMDtcclxuXHJcbiAgICBpc0Nob29zaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBpc1J1bm5pZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgZGlyZWN0aW9uRm9yd2FyZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBzcGVlZDogbnVtYmVyID0gMTAwMDtcclxuXHJcbiAgICB0aW1lb3V0OiBOb2RlSlMuVGltZW91dCB8IG51bGwgPSBudWxsO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihhdXRvbWF0YT86IFB1c2hkb3duQXV0b21hdGEpe1xyXG4gICAgICAgIGlmKGF1dG9tYXRhKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRBdXRvbWF0YShhdXRvbWF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsbEluZm9ybWF0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudHJhbnN0aXRpb25IaXN0b3J5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cmFuc2l0aW9uSGlzdG9yeURpdlwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICB0aGlzLnRhcGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcGVEaXZcIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5zdGFjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhY2tEaXZcIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhdGVEaXZcIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5pbmZvQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG93SW5mb0J1dHRvblwiKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgICB0aGlzLnRyYW5zaXRpb25PcHRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cmFuc2l0aW9uT3B0aW9uc1wiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICB0aGlzLnRhcGVGb3JtRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcGVGb3JtRXJyb3JcIikgYXMgSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy50YXBlRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFwZUZvcm1Nb2RhbFwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBdXRvbWF0YShhdXRvbWF0YTogUHVzaGRvd25BdXRvbWF0YSk6IHZvaWR7XHJcbiAgICAgICAgdGhpcy5zaW11bGF0b3IgPSBuZXcgUHVzaGRvd25BdXRvbWF0YVNpbXVsYXRvcihhdXRvbWF0YSk7XHJcbiAgICAgICAgdGhpcy5maWxsSW5mb3JtYXRpb24oKTtcclxuICAgICAgICB0aGlzLnJlc2V0VUkoKTtcclxuICAgICAgICBpZih0aGlzLnRhcGVGb3JtKXtcclxuICAgICAgICAgICAgdGhpcy50YXBlRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyRXZlbnRzKCk6IHZvaWR7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b25OZXh0XCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5uZXh0U3RlcC5iaW5kKHRoaXMpKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbkJhY2tcIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmJhY2tTdGVwLmJpbmQodGhpcykpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3BlZWQtY29udHJvbFwiKT8uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZXZlbnQ6IElucHV0RXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zcGVlZCA9IHBhcnNlSW50KChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uTmV4dEF1dG9cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaXNSdW5uaWcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbkZvcndhcmQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5leHRTdGVwKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b25CYWNrQXV0b1wiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYodGhpcy50aW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pc1J1bm5pZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uRm9yd2FyZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmJhY2tTdGVwKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b25TdG9wXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZih0aGlzLnRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0ID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmlzUnVubmlnID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG93VGFwZU1vZGFsQnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudGFwZUZvcm0pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFwZUZvcm0uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaWRlU2V0VGFwZUJ1dHRvblwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYodGhpcy50YXBlRm9ybSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXBlRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNldFRhcGVcIikuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB0aGlzLnNldFRhcGVGb3JtLmJpbmQodGhpcykpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFwZUlucHV0XCIpPy5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2ZW50OiBJbnB1dEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0YXBlSW5wdXQ6IHN0cmluZyA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tUYXBlSW5wdXRWYWxpZGl0eSh0YXBlSW5wdXQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2VTaW11bGF0b3JCdXR0b25cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzaW11bGF0b3JQYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgbWFpblBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgICAgICBpZih0aGlzLnRpbWVvdXQpe1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRUYXBlRm9ybShldmVudDogU3VibWl0RXZlbnQpOiB2b2lke1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGZvcm0gPSBldmVudC50YXJnZXQgYXMgSFRNTEZvcm1FbGVtZW50O1xyXG4gICAgICAgIGxldCB0YXBlSW5wdXQgPSBmb3JtLmVsZW1lbnRzLm5hbWVkSXRlbShcInRhcGVJbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIGlmKHRoaXMuY2hlY2tUYXBlSW5wdXRWYWxpZGl0eSh0YXBlSW5wdXQudmFsdWUpKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRUYXBlKHRhcGVJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudGFwZUZvcm0pe1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXBlRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tUYXBlSW5wdXRWYWxpZGl0eSh0YXBlSW5wdXQ6IHN0cmluZyk6IGJvb2xlYW57XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDaGVja2luZyB0YXBlIGlucHV0XCIpO1xyXG4gICAgICAgIGlmKCF0aGlzLnNpbXVsYXRvcilcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGxldCBhbGxvd2VkID0gdGhpcy5zaW11bGF0b3IuYXV0b21hdGEuaW5wdXRTeW1ib2xzLm1hcCgocykgPT4gcy52YWx1ZSk7XHJcbiAgICAgICAgZm9yKGxldCBzIG9mIHRhcGVJbnB1dCl7XHJcbiAgICAgICAgICAgIGlmKCFhbGxvd2VkLmluY2x1ZGVzKHMpKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFwZUZvcm1FcnJvcj8uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRhcGVGb3JtRXJyb3I/LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBnZW5lcmF0ZVRyYW5zaXRpb25GdW5jdGlvbihmOiBUcmFuc2l0aW9uRnVuY3Rpb24pOiBIVE1MRGl2RWxlbWVudCB7XHJcbiAgICAgICAgbGV0IHJlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgcmVzLmNsYXNzTGlzdC5hZGQoXCJmbGV4XCIsIFwiZmxleC1yb3dcIiwgXCJmbGV4LW5vd3JhcFwiLCBcImp1c3RpZnktY2VudGVyXCIsIFwicHQtM1wiKTtcclxuXHJcbiAgICAgICAgbGV0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIGxlZnQuaW5uZXJUZXh0ID0gZi5mcm9tU3RhdGUudmFsdWUgKyBcIiBcIiArIGYuc3RhcnRTeW1ib2wudmFsdWUgPz8gXCJcIjtcclxuICAgICAgICByZXMuYXBwZW5kKGxlZnQpO1xyXG5cclxuICAgICAgICBsZXQgYXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIGFycm93LmNsYXNzTGlzdC5hZGQoXCJweC0xXCIsIFwicmVsYXRpdmVcIik7XHJcbiAgICAgICAgYXJyb3cuaW5uZXJUZXh0ID0gXCLilIDilIA+XCI7XHJcbiAgICAgICAgcmVzLmFwcGVuZChhcnJvdyk7XHJcblxyXG4gICAgICAgIGxldCBzeW1ib2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIHN5bWJvbC5jbGFzc0xpc3QuYWRkKFwiYWJzb2x1dGVcIiwgXCJ0b3AtMFwiLCBcImxlZnQtMS8yXCIsIFwiLXRyYW5zbGF0ZS14LVsxMDAlXVwiLCBcIi10cmFuc2xhdGUteS0yXCIpO1xyXG4gICAgICAgIHN5bWJvbC5pbm5lclRleHQgPSBmLmlucHV0U3ltYm9sLmlzRXBzeWxvbiA/IFwizrVcIiA6IGYuaW5wdXRTeW1ib2wudmFsdWU7XHJcbiAgICAgICAgYXJyb3cuYXBwZW5kKHN5bWJvbCk7XHJcblxyXG4gICAgICAgIGxldCByaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgcmlnaHQuaW5uZXJUZXh0ID0gZi50b1N0YXRlLnZhbHVlICsgXCIgXCIgKyBmLnB1c2hlZFN5bWJvbHMubWFwKHMgPT4gcy52YWx1ZSkuam9pbihcIlwiKTtcclxuICAgICAgICByZXMuYXBwZW5kKHJpZ2h0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxuXHJcbiAgICBmaWxsSW5mb3JtYXRpb24oKTogdm9pZHtcclxuICAgICAgICAvL1N0YXRlc1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mb1N0YXRlc1wiKSEuaW5uZXJUZXh0ID0gdGhpcy5zaW11bGF0b3I/LmF1dG9tYXRhLnN0YXRlcy5tYXAoKHMpID0+IHMudmFsdWUpLmpvaW4oXCIsIFwiKTtcclxuICAgICAgICAvL0lucHV0IHN5bWJvbHNcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm9JbnB1dFN5bWJvbHNcIikhLmlubmVyVGV4dCA9IHRoaXMuc2ltdWxhdG9yPy5hdXRvbWF0YS5pbnB1dFN5bWJvbHMubWFwKChzKSA9PiBzLnZhbHVlKS5qb2luKFwiLCBcIik7XHJcbiAgICAgICAgLy9TdGFjayBzeW1ib2xzXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvU3RhY2tTeW1ib2xzXCIpIS5pbm5lclRleHQgPSB0aGlzLnNpbXVsYXRvcj8uYXV0b21hdGEuc3RhY2tTeW1ib2xzLm1hcCgocykgPT4gcy52YWx1ZSkuam9pbihcIiwgXCIpO1xyXG4gICAgICAgIC8vSW5pdGlhbCBzdGF0ZVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mb0luaXRpYWxTdGF0ZVwiKSEuaW5uZXJUZXh0ID0gdGhpcy5zaW11bGF0b3I/LmF1dG9tYXRhLmluaXRpYWxTdGF0ZS52YWx1ZTtcclxuICAgICAgICAvL0luaXRpYWwgc3RhY2sgc3ltYm9sXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvSW5pdGlhbFN0YWNrU3ltYm9sXCIpIS5pbm5lclRleHQgPSB0aGlzLnNpbXVsYXRvcj8uYXV0b21hdGEuaW5pdGlhbFN0YWNrU3ltYm9sPy52YWx1ZTtcclxuICAgICAgICAvL0FjY2VwdGluZyBzdGF0ZXNcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm9BY2NlcHRpbmdTdGF0ZVwiKSEuaW5uZXJUZXh0ID0gdGhpcy5zaW11bGF0b3I/LmF1dG9tYXRhLmFjY2VwdGluZ1N0YXRlPy5tYXAoKHMpID0+IHMudmFsdWUpLmpvaW4oXCIsIFwiKSA/PyBcIkFjY2VwdGFuY2UgYnkgRW1wdHkgU3RhY2tcIjtcclxuICAgICAgICAvL1RyYW5zaXRpb24gZnVuY3Rpb25zXHJcbiAgICAgICAgbGV0IHRGdW5jdGlvbiA9ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm9UcmFuc3Rpb25GdW5jdGlvblwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICB0RnVuY3Rpb24uaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBmb3IobGV0IGYgb2YgdGhpcy5zaW11bGF0b3I/LmF1dG9tYXRhLnRyYW5zaXRpb25GdW5jdGlvbiA/PyBbXSl7XHJcbiAgICAgICAgICAgIHRGdW5jdGlvbi5hcHBlbmQoVUkuZ2VuZXJhdGVUcmFuc2l0aW9uRnVuY3Rpb24oZikpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGRUb0hpc3RvcnkoZjogVHJhbnNpdGlvbkZ1bmN0aW9uKTogdm9pZHtcclxuICAgICAgICBpZih0aGlzLnRyYW5zdGl0aW9uSGlzdG9yeSl7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnN0aXRpb25IaXN0b3J5LnByZXBlbmQoVUkuZ2VuZXJhdGVUcmFuc2l0aW9uRnVuY3Rpb24oZikpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVGcm9tSGlzdG9yeSgpOiB2b2lke1xyXG4gICAgICAgIGlmKHRoaXMudHJhbnN0aXRpb25IaXN0b3J5ICYmIHRoaXMudHJhbnN0aXRpb25IaXN0b3J5LmNoaWxkRWxlbWVudENvdW50ID4gMCl7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnN0aXRpb25IaXN0b3J5LnJlbW92ZUNoaWxkKHRoaXMudHJhbnN0aXRpb25IaXN0b3J5LmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGRUb1RhcGUoczogSW5wdXRTeW1ib2wsIGFwcGVuZD86IGJvb2xlYW4pOiB2b2lke1xyXG4gICAgICAgIGxldCBzeW1ib2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIHN5bWJvbC5jbGFzc0xpc3QuYWRkKFwiYmctcmVkLTUwMFwiLFwiaC0xNlwiLFwidy0xNlwiLFwibS0yXCIsXCJmbGV4LXNocmluay0wXCIsXCJmbGV4XCIsXCJqdXN0aWZ5LWNlbnRlclwiLFwiaXRlbXMtY2VudGVyXCIpXHJcbiAgICAgICAgc3ltYm9sLmlubmVyVGV4dCA9IHMudmFsdWU7XHJcbiAgICAgICAgaWYoYXBwZW5kICYmIGFwcGVuZCA9PSB0cnVlKXtcclxuICAgICAgICAgICAgdGhpcy50YXBlPy5hcHBlbmQoc3ltYm9sKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy50YXBlPy5wcmVwZW5kKHN5bWJvbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUZyb21UYXBlKCk6IHZvaWR7XHJcbiAgICAgICAgaWYodGhpcy50YXBlICYmIHRoaXMudGFwZS5jaGlsZEVsZW1lbnRDb3VudCA+IDApe1xyXG4gICAgICAgICAgICB0aGlzLnRhcGUucmVtb3ZlQ2hpbGQodGhpcy50YXBlLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgMCAtPiByZWFkXHJcbiAgICAxIC0+IHJlYWRpbmdcclxuICAgIDIgLT4gbm90IHJlYWRcclxuICAgICovXHJcbiAgICBzZXRTeW1ib2xUb1N0YXRlKHM6IEhUTUxEaXZFbGVtZW50LCBzdGF0ZTogbnVtYmVyKXtcclxuICAgICAgICBzd2l0Y2goc3RhdGUpe1xyXG4gICAgICAgICAgICBjYXNlIDA6e1xyXG4gICAgICAgICAgICAgICAgcy5jbGFzc0xpc3QucmVtb3ZlKFwiYmctcmVkLTUwMFwiKTtcclxuICAgICAgICAgICAgICAgIHMuY2xhc3NMaXN0LnJlbW92ZShcImJnLXJlZC05MDBcIik7XHJcbiAgICAgICAgICAgICAgICBzLmNsYXNzTGlzdC5hZGQoXCJiZy1yZWQtMzAwXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAxOntcclxuICAgICAgICAgICAgICAgIHMuY2xhc3NMaXN0LnJlbW92ZShcImJnLXJlZC0zMDBcIik7XHJcbiAgICAgICAgICAgICAgICBzLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1yZWQtNTAwXCIpO1xyXG4gICAgICAgICAgICAgICAgcy5jbGFzc0xpc3QuYWRkKFwiYmctcmVkLTkwMFwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OntcclxuICAgICAgICAgICAgICAgIHMuY2xhc3NMaXN0LnJlbW92ZShcImJnLXJlZC0zMDBcIik7XHJcbiAgICAgICAgICAgICAgICBzLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1yZWQtOTAwXCIpO1xyXG4gICAgICAgICAgICAgICAgcy5jbGFzc0xpc3QuYWRkKFwiYmctcmVkLTUwMFwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtb3ZlVGFwZShiYWNrd2FyZDogYm9vbGVhbiA9IGZhbHNlKTogdm9pZHtcclxuICAgICAgICBsZXQgc3ltYm9scyA9IHRoaXMudGFwZT8uY2hpbGRyZW47XHJcbiAgICAgICAgaWYoc3ltYm9scyAmJiBzeW1ib2xzLmxlbmd0aCA+IDEpe1xyXG4gICAgICAgICAgICBpZihiYWNrd2FyZCA9PSB0cnVlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFwZVBvc2l0aW9uLS07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN5bWJvbFRvU3RhdGUoc3ltYm9sc1t0aGlzLnRhcGVQb3NpdGlvbisxXSBhcyBIVE1MRGl2RWxlbWVudCwgMik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRhcGVQb3NpdGlvbisxLCAyKTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMudGFwZVBvc2l0aW9uID49IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3ltYm9sVG9TdGF0ZShzeW1ib2xzW3RoaXMudGFwZVBvc2l0aW9uXSBhcyBIVE1MRGl2RWxlbWVudCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy50YXBlUG9zaXRpb24sIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcGVQb3NpdGlvbisrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTeW1ib2xUb1N0YXRlKHN5bWJvbHNbdGhpcy50YXBlUG9zaXRpb24tMV0gYXMgSFRNTERpdkVsZW1lbnQsIDApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy50YXBlUG9zaXRpb24tMSwgMCk7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnRhcGVQb3NpdGlvbiA8IHN5bWJvbHMubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN5bWJvbFRvU3RhdGUoc3ltYm9sc1t0aGlzLnRhcGVQb3NpdGlvbl0gYXMgSFRNTERpdkVsZW1lbnQsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudGFwZVBvc2l0aW9uLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VTdGF0ZShzOiBTdGF0ZSk6IHZvaWR7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZSl7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuaW5uZXJUZXh0ID0gcy52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVG9TdGFjayhzOiBTdGFja1N5bWJvbCk6IHZvaWR7XHJcbiAgICAgICAgbGV0IHN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgc3ltYm9sLmNsYXNzTGlzdC5hZGQoXCJiZy1ncmVlbi01MDBcIixcImgtMTZcIixcInctMTZcIixcIm0tMlwiLFwiZmxleC1zaHJpbmstMFwiLFwiZmxleFwiLFwianVzdGlmeS1jZW50ZXJcIixcIml0ZW1zLWNlbnRlclwiLFwiZmlyc3Q6bXQtYXV0b1wiKVxyXG4gICAgICAgIHN5bWJvbC5pbm5lclRleHQgPSBzLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuc3RhY2s/LnByZXBlbmQoc3ltYm9sKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVGcm9tU3RhY2soKTogdm9pZHtcclxuICAgICAgICBpZih0aGlzLnN0YWNrICYmIHRoaXMuc3RhY2suY2hpbGRFbGVtZW50Q291bnQgPiAwKXtcclxuICAgICAgICAgICAgdGhpcy5zdGFjay5yZW1vdmVDaGlsZCh0aGlzLnN0YWNrLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXNldFVJKCk6IHZvaWR7XHJcbiAgICAgICAgaWYodGhpcy5zdGFjayl7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhY2suaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUpe1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmlubmVySFRNTCA9IFwiXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMudGFwZSl7XHJcbiAgICAgICAgICAgIHRoaXMudGFwZS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy50cmFuc3RpdGlvbkhpc3Rvcnkpe1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zdGl0aW9uSGlzdG9yeS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5zaW11bGF0b3IpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmlubmVyVGV4dCA9IHRoaXMuc2ltdWxhdG9yLmF1dG9tYXRhLmluaXRpYWxTdGF0ZS52YWx1ZTtcclxuICAgICAgICAgICAgaWYodGhpcy5zaW11bGF0b3IuYXV0b21hdGEuaW5pdGlhbFN0YWNrU3ltYm9sKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9TdGFjayh0aGlzLnNpbXVsYXRvci5hdXRvbWF0YS5pbml0aWFsU3RhY2tTeW1ib2wpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmlzQ2hvb3NpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzUnVubmlnID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25Gb3J3YXJkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNwZWVkID0gMTAwMDtcclxuICAgICAgICBpZih0aGlzLnRpbWVvdXQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcclxuICAgICAgICAgICAgdGhpcy50aW1lb3V0ID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGFwZSh0YXBlOiBzdHJpbmcpOiB2b2lke1xyXG4gICAgICAgIHRoaXMuc2ltdWxhdG9yPy5zZXROZXdJbnB1dCh0YXBlKTtcclxuICAgICAgICB0aGlzLnJlc2V0VUkoKTtcclxuICAgICAgICBpZih0aGlzLnRhcGUpe1xyXG4gICAgICAgICAgICB0aGlzLnRhcGUuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgZm9yKGxldCBzIG9mIHRhcGUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUb1RhcGUoe2lzRXBzeWxvbjogZmFsc2UsIHZhbHVlOiBzfSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRlbXAgPSB0aGlzLnRhcGU/LmNoaWxkcmVuWzBdIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIGlmKHRlbXApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN5bWJvbFRvU3RhdGUodGVtcCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVzZVRyYW5zaXRpb24oZjogVHJhbnNpdGlvbkZ1bmN0aW9uKTogdm9pZHtcclxuICAgICAgICBjb25zb2xlLmxvZyhmKTtcclxuICAgICAgICB0aGlzLnNpbXVsYXRvcj8uYXBwbHlUcmFuc2l0aW9uRnVuY3Rpb24oZik7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShmLnRvU3RhdGUpO1xyXG4gICAgICAgIGlmKCFmLmlucHV0U3ltYm9sLmlzRXBzeWxvbil7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZVRhcGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZi5zdGFydFN5bWJvbCAhPSBudWxsKXtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tU3RhY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBpID0gZi5wdXNoZWRTeW1ib2xzLmxlbmd0aC0xOyBpID49IDA7IGktLSl7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkVG9TdGFjayhmLnB1c2hlZFN5bWJvbHNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFkZFRvSGlzdG9yeShmKTtcclxuICAgICAgICB0aGlzLmlzQ2hvb3NpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdlbmVyYXRlT3B0aW9ucyhvcHRpb25zOiBUcmFuc2l0aW9uRnVuY3Rpb25bXSk6IHZvaWR7XHJcbiAgICAgICAgaWYodGhpcy5pbmZvQnV0dG9uKXtcclxuICAgICAgICAgICAgdGhpcy5pbmZvQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJmbGV4XCIpO1xyXG4gICAgICAgICAgICB0aGlzLmluZm9CdXR0b24uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy50cmFuc2l0aW9uT3B0aW9ucyl7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbk9wdGlvbnMuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBvIG9mIG9wdGlvbnMpe1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC5hZGQoXCJweC0yXCIsXCJweS0xXCIsXCJteC1hdXRvXCIpO1xyXG4gICAgICAgICAgICBvcHRpb24uYXBwZW5kKFVJLmdlbmVyYXRlVHJhbnNpdGlvbkZ1bmN0aW9uKG8pKTtcclxuICAgICAgICAgICAgb3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZVRyYW5zaXRpb24obyk7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnRyYW5zaXRpb25PcHRpb25zKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25PcHRpb25zLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZm9CdXR0b24uY2xhc3NMaXN0LmFkZChcImZsZXhcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZm9CdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuaXNSdW5uaWcgJiYgdGhpcy5kaXJlY3Rpb25Gb3J3YXJkKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXIgPSB0aGlzLmRpcmVjdGlvbkZvcndhcmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuaXNSdW5uaWcgJiYgdGhpcy5kaXJlY3Rpb25Gb3J3YXJkID09IGRpcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dFN0ZXAoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCB0aGlzLnNwZWVkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbk9wdGlvbnM/LmFwcGVuZChvcHRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZXh0U3RlcCgpOiB2b2lke1xyXG4gICAgICAgIGlmKCF0aGlzLmlzQ2hvb3Npbmcpe1xyXG4gICAgICAgICAgICBpZih0aGlzLnNpbXVsYXRvcil7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zc2libGVUcmFuc3Rpb25zOiBUcmFuc2l0aW9uRnVuY3Rpb25bXSA9IHRoaXMuc2ltdWxhdG9yLm5leHRTdGVwKCk7XHJcbiAgICAgICAgICAgICAgICBpZihwb3NzaWJsZVRyYW5zdGlvbnMubGVuZ3RoID09IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHBvc3NpYmxlIHRyYW5zaXRpb25zXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZihwb3NzaWJsZVRyYW5zdGlvbnMubGVuZ3RoID09IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlVHJhbnNpdGlvbihwb3NzaWJsZVRyYW5zdGlvbnNbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuaXNSdW5uaWcgJiYgdGhpcy5kaXJlY3Rpb25Gb3J3YXJkKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRpciA9IHRoaXMuZGlyZWN0aW9uRm9yd2FyZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmlzUnVubmlnICYmIHRoaXMuZGlyZWN0aW9uRm9yd2FyZCA9PSBkaXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0U3RlcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0aGlzLnNwZWVkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNDaG9vc2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZU9wdGlvbnMocG9zc2libGVUcmFuc3Rpb25zKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBiYWNrU3RlcCgpOiB2b2lke1xyXG4gICAgICAgIGlmKHRoaXMuaXNDaG9vc2luZyl7XHJcbiAgICAgICAgICAgIHRoaXMuaXNDaG9vc2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZih0aGlzLnRyYW5zaXRpb25PcHRpb25zKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbk9wdGlvbnMuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmluZm9CdXR0b24uY2xhc3NMaXN0LmFkZChcImZsZXhcIik7XHJcbiAgICAgICAgICAgIHRoaXMuaW5mb0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuc2ltdWxhdG9yKXtcclxuICAgICAgICAgICAgbGV0IGxhc3QgPSB0aGlzLnNpbXVsYXRvci5iYWNrU3RlcCgpO1xyXG4gICAgICAgICAgICBpZihsYXN0KXtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRnJvbUhpc3RvcnkoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobGFzdC5mcm9tU3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgaWYoIWxhc3QuaW5wdXRTeW1ib2wuaXNFcHN5bG9uKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVUYXBlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxhc3QucHVzaGVkU3ltYm9scy5sZW5ndGg7IGkrKyl7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRnJvbVN0YWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihsYXN0LnN0YXJ0U3ltYm9sICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9TdGFjayhsYXN0LnN0YXJ0U3ltYm9sKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih0aGlzLmlzUnVubmlnICYmICF0aGlzLmRpcmVjdGlvbkZvcndhcmQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBkaXIgPSB0aGlzLmRpcmVjdGlvbkZvcndhcmQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmlzUnVubmlnICYmIHRoaXMuZGlyZWN0aW9uRm9yd2FyZCA9PSBkaXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFja1N0ZXAoKTtcclxuICAgICAgICAgICAgICAgIH0sIHRoaXMuc3BlZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBVSSB9IGZyb20gXCIuL3VpXCI7XG5pbXBvcnQgeyBQdXNoZG93bkF1dG9tYXRhU2ltdWxhdG9yIH0gZnJvbSBcIi4vcHVzaGRvd25BdXRvbWF0YVNpbXVsYXRvclwiO1xuaW1wb3J0IHsgUHVzaGRvd25BdXRvbWF0YSB9IGZyb20gXCIuL3B1c2hkb3duQXV0b21hdGFcIjtcbmltcG9ydCB7IHJlZ2lzdGVyRXZlbnRzIH0gZnJvbSBcIi4vZXZlbnRzXCI7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuaW1wb3J0IHsgRm9ybUF1dG9tYXRhQnVpbGRlciB9IGZyb20gXCIuL2Zvcm1BdXRvbWF0YUJ1aWxkZXJcIjtcblxudmFyIHN0b3JhZ2U6IFN0b3JhZ2U7XG52YXIgdWk6IFVJO1xudmFyIGF1dG9tYXRhQnVpbGRlcjogRm9ybUF1dG9tYXRhQnVpbGRlcjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIHVpID0gbmV3IFVJKCk7XG4gICAgc3RvcmFnZSA9IG5ldyBTdG9yYWdlKHVpKTtcbiAgICBhdXRvbWF0YUJ1aWxkZXIgPSBuZXcgRm9ybUF1dG9tYXRhQnVpbGRlcigpO1xuICAgIHJlZ2lzdGVyRXZlbnRzKCk7XG4gICAgdWkucmVnaXN0ZXJFdmVudHMoKTtcbiAgICBzdG9yYWdlLnJlZ2lzdGVyRXZlbnRzKCk7XG4gICAgYXV0b21hdGFCdWlsZGVyLnJlZ2lzdGVyRXZlbnRzKCk7XG4gICAgc3RvcmFnZS5wcmludEF1dG9tYXRhcygpO1xuICAgIHVpLnNldFRhcGUoXCJhYWJiXCIpO1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9