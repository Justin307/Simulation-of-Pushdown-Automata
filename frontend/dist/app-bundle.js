/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/frontEndStructure.ts":
/*!**********************************!*\
  !*** ./src/frontEndStructure.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FrontEndStructure: () => (/* binding */ FrontEndStructure)
/* harmony export */ });
/* harmony import */ var _stack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stack */ "./src/stack.ts");
/* harmony import */ var _pushdownAutomataTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pushdownAutomataTypes */ "./src/pushdownAutomataTypes.ts");


class FrontEndStructure {
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
/* harmony import */ var _frontEndStructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./frontEndStructure */ "./src/frontEndStructure.ts");
/* harmony import */ var _pushdownAutomata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pushdownAutomata */ "./src/pushdownAutomata.ts");


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
let frontEndStructure = new _frontEndStructure__WEBPACK_IMPORTED_MODULE_0__.FrontEndStructure(automata);
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
try {
    while (!frontEndStructure.acceptedInput()) {
        frontEndStructure.nextStep();
        console.log(frontEndStructure.inputTape);
        console.log(JSON.stringify(frontEndStructure.stack));
        console.log(frontEndStructure.currentState);
        console.log(frontEndStructure.acceptingState);
        console.log(frontEndStructure.history);
    }
    console.log("Accepted input");
}
catch (e) {
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
frontEndStructure.nextStep();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsRUFDUCxDQUFDO0lBQ0csT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuQixDQUFDO0FBR0QsaUJBQWlCLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRXZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDekIsaUJBQWlCLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ25DLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7QUFDakUsaUJBQWlCLENBQUMsUUFBUSxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW11bGF0aW9uX29mX3B1c2hkb3duX2F1dG9tYXRhLy4vc3JjL2Zyb250RW5kU3RydWN0dXJlLnRzIiwid2VicGFjazovL3NpbXVsYXRpb25fb2ZfcHVzaGRvd25fYXV0b21hdGEvLi9zcmMvcHVzaGRvd25BdXRvbWF0YS50cyIsIndlYnBhY2s6Ly9zaW11bGF0aW9uX29mX3B1c2hkb3duX2F1dG9tYXRhLy4vc3JjL3B1c2hkb3duQXV0b21hdGFUeXBlcy50cyIsIndlYnBhY2s6Ly9zaW11bGF0aW9uX29mX3B1c2hkb3duX2F1dG9tYXRhLy4vc3JjL3N0YWNrLnRzIiwid2VicGFjazovL3NpbXVsYXRpb25fb2ZfcHVzaGRvd25fYXV0b21hdGEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2ltdWxhdGlvbl9vZl9wdXNoZG93bl9hdXRvbWF0YS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2ltdWxhdGlvbl9vZl9wdXNoZG93bl9hdXRvbWF0YS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NpbXVsYXRpb25fb2ZfcHVzaGRvd25fYXV0b21hdGEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zaW11bGF0aW9uX29mX3B1c2hkb3duX2F1dG9tYXRhLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YWNrIH0gZnJvbSBcIi4vc3RhY2tcIjtcclxuaW1wb3J0IHsgU3RhY2tTeW1ib2wsIFN0YXRlLCBUcmFuc2l0aW9uRnVuY3Rpb24gfSBmcm9tIFwiLi9wdXNoZG93bkF1dG9tYXRhVHlwZXNcIjtcclxuaW1wb3J0IHsgY29tcGFyZVN0YXRlIH0gZnJvbSBcIi4vcHVzaGRvd25BdXRvbWF0YVR5cGVzXCI7XHJcbmltcG9ydCB7IFB1c2hkb3duQXV0b21hdGEgfSBmcm9tIFwiLi9wdXNoZG93bkF1dG9tYXRhXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRnJvbnRFbmRTdHJ1Y3R1cmV7XHJcbiAgICBpbnB1dFRhcGU6IHN0cmluZztcclxuICAgIHN0YWNrOiBTdGFjazxTdGFja1N5bWJvbD47XHJcbiAgICBjdXJyZW50U3RhdGU6IFN0YXRlO1xyXG4gICAgYWNjZXB0aW5nU3RhdGU6IFN0YXRlW10gfCBudWxsO1xyXG4gICAgYXV0b21hdGE6IFB1c2hkb3duQXV0b21hdGE7XHJcbiAgICBoaXN0b3J5OiBUcmFuc2l0aW9uRnVuY3Rpb25bXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGF1dG9tYXRhOiBQdXNoZG93bkF1dG9tYXRhKXtcclxuICAgICAgICB0aGlzLmF1dG9tYXRhID0gYXV0b21hdGE7XHJcbiAgICAgICAgdGhpcy5pbnB1dFRhcGUgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuc3RhY2sgPSBuZXcgU3RhY2s8U3RhY2tTeW1ib2w+KCk7XHJcbiAgICAgICAgaWYodGhpcy5hdXRvbWF0YS5pbml0aWFsU3RhY2tTeW1ib2wgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhY2sucHVzaCh0aGlzLmF1dG9tYXRhLmluaXRpYWxTdGFja1N5bWJvbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gdGhpcy5hdXRvbWF0YS5pbml0aWFsU3RhdGU7XHJcbiAgICAgICAgdGhpcy5hY2NlcHRpbmdTdGF0ZSA9IHRoaXMuYXV0b21hdGEuYWNjZXB0aW5nU3RhdGU7XHJcbiAgICAgICAgdGhpcy5oaXN0b3J5ID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXQoKTogdm9pZHtcclxuICAgICAgICB0aGlzLmlucHV0VGFwZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5zdGFjay5jbGVhcigpO1xyXG4gICAgICAgIGlmKHRoaXMuYXV0b21hdGEuaW5pdGlhbFN0YWNrU3ltYm9sICE9IG51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLnN0YWNrLnB1c2godGhpcy5hdXRvbWF0YS5pbml0aWFsU3RhY2tTeW1ib2wpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IHRoaXMuYXV0b21hdGEuaW5pdGlhbFN0YXRlO1xyXG4gICAgICAgIHRoaXMuYWNjZXB0aW5nU3RhdGUgPSB0aGlzLmF1dG9tYXRhLmFjY2VwdGluZ1N0YXRlO1xyXG4gICAgICAgIHRoaXMuaGlzdG9yeSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcGx5VHJhbnNpdGlvbkZ1bmN0aW9uKGY6IFRyYW5zaXRpb25GdW5jdGlvbik6IHZvaWR7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBcHBseWluZyB0cmFuc2l0aW9uIGZ1bmN0aW9uOlwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhmKTtcclxuICAgICAgICB0aGlzLmlucHV0VGFwZSA9IHRoaXMuaW5wdXRUYXBlLnN1YnN0cmluZygxKTtcclxuICAgICAgICB0aGlzLnN0YWNrLnBvcCgpO1xyXG4gICAgICAgIGZvcihsZXQgcyBvZiBmLnB1c2hlZFN5bWJvbHMpe1xyXG4gICAgICAgICAgICB0aGlzLnN0YWNrLnB1c2gocyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gZi50b1N0YXRlO1xyXG4gICAgICAgIHRoaXMuaGlzdG9yeS5wdXNoKGYpO1xyXG4gICAgICAgIC8vVE9ETyBtb2RpZnkgVUlcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0lucHV0VGFwZVZhbGlkaXR5KCk6IHZvaWR7XHJcbiAgICAgICAgbGV0IGludmFsaWRTeW1ib2xzOiBzdHJpbmdbXSA9IHRoaXMuYXV0b21hdGEuY2hlY2tJbnB1dFRhcGVWYWxpZGl0eSh0aGlzLmlucHV0VGFwZSk7XHJcbiAgICAgICAgaWYoaW52YWxpZFN5bWJvbHMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgaW5wdXQgdGFwZTogXCIgKyBpbnZhbGlkU3ltYm9scy5qb2luKFwiLCBcIikpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhY2NlcHRlZElucHV0KCk6IGJvb2xlYW57XHJcbiAgICAgICAgaWYodGhpcy5pbnB1dFRhcGUgIT09IFwiXCIpe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmFjY2VwdGluZ1N0YXRlID09IG51bGwpe1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGFjay5lbXB0eSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBmb3IobGV0IHMgb2YgdGhpcy5hY2NlcHRpbmdTdGF0ZSl7XHJcbiAgICAgICAgICAgIGlmKGNvbXBhcmVTdGF0ZShzLCB0aGlzLmN1cnJlbnRTdGF0ZSkpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0U3RlcCgpOiB2b2lke1xyXG4gICAgICAgIGxldCByZXN1bHQ6IGJvb2xlYW4gPSB0aGlzLmFjY2VwdGVkSW5wdXQoKTtcclxuXHJcbiAgICAgICAgaWYocmVzdWx0KXtcclxuICAgICAgICAgICAgLy9UT0RPIHJhaXNlIGFsZXJ0IC0gYWNjZXB0ZWRcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW5wdXQgYWxyZWFkeSBhY2NlcHRlZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuaW5wdXRUYXBlID09PSBcIlwiKXtcclxuICAgICAgICAgICAgLy9UT0RPIHJhaXNlIGFsZXJ0IC0gbm8gbW9yZSBpbnB1dCAvIG5vdCBhY2NlcHRlZFxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBtb3JlIGlucHV0XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHBvc3NpYmxlVHJhbnNpdGlvbkZ1bmN0aW9uczogVHJhbnNpdGlvbkZ1bmN0aW9uW10gPSB0aGlzLmF1dG9tYXRhLmdldFRyYW5zaXRpb25GdW5jdGlvbnModGhpcy5pbnB1dFRhcGVbMF0sIHRoaXMuY3VycmVudFN0YXRlLCB0aGlzLnN0YWNrLnRvcCgpKTtcclxuXHJcbiAgICAgICAgaWYocG9zc2libGVUcmFuc2l0aW9uRnVuY3Rpb25zLmxlbmd0aCA9PT0gMCl7XHJcbiAgICAgICAgICAgIC8vVE9ETyByYWlzZSBhbGVydCAtIG5vIHBvc3NpYmxlIHRyYW5zaXRpb24gZnVuY3Rpb25cclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gcG9zc2libGUgdHJhbnNpdGlvbiBmdW5jdGlvblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihwb3NzaWJsZVRyYW5zaXRpb25GdW5jdGlvbnMubGVuZ3RoID09IDEpe1xyXG4gICAgICAgICAgICB0aGlzLmFwcGx5VHJhbnNpdGlvbkZ1bmN0aW9uKHBvc3NpYmxlVHJhbnNpdGlvbkZ1bmN0aW9uc1swXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIC8vVE9ETyByYWlzZSBhbGVydCAtIG11bHRpcGxlIHRyYW5zaXRpb24gZnVuY3Rpb25zXHJcbiAgICAgICAgICAgIC8vIEFuZCBsZXQgdGhlIHVzZXIgY2hvb3NlXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk11bHRpcGxlIHRyYW5zaXRpb24gZnVuY3Rpb25zXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBiYWNrU3RlcCgpOiB2b2lke1xyXG4gICAgICAgIGlmKHRoaXMuaGlzdG9yeS5sZW5ndGggPT09IDApe1xyXG4gICAgICAgICAgICAvL1RPRE8gcmFpc2UgYWxlcnQgLSBubyBoaXN0b3J5IGF2YWlsYWJsZVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBwcmV2aW91cyBzdGVwXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGxhc3Q6IFRyYW5zaXRpb25GdW5jdGlvbiA9IHRoaXMuaGlzdG9yeS5wb3AoKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IGxhc3QuZnJvbVN0YXRlO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsYXN0LnB1c2hlZFN5bWJvbHMubGVuZ3RoOyBpKyspeyBcclxuICAgICAgICAgICAgdGhpcy5zdGFjay5wb3AoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGFjay5wdXNoKGxhc3Quc3RhcnRTeW1ib2wpO1xyXG4gICAgICAgIHRoaXMuaW5wdXRUYXBlID0gbGFzdC5pbnB1dFN5bWJvbD8udmFsdWUgKyB0aGlzLmlucHV0VGFwZTtcclxuICAgICAgICAvL1RPRE8gbW9kaWZ5IFVJXHJcbiAgICB9XHJcblxyXG4gICAgc2V0TmV3SW5wdXQoaW5wdXQ6IHN0cmluZyk6IHZvaWR7XHJcbiAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgICAgIHRoaXMuaW5wdXRUYXBlID0gaW5wdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy9UT0RPIENoZWNrIEF1dG9tYXRhIHZhbGlkaXR5XHJcbn0iLCJpbXBvcnQgeyBTdGF0ZSwgSW5wdXRTeW1ib2wsIFN0YWNrU3ltYm9sLCBUcmFuc2l0aW9uRnVuY3Rpb24gfSBmcm9tIFwiLi9wdXNoZG93bkF1dG9tYXRhVHlwZXNcIjtcclxuaW1wb3J0IHsgY29tcGFyZVN0YXRlLCBjb21wYXJlSW5wdXRTeW1ib2wsIGNvbXBhcmVTdGFja1N5bWJvbCB9IGZyb20gXCIuL3B1c2hkb3duQXV0b21hdGFUeXBlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFB1c2hkb3duQXV0b21hdGF7XHJcbiAgICBzdGF0ZXM6IFN0YXRlW107XHJcbiAgICBpbnB1dFN5bWJvbHM6IElucHV0U3ltYm9sW107XHJcbiAgICBzdGFja1N5bWJvbHM6IFN0YWNrU3ltYm9sW107XHJcbiAgICBpbml0aWFsU3RhdGU6IFN0YXRlO1xyXG4gICAgaW5pdGlhbFN0YWNrU3ltYm9sOiBTdGFja1N5bWJvbCB8IG51bGw7XHJcbiAgICBhY2NlcHRpbmdTdGF0ZTogU3RhdGVbXSB8IG51bGw7XHJcbiAgICB0cmFuc2l0aW9uRnVuY3Rpb246IFRyYW5zaXRpb25GdW5jdGlvbltdO1xyXG4gICAgY29uc3RydWN0b3Ioc3RhdGVzOiBTdGF0ZVtdLCBpbnB1dFN5bWJvbHM6IElucHV0U3ltYm9sW10sIHN0YWNrU3ltYm9sczogU3RhY2tTeW1ib2xbXSwgaW5pdGlhbFN0YXRlOiBTdGF0ZSwgaW5pdGlhbFN0YWNrU3ltYm9sOiBTdGFja1N5bWJvbCwgYWNjZXB0aW5nU3RhdGU6IFN0YXRlW10gfCBudWxsLCB0cmFuc2l0aW9uRnVuY3Rpb246IFRyYW5zaXRpb25GdW5jdGlvbltdKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc3RhdGVzID0gc3RhdGVzO1xyXG4gICAgICAgIHRoaXMuaW5wdXRTeW1ib2xzID0gaW5wdXRTeW1ib2xzO1xyXG4gICAgICAgIHRoaXMuc3RhY2tTeW1ib2xzID0gc3RhY2tTeW1ib2xzO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbFN0YXRlID0gaW5pdGlhbFN0YXRlO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbFN0YWNrU3ltYm9sID0gaW5pdGlhbFN0YWNrU3ltYm9sO1xyXG4gICAgICAgIHRoaXMuYWNjZXB0aW5nU3RhdGUgPSBhY2NlcHRpbmdTdGF0ZTtcclxuICAgICAgICB0aGlzLnRyYW5zaXRpb25GdW5jdGlvbiA9IHRyYW5zaXRpb25GdW5jdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRlRXhpc3RzKHN0YXRlOiBTdGF0ZSk6IGJvb2xlYW57XHJcbiAgICAgICAgZm9yKGxldCBzIG9mIHRoaXMuc3RhdGVzKXtcclxuICAgICAgICAgICAgaWYoY29tcGFyZVN0YXRlKHMsIHN0YXRlKSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5wdXRTeW1ib2xFeGlzdHMoaW5wdXRTeW1ib2w6IElucHV0U3ltYm9sKTogYm9vbGVhbntcclxuICAgICAgICBmb3IobGV0IGkgb2YgdGhpcy5pbnB1dFN5bWJvbHMpe1xyXG4gICAgICAgICAgICBpZihjb21wYXJlSW5wdXRTeW1ib2woaSwgaW5wdXRTeW1ib2wpKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGFja1N5bWJvbEV4aXN0cyhzdGFja1N5bWJvbDogU3RhY2tTeW1ib2wpOiBib29sZWFue1xyXG4gICAgICAgIGZvcihsZXQgcyBvZiB0aGlzLnN0YWNrU3ltYm9scyl7XHJcbiAgICAgICAgICAgIGlmKGNvbXBhcmVTdGFja1N5bWJvbChzLCBzdGFja1N5bWJvbCkpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja1N0YXRlc0V4aXN0ZW5jZSgpIDpbc3RyaW5nLCBTdGF0ZV1bXXtcclxuICAgICAgICB2YXIgZXJyb3JNc2cgOltzdHJpbmcsIFN0YXRlXVtdID0gW107XHJcblxyXG4gICAgICAgIGlmKCF0aGlzLnN0YXRlRXhpc3RzKHRoaXMuaW5pdGlhbFN0YXRlKSl7XHJcbiAgICAgICAgICAgIGVycm9yTXNnLnB1c2goW1wiSW5pdGlhbCBzdGF0ZSBkb2VzIG5vdCBleGlzdFwiLCB0aGlzLmluaXRpYWxTdGF0ZV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5hY2NlcHRpbmdTdGF0ZSAhPSBudWxsKXtcclxuICAgICAgICAgICAgZm9yKGxldCBmaW5hbFN0YXRlIG9mIHRoaXMuYWNjZXB0aW5nU3RhdGUpe1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuc3RhdGVFeGlzdHMoZmluYWxTdGF0ZSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTXNnLnB1c2goW1wiQWNjZXB0aW5nIHN0YXRlIGRvZXMgbm90IGV4aXN0XCIsIGZpbmFsU3RhdGVdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGVycm9yTXNnO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjaGVja1N5bWJvbEV4aXN0ZW5jZSgpIDpbc3RyaW5nLCBTdGFja1N5bWJvbF1bXXtcclxuICAgICAgICB2YXIgZXJyb3JNc2cgOltzdHJpbmcsIFN0YWNrU3ltYm9sXVtdID0gW107XHJcblxyXG4gICAgICAgIGlmKHRoaXMuaW5pdGlhbFN0YWNrU3ltYm9sICE9IG51bGwpe1xyXG4gICAgICAgICAgICBpZighdGhpcy5zdGFja1N5bWJvbEV4aXN0cyh0aGlzLmluaXRpYWxTdGFja1N5bWJvbCkpe1xyXG4gICAgICAgICAgICAgICAgZXJyb3JNc2cucHVzaChbXCJJbml0aWFsIHN0YWNrIHN5bWJvbCBkb2VzIG5vdCBleGlzdFwiLCB0aGlzLmluaXRpYWxTdGFja1N5bWJvbF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZXJyb3JNc2c7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNoZWNrVHJhbnNpdGlvbkZ1bmN0aW9ucygpIDpbc3RyaW5nLCBUcmFuc2l0aW9uRnVuY3Rpb25dW117XHJcbiAgICAgICAgdmFyIGVycm9yTXNnIDpbc3RyaW5nLCBUcmFuc2l0aW9uRnVuY3Rpb25dW10gPSBbXTtcclxuXHJcbiAgICAgICAgZm9yKGxldCB0cmFuc2l0aW9uRnVuY3Rpb24gb2YgdGhpcy50cmFuc2l0aW9uRnVuY3Rpb24pe1xyXG4gICAgICAgICAgICBpZighdGhpcy5zdGF0ZUV4aXN0cyh0cmFuc2l0aW9uRnVuY3Rpb24uZnJvbVN0YXRlKSl7XHJcbiAgICAgICAgICAgICAgICBlcnJvck1zZy5wdXNoKFtcIkZyb20gc3RhdGUgZG9lcyBub3QgZXhpc3RcIiwgdHJhbnNpdGlvbkZ1bmN0aW9uXSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmlucHV0U3ltYm9sRXhpc3RzKHRyYW5zaXRpb25GdW5jdGlvbi5pbnB1dFN5bWJvbCkpe1xyXG4gICAgICAgICAgICAgICAgZXJyb3JNc2cucHVzaChbXCJJbnB1dCBzeW1ib2wgZG9lcyBub3QgZXhpc3RcIiwgdHJhbnNpdGlvbkZ1bmN0aW9uXSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHRyYW5zaXRpb25GdW5jdGlvbi5zdGFydFN5bWJvbCAhPSBudWxsICYmICF0aGlzLnN0YWNrU3ltYm9sRXhpc3RzKHRyYW5zaXRpb25GdW5jdGlvbi5zdGFydFN5bWJvbCkpe1xyXG4gICAgICAgICAgICAgICAgZXJyb3JNc2cucHVzaChbXCJTdGFjayBzeW1ib2wgZG9lcyBub3QgZXhpc3RcIiwgdHJhbnNpdGlvbkZ1bmN0aW9uXSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKCF0aGlzLnN0YXRlRXhpc3RzKHRyYW5zaXRpb25GdW5jdGlvbi50b1N0YXRlKSl7XHJcbiAgICAgICAgICAgICAgICBlcnJvck1zZy5wdXNoKFtcIlRvIHN0YXRlIGRvZXMgbm90IGV4aXN0XCIsIHRyYW5zaXRpb25GdW5jdGlvbl0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IHB1c2hlZFN5bWJvbCBvZiB0cmFuc2l0aW9uRnVuY3Rpb24ucHVzaGVkU3ltYm9scyl7XHJcbiAgICAgICAgICAgICAgICBpZighdGhpcy5zdGFja1N5bWJvbEV4aXN0cyhwdXNoZWRTeW1ib2wpKXtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvck1zZy5wdXNoKFtcIlB1c2hlZCBzeW1ib2wgZG9lcyBub3QgZXhpc3RcIiwgdHJhbnNpdGlvbkZ1bmN0aW9uXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBlcnJvck1zZztcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0lucHV0VGFwZVZhbGlkaXR5KGlucHV0VGFwZTogc3RyaW5nKTogc3RyaW5nW117XHJcbiAgICAgICAgbGV0IGludmFsaWRTeW1ib2xzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBzeW1ib2xzID0gbmV3IFNldChpbnB1dFRhcGUuc3BsaXQoXCJcIikpO1xyXG5cclxuICAgICAgICBmb3IobGV0IHMgb2Ygc3ltYm9scyl7XHJcbiAgICAgICAgICAgIGxldCBpbnZhbGlkOiBib29sZWFuID0gdHJ1ZTtcclxuICAgICAgICAgICAgZm9yKGxldCBpbnB1dFN5bWJvbCBvZiB0aGlzLmlucHV0U3ltYm9scyl7XHJcbiAgICAgICAgICAgICAgICBpZihpbnB1dFN5bWJvbC5pc0Vwc3lsb24gPT0gZmFsc2UgJiYgaW5wdXRTeW1ib2wudmFsdWUgPT0gcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaW52YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGludmFsaWQpe1xyXG4gICAgICAgICAgICAgICAgaW52YWxpZFN5bWJvbHMucHVzaChzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGludmFsaWRTeW1ib2xzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRyYW5zaXRpb25GdW5jdGlvbnModGFwZVN5bWJvbDogc3RyaW5nLCBzdGF0ZTogU3RhdGUsIHN0YWNrU3ltYm9sOiAgU3RhY2tTeW1ib2wgfCBudWxsKTogVHJhbnNpdGlvbkZ1bmN0aW9uW117XHJcbiAgICAgICAgbGV0IHBvc3NpYmxlVHJhbnNpdGlvbkZ1bmN0aW9uczogVHJhbnNpdGlvbkZ1bmN0aW9uW10gPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IGlucHV0U3ltYm9sOiBJbnB1dFN5bWJvbDtcclxuICAgICAgICBpZih0YXBlU3ltYm9sID09PSBcIlwiKXtcclxuICAgICAgICAgICAgaW5wdXRTeW1ib2wgPSB7aXNFcHN5bG9uOiB0cnVlfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBpbnB1dFN5bWJvbCA9IHtpc0Vwc3lsb246IGZhbHNlLCB2YWx1ZTogdGFwZVN5bWJvbH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgdHJhbnNpdGlvbkZ1bmN0aW9uIG9mIHRoaXMudHJhbnNpdGlvbkZ1bmN0aW9uKXtcclxuICAgICAgICAgICAgaWYoIWNvbXBhcmVJbnB1dFN5bWJvbChpbnB1dFN5bWJvbCwgdHJhbnNpdGlvbkZ1bmN0aW9uLmlucHV0U3ltYm9sKSl7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZighY29tcGFyZVN0YXRlKHN0YXRlLCB0cmFuc2l0aW9uRnVuY3Rpb24uZnJvbVN0YXRlKSl7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZighY29tcGFyZVN0YWNrU3ltYm9sKHN0YWNrU3ltYm9sLCB0cmFuc2l0aW9uRnVuY3Rpb24uc3RhcnRTeW1ib2wpKXtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBvc3NpYmxlVHJhbnNpdGlvbkZ1bmN0aW9ucy5wdXNoKHRyYW5zaXRpb25GdW5jdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcG9zc2libGVUcmFuc2l0aW9uRnVuY3Rpb25zO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU3RhY2sgfSBmcm9tIFwiLi9zdGFja1wiO1xyXG5cclxuZXhwb3J0IHR5cGUgU3RhY2tTeW1ib2wgPSB7XHJcbiAgICB2YWx1ZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZVN0YWNrU3ltYm9sKGE6IFN0YWNrU3ltYm9sIHwgbnVsbCwgYjogU3RhY2tTeW1ib2wgfCBudWxsKTogYm9vbGVhbntcclxuICAgIGlmKGEgIT0gbnVsbCAmJiB0eXBlb2YoYSkgPT0gdHlwZW9mKGIpKXtcclxuICAgICAgICByZXR1cm4gYS52YWx1ZSA9PSBiLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgaWYoYSA9PSBudWxsICYmIGIgPT0gbnVsbCl7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIElucHV0U3ltYm9sID0ge1xyXG4gICAgaXNFcHN5bG9uOiBib29sZWFuO1xyXG4gICAgdmFsdWU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlSW5wdXRTeW1ib2woYTogSW5wdXRTeW1ib2wsIGI6IElucHV0U3ltYm9sKTogYm9vbGVhbntcclxuICAgIGlmKGEuaXNFcHN5bG9uID09IGIuaXNFcHN5bG9uKXtcclxuICAgICAgICBpZihhLmlzRXBzeWxvbiA9PSBmYWxzZSl7XHJcbiAgICAgICAgICAgIHJldHVybiBhLnZhbHVlID09IGIudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgU3RhdGUgPSB7XHJcbiAgICB2YWx1ZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZVN0YXRlKGE6IFN0YXRlLCBiOiBTdGF0ZSk6IGJvb2xlYW57XHJcbiAgICByZXR1cm4gYS52YWx1ZSA9PSBiLnZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBUcmFuc2l0aW9uRnVuY3Rpb24gPSB7XHJcbiAgICBmcm9tU3RhdGU6IFN0YXRlO1xyXG4gICAgaW5wdXRTeW1ib2w6IElucHV0U3ltYm9sO1xyXG4gICAgc3RhcnRTeW1ib2w6IFN0YWNrU3ltYm9sIHwgbnVsbDtcclxuICAgIHRvU3RhdGU6IFN0YXRlO1xyXG4gICAgcHVzaGVkU3ltYm9sczogU3RhY2tTeW1ib2xbXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVUcmFuc2l0aW9uRnVuY3Rpb24oYTogVHJhbnNpdGlvbkZ1bmN0aW9uLCBiOiBUcmFuc2l0aW9uRnVuY3Rpb24pOiBib29sZWFue1xyXG4gICAgLy9mcm9tU3RhdGVcclxuICAgIGlmKCFjb21wYXJlU3RhdGUoYS5mcm9tU3RhdGUsIGIuZnJvbVN0YXRlKSl7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vaW1wdXRTeW1ib2xcclxuICAgIGlmKCFjb21wYXJlSW5wdXRTeW1ib2woYS5pbnB1dFN5bWJvbCwgYi5pbnB1dFN5bWJvbCkpe1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvL3N0YXJ0U3ltYm9sXHJcbiAgICBpZih0eXBlb2YoYS5zdGFydFN5bWJvbCkgIT0gdHlwZW9mKGIuc3RhcnRTeW1ib2wpKXtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZihhLnN0YXJ0U3ltYm9sICE9IG51bGwgJiYgIWNvbXBhcmVTdGFja1N5bWJvbChhLnN0YXJ0U3ltYm9sLCBiLnN0YXJ0U3ltYm9sKSl7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vdG9TdGF0ZVxyXG4gICAgaWYoIWNvbXBhcmVTdGF0ZShhLnRvU3RhdGUsIGIudG9TdGF0ZSkpe1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvL3B1c2hlZFN5bWJvbHNcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhLnB1c2hlZFN5bWJvbHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGlmKCFjb21wYXJlU3RhY2tTeW1ib2woYS5wdXNoZWRTeW1ib2xzW2ldLCBiLnB1c2hlZFN5bWJvbHNbaV0pKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSIsImludGVyZmFjZSBJU3RhY2s8VD4ge1xyXG4gICAgcG9wKCk6IHZvaWQ7XHJcbiAgICBwdXNoKGl0ZW06IFQpOiB2b2lkO1xyXG4gICAgdG9wKCk6IFQgfCBudWxsO1xyXG4gICAgZW1wdHkoKTogYm9vbGVhbjtcclxuICAgIHNpemUoKTogbnVtYmVyO1xyXG4gICAgY2xlYXIoKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN0YWNrPFQ+IGltcGxlbWVudHMgSVN0YWNrPFQ+IHtcclxuICAgIHByaXZhdGUgZGF0YTogVFtdID0gW107XHJcblxyXG4gICAgcG9wKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGF0YS5wb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdXNoKGl0ZW06IFQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRhdGEucHVzaChpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICB0b3AoKTogVCB8IG51bGwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFbdGhpcy5kYXRhLmxlbmd0aCAtIDFdID8/IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZW1wdHkoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5sZW5ndGggPT09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgc2l6ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaW50KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSkpO1xyXG4gICAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBGcm9udEVuZFN0cnVjdHVyZSB9IGZyb20gXCIuL2Zyb250RW5kU3RydWN0dXJlXCI7XG5pbXBvcnQgeyBQdXNoZG93bkF1dG9tYXRhIH0gZnJvbSBcIi4vcHVzaGRvd25BdXRvbWF0YVwiO1xuXG5jb25zdCBhdXRvbWF0YSA9IG5ldyBQdXNoZG93bkF1dG9tYXRhKFxuICAgIFtcbiAgICAgICAge3ZhbHVlOiBcInExXCJ9LFxuICAgICAgICB7dmFsdWU6IFwicTJcIn1cbiAgICBdLFxuICAgIFtcbiAgICAgICAge2lzRXBzeWxvbjogZmFsc2UsIHZhbHVlOiBcImFcIn0sXG4gICAgICAgIHtpc0Vwc3lsb246IGZhbHNlLCB2YWx1ZTogXCJiXCJ9XG4gICAgXSxcbiAgICBbXG4gICAgICAgIHt2YWx1ZTogXCJPXCJ9LFxuICAgICAgICB7dmFsdWU6IFwiSVwifVxuICAgIF0sXG4gICAge3ZhbHVlOiBcInExXCJ9LFxuICAgIHt2YWx1ZTogXCJPXCJ9LFxuICAgIG51bGwsXG4gICAgW1xuICAgICAgICB7XG4gICAgICAgICAgICBmcm9tU3RhdGU6IHt2YWx1ZTogXCJxMVwifSxcbiAgICAgICAgICAgIGlucHV0U3ltYm9sOiB7aXNFcHN5bG9uOiBmYWxzZSwgdmFsdWU6IFwiYVwifSxcbiAgICAgICAgICAgIHN0YXJ0U3ltYm9sOiB7dmFsdWU6IFwiT1wifSxcbiAgICAgICAgICAgIHRvU3RhdGU6IHt2YWx1ZTogXCJxMVwifSxcbiAgICAgICAgICAgIHB1c2hlZFN5bWJvbHM6IFt7dmFsdWU6IFwiSVwifV1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZnJvbVN0YXRlOiB7dmFsdWU6IFwicTFcIn0sXG4gICAgICAgICAgICBpbnB1dFN5bWJvbDoge2lzRXBzeWxvbjogZmFsc2UsIHZhbHVlOiBcImFcIn0sXG4gICAgICAgICAgICBzdGFydFN5bWJvbDoge3ZhbHVlOiBcIklcIn0sXG4gICAgICAgICAgICB0b1N0YXRlOiB7dmFsdWU6IFwicTFcIn0sXG4gICAgICAgICAgICBwdXNoZWRTeW1ib2xzOiBbe3ZhbHVlOiBcIklcIn0se3ZhbHVlOiBcIklcIn1dXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZyb21TdGF0ZToge3ZhbHVlOiBcInExXCJ9LFxuICAgICAgICAgICAgaW5wdXRTeW1ib2w6IHtpc0Vwc3lsb246IGZhbHNlLCB2YWx1ZTogXCJiXCJ9LFxuICAgICAgICAgICAgc3RhcnRTeW1ib2w6IHt2YWx1ZTogXCJJXCJ9LFxuICAgICAgICAgICAgdG9TdGF0ZToge3ZhbHVlOiBcInEyXCJ9LFxuICAgICAgICAgICAgcHVzaGVkU3ltYm9sczogW11cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZnJvbVN0YXRlOiB7dmFsdWU6IFwicTJcIn0sXG4gICAgICAgICAgICBpbnB1dFN5bWJvbDoge2lzRXBzeWxvbjogZmFsc2UsIHZhbHVlOiBcImJcIn0sXG4gICAgICAgICAgICBzdGFydFN5bWJvbDoge3ZhbHVlOiBcIklcIn0sXG4gICAgICAgICAgICB0b1N0YXRlOiB7dmFsdWU6IFwicTJcIn0sXG4gICAgICAgICAgICBwdXNoZWRTeW1ib2xzOiBbXVxuICAgICAgICB9LFxuICAgIF1cbik7XG5cbmxldCBmcm9udEVuZFN0cnVjdHVyZSA9IG5ldyBGcm9udEVuZFN0cnVjdHVyZShhdXRvbWF0YSk7XG5cbmNvbnNvbGUubG9nKGZyb250RW5kU3RydWN0dXJlLmlucHV0VGFwZSk7XG5jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShmcm9udEVuZFN0cnVjdHVyZS5zdGFjaykpO1xuY29uc29sZS5sb2coZnJvbnRFbmRTdHJ1Y3R1cmUuY3VycmVudFN0YXRlKTtcbmNvbnNvbGUubG9nKGZyb250RW5kU3RydWN0dXJlLmFjY2VwdGluZ1N0YXRlKTtcbmNvbnNvbGUubG9nKGZyb250RW5kU3RydWN0dXJlLmhpc3RvcnkpO1xuXG5mcm9udEVuZFN0cnVjdHVyZS5zZXROZXdJbnB1dChcImFhYmJcIik7XG5jb25zb2xlLmxvZyhcIlNldHRpbmcgbmV3IGlucHV0XCIpO1xuXG5jb25zb2xlLmxvZyhmcm9udEVuZFN0cnVjdHVyZS5pbnB1dFRhcGUpO1xuY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZnJvbnRFbmRTdHJ1Y3R1cmUuc3RhY2spKTtcbmNvbnNvbGUubG9nKGZyb250RW5kU3RydWN0dXJlLmN1cnJlbnRTdGF0ZSk7XG5jb25zb2xlLmxvZyhmcm9udEVuZFN0cnVjdHVyZS5hY2NlcHRpbmdTdGF0ZSk7XG5jb25zb2xlLmxvZyhmcm9udEVuZFN0cnVjdHVyZS5oaXN0b3J5KTtcblxuY29uc29sZS5sb2coXCJDaGVja2luZyBpbnB1dCB2YWxpZGl0eVwiKTtcbmZyb250RW5kU3RydWN0dXJlLmNoZWNrSW5wdXRUYXBlVmFsaWRpdHkoKTtcblxudHJ5e1xuICAgIHdoaWxlKCFmcm9udEVuZFN0cnVjdHVyZS5hY2NlcHRlZElucHV0KCkpXG4gICAge1xuICAgICAgICBmcm9udEVuZFN0cnVjdHVyZS5uZXh0U3RlcCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhmcm9udEVuZFN0cnVjdHVyZS5pbnB1dFRhcGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShmcm9udEVuZFN0cnVjdHVyZS5zdGFjaykpO1xuICAgICAgICBjb25zb2xlLmxvZyhmcm9udEVuZFN0cnVjdHVyZS5jdXJyZW50U3RhdGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhmcm9udEVuZFN0cnVjdHVyZS5hY2NlcHRpbmdTdGF0ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGZyb250RW5kU3RydWN0dXJlLmhpc3RvcnkpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcIkFjY2VwdGVkIGlucHV0XCIpO1xufVxuY2F0Y2goZSlcbntcbiAgICBjb25zb2xlLmxvZyhlKTtcbn1cblxuXG5mcm9udEVuZFN0cnVjdHVyZS5iYWNrU3RlcCgpO1xuY29uc29sZS5sb2coXCJCYWNrIHN0ZXBcIik7XG5jb25zb2xlLmxvZyhmcm9udEVuZFN0cnVjdHVyZS5pbnB1dFRhcGUpO1xuY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZnJvbnRFbmRTdHJ1Y3R1cmUuc3RhY2spKTtcbmNvbnNvbGUubG9nKGZyb250RW5kU3RydWN0dXJlLmN1cnJlbnRTdGF0ZSk7XG5jb25zb2xlLmxvZyhmcm9udEVuZFN0cnVjdHVyZS5hY2NlcHRpbmdTdGF0ZSk7XG5jb25zb2xlLmxvZyhmcm9udEVuZFN0cnVjdHVyZS5oaXN0b3J5KTtcblxuY29uc29sZS5sb2coXCJOZXcgaW5wdXRcIik7XG5mcm9udEVuZFN0cnVjdHVyZS5zZXROZXdJbnB1dChcImFcIik7XG5mcm9udEVuZFN0cnVjdHVyZS5uZXh0U3RlcCgpO1xuY29uc29sZS5sb2coXCJJcyBhY2NlcHRlZDogXCIgKyBmcm9udEVuZFN0cnVjdHVyZS5hY2NlcHRlZElucHV0KCkpO1xuZnJvbnRFbmRTdHJ1Y3R1cmUubmV4dFN0ZXAoKTtcblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==