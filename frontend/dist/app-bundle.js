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
/* harmony export */   registerEvents: () => (/* binding */ registerEvents)
/* harmony export */ });
var divAutomataDefinition;
var divTransitionHistory;
function infoDivSwitch(div) {
    div.classList.toggle("hidden");
    div.classList.toggle("absolute");
    div.classList.toggle("top-0");
    div.classList.toggle("bottom-0");
    div.classList.toggle("left-0");
    div.classList.toggle("-right-20");
    div.classList.toggle("-translate-x-20");
    div.classList.toggle("md:-right-0");
    div.classList.toggle("md:-translate-x-0");
}
;
function registerEvents() {
    divAutomataDefinition = document.getElementById("automataDefinitionDiv");
    divTransitionHistory = document.getElementById("transitionHistoryDiv");
    document.getElementById("automataDefinitionButton")?.addEventListener("click", () => {
        divAutomataDefinition.style.display = "block";
        divTransitionHistory.style.display = "none";
    });
    document.getElementById("transitionHistoryButton")?.addEventListener("click", () => {
        divTransitionHistory.style.display = "flex";
        divAutomataDefinition.style.display = "none";
    });
    document.getElementById("showInfoButton")?.addEventListener("click", () => {
        let infoDiv = document.getElementById("infoDiv");
        infoDivSwitch(infoDiv);
    });
    document.getElementById("hideInfoButton")?.addEventListener("click", () => {
        let infoDiv = document.getElementById("infoDiv");
        infoDivSwitch(infoDiv);
    });
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
            if (!(0,_pushdownAutomataTypes__WEBPACK_IMPORTED_MODULE_0__.compareInputSymbol)(inputSymbol, transitionFunction.inputSymbol)) {
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
        console.log("Applying transition function:");
        console.log(f);
        this.inputTape = this.inputTape.substring(1);
        this.stack.pop();
        for (let s of f.pushedSymbols) {
            this.stack.push(s);
        }
        this.currentState = f.toState;
        this.history.push(f);
        //TODO modify UI
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
        let result = this.acceptedInput();
        if (result) {
            //TODO raise alert - accepted
            throw new Error("Input already accepted");
        }
        if (this.inputTape === "") {
            //TODO raise alert - no more input / not accepted
            throw new Error("No more input");
        }
        let possibleTransitionFunctions = this.automata.getTransitionFunctions(this.inputTape[0], this.currentState, this.stack.top());
        if (possibleTransitionFunctions.length === 0) {
            //TODO raise alert - no possible transition function
            throw new Error("No possible transition function");
        }
        else if (possibleTransitionFunctions.length == 1) {
            this.applyTransitionFunction(possibleTransitionFunctions[0]);
        }
        else {
            //TODO raise alert - multiple transition functions
            // And let the user choose
            throw new Error("Multiple transition functions");
        }
    }
    backStep() {
        if (this.history.length === 0) {
            //TODO raise alert - no history available
            throw new Error("No previous step");
        }
        let last = this.history.pop();
        this.currentState = last.fromState;
        for (let i = 0; i < last.pushedSymbols.length; i++) {
            this.stack.pop();
        }
        this.stack.push(last.startSymbol);
        this.inputTape = last.inputSymbol?.value + this.inputTape;
        //TODO modify UI
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

class UI {
    simulator;
    transtitionHistory;
    tape;
    stack;
    state;
    constructor(automata) {
        if (automata) {
            this.setAutomata(automata);
            this.fillInformation();
        }
        this.transtitionHistory = document.getElementById("transitionHistoryDiv");
        this.tape = document.getElementById("tapeDiv");
        this.stack = document.getElementById("stackDiv");
        this.state = document.getElementById("stateDiv");
    }
    setAutomata(automata) {
        this.simulator = new _pushdownAutomataSimulator__WEBPACK_IMPORTED_MODULE_0__.PushdownAutomataSimulator(automata);
        this.fillInformation();
    }
    generateTransitionFunction(f) {
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
        document.getElementById("infoInitialStackSymbol").innerText = this.simulator?.automata.initialStackSymbol?.value ?? "Empty stack";
        //Accepting states
        document.getElementById("infoAcceptingState").innerText = this.simulator?.automata.acceptingState?.map((s) => s.value).join(", ") ?? "Acceptance by Empty Stack";
        //Transition functions
        let tFunction = document.getElementById("infoTranstionFunction");
        tFunction.innerHTML = "";
        for (let f of this.simulator?.automata.transitionFunction ?? []) {
            console.log(f);
            tFunction.append(this.generateTransitionFunction(f));
        }
    }
    addToHistory(f) {
        if (this.transtitionHistory) {
            this.transtitionHistory.prepend(this.generateTransitionFunction(f));
        }
    }
    removeFromHistory() {
        if (this.transtitionHistory && this.transtitionHistory.childElementCount > 0) {
            this.transtitionHistory.removeChild(this.transtitionHistory.firstChild);
        }
    }
    addToTape(s) {
        let symbol = document.createElement("div");
        symbol.classList.add("bg-red-500", "h-16", "w-16", "m-2", "flex-shrink-0", "flex", "justify-center", "items-center");
        symbol.innerText = s.value;
        this.tape?.prepend(symbol);
    }
    removeFromTape() {
        if (this.tape && this.tape.childElementCount > 0) {
            this.tape.removeChild(this.tape.firstChild);
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
/* harmony import */ var _pushdownAutomata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pushdownAutomata */ "./src/pushdownAutomata.ts");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events */ "./src/events.ts");



const automata = new _pushdownAutomata__WEBPACK_IMPORTED_MODULE_1__.PushdownAutomata([
    { value: "q1" },
    { value: "q2" }
], [
    { isEpsylon: false, value: "a" },
    { isEpsylon: false, value: "b" }
], [
    { value: "O" },
    { value: "I" }
], { value: "q1" }, { value: "O" }, null, [
    {
        fromState: { value: "q1" },
        inputSymbol: { isEpsylon: false, value: "a" },
        startSymbol: { value: "O" },
        toState: { value: "q1" },
        pushedSymbols: [{ value: "I" }]
    },
    {
        fromState: { value: "q1" },
        inputSymbol: { isEpsylon: false, value: "a" },
        startSymbol: { value: "I" },
        toState: { value: "q1" },
        pushedSymbols: [{ value: "I" }, { value: "I" }]
    },
    {
        fromState: { value: "q1" },
        inputSymbol: { isEpsylon: false, value: "b" },
        startSymbol: { value: "I" },
        toState: { value: "q2" },
        pushedSymbols: []
    },
    {
        fromState: { value: "q2" },
        inputSymbol: { isEpsylon: false, value: "b" },
        startSymbol: { value: "I" },
        toState: { value: "q2" },
        pushedSymbols: []
    },
]);
const ui = new _ui__WEBPACK_IMPORTED_MODULE_0__.UI();
ui.setAutomata(automata);
ui.addToStack({ value: "I" });
ui.addToTape({ isEpsylon: false, value: "a" });
ui.changeState({ value: "q1" });
ui.removeFromStack();
ui.removeFromTape();
/*let frontEndStructure = new PushdownAutomataSimulator(automata);

console.log(frontEndStructure.inputTape);
console.log(JSON.stringify(frontEndStructure.stack));
console.log(frontEndStructure.currentState);
console.log(frontEndStructure.acceptingState);
console.log(frontEndStructure.history);

frontEndStructure.setNewInput("aabb");
console.log("Setting new input");

console.log(frontEndStructure.inputTape);
console.log(JSON.stringify(frontEndStructure.stack));
console.log(frontEndStructure.currentState);
console.log(frontEndStructure.acceptingState);
console.log(frontEndStructure.history);

console.log("Checking input validity");
frontEndStructure.checkInputTapeValidity();

try{
    while(!frontEndStructure.acceptedInput())
    {
        frontEndStructure.nextStep();
        console.log(frontEndStructure.inputTape);
        console.log(JSON.stringify(frontEndStructure.stack));
        console.log(frontEndStructure.currentState);
        console.log(frontEndStructure.acceptingState);
        console.log(frontEndStructure.history);
    }
    console.log("Accepted input");
}
catch(e)
{
    console.log(e);
}


frontEndStructure.backStep();
console.log("Back step");
console.log(frontEndStructure.inputTape);
console.log(JSON.stringify(frontEndStructure.stack));
console.log(frontEndStructure.currentState);
console.log(frontEndStructure.acceptingState);
console.log(frontEndStructure.history);

console.log("New input");
frontEndStructure.setNewInput("a");
frontEndStructure.nextStep();
console.log("Is accepted: " + frontEndStructure.acceptedInput());
*/
document.addEventListener("DOMContentLoaded", () => {
    (0,_events__WEBPACK_IMPORTED_MODULE_2__.registerEvents)();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLEVBQUM7UUFDekIsT0FBTyxFQUFFLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBQztRQUN0QixhQUFhLEVBQUUsRUFBRTtLQUNwQjtJQUNEO1FBQ0ksU0FBUyxFQUFFLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBQztRQUN4QixXQUFXLEVBQUUsRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUM7UUFDM0MsV0FBVyxFQUFFLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBQztRQUN6QixPQUFPLEVBQUUsRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFDO1FBQ3RCLGFBQWEsRUFBRSxFQUFFO0tBQ3BCO0NBQ0osQ0FDSixDQUFDO0FBRUYsTUFBTSxFQUFFLEdBQU8sSUFBSSxtQ0FBRSxFQUFFLENBQUM7QUFDeEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUV6QixFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUM7QUFDNUIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUM7QUFDN0MsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO0FBQzlCLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUNyQixFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7QUFFcEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBa0RFO0FBRUYsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLEdBQUcsRUFBRTtJQUMvQyx1REFBYyxFQUFFLENBQUM7QUFDckIsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW11bGF0aW9uX29mX3B1c2hkb3duX2F1dG9tYXRhLy4vc3JjL2V2ZW50cy50cyIsIndlYnBhY2s6Ly9zaW11bGF0aW9uX29mX3B1c2hkb3duX2F1dG9tYXRhLy4vc3JjL3B1c2hkb3duQXV0b21hdGEudHMiLCJ3ZWJwYWNrOi8vc2ltdWxhdGlvbl9vZl9wdXNoZG93bl9hdXRvbWF0YS8uL3NyYy9wdXNoZG93bkF1dG9tYXRhU2ltdWxhdG9yLnRzIiwid2VicGFjazovL3NpbXVsYXRpb25fb2ZfcHVzaGRvd25fYXV0b21hdGEvLi9zcmMvcHVzaGRvd25BdXRvbWF0YVR5cGVzLnRzIiwid2VicGFjazovL3NpbXVsYXRpb25fb2ZfcHVzaGRvd25fYXV0b21hdGEvLi9zcmMvc3RhY2sudHMiLCJ3ZWJwYWNrOi8vc2ltdWxhdGlvbl9vZl9wdXNoZG93bl9hdXRvbWF0YS8uL3NyYy91aS50cyIsIndlYnBhY2s6Ly9zaW11bGF0aW9uX29mX3B1c2hkb3duX2F1dG9tYXRhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NpbXVsYXRpb25fb2ZfcHVzaGRvd25fYXV0b21hdGEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NpbXVsYXRpb25fb2ZfcHVzaGRvd25fYXV0b21hdGEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zaW11bGF0aW9uX29mX3B1c2hkb3duX2F1dG9tYXRhL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2ltdWxhdGlvbl9vZl9wdXNoZG93bl9hdXRvbWF0YS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGl2QXV0b21hdGFEZWZpbml0aW9uOiBIVE1MRGl2RWxlbWVudDtcclxudmFyIGRpdlRyYW5zaXRpb25IaXN0b3J5OiBIVE1MRGl2RWxlbWVudDtcclxuXHJcbmZ1bmN0aW9uIGluZm9EaXZTd2l0Y2goZGl2OiBIVE1MRGl2RWxlbWVudCk6IHZvaWQge1xyXG4gICAgZGl2LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XHJcbiAgICBkaXYuY2xhc3NMaXN0LnRvZ2dsZShcImFic29sdXRlXCIpO1xyXG4gICAgZGl2LmNsYXNzTGlzdC50b2dnbGUoXCJ0b3AtMFwiKTtcclxuICAgIGRpdi5jbGFzc0xpc3QudG9nZ2xlKFwiYm90dG9tLTBcIik7XHJcbiAgICBkaXYuY2xhc3NMaXN0LnRvZ2dsZShcImxlZnQtMFwiKTtcclxuICAgIGRpdi5jbGFzc0xpc3QudG9nZ2xlKFwiLXJpZ2h0LTIwXCIpO1xyXG4gICAgZGl2LmNsYXNzTGlzdC50b2dnbGUoXCItdHJhbnNsYXRlLXgtMjBcIik7XHJcbiAgICBkaXYuY2xhc3NMaXN0LnRvZ2dsZShcIm1kOi1yaWdodC0wXCIpO1xyXG4gICAgZGl2LmNsYXNzTGlzdC50b2dnbGUoXCJtZDotdHJhbnNsYXRlLXgtMFwiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckV2ZW50cygpOiB2b2lkIHtcclxuICAgIGRpdkF1dG9tYXRhRGVmaW5pdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXV0b21hdGFEZWZpbml0aW9uRGl2XCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgZGl2VHJhbnNpdGlvbkhpc3RvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYW5zaXRpb25IaXN0b3J5RGl2XCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXV0b21hdGFEZWZpbml0aW9uQnV0dG9uXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGRpdkF1dG9tYXRhRGVmaW5pdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIGRpdlRyYW5zaXRpb25IaXN0b3J5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhbnNpdGlvbkhpc3RvcnlCdXR0b25cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgZGl2VHJhbnNpdGlvbkhpc3Rvcnkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIGRpdkF1dG9tYXRhRGVmaW5pdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3dJbmZvQnV0dG9uXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGxldCBpbmZvRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvRGl2XCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIGluZm9EaXZTd2l0Y2goaW5mb0Rpdik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZGVJbmZvQnV0dG9uXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGxldCBpbmZvRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvRGl2XCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIGluZm9EaXZTd2l0Y2goaW5mb0Rpdik7XHJcbiAgICB9KTtcclxufSIsImltcG9ydCB7IFN0YXRlLCBJbnB1dFN5bWJvbCwgU3RhY2tTeW1ib2wsIFRyYW5zaXRpb25GdW5jdGlvbiB9IGZyb20gXCIuL3B1c2hkb3duQXV0b21hdGFUeXBlc1wiO1xyXG5pbXBvcnQgeyBjb21wYXJlU3RhdGUsIGNvbXBhcmVJbnB1dFN5bWJvbCwgY29tcGFyZVN0YWNrU3ltYm9sIH0gZnJvbSBcIi4vcHVzaGRvd25BdXRvbWF0YVR5cGVzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHVzaGRvd25BdXRvbWF0YXtcclxuICAgIHN0YXRlczogU3RhdGVbXTtcclxuICAgIGlucHV0U3ltYm9sczogSW5wdXRTeW1ib2xbXTtcclxuICAgIHN0YWNrU3ltYm9sczogU3RhY2tTeW1ib2xbXTtcclxuICAgIGluaXRpYWxTdGF0ZTogU3RhdGU7XHJcbiAgICBpbml0aWFsU3RhY2tTeW1ib2w6IFN0YWNrU3ltYm9sIHwgbnVsbDtcclxuICAgIGFjY2VwdGluZ1N0YXRlOiBTdGF0ZVtdIHwgbnVsbDtcclxuICAgIHRyYW5zaXRpb25GdW5jdGlvbjogVHJhbnNpdGlvbkZ1bmN0aW9uW107XHJcbiAgICBjb25zdHJ1Y3RvcihzdGF0ZXM6IFN0YXRlW10sIGlucHV0U3ltYm9sczogSW5wdXRTeW1ib2xbXSwgc3RhY2tTeW1ib2xzOiBTdGFja1N5bWJvbFtdLCBpbml0aWFsU3RhdGU6IFN0YXRlLCBpbml0aWFsU3RhY2tTeW1ib2w6IFN0YWNrU3ltYm9sLCBhY2NlcHRpbmdTdGF0ZTogU3RhdGVbXSB8IG51bGwsIHRyYW5zaXRpb25GdW5jdGlvbjogVHJhbnNpdGlvbkZ1bmN0aW9uW10pXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZXMgPSBzdGF0ZXM7XHJcbiAgICAgICAgdGhpcy5pbnB1dFN5bWJvbHMgPSBpbnB1dFN5bWJvbHM7XHJcbiAgICAgICAgdGhpcy5zdGFja1N5bWJvbHMgPSBzdGFja1N5bWJvbHM7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsU3RhdGUgPSBpbml0aWFsU3RhdGU7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsU3RhY2tTeW1ib2wgPSBpbml0aWFsU3RhY2tTeW1ib2w7XHJcbiAgICAgICAgdGhpcy5hY2NlcHRpbmdTdGF0ZSA9IGFjY2VwdGluZ1N0YXRlO1xyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uID0gdHJhbnNpdGlvbkZ1bmN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGVFeGlzdHMoc3RhdGU6IFN0YXRlKTogYm9vbGVhbntcclxuICAgICAgICBmb3IobGV0IHMgb2YgdGhpcy5zdGF0ZXMpe1xyXG4gICAgICAgICAgICBpZihjb21wYXJlU3RhdGUocywgc3RhdGUpKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbnB1dFN5bWJvbEV4aXN0cyhpbnB1dFN5bWJvbDogSW5wdXRTeW1ib2wpOiBib29sZWFue1xyXG4gICAgICAgIGZvcihsZXQgaSBvZiB0aGlzLmlucHV0U3ltYm9scyl7XHJcbiAgICAgICAgICAgIGlmKGNvbXBhcmVJbnB1dFN5bWJvbChpLCBpbnB1dFN5bWJvbCkpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YWNrU3ltYm9sRXhpc3RzKHN0YWNrU3ltYm9sOiBTdGFja1N5bWJvbCk6IGJvb2xlYW57XHJcbiAgICAgICAgZm9yKGxldCBzIG9mIHRoaXMuc3RhY2tTeW1ib2xzKXtcclxuICAgICAgICAgICAgaWYoY29tcGFyZVN0YWNrU3ltYm9sKHMsIHN0YWNrU3ltYm9sKSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrU3RhdGVzRXhpc3RlbmNlKCkgOltzdHJpbmcsIFN0YXRlXVtde1xyXG4gICAgICAgIHZhciBlcnJvck1zZyA6W3N0cmluZywgU3RhdGVdW10gPSBbXTtcclxuXHJcbiAgICAgICAgaWYoIXRoaXMuc3RhdGVFeGlzdHModGhpcy5pbml0aWFsU3RhdGUpKXtcclxuICAgICAgICAgICAgZXJyb3JNc2cucHVzaChbXCJJbml0aWFsIHN0YXRlIGRvZXMgbm90IGV4aXN0XCIsIHRoaXMuaW5pdGlhbFN0YXRlXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmFjY2VwdGluZ1N0YXRlICE9IG51bGwpe1xyXG4gICAgICAgICAgICBmb3IobGV0IGZpbmFsU3RhdGUgb2YgdGhpcy5hY2NlcHRpbmdTdGF0ZSl7XHJcbiAgICAgICAgICAgICAgICBpZighdGhpcy5zdGF0ZUV4aXN0cyhmaW5hbFN0YXRlKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNc2cucHVzaChbXCJBY2NlcHRpbmcgc3RhdGUgZG9lcyBub3QgZXhpc3RcIiwgZmluYWxTdGF0ZV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZXJyb3JNc2c7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNoZWNrU3ltYm9sRXhpc3RlbmNlKCkgOltzdHJpbmcsIFN0YWNrU3ltYm9sXVtde1xyXG4gICAgICAgIHZhciBlcnJvck1zZyA6W3N0cmluZywgU3RhY2tTeW1ib2xdW10gPSBbXTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5pbml0aWFsU3RhY2tTeW1ib2wgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLnN0YWNrU3ltYm9sRXhpc3RzKHRoaXMuaW5pdGlhbFN0YWNrU3ltYm9sKSl7XHJcbiAgICAgICAgICAgICAgICBlcnJvck1zZy5wdXNoKFtcIkluaXRpYWwgc3RhY2sgc3ltYm9sIGRvZXMgbm90IGV4aXN0XCIsIHRoaXMuaW5pdGlhbFN0YWNrU3ltYm9sXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBlcnJvck1zZztcclxuICAgIH1cclxuICAgIFxyXG4gICAgY2hlY2tUcmFuc2l0aW9uRnVuY3Rpb25zKCkgOltzdHJpbmcsIFRyYW5zaXRpb25GdW5jdGlvbl1bXXtcclxuICAgICAgICB2YXIgZXJyb3JNc2cgOltzdHJpbmcsIFRyYW5zaXRpb25GdW5jdGlvbl1bXSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IobGV0IHRyYW5zaXRpb25GdW5jdGlvbiBvZiB0aGlzLnRyYW5zaXRpb25GdW5jdGlvbil7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLnN0YXRlRXhpc3RzKHRyYW5zaXRpb25GdW5jdGlvbi5mcm9tU3RhdGUpKXtcclxuICAgICAgICAgICAgICAgIGVycm9yTXNnLnB1c2goW1wiRnJvbSBzdGF0ZSBkb2VzIG5vdCBleGlzdFwiLCB0cmFuc2l0aW9uRnVuY3Rpb25dKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoIXRoaXMuaW5wdXRTeW1ib2xFeGlzdHModHJhbnNpdGlvbkZ1bmN0aW9uLmlucHV0U3ltYm9sKSl7XHJcbiAgICAgICAgICAgICAgICBlcnJvck1zZy5wdXNoKFtcIklucHV0IHN5bWJvbCBkb2VzIG5vdCBleGlzdFwiLCB0cmFuc2l0aW9uRnVuY3Rpb25dKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodHJhbnNpdGlvbkZ1bmN0aW9uLnN0YXJ0U3ltYm9sICE9IG51bGwgJiYgIXRoaXMuc3RhY2tTeW1ib2xFeGlzdHModHJhbnNpdGlvbkZ1bmN0aW9uLnN0YXJ0U3ltYm9sKSl7XHJcbiAgICAgICAgICAgICAgICBlcnJvck1zZy5wdXNoKFtcIlN0YWNrIHN5bWJvbCBkb2VzIG5vdCBleGlzdFwiLCB0cmFuc2l0aW9uRnVuY3Rpb25dKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoIXRoaXMuc3RhdGVFeGlzdHModHJhbnNpdGlvbkZ1bmN0aW9uLnRvU3RhdGUpKXtcclxuICAgICAgICAgICAgICAgIGVycm9yTXNnLnB1c2goW1wiVG8gc3RhdGUgZG9lcyBub3QgZXhpc3RcIiwgdHJhbnNpdGlvbkZ1bmN0aW9uXSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgcHVzaGVkU3ltYm9sIG9mIHRyYW5zaXRpb25GdW5jdGlvbi5wdXNoZWRTeW1ib2xzKXtcclxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLnN0YWNrU3ltYm9sRXhpc3RzKHB1c2hlZFN5bWJvbCkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTXNnLnB1c2goW1wiUHVzaGVkIHN5bWJvbCBkb2VzIG5vdCBleGlzdFwiLCB0cmFuc2l0aW9uRnVuY3Rpb25dKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGVycm9yTXNnO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrSW5wdXRUYXBlVmFsaWRpdHkoaW5wdXRUYXBlOiBzdHJpbmcpOiBzdHJpbmdbXXtcclxuICAgICAgICBsZXQgaW52YWxpZFN5bWJvbHM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHN5bWJvbHMgPSBuZXcgU2V0KGlucHV0VGFwZS5zcGxpdChcIlwiKSk7XHJcblxyXG4gICAgICAgIGZvcihsZXQgcyBvZiBzeW1ib2xzKXtcclxuICAgICAgICAgICAgbGV0IGludmFsaWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgICAgICAgICBmb3IobGV0IGlucHV0U3ltYm9sIG9mIHRoaXMuaW5wdXRTeW1ib2xzKXtcclxuICAgICAgICAgICAgICAgIGlmKGlucHV0U3ltYm9sLmlzRXBzeWxvbiA9PSBmYWxzZSAmJiBpbnB1dFN5bWJvbC52YWx1ZSA9PSBzKXtcclxuICAgICAgICAgICAgICAgICAgICBpbnZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoaW52YWxpZCl7XHJcbiAgICAgICAgICAgICAgICBpbnZhbGlkU3ltYm9scy5wdXNoKHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaW52YWxpZFN5bWJvbHM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VHJhbnNpdGlvbkZ1bmN0aW9ucyh0YXBlU3ltYm9sOiBzdHJpbmcsIHN0YXRlOiBTdGF0ZSwgc3RhY2tTeW1ib2w6ICBTdGFja1N5bWJvbCB8IG51bGwpOiBUcmFuc2l0aW9uRnVuY3Rpb25bXXtcclxuICAgICAgICBsZXQgcG9zc2libGVUcmFuc2l0aW9uRnVuY3Rpb25zOiBUcmFuc2l0aW9uRnVuY3Rpb25bXSA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgaW5wdXRTeW1ib2w6IElucHV0U3ltYm9sO1xyXG4gICAgICAgIGlmKHRhcGVTeW1ib2wgPT09IFwiXCIpe1xyXG4gICAgICAgICAgICBpbnB1dFN5bWJvbCA9IHtpc0Vwc3lsb246IHRydWV9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGlucHV0U3ltYm9sID0ge2lzRXBzeWxvbjogZmFsc2UsIHZhbHVlOiB0YXBlU3ltYm9sfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCB0cmFuc2l0aW9uRnVuY3Rpb24gb2YgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb24pe1xyXG4gICAgICAgICAgICBpZighY29tcGFyZUlucHV0U3ltYm9sKGlucHV0U3ltYm9sLCB0cmFuc2l0aW9uRnVuY3Rpb24uaW5wdXRTeW1ib2wpKXtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCFjb21wYXJlU3RhdGUoc3RhdGUsIHRyYW5zaXRpb25GdW5jdGlvbi5mcm9tU3RhdGUpKXtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCFjb21wYXJlU3RhY2tTeW1ib2woc3RhY2tTeW1ib2wsIHRyYW5zaXRpb25GdW5jdGlvbi5zdGFydFN5bWJvbCkpe1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcG9zc2libGVUcmFuc2l0aW9uRnVuY3Rpb25zLnB1c2godHJhbnNpdGlvbkZ1bmN0aW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwb3NzaWJsZVRyYW5zaXRpb25GdW5jdGlvbnM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTdGFjayB9IGZyb20gXCIuL3N0YWNrXCI7XHJcbmltcG9ydCB7IFN0YWNrU3ltYm9sLCBTdGF0ZSwgVHJhbnNpdGlvbkZ1bmN0aW9uIH0gZnJvbSBcIi4vcHVzaGRvd25BdXRvbWF0YVR5cGVzXCI7XHJcbmltcG9ydCB7IGNvbXBhcmVTdGF0ZSB9IGZyb20gXCIuL3B1c2hkb3duQXV0b21hdGFUeXBlc1wiO1xyXG5pbXBvcnQgeyBQdXNoZG93bkF1dG9tYXRhIH0gZnJvbSBcIi4vcHVzaGRvd25BdXRvbWF0YVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFB1c2hkb3duQXV0b21hdGFTaW11bGF0b3J7XHJcbiAgICBpbnB1dFRhcGU6IHN0cmluZztcclxuICAgIHN0YWNrOiBTdGFjazxTdGFja1N5bWJvbD47XHJcbiAgICBjdXJyZW50U3RhdGU6IFN0YXRlO1xyXG4gICAgYWNjZXB0aW5nU3RhdGU6IFN0YXRlW10gfCBudWxsO1xyXG4gICAgYXV0b21hdGE6IFB1c2hkb3duQXV0b21hdGE7XHJcbiAgICBoaXN0b3J5OiBUcmFuc2l0aW9uRnVuY3Rpb25bXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGF1dG9tYXRhOiBQdXNoZG93bkF1dG9tYXRhKXtcclxuICAgICAgICB0aGlzLmF1dG9tYXRhID0gYXV0b21hdGE7XHJcbiAgICAgICAgdGhpcy5pbnB1dFRhcGUgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuc3RhY2sgPSBuZXcgU3RhY2s8U3RhY2tTeW1ib2w+KCk7XHJcbiAgICAgICAgaWYodGhpcy5hdXRvbWF0YS5pbml0aWFsU3RhY2tTeW1ib2wgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhY2sucHVzaCh0aGlzLmF1dG9tYXRhLmluaXRpYWxTdGFja1N5bWJvbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gdGhpcy5hdXRvbWF0YS5pbml0aWFsU3RhdGU7XHJcbiAgICAgICAgdGhpcy5hY2NlcHRpbmdTdGF0ZSA9IHRoaXMuYXV0b21hdGEuYWNjZXB0aW5nU3RhdGU7XHJcbiAgICAgICAgdGhpcy5oaXN0b3J5ID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXQoKTogdm9pZHtcclxuICAgICAgICB0aGlzLmlucHV0VGFwZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5zdGFjay5jbGVhcigpO1xyXG4gICAgICAgIGlmKHRoaXMuYXV0b21hdGEuaW5pdGlhbFN0YWNrU3ltYm9sICE9IG51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLnN0YWNrLnB1c2godGhpcy5hdXRvbWF0YS5pbml0aWFsU3RhY2tTeW1ib2wpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IHRoaXMuYXV0b21hdGEuaW5pdGlhbFN0YXRlO1xyXG4gICAgICAgIHRoaXMuYWNjZXB0aW5nU3RhdGUgPSB0aGlzLmF1dG9tYXRhLmFjY2VwdGluZ1N0YXRlO1xyXG4gICAgICAgIHRoaXMuaGlzdG9yeSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcGx5VHJhbnNpdGlvbkZ1bmN0aW9uKGY6IFRyYW5zaXRpb25GdW5jdGlvbik6IHZvaWR7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBcHBseWluZyB0cmFuc2l0aW9uIGZ1bmN0aW9uOlwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhmKTtcclxuICAgICAgICB0aGlzLmlucHV0VGFwZSA9IHRoaXMuaW5wdXRUYXBlLnN1YnN0cmluZygxKTtcclxuICAgICAgICB0aGlzLnN0YWNrLnBvcCgpO1xyXG4gICAgICAgIGZvcihsZXQgcyBvZiBmLnB1c2hlZFN5bWJvbHMpe1xyXG4gICAgICAgICAgICB0aGlzLnN0YWNrLnB1c2gocyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gZi50b1N0YXRlO1xyXG4gICAgICAgIHRoaXMuaGlzdG9yeS5wdXNoKGYpO1xyXG4gICAgICAgIC8vVE9ETyBtb2RpZnkgVUlcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0lucHV0VGFwZVZhbGlkaXR5KCk6IHZvaWR7XHJcbiAgICAgICAgbGV0IGludmFsaWRTeW1ib2xzOiBzdHJpbmdbXSA9IHRoaXMuYXV0b21hdGEuY2hlY2tJbnB1dFRhcGVWYWxpZGl0eSh0aGlzLmlucHV0VGFwZSk7XHJcbiAgICAgICAgaWYoaW52YWxpZFN5bWJvbHMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgaW5wdXQgdGFwZTogXCIgKyBpbnZhbGlkU3ltYm9scy5qb2luKFwiLCBcIikpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhY2NlcHRlZElucHV0KCk6IGJvb2xlYW57XHJcbiAgICAgICAgaWYodGhpcy5pbnB1dFRhcGUgIT09IFwiXCIpe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmFjY2VwdGluZ1N0YXRlID09IG51bGwpe1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGFjay5lbXB0eSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBmb3IobGV0IHMgb2YgdGhpcy5hY2NlcHRpbmdTdGF0ZSl7XHJcbiAgICAgICAgICAgIGlmKGNvbXBhcmVTdGF0ZShzLCB0aGlzLmN1cnJlbnRTdGF0ZSkpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0U3RlcCgpOiB2b2lke1xyXG4gICAgICAgIGxldCByZXN1bHQ6IGJvb2xlYW4gPSB0aGlzLmFjY2VwdGVkSW5wdXQoKTtcclxuXHJcbiAgICAgICAgaWYocmVzdWx0KXtcclxuICAgICAgICAgICAgLy9UT0RPIHJhaXNlIGFsZXJ0IC0gYWNjZXB0ZWRcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW5wdXQgYWxyZWFkeSBhY2NlcHRlZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuaW5wdXRUYXBlID09PSBcIlwiKXtcclxuICAgICAgICAgICAgLy9UT0RPIHJhaXNlIGFsZXJ0IC0gbm8gbW9yZSBpbnB1dCAvIG5vdCBhY2NlcHRlZFxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBtb3JlIGlucHV0XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHBvc3NpYmxlVHJhbnNpdGlvbkZ1bmN0aW9uczogVHJhbnNpdGlvbkZ1bmN0aW9uW10gPSB0aGlzLmF1dG9tYXRhLmdldFRyYW5zaXRpb25GdW5jdGlvbnModGhpcy5pbnB1dFRhcGVbMF0sIHRoaXMuY3VycmVudFN0YXRlLCB0aGlzLnN0YWNrLnRvcCgpKTtcclxuXHJcbiAgICAgICAgaWYocG9zc2libGVUcmFuc2l0aW9uRnVuY3Rpb25zLmxlbmd0aCA9PT0gMCl7XHJcbiAgICAgICAgICAgIC8vVE9ETyByYWlzZSBhbGVydCAtIG5vIHBvc3NpYmxlIHRyYW5zaXRpb24gZnVuY3Rpb25cclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gcG9zc2libGUgdHJhbnNpdGlvbiBmdW5jdGlvblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihwb3NzaWJsZVRyYW5zaXRpb25GdW5jdGlvbnMubGVuZ3RoID09IDEpe1xyXG4gICAgICAgICAgICB0aGlzLmFwcGx5VHJhbnNpdGlvbkZ1bmN0aW9uKHBvc3NpYmxlVHJhbnNpdGlvbkZ1bmN0aW9uc1swXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIC8vVE9ETyByYWlzZSBhbGVydCAtIG11bHRpcGxlIHRyYW5zaXRpb24gZnVuY3Rpb25zXHJcbiAgICAgICAgICAgIC8vIEFuZCBsZXQgdGhlIHVzZXIgY2hvb3NlXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk11bHRpcGxlIHRyYW5zaXRpb24gZnVuY3Rpb25zXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBiYWNrU3RlcCgpOiB2b2lke1xyXG4gICAgICAgIGlmKHRoaXMuaGlzdG9yeS5sZW5ndGggPT09IDApe1xyXG4gICAgICAgICAgICAvL1RPRE8gcmFpc2UgYWxlcnQgLSBubyBoaXN0b3J5IGF2YWlsYWJsZVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBwcmV2aW91cyBzdGVwXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGxhc3Q6IFRyYW5zaXRpb25GdW5jdGlvbiA9IHRoaXMuaGlzdG9yeS5wb3AoKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IGxhc3QuZnJvbVN0YXRlO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsYXN0LnB1c2hlZFN5bWJvbHMubGVuZ3RoOyBpKyspeyBcclxuICAgICAgICAgICAgdGhpcy5zdGFjay5wb3AoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGFjay5wdXNoKGxhc3Quc3RhcnRTeW1ib2wpO1xyXG4gICAgICAgIHRoaXMuaW5wdXRUYXBlID0gbGFzdC5pbnB1dFN5bWJvbD8udmFsdWUgKyB0aGlzLmlucHV0VGFwZTtcclxuICAgICAgICAvL1RPRE8gbW9kaWZ5IFVJXHJcbiAgICB9XHJcblxyXG4gICAgc2V0TmV3SW5wdXQoaW5wdXQ6IHN0cmluZyk6IHZvaWR7XHJcbiAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgICAgIHRoaXMuaW5wdXRUYXBlID0gaW5wdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy9UT0RPIENoZWNrIEF1dG9tYXRhIHZhbGlkaXR5XHJcbn0iLCJpbXBvcnQgeyBTdGFjayB9IGZyb20gXCIuL3N0YWNrXCI7XHJcblxyXG5leHBvcnQgdHlwZSBTdGFja1N5bWJvbCA9IHtcclxuICAgIHZhbHVlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlU3RhY2tTeW1ib2woYTogU3RhY2tTeW1ib2wgfCBudWxsLCBiOiBTdGFja1N5bWJvbCB8IG51bGwpOiBib29sZWFue1xyXG4gICAgaWYoYSAhPSBudWxsICYmIHR5cGVvZihhKSA9PSB0eXBlb2YoYikpe1xyXG4gICAgICAgIHJldHVybiBhLnZhbHVlID09IGIudmFsdWU7XHJcbiAgICB9XHJcbiAgICBpZihhID09IG51bGwgJiYgYiA9PSBudWxsKXtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgSW5wdXRTeW1ib2wgPSB7XHJcbiAgICBpc0Vwc3lsb246IGJvb2xlYW47XHJcbiAgICB2YWx1ZT86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVJbnB1dFN5bWJvbChhOiBJbnB1dFN5bWJvbCwgYjogSW5wdXRTeW1ib2wpOiBib29sZWFue1xyXG4gICAgaWYoYS5pc0Vwc3lsb24gPT0gYi5pc0Vwc3lsb24pe1xyXG4gICAgICAgIGlmKGEuaXNFcHN5bG9uID09IGZhbHNlKXtcclxuICAgICAgICAgICAgcmV0dXJuIGEudmFsdWUgPT0gYi52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBTdGF0ZSA9IHtcclxuICAgIHZhbHVlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlU3RhdGUoYTogU3RhdGUsIGI6IFN0YXRlKTogYm9vbGVhbntcclxuICAgIHJldHVybiBhLnZhbHVlID09IGIudmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFRyYW5zaXRpb25GdW5jdGlvbiA9IHtcclxuICAgIGZyb21TdGF0ZTogU3RhdGU7XHJcbiAgICBpbnB1dFN5bWJvbDogSW5wdXRTeW1ib2w7XHJcbiAgICBzdGFydFN5bWJvbDogU3RhY2tTeW1ib2wgfCBudWxsO1xyXG4gICAgdG9TdGF0ZTogU3RhdGU7XHJcbiAgICBwdXNoZWRTeW1ib2xzOiBTdGFja1N5bWJvbFtdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZVRyYW5zaXRpb25GdW5jdGlvbihhOiBUcmFuc2l0aW9uRnVuY3Rpb24sIGI6IFRyYW5zaXRpb25GdW5jdGlvbik6IGJvb2xlYW57XHJcbiAgICAvL2Zyb21TdGF0ZVxyXG4gICAgaWYoIWNvbXBhcmVTdGF0ZShhLmZyb21TdGF0ZSwgYi5mcm9tU3RhdGUpKXtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy9pbXB1dFN5bWJvbFxyXG4gICAgaWYoIWNvbXBhcmVJbnB1dFN5bWJvbChhLmlucHV0U3ltYm9sLCBiLmlucHV0U3ltYm9sKSl7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vc3RhcnRTeW1ib2xcclxuICAgIGlmKHR5cGVvZihhLnN0YXJ0U3ltYm9sKSAhPSB0eXBlb2YoYi5zdGFydFN5bWJvbCkpe1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmKGEuc3RhcnRTeW1ib2wgIT0gbnVsbCAmJiAhY29tcGFyZVN0YWNrU3ltYm9sKGEuc3RhcnRTeW1ib2wsIGIuc3RhcnRTeW1ib2wpKXtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy90b1N0YXRlXHJcbiAgICBpZighY29tcGFyZVN0YXRlKGEudG9TdGF0ZSwgYi50b1N0YXRlKSl7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vcHVzaGVkU3ltYm9sc1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGEucHVzaGVkU3ltYm9scy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgaWYoIWNvbXBhcmVTdGFja1N5bWJvbChhLnB1c2hlZFN5bWJvbHNbaV0sIGIucHVzaGVkU3ltYm9sc1tpXSkpe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG59IiwiaW50ZXJmYWNlIElTdGFjazxUPiB7XHJcbiAgICBwb3AoKTogdm9pZDtcclxuICAgIHB1c2goaXRlbTogVCk6IHZvaWQ7XHJcbiAgICB0b3AoKTogVCB8IG51bGw7XHJcbiAgICBlbXB0eSgpOiBib29sZWFuO1xyXG4gICAgc2l6ZSgpOiBudW1iZXI7XHJcbiAgICBjbGVhcigpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3RhY2s8VD4gaW1wbGVtZW50cyBJU3RhY2s8VD4ge1xyXG4gICAgcHJpdmF0ZSBkYXRhOiBUW10gPSBbXTtcclxuXHJcbiAgICBwb3AoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kYXRhLnBvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1c2goaXRlbTogVCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGF0YS5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRvcCgpOiBUIHwgbnVsbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVt0aGlzLmRhdGEubGVuZ3RoIC0gMV0gPz8gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBlbXB0eSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmxlbmd0aCA9PT0gMDtcclxuICAgIH1cclxuXHJcbiAgICBzaXplKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgcHJpbnQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQdXNoZG93bkF1dG9tYXRhU2ltdWxhdG9yIH0gZnJvbSBcIi4vcHVzaGRvd25BdXRvbWF0YVNpbXVsYXRvclwiO1xyXG5pbXBvcnQgeyBQdXNoZG93bkF1dG9tYXRhIH0gZnJvbSBcIi4vcHVzaGRvd25BdXRvbWF0YVwiO1xyXG5pbXBvcnQgeyBUcmFuc2l0aW9uRnVuY3Rpb24sIElucHV0U3ltYm9sLCBTdGFja1N5bWJvbCwgU3RhdGUgfSBmcm9tIFwiLi9wdXNoZG93bkF1dG9tYXRhVHlwZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBVSXtcclxuICAgIHNpbXVsYXRvcj86IFB1c2hkb3duQXV0b21hdGFTaW11bGF0b3I7XHJcbiAgICB0cmFuc3RpdGlvbkhpc3Rvcnk/OiBIVE1MRGl2RWxlbWVudDtcclxuICAgIHRhcGU/OiBIVE1MRGl2RWxlbWVudDtcclxuICAgIHN0YWNrPzogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBzdGF0ZT86IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGF1dG9tYXRhPzogUHVzaGRvd25BdXRvbWF0YSl7XHJcbiAgICAgICAgaWYoYXV0b21hdGEpe1xyXG4gICAgICAgICAgICB0aGlzLnNldEF1dG9tYXRhKGF1dG9tYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5maWxsSW5mb3JtYXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50cmFuc3RpdGlvbkhpc3RvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYW5zaXRpb25IaXN0b3J5RGl2XCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIHRoaXMudGFwZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFwZURpdlwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICB0aGlzLnN0YWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFja0RpdlwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICB0aGlzLnN0YXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGF0ZURpdlwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBdXRvbWF0YShhdXRvbWF0YTogUHVzaGRvd25BdXRvbWF0YSk6IHZvaWR7XHJcbiAgICAgICAgdGhpcy5zaW11bGF0b3IgPSBuZXcgUHVzaGRvd25BdXRvbWF0YVNpbXVsYXRvcihhdXRvbWF0YSk7XHJcbiAgICAgICAgdGhpcy5maWxsSW5mb3JtYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdlbmVyYXRlVHJhbnNpdGlvbkZ1bmN0aW9uKGY6IFRyYW5zaXRpb25GdW5jdGlvbik6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgICAgICBsZXQgcmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICByZXMuY2xhc3NMaXN0LmFkZChcImZsZXhcIiwgXCJmbGV4LXJvd1wiLCBcImZsZXgtbm93cmFwXCIsIFwianVzdGlmeS1jZW50ZXJcIiwgXCJwdC0zXCIpO1xyXG5cclxuICAgICAgICBsZXQgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgbGVmdC5pbm5lclRleHQgPSBmLmZyb21TdGF0ZS52YWx1ZSArIFwiIFwiICsgZi5zdGFydFN5bWJvbC52YWx1ZSA/PyBcIlwiO1xyXG4gICAgICAgIHJlcy5hcHBlbmQobGVmdCk7XHJcblxyXG4gICAgICAgIGxldCBhcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgYXJyb3cuY2xhc3NMaXN0LmFkZChcInB4LTFcIiwgXCJyZWxhdGl2ZVwiKTtcclxuICAgICAgICBhcnJvdy5pbm5lclRleHQgPSBcIuKUgOKUgD5cIjtcclxuICAgICAgICByZXMuYXBwZW5kKGFycm93KTtcclxuXHJcbiAgICAgICAgbGV0IHN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgc3ltYm9sLmNsYXNzTGlzdC5hZGQoXCJhYnNvbHV0ZVwiLCBcInRvcC0wXCIsIFwibGVmdC0xLzJcIiwgXCItdHJhbnNsYXRlLXgtWzEwMCVdXCIsIFwiLXRyYW5zbGF0ZS15LTJcIik7XHJcbiAgICAgICAgc3ltYm9sLmlubmVyVGV4dCA9IGYuaW5wdXRTeW1ib2wuaXNFcHN5bG9uID8gXCLOtVwiIDogZi5pbnB1dFN5bWJvbC52YWx1ZTtcclxuICAgICAgICBhcnJvdy5hcHBlbmQoc3ltYm9sKTtcclxuXHJcbiAgICAgICAgbGV0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICByaWdodC5pbm5lclRleHQgPSBmLnRvU3RhdGUudmFsdWUgKyBcIiBcIiArIGYucHVzaGVkU3ltYm9scy5tYXAocyA9PiBzLnZhbHVlKS5qb2luKFwiXCIpO1xyXG4gICAgICAgIHJlcy5hcHBlbmQocmlnaHQpO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbGxJbmZvcm1hdGlvbigpOiB2b2lke1xyXG4gICAgICAgIC8vU3RhdGVzXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvU3RhdGVzXCIpIS5pbm5lclRleHQgPSB0aGlzLnNpbXVsYXRvcj8uYXV0b21hdGEuc3RhdGVzLm1hcCgocykgPT4gcy52YWx1ZSkuam9pbihcIiwgXCIpO1xyXG4gICAgICAgIC8vSW5wdXQgc3ltYm9sc1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mb0lucHV0U3ltYm9sc1wiKSEuaW5uZXJUZXh0ID0gdGhpcy5zaW11bGF0b3I/LmF1dG9tYXRhLmlucHV0U3ltYm9scy5tYXAoKHMpID0+IHMudmFsdWUpLmpvaW4oXCIsIFwiKTtcclxuICAgICAgICAvL1N0YWNrIHN5bWJvbHNcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm9TdGFja1N5bWJvbHNcIikhLmlubmVyVGV4dCA9IHRoaXMuc2ltdWxhdG9yPy5hdXRvbWF0YS5zdGFja1N5bWJvbHMubWFwKChzKSA9PiBzLnZhbHVlKS5qb2luKFwiLCBcIik7XHJcbiAgICAgICAgLy9Jbml0aWFsIHN0YXRlXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvSW5pdGlhbFN0YXRlXCIpIS5pbm5lclRleHQgPSB0aGlzLnNpbXVsYXRvcj8uYXV0b21hdGEuaW5pdGlhbFN0YXRlLnZhbHVlO1xyXG4gICAgICAgIC8vSW5pdGlhbCBzdGFjayBzeW1ib2xcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm9Jbml0aWFsU3RhY2tTeW1ib2xcIikhLmlubmVyVGV4dCA9IHRoaXMuc2ltdWxhdG9yPy5hdXRvbWF0YS5pbml0aWFsU3RhY2tTeW1ib2w/LnZhbHVlID8/IFwiRW1wdHkgc3RhY2tcIjtcclxuICAgICAgICAvL0FjY2VwdGluZyBzdGF0ZXNcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm9BY2NlcHRpbmdTdGF0ZVwiKSEuaW5uZXJUZXh0ID0gdGhpcy5zaW11bGF0b3I/LmF1dG9tYXRhLmFjY2VwdGluZ1N0YXRlPy5tYXAoKHMpID0+IHMudmFsdWUpLmpvaW4oXCIsIFwiKSA/PyBcIkFjY2VwdGFuY2UgYnkgRW1wdHkgU3RhY2tcIjtcclxuICAgICAgICAvL1RyYW5zaXRpb24gZnVuY3Rpb25zXHJcbiAgICAgICAgbGV0IHRGdW5jdGlvbiA9ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm9UcmFuc3Rpb25GdW5jdGlvblwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICB0RnVuY3Rpb24uaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBmb3IobGV0IGYgb2YgdGhpcy5zaW11bGF0b3I/LmF1dG9tYXRhLnRyYW5zaXRpb25GdW5jdGlvbiA/PyBbXSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGYpO1xyXG4gICAgICAgICAgICB0RnVuY3Rpb24uYXBwZW5kKHRoaXMuZ2VuZXJhdGVUcmFuc2l0aW9uRnVuY3Rpb24oZikpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGRUb0hpc3RvcnkoZjogVHJhbnNpdGlvbkZ1bmN0aW9uKTogdm9pZHtcclxuICAgICAgICBpZih0aGlzLnRyYW5zdGl0aW9uSGlzdG9yeSl7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnN0aXRpb25IaXN0b3J5LnByZXBlbmQodGhpcy5nZW5lcmF0ZVRyYW5zaXRpb25GdW5jdGlvbihmKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUZyb21IaXN0b3J5KCk6IHZvaWR7XHJcbiAgICAgICAgaWYodGhpcy50cmFuc3RpdGlvbkhpc3RvcnkgJiYgdGhpcy50cmFuc3RpdGlvbkhpc3RvcnkuY2hpbGRFbGVtZW50Q291bnQgPiAwKXtcclxuICAgICAgICAgICAgdGhpcy50cmFuc3RpdGlvbkhpc3RvcnkucmVtb3ZlQ2hpbGQodGhpcy50cmFuc3RpdGlvbkhpc3RvcnkuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZFRvVGFwZShzOiBJbnB1dFN5bWJvbCk6IHZvaWR7XHJcbiAgICAgICAgbGV0IHN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgc3ltYm9sLmNsYXNzTGlzdC5hZGQoXCJiZy1yZWQtNTAwXCIsXCJoLTE2XCIsXCJ3LTE2XCIsXCJtLTJcIixcImZsZXgtc2hyaW5rLTBcIixcImZsZXhcIixcImp1c3RpZnktY2VudGVyXCIsXCJpdGVtcy1jZW50ZXJcIilcclxuICAgICAgICBzeW1ib2wuaW5uZXJUZXh0ID0gcy52YWx1ZTtcclxuXHJcbiAgICAgICAgdGhpcy50YXBlPy5wcmVwZW5kKHN5bWJvbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlRnJvbVRhcGUoKTogdm9pZHtcclxuICAgICAgICBpZih0aGlzLnRhcGUgJiYgdGhpcy50YXBlLmNoaWxkRWxlbWVudENvdW50ID4gMCl7XHJcbiAgICAgICAgICAgIHRoaXMudGFwZS5yZW1vdmVDaGlsZCh0aGlzLnRhcGUuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVN0YXRlKHM6IFN0YXRlKTogdm9pZHtcclxuICAgICAgICBpZih0aGlzLnN0YXRlKXtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5pbm5lclRleHQgPSBzLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGRUb1N0YWNrKHM6IFN0YWNrU3ltYm9sKTogdm9pZHtcclxuICAgICAgICBsZXQgc3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICBzeW1ib2wuY2xhc3NMaXN0LmFkZChcImJnLWdyZWVuLTUwMFwiLFwiaC0xNlwiLFwidy0xNlwiLFwibS0yXCIsXCJmbGV4LXNocmluay0wXCIsXCJmbGV4XCIsXCJqdXN0aWZ5LWNlbnRlclwiLFwiaXRlbXMtY2VudGVyXCIsXCJmaXJzdDptdC1hdXRvXCIpXHJcbiAgICAgICAgc3ltYm9sLmlubmVyVGV4dCA9IHMudmFsdWU7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhY2s/LnByZXBlbmQoc3ltYm9sKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVGcm9tU3RhY2soKTogdm9pZHtcclxuICAgICAgICBpZih0aGlzLnN0YWNrICYmIHRoaXMuc3RhY2suY2hpbGRFbGVtZW50Q291bnQgPiAwKXtcclxuICAgICAgICAgICAgdGhpcy5zdGFjay5yZW1vdmVDaGlsZCh0aGlzLnN0YWNrLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgVUkgfSBmcm9tIFwiLi91aVwiO1xuaW1wb3J0IHsgUHVzaGRvd25BdXRvbWF0YVNpbXVsYXRvciB9IGZyb20gXCIuL3B1c2hkb3duQXV0b21hdGFTaW11bGF0b3JcIjtcbmltcG9ydCB7IFB1c2hkb3duQXV0b21hdGEgfSBmcm9tIFwiLi9wdXNoZG93bkF1dG9tYXRhXCI7XG5pbXBvcnQgeyByZWdpc3RlckV2ZW50cyB9IGZyb20gXCIuL2V2ZW50c1wiO1xuXG5jb25zdCBhdXRvbWF0YSA9IG5ldyBQdXNoZG93bkF1dG9tYXRhKFxuICAgIFtcbiAgICAgICAge3ZhbHVlOiBcInExXCJ9LFxuICAgICAgICB7dmFsdWU6IFwicTJcIn1cbiAgICBdLFxuICAgIFtcbiAgICAgICAge2lzRXBzeWxvbjogZmFsc2UsIHZhbHVlOiBcImFcIn0sXG4gICAgICAgIHtpc0Vwc3lsb246IGZhbHNlLCB2YWx1ZTogXCJiXCJ9XG4gICAgXSxcbiAgICBbXG4gICAgICAgIHt2YWx1ZTogXCJPXCJ9LFxuICAgICAgICB7dmFsdWU6IFwiSVwifVxuICAgIF0sXG4gICAge3ZhbHVlOiBcInExXCJ9LFxuICAgIHt2YWx1ZTogXCJPXCJ9LFxuICAgIG51bGwsXG4gICAgW1xuICAgICAgICB7XG4gICAgICAgICAgICBmcm9tU3RhdGU6IHt2YWx1ZTogXCJxMVwifSxcbiAgICAgICAgICAgIGlucHV0U3ltYm9sOiB7aXNFcHN5bG9uOiBmYWxzZSwgdmFsdWU6IFwiYVwifSxcbiAgICAgICAgICAgIHN0YXJ0U3ltYm9sOiB7dmFsdWU6IFwiT1wifSxcbiAgICAgICAgICAgIHRvU3RhdGU6IHt2YWx1ZTogXCJxMVwifSxcbiAgICAgICAgICAgIHB1c2hlZFN5bWJvbHM6IFt7dmFsdWU6IFwiSVwifV1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZnJvbVN0YXRlOiB7dmFsdWU6IFwicTFcIn0sXG4gICAgICAgICAgICBpbnB1dFN5bWJvbDoge2lzRXBzeWxvbjogZmFsc2UsIHZhbHVlOiBcImFcIn0sXG4gICAgICAgICAgICBzdGFydFN5bWJvbDoge3ZhbHVlOiBcIklcIn0sXG4gICAgICAgICAgICB0b1N0YXRlOiB7dmFsdWU6IFwicTFcIn0sXG4gICAgICAgICAgICBwdXNoZWRTeW1ib2xzOiBbe3ZhbHVlOiBcIklcIn0se3ZhbHVlOiBcIklcIn1dXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZyb21TdGF0ZToge3ZhbHVlOiBcInExXCJ9LFxuICAgICAgICAgICAgaW5wdXRTeW1ib2w6IHtpc0Vwc3lsb246IGZhbHNlLCB2YWx1ZTogXCJiXCJ9LFxuICAgICAgICAgICAgc3RhcnRTeW1ib2w6IHt2YWx1ZTogXCJJXCJ9LFxuICAgICAgICAgICAgdG9TdGF0ZToge3ZhbHVlOiBcInEyXCJ9LFxuICAgICAgICAgICAgcHVzaGVkU3ltYm9sczogW11cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZnJvbVN0YXRlOiB7dmFsdWU6IFwicTJcIn0sXG4gICAgICAgICAgICBpbnB1dFN5bWJvbDoge2lzRXBzeWxvbjogZmFsc2UsIHZhbHVlOiBcImJcIn0sXG4gICAgICAgICAgICBzdGFydFN5bWJvbDoge3ZhbHVlOiBcIklcIn0sXG4gICAgICAgICAgICB0b1N0YXRlOiB7dmFsdWU6IFwicTJcIn0sXG4gICAgICAgICAgICBwdXNoZWRTeW1ib2xzOiBbXVxuICAgICAgICB9LFxuICAgIF1cbik7XG5cbmNvbnN0IHVpOiBVSSA9IG5ldyBVSSgpO1xudWkuc2V0QXV0b21hdGEoYXV0b21hdGEpO1xuXG51aS5hZGRUb1N0YWNrKHt2YWx1ZTogXCJJXCJ9KTtcbnVpLmFkZFRvVGFwZSh7aXNFcHN5bG9uOiBmYWxzZSwgdmFsdWU6IFwiYVwifSk7XG51aS5jaGFuZ2VTdGF0ZSh7dmFsdWU6IFwicTFcIn0pO1xudWkucmVtb3ZlRnJvbVN0YWNrKCk7XG51aS5yZW1vdmVGcm9tVGFwZSgpO1xuXG4vKmxldCBmcm9udEVuZFN0cnVjdHVyZSA9IG5ldyBQdXNoZG93bkF1dG9tYXRhU2ltdWxhdG9yKGF1dG9tYXRhKTtcblxuY29uc29sZS5sb2coZnJvbnRFbmRTdHJ1Y3R1cmUuaW5wdXRUYXBlKTtcbmNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGZyb250RW5kU3RydWN0dXJlLnN0YWNrKSk7XG5jb25zb2xlLmxvZyhmcm9udEVuZFN0cnVjdHVyZS5jdXJyZW50U3RhdGUpO1xuY29uc29sZS5sb2coZnJvbnRFbmRTdHJ1Y3R1cmUuYWNjZXB0aW5nU3RhdGUpO1xuY29uc29sZS5sb2coZnJvbnRFbmRTdHJ1Y3R1cmUuaGlzdG9yeSk7XG5cbmZyb250RW5kU3RydWN0dXJlLnNldE5ld0lucHV0KFwiYWFiYlwiKTtcbmNvbnNvbGUubG9nKFwiU2V0dGluZyBuZXcgaW5wdXRcIik7XG5cbmNvbnNvbGUubG9nKGZyb250RW5kU3RydWN0dXJlLmlucHV0VGFwZSk7XG5jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShmcm9udEVuZFN0cnVjdHVyZS5zdGFjaykpO1xuY29uc29sZS5sb2coZnJvbnRFbmRTdHJ1Y3R1cmUuY3VycmVudFN0YXRlKTtcbmNvbnNvbGUubG9nKGZyb250RW5kU3RydWN0dXJlLmFjY2VwdGluZ1N0YXRlKTtcbmNvbnNvbGUubG9nKGZyb250RW5kU3RydWN0dXJlLmhpc3RvcnkpO1xuXG5jb25zb2xlLmxvZyhcIkNoZWNraW5nIGlucHV0IHZhbGlkaXR5XCIpO1xuZnJvbnRFbmRTdHJ1Y3R1cmUuY2hlY2tJbnB1dFRhcGVWYWxpZGl0eSgpO1xuXG50cnl7XG4gICAgd2hpbGUoIWZyb250RW5kU3RydWN0dXJlLmFjY2VwdGVkSW5wdXQoKSlcbiAgICB7XG4gICAgICAgIGZyb250RW5kU3RydWN0dXJlLm5leHRTdGVwKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGZyb250RW5kU3RydWN0dXJlLmlucHV0VGFwZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGZyb250RW5kU3RydWN0dXJlLnN0YWNrKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGZyb250RW5kU3RydWN0dXJlLmN1cnJlbnRTdGF0ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGZyb250RW5kU3RydWN0dXJlLmFjY2VwdGluZ1N0YXRlKTtcbiAgICAgICAgY29uc29sZS5sb2coZnJvbnRFbmRTdHJ1Y3R1cmUuaGlzdG9yeSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiQWNjZXB0ZWQgaW5wdXRcIik7XG59XG5jYXRjaChlKVxue1xuICAgIGNvbnNvbGUubG9nKGUpO1xufVxuXG5cbmZyb250RW5kU3RydWN0dXJlLmJhY2tTdGVwKCk7XG5jb25zb2xlLmxvZyhcIkJhY2sgc3RlcFwiKTtcbmNvbnNvbGUubG9nKGZyb250RW5kU3RydWN0dXJlLmlucHV0VGFwZSk7XG5jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShmcm9udEVuZFN0cnVjdHVyZS5zdGFjaykpO1xuY29uc29sZS5sb2coZnJvbnRFbmRTdHJ1Y3R1cmUuY3VycmVudFN0YXRlKTtcbmNvbnNvbGUubG9nKGZyb250RW5kU3RydWN0dXJlLmFjY2VwdGluZ1N0YXRlKTtcbmNvbnNvbGUubG9nKGZyb250RW5kU3RydWN0dXJlLmhpc3RvcnkpO1xuXG5jb25zb2xlLmxvZyhcIk5ldyBpbnB1dFwiKTtcbmZyb250RW5kU3RydWN0dXJlLnNldE5ld0lucHV0KFwiYVwiKTtcbmZyb250RW5kU3RydWN0dXJlLm5leHRTdGVwKCk7XG5jb25zb2xlLmxvZyhcIklzIGFjY2VwdGVkOiBcIiArIGZyb250RW5kU3RydWN0dXJlLmFjY2VwdGVkSW5wdXQoKSk7XG4qL1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgcmVnaXN0ZXJFdmVudHMoKTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==