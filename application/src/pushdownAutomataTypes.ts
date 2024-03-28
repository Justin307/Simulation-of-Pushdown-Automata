import { Stack } from "./stack";

export type StackSymbol = {
    value: string;
}

export function compareStackSymbol(a: StackSymbol | null, b: StackSymbol | null): boolean{
    if(a != null && typeof(a) == typeof(b)){
        return a.value == b.value;
    }
    if(a == null && b == null){
        return true;
    }
    return false;
}

export type InputSymbol = {
    isEpsilon: boolean;
    value?: string;
}

export function compareInputSymbol(a: InputSymbol, b: InputSymbol): boolean{
    if(a.isEpsilon == b.isEpsilon){
        if(a.isEpsilon == false){
            return a.value == b.value;
        }
        else{
            return true;
        }
    }
    return false;
}

export type State = {
    value: string;
}

export function compareState(a: State, b: State): boolean{
    return a.value == b.value;
}

export type TransitionFunction = {
    fromState: State;
    startSymbol: StackSymbol;
    inputSymbol: InputSymbol;
    toState: State;
    pushedSymbols: StackSymbol[];
}

export function compareTransitionFunction(a: TransitionFunction, b: TransitionFunction): boolean{
    //fromState
    if(!compareState(a.fromState, b.fromState)){
        return false;
    }

    //startSymbol
    if(!compareStackSymbol(a.startSymbol, b.startSymbol)){
        return false;
    }

    //inputSymbol
    if(!compareInputSymbol(a.inputSymbol, b.inputSymbol)){
        return false;
    }

    //toState
    if(!compareState(a.toState, b.toState)){
        return false;
    }

    //pushedSymbols
    if(a.pushedSymbols.length != b.pushedSymbols.length){
        return false;
    }
    for(let i = 0; i < a.pushedSymbols.length; i++){
        if(!compareStackSymbol(a.pushedSymbols[i], b.pushedSymbols[i])){
            return false;
        }
    }

    return true;
}

export function toString(item: TransitionFunction): string{
    return `${item.fromState.value} ${item.startSymbol.value} --${item.inputSymbol.isEpsilon ? "ε" : item.inputSymbol.value}-> ${item.toState.value} ${item.pushedSymbols.map(x => x.value).join(" ")}`;
}