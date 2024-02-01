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
interface StackSymbol{
    value: string;
}

interface InputSymbol{
    isEpsylon: false;
    value: string;
}

interface EpsylonSymbol{
    isEmpsylon: true;
}

interface State{
    id: number;
    value: string;
}

class TransitionFunction{
    fromState: State;
    startSymbol: StackSymbol;
    inputSymbol: InputSymbol | EpsylonSymbol;
    toState: State;
    pushedSymbols: StackSymbol[];
}

class PushdownAutomata{
    states: State[];
    inputSymbols: InputSymbol[];
    stackSymbols: StackSymbol[];
    initialState: State;
    initialStackSymbol: StackSymbol;
    finalStates: State[] | null;
    //Array for now, might change later
    transitionFunction: TransitionFunction[];
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

## Front end

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

- [Typescript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/)
- [Flowbite](https://flowbite.com/)
- [Webpack](https://webpack.js.org/)

### Grafické návrhy

## Otázky na schůzku

- Definice přepisové funkce 
	- strana 132 https://fuuu.be/polytech/INFOF408/Introduction-To-The-Theory-Of-Computation-Michael-Sipser.pdf
	- https://link.springer.com/chapter/10.1007/978-1-4612-1844-9_27
- Rozložení UI/Layout
- Volba následující přepisové funkce
	- Ruční pohyb
	- Automatický pohyb
- Způsoby definice automatu
	- Formulář
	- Načtení/uložení z/do souboru
	- Local storage
	- Server s přihlášením ????
- Zápočet

## Poznámky ze schůzky

## Odkazy

1. https://www.geeksforgeeks.org/introduction-of-pushdown-automata/
1. https://www.cs.vsb.cz/sawa/uti/slides/uti-05-cz.pdf
1. https://www.geeksforgeeks.org/data-types-in-typescript/

## TO DOs

### 15.01.2024

- nastavení npx scriptů ✓
- vytvoření a definice datových tříd a typů (překopírování a upravení pushdown automata a vytvoření nových) ✓
- návrh potřebných funkcí pro manipulaci s automatem ✓

### 16.01.2024

- definice a otestování kontrolních funkcí ✓ 
- práce na TODOs z minulého dne ✓

### 17.01.2024

- návrh UI a rozvržení ✗

### 18.01.2024

- návrh UI a rozložení ✗
- kontrola vytvořených funkcí ✓
- začátek práce na UI (html, css) ✓

### 19.01.2024

- pokračování práce na UI ✓

### 20.01.2024

- pokračivání práce na UI (current State, automata overview, move buttons) ✓

### 21.01.2024

- Pokračoivání práce na UI (current state, automata overview) ✓

### 22.02.2024

- Dokončení UI (automata overview, transition function history), začátek práce na propojení TS a UI ✓

### 23.01.2024

- Transition function, ui manipulation functions ✓

### 24.01.2024

- Step front/back functionality ✓

### 25.01.2024

- Automatic steps ✗

### 30.01.2024

- Automatic steps ✓
- Změna chování pásky ✓

### 31.01.2024

- Landing page (výběr nový automat/načíst ze souboru/načíst uložený) ✓
- Výběr z uložených automatů ✓

### 1.2.2024

- Načtení automatu z paměti ✓
- Načtení automatu ze souboru ✓
- Uložení automatu do souboru ✓

### 2.2.2024

- Modal - confirm
- Modal - Error
- Nastavení automatu do simulátoru
- Nastylování main page
