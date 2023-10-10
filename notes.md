# Pushdown automata (Zásobníkové automaty)

## Definice zásobníkového automatu

**M = (Q, Σ, Γ, δ, q, x, F)**
- Q -> koneční neprázdná množina stavů
- Σ -> konečná neprázdná množina - vstupní abeceda 
- Γ -> konečná neprázdná množina - zásobníková abeceda
- δ -> přechodová funkce - Q × (Σ ∪ {ε}) × Γ → P(Q × Γ ∗)
- q -> počáteční stav - q ∈ Q
- x -> počáteční zásobníkový symbol x ∈ Γ
- F -> množina výstupních stavů

## Zásobníkový automat v TS

```ts
class PushdownAutomata{
    states: State[];
    inputSymbols: InputSymbol[];
    stackSymbols: StackSymbol[];
    initialState: State;
    initialStackSymbol: StackSymbol;
    finalStates: State[] | Null;
    /*
    *   TransitionFunction will be changed later
    *   Depending on what will be best for future code
    *   For now, 1D array will be used, can be changed to 2D, 3D array, map, ...
    */
    transitionFunction: TransitionFunction[];
}

class TransitionFunction{
    fromState: State;
    startSymbol: StackSymbol;
    inputSymbol: InputSymbol | Epsylon;
    toState: State;
    pushedSymbol: StackSymbol[];
}

class State{
    id: number;
    value: string;
}

class InputSymbol
{
    value: string;
}

class StackSymbol
{
    value:string
}

class Epsylon extends InputSymbol
{
    
}
```

## Back end

### Funkce

1. Registrace
1. Příhlášení
1. Odhlášení
1. Uložení automatu
1. Výpis automatů uživatele
1. Načtení konkrétního automatu
1. Smazání automatu

### Technologie

- [Node.js](https://nodejs.org/en)
- [Express.js](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- Databáze ???

# Front end

### Funkce

1. Registrační formulář
1. Přihlašovací formulář
1. Odhlášení
1. Zapomenuté heslo
1. Nový automat
1. Výpis automatů uživatele
1. Načíst starý automat
1. Editace automatu
1. Fungování automatu
1. Smazání automatu
1. Upload automatu
1. Stažení automatu


### Technologie

- [Tailwind](https://tailwindcss.com/)

### Grafické návrhy

## Poznámky ze schůzky

## Odkazy

1. https://www.geeksforgeeks.org/introduction-of-pushdown-automata/
1. https://www.cs.vsb.cz/sawa/uti/slides/uti-05-cz.pdf
1. https://www.geeksforgeeks.org/data-types-in-typescript/