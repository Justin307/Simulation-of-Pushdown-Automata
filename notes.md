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

- Tisk textu BP?
- počet stran - počítá se i úvod a závěr?

## Poznámky ze schůzky

- Simulator
    - v historii vypisovat konfigurace, viz. foto mobil
    - End simulation -> Close simulation

- Storage
    - Delete -> ask to delete
    - Open -> Show
    - Open <-> Edit
    - Spojit hlavní obrazovku a saved

- Form
    - Accepting state - skrytí chybové hlášky a nemožnost výběru accepting state

- Text
    - kapitoly + sekce (více nedělit)
    - Uvod - co, jak, proč, shrnutí kapitol - obecné uvedení do problematiky
    - (max) 1/3 - teoretický rozbor, co to je automat, jak probíhá výpočet, existující software (BP z minulého roku, software na github)
    - analýza/návrh, ulm diagram, návrh tříd, ...
    - kapitola věnovaná implementaci, technologie, knihovny, trochu části kódu, ...
    - pohled uživatele, uživatelské rozhraní, vzorové automaty, spuštění aplikace
    - závěr (stručný) - často se opakují věci, konkrétní výsledek práce, co je přínos

- Text
    - kapitola 3
        - Specifikace -> Analýzy a návrh
            - Specifikace aplikace
        - Technologie přesunout do implementace
            - Popsat třeba více tailwind
    - kapitola 4
        
    - na začátek porovnání s dalšími programy jako nová kapitola

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

- Modal - confirm ✗
- Modal - Error ✗
- Nastavení automatu do simulátoru ✓
- Nastylování main page ✓

### 3.2.2024

- Možnost nastavení pásky ✓
- Přepnutí zpět ze simulátoru do menu ✓
- URL - menu vs automat ✗

### 4.2.2024

- Začátek práce na formuláři Zadání nového automatu ✓

### 5.2.2024

- Práce na TODOes z přechozího dne (form/select handlery, výppis výsledků, validace, ...) ✓

### 6.2.2024

- Práce na zbylých TODOes ve formuláři ✓

### 7.2.2024 & 8.2.2024

- Dokončení Transition Function Builderu ✓

### 9.2.2024

- Kontrola při odeslání formuláře ✓

### 11.2.2024

- Odeslání formuláře ✓

### 13.2.2024

- Opravy chyb ✓

### 14.2.2024 - 27.2.2024

- práce na formuláři ✓
- opravy chyb ✓
