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
    isEpsylon: boolean;
    value?: string;
}

export function compareInputSymbol(a: InputSymbol, b: InputSymbol): boolean{
    if(a.isEpsylon == b.isEpsylon){
        if(a.isEpsylon == false){
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
    inputSymbol: InputSymbol;
    startSymbol: StackSymbol | null;
    toState: State;
    pushedSymbols: StackSymbol[];
}

export function compareTransitionFunction(a: TransitionFunction, b: TransitionFunction): boolean{
    //fromState
    if(!compareState(a.fromState, b.fromState)){
        return false;
    }

    //imputSymbol
    if(!compareInputSymbol(a.inputSymbol, b.inputSymbol)){
        return false;
    }

    //startSymbol
    if(typeof(a.startSymbol) != typeof(b.startSymbol)){
        return false;
    }
    if(a.startSymbol != null && !compareStackSymbol(a.startSymbol, b.startSymbol)){
        return false;
    }

    //toState
    if(!compareState(a.toState, b.toState)){
        return false;
    }

    //pushedSymbols
    for(let i = 0; i < a.pushedSymbols.length; i++){
        if(!compareStackSymbol(a.pushedSymbols[i], b.pushedSymbols[i])){
            return false;
        }
    }

    return true;
}