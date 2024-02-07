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
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/ui.ts");


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
    keyboardDeleteButton;
    transitionFunctionParts;
    activePart;
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
        //TODO: Clear transition function
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
        for (let i = 0; i < 4; i++) {
            if (this.transitionFunctionParts[i].innerText === '') {
                this.transitionFunctionError.style.display = 'block';
                this.transitionFunctionError.innerText = 'Error: All fields must be filled';
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
            if ((0,_pushdownAutomataTypes__WEBPACK_IMPORTED_MODULE_0__.compareTransitionFunction)(t, item)) {
                this.transitionFunctionError.style.display = 'block';
                return;
            }
        }
        this.transitionFunctions.push(item);
        this.transitionFunctionDiv.append(this.createTransitionFunctionDiv(item));
        this.transitionFunctionError.style.display = 'none';
    }
    createTransitionFunctionDiv(item) {
        let div = document.createElement('div');
        div.classList.add('flex', 'p-2', 'bg-slate-100', 'rounded', 'm-2', 'flex-row', 'justify-center', 'items-center');
        let t = _ui__WEBPACK_IMPORTED_MODULE_1__.UI.generateTransitionFunction(item);
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
        if (this.transitionFunctionParts[0].innerText === item.value) {
            this.transitionFunctionParts[0].innerText = '';
        }
        if (this.transitionFunctionParts[3].innerText === item.value) {
            this.transitionFunctionParts[3].innerText = '';
        }
        //TODO: Check already defined transition functions
    }
    ;
    inputSymbolDeleted(item) {
        if (this.transitionFunctionParts[2].innerText === item.value) {
            this.transitionFunctionParts[2].innerText = '';
        }
        //TODO: Check already defined transition functions
    }
    ;
    stackSymbolDeleted(item) {
        let option = this.initialStateSelect.options.namedItem("stackSymbolOption" + item.value);
        if (option && option.selected) {
            option.remove();
        }
        if (this.transitionFunctionParts[1].innerText === item.value) {
            this.transitionFunctionParts[1].innerText = '';
        }
        if (this.transitionFunctionParts[4].innerText.includes(item.value)) {
            this.transitionFunctionParts[4].innerText = '';
        }
        //TODO: Check already defined transition functions
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJLHFCQUFxQyxDQUFDO0FBQzFDLElBQUksb0JBQW9DLENBQUM7QUFDekMsSUFBSSxPQUF1QixDQUFDO0FBQ3JCLElBQUksUUFBd0IsQ0FBQztBQUM3QixJQUFJLFFBQXdCLENBQUM7QUFDN0IsSUFBSSxlQUErQixDQUFDO0FBQ3BDLElBQUksa0JBQWtDLENBQUM7QUFDdkMsSUFBSSxhQUE2QixDQUFDO0FBQ2xDLElBQUksb0JBQW9DO0FBQ3hDLElBQUksZ0JBQWdDLENBQUM7QUFFNUMsU0FBUyxhQUFhO0lBQ2xCLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25DLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3JDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3JDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25DLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3RDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDNUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDeEMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNsRCxDQUFDO0FBQUEsQ0FBQztBQUVLLFNBQVMsY0FBYztJQUMxQixxQkFBcUIsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLHVCQUF1QixDQUFtQixDQUFDO0lBQzNGLG9CQUFvQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsc0JBQXNCLENBQW1CLENBQUM7SUFDekYsT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFtQixDQUFDO0lBQy9ELFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBbUIsQ0FBQztJQUNqRSxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQW1CLENBQUM7SUFDakUsZUFBZSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQW1CLENBQUM7SUFDL0Usa0JBQWtCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBbUIsQ0FBQztJQUNyRixhQUFhLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQW1CLENBQUM7SUFDM0Usb0JBQW9CLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBbUIsQ0FBQztJQUN6RixnQkFBZ0IsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFtQixDQUFDO0lBRWpGLFFBQVEsQ0FBQyxjQUFjLENBQUMsMEJBQTBCLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1FBQ2hGLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQzlDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQ2hELENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLGNBQWMsQ0FBQyx5QkFBeUIsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7UUFDL0Usb0JBQW9CLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDNUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDakQsQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRXBGLFFBQVEsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFFcEYsUUFBUSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7UUFDekUsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ2hDLGVBQWUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUMzQyxDQUFDLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxjQUFjLENBQUMsc0JBQXNCLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1FBQzVFLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUNoQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUM1QyxDQUFDLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxjQUFjLENBQUMsc0JBQXNCLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1FBQzVFLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUNoQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUM5QyxDQUFDLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxjQUFjLENBQUMsMEJBQTBCLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1FBQ2hGLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUNoQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUM5QyxDQUFDLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1FBQzFFLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQzFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQ2hELENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7UUFDdEUsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ2hDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3ZDLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFzQixDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDeEUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQXNCLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUM5RSxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEY4SztBQUNySjtBQUluQixNQUFNLG1CQUFtQjtJQUNwQixNQUFNLENBQVM7SUFDZixZQUFZLENBQWU7SUFDM0IsWUFBWSxDQUFlO0lBQzNCLFlBQVksQ0FBUztJQUNyQixrQkFBa0IsQ0FBZTtJQUNqQyxlQUFlLENBQWdCO0lBQy9CLG1CQUFtQixDQUFzQjtJQUV6QyxTQUFTLENBQWlCO0lBQzFCLGNBQWMsQ0FBaUI7SUFDL0IsY0FBYyxDQUFpQjtJQUMvQixxQkFBcUIsQ0FBaUI7SUFFdEMsa0JBQWtCLENBQW9CO0lBQ3RDLHdCQUF3QixDQUFvQjtJQUM1QyxxQkFBcUIsQ0FBb0I7SUFFekMsVUFBVSxDQUF1QjtJQUNqQyxnQkFBZ0IsQ0FBdUI7SUFDdkMsZ0JBQWdCLENBQXVCO0lBQ3ZDLGlCQUFpQixDQUF1QjtJQUN4Qyx1QkFBdUIsQ0FBdUI7SUFDOUMsbUJBQW1CLENBQXVCO0lBQzFDLHVCQUF1QixDQUF1QjtJQUU5QyxhQUFhLENBQWlCO0lBQzlCLG1CQUFtQixDQUFpQjtJQUNwQyxtQkFBbUIsQ0FBaUI7SUFDcEMsb0JBQW9CLENBQW9CO0lBRXhDLHVCQUF1QixDQUF5QjtJQUVoRCxVQUFVLENBQVM7SUFHM0I7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDO1FBRTlCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBbUIsQ0FBQztRQUNoRixJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMseUJBQXlCLENBQW1CLENBQUM7UUFDM0YsSUFBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLHlCQUF5QixDQUFtQixDQUFDO1FBQzNGLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGlDQUFpQyxDQUFtQixDQUFDO1FBRTFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLCtCQUErQixDQUFzQixDQUFDO1FBQ3hHLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLHFDQUFxQyxDQUFzQixDQUFDO1FBQ3BILElBQUksQ0FBQyxxQkFBcUIsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGtDQUFrQyxDQUFzQixDQUFDO1FBRTlHLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQXlCLENBQUM7UUFDaEYsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQXlCLENBQUM7UUFDNUYsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQXlCLENBQUM7UUFDNUYsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQXlCLENBQUM7UUFDOUYsSUFBSSxDQUFDLHVCQUF1QixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMseUJBQXlCLENBQXlCLENBQUM7UUFDMUcsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQXlCLENBQUM7UUFDbEcsSUFBSSxDQUFDLHVCQUF1QixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMseUJBQXlCLENBQXlCLENBQUM7UUFFMUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBbUIsQ0FBQztRQUNoRixJQUFJLENBQUMsbUJBQW1CLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBbUIsQ0FBQztRQUM1RixJQUFJLENBQUMsbUJBQW1CLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBbUIsQ0FBQztRQUU1RixJQUFJLENBQUMsdUJBQXVCLEdBQUcsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBeUIsQ0FBQyxDQUFDO1FBQzNHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBeUIsQ0FBQyxDQUFDO1FBQ3pHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBeUIsQ0FBQyxDQUFDO1FBQ3ZHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBeUIsQ0FBQyxDQUFDO1FBQ3hHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBeUIsQ0FBQyxDQUFDO1FBRTVHLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFckIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUNqRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxjQUFjO1FBQ1YsUUFBUSxDQUFDLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDcEgsUUFBUSxDQUFDLGNBQWMsQ0FBQyw0QkFBNEIsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDNUgsUUFBUSxDQUFDLGNBQWMsQ0FBQyw0QkFBNEIsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDNUgsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDOUYsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsK0JBQStCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDMUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyw4QkFBOEIsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsZ0NBQWdDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDckksSUFBSSxDQUFDLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDcEcsUUFBUSxDQUFDLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDMUgsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQVksRUFBRSxFQUFFLEdBQUUsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7UUFDbkksSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQVksRUFBRSxFQUFFLEdBQUUsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7UUFDbkksSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQVksRUFBRSxFQUFFLEdBQUUsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7UUFDbkksSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQVksRUFBRSxFQUFFLEdBQUUsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7UUFDbkksSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQVksRUFBRSxFQUFFLEdBQUUsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7UUFDbkksUUFBUSxDQUFDLGNBQWMsQ0FBQyw2QkFBNkIsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDcEksQ0FBQztJQUVELEtBQUs7UUFDRCxNQUFNO1FBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDMUMsUUFBUTtRQUNQLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFzQixDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDdEUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBc0IsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQzVFLFFBQVEsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQXNCLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUM3RSxTQUFTO1FBQ1QsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QyxNQUFNLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNsQixNQUFNLENBQUMsU0FBUyxHQUFHLDBCQUEwQixDQUFDO1FBQzlDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDbEIsTUFBTSxDQUFDLFNBQVMsR0FBRyxnQ0FBZ0MsQ0FBQztRQUNwRCxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN2QixNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN2QixNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsd0JBQXdCLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUM3QyxJQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQzFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQzNDLFVBQVU7UUFDVCxRQUFRLENBQUMsY0FBYyxDQUFDLDhCQUE4QixDQUFzQixDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDN0YsVUFBVTtRQUNWLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxFQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ2pELFFBQVE7UUFDUixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUM3QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDN0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQzlDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUNoRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDOUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3BELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUNwRCxpQ0FBaUM7SUFDckMsQ0FBQztJQUVELHNCQUFzQixDQUFDLEtBQWtCO1FBQ3JDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsTUFBeUIsQ0FBQztRQUMzQyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQXFCLENBQUM7UUFDM0UsSUFBSSxVQUFVLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUNsQyxVQUFVLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLElBQUksR0FBVTtZQUNkLEtBQUssRUFBRSxVQUFVO1NBQ3BCLENBQUM7UUFDRixJQUFJLENBQUMsT0FBTyxDQUFRLGdFQUFZLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCx3QkFBd0IsQ0FBQyxLQUFrQjtRQUN2QyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLE1BQXlCLENBQUM7UUFDM0MsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQXFCLENBQUM7UUFDakYsSUFBSSxVQUFVLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUNsQyxVQUFVLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLElBQUksR0FBZ0I7WUFDcEIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsS0FBSyxFQUFFLFVBQVU7U0FDcEIsQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFPLENBQWMsc0VBQWtCLEVBQUUsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFBQSxDQUFDO0lBRUYsd0JBQXdCLENBQUMsS0FBa0I7UUFDdkMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUF5QixDQUFDO1FBQzNDLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFxQixDQUFDO1FBQ2pGLElBQUksVUFBVSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDbEMsVUFBVSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxJQUFJLEdBQWdCO1lBQ3BCLEtBQUssRUFBRSxVQUFVO1NBQ3BCLENBQUM7UUFDRixJQUFJLENBQUMsT0FBTyxDQUFjLHNFQUFrQixFQUFFLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBQUEsQ0FBQztJQUVGLHlCQUF5QixDQUFDLEtBQVk7UUFDbEMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUEyQixDQUFDO1FBQy9DLElBQUksY0FBYyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzFELElBQUcsY0FBYyxDQUFDLEtBQUssS0FBSyxFQUFFLEVBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztRQUNsQyxDQUFDO2FBQ0csQ0FBQztZQUNELElBQUksSUFBSSxHQUFHO2dCQUNQLEtBQUssRUFBRSxjQUFjLENBQUMsS0FBSzthQUM5QjtZQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQzdCLENBQUM7SUFDTCxDQUFDO0lBQUEsQ0FBQztJQUVGLCtCQUErQixDQUFDLEtBQVk7UUFDeEMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUEyQixDQUFDO1FBQy9DLElBQUksY0FBYyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzFELElBQUcsY0FBYyxDQUFDLEtBQUssS0FBSyxFQUFFLEVBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDO1FBQ3hDLENBQUM7YUFDRyxDQUFDO1lBQ0QsSUFBSSxJQUFJLEdBQUc7Z0JBQ1AsS0FBSyxFQUFFLGNBQWMsQ0FBQyxLQUFLO2FBQzlCO1lBQ0QsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztRQUNuQyxDQUFDO0lBQ0wsQ0FBQztJQUFBLENBQUM7SUFFRixnQ0FBZ0MsQ0FBQyxLQUFZO1FBQ3pDLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxNQUEwQixDQUFDO1FBQ2hELElBQUcsUUFBUSxDQUFDLE9BQU8sRUFBQyxDQUFDO1lBQ2pCLEtBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDO2dCQUN0QixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzVGLElBQUcsTUFBTSxFQUFDLENBQUM7b0JBQ1AsTUFBTSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQzVCLENBQUM7WUFDTCxDQUFDO1lBQ0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7WUFDNUIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDL0MsQ0FBQzthQUNHLENBQUM7WUFDRCxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUNoRCxDQUFDO0lBQ0wsQ0FBQztJQUFBLENBQUM7SUFFRiw0QkFBNEIsQ0FBQyxLQUFZO1FBQ3JDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUMxQixLQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQztZQUN0QixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUYsSUFBRyxNQUFNLEVBQUMsQ0FBQztnQkFDUCxJQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUMsQ0FBQztvQkFDaEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xDLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFBQSxDQUFDO0lBRUYsNEJBQTRCLENBQUMsS0FBWTtRQUNyQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO1lBQ3ZCLElBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsS0FBSyxFQUFFLEVBQUMsQ0FBQztnQkFDakQsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2dCQUNyRCxJQUFJLENBQUMsdUJBQXVCLENBQUMsU0FBUyxHQUFHLGtDQUFrQyxDQUFDO2dCQUM1RSxPQUFPO1lBQ1gsQ0FBQztRQUNMLENBQUM7UUFDRCxJQUFJLFNBQVMsR0FBRyxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFDLENBQUM7UUFDbkUsSUFBSSxXQUFXLEdBQUcsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBQyxDQUFDO1FBQ3JFLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFDLENBQUM7UUFDL0osSUFBSSxPQUFPLEdBQUcsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBQyxDQUFDO1FBQ2pFLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUUsT0FBTyxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUMsR0FBQyxDQUFDLENBQUM7UUFDeEcsSUFBSSxJQUFJLEdBQXVCO1lBQzNCLFNBQVMsRUFBRSxTQUFTO1lBQ3BCLFdBQVcsRUFBRSxXQUFXO1lBQ3hCLFdBQVcsRUFBRSxXQUFXO1lBQ3hCLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLGFBQWEsRUFBRSxhQUFhO1NBQy9CLENBQUM7UUFDRixLQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBQyxDQUFDO1lBQ25DLElBQUcsaUZBQXlCLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFDLENBQUM7Z0JBQ25DLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztnQkFDckQsT0FBTztZQUNYLENBQUM7UUFDTCxDQUFDO1FBQ0QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUN4RCxDQUFDO0lBRUQsMkJBQTJCLENBQUMsSUFBd0I7UUFDaEQsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUNqSCxJQUFJLENBQUMsR0FBRyxtQ0FBRSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZCxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMzRSxNQUFNLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUN2QixHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25CLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEYsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBRUQsT0FBTyxDQUFxQixlQUE4QyxFQUFFLElBQU8sRUFBRSxJQUFZO1FBQzdGLElBQUksR0FBUyxDQUFDO1FBQ2QsSUFBSSxLQUEyQixDQUFDO1FBQ2hDLElBQUksUUFBZ0IsQ0FBQztRQUNyQixJQUFHLElBQUksS0FBSyxPQUFPLEVBQUMsQ0FBQztZQUNqQixHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQWEsQ0FBQztZQUN6QixLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUN4QixRQUFRLEdBQUcsNkJBQTZCLENBQUM7UUFDN0MsQ0FBQzthQUFNLElBQUcsSUFBSSxLQUFLLGFBQWEsRUFBQyxDQUFDO1lBQzlCLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBbUIsQ0FBQztZQUMvQixLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQzlCLFFBQVEsR0FBRyxvQ0FBb0MsQ0FBQztRQUNwRCxDQUFDO2FBQU0sSUFBRyxJQUFJLEtBQUssYUFBYSxFQUFDLENBQUM7WUFDOUIsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFtQixDQUFDO1lBQy9CLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDOUIsUUFBUSxHQUFHLG9DQUFvQyxDQUFDO1FBQ3BELENBQUM7UUFDRCxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDbkIsS0FBSSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUMsQ0FBQztZQUNkLElBQUcsZUFBZSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBQyxDQUFDO2dCQUN6QixNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNkLE1BQU07WUFDVixDQUFDO1FBQ0wsQ0FBQztRQUNELElBQUcsQ0FBQyxNQUFNLEVBQUMsQ0FBQztZQUNSLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDZixJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNuRSxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3BDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUM7WUFDaEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNkLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDbkUsTUFBTSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7WUFDdkIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuQixJQUFHLElBQUksS0FBSyxPQUFPLEVBQUMsQ0FBQztnQkFDakIsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDO2dCQUN6RixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFhLEVBQUUsY0FBYyxDQUFDLENBQUM7WUFDbkQsQ0FBQztpQkFBTSxJQUFHLElBQUksS0FBSyxhQUFhLEVBQUMsQ0FBQztnQkFDOUIsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9GLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBbUIsRUFBRSxjQUFjLENBQUMsQ0FBQztZQUMvRCxDQUFDO2lCQUFNLElBQUcsSUFBSSxLQUFLLGFBQWEsRUFBQyxDQUFDO2dCQUM5QixJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2RCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQztnQkFDL0YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFtQixFQUFFLGNBQWMsQ0FBQyxDQUFDO1lBQy9ELENBQUM7WUFDRCxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDakMsQ0FBQzthQUNHLENBQUM7WUFDRCxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDOUIsS0FBSyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDL0IsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXLENBQUMsSUFBVyxFQUFFLEdBQW1CLEVBQUUsY0FBaUM7UUFDM0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixjQUFjLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDeEIsaUJBQWlCO0lBQ3JCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxJQUFpQixFQUFFLEdBQW1CLEVBQUUsY0FBaUM7UUFDdkYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN4QixpQkFBaUI7SUFDckIsQ0FBQztJQUVELGlCQUFpQixDQUFDLElBQWlCLEVBQUUsR0FBbUIsRUFBRSxjQUFpQztRQUN2RixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3hCLGlCQUFpQjtJQUNyQixDQUFDO0lBRUQsd0JBQXdCLENBQUMsSUFBd0IsRUFBRSxHQUFtQjtRQUNsRSxJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBQUEsQ0FBQztJQUVGLFVBQVUsQ0FBQyxJQUFXLEVBQUUsY0FBaUM7UUFDckQsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDMUIsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxFQUFFLEdBQUcsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM5QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXZDLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMxQixNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDOUIsTUFBTSxDQUFDLEVBQUUsR0FBRyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2hELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFMUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUFBLENBQUM7SUFFRixnQkFBZ0IsQ0FBQyxJQUFpQixFQUFFLGNBQWlDO1FBQ2pFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUFBLENBQUM7SUFFRixnQkFBZ0IsQ0FBQyxJQUFpQixFQUFFLGNBQWlDO1FBQ2pFLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM5QixNQUFNLENBQUMsRUFBRSxHQUFHLG1CQUFtQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDN0MsSUFBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU3QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFBQSxDQUFDO0lBRUYsWUFBWSxDQUFDLElBQVc7UUFDcEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN6RixJQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFDLENBQUM7WUFDMUIsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN2RCxDQUFDO1FBQ0QsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMvRixJQUFHLE9BQU8sSUFBSSxPQUFPLENBQUMsUUFBUSxFQUFDLENBQUM7WUFDNUIsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3JCLENBQUM7UUFDRCxJQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ25ELENBQUM7UUFDRCxJQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ25ELENBQUM7UUFDRCxrREFBa0Q7SUFDdEQsQ0FBQztJQUFBLENBQUM7SUFFRixrQkFBa0IsQ0FBQyxJQUFpQjtRQUNoQyxJQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ25ELENBQUM7UUFDRCxrREFBa0Q7SUFDdEQsQ0FBQztJQUFBLENBQUM7SUFFRixrQkFBa0IsQ0FBQyxJQUFpQjtRQUNoQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hGLElBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUMsQ0FBQztZQUMxQixNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDcEIsQ0FBQztRQUNELElBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDbkQsQ0FBQztRQUNELElBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUM7WUFDL0QsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDbkQsQ0FBQztRQUNELGtEQUFrRDtJQUN0RCxDQUFDO0lBQUEsQ0FBQztJQUVGLG9CQUFvQixDQUFDLElBQWMsRUFBRSxJQUFZO1FBQzdDLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNyRyxNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFrQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbEcsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVELHFCQUFxQixDQUFDLEtBQVksRUFBRSxJQUFZO1FBQzVDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkMsUUFBTyxJQUFJLEVBQUMsQ0FBQztZQUNULE9BQU87WUFDUCxLQUFLLENBQUM7Z0JBQ0YsSUFBRyxJQUFJLENBQUMsVUFBVSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLENBQUMsRUFBQyxDQUFDO29CQUMvQyxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBMkIsQ0FBQztvQkFDL0MsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxVQUFVLENBQXlCLENBQUM7b0JBQ3ZGLFVBQVUsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztnQkFDNUMsQ0FBQztnQkFDRCxPQUFPO1lBQ1gsY0FBYztZQUNkLEtBQUssQ0FBQztnQkFDRixJQUFHLElBQUksQ0FBQyxVQUFVLEtBQUssQ0FBQyxFQUFDLENBQUM7b0JBQ3RCLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUEyQixDQUFDO29CQUMvQyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBeUIsQ0FBQztvQkFDdkYsVUFBVSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO2dCQUM1QyxDQUFDO2dCQUNELE9BQU87WUFDWCxjQUFjO1lBQ2QsS0FBSyxDQUFDO2dCQUNGLElBQUcsSUFBSSxDQUFDLFVBQVUsS0FBSyxDQUFDLEVBQUMsQ0FBQztvQkFDdEIsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQTJCLENBQUM7b0JBQy9DLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUF5QixDQUFDO29CQUN2RixVQUFVLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7Z0JBQzVDLENBQUM7cUJBQ0ksSUFBRyxJQUFJLENBQUMsVUFBVSxLQUFLLENBQUMsRUFBQyxDQUFDO29CQUMzQixJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBMkIsQ0FBQztvQkFDL0MsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxVQUFVLENBQXlCLENBQUM7b0JBQ3ZGLFVBQVUsQ0FBQyxTQUFTLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQztnQkFDN0MsQ0FBQztnQkFDRCxPQUFPO1lBQ1gsS0FBSyxDQUFDO2dCQUNGLElBQUcsSUFBSSxDQUFDLFVBQVUsS0FBSyxDQUFDLEVBQUMsQ0FBQztvQkFDdEIsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxVQUFVLENBQXlCLENBQUM7b0JBQ3ZGLFVBQVUsQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVELENBQUM7Z0JBQ0QsT0FBTztZQUNYO2dCQUNJLE9BQU87UUFDZixDQUFDO0lBRUwsQ0FBQztJQUVELG1DQUFtQyxDQUFDLEtBQVksRUFBRSxLQUFhO1FBQzNELEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFHLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxLQUFLLEVBQUMsQ0FBQztZQUM1QyxPQUFPO1FBQ1gsQ0FBQztRQUVELElBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDL0UsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBRTVFLElBQUcsSUFBSSxDQUFDLFVBQVUsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxDQUFDLEVBQUMsQ0FBQztnQkFDL0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztZQUM5QyxDQUFDO2lCQUNJLElBQUcsSUFBSSxDQUFDLFVBQVUsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxDQUFDLEVBQUMsQ0FBQztnQkFDcEQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQ3BELENBQUM7aUJBQ0ksQ0FBQztnQkFDRixJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDcEQsQ0FBQztRQUNMLENBQUM7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUV4QixJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRTVFLElBQUcsSUFBSSxDQUFDLFVBQVUsS0FBSyxDQUFDLEVBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdEQsQ0FBQzthQUNHLENBQUM7WUFDRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDckQsQ0FBQztRQUVELElBQUcsSUFBSSxDQUFDLFVBQVUsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxDQUFDLEVBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQzlDLENBQUM7YUFDSSxJQUFHLElBQUksQ0FBQyxVQUFVLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssQ0FBQyxFQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3BELENBQUM7YUFDSSxDQUFDO1lBQ0YsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3BELENBQUM7SUFDTCxDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyaUI4RjtBQUV4RixNQUFNLGdCQUFnQjtJQUN6QixNQUFNLENBQVU7SUFDaEIsWUFBWSxDQUFnQjtJQUM1QixZQUFZLENBQWdCO0lBQzVCLFlBQVksQ0FBUTtJQUNwQixnREFBZ0Q7SUFDaEQsa0JBQWtCLENBQXFCO0lBQ3ZDLGNBQWMsQ0FBaUI7SUFDL0Isa0JBQWtCLENBQXVCO0lBQ3pDLFlBQVksTUFBZSxFQUFFLFlBQTJCLEVBQUUsWUFBMkIsRUFBRSxZQUFtQixFQUFFLGtCQUErQixFQUFFLGNBQThCLEVBQUUsa0JBQXdDO1FBRWpOLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQztRQUM3QyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUNyQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUM7SUFDakQsQ0FBQztJQUVPLFdBQVcsQ0FBQyxLQUFZO1FBQzVCLEtBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDO1lBQ3RCLElBQUcsb0VBQVksQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUMsQ0FBQztnQkFDdkIsT0FBTyxJQUFJLENBQUM7WUFDaEIsQ0FBQztRQUNMLENBQUM7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRU8saUJBQWlCLENBQUMsV0FBd0I7UUFDOUMsS0FBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFDLENBQUM7WUFDNUIsSUFBRywwRUFBa0IsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLEVBQUMsQ0FBQztnQkFDbkMsT0FBTyxJQUFJLENBQUM7WUFDaEIsQ0FBQztRQUNMLENBQUM7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRU8saUJBQWlCLENBQUMsV0FBd0I7UUFDOUMsS0FBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFDLENBQUM7WUFDNUIsSUFBRywwRUFBa0IsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLEVBQUMsQ0FBQztnQkFDbkMsT0FBTyxJQUFJLENBQUM7WUFDaEIsQ0FBQztRQUNMLENBQUM7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsb0JBQW9CO1FBQ2hCLElBQUksUUFBUSxHQUFzQixFQUFFLENBQUM7UUFFckMsSUFBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFDLENBQUM7WUFDckMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLDhCQUE4QixFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLENBQUM7UUFFRCxJQUFHLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxFQUFDLENBQUM7WUFDNUIsS0FBSSxJQUFJLFVBQVUsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFDLENBQUM7Z0JBQ3ZDLElBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFDLENBQUM7b0JBQzlCLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxnQ0FBZ0MsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUNsRSxDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7UUFFRCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBRUQsb0JBQW9CO1FBQ2hCLElBQUksUUFBUSxHQUE0QixFQUFFLENBQUM7UUFFM0MsSUFBRyxJQUFJLENBQUMsa0JBQWtCLElBQUksSUFBSSxFQUFDLENBQUM7WUFDaEMsSUFBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBQyxDQUFDO2dCQUNqRCxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMscUNBQXFDLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztZQUNwRixDQUFDO1FBQ0wsQ0FBQztRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFFRCx3QkFBd0I7UUFDcEIsSUFBSSxRQUFRLEdBQW1DLEVBQUUsQ0FBQztRQUVsRCxLQUFJLElBQUksa0JBQWtCLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFDLENBQUM7WUFDbkQsSUFBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLEVBQUMsQ0FBQztnQkFDaEQsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLDJCQUEyQixFQUFFLGtCQUFrQixDQUFDLENBQUMsQ0FBQztZQUNyRSxDQUFDO1lBRUQsSUFBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsRUFBQyxDQUFDO2dCQUN4RCxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsNkJBQTZCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1lBQ3ZFLENBQUM7WUFFRCxJQUFHLGtCQUFrQixDQUFDLFdBQVcsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLEVBQUMsQ0FBQztnQkFDbEcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLDZCQUE2QixFQUFFLGtCQUFrQixDQUFDLENBQUMsQ0FBQztZQUN2RSxDQUFDO1lBRUQsSUFBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLEVBQUMsQ0FBQztnQkFDOUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLHlCQUF5QixFQUFFLGtCQUFrQixDQUFDLENBQUMsQ0FBQztZQUNuRSxDQUFDO1lBRUQsS0FBSSxJQUFJLFlBQVksSUFBSSxrQkFBa0IsQ0FBQyxhQUFhLEVBQUMsQ0FBQztnQkFDdEQsSUFBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsRUFBQyxDQUFDO29CQUN0QyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsOEJBQThCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO2dCQUN4RSxDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7UUFFRCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBRUQsc0JBQXNCLENBQUMsU0FBaUI7UUFDcEMsSUFBSSxjQUFjLEdBQWEsRUFBRSxDQUFDO1FBRWxDLElBQUksT0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUUzQyxLQUFJLElBQUksQ0FBQyxJQUFJLE9BQU8sRUFBQyxDQUFDO1lBQ2xCLElBQUksT0FBTyxHQUFZLElBQUksQ0FBQztZQUM1QixLQUFJLElBQUksV0FBVyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUMsQ0FBQztnQkFDdEMsSUFBRyxXQUFXLENBQUMsU0FBUyxJQUFJLEtBQUssSUFBSSxXQUFXLENBQUMsS0FBSyxJQUFJLENBQUMsRUFBQyxDQUFDO29CQUN6RCxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUNoQixNQUFNO2dCQUNWLENBQUM7WUFDTCxDQUFDO1lBQ0QsSUFBRyxPQUFPLEVBQUMsQ0FBQztnQkFDUixjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNCLENBQUM7UUFDTCxDQUFDO1FBRUQsT0FBTyxjQUFjLENBQUM7SUFDMUIsQ0FBQztJQUVELHNCQUFzQixDQUFDLFVBQWtCLEVBQUUsS0FBWSxFQUFFLFdBQWdDO1FBQ3JGLElBQUksMkJBQTJCLEdBQXlCLEVBQUUsQ0FBQztRQUUzRCxJQUFJLFdBQXdCLENBQUM7UUFDN0IsSUFBRyxVQUFVLEtBQUssRUFBRSxFQUFDLENBQUM7WUFDbEIsV0FBVyxHQUFHLEVBQUMsU0FBUyxFQUFFLElBQUksRUFBQztRQUNuQyxDQUFDO2FBQ0csQ0FBQztZQUNELFdBQVcsR0FBRyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBQyxDQUFDO1FBQ3hELENBQUM7UUFDRCxLQUFJLElBQUksa0JBQWtCLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFDLENBQUM7WUFDbkQsSUFBRyxDQUFDLDBFQUFrQixDQUFDLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUMsQ0FBQztnQkFDOUcsU0FBUztZQUNiLENBQUM7WUFDRCxJQUFHLENBQUMsb0VBQVksQ0FBQyxLQUFLLEVBQUUsa0JBQWtCLENBQUMsU0FBUyxDQUFDLEVBQUMsQ0FBQztnQkFDbkQsU0FBUztZQUNiLENBQUM7WUFDRCxJQUFHLENBQUMsMEVBQWtCLENBQUMsV0FBVyxFQUFFLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxFQUFDLENBQUM7Z0JBQ2pFLFNBQVM7WUFDYixDQUFDO1lBQ0QsMkJBQTJCLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDekQsQ0FBQztRQUVELE9BQU8sMkJBQTJCLENBQUM7SUFDdkMsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9KK0I7QUFFdUI7QUFHaEQsTUFBTSx5QkFBeUI7SUFDbEMsU0FBUyxDQUFTO0lBQ2xCLEtBQUssQ0FBcUI7SUFDMUIsWUFBWSxDQUFRO0lBQ3BCLGNBQWMsQ0FBaUI7SUFDL0IsUUFBUSxDQUFtQjtJQUMzQixPQUFPLEdBQXlCLEVBQUUsQ0FBQztJQUVuQyxZQUFZLFFBQTBCO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSx5Q0FBSyxFQUFlLENBQUM7UUFDdEMsSUFBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixJQUFJLElBQUksRUFBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN0RCxDQUFDO1FBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQztRQUMvQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDO1FBQ25ELElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxLQUFLO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQixJQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLElBQUksSUFBSSxFQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3RELENBQUM7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDO1FBQy9DLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUM7UUFDbkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELHVCQUF1QixDQUFDLENBQXFCO1FBQ3pDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNqQixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELHNCQUFzQjtRQUNsQixJQUFJLGNBQWMsR0FBYSxJQUFJLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwRixJQUFHLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDLENBQUM7WUFDMUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDeEUsQ0FBQztJQUNMLENBQUM7SUFFRCxhQUFhO1FBQ1QsSUFBRyxJQUFJLENBQUMsU0FBUyxLQUFLLEVBQUUsRUFBQyxDQUFDO1lBQ3RCLE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFFRCxJQUFHLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxFQUFDLENBQUM7WUFDNUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzlCLENBQUM7UUFFRCxLQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUMsQ0FBQztZQUM5QixJQUFHLG9FQUFZLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBQyxDQUFDO2dCQUNuQyxPQUFPLElBQUksQ0FBQztZQUNoQixDQUFDO1FBQ0wsQ0FBQztRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUMsQ0FBQztZQUNyQixPQUFPLEVBQUUsQ0FBQztRQUNkLENBQUM7UUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDcEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3pELElBQUksMkJBQWlEO1FBQ3JELElBQUcsSUFBSSxDQUFDLFNBQVMsS0FBSyxFQUFFLEVBQUMsQ0FBQztZQUN0QiwyQkFBMkIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNoSCxDQUFDO2FBQ0csQ0FBQztZQUNELDJCQUEyQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUMvSCxDQUFDO1FBQ0QsT0FBTywyQkFBMkIsQ0FBQztJQUN2QyxDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFDLENBQUM7WUFDMUIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVELElBQUksSUFBSSxHQUF1QixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2xELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNuQyxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLENBQUM7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbEMsSUFBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUztZQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFFN0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFhO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7Q0FHSjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0dNLFNBQVMsa0JBQWtCLENBQUMsQ0FBcUIsRUFBRSxDQUFxQjtJQUMzRSxJQUFHLENBQUMsSUFBSSxJQUFJLElBQUksT0FBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU0sQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFDRCxJQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksRUFBQyxDQUFDO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDO0FBT00sU0FBUyxrQkFBa0IsQ0FBQyxDQUFjLEVBQUUsQ0FBYztJQUM3RCxJQUFHLENBQUMsQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBQyxDQUFDO1FBQzNCLElBQUcsQ0FBQyxDQUFDLFNBQVMsSUFBSSxLQUFLLEVBQUMsQ0FBQztZQUNyQixPQUFPLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUM5QixDQUFDO2FBQ0csQ0FBQztZQUNELE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7SUFDTCxDQUFDO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQU1NLFNBQVMsWUFBWSxDQUFDLENBQVEsRUFBRSxDQUFRO0lBQzNDLE9BQU8sQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQzlCLENBQUM7QUFVTSxTQUFTLHlCQUF5QixDQUFDLENBQXFCLEVBQUUsQ0FBcUI7SUFDbEYsV0FBVztJQUNYLElBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUMsQ0FBQztRQUN4QyxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsYUFBYTtJQUNiLElBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBQyxDQUFDO1FBQ2xELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxhQUFhO0lBQ2IsSUFBRyxPQUFNLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLE9BQU0sQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUMsQ0FBQztRQUMvQyxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBQ0QsSUFBRyxDQUFDLENBQUMsV0FBVyxJQUFJLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFDLENBQUM7UUFDM0UsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVELFNBQVM7SUFDVCxJQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFDLENBQUM7UUFDcEMsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVELGVBQWU7SUFDZixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQztRQUM1QyxJQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztZQUM1RCxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDO0lBQ0wsQ0FBQztJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3hFTSxNQUFNLEtBQUs7SUFDTixJQUFJLEdBQVEsRUFBRSxDQUFDO0lBRXZCLEdBQUc7UUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxJQUFJLENBQUMsSUFBTztRQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxHQUFHO1FBQ0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQztJQUNuRCxDQUFDO0lBRUQsS0FBSztRQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxJQUFJO1FBQ0EsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUM1QixDQUFDO0lBRUQsS0FBSztRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxLQUFLO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNvRDtBQUM1QjtBQUNnRztBQUVsSCxNQUFNLE9BQU87SUFDaEIsbUJBQW1CLENBQW9CO0lBQ3ZDLEVBQUUsQ0FBSztJQUVQLFlBQVksRUFBTTtRQUNkLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLHFCQUFxQixDQUFxQixDQUFDO1FBQzlGLElBQUcsRUFBRSxFQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNqQixDQUFDO0lBQ0wsQ0FBQztJQUVELGNBQWM7UUFDVixRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7SUFFTyxRQUFRLENBQUMsQ0FBYztRQUMzQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQXFCO1FBQzFFLElBQUksR0FBRyxHQUFHLFFBQVEsRUFBRSxLQUFLLENBQUM7UUFFMUIsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQXFCO1FBQzVFLElBQUksSUFBSSxHQUFHLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxJQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFDLENBQUM7WUFDZCxZQUFZO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1lBQzNDLE9BQU87UUFDWCxDQUFDO1FBQ0QsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDO1lBQ3BCLDJCQUEyQjtZQUMzQixJQUFHLENBQUMsT0FBTyxDQUFDLGdDQUFnQyxDQUFDLEVBQUMsQ0FBQztnQkFDM0MsT0FBTztZQUNYLENBQUM7aUJBQ0csQ0FBQztnQkFDRCxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLENBQUM7UUFDTCxDQUFDO1FBQ0QsSUFBRyxDQUFDO1lBQ0EsTUFBTSxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztZQUNoQyxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTtnQkFDakIsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQWdCLENBQUM7Z0JBQ3hDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFxQixDQUFDO2dCQUV6RCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDekIsSUFBRyxDQUFDLFNBQVMsRUFBQyxDQUFDO29CQUNYLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3hCLENBQUM7Z0JBQ0QscURBQWdCLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Z0JBQ3hDLDZDQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Z0JBQ2hDLDZDQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Z0JBQ2hDLGtEQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDNUMsUUFBUSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7Z0JBQ3BCLFNBQVMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ3pCLENBQUM7WUFDRCxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTVCLENBQUM7UUFBQyxPQUFPLEtBQUssRUFBQyxDQUFDO1lBQ1osWUFBWTtZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUMvQixPQUFPO1FBQ1gsQ0FBQztJQUNMLENBQUM7SUFFTyxJQUFJLENBQUksR0FBVyxFQUFFLElBQU87UUFDaEMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRU8sSUFBSSxDQUFJLEdBQVc7UUFDdkIsTUFBTSxJQUFJLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsSUFBSSxFQUFDLENBQUM7WUFDUCxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQsSUFBRyxDQUFDO1lBQ0EsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBTSxDQUFDO1FBQ2pDLENBQUM7UUFBQyxPQUFPLEtBQUssRUFBQyxDQUFDO1lBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQywyQ0FBMkMsR0FBRyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDekUsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztJQUNMLENBQUM7SUFFTyxNQUFNLENBQUMsR0FBVztRQUN0QixZQUFZLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxTQUFTLENBQUMsR0FBVztRQUNqQixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO1lBQ3pDLElBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUMsQ0FBQztnQkFDNUIsT0FBTyxJQUFJLENBQUM7WUFDaEIsQ0FBQztRQUNMLENBQUM7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsWUFBWSxDQUFDLEdBQVcsRUFBRSxRQUEwQjtRQUNoRCxJQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQztZQUNwQiwyQkFBMkI7WUFDM0IsSUFBRyxDQUFDLE9BQU8sQ0FBQyxnQ0FBZ0MsQ0FBQyxFQUFDLENBQUM7Z0JBQzNDLE9BQU87WUFDWCxDQUFDO1FBQ0wsQ0FBQztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxZQUFZLENBQUMsR0FBVztRQUNwQixPQUFPLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBbUIsR0FBRyxDQUFDLEVBQUMsK0RBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDOUYsQ0FBQztJQUVPLFNBQVMsQ0FBQyxHQUFXO1FBQ3pCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEMsSUFBRyxRQUFRLEVBQUMsQ0FBQztZQUNULElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUMvQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUU5QixJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsVUFBVSxFQUFFO1lBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztZQUVyQixJQUFJLEdBQUcsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQztZQUN6QyxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsNHNCQUE0c0IsQ0FBQztZQUNodUIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNwRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXBCLElBQUksR0FBRyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBQ3pDLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcscVRBQXFULENBQUM7WUFDelUsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7Z0JBQ2xDLDZDQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Z0JBQ2hDLGtEQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNoRCxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFcEIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFDekMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDMUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxvVEFBb1QsQ0FBQztZQUN4VSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFDLEdBQUcsRUFBRTtnQkFDakMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDaEUsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxrQkFBa0IsRUFBQyxDQUFDLENBQUM7Z0JBQzdELE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3RDLE1BQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3RDLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO2dCQUNiLENBQUMsQ0FBQyxRQUFRLEdBQUcsR0FBRyxHQUFHLE9BQU8sQ0FBQztnQkFDM0IsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDVixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyxDQUFDLENBQUUsQ0FBQztZQUNKLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFcEIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFDekMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDMUMsTUFBTSxDQUFDLFNBQVMsR0FBRyw2d0JBQTZ3QixDQUFDO1lBQ2p5QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakIsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QixDQUFDO0lBQ0wsQ0FBQztJQUVELGNBQWM7UUFDVixJQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBQyxDQUFDO1lBQ3pCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7Z0JBQ3pDLElBQUksR0FBRyxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEIsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0lBRUQsWUFBWSxDQUFDLEdBQVc7UUFDcEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QyxVQUFVO1FBQ1YsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUUsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ3pELFFBQVE7UUFDUixRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFFLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RHLGVBQWU7UUFDZixRQUFRLENBQUMsY0FBYyxDQUFDLHNCQUFzQixDQUFFLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xILGVBQWU7UUFDZixRQUFRLENBQUMsY0FBYyxDQUFDLHNCQUFzQixDQUFFLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xILGVBQWU7UUFDZixRQUFRLENBQUMsY0FBYyxDQUFDLHNCQUFzQixDQUFFLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBQ3pGLHNCQUFzQjtRQUN0QixRQUFRLENBQUMsY0FBYyxDQUFDLDRCQUE0QixDQUFFLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLENBQUM7UUFDdEcsa0JBQWtCO1FBQ2xCLFFBQVEsQ0FBQyxjQUFjLENBQUMsd0JBQXdCLENBQUUsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksMkJBQTJCLENBQUM7UUFDdEosc0JBQXNCO1FBQ3RCLElBQUksU0FBUyxHQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsMkJBQTJCLENBQW1CLENBQUM7UUFDeEYsU0FBUyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDekIsS0FBSSxJQUFJLENBQUMsSUFBSSxRQUFRLENBQUMsa0JBQWtCLElBQUksRUFBRSxFQUFDLENBQUM7WUFDNUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxtQ0FBRSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkQsQ0FBQztRQUNELHVEQUFrQixDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQzFDLHlEQUFvQixDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQ2hELENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1TXVFO0FBR3JCO0FBRTVDLE1BQU0sRUFBRTtJQUNYLFNBQVMsQ0FBNkI7SUFDdEMsa0JBQWtCLENBQWtCO0lBQ3BDLElBQUksQ0FBa0I7SUFDdEIsS0FBSyxDQUFrQjtJQUN2QixLQUFLLENBQWtCO0lBQ3ZCLFVBQVUsQ0FBcUI7SUFDL0IsaUJBQWlCLENBQWtCO0lBQ25DLGFBQWEsQ0FBd0I7SUFDckMsUUFBUSxDQUFrQjtJQUUxQixZQUFZLEdBQVcsQ0FBQyxDQUFDO0lBRXpCLFVBQVUsR0FBWSxLQUFLLENBQUM7SUFDNUIsUUFBUSxHQUFZLEtBQUssQ0FBQztJQUMxQixnQkFBZ0IsR0FBWSxJQUFJLENBQUM7SUFDakMsS0FBSyxHQUFXLElBQUksQ0FBQztJQUVyQixPQUFPLEdBQTBCLElBQUksQ0FBQztJQUd0QyxZQUFZLFFBQTJCO1FBQ25DLElBQUcsUUFBUSxFQUFDLENBQUM7WUFDVCxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUMzQixDQUFDO1FBQ0QsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsc0JBQXNCLENBQW1CLENBQUM7UUFDNUYsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBbUIsQ0FBQztRQUNqRSxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFtQixDQUFDO1FBQ25FLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQW1CLENBQUM7UUFDbkUsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFzQixDQUFDO1FBQ2pGLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFtQixDQUFDO1FBQ3hGLElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQXlCLENBQUM7UUFDdEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBbUIsQ0FBQztJQUMvRSxDQUFDO0lBRUQsV0FBVyxDQUFDLFFBQTBCO1FBQ2xDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxpRkFBeUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBRyxJQUFJLENBQUMsUUFBUSxFQUFDLENBQUM7WUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3pDLENBQUM7SUFDTCxDQUFDO0lBRUQsY0FBYztRQUNWLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDM0YsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMzRixRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQWlCLEVBQUUsRUFBRTtZQUN0RixJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBRSxLQUFLLENBQUMsTUFBMkIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwRSxDQUFDLENBQUMsQ0FBQztRQUNILFFBQVEsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1lBQ3RFLElBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNkLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLENBQUM7WUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1lBQzdCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztRQUNILFFBQVEsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1lBQ3RFLElBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNkLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLENBQUM7WUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1lBQzlCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztRQUNILFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUNsRSxJQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDZCxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUN4QixDQUFDO1lBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxRQUFRLENBQUMsY0FBYyxDQUFDLHFCQUFxQixDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUMxRSxJQUFHLElBQUksQ0FBQyxRQUFRLEVBQ2hCLENBQUM7Z0JBQ0csSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztZQUN6QyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxRQUFRLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLEVBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUN6RSxJQUFHLElBQUksQ0FBQyxRQUFRLEVBQ2hCLENBQUM7Z0JBQ0csSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztZQUN6QyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzNGLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBaUIsRUFBRSxFQUFFO1lBQ2xGLElBQUksU0FBUyxHQUFZLEtBQUssQ0FBQyxNQUEyQixDQUFDLEtBQUssQ0FBQztZQUNqRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7UUFDSCxRQUFRLENBQUMsY0FBYyxDQUFDLHNCQUFzQixDQUFDLEVBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUU1RSxrREFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQ3JDLDZDQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDaEMsSUFBRyxJQUFJLENBQUMsT0FBTyxFQUFDLENBQUM7Z0JBQ2IsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDeEIsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLFdBQVcsQ0FBQyxLQUFrQjtRQUNsQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLE1BQXlCLENBQUM7UUFDM0MsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFxQixDQUFDO1FBQ3pFLElBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlCLElBQUcsSUFBSSxDQUFDLFFBQVEsRUFBQyxDQUFDO2dCQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDekMsQ0FBQztRQUNMLENBQUM7UUFDRCxPQUFPO0lBQ1gsQ0FBQztJQUVPLHNCQUFzQixDQUFDLFNBQWlCO1FBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUNuQyxJQUFHLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFDZCxPQUFPLEtBQUssQ0FBQztRQUNqQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkUsS0FBSSxJQUFJLENBQUMsSUFBSSxTQUFTLEVBQUMsQ0FBQztZQUNwQixJQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO2dCQUNyQixJQUFJLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQy9DLE9BQU8sS0FBSyxDQUFDO1lBQ2pCLENBQUM7UUFDTCxDQUFDO1FBQ0QsSUFBSSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVDLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFBQSxDQUFDO0lBRUYsTUFBTSxDQUFDLDBCQUEwQixDQUFDLENBQXFCO1FBQ25ELElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFtQixDQUFDO1FBQzFELEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRS9FLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFtQixDQUFDO1FBQzNELElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNyRSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWpCLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFtQixDQUFDO1FBQzVELEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN4QyxLQUFLLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN4QixHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWxCLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFtQixDQUFDO1FBQzdELE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLHFCQUFxQixFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDL0YsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztRQUN2RSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXJCLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFtQixDQUFDO1FBQzVELEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyRixHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWxCLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVELGVBQWU7UUFDWCxRQUFRO1FBQ1IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsSCxlQUFlO1FBQ2YsUUFBUSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBRSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlILGVBQWU7UUFDZixRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFFLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUgsZUFBZTtRQUNmLFFBQVEsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUNyRyxzQkFBc0I7UUFDdEIsUUFBUSxDQUFDLGNBQWMsQ0FBQyx3QkFBd0IsQ0FBRSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLENBQUM7UUFDbEgsa0JBQWtCO1FBQ2xCLFFBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSwyQkFBMkIsQ0FBQztRQUNsSyxzQkFBc0I7UUFDdEIsSUFBSSxTQUFTLEdBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBbUIsQ0FBQztRQUNwRixTQUFTLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUN6QixLQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLGtCQUFrQixJQUFJLEVBQUUsRUFBQyxDQUFDO1lBQzVELFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkQsQ0FBQztJQUNMLENBQUM7SUFFRCxZQUFZLENBQUMsQ0FBcUI7UUFDOUIsSUFBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLENBQUM7SUFDTCxDQUFDO0lBRUQsaUJBQWlCO1FBQ2IsSUFBRyxJQUFJLENBQUMsa0JBQWtCLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixHQUFHLENBQUMsRUFBQyxDQUFDO1lBQ3pFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVFLENBQUM7SUFDTCxDQUFDO0lBRUQsU0FBUyxDQUFDLENBQWMsRUFBRSxNQUFnQjtRQUN0QyxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBbUIsQ0FBQztRQUM3RCxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsZUFBZSxFQUFDLE1BQU0sRUFBQyxnQkFBZ0IsRUFBQyxjQUFjLENBQUM7UUFDN0csTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzNCLElBQUcsTUFBTSxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixDQUFDO2FBQ0csQ0FBQztZQUNELElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9CLENBQUM7SUFDTCxDQUFDO0lBRUQsY0FBYztRQUNWLElBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsRUFBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDaEQsQ0FBQztJQUNMLENBQUM7SUFFRDs7OztNQUlFO0lBQ0YsZ0JBQWdCLENBQUMsQ0FBaUIsRUFBRSxLQUFhO1FBQzdDLFFBQU8sS0FBSyxFQUFDLENBQUM7WUFDVixLQUFLLENBQUMsQ0FBQyxFQUFDO2dCQUNKLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNqQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDakMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzlCLE9BQU07WUFDVixDQUFDO1lBQ0QsS0FBSyxDQUFDLENBQUMsRUFBQztnQkFDSixDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDakMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ2pDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUM5QixPQUFPO1lBQ1gsQ0FBQztZQUNELE9BQU8sQ0FBQyxFQUFDO2dCQUNMLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNqQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDakMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzlCLE9BQU87WUFDWCxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFFRCxRQUFRLENBQUMsV0FBb0IsS0FBSztRQUM5QixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQztRQUNsQyxJQUFHLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBQyxDQUFDO1lBQzlCLElBQUcsUUFBUSxJQUFJLElBQUksRUFBQyxDQUFDO2dCQUNqQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBQyxDQUFDLENBQW1CLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BDLElBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLEVBQUMsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFtQixFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN2RSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7WUFDTCxDQUFDO2lCQUNHLENBQUM7Z0JBQ0QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUNwQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUMsQ0FBQyxDQUFtQixFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN6RSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxJQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBQyxDQUFDO29CQUNuQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQW1CLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztZQUNMLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVcsQ0FBQyxDQUFRO1FBQ2hCLElBQUcsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDO1lBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNuQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFVBQVUsQ0FBQyxDQUFjO1FBQ3JCLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFtQixDQUFDO1FBQzdELE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxlQUFlLEVBQUMsTUFBTSxFQUFDLGdCQUFnQixFQUFDLGNBQWMsRUFBQyxlQUFlLENBQUM7UUFDL0gsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxlQUFlO1FBQ1gsSUFBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxFQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsRCxDQUFDO0lBQ0wsQ0FBQztJQUVELE9BQU87UUFDSCxJQUFHLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQztZQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUM5QixDQUFDO1FBRUQsSUFBRyxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUM7WUFDWCxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxFQUFFO1FBQzdCLENBQUM7UUFFRCxJQUFHLElBQUksQ0FBQyxJQUFJLEVBQUMsQ0FBQztZQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUM3QixDQUFDO1FBRUQsSUFBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUMzQyxDQUFDO1FBRUQsSUFBRyxJQUFJLENBQUMsU0FBUyxFQUNqQixDQUFDO1lBQ0csSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUNsRSxJQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFDLENBQUM7Z0JBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUNoRSxDQUFDO1FBQ0wsQ0FBQztRQUVELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBRyxJQUFJLENBQUMsT0FBTyxFQUNmLENBQUM7WUFDRyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTyxDQUFDLElBQVk7UUFDaEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBRyxJQUFJLENBQUMsSUFBSSxFQUFDLENBQUM7WUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFDekIsS0FBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUMsQ0FBQztnQkFDZixJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDdkQsQ0FBQztRQUNMLENBQUM7UUFDRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQW1CLENBQUM7UUFDcEQsSUFBRyxJQUFJLEVBQ1AsQ0FBQztZQUNHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkMsQ0FBQztJQUNMLENBQUM7SUFFRCxhQUFhLENBQUMsQ0FBcUI7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxTQUFTLEVBQUUsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUIsSUFBRyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3BCLENBQUM7UUFDRCxJQUFHLENBQUMsQ0FBQyxXQUFXLElBQUksSUFBSSxFQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzNCLENBQUM7UUFDRCxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEMsQ0FBQztRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUVPLGVBQWUsQ0FBQyxPQUE2QjtRQUNqRCxJQUFHLElBQUksQ0FBQyxVQUFVLEVBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVDLENBQUM7UUFDRCxJQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQzFDLENBQUM7UUFDRCxLQUFJLElBQUksQ0FBQyxJQUFJLE9BQU8sRUFBQyxDQUFDO1lBQ2xCLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFzQixDQUFDO1lBQ25FLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsU0FBUyxDQUFDLENBQUM7WUFDOUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsSUFBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUMsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7Z0JBQzFDLENBQUM7Z0JBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzNDLElBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQ3pDLENBQUM7b0JBQ0csSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO29CQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUU7d0JBQzNCLElBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLElBQUksR0FBRzs0QkFDNUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUN4QixDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNuQixDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFDLENBQUM7WUFDakIsSUFBRyxJQUFJLENBQUMsU0FBUyxFQUFDLENBQUM7Z0JBQ2YsSUFBSSxrQkFBa0IsR0FBeUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDekUsSUFBRyxrQkFBa0IsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFDLENBQUM7b0JBQy9CLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztnQkFDL0MsQ0FBQztxQkFDSSxJQUFHLGtCQUFrQixDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUMsQ0FBQztvQkFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMxQyxJQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUN6QyxDQUFDO3dCQUNHLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQzt3QkFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFOzRCQUMzQixJQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFJLEdBQUc7Z0NBQzVDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzt3QkFDeEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDbkIsQ0FBQztnQkFDTCxDQUFDO3FCQUNHLENBQUM7b0JBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsQ0FBQztnQkFDN0MsQ0FBQztZQUNMLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFHLElBQUksQ0FBQyxVQUFVLEVBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixJQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBQyxDQUFDO2dCQUN2QixJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztZQUMxQyxDQUFDO1lBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzQyxPQUFPO1FBQ1gsQ0FBQztRQUNELElBQUcsSUFBSSxDQUFDLFNBQVMsRUFBQyxDQUFDO1lBQ2YsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNyQyxJQUFHLElBQUksRUFBQyxDQUFDO2dCQUNMLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2dCQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDakMsSUFBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFDLENBQUM7b0JBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3hCLENBQUM7Z0JBQ0QsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7b0JBQy9DLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDM0IsQ0FBQztnQkFDRCxJQUFHLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxFQUFDLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN0QyxDQUFDO1lBQ0wsQ0FBQztZQUNELElBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFDMUMsQ0FBQztnQkFDRyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRTtvQkFDM0IsSUFBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxHQUFHO3dCQUM1QyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3hCLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkIsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0NBQ0o7Ozs7Ozs7VUM5YkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ04wQjtBQUdnQjtBQUNOO0FBQ3dCO0FBRTVELElBQUksT0FBZ0IsQ0FBQztBQUNyQixJQUFJLEVBQU0sQ0FBQztBQUNYLElBQUksZUFBb0MsQ0FBQztBQUV6QyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFO0lBQy9DLEVBQUUsR0FBRyxJQUFJLG1DQUFFLEVBQUUsQ0FBQztJQUNkLE9BQU8sR0FBRyxJQUFJLDZDQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDMUIsZUFBZSxHQUFHLElBQUkscUVBQW1CLEVBQUUsQ0FBQztJQUM1Qyx1REFBYyxFQUFFLENBQUM7SUFDakIsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3BCLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN6QixlQUFlLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDakMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3pCLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdkIsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW11bGF0aW9uX29mX3B1c2hkb3duX2F1dG9tYXRhLy4vc3JjL2V2ZW50cy50cyIsIndlYnBhY2s6Ly9zaW11bGF0aW9uX29mX3B1c2hkb3duX2F1dG9tYXRhLy4vc3JjL2Zvcm1BdXRvbWF0YUJ1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vc2ltdWxhdGlvbl9vZl9wdXNoZG93bl9hdXRvbWF0YS8uL3NyYy9wdXNoZG93bkF1dG9tYXRhLnRzIiwid2VicGFjazovL3NpbXVsYXRpb25fb2ZfcHVzaGRvd25fYXV0b21hdGEvLi9zcmMvcHVzaGRvd25BdXRvbWF0YVNpbXVsYXRvci50cyIsIndlYnBhY2s6Ly9zaW11bGF0aW9uX29mX3B1c2hkb3duX2F1dG9tYXRhLy4vc3JjL3B1c2hkb3duQXV0b21hdGFUeXBlcy50cyIsIndlYnBhY2s6Ly9zaW11bGF0aW9uX29mX3B1c2hkb3duX2F1dG9tYXRhLy4vc3JjL3N0YWNrLnRzIiwid2VicGFjazovL3NpbXVsYXRpb25fb2ZfcHVzaGRvd25fYXV0b21hdGEvLi9zcmMvc3RvcmFnZS50cyIsIndlYnBhY2s6Ly9zaW11bGF0aW9uX29mX3B1c2hkb3duX2F1dG9tYXRhLy4vc3JjL3VpLnRzIiwid2VicGFjazovL3NpbXVsYXRpb25fb2ZfcHVzaGRvd25fYXV0b21hdGEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2ltdWxhdGlvbl9vZl9wdXNoZG93bl9hdXRvbWF0YS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2ltdWxhdGlvbl9vZl9wdXNoZG93bl9hdXRvbWF0YS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NpbXVsYXRpb25fb2ZfcHVzaGRvd25fYXV0b21hdGEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zaW11bGF0aW9uX29mX3B1c2hkb3duX2F1dG9tYXRhLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBkaXZBdXRvbWF0YURlZmluaXRpb246IEhUTUxEaXZFbGVtZW50O1xyXG52YXIgZGl2VHJhbnNpdGlvbkhpc3Rvcnk6IEhUTUxEaXZFbGVtZW50O1xyXG52YXIgaW5mb0RpdjogSFRNTERpdkVsZW1lbnQ7XHJcbmV4cG9ydCB2YXIgbWFpblBhZ2U6IEhUTUxEaXZFbGVtZW50O1xyXG5leHBvcnQgdmFyIG1lbnVQYWdlOiBIVE1MRGl2RWxlbWVudDtcclxuZXhwb3J0IHZhciBuZXdBdXRvbWF0YVBhZ2U6IEhUTUxEaXZFbGVtZW50O1xyXG5leHBvcnQgdmFyIHNhdmVkQXV0b21hdGFzUGFnZTogSFRNTERpdkVsZW1lbnQ7XHJcbmV4cG9ydCB2YXIgc2ltdWxhdG9yUGFnZTogSFRNTERpdkVsZW1lbnQ7XHJcbmV4cG9ydCB2YXIgYXV0b21hdGFPdmVydmlld1BhZ2U6IEhUTUxEaXZFbGVtZW50XHJcbmV4cG9ydCB2YXIgbG9hZEF1dG9tYXRhUGFnZTogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG5mdW5jdGlvbiBpbmZvRGl2U3dpdGNoKCk6IHZvaWQge1xyXG4gICAgaW5mb0Rpdi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xyXG4gICAgaW5mb0Rpdi5jbGFzc0xpc3QudG9nZ2xlKFwiYWJzb2x1dGVcIik7XHJcbiAgICBpbmZvRGl2LmNsYXNzTGlzdC50b2dnbGUoXCJ0b3AtMFwiKTtcclxuICAgIGluZm9EaXYuY2xhc3NMaXN0LnRvZ2dsZShcImJvdHRvbS0wXCIpO1xyXG4gICAgaW5mb0Rpdi5jbGFzc0xpc3QudG9nZ2xlKFwibGVmdC0wXCIpO1xyXG4gICAgaW5mb0Rpdi5jbGFzc0xpc3QudG9nZ2xlKFwiLXJpZ2h0LTIwXCIpO1xyXG4gICAgaW5mb0Rpdi5jbGFzc0xpc3QudG9nZ2xlKFwiLXRyYW5zbGF0ZS14LTIwXCIpO1xyXG4gICAgaW5mb0Rpdi5jbGFzc0xpc3QudG9nZ2xlKFwibWQ6LXJpZ2h0LTBcIik7XHJcbiAgICBpbmZvRGl2LmNsYXNzTGlzdC50b2dnbGUoXCJtZDotdHJhbnNsYXRlLXgtMFwiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckV2ZW50cygpOiB2b2lkIHtcclxuICAgIGRpdkF1dG9tYXRhRGVmaW5pdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXV0b21hdGFEZWZpbml0aW9uRGl2XCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgZGl2VHJhbnNpdGlvbkhpc3RvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYW5zaXRpb25IaXN0b3J5RGl2XCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgaW5mb0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mb0RpdlwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIG1haW5QYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluUGFnZVwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIG1lbnVQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51UGFnZVwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIG5ld0F1dG9tYXRhUGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3QXV0b21hdGFQYWdlXCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgc2F2ZWRBdXRvbWF0YXNQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYXZlZEF1dGFtYXRhc1BhZ2VcIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBzaW11bGF0b3JQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaW11bGF0b3JQYWdlXCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgYXV0b21hdGFPdmVydmlld1BhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1dG9tYXRhT3ZlcnZpZXdQYWdlXCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgbG9hZEF1dG9tYXRhUGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZEF1dG9tYXRhUGFnZVwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1dG9tYXRhRGVmaW5pdGlvbkJ1dHRvblwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBkaXZBdXRvbWF0YURlZmluaXRpb24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICBkaXZUcmFuc2l0aW9uSGlzdG9yeS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYW5zaXRpb25IaXN0b3J5QnV0dG9uXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGRpdlRyYW5zaXRpb25IaXN0b3J5LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICBkaXZBdXRvbWF0YURlZmluaXRpb24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG93SW5mb0J1dHRvblwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGluZm9EaXZTd2l0Y2gpO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlkZUluZm9CdXR0b25cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBpbmZvRGl2U3dpdGNoKTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0F1dG9tYXRhQnV0dG9uXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIG1lbnVQYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBuZXdBdXRvbWF0YVBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cGxvYWRBdXRvbWF0YUJ1dHRvblwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBtZW51UGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgbG9hZEF1dG9tYXRhUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNhdmVkQXV0b21hdGFzQnV0dG9uXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIG1lbnVQYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBzYXZlZEF1dG9tYXRhc1BhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYXZlZEF1dG9tYXRhc0JhY2tCdXR0b25cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgbWVudVBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIHNhdmVkQXV0b21hdGFzUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZGVPdmVydmlld0J1dHRvblwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBzYXZlZEF1dG9tYXRhc1BhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIGF1dG9tYXRhT3ZlcnZpZXdQYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlkZUxvYWRCdXR0b25cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgbWVudVBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIGxvYWRBdXRvbWF0YVBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRLZXlJbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZEZpbGVJbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9IFwiXCI7XHJcbiAgICB9KTtcclxufSIsImltcG9ydCB7IElucHV0U3ltYm9sLCBTdGFja1N5bWJvbCwgU3RhdGUsIFRyYW5zaXRpb25GdW5jdGlvbiwgY29tcGFyZUlucHV0U3ltYm9sLCBjb21wYXJlU3RhY2tTeW1ib2wsIGNvbXBhcmVTdGF0ZSwgY29tcGFyZVRyYW5zaXRpb25GdW5jdGlvbiB9IGZyb20gXCIuL3B1c2hkb3duQXV0b21hdGFUeXBlc1wiO1xyXG5pbXBvcnQgeyBVSSB9IGZyb20gXCIuL3VpXCI7XHJcblxyXG50eXBlIGl0ZW1UeXBlID0gU3RhdGUgfCBJbnB1dFN5bWJvbCB8IFN0YWNrU3ltYm9sO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZvcm1BdXRvbWF0YUJ1aWxkZXIge1xyXG4gICAgcHJpdmF0ZSBzdGF0ZXM6IFN0YXRlW11cclxuICAgIHByaXZhdGUgaW5wdXRTeW1ib2xzOiBJbnB1dFN5bWJvbFtdXHJcbiAgICBwcml2YXRlIHN0YWNrU3ltYm9sczogU3RhY2tTeW1ib2xbXVxyXG4gICAgcHJpdmF0ZSBpbml0aWFsU3RhdGU/OiBTdGF0ZTtcclxuICAgIHByaXZhdGUgaW5pdGlhbFN0YWNrU3ltYm9sPzogU3RhY2tTeW1ib2w7XHJcbiAgICBwcml2YXRlIGFjY2VwdGluZ1N0YXRlczogU3RhdGVbXSB8IG51bGxcclxuICAgIHByaXZhdGUgdHJhbnNpdGlvbkZ1bmN0aW9uczogVHJhbnNpdGlvbkZ1bmN0aW9uW11cclxuXHJcbiAgICBwcml2YXRlIHN0YXRlc0RpdjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGlucHV0U3ltYm9sRGl2OiBIVE1MRGl2RWxlbWVudDtcclxuICAgIHByaXZhdGUgc3RhY2tTeW1ib2xEaXY6IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSB0cmFuc2l0aW9uRnVuY3Rpb25EaXY6IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICAgIHByaXZhdGUgaW5pdGlhbFN0YXRlU2VsZWN0OiBIVE1MU2VsZWN0RWxlbWVudDtcclxuICAgIHByaXZhdGUgaW5pdGlhbFN0YWNrU3ltYm9sU2VsZWN0OiBIVE1MU2VsZWN0RWxlbWVudDtcclxuICAgIHByaXZhdGUgYWNjZXB0aW5nU3RhdGVzU2VsZWN0OiBIVE1MU2VsZWN0RWxlbWVudDtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRlRXJyb3I6IEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBpbnB1dFN5bWJvbEVycm9yOiBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICAgIHByaXZhdGUgc3RhY2tTeW1ib2xFcnJvcjogSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGluaXRpYWxTdGF0ZUVycm9yOiBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICAgIHByaXZhdGUgaW5pdGlhbFN0YWNrU3ltYm9sRXJyb3I6IEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBhY2NlcHRpbmdTdGF0ZUVycm9yOiBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICAgIHByaXZhdGUgdHJhbnNpdGlvbkZ1bmN0aW9uRXJyb3I6IEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG5cclxuICAgIHByaXZhdGUga2V5Ym9hcmRTdGF0ZTogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGtleWJvYXJkSW5wdXRTeW1ib2w6IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBrZXlib2FyZFN0YWNrU3ltYm9sOiBIVE1MRGl2RWxlbWVudDtcclxuICAgIHByaXZhdGUga2V5Ym9hcmREZWxldGVCdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xyXG5cclxuICAgIHByaXZhdGUgdHJhbnNpdGlvbkZ1bmN0aW9uUGFydHM6IEhUTUxQYXJhZ3JhcGhFbGVtZW50W107XHJcblxyXG4gICAgcHJpdmF0ZSBhY3RpdmVQYXJ0OiBudW1iZXI7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5zdGF0ZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmlucHV0U3ltYm9scyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc3RhY2tTeW1ib2xzID0gW107XHJcbiAgICAgICAgdGhpcy5hY2NlcHRpbmdTdGF0ZXMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9ucyA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdBdXRvbWF0YVN0YXRlcycpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuaW5wdXRTeW1ib2xEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3QXV0b21hdGFJbnB1dFN5bWJvbHMnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICB0aGlzLnN0YWNrU3ltYm9sRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0F1dG9tYXRhU3RhY2tTeW1ib2xzJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3QXV0b21hdGFUcmFuc3RpdGlvbkZ1bmN0aW9ucycpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICAgICAgICB0aGlzLmluaXRpYWxTdGF0ZVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdBdXRvbWF0YUluaXRpYWxTdGF0ZVNlbGVjdCcpIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbFN0YWNrU3ltYm9sU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0F1dG9tYXRhSW5pdGlhbFN0YWNrU3ltYm9sU2VsZWN0JykgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5hY2NlcHRpbmdTdGF0ZXNTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3QXV0b21hdGFBY2NlcHRpbmdTdGF0ZXNTZWxlY3QnKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZUVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXRlRXJyb3InKSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICAgICAgICB0aGlzLmlucHV0U3ltYm9sRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRTeW1ib2xFcnJvcicpIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuc3RhY2tTeW1ib2xFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFja1N5bWJvbEVycm9yJykgYXMgSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsU3RhdGVFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbml0aWFsU3RhdGVFcnJvcicpIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbFN0YWNrU3ltYm9sRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5pdGlhbFN0YWNrU3ltYm9sRXJyb3InKSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICAgICAgICB0aGlzLmFjY2VwdGluZ1N0YXRlRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWNjZXB0aW5nU3RhdGVFcnJvcicpIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJhbnNpdGlvbkZ1bmN0aW9uRXJyb3InKSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICAgIFxyXG4gICAgICAgIHRoaXMua2V5Ym9hcmRTdGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrZXlib2FyZFN0YXRlJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5rZXlib2FyZElucHV0U3ltYm9sID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2tleWJvYXJkSW5wdXRTeW1ib2wnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICB0aGlzLmtleWJvYXJkU3RhY2tTeW1ib2wgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna2V5Ym9hcmRTdGFja1N5bWJvbCcpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25QYXJ0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydHMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJhbnN0aXRpb25Gcm9tU3RhdGUnKSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25QYXJ0cy5wdXNoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFuc3Rpb25Qb3BTeW1ib2wnKSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25QYXJ0cy5wdXNoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFuc2l0aW9uU3ltYm9sJykgYXMgSFRNTFBhcmFncmFwaEVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydHMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJhbnNpdGlvblRvU3RhdGUnKSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25QYXJ0cy5wdXNoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFuc2l0aW9uUHVzaFN5bWJvbHMnKSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudCk7XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZlUGFydCA9IC0xO1xyXG5cclxuICAgICAgICB0aGlzLmtleWJvYXJkSW5wdXRTeW1ib2wuYXBwZW5kKHRoaXMuY3JlYXRlS2V5Ym9hcmRCdXR0b24oe2lzRXBzeWxvbjogdHJ1ZX0sIDEpKTtcclxuICAgICAgICB0aGlzLmtleWJvYXJkRGVsZXRlQnV0dG9uID0gdGhpcy5jcmVhdGVLZXlib2FyZEJ1dHRvbih7dmFsdWU6ICfihpAnfSwgMyk7XHJcbiAgICAgICAgdGhpcy5rZXlib2FyZERlbGV0ZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgdGhpcy5rZXlib2FyZFN0YWNrU3ltYm9sLmFwcGVuZCh0aGlzLmtleWJvYXJkRGVsZXRlQnV0dG9uKTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckV2ZW50cygpe1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdBdXRvbWF0YVN0YXRlRm9ybScpPy5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLnN0YXRlRm9ybVN1Ym1pdEhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0F1dG9tYXRhSW5wdXRTeW1ib2xGb3JtJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuaW5wdXRTeW1ib2xTdWJtaXRIYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdBdXRvbWF0YVN0YWNrU3ltYm9sRm9ybScpPy5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLnN0YWNrU3ltYm9sU3VibWl0SGFuZGxlci5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxTdGF0ZVNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmluaXRpYWxTdGF0ZUNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsU3RhY2tTeW1ib2xTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5pbml0aWFsU3RhY2tTeW1ib2xDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY2NlcHRhbmNlRW1wdHlTdGFja0NoZWNrQm94Jyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hY2NlcHRpbmdTdGF0ZUVtcHR5Q2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLmFjY2VwdGluZ1N0YXRlc1NlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmFjY2VwdGluZ1N0YXRlc0NoYW5nZUhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUcmFuc2l0aW9uRnVuY3Rpb25cIik/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25BZGRIYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydHNbMF0/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBFdmVudCkgPT4ge3RoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydENoYW5nZUhhbmRsZXIoZXZlbnQsIDApfSk7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25QYXJ0c1sxXT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IEV2ZW50KSA9PiB7dGhpcy50cmFuc2l0aW9uRnVuY3Rpb25QYXJ0Q2hhbmdlSGFuZGxlcihldmVudCwgMSl9KTtcclxuICAgICAgICB0aGlzLnRyYW5zaXRpb25GdW5jdGlvblBhcnRzWzJdPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogRXZlbnQpID0+IHt0aGlzLnRyYW5zaXRpb25GdW5jdGlvblBhcnRDaGFuZ2VIYW5kbGVyKGV2ZW50LCAyKX0pO1xyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydHNbM10/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBFdmVudCkgPT4ge3RoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydENoYW5nZUhhbmRsZXIoZXZlbnQsIDMpfSk7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25QYXJ0c1s0XT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IEV2ZW50KSA9PiB7dGhpcy50cmFuc2l0aW9uRnVuY3Rpb25QYXJ0Q2hhbmdlSGFuZGxlcihldmVudCwgNCl9KTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVHJhbnNpdGlvbkZ1bmN0aW9uQnV0dG9uJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25BZGRIYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KCl7XHJcbiAgICAgICAgLy9kaXZzXHJcbiAgICAgICAgdGhpcy5zdGF0ZXNEaXYuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgdGhpcy5pbnB1dFN5bWJvbERpdi5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB0aGlzLnN0YWNrU3ltYm9sRGl2LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uRGl2LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIC8vaW5wdXRzXHJcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0ZUlucHV0JykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPSAnJztcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0U3ltYm9sSW5wdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9ICcnO1xyXG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhY2tTeW1ib2xJbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID0gJyc7XHJcbiAgICAgICAgLy9zZWxlY3RzXHJcbiAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgIG9wdGlvbi52YWx1ZSA9ICcnO1xyXG4gICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSAnQ2hvb3NlIGluaXRpYWwgc3RhdGUgLi4uJztcclxuICAgICAgICBvcHRpb24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgb3B0aW9uLmhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsU3RhdGVTZWxlY3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsU3RhdGVTZWxlY3QuYXBwZW5kKG9wdGlvbik7XHJcbiAgICAgICAgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gJyc7XHJcbiAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9ICdDaG9vc2UgaW5pdGlhbCBzdGFjayBzeW1ib2wuLi4nO1xyXG4gICAgICAgIG9wdGlvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICBvcHRpb24uaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmluaXRpYWxTdGFja1N5bWJvbFNlbGVjdC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB0aGlzLmluaXRpYWxTdGFja1N5bWJvbFNlbGVjdC5hcHBlbmQob3B0aW9uKTtcclxuICAgICAgICB0aGlzLmFjY2VwdGluZ1N0YXRlc1NlbGVjdC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB0aGlzLmFjY2VwdGluZ1N0YXRlc1NlbGVjdC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgLy9jaGVja2JveFxyXG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWNjZXB0YW5jZUVtcHR5U3RhY2tDaGVja0JveCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIC8va2V5Ym9hcmRcclxuICAgICAgICB0aGlzLmtleWJvYXJkU3RhdGUuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgdGhpcy5rZXlib2FyZElucHV0U3ltYm9sLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHRoaXMua2V5Ym9hcmRJbnB1dFN5bWJvbC5hcHBlbmQodGhpcy5jcmVhdGVLZXlib2FyZEJ1dHRvbih7aXNFcHN5bG9uOiB0cnVlfSwgMSkpO1xyXG4gICAgICAgIHRoaXMua2V5Ym9hcmRTdGFja1N5bWJvbC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB0aGlzLmtleWJvYXJkU3RhY2tTeW1ib2wuYXBwZW5kKHRoaXMua2V5Ym9hcmREZWxldGVCdXR0b24pO1xyXG4gICAgICAgIHRoaXMua2V5Ym9hcmREZWxldGVCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIC8vZXJyb3JzXHJcbiAgICAgICAgdGhpcy5zdGF0ZUVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgdGhpcy5zdGFja1N5bWJvbEVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgdGhpcy5pbnB1dFN5bWJvbEVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsU3RhdGVFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHRoaXMuYWNjZXB0aW5nU3RhdGVFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbFN0YXRlRXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB0aGlzLmluaXRpYWxTdGFja1N5bWJvbEVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25FcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIC8vVE9ETzogQ2xlYXIgdHJhbnNpdGlvbiBmdW5jdGlvblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRlRm9ybVN1Ym1pdEhhbmRsZXIoZXZlbnQ6IFN1Ym1pdEV2ZW50KXtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBmb3JtID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxGb3JtRWxlbWVudDtcclxuICAgICAgICBsZXQgaW5wdXRGaWVsZCA9IGZvcm0uZWxlbWVudHMubmFtZWRJdGVtKCdzdGF0ZUlucHV0JykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICBsZXQgaW5wdXRWYWx1ZSA9IGlucHV0RmllbGQudmFsdWU7XHJcbiAgICAgICAgaW5wdXRGaWVsZC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGxldCBpdGVtOiBTdGF0ZSA9IHtcclxuICAgICAgICAgICAgdmFsdWU6IGlucHV0VmFsdWUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm5ld0l0ZW08U3RhdGU+KGNvbXBhcmVTdGF0ZSwgaXRlbSwgJ1N0YXRlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXRTeW1ib2xTdWJtaXRIYW5kbGVyKGV2ZW50OiBTdWJtaXRFdmVudCl7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgZm9ybSA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRm9ybUVsZW1lbnQ7XHJcbiAgICAgICAgbGV0IGlucHV0RmllbGQgPSBmb3JtLmVsZW1lbnRzLm5hbWVkSXRlbSgnaW5wdXRTeW1ib2xJbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgbGV0IGlucHV0VmFsdWUgPSBpbnB1dEZpZWxkLnZhbHVlO1xyXG4gICAgICAgIGlucHV0RmllbGQudmFsdWUgPSAnJztcclxuICAgICAgICBsZXQgaXRlbTogSW5wdXRTeW1ib2wgPSB7XHJcbiAgICAgICAgICAgIGlzRXBzeWxvbjogZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbHVlOiBpbnB1dFZhbHVlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5uZXdJdGVtPElucHV0U3ltYm9sPihjb21wYXJlSW5wdXRTeW1ib2wsIGl0ZW0sICdJbnB1dFN5bWJvbCcpO1xyXG4gICAgfTtcclxuXHJcbiAgICBzdGFja1N5bWJvbFN1Ym1pdEhhbmRsZXIoZXZlbnQ6IFN1Ym1pdEV2ZW50KXtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBmb3JtID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxGb3JtRWxlbWVudDtcclxuICAgICAgICBsZXQgaW5wdXRGaWVsZCA9IGZvcm0uZWxlbWVudHMubmFtZWRJdGVtKCdzdGFja1N5bWJvbElucHV0JykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICBsZXQgaW5wdXRWYWx1ZSA9IGlucHV0RmllbGQudmFsdWU7XHJcbiAgICAgICAgaW5wdXRGaWVsZC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGxldCBpdGVtOiBTdGFja1N5bWJvbCA9IHtcclxuICAgICAgICAgICAgdmFsdWU6IGlucHV0VmFsdWUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm5ld0l0ZW08U3RhY2tTeW1ib2w+KGNvbXBhcmVTdGFja1N5bWJvbCwgaXRlbSwgJ1N0YWNrU3ltYm9sJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGluaXRpYWxTdGF0ZUNoYW5nZUhhbmRsZXIoZXZlbnQ6IEV2ZW50KXtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBzZWxlY3QgPSBldmVudC50YXJnZXQgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkT3B0aW9uID0gc2VsZWN0Lm9wdGlvbnNbc2VsZWN0LnNlbGVjdGVkSW5kZXhdO1xyXG4gICAgICAgIGlmKHNlbGVjdGVkT3B0aW9uLnZhbHVlID09PSAnJyl7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFN0YXRlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBzZWxlY3RlZE9wdGlvbi52YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFN0YXRlID0gaXRlbTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGluaXRpYWxTdGFja1N5bWJvbENoYW5nZUhhbmRsZXIoZXZlbnQ6IEV2ZW50KXtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBzZWxlY3QgPSBldmVudC50YXJnZXQgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkT3B0aW9uID0gc2VsZWN0Lm9wdGlvbnNbc2VsZWN0LnNlbGVjdGVkSW5kZXhdO1xyXG4gICAgICAgIGlmKHNlbGVjdGVkT3B0aW9uLnZhbHVlID09PSAnJyl7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFN0YWNrU3ltYm9sID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBzZWxlY3RlZE9wdGlvbi52YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFN0YWNrU3ltYm9sID0gaXRlbTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGFjY2VwdGluZ1N0YXRlRW1wdHlDaGFuZ2VIYW5kbGVyKGV2ZW50OiBFdmVudCl7XHJcbiAgICAgICAgbGV0IGNoZWNrYm94ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgaWYoY2hlY2tib3guY2hlY2tlZCl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgYSBvZiB0aGlzLnN0YXRlcyl7XHJcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5hY2NlcHRpbmdTdGF0ZXNTZWxlY3Qub3B0aW9ucy5uYW1lZEl0ZW0oXCJhY2NlcHRpbmdTdGF0ZU9wdGlvblwiICsgYS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZihvcHRpb24pe1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYWNjZXB0aW5nU3RhdGVzID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5hY2NlcHRpbmdTdGF0ZXNTZWxlY3QuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLmFjY2VwdGluZ1N0YXRlcyA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmFjY2VwdGluZ1N0YXRlc1NlbGVjdC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgYWNjZXB0aW5nU3RhdGVzQ2hhbmdlSGFuZGxlcihldmVudDogRXZlbnQpe1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5hY2NlcHRpbmdTdGF0ZXMgPSBbXTtcclxuICAgICAgICBmb3IobGV0IGEgb2YgdGhpcy5zdGF0ZXMpe1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5hY2NlcHRpbmdTdGF0ZXNTZWxlY3Qub3B0aW9ucy5uYW1lZEl0ZW0oXCJhY2NlcHRpbmdTdGF0ZU9wdGlvblwiICsgYS52YWx1ZSk7XHJcbiAgICAgICAgICAgIGlmKG9wdGlvbil7XHJcbiAgICAgICAgICAgICAgICBpZihvcHRpb24uc2VsZWN0ZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWNjZXB0aW5nU3RhdGVzPy5wdXNoKGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYWNjZXB0aW5nU3RhdGVzKTtcclxuICAgIH07XHJcblxyXG4gICAgdHJhbnNpdGlvbkZ1bmN0aW9uQWRkSGFuZGxlcihldmVudDogRXZlbnQpe1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDQ7IGkrKyl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydHNbaV0uaW5uZXJUZXh0ID09PSAnJyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25GdW5jdGlvbkVycm9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25FcnJvci5pbm5lclRleHQgPSAnRXJyb3I6IEFsbCBmaWVsZHMgbXVzdCBiZSBmaWxsZWQnO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBmcm9tU3RhdGUgPSB7dmFsdWU6IHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydHNbMF0uaW5uZXJUZXh0fTtcclxuICAgICAgICBsZXQgc3RhcnRTeW1ib2wgPSB7dmFsdWU6IHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydHNbMV0uaW5uZXJUZXh0fTtcclxuICAgICAgICBsZXQgaW5wdXRTeW1ib2wgPSB0aGlzLnRyYW5zaXRpb25GdW5jdGlvblBhcnRzWzJdLmlubmVyVGV4dCA9PT0gJ861JyA/IHtpc0Vwc3lsb246IHRydWV9IDoge2lzRXBzeWxvbjogZmFsc2UsIHZhbHVlOiB0aGlzLnRyYW5zaXRpb25GdW5jdGlvblBhcnRzWzJdLmlubmVyVGV4dH07XHJcbiAgICAgICAgbGV0IHRvU3RhdGUgPSB7dmFsdWU6IHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydHNbM10uaW5uZXJUZXh0fTtcclxuICAgICAgICBsZXQgcHVzaGVkU3ltYm9scyA9IHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydHNbNF0uaW5uZXJIVE1MLnNwbGl0KCcnKS5tYXAoKHMpID0+IHtyZXR1cm4ge3ZhbHVlOiBzfX0pO1xyXG4gICAgICAgIGxldCBpdGVtOiBUcmFuc2l0aW9uRnVuY3Rpb24gPSB7XHJcbiAgICAgICAgICAgIGZyb21TdGF0ZTogZnJvbVN0YXRlLFxyXG4gICAgICAgICAgICBzdGFydFN5bWJvbDogc3RhcnRTeW1ib2wsXHJcbiAgICAgICAgICAgIGlucHV0U3ltYm9sOiBpbnB1dFN5bWJvbCxcclxuICAgICAgICAgICAgdG9TdGF0ZTogdG9TdGF0ZSxcclxuICAgICAgICAgICAgcHVzaGVkU3ltYm9sczogcHVzaGVkU3ltYm9scyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvcihsZXQgdCBvZiB0aGlzLnRyYW5zaXRpb25GdW5jdGlvbnMpe1xyXG4gICAgICAgICAgICBpZihjb21wYXJlVHJhbnNpdGlvbkZ1bmN0aW9uKHQsIGl0ZW0pKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uRXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25EaXYuYXBwZW5kKHRoaXMuY3JlYXRlVHJhbnNpdGlvbkZ1bmN0aW9uRGl2KGl0ZW0pKTtcclxuICAgICAgICB0aGlzLnRyYW5zaXRpb25GdW5jdGlvbkVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlVHJhbnNpdGlvbkZ1bmN0aW9uRGl2KGl0ZW06IFRyYW5zaXRpb25GdW5jdGlvbik6IEhUTUxEaXZFbGVtZW50e1xyXG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZmxleCcsICdwLTInLCAnYmctc2xhdGUtMTAwJywgJ3JvdW5kZWQnLCAnbS0yJywgJ2ZsZXgtcm93JywgJ2p1c3RpZnktY2VudGVyJywgJ2l0ZW1zLWNlbnRlcicpO1xyXG4gICAgICAgIGxldCB0ID0gVUkuZ2VuZXJhdGVUcmFuc2l0aW9uRnVuY3Rpb24oaXRlbSk7XHJcbiAgICAgICAgZGl2LmFwcGVuZCh0KTtcclxuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3JvdW5kZWQtZnVsbCcsICdiZy1zbGF0ZS0zMDAnLCAndy02JywgJ2gtNicsICdtbC0yJyk7XHJcbiAgICAgICAgYnV0dG9uLmlubmVyVGV4dCA9ICdYJztcclxuICAgICAgICBkaXYuYXBwZW5kKGJ1dHRvbik7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kZWxldGVUcmFuc2l0aW9uRnVuY3Rpb24uYmluZCh0aGlzLCBpdGVtLCBkaXYpKTtcclxuICAgICAgICByZXR1cm4gZGl2O1xyXG4gICAgfVxyXG5cclxuICAgIG5ld0l0ZW08VCBleHRlbmRzIGl0ZW1UeXBlPihjb21wYXJlRnVuY3Rpb246IChhcmcxOiBULCBhcmcyOiBUKSA9PiBib29sZWFuLCBpdGVtOiBULCB0eXBlOiBzdHJpbmcpOiB2b2lke1xyXG4gICAgICAgIGxldCBhcnIgOiBUW107XHJcbiAgICAgICAgbGV0IGVycm9yOiBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICAgICAgICBsZXQgZXJyb3JNc2c6IHN0cmluZztcclxuICAgICAgICBpZih0eXBlID09PSAnU3RhdGUnKXtcclxuICAgICAgICAgICAgYXJyID0gdGhpcy5zdGF0ZXMgYXMgVFtdO1xyXG4gICAgICAgICAgICBlcnJvciA9IHRoaXMuc3RhdGVFcnJvcjtcclxuICAgICAgICAgICAgZXJyb3JNc2cgPSAnRXJyb3I6IFN0YXRlIGFscmVhZHkgZXhpc3RzJztcclxuICAgICAgICB9IGVsc2UgaWYodHlwZSA9PT0gJ0lucHV0U3ltYm9sJyl7XHJcbiAgICAgICAgICAgIGFyciA9IHRoaXMuaW5wdXRTeW1ib2xzIGFzIFRbXTtcclxuICAgICAgICAgICAgZXJyb3IgPSB0aGlzLmlucHV0U3ltYm9sRXJyb3I7XHJcbiAgICAgICAgICAgIGVycm9yTXNnID0gJ0Vycm9yOiBJbnB1dCBzeW1ib2wgYWxyZWFkeSBleGlzdHMnO1xyXG4gICAgICAgIH0gZWxzZSBpZih0eXBlID09PSAnU3RhY2tTeW1ib2wnKXtcclxuICAgICAgICAgICAgYXJyID0gdGhpcy5zdGFja1N5bWJvbHMgYXMgVFtdO1xyXG4gICAgICAgICAgICBlcnJvciA9IHRoaXMuc3RhY2tTeW1ib2xFcnJvcjtcclxuICAgICAgICAgICAgZXJyb3JNc2cgPSAnRXJyb3I6IFN0YWNrIHN5bWJvbCBhbHJlYWR5IGV4aXN0cyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBleGlzdHMgPSBmYWxzZTtcclxuICAgICAgICBmb3IobGV0IGkgb2YgYXJyKXtcclxuICAgICAgICAgICAgaWYoY29tcGFyZUZ1bmN0aW9uKGksIGl0ZW0pKXtcclxuICAgICAgICAgICAgICAgIGV4aXN0cyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZighZXhpc3RzKXtcclxuICAgICAgICAgICAgYXJyLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2ZsZXgnLCAncC0yJywgJ2JnLXNsYXRlLTEwMCcsICdyb3VuZGVkJywgJ20tMicpO1xyXG4gICAgICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgcC5jbGFzc0xpc3QuYWRkKCdwci0yJyk7XHJcbiAgICAgICAgICAgIHAuaW5uZXJUZXh0ID0gaXRlbS52YWx1ZSA/PyAnzrUnO1xyXG4gICAgICAgICAgICBkaXYuYXBwZW5kKHApO1xyXG4gICAgICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyb3VuZGVkLWZ1bGwnLCAnYmctc2xhdGUtMzAwJywgJ3ctNicsICdoLTYnKTtcclxuICAgICAgICAgICAgYnV0dG9uLmlubmVyVGV4dCA9ICdYJztcclxuICAgICAgICAgICAgZGl2LmFwcGVuZChidXR0b24pO1xyXG4gICAgICAgICAgICBpZih0eXBlID09PSAnU3RhdGUnKXtcclxuICAgICAgICAgICAgICAgIGxldCBrZXlib2FyZEJ1dHRvbiA9IHRoaXMuY3JlYXRlS2V5Ym9hcmRCdXR0b24oaXRlbSwwKTtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZGVsZXRlU3RhdGUuYmluZCh0aGlzLCBpdGVtLCBkaXYsIGtleWJvYXJkQnV0dG9uKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlc0Rpdi5hcHBlbmQoZGl2KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVBZGRlZChpdGVtIGFzIFN0YXRlLCBrZXlib2FyZEJ1dHRvbik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZih0eXBlID09PSAnSW5wdXRTeW1ib2wnKXtcclxuICAgICAgICAgICAgICAgIGxldCBrZXlib2FyZEJ1dHRvbiA9IHRoaXMuY3JlYXRlS2V5Ym9hcmRCdXR0b24oaXRlbSwxKTtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZGVsZXRlSW5wdXRTeW1ib2wuYmluZCh0aGlzLCBpdGVtLCBkaXYsIGtleWJvYXJkQnV0dG9uKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0U3ltYm9sRGl2LmFwcGVuZChkaXYpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dFN5bWJvbEFkZGVkKGl0ZW0gYXMgSW5wdXRTeW1ib2wsIGtleWJvYXJkQnV0dG9uKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHR5cGUgPT09ICdTdGFja1N5bWJvbCcpe1xyXG4gICAgICAgICAgICAgICAgbGV0IGtleWJvYXJkQnV0dG9uID0gdGhpcy5jcmVhdGVLZXlib2FyZEJ1dHRvbihpdGVtLDIpO1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kZWxldGVTdGFja1N5bWJvbC5iaW5kKHRoaXMsIGl0ZW0sIGRpdiwga2V5Ym9hcmRCdXR0b24pKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhY2tTeW1ib2xEaXYuYXBwZW5kKGRpdik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YWNrU3ltYm9sQWRkZWQoaXRlbSBhcyBTdGFja1N5bWJvbCwga2V5Ym9hcmRCdXR0b24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGVycm9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICBlcnJvci5pbm5lclRleHQgPSBlcnJvck1zZztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlU3RhdGUoaXRlbTogU3RhdGUsIGRpdjogSFRNTERpdkVsZW1lbnQsIGtleWJvYXJkQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCl7XHJcbiAgICAgICAgdGhpcy5zdGF0ZXNEaXYucmVtb3ZlQ2hpbGQoZGl2KTtcclxuICAgICAgICB0aGlzLnN0YXRlcy5zcGxpY2UodGhpcy5zdGF0ZXMuaW5kZXhPZihpdGVtKSwgMSk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZURlbGV0ZWQoaXRlbSk7XHJcbiAgICAgICAga2V5Ym9hcmRCdXR0b24ucmVtb3ZlKCk7XHJcbiAgICAgICAgLy9UT0RPOiBDbGVhciBkaXZcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVJbnB1dFN5bWJvbChpdGVtOiBJbnB1dFN5bWJvbCwgZGl2OiBIVE1MRGl2RWxlbWVudCwga2V5Ym9hcmRCdXR0b246IEhUTUxCdXR0b25FbGVtZW50KXtcclxuICAgICAgICB0aGlzLmlucHV0U3ltYm9sRGl2LnJlbW92ZUNoaWxkKGRpdik7XHJcbiAgICAgICAgdGhpcy5pbnB1dFN5bWJvbHMuc3BsaWNlKHRoaXMuaW5wdXRTeW1ib2xzLmluZGV4T2YoaXRlbSksIDEpO1xyXG4gICAgICAgIHRoaXMuaW5wdXRTeW1ib2xEZWxldGVkKGl0ZW0pO1xyXG4gICAgICAgIGtleWJvYXJkQnV0dG9uLnJlbW92ZSgpO1xyXG4gICAgICAgIC8vVE9ETzogQ2xlYXIgZGl2XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlU3RhY2tTeW1ib2woaXRlbTogU3RhY2tTeW1ib2wsIGRpdjogSFRNTERpdkVsZW1lbnQsIGtleWJvYXJkQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCl7XHJcbiAgICAgICAgdGhpcy5zdGFja1N5bWJvbERpdi5yZW1vdmVDaGlsZChkaXYpO1xyXG4gICAgICAgIHRoaXMuc3RhY2tTeW1ib2xzLnNwbGljZSh0aGlzLnN0YWNrU3ltYm9scy5pbmRleE9mKGl0ZW0pLCAxKTtcclxuICAgICAgICB0aGlzLnN0YWNrU3ltYm9sRGVsZXRlZChpdGVtKTtcclxuICAgICAgICBrZXlib2FyZEJ1dHRvbi5yZW1vdmUoKTtcclxuICAgICAgICAvL1RPRE86IENsZWFyIGRpdlxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVRyYW5zaXRpb25GdW5jdGlvbihpdGVtOiBUcmFuc2l0aW9uRnVuY3Rpb24sIGRpdjogSFRNTERpdkVsZW1lbnQpe1xyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uRGl2LnJlbW92ZUNoaWxkKGRpdik7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25zLnNwbGljZSh0aGlzLnRyYW5zaXRpb25GdW5jdGlvbnMuaW5kZXhPZihpdGVtKSwgMSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRlQWRkZWQoaXRlbTogU3RhdGUsIGtleWJvYXJkQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCl7XHJcbiAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IGl0ZW0udmFsdWU7XHJcbiAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IGl0ZW0udmFsdWU7XHJcbiAgICAgICAgb3B0aW9uLmlkID0gXCJpbml0aWFsU3RhdGVPcHRpb25cIiArIGl0ZW0udmFsdWU7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsU3RhdGVTZWxlY3QuYXBwZW5kKG9wdGlvbik7XHJcblxyXG4gICAgICAgIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IGl0ZW0udmFsdWU7XHJcbiAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IGl0ZW0udmFsdWU7XHJcbiAgICAgICAgb3B0aW9uLmlkID0gXCJhY2NlcHRpbmdTdGF0ZU9wdGlvblwiICsgaXRlbS52YWx1ZTtcclxuICAgICAgICB0aGlzLmFjY2VwdGluZ1N0YXRlc1NlbGVjdC5hcHBlbmQob3B0aW9uKTtcclxuXHJcbiAgICAgICAgdGhpcy5rZXlib2FyZFN0YXRlLmFwcGVuZChrZXlib2FyZEJ1dHRvbik7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBpbnB1dFN5bWJvbEFkZGVkKGl0ZW06IElucHV0U3ltYm9sLCBrZXlib2FyZEJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQpe1xyXG4gICAgICAgIHRoaXMua2V5Ym9hcmRJbnB1dFN5bWJvbC5hcHBlbmQoa2V5Ym9hcmRCdXR0b24pO1xyXG4gICAgfTtcclxuXHJcbiAgICBzdGFja1N5bWJvbEFkZGVkKGl0ZW06IFN0YWNrU3ltYm9sLCBrZXlib2FyZEJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQpe1xyXG4gICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICBvcHRpb24udmFsdWUgPSBpdGVtLnZhbHVlO1xyXG4gICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBpdGVtLnZhbHVlO1xyXG4gICAgICAgIG9wdGlvbi5pZCA9IFwic3RhY2tTeW1ib2xPcHRpb25cIiArIGl0ZW0udmFsdWU7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsU3RhY2tTeW1ib2xTZWxlY3QuYXBwZW5kKG9wdGlvbik7XHJcblxyXG4gICAgICAgIHRoaXMua2V5Ym9hcmRTdGFja1N5bWJvbC5hcHBlbmQoa2V5Ym9hcmRCdXR0b24pO1xyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0ZURlbGV0ZWQoaXRlbTogU3RhdGUpe1xyXG4gICAgICAgIGxldCBvcHRpb24gPSB0aGlzLmluaXRpYWxTdGF0ZVNlbGVjdC5vcHRpb25zLm5hbWVkSXRlbShcImluaXRpYWxTdGF0ZU9wdGlvblwiICsgaXRlbS52YWx1ZSlcclxuICAgICAgICBpZihvcHRpb24gJiYgb3B0aW9uLnNlbGVjdGVkKXtcclxuICAgICAgICAgICAgb3B0aW9uLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxTdGF0ZVNlbGVjdC5vcHRpb25zWzBdLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG9wdGlvbjIgPSB0aGlzLmFjY2VwdGluZ1N0YXRlc1NlbGVjdC5vcHRpb25zLm5hbWVkSXRlbShcImFjY2VwdGluZ1N0YXRlT3B0aW9uXCIgKyBpdGVtLnZhbHVlKVxyXG4gICAgICAgIGlmKG9wdGlvbjIgJiYgb3B0aW9uMi5zZWxlY3RlZCl7XHJcbiAgICAgICAgICAgIG9wdGlvbjIucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydHNbMF0uaW5uZXJUZXh0ID09PSBpdGVtLnZhbHVlKXtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25QYXJ0c1swXS5pbm5lclRleHQgPSAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy50cmFuc2l0aW9uRnVuY3Rpb25QYXJ0c1szXS5pbm5lclRleHQgPT09IGl0ZW0udmFsdWUpe1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25GdW5jdGlvblBhcnRzWzNdLmlubmVyVGV4dCA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1RPRE86IENoZWNrIGFscmVhZHkgZGVmaW5lZCB0cmFuc2l0aW9uIGZ1bmN0aW9uc1xyXG4gICAgfTtcclxuXHJcbiAgICBpbnB1dFN5bWJvbERlbGV0ZWQoaXRlbTogSW5wdXRTeW1ib2wpe1xyXG4gICAgICAgIGlmKHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydHNbMl0uaW5uZXJUZXh0ID09PSBpdGVtLnZhbHVlKXtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25QYXJ0c1syXS5pbm5lclRleHQgPSAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9UT0RPOiBDaGVjayBhbHJlYWR5IGRlZmluZWQgdHJhbnNpdGlvbiBmdW5jdGlvbnNcclxuICAgIH07XHJcblxyXG4gICAgc3RhY2tTeW1ib2xEZWxldGVkKGl0ZW06IFN0YWNrU3ltYm9sKXtcclxuICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5pbml0aWFsU3RhdGVTZWxlY3Qub3B0aW9ucy5uYW1lZEl0ZW0oXCJzdGFja1N5bWJvbE9wdGlvblwiICsgaXRlbS52YWx1ZSlcclxuICAgICAgICBpZihvcHRpb24gJiYgb3B0aW9uLnNlbGVjdGVkKXtcclxuICAgICAgICAgICAgb3B0aW9uLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnRyYW5zaXRpb25GdW5jdGlvblBhcnRzWzFdLmlubmVyVGV4dCA9PT0gaXRlbS52YWx1ZSl7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydHNbMV0uaW5uZXJUZXh0ID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydHNbNF0uaW5uZXJUZXh0LmluY2x1ZGVzKGl0ZW0udmFsdWUpKXtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25QYXJ0c1s0XS5pbm5lclRleHQgPSAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9UT0RPOiBDaGVjayBhbHJlYWR5IGRlZmluZWQgdHJhbnNpdGlvbiBmdW5jdGlvbnNcclxuICAgIH07XHJcblxyXG4gICAgY3JlYXRlS2V5Ym9hcmRCdXR0b24oaXRlbTogaXRlbVR5cGUsIHR5cGU6IG51bWJlcik6IEhUTUxCdXR0b25FbGVtZW50e1xyXG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZmxleCcsICdqdXN0aWZ5LWNlbnRlcicsICdpdGVtcy1jZW50ZXInLCAncHgtMicsICdoLTgnLCAnYmctc2xhdGUtMTAwJywgJ20tMScpO1xyXG4gICAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSBpdGVtLnZhbHVlID8/ICfOtSc7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBTdWJtaXRFdmVudCkgPT4gdGhpcy5rZXlib2FyZEJ1dHRvblByZXNzZWQoZXZlbnQsIHR5cGUpKTtcclxuICAgICAgICByZXR1cm4gYnV0dG9uO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBrZXlib2FyZEJ1dHRvblByZXNzZWQoZXZlbnQ6IEV2ZW50LCB0eXBlOiBudW1iZXIpe1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codHlwZSwgdGhpcy5hY3RpdmVQYXJ0KTtcclxuICAgICAgICBzd2l0Y2godHlwZSl7XHJcbiAgICAgICAgICAgIC8vU3RhdGVcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5hY3RpdmVQYXJ0ID09PSAwIHx8IHRoaXMuYWN0aXZlUGFydCA9PT0gMyl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldCBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5wdXRGaWVsZCA9IHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydHNbdGhpcy5hY3RpdmVQYXJ0XSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dEZpZWxkLmlubmVyVGV4dCA9IGJ1dHRvbi5pbm5lclRleHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIC8vSW5wdXQgU3ltYm9sXHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuYWN0aXZlUGFydCA9PT0gMil7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldCBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5wdXRGaWVsZCA9IHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydHNbdGhpcy5hY3RpdmVQYXJ0XSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dEZpZWxkLmlubmVyVGV4dCA9IGJ1dHRvbi5pbm5lclRleHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIC8vU3RhY2sgU3ltYm9sXHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuYWN0aXZlUGFydCA9PT0gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldCBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5wdXRGaWVsZCA9IHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydHNbdGhpcy5hY3RpdmVQYXJ0XSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dEZpZWxkLmlubmVyVGV4dCA9IGJ1dHRvbi5pbm5lclRleHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKHRoaXMuYWN0aXZlUGFydCA9PT0gNCl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldCBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5wdXRGaWVsZCA9IHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydHNbdGhpcy5hY3RpdmVQYXJ0XSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dEZpZWxkLmlubmVyVGV4dCArPSBidXR0b24uaW5uZXJUZXh0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmFjdGl2ZVBhcnQgPT09IDQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbnB1dEZpZWxkID0gdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25QYXJ0c1t0aGlzLmFjdGl2ZVBhcnRdIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0RmllbGQuaW5uZXJIVE1MID0gaW5wdXRGaWVsZC5pbm5lclRleHQuc2xpY2UoMCwtMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB0cmFuc2l0aW9uRnVuY3Rpb25QYXJ0Q2hhbmdlSGFuZGxlcihldmVudDogRXZlbnQsIGluZGV4OiBudW1iZXIpe1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYodGhpcy5hY3RpdmVQYXJ0ICYmIHRoaXMuYWN0aXZlUGFydCA9PSBpbmRleCl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuYWN0aXZlUGFydCA+PSAwKXtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25QYXJ0c1t0aGlzLmFjdGl2ZVBhcnRdLmNsYXNzTGlzdC5yZW1vdmUoJ2JnLXNsYXRlLTMwMCcpO1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25GdW5jdGlvblBhcnRzW3RoaXMuYWN0aXZlUGFydF0uY2xhc3NMaXN0LmFkZCgnYmctc2xhdGUtMTAwJyk7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmFjdGl2ZVBhcnQgPT09IDAgfHwgdGhpcy5hY3RpdmVQYXJ0ID09PSAzKXtcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5Ym9hcmRTdGF0ZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy5hY3RpdmVQYXJ0ID09PSAxIHx8IHRoaXMuYWN0aXZlUGFydCA9PT0gNCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleWJvYXJkU3RhY2tTeW1ib2wuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5Ym9hcmRJbnB1dFN5bWJvbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmFjdGl2ZVBhcnQgPSBpbmRleDtcclxuXHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb25QYXJ0c1t0aGlzLmFjdGl2ZVBhcnRdLmNsYXNzTGlzdC5yZW1vdmUoJ2JnLXNsYXRlLTEwMCcpO1xyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uUGFydHNbdGhpcy5hY3RpdmVQYXJ0XS5jbGFzc0xpc3QuYWRkKCdiZy1zbGF0ZS0zMDAnKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5hY3RpdmVQYXJ0ID09PSA0KXtcclxuICAgICAgICAgICAgdGhpcy5rZXlib2FyZERlbGV0ZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLmtleWJvYXJkRGVsZXRlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuYWN0aXZlUGFydCA9PT0gMCB8fCB0aGlzLmFjdGl2ZVBhcnQgPT09IDMpe1xyXG4gICAgICAgICAgICB0aGlzLmtleWJvYXJkU3RhdGUuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLmFjdGl2ZVBhcnQgPT09IDEgfHwgdGhpcy5hY3RpdmVQYXJ0ID09PSA0KXtcclxuICAgICAgICAgICAgdGhpcy5rZXlib2FyZFN0YWNrU3ltYm9sLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmtleWJvYXJkSW5wdXRTeW1ib2wuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTdGF0ZSwgSW5wdXRTeW1ib2wsIFN0YWNrU3ltYm9sLCBUcmFuc2l0aW9uRnVuY3Rpb24gfSBmcm9tIFwiLi9wdXNoZG93bkF1dG9tYXRhVHlwZXNcIjtcclxuaW1wb3J0IHsgY29tcGFyZVN0YXRlLCBjb21wYXJlSW5wdXRTeW1ib2wsIGNvbXBhcmVTdGFja1N5bWJvbCB9IGZyb20gXCIuL3B1c2hkb3duQXV0b21hdGFUeXBlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFB1c2hkb3duQXV0b21hdGF7XHJcbiAgICBzdGF0ZXM6IFN0YXRlW107XHJcbiAgICBpbnB1dFN5bWJvbHM6IElucHV0U3ltYm9sW107XHJcbiAgICBzdGFja1N5bWJvbHM6IFN0YWNrU3ltYm9sW107XHJcbiAgICBpbml0aWFsU3RhdGU6IFN0YXRlO1xyXG4gICAgLy9GSVggRGVsZXRlIG51bGwgYW5kIGZpeCBjb3Jlc3BvbmRpbmcgZnVuY3Rpb25zXHJcbiAgICBpbml0aWFsU3RhY2tTeW1ib2w6IFN0YWNrU3ltYm9sIHwgbnVsbDtcclxuICAgIGFjY2VwdGluZ1N0YXRlOiBTdGF0ZVtdIHwgbnVsbDtcclxuICAgIHRyYW5zaXRpb25GdW5jdGlvbjogVHJhbnNpdGlvbkZ1bmN0aW9uW107XHJcbiAgICBjb25zdHJ1Y3RvcihzdGF0ZXM6IFN0YXRlW10sIGlucHV0U3ltYm9sczogSW5wdXRTeW1ib2xbXSwgc3RhY2tTeW1ib2xzOiBTdGFja1N5bWJvbFtdLCBpbml0aWFsU3RhdGU6IFN0YXRlLCBpbml0aWFsU3RhY2tTeW1ib2w6IFN0YWNrU3ltYm9sLCBhY2NlcHRpbmdTdGF0ZTogU3RhdGVbXSB8IG51bGwsIHRyYW5zaXRpb25GdW5jdGlvbjogVHJhbnNpdGlvbkZ1bmN0aW9uW10pXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZXMgPSBzdGF0ZXM7XHJcbiAgICAgICAgdGhpcy5pbnB1dFN5bWJvbHMgPSBpbnB1dFN5bWJvbHM7XHJcbiAgICAgICAgdGhpcy5zdGFja1N5bWJvbHMgPSBzdGFja1N5bWJvbHM7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsU3RhdGUgPSBpbml0aWFsU3RhdGU7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsU3RhY2tTeW1ib2wgPSBpbml0aWFsU3RhY2tTeW1ib2w7XHJcbiAgICAgICAgdGhpcy5hY2NlcHRpbmdTdGF0ZSA9IGFjY2VwdGluZ1N0YXRlO1xyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uID0gdHJhbnNpdGlvbkZ1bmN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGVFeGlzdHMoc3RhdGU6IFN0YXRlKTogYm9vbGVhbntcclxuICAgICAgICBmb3IobGV0IHMgb2YgdGhpcy5zdGF0ZXMpe1xyXG4gICAgICAgICAgICBpZihjb21wYXJlU3RhdGUocywgc3RhdGUpKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbnB1dFN5bWJvbEV4aXN0cyhpbnB1dFN5bWJvbDogSW5wdXRTeW1ib2wpOiBib29sZWFue1xyXG4gICAgICAgIGZvcihsZXQgaSBvZiB0aGlzLmlucHV0U3ltYm9scyl7XHJcbiAgICAgICAgICAgIGlmKGNvbXBhcmVJbnB1dFN5bWJvbChpLCBpbnB1dFN5bWJvbCkpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YWNrU3ltYm9sRXhpc3RzKHN0YWNrU3ltYm9sOiBTdGFja1N5bWJvbCk6IGJvb2xlYW57XHJcbiAgICAgICAgZm9yKGxldCBzIG9mIHRoaXMuc3RhY2tTeW1ib2xzKXtcclxuICAgICAgICAgICAgaWYoY29tcGFyZVN0YWNrU3ltYm9sKHMsIHN0YWNrU3ltYm9sKSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrU3RhdGVzRXhpc3RlbmNlKCkgOltzdHJpbmcsIFN0YXRlXVtde1xyXG4gICAgICAgIHZhciBlcnJvck1zZyA6W3N0cmluZywgU3RhdGVdW10gPSBbXTtcclxuXHJcbiAgICAgICAgaWYoIXRoaXMuc3RhdGVFeGlzdHModGhpcy5pbml0aWFsU3RhdGUpKXtcclxuICAgICAgICAgICAgZXJyb3JNc2cucHVzaChbXCJJbml0aWFsIHN0YXRlIGRvZXMgbm90IGV4aXN0XCIsIHRoaXMuaW5pdGlhbFN0YXRlXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmFjY2VwdGluZ1N0YXRlICE9IG51bGwpe1xyXG4gICAgICAgICAgICBmb3IobGV0IGZpbmFsU3RhdGUgb2YgdGhpcy5hY2NlcHRpbmdTdGF0ZSl7XHJcbiAgICAgICAgICAgICAgICBpZighdGhpcy5zdGF0ZUV4aXN0cyhmaW5hbFN0YXRlKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNc2cucHVzaChbXCJBY2NlcHRpbmcgc3RhdGUgZG9lcyBub3QgZXhpc3RcIiwgZmluYWxTdGF0ZV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZXJyb3JNc2c7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNoZWNrU3ltYm9sRXhpc3RlbmNlKCkgOltzdHJpbmcsIFN0YWNrU3ltYm9sXVtde1xyXG4gICAgICAgIHZhciBlcnJvck1zZyA6W3N0cmluZywgU3RhY2tTeW1ib2xdW10gPSBbXTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5pbml0aWFsU3RhY2tTeW1ib2wgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLnN0YWNrU3ltYm9sRXhpc3RzKHRoaXMuaW5pdGlhbFN0YWNrU3ltYm9sKSl7XHJcbiAgICAgICAgICAgICAgICBlcnJvck1zZy5wdXNoKFtcIkluaXRpYWwgc3RhY2sgc3ltYm9sIGRvZXMgbm90IGV4aXN0XCIsIHRoaXMuaW5pdGlhbFN0YWNrU3ltYm9sXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBlcnJvck1zZztcclxuICAgIH1cclxuICAgIFxyXG4gICAgY2hlY2tUcmFuc2l0aW9uRnVuY3Rpb25zKCkgOltzdHJpbmcsIFRyYW5zaXRpb25GdW5jdGlvbl1bXXtcclxuICAgICAgICB2YXIgZXJyb3JNc2cgOltzdHJpbmcsIFRyYW5zaXRpb25GdW5jdGlvbl1bXSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IobGV0IHRyYW5zaXRpb25GdW5jdGlvbiBvZiB0aGlzLnRyYW5zaXRpb25GdW5jdGlvbil7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLnN0YXRlRXhpc3RzKHRyYW5zaXRpb25GdW5jdGlvbi5mcm9tU3RhdGUpKXtcclxuICAgICAgICAgICAgICAgIGVycm9yTXNnLnB1c2goW1wiRnJvbSBzdGF0ZSBkb2VzIG5vdCBleGlzdFwiLCB0cmFuc2l0aW9uRnVuY3Rpb25dKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoIXRoaXMuaW5wdXRTeW1ib2xFeGlzdHModHJhbnNpdGlvbkZ1bmN0aW9uLmlucHV0U3ltYm9sKSl7XHJcbiAgICAgICAgICAgICAgICBlcnJvck1zZy5wdXNoKFtcIklucHV0IHN5bWJvbCBkb2VzIG5vdCBleGlzdFwiLCB0cmFuc2l0aW9uRnVuY3Rpb25dKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodHJhbnNpdGlvbkZ1bmN0aW9uLnN0YXJ0U3ltYm9sICE9IG51bGwgJiYgIXRoaXMuc3RhY2tTeW1ib2xFeGlzdHModHJhbnNpdGlvbkZ1bmN0aW9uLnN0YXJ0U3ltYm9sKSl7XHJcbiAgICAgICAgICAgICAgICBlcnJvck1zZy5wdXNoKFtcIlN0YWNrIHN5bWJvbCBkb2VzIG5vdCBleGlzdFwiLCB0cmFuc2l0aW9uRnVuY3Rpb25dKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoIXRoaXMuc3RhdGVFeGlzdHModHJhbnNpdGlvbkZ1bmN0aW9uLnRvU3RhdGUpKXtcclxuICAgICAgICAgICAgICAgIGVycm9yTXNnLnB1c2goW1wiVG8gc3RhdGUgZG9lcyBub3QgZXhpc3RcIiwgdHJhbnNpdGlvbkZ1bmN0aW9uXSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgcHVzaGVkU3ltYm9sIG9mIHRyYW5zaXRpb25GdW5jdGlvbi5wdXNoZWRTeW1ib2xzKXtcclxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLnN0YWNrU3ltYm9sRXhpc3RzKHB1c2hlZFN5bWJvbCkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTXNnLnB1c2goW1wiUHVzaGVkIHN5bWJvbCBkb2VzIG5vdCBleGlzdFwiLCB0cmFuc2l0aW9uRnVuY3Rpb25dKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGVycm9yTXNnO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrSW5wdXRUYXBlVmFsaWRpdHkoaW5wdXRUYXBlOiBzdHJpbmcpOiBzdHJpbmdbXXtcclxuICAgICAgICBsZXQgaW52YWxpZFN5bWJvbHM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHN5bWJvbHMgPSBuZXcgU2V0KGlucHV0VGFwZS5zcGxpdChcIlwiKSk7XHJcblxyXG4gICAgICAgIGZvcihsZXQgcyBvZiBzeW1ib2xzKXtcclxuICAgICAgICAgICAgbGV0IGludmFsaWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgICAgICAgICBmb3IobGV0IGlucHV0U3ltYm9sIG9mIHRoaXMuaW5wdXRTeW1ib2xzKXtcclxuICAgICAgICAgICAgICAgIGlmKGlucHV0U3ltYm9sLmlzRXBzeWxvbiA9PSBmYWxzZSAmJiBpbnB1dFN5bWJvbC52YWx1ZSA9PSBzKXtcclxuICAgICAgICAgICAgICAgICAgICBpbnZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoaW52YWxpZCl7XHJcbiAgICAgICAgICAgICAgICBpbnZhbGlkU3ltYm9scy5wdXNoKHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaW52YWxpZFN5bWJvbHM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VHJhbnNpdGlvbkZ1bmN0aW9ucyh0YXBlU3ltYm9sOiBzdHJpbmcsIHN0YXRlOiBTdGF0ZSwgc3RhY2tTeW1ib2w6ICBTdGFja1N5bWJvbCB8IG51bGwpOiBUcmFuc2l0aW9uRnVuY3Rpb25bXXtcclxuICAgICAgICBsZXQgcG9zc2libGVUcmFuc2l0aW9uRnVuY3Rpb25zOiBUcmFuc2l0aW9uRnVuY3Rpb25bXSA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgaW5wdXRTeW1ib2w6IElucHV0U3ltYm9sO1xyXG4gICAgICAgIGlmKHRhcGVTeW1ib2wgPT09IFwiXCIpe1xyXG4gICAgICAgICAgICBpbnB1dFN5bWJvbCA9IHtpc0Vwc3lsb246IHRydWV9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGlucHV0U3ltYm9sID0ge2lzRXBzeWxvbjogZmFsc2UsIHZhbHVlOiB0YXBlU3ltYm9sfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCB0cmFuc2l0aW9uRnVuY3Rpb24gb2YgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb24pe1xyXG4gICAgICAgICAgICBpZighY29tcGFyZUlucHV0U3ltYm9sKGlucHV0U3ltYm9sLCB0cmFuc2l0aW9uRnVuY3Rpb24uaW5wdXRTeW1ib2wpICYmICF0cmFuc2l0aW9uRnVuY3Rpb24uaW5wdXRTeW1ib2wuaXNFcHN5bG9uKXtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCFjb21wYXJlU3RhdGUoc3RhdGUsIHRyYW5zaXRpb25GdW5jdGlvbi5mcm9tU3RhdGUpKXtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCFjb21wYXJlU3RhY2tTeW1ib2woc3RhY2tTeW1ib2wsIHRyYW5zaXRpb25GdW5jdGlvbi5zdGFydFN5bWJvbCkpe1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcG9zc2libGVUcmFuc2l0aW9uRnVuY3Rpb25zLnB1c2godHJhbnNpdGlvbkZ1bmN0aW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwb3NzaWJsZVRyYW5zaXRpb25GdW5jdGlvbnM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTdGFjayB9IGZyb20gXCIuL3N0YWNrXCI7XHJcbmltcG9ydCB7IFN0YWNrU3ltYm9sLCBTdGF0ZSwgVHJhbnNpdGlvbkZ1bmN0aW9uIH0gZnJvbSBcIi4vcHVzaGRvd25BdXRvbWF0YVR5cGVzXCI7XHJcbmltcG9ydCB7IGNvbXBhcmVTdGF0ZSB9IGZyb20gXCIuL3B1c2hkb3duQXV0b21hdGFUeXBlc1wiO1xyXG5pbXBvcnQgeyBQdXNoZG93bkF1dG9tYXRhIH0gZnJvbSBcIi4vcHVzaGRvd25BdXRvbWF0YVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFB1c2hkb3duQXV0b21hdGFTaW11bGF0b3J7XHJcbiAgICBpbnB1dFRhcGU6IHN0cmluZztcclxuICAgIHN0YWNrOiBTdGFjazxTdGFja1N5bWJvbD47XHJcbiAgICBjdXJyZW50U3RhdGU6IFN0YXRlO1xyXG4gICAgYWNjZXB0aW5nU3RhdGU6IFN0YXRlW10gfCBudWxsO1xyXG4gICAgYXV0b21hdGE6IFB1c2hkb3duQXV0b21hdGE7XHJcbiAgICBoaXN0b3J5OiBUcmFuc2l0aW9uRnVuY3Rpb25bXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGF1dG9tYXRhOiBQdXNoZG93bkF1dG9tYXRhKXtcclxuICAgICAgICB0aGlzLmF1dG9tYXRhID0gYXV0b21hdGE7XHJcbiAgICAgICAgdGhpcy5pbnB1dFRhcGUgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuc3RhY2sgPSBuZXcgU3RhY2s8U3RhY2tTeW1ib2w+KCk7XHJcbiAgICAgICAgaWYodGhpcy5hdXRvbWF0YS5pbml0aWFsU3RhY2tTeW1ib2wgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhY2sucHVzaCh0aGlzLmF1dG9tYXRhLmluaXRpYWxTdGFja1N5bWJvbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gdGhpcy5hdXRvbWF0YS5pbml0aWFsU3RhdGU7XHJcbiAgICAgICAgdGhpcy5hY2NlcHRpbmdTdGF0ZSA9IHRoaXMuYXV0b21hdGEuYWNjZXB0aW5nU3RhdGU7XHJcbiAgICAgICAgdGhpcy5oaXN0b3J5ID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXQoKTogdm9pZHtcclxuICAgICAgICB0aGlzLmlucHV0VGFwZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5zdGFjay5jbGVhcigpO1xyXG4gICAgICAgIGlmKHRoaXMuYXV0b21hdGEuaW5pdGlhbFN0YWNrU3ltYm9sICE9IG51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLnN0YWNrLnB1c2godGhpcy5hdXRvbWF0YS5pbml0aWFsU3RhY2tTeW1ib2wpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IHRoaXMuYXV0b21hdGEuaW5pdGlhbFN0YXRlO1xyXG4gICAgICAgIHRoaXMuYWNjZXB0aW5nU3RhdGUgPSB0aGlzLmF1dG9tYXRhLmFjY2VwdGluZ1N0YXRlO1xyXG4gICAgICAgIHRoaXMuaGlzdG9yeSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcGx5VHJhbnNpdGlvbkZ1bmN0aW9uKGY6IFRyYW5zaXRpb25GdW5jdGlvbik6IHZvaWR7XHJcbiAgICAgICAgdGhpcy5pbnB1dFRhcGUgPSB0aGlzLmlucHV0VGFwZS5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgdGhpcy5zdGFjay5wb3AoKTtcclxuICAgICAgICBmb3IobGV0IGkgPSBmLnB1c2hlZFN5bWJvbHMubGVuZ3RoLTE7IGkgPj0gMDsgaS0tKXtcclxuICAgICAgICAgICAgdGhpcy5zdGFjay5wdXNoKGYucHVzaGVkU3ltYm9sc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gZi50b1N0YXRlO1xyXG4gICAgICAgIHRoaXMuaGlzdG9yeS5wdXNoKGYpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrSW5wdXRUYXBlVmFsaWRpdHkoKTogdm9pZHtcclxuICAgICAgICBsZXQgaW52YWxpZFN5bWJvbHM6IHN0cmluZ1tdID0gdGhpcy5hdXRvbWF0YS5jaGVja0lucHV0VGFwZVZhbGlkaXR5KHRoaXMuaW5wdXRUYXBlKTtcclxuICAgICAgICBpZihpbnZhbGlkU3ltYm9scy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBpbnB1dCB0YXBlOiBcIiArIGludmFsaWRTeW1ib2xzLmpvaW4oXCIsIFwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFjY2VwdGVkSW5wdXQoKTogYm9vbGVhbntcclxuICAgICAgICBpZih0aGlzLmlucHV0VGFwZSAhPT0gXCJcIil7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuYWNjZXB0aW5nU3RhdGUgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YWNrLmVtcHR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGZvcihsZXQgcyBvZiB0aGlzLmFjY2VwdGluZ1N0YXRlKXtcclxuICAgICAgICAgICAgaWYoY29tcGFyZVN0YXRlKHMsIHRoaXMuY3VycmVudFN0YXRlKSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHRTdGVwKCk6IFRyYW5zaXRpb25GdW5jdGlvbltde1xyXG4gICAgICAgIGlmKHRoaXMuYWNjZXB0ZWRJbnB1dCgpKXtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pbnB1dFRhcGVbMF0sIHRoaXMuY3VycmVudFN0YXRlLCB0aGlzLnN0YWNrLnRvcCgpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmF1dG9tYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgdGhpcy5hdXRvbWF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codHlwZW9mIHRoaXMuYXV0b21hdGEuZ2V0VHJhbnNpdGlvbkZ1bmN0aW9ucyk7XHJcbiAgICAgICAgbGV0IHBvc3NpYmxlVHJhbnNpdGlvbkZ1bmN0aW9uczogVHJhbnNpdGlvbkZ1bmN0aW9uW11cclxuICAgICAgICBpZih0aGlzLmlucHV0VGFwZSA9PT0gXCJcIil7XHJcbiAgICAgICAgICAgIHBvc3NpYmxlVHJhbnNpdGlvbkZ1bmN0aW9ucyA9IHRoaXMuYXV0b21hdGEuZ2V0VHJhbnNpdGlvbkZ1bmN0aW9ucyhcIlwiLCB0aGlzLmN1cnJlbnRTdGF0ZSwgdGhpcy5zdGFjay50b3AoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHBvc3NpYmxlVHJhbnNpdGlvbkZ1bmN0aW9ucyA9IHRoaXMuYXV0b21hdGEuZ2V0VHJhbnNpdGlvbkZ1bmN0aW9ucyh0aGlzLmlucHV0VGFwZVswXSwgdGhpcy5jdXJyZW50U3RhdGUsIHRoaXMuc3RhY2sudG9wKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcG9zc2libGVUcmFuc2l0aW9uRnVuY3Rpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIGJhY2tTdGVwKCk6IFRyYW5zaXRpb25GdW5jdGlvbiB8IG51bGx7XHJcbiAgICAgICAgaWYodGhpcy5oaXN0b3J5Lmxlbmd0aCA9PT0gMCl7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGxhc3Q6IFRyYW5zaXRpb25GdW5jdGlvbiA9IHRoaXMuaGlzdG9yeS5wb3AoKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IGxhc3QuZnJvbVN0YXRlO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsYXN0LnB1c2hlZFN5bWJvbHMubGVuZ3RoOyBpKyspeyBcclxuICAgICAgICAgICAgdGhpcy5zdGFjay5wb3AoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGFjay5wdXNoKGxhc3Quc3RhcnRTeW1ib2wpO1xyXG4gICAgICAgIGlmKCFsYXN0LmlucHV0U3ltYm9sLmlzRXBzeWxvbilcclxuICAgICAgICAgICAgdGhpcy5pbnB1dFRhcGUgPSBsYXN0LmlucHV0U3ltYm9sLnZhbHVlICsgdGhpcy5pbnB1dFRhcGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGxhc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TmV3SW5wdXQoaW5wdXQ6IHN0cmluZyk6IHZvaWR7XHJcbiAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgICAgIHRoaXMuaW5wdXRUYXBlID0gaW5wdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy9UT0RPIENoZWNrIEF1dG9tYXRhIHZhbGlkaXR5XHJcbn0iLCJpbXBvcnQgeyBTdGFjayB9IGZyb20gXCIuL3N0YWNrXCI7XHJcblxyXG5leHBvcnQgdHlwZSBTdGFja1N5bWJvbCA9IHtcclxuICAgIHZhbHVlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlU3RhY2tTeW1ib2woYTogU3RhY2tTeW1ib2wgfCBudWxsLCBiOiBTdGFja1N5bWJvbCB8IG51bGwpOiBib29sZWFue1xyXG4gICAgaWYoYSAhPSBudWxsICYmIHR5cGVvZihhKSA9PSB0eXBlb2YoYikpe1xyXG4gICAgICAgIHJldHVybiBhLnZhbHVlID09IGIudmFsdWU7XHJcbiAgICB9XHJcbiAgICBpZihhID09IG51bGwgJiYgYiA9PSBudWxsKXtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgSW5wdXRTeW1ib2wgPSB7XHJcbiAgICBpc0Vwc3lsb246IGJvb2xlYW47XHJcbiAgICB2YWx1ZT86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVJbnB1dFN5bWJvbChhOiBJbnB1dFN5bWJvbCwgYjogSW5wdXRTeW1ib2wpOiBib29sZWFue1xyXG4gICAgaWYoYS5pc0Vwc3lsb24gPT0gYi5pc0Vwc3lsb24pe1xyXG4gICAgICAgIGlmKGEuaXNFcHN5bG9uID09IGZhbHNlKXtcclxuICAgICAgICAgICAgcmV0dXJuIGEudmFsdWUgPT0gYi52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBTdGF0ZSA9IHtcclxuICAgIHZhbHVlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlU3RhdGUoYTogU3RhdGUsIGI6IFN0YXRlKTogYm9vbGVhbntcclxuICAgIHJldHVybiBhLnZhbHVlID09IGIudmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFRyYW5zaXRpb25GdW5jdGlvbiA9IHtcclxuICAgIGZyb21TdGF0ZTogU3RhdGU7XHJcbiAgICBpbnB1dFN5bWJvbDogSW5wdXRTeW1ib2w7XHJcbiAgICBzdGFydFN5bWJvbDogU3RhY2tTeW1ib2wgfCBudWxsO1xyXG4gICAgdG9TdGF0ZTogU3RhdGU7XHJcbiAgICBwdXNoZWRTeW1ib2xzOiBTdGFja1N5bWJvbFtdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZVRyYW5zaXRpb25GdW5jdGlvbihhOiBUcmFuc2l0aW9uRnVuY3Rpb24sIGI6IFRyYW5zaXRpb25GdW5jdGlvbik6IGJvb2xlYW57XHJcbiAgICAvL2Zyb21TdGF0ZVxyXG4gICAgaWYoIWNvbXBhcmVTdGF0ZShhLmZyb21TdGF0ZSwgYi5mcm9tU3RhdGUpKXtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy9pbXB1dFN5bWJvbFxyXG4gICAgaWYoIWNvbXBhcmVJbnB1dFN5bWJvbChhLmlucHV0U3ltYm9sLCBiLmlucHV0U3ltYm9sKSl7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vc3RhcnRTeW1ib2xcclxuICAgIGlmKHR5cGVvZihhLnN0YXJ0U3ltYm9sKSAhPSB0eXBlb2YoYi5zdGFydFN5bWJvbCkpe1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmKGEuc3RhcnRTeW1ib2wgIT0gbnVsbCAmJiAhY29tcGFyZVN0YWNrU3ltYm9sKGEuc3RhcnRTeW1ib2wsIGIuc3RhcnRTeW1ib2wpKXtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy90b1N0YXRlXHJcbiAgICBpZighY29tcGFyZVN0YXRlKGEudG9TdGF0ZSwgYi50b1N0YXRlKSl7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vcHVzaGVkU3ltYm9sc1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGEucHVzaGVkU3ltYm9scy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgaWYoIWNvbXBhcmVTdGFja1N5bWJvbChhLnB1c2hlZFN5bWJvbHNbaV0sIGIucHVzaGVkU3ltYm9sc1tpXSkpe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG59IiwiaW50ZXJmYWNlIElTdGFjazxUPiB7XHJcbiAgICBwb3AoKTogdm9pZDtcclxuICAgIHB1c2goaXRlbTogVCk6IHZvaWQ7XHJcbiAgICB0b3AoKTogVCB8IG51bGw7XHJcbiAgICBlbXB0eSgpOiBib29sZWFuO1xyXG4gICAgc2l6ZSgpOiBudW1iZXI7XHJcbiAgICBjbGVhcigpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3RhY2s8VD4gaW1wbGVtZW50cyBJU3RhY2s8VD4ge1xyXG4gICAgcHJpdmF0ZSBkYXRhOiBUW10gPSBbXTtcclxuXHJcbiAgICBwb3AoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kYXRhLnBvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1c2goaXRlbTogVCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGF0YS5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRvcCgpOiBUIHwgbnVsbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVt0aGlzLmRhdGEubGVuZ3RoIC0gMV0gPz8gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBlbXB0eSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmxlbmd0aCA9PT0gMDtcclxuICAgIH1cclxuXHJcbiAgICBzaXplKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgcHJpbnQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQdXNoZG93bkF1dG9tYXRhIH0gZnJvbSBcIi4vcHVzaGRvd25BdXRvbWF0YVwiXHJcbmltcG9ydCB7IFVJIH0gZnJvbSBcIi4vdWlcIiBcclxuaW1wb3J0IHsgYXV0b21hdGFPdmVydmlld1BhZ2UsIHNhdmVkQXV0b21hdGFzUGFnZSwgbG9hZEF1dG9tYXRhUGFnZSwgbWFpblBhZ2UsIHNpbXVsYXRvclBhZ2UsIG1lbnVQYWdlIH0gZnJvbSBcIi4vZXZlbnRzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RvcmFnZXtcclxuICAgIHNhdmVkQXV0b21hdGFzVGFibGU/OiBIVE1MVGFibGVFbGVtZW50O1xyXG4gICAgdWk6IFVJO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHVpOiBVSSl7XHJcbiAgICAgICAgdGhpcy5zYXZlZEF1dG9tYXRhc1RhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYXZlZEF1dG9tYXRhc1RhYmxlXCIpIGFzIEhUTUxUYWJsZUVsZW1lbnQ7XHJcbiAgICAgICAgaWYodWkpe1xyXG4gICAgICAgICAgICB0aGlzLnVpID0gdWk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyRXZlbnRzKCl7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkRmlsZUZvcm1cIikuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB0aGlzLmxvYWRGaWxlLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9hZEZpbGUoZTogU3VibWl0RXZlbnQpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGtleUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkS2V5SW5wdXRcIikgYXMgSFRNTElucHV0RWxlbWVudFxyXG4gICAgICAgIGxldCBrZXkgPSBrZXlJbnB1dD8udmFsdWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGZpbGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZEZpbGVJbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50XHJcbiAgICAgICAgbGV0IGZpbGUgPSBmaWxlSW5wdXQ/LmZpbGVzPy5bMF07XHJcbiAgICAgICAgaWYoIWtleSB8fCAhZmlsZSl7XHJcbiAgICAgICAgICAgIC8vVE9ETyBFcnJvclxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIktleSBvciBmaWxlIGRvZXMgbm90IGV4aXN0c1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgb3ZlcndyaXRlID0gZmFsc2U7XHJcbiAgICAgICAgaWYodGhpcy5rZXlFeGlzdHMoa2V5KSl7XHJcbiAgICAgICAgICAgIC8vVE9ETyBDaGFuZ2UhIE5vIGNvbmZpcm1zIVxyXG4gICAgICAgICAgICBpZighY29uZmlybShcIktleSBhbHJlYWR5IGV4aXN0cy4gT3ZlcndyaXRlP1wiKSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIG92ZXJ3cml0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QganNvblN0ciA9IHJlYWRlci5yZXN1bHQgYXMgc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXV0b21hdGEgPSBKU09OLnBhcnNlKGpzb25TdHIpIGFzIFB1c2hkb3duQXV0b21hdGE7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZShrZXksIGF1dG9tYXRhKTtcclxuICAgICAgICAgICAgICAgIGlmKCFvdmVyd3JpdGUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zZXJ0Um93KGtleSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsb2FkQXV0b21hdGFQYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIG1lbnVQYWdlLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICAgICAgICAgIG1haW5QYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIHNpbXVsYXRvclBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51aS5zZXRBdXRvbWF0YSh0aGlzLmxvYWRBdXRvbWF0YShrZXkpKTtcclxuICAgICAgICAgICAgICAgIGtleUlucHV0LnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGZpbGVJbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKXtcclxuICAgICAgICAgICAgLy9UT0RPIEVycm9yXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVHJ5IGNhdGNoIGVycm9yXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2F2ZTxUPihrZXk6IHN0cmluZywgaXRlbTogVCl7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShpdGVtKSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvYWQ8VD4oa2V5OiBzdHJpbmcpOiBUIHwgbnVsbHtcclxuICAgICAgICBjb25zdCBpdGVtID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuICAgICAgICBpZiAoIWl0ZW0pe1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoaXRlbSkgYXMgVDtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHBhcnNpbmcgbG9jYWxTdG9yYWdlIGl0ZW0gYXQga2V5IFwiJHtrZXl9XCIuYCwgZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkZWxldGUoa2V5OiBzdHJpbmcpe1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAga2V5RXhpc3RzKGtleTogc3RyaW5nKTogYm9vbGVhbntcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgaWYobG9jYWxTdG9yYWdlLmtleShpKSA9PT0ga2V5KXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlQXV0b21hdGEoa2V5OiBzdHJpbmcsIGF1dG9tYXRhOiBQdXNoZG93bkF1dG9tYXRhKXtcclxuICAgICAgICBpZih0aGlzLmtleUV4aXN0cyhrZXkpKXtcclxuICAgICAgICAgICAgLy9UT0RPIENoYW5nZSEgTm8gY29uZmlybXMhXHJcbiAgICAgICAgICAgIGlmKCFjb25maXJtKFwiS2V5IGFscmVhZHkgZXhpc3RzLiBPdmVyd3JpdGU/XCIpKXtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNhdmUoa2V5LCBhdXRvbWF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZEF1dG9tYXRhKGtleTogc3RyaW5nKTogUHVzaGRvd25BdXRvbWF0YSB8IG51bGx7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLmxvYWQ8UHVzaGRvd25BdXRvbWF0YT4oa2V5KSxQdXNoZG93bkF1dG9tYXRhLnByb3RvdHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbnNlcnRSb3coa2V5OiBzdHJpbmcpe1xyXG4gICAgICAgIGxldCBhdXRvbWF0YSA9IHRoaXMubG9hZEF1dG9tYXRhKGtleSk7XHJcbiAgICAgICAgaWYoYXV0b21hdGEpe1xyXG4gICAgICAgICAgICBsZXQgcm93ID0gdGhpcy5zYXZlZEF1dG9tYXRhc1RhYmxlLmluc2VydFJvdygpO1xyXG4gICAgICAgICAgICByb3cuY2xhc3NMaXN0LmFkZChcImJvcmRlci1iXCIpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgpXHJcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInAtMlwiLCBcImZvbnQtYm9sZFwiKTtcclxuICAgICAgICAgICAgY2VsbC5pbm5lclRleHQgPSBrZXk7XHJcblxyXG4gICAgICAgICAgICBjZWxsID0gcm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwicC0yXCIsIFwidGV4dC1jZW50ZXJcIik7XHJcbiAgICAgICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gJzxzdmcgY2xhc3M9XCJ3LTYgaC02XCJ2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCA1MCA1MFwiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MCA1MDtcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPjxnIGlkPVwiTGF5ZXJfMVwiPjxwYXRoIGQ9XCJNMjUsMzljMTMuMDM2LDAsMjMuMzUyLTEyLjgzMywyMy43ODQtMTMuMzc5TDQ5LjI3NSwyNWwtMC40OTEtMC42MjFDNDguMzUyLDIzLjgzMywzOC4wMzYsMTEsMjUsMTFTMS42NDgsMjMuODMzLDEuMjE2LDI0LjM3OUwwLjcyNSwyNWwwLjQ5MSwwLjYyMUMxLjY0OCwyNi4xNjcsMTEuOTY0LDM5LDI1LDM5eiBNMjUsMTNjMTAuNDk0LDAsMTkuNDcsOS40NiwyMS42OSwxMkM0NC40NzMsMjcuNTQyLDM1LjUwOSwzNywyNSwzN0MxNC41MDYsMzcsNS41MywyNy41NCwzLjMxLDI1QzUuNTI3LDIyLjQ1OCwxNC40OTEsMTMsMjUsMTN6XCI+PC9wYXRoPjxwYXRoIGQ9XCJNMjUsMzRjNC45NjMsMCw5LTQuMDM4LDktOXMtNC4wMzctOS05LTlzLTksNC4wMzgtOSw5UzIwLjAzNywzNCwyNSwzNHogTTI1LDE4YzMuODU5LDAsNywzLjE0LDcsN3MtMy4xNDEsNy03LDdzLTctMy4xNC03LTdTMjEuMTQxLDE4LDI1LDE4elwiPjwvcGF0aD48L2c+PGc+PC9nPjwvc3ZnPic7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5zaG93QXV0b21hdGEuYmluZCh0aGlzLCBrZXkpKTtcclxuICAgICAgICAgICAgY2VsbC5hcHBlbmQoYnV0dG9uKTtcclxuXHJcbiAgICAgICAgICAgIGNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJwLTJcIiwgXCJ0ZXh0LWNlbnRlclwiKTtcclxuICAgICAgICAgICAgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICc8c3ZnIGNsYXNzPVwidy02IGgtNlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyXCIgZD1cIk0zIDE5VjZjMC0uNi40LTEgMS0xaDRjLjMgMCAuNi4xLjguNGwxLjkgMi4yYy4yLjMuNS40LjguNEgxNmMuNiAwIDEgLjQgMSAxdjFNMyAxOWwzLThoMTVsLTMgOEgzWlwiLz48L3N2Zz4nO1xyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIG1haW5QYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIHNpbXVsYXRvclBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51aS5zZXRBdXRvbWF0YSh0aGlzLmxvYWRBdXRvbWF0YShrZXkpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNlbGwuYXBwZW5kKGJ1dHRvbik7XHJcblxyXG4gICAgICAgICAgICBjZWxsID0gcm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwicC0yXCIsIFwidGV4dC1jZW50ZXJcIik7XHJcbiAgICAgICAgICAgIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnPHN2ZyBjbGFzcz1cInctNiBoLTYgdGV4dC1ncmF5LTgwMCBkYXJrOnRleHQtd2hpdGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIGQ9XCJNNCAxNXYyYTMgMyAwIDAgMCAzIDNoMTBhMyAzIDAgMCAwIDMtM3YtMm0tOCAxVjRtMCAxMi00LTRtNCA0IDQtNFwiLz48L3N2Zz4nO1xyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QganNvblN0ciA9IEpTT04uc3RyaW5naWZ5KHRoaXMubG9hZEF1dG9tYXRhKGtleSksIG51bGwsIDIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtqc29uU3RyXSwge3R5cGU6IFwiYXBwbGljYXRpb24vanNvblwifSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgICAgICAgICAgYS5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgYS5kb3dubG9hZCA9IGAke2tleX0uanNvbmA7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpO1xyXG4gICAgICAgICAgICAgICAgYS5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhKTtcclxuICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICBjZWxsLmFwcGVuZChidXR0b24pO1xyXG5cclxuICAgICAgICAgICAgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInAtMlwiLCBcInRleHQtY2VudGVyXCIpO1xyXG4gICAgICAgICAgICBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gJzxzdmcgY2xhc3M9XCJ3LTYgaC02XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNjQgNTguNjdcIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzM1MzUzZDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPkFzc2V0IDI1PC90aXRsZT48ZyBpZD1cIkxheWVyXzJcIiBkYXRhLW5hbWU9XCJMYXllciAyXCI+PGcgaWQ9XCJMYXllcl8xLTJcIiBkYXRhLW5hbWU9XCJMYXllciAxXCI+PHBhdGggY2xhc3M9XCJjbHMtMVwiIGQ9XCJNNjEuMzMsNS4zM0g0OFYyLjY3QTIuNjYsMi42NiwwLDAsMCw0NS4zMywwSDE4LjY3QTIuNjYsMi42NiwwLDAsMCwxNiwyLjY3VjUuMzNIMi42N2EyLjY3LDIuNjcsMCwwLDAsMCw1LjM0SDh2NDBhOCw4LDAsMCwwLDgsOEg0OGE4LDgsMCwwLDAsOC04di00MGg1LjMzYTIuNjcsMi42NywwLDEsMCwwLTUuMzRaTTUwLjY3LDUwLjY3QTIuNjcsMi42NywwLDAsMSw0OCw1My4zM0gxNmEyLjY3LDIuNjcsMCwwLDEtMi42Ny0yLjY2di00MEg1MC42N1pcIj48L3BhdGg+PHBhdGggY2xhc3M9XCJjbHMtMVwiIGQ9XCJNMjQsNDUuMzNhMi42NywyLjY3LDAsMCwwLDIuNjctMi42NlYyMS4zM2EyLjY3LDIuNjcsMCwwLDAtNS4zNCwwVjQyLjY3QTIuNjcsMi42NywwLDAsMCwyNCw0NS4zM1pcIj48L3BhdGg+PHBhdGggY2xhc3M9XCJjbHMtMVwiIGQ9XCJNNDAsNDUuMzNhMi42NywyLjY3LDAsMCwwLDIuNjctMi42NlYyMS4zM2EyLjY3LDIuNjcsMCwwLDAtNS4zNCwwVjQyLjY3QTIuNjcsMi42NywwLDAsMCw0MCw0NS4zM1pcIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4nO1xyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlKGtleSk7XHJcbiAgICAgICAgICAgICAgICByb3cucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjZWxsLmFwcGVuZChidXR0b24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcmludEF1dG9tYXRhcygpe1xyXG4gICAgICAgIGlmKHRoaXMuc2F2ZWRBdXRvbWF0YXNUYWJsZSl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IGtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluc2VydFJvdyhrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dBdXRvbWF0YShrZXk6IHN0cmluZyl7XHJcbiAgICAgICAgbGV0IGF1dG9tYXRhID0gdGhpcy5sb2FkQXV0b21hdGEoa2V5KTtcclxuICAgICAgICAvL0tleS9uYW1lXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVydmlld05hbWVcIikhLmlubmVyVGV4dCA9IGtleTtcclxuICAgICAgICAvL1N0YXRlc1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcnZpZXdTdGF0ZXNcIikhLmlubmVyVGV4dCA9IGF1dG9tYXRhLnN0YXRlcy5tYXAoKHMpID0+IHMudmFsdWUpLmpvaW4oXCIsIFwiKTtcclxuICAgICAgICAvL0lucHV0IHN5bWJvbHNcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJ2aWV3SW5wdXRTeW1ib2xzXCIpIS5pbm5lclRleHQgPSBhdXRvbWF0YS5pbnB1dFN5bWJvbHMubWFwKChzKSA9PiBzLnZhbHVlKS5qb2luKFwiLCBcIik7XHJcbiAgICAgICAgLy9TdGFjayBzeW1ib2xzXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVydmlld1N0YWNrU3ltYm9sc1wiKSEuaW5uZXJUZXh0ID0gYXV0b21hdGEuc3RhY2tTeW1ib2xzLm1hcCgocykgPT4gcy52YWx1ZSkuam9pbihcIiwgXCIpO1xyXG4gICAgICAgIC8vSW5pdGlhbCBzdGF0ZVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcnZpZXdJbml0aWFsU3RhdGVcIikhLmlubmVyVGV4dCA9IGF1dG9tYXRhLmluaXRpYWxTdGF0ZS52YWx1ZTtcclxuICAgICAgICAvL0luaXRpYWwgc3RhY2sgc3ltYm9sXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVydmlld0luaXRpYWxTdGFja1N5bWJvbFwiKSEuaW5uZXJUZXh0ID0gYXV0b21hdGEuaW5pdGlhbFN0YWNrU3ltYm9sPy52YWx1ZTtcclxuICAgICAgICAvL0FjY2VwdGluZyBzdGF0ZXNcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJ2aWV3QWNjZXB0aW5nU3RhdGVcIikhLmlubmVyVGV4dCA9IGF1dG9tYXRhLmFjY2VwdGluZ1N0YXRlPy5tYXAoKHMpID0+IHMudmFsdWUpLmpvaW4oXCIsIFwiKSA/PyBcIkFjY2VwdGFuY2UgYnkgRW1wdHkgU3RhY2tcIjtcclxuICAgICAgICAvL1RyYW5zaXRpb24gZnVuY3Rpb25zXHJcbiAgICAgICAgbGV0IHRGdW5jdGlvbiA9ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJ2aWV3VHJhbnN0aW9uRnVuY3Rpb25cIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgdEZ1bmN0aW9uLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgZm9yKGxldCBmIG9mIGF1dG9tYXRhLnRyYW5zaXRpb25GdW5jdGlvbiA/PyBbXSl7XHJcbiAgICAgICAgICAgIHRGdW5jdGlvbi5hcHBlbmQoVUkuZ2VuZXJhdGVUcmFuc2l0aW9uRnVuY3Rpb24oZikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzYXZlZEF1dG9tYXRhc1BhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGF1dG9tYXRhT3ZlcnZpZXdQYWdlLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFB1c2hkb3duQXV0b21hdGFTaW11bGF0b3IgfSBmcm9tIFwiLi9wdXNoZG93bkF1dG9tYXRhU2ltdWxhdG9yXCI7XHJcbmltcG9ydCB7IFB1c2hkb3duQXV0b21hdGEgfSBmcm9tIFwiLi9wdXNoZG93bkF1dG9tYXRhXCI7XHJcbmltcG9ydCB7IFRyYW5zaXRpb25GdW5jdGlvbiwgSW5wdXRTeW1ib2wsIFN0YWNrU3ltYm9sLCBTdGF0ZSB9IGZyb20gXCIuL3B1c2hkb3duQXV0b21hdGFUeXBlc1wiO1xyXG5pbXBvcnQgeyBtYWluUGFnZSwgc2ltdWxhdG9yUGFnZSB9IGZyb20gXCIuL2V2ZW50c1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVJe1xyXG4gICAgc2ltdWxhdG9yPzogUHVzaGRvd25BdXRvbWF0YVNpbXVsYXRvcjtcclxuICAgIHRyYW5zdGl0aW9uSGlzdG9yeT86IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgdGFwZT86IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgc3RhY2s/OiBIVE1MRGl2RWxlbWVudDtcclxuICAgIHN0YXRlPzogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBpbmZvQnV0dG9uPzogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICB0cmFuc2l0aW9uT3B0aW9ucz86IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgdGFwZUZvcm1FcnJvcj86IEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gICAgdGFwZUZvcm0/OiBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgICB0YXBlUG9zaXRpb246IG51bWJlciA9IDA7XHJcblxyXG4gICAgaXNDaG9vc2luZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaXNSdW5uaWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGRpcmVjdGlvbkZvcndhcmQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgc3BlZWQ6IG51bWJlciA9IDEwMDA7XHJcblxyXG4gICAgdGltZW91dDogTm9kZUpTLlRpbWVvdXQgfCBudWxsID0gbnVsbDtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoYXV0b21hdGE/OiBQdXNoZG93bkF1dG9tYXRhKXtcclxuICAgICAgICBpZihhdXRvbWF0YSl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXV0b21hdGEoYXV0b21hdGEpO1xyXG4gICAgICAgICAgICB0aGlzLmZpbGxJbmZvcm1hdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRyYW5zdGl0aW9uSGlzdG9yeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhbnNpdGlvbkhpc3RvcnlEaXZcIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy50YXBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXBlRGl2XCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuc3RhY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YWNrRGl2XCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXRlRGl2XCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuaW5mb0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hvd0luZm9CdXR0b25cIikgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uT3B0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhbnNpdGlvbk9wdGlvbnNcIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy50YXBlRm9ybUVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXBlRm9ybUVycm9yXCIpIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gICAgICAgIHRoaXMudGFwZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcGVGb3JtTW9kYWxcIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QXV0b21hdGEoYXV0b21hdGE6IFB1c2hkb3duQXV0b21hdGEpOiB2b2lke1xyXG4gICAgICAgIHRoaXMuc2ltdWxhdG9yID0gbmV3IFB1c2hkb3duQXV0b21hdGFTaW11bGF0b3IoYXV0b21hdGEpO1xyXG4gICAgICAgIHRoaXMuZmlsbEluZm9ybWF0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5yZXNldFVJKCk7XHJcbiAgICAgICAgaWYodGhpcy50YXBlRm9ybSl7XHJcbiAgICAgICAgICAgIHRoaXMudGFwZUZvcm0uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckV2ZW50cygpOiB2b2lke1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uTmV4dFwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMubmV4dFN0ZXAuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b25CYWNrXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5iYWNrU3RlcC5iaW5kKHRoaXMpKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNwZWVkLWNvbnRyb2xcIik/LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGV2ZW50OiBJbnB1dEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWQgPSBwYXJzZUludCgoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbk5leHRBdXRvXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZih0aGlzLnRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0ID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmlzUnVubmlnID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25Gb3J3YXJkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5uZXh0U3RlcCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uQmFja0F1dG9cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaXNSdW5uaWcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbkZvcndhcmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5iYWNrU3RlcCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uU3RvcFwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYodGhpcy50aW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pc1J1bm5pZyA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hvd1RhcGVNb2RhbEJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZih0aGlzLnRhcGVGb3JtKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcGVGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlkZVNldFRhcGVCdXR0b25cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudGFwZUZvcm0pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFwZUZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXRUYXBlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdGhpcy5zZXRUYXBlRm9ybS5iaW5kKHRoaXMpKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcGVJbnB1dFwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudDogSW5wdXRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdGFwZUlucHV0OiBzdHJpbmcgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrVGFwZUlucHV0VmFsaWRpdHkodGFwZUlucHV0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlU2ltdWxhdG9yQnV0dG9uXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2ltdWxhdG9yUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIG1haW5QYWdlLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICAgICAgaWYodGhpcy50aW1lb3V0KXtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0ID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0VGFwZUZvcm0oZXZlbnQ6IFN1Ym1pdEV2ZW50KTogdm9pZHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBmb3JtID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxGb3JtRWxlbWVudDtcclxuICAgICAgICBsZXQgdGFwZUlucHV0ID0gZm9ybS5lbGVtZW50cy5uYW1lZEl0ZW0oXCJ0YXBlSW5wdXRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICBpZih0aGlzLmNoZWNrVGFwZUlucHV0VmFsaWRpdHkodGFwZUlucHV0LnZhbHVlKSl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VGFwZSh0YXBlSW5wdXQudmFsdWUpO1xyXG4gICAgICAgICAgICBpZih0aGlzLnRhcGVGb3JtKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFwZUZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrVGFwZUlucHV0VmFsaWRpdHkodGFwZUlucHV0OiBzdHJpbmcpOiBib29sZWFue1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2hlY2tpbmcgdGFwZSBpbnB1dFwiKTtcclxuICAgICAgICBpZighdGhpcy5zaW11bGF0b3IpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICBsZXQgYWxsb3dlZCA9IHRoaXMuc2ltdWxhdG9yLmF1dG9tYXRhLmlucHV0U3ltYm9scy5tYXAoKHMpID0+IHMudmFsdWUpO1xyXG4gICAgICAgIGZvcihsZXQgcyBvZiB0YXBlSW5wdXQpe1xyXG4gICAgICAgICAgICBpZighYWxsb3dlZC5pbmNsdWRlcyhzKSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcGVGb3JtRXJyb3I/LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50YXBlRm9ybUVycm9yPy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgZ2VuZXJhdGVUcmFuc2l0aW9uRnVuY3Rpb24oZjogVHJhbnNpdGlvbkZ1bmN0aW9uKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgICAgIGxldCByZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIHJlcy5jbGFzc0xpc3QuYWRkKFwiZmxleFwiLCBcImZsZXgtcm93XCIsIFwiZmxleC1ub3dyYXBcIiwgXCJqdXN0aWZ5LWNlbnRlclwiLCBcInB0LTNcIik7XHJcblxyXG4gICAgICAgIGxldCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICBsZWZ0LmlubmVyVGV4dCA9IGYuZnJvbVN0YXRlLnZhbHVlICsgXCIgXCIgKyBmLnN0YXJ0U3ltYm9sLnZhbHVlID8/IFwiXCI7XHJcbiAgICAgICAgcmVzLmFwcGVuZChsZWZ0KTtcclxuXHJcbiAgICAgICAgbGV0IGFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICBhcnJvdy5jbGFzc0xpc3QuYWRkKFwicHgtMVwiLCBcInJlbGF0aXZlXCIpO1xyXG4gICAgICAgIGFycm93LmlubmVyVGV4dCA9IFwi4pSA4pSAPlwiO1xyXG4gICAgICAgIHJlcy5hcHBlbmQoYXJyb3cpO1xyXG5cclxuICAgICAgICBsZXQgc3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICBzeW1ib2wuY2xhc3NMaXN0LmFkZChcImFic29sdXRlXCIsIFwidG9wLTBcIiwgXCJsZWZ0LTEvMlwiLCBcIi10cmFuc2xhdGUteC1bMTAwJV1cIiwgXCItdHJhbnNsYXRlLXktMlwiKTtcclxuICAgICAgICBzeW1ib2wuaW5uZXJUZXh0ID0gZi5pbnB1dFN5bWJvbC5pc0Vwc3lsb24gPyBcIs61XCIgOiBmLmlucHV0U3ltYm9sLnZhbHVlO1xyXG4gICAgICAgIGFycm93LmFwcGVuZChzeW1ib2wpO1xyXG5cclxuICAgICAgICBsZXQgcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIHJpZ2h0LmlubmVyVGV4dCA9IGYudG9TdGF0ZS52YWx1ZSArIFwiIFwiICsgZi5wdXNoZWRTeW1ib2xzLm1hcChzID0+IHMudmFsdWUpLmpvaW4oXCJcIik7XHJcbiAgICAgICAgcmVzLmFwcGVuZChyaWdodCk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsbEluZm9ybWF0aW9uKCk6IHZvaWR7XHJcbiAgICAgICAgLy9TdGF0ZXNcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm9TdGF0ZXNcIikhLmlubmVyVGV4dCA9IHRoaXMuc2ltdWxhdG9yPy5hdXRvbWF0YS5zdGF0ZXMubWFwKChzKSA9PiBzLnZhbHVlKS5qb2luKFwiLCBcIik7XHJcbiAgICAgICAgLy9JbnB1dCBzeW1ib2xzXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvSW5wdXRTeW1ib2xzXCIpIS5pbm5lclRleHQgPSB0aGlzLnNpbXVsYXRvcj8uYXV0b21hdGEuaW5wdXRTeW1ib2xzLm1hcCgocykgPT4gcy52YWx1ZSkuam9pbihcIiwgXCIpO1xyXG4gICAgICAgIC8vU3RhY2sgc3ltYm9sc1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mb1N0YWNrU3ltYm9sc1wiKSEuaW5uZXJUZXh0ID0gdGhpcy5zaW11bGF0b3I/LmF1dG9tYXRhLnN0YWNrU3ltYm9scy5tYXAoKHMpID0+IHMudmFsdWUpLmpvaW4oXCIsIFwiKTtcclxuICAgICAgICAvL0luaXRpYWwgc3RhdGVcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm9Jbml0aWFsU3RhdGVcIikhLmlubmVyVGV4dCA9IHRoaXMuc2ltdWxhdG9yPy5hdXRvbWF0YS5pbml0aWFsU3RhdGUudmFsdWU7XHJcbiAgICAgICAgLy9Jbml0aWFsIHN0YWNrIHN5bWJvbFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mb0luaXRpYWxTdGFja1N5bWJvbFwiKSEuaW5uZXJUZXh0ID0gdGhpcy5zaW11bGF0b3I/LmF1dG9tYXRhLmluaXRpYWxTdGFja1N5bWJvbD8udmFsdWU7XHJcbiAgICAgICAgLy9BY2NlcHRpbmcgc3RhdGVzXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvQWNjZXB0aW5nU3RhdGVcIikhLmlubmVyVGV4dCA9IHRoaXMuc2ltdWxhdG9yPy5hdXRvbWF0YS5hY2NlcHRpbmdTdGF0ZT8ubWFwKChzKSA9PiBzLnZhbHVlKS5qb2luKFwiLCBcIikgPz8gXCJBY2NlcHRhbmNlIGJ5IEVtcHR5IFN0YWNrXCI7XHJcbiAgICAgICAgLy9UcmFuc2l0aW9uIGZ1bmN0aW9uc1xyXG4gICAgICAgIGxldCB0RnVuY3Rpb24gPSAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvVHJhbnN0aW9uRnVuY3Rpb25cIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgdEZ1bmN0aW9uLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgZm9yKGxldCBmIG9mIHRoaXMuc2ltdWxhdG9yPy5hdXRvbWF0YS50cmFuc2l0aW9uRnVuY3Rpb24gPz8gW10pe1xyXG4gICAgICAgICAgICB0RnVuY3Rpb24uYXBwZW5kKFVJLmdlbmVyYXRlVHJhbnNpdGlvbkZ1bmN0aW9uKGYpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVG9IaXN0b3J5KGY6IFRyYW5zaXRpb25GdW5jdGlvbik6IHZvaWR7XHJcbiAgICAgICAgaWYodGhpcy50cmFuc3RpdGlvbkhpc3Rvcnkpe1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zdGl0aW9uSGlzdG9yeS5wcmVwZW5kKFVJLmdlbmVyYXRlVHJhbnNpdGlvbkZ1bmN0aW9uKGYpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlRnJvbUhpc3RvcnkoKTogdm9pZHtcclxuICAgICAgICBpZih0aGlzLnRyYW5zdGl0aW9uSGlzdG9yeSAmJiB0aGlzLnRyYW5zdGl0aW9uSGlzdG9yeS5jaGlsZEVsZW1lbnRDb3VudCA+IDApe1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zdGl0aW9uSGlzdG9yeS5yZW1vdmVDaGlsZCh0aGlzLnRyYW5zdGl0aW9uSGlzdG9yeS5maXJzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVG9UYXBlKHM6IElucHV0U3ltYm9sLCBhcHBlbmQ/OiBib29sZWFuKTogdm9pZHtcclxuICAgICAgICBsZXQgc3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICBzeW1ib2wuY2xhc3NMaXN0LmFkZChcImJnLXJlZC01MDBcIixcImgtMTZcIixcInctMTZcIixcIm0tMlwiLFwiZmxleC1zaHJpbmstMFwiLFwiZmxleFwiLFwianVzdGlmeS1jZW50ZXJcIixcIml0ZW1zLWNlbnRlclwiKVxyXG4gICAgICAgIHN5bWJvbC5pbm5lclRleHQgPSBzLnZhbHVlO1xyXG4gICAgICAgIGlmKGFwcGVuZCAmJiBhcHBlbmQgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIHRoaXMudGFwZT8uYXBwZW5kKHN5bWJvbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMudGFwZT8ucHJlcGVuZChzeW1ib2wpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVGcm9tVGFwZSgpOiB2b2lke1xyXG4gICAgICAgIGlmKHRoaXMudGFwZSAmJiB0aGlzLnRhcGUuY2hpbGRFbGVtZW50Q291bnQgPiAwKXtcclxuICAgICAgICAgICAgdGhpcy50YXBlLnJlbW92ZUNoaWxkKHRoaXMudGFwZS5maXJzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgIDAgLT4gcmVhZFxyXG4gICAgMSAtPiByZWFkaW5nXHJcbiAgICAyIC0+IG5vdCByZWFkXHJcbiAgICAqL1xyXG4gICAgc2V0U3ltYm9sVG9TdGF0ZShzOiBIVE1MRGl2RWxlbWVudCwgc3RhdGU6IG51bWJlcil7XHJcbiAgICAgICAgc3dpdGNoKHN0YXRlKXtcclxuICAgICAgICAgICAgY2FzZSAwOntcclxuICAgICAgICAgICAgICAgIHMuY2xhc3NMaXN0LnJlbW92ZShcImJnLXJlZC01MDBcIik7XHJcbiAgICAgICAgICAgICAgICBzLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1yZWQtOTAwXCIpO1xyXG4gICAgICAgICAgICAgICAgcy5jbGFzc0xpc3QuYWRkKFwiYmctcmVkLTMwMFwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgMTp7XHJcbiAgICAgICAgICAgICAgICBzLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1yZWQtMzAwXCIpO1xyXG4gICAgICAgICAgICAgICAgcy5jbGFzc0xpc3QucmVtb3ZlKFwiYmctcmVkLTUwMFwiKTtcclxuICAgICAgICAgICAgICAgIHMuY2xhc3NMaXN0LmFkZChcImJnLXJlZC05MDBcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDp7XHJcbiAgICAgICAgICAgICAgICBzLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1yZWQtMzAwXCIpO1xyXG4gICAgICAgICAgICAgICAgcy5jbGFzc0xpc3QucmVtb3ZlKFwiYmctcmVkLTkwMFwiKTtcclxuICAgICAgICAgICAgICAgIHMuY2xhc3NMaXN0LmFkZChcImJnLXJlZC01MDBcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZVRhcGUoYmFja3dhcmQ6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWR7XHJcbiAgICAgICAgbGV0IHN5bWJvbHMgPSB0aGlzLnRhcGU/LmNoaWxkcmVuO1xyXG4gICAgICAgIGlmKHN5bWJvbHMgJiYgc3ltYm9scy5sZW5ndGggPiAxKXtcclxuICAgICAgICAgICAgaWYoYmFja3dhcmQgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcGVQb3NpdGlvbi0tO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTeW1ib2xUb1N0YXRlKHN5bWJvbHNbdGhpcy50YXBlUG9zaXRpb24rMV0gYXMgSFRNTERpdkVsZW1lbnQsIDIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy50YXBlUG9zaXRpb24rMSwgMik7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnRhcGVQb3NpdGlvbiA+PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN5bWJvbFRvU3RhdGUoc3ltYm9sc1t0aGlzLnRhcGVQb3NpdGlvbl0gYXMgSFRNTERpdkVsZW1lbnQsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudGFwZVBvc2l0aW9uLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXBlUG9zaXRpb24rKztcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3ltYm9sVG9TdGF0ZShzeW1ib2xzW3RoaXMudGFwZVBvc2l0aW9uLTFdIGFzIEhUTUxEaXZFbGVtZW50LCAwKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudGFwZVBvc2l0aW9uLTEsIDApO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy50YXBlUG9zaXRpb24gPCBzeW1ib2xzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTeW1ib2xUb1N0YXRlKHN5bWJvbHNbdGhpcy50YXBlUG9zaXRpb25dIGFzIEhUTUxEaXZFbGVtZW50LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRhcGVQb3NpdGlvbiwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlU3RhdGUoczogU3RhdGUpOiB2b2lke1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUpe1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmlubmVyVGV4dCA9IHMudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZFRvU3RhY2soczogU3RhY2tTeW1ib2wpOiB2b2lke1xyXG4gICAgICAgIGxldCBzeW1ib2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIHN5bWJvbC5jbGFzc0xpc3QuYWRkKFwiYmctZ3JlZW4tNTAwXCIsXCJoLTE2XCIsXCJ3LTE2XCIsXCJtLTJcIixcImZsZXgtc2hyaW5rLTBcIixcImZsZXhcIixcImp1c3RpZnktY2VudGVyXCIsXCJpdGVtcy1jZW50ZXJcIixcImZpcnN0Om10LWF1dG9cIilcclxuICAgICAgICBzeW1ib2wuaW5uZXJUZXh0ID0gcy52YWx1ZTtcclxuICAgICAgICB0aGlzLnN0YWNrPy5wcmVwZW5kKHN5bWJvbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlRnJvbVN0YWNrKCk6IHZvaWR7XHJcbiAgICAgICAgaWYodGhpcy5zdGFjayAmJiB0aGlzLnN0YWNrLmNoaWxkRWxlbWVudENvdW50ID4gMCl7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhY2sucmVtb3ZlQ2hpbGQodGhpcy5zdGFjay5maXJzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRVSSgpOiB2b2lke1xyXG4gICAgICAgIGlmKHRoaXMuc3RhY2spe1xyXG4gICAgICAgICAgICB0aGlzLnN0YWNrLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLnN0YXRlKXtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLnRhcGUpe1xyXG4gICAgICAgICAgICB0aGlzLnRhcGUuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMudHJhbnN0aXRpb25IaXN0b3J5KXtcclxuICAgICAgICAgICAgdGhpcy50cmFuc3RpdGlvbkhpc3RvcnkuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuc2ltdWxhdG9yKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5pbm5lclRleHQgPSB0aGlzLnNpbXVsYXRvci5hdXRvbWF0YS5pbml0aWFsU3RhdGUudmFsdWU7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc2ltdWxhdG9yLmF1dG9tYXRhLmluaXRpYWxTdGFja1N5bWJvbCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFRvU3RhY2sodGhpcy5zaW11bGF0b3IuYXV0b21hdGEuaW5pdGlhbFN0YWNrU3ltYm9sKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pc0Nob29zaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc1J1bm5pZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uRm9yd2FyZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IDEwMDA7XHJcbiAgICAgICAgaWYodGhpcy50aW1lb3V0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XHJcbiAgICAgICAgICAgIHRoaXMudGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFRhcGUodGFwZTogc3RyaW5nKTogdm9pZHtcclxuICAgICAgICB0aGlzLnNpbXVsYXRvcj8uc2V0TmV3SW5wdXQodGFwZSk7XHJcbiAgICAgICAgdGhpcy5yZXNldFVJKCk7XHJcbiAgICAgICAgaWYodGhpcy50YXBlKXtcclxuICAgICAgICAgICAgdGhpcy50YXBlLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGZvcihsZXQgcyBvZiB0YXBlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9UYXBlKHtpc0Vwc3lsb246IGZhbHNlLCB2YWx1ZTogc30sIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0ZW1wID0gdGhpcy50YXBlPy5jaGlsZHJlblswXSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICBpZih0ZW1wKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTeW1ib2xUb1N0YXRlKHRlbXAsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1c2VUcmFuc2l0aW9uKGY6IFRyYW5zaXRpb25GdW5jdGlvbik6IHZvaWR7XHJcbiAgICAgICAgY29uc29sZS5sb2coZik7XHJcbiAgICAgICAgdGhpcy5zaW11bGF0b3I/LmFwcGx5VHJhbnNpdGlvbkZ1bmN0aW9uKGYpO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoZi50b1N0YXRlKTtcclxuICAgICAgICBpZighZi5pbnB1dFN5bWJvbC5pc0Vwc3lsb24pe1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVUYXBlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGYuc3RhcnRTeW1ib2wgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRnJvbVN0YWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgaSA9IGYucHVzaGVkU3ltYm9scy5sZW5ndGgtMTsgaSA+PSAwOyBpLS0pe1xyXG4gICAgICAgICAgICB0aGlzLmFkZFRvU3RhY2soZi5wdXNoZWRTeW1ib2xzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hZGRUb0hpc3RvcnkoZik7XHJcbiAgICAgICAgdGhpcy5pc0Nob29zaW5nID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZW5lcmF0ZU9wdGlvbnMob3B0aW9uczogVHJhbnNpdGlvbkZ1bmN0aW9uW10pOiB2b2lke1xyXG4gICAgICAgIGlmKHRoaXMuaW5mb0J1dHRvbil7XHJcbiAgICAgICAgICAgIHRoaXMuaW5mb0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZmxleFwiKTtcclxuICAgICAgICAgICAgdGhpcy5pbmZvQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMudHJhbnNpdGlvbk9wdGlvbnMpe1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25PcHRpb25zLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgbyBvZiBvcHRpb25zKXtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIikgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAgICAgICAgIG9wdGlvbi5jbGFzc0xpc3QuYWRkKFwicHgtMlwiLFwicHktMVwiLFwibXgtYXV0b1wiKTtcclxuICAgICAgICAgICAgb3B0aW9uLmFwcGVuZChVSS5nZW5lcmF0ZVRyYW5zaXRpb25GdW5jdGlvbihvKSk7XHJcbiAgICAgICAgICAgIG9wdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VUcmFuc2l0aW9uKG8pO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy50cmFuc2l0aW9uT3B0aW9ucyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uT3B0aW9ucy5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmZvQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJmbGV4XCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmZvQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmlzUnVubmlnICYmIHRoaXMuZGlyZWN0aW9uRm9yd2FyZClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGlyID0gdGhpcy5kaXJlY3Rpb25Gb3J3YXJkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmlzUnVubmlnICYmIHRoaXMuZGlyZWN0aW9uRm9yd2FyZCA9PSBkaXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHRTdGVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgdGhpcy5zcGVlZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25PcHRpb25zPy5hcHBlbmQob3B0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dFN0ZXAoKTogdm9pZHtcclxuICAgICAgICBpZighdGhpcy5pc0Nob29zaW5nKXtcclxuICAgICAgICAgICAgaWYodGhpcy5zaW11bGF0b3Ipe1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvc3NpYmxlVHJhbnN0aW9uczogVHJhbnNpdGlvbkZ1bmN0aW9uW10gPSB0aGlzLnNpbXVsYXRvci5uZXh0U3RlcCgpO1xyXG4gICAgICAgICAgICAgICAgaWYocG9zc2libGVUcmFuc3Rpb25zLmxlbmd0aCA9PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBwb3NzaWJsZSB0cmFuc2l0aW9uc1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYocG9zc2libGVUcmFuc3Rpb25zLmxlbmd0aCA9PSAxKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZVRyYW5zaXRpb24ocG9zc2libGVUcmFuc3Rpb25zWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmlzUnVubmlnICYmIHRoaXMuZGlyZWN0aW9uRm9yd2FyZClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkaXIgPSB0aGlzLmRpcmVjdGlvbkZvcndhcmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5pc1J1bm5pZyAmJiB0aGlzLmRpcmVjdGlvbkZvcndhcmQgPT0gZGlyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dFN0ZXAoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGhpcy5zcGVlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQ2hvb3NpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVPcHRpb25zKHBvc3NpYmxlVHJhbnN0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYmFja1N0ZXAoKTogdm9pZHtcclxuICAgICAgICBpZih0aGlzLmlzQ2hvb3Npbmcpe1xyXG4gICAgICAgICAgICB0aGlzLmlzQ2hvb3NpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYodGhpcy50cmFuc2l0aW9uT3B0aW9ucyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25PcHRpb25zLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pbmZvQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJmbGV4XCIpO1xyXG4gICAgICAgICAgICB0aGlzLmluZm9CdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnNpbXVsYXRvcil7XHJcbiAgICAgICAgICAgIGxldCBsYXN0ID0gdGhpcy5zaW11bGF0b3IuYmFja1N0ZXAoKTtcclxuICAgICAgICAgICAgaWYobGFzdCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUZyb21IaXN0b3J5KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKGxhc3QuZnJvbVN0YXRlKTtcclxuICAgICAgICAgICAgICAgIGlmKCFsYXN0LmlucHV0U3ltYm9sLmlzRXBzeWxvbil7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlVGFwZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsYXN0LnB1c2hlZFN5bWJvbHMubGVuZ3RoOyBpKyspeyBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUZyb21TdGFjaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYobGFzdC5zdGFydFN5bWJvbCAhPSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFRvU3RhY2sobGFzdC5zdGFydFN5bWJvbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYodGhpcy5pc1J1bm5pZyAmJiAhdGhpcy5kaXJlY3Rpb25Gb3J3YXJkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGlyID0gdGhpcy5kaXJlY3Rpb25Gb3J3YXJkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5pc1J1bm5pZyAmJiB0aGlzLmRpcmVjdGlvbkZvcndhcmQgPT0gZGlyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhY2tTdGVwKCk7XHJcbiAgICAgICAgICAgICAgICB9LCB0aGlzLnNwZWVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgVUkgfSBmcm9tIFwiLi91aVwiO1xuaW1wb3J0IHsgUHVzaGRvd25BdXRvbWF0YVNpbXVsYXRvciB9IGZyb20gXCIuL3B1c2hkb3duQXV0b21hdGFTaW11bGF0b3JcIjtcbmltcG9ydCB7IFB1c2hkb3duQXV0b21hdGEgfSBmcm9tIFwiLi9wdXNoZG93bkF1dG9tYXRhXCI7XG5pbXBvcnQgeyByZWdpc3RlckV2ZW50cyB9IGZyb20gXCIuL2V2ZW50c1wiO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCB7IEZvcm1BdXRvbWF0YUJ1aWxkZXIgfSBmcm9tIFwiLi9mb3JtQXV0b21hdGFCdWlsZGVyXCI7XG5cbnZhciBzdG9yYWdlOiBTdG9yYWdlO1xudmFyIHVpOiBVSTtcbnZhciBhdXRvbWF0YUJ1aWxkZXI6IEZvcm1BdXRvbWF0YUJ1aWxkZXI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICB1aSA9IG5ldyBVSSgpO1xuICAgIHN0b3JhZ2UgPSBuZXcgU3RvcmFnZSh1aSk7XG4gICAgYXV0b21hdGFCdWlsZGVyID0gbmV3IEZvcm1BdXRvbWF0YUJ1aWxkZXIoKTtcbiAgICByZWdpc3RlckV2ZW50cygpO1xuICAgIHVpLnJlZ2lzdGVyRXZlbnRzKCk7XG4gICAgc3RvcmFnZS5yZWdpc3RlckV2ZW50cygpO1xuICAgIGF1dG9tYXRhQnVpbGRlci5yZWdpc3RlckV2ZW50cygpO1xuICAgIHN0b3JhZ2UucHJpbnRBdXRvbWF0YXMoKTtcbiAgICB1aS5zZXRUYXBlKFwiYWFiYlwiKTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==