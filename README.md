# Pushdown automata simulator

Tato webová aplikace slouží k simulaci činnosti zásobníkových automatů.

## Github 

https://github.com/Justin307/Simulation-of-Pushdown-Automata
https://justin307.github.io/

## Funkce aplikace

- Vytvoření zásobníkového automatu
- Nahrání souboru se zásobníkovým automatem
- Uložení zásobníkového automatu do úložiště prohlížeče
- Stažení zásobníkového automatu
- Simulace činnost

## Souborová struktura

- 📁 application
    - 📁 data - vzorové zásobníkové automaty pro testování aplikace
    - 📁 dist - výsledná složka s aplikací
        - 📄 app-bundle.js
        - 📄 index.html
        - 📄 output.css
    - 📁 src - zdrojové TS soubory a svg ikony
    - 📄 package.json - soubor se skripty a dependencies
    - 📄 tailwind.config.js - konfigurační soubor frameworku Tailwind
    - 📄 tsconfig.json - konfigurační souboru jazyku TypeScript
    - 📄 webpack.config.js - konfigurační souboru balíčkovacího doplňku Webpack
- 📁 text
    - 📄 BachelorThesis.pdf - textová část
- 📄 .gitignore
- 📄 README.md - tento soubor

## Spuštění aplikace

Ve vašem oblíbeném prohlížeči stačí otevřít stačí otevřít soubor *application/dist/***index.html**

v případě jakékoliv změny TS souboru nebo stylování stránky je nutné aplikace znovu přeložit s sbalit a vygenerovat styly:

- npm install
- npm run build, případně npm script nebo npm style jen pro konkrétní část

## Ovládání aplikace

Aplikace obsahuje několik stránek, jejichž ovládání je popsáno níže

### Hlavní nabídka

Obsahuje tři tlačítka:

- New - přepne na tvorbu nového automatu
- Upload - zobrazí formulář pro nahrání souboru
- Saved - Zobrazí výpis automatů z úložiště

### Tvorba nového automatu

První pole slouží pro zadání názvu automatu - zobrazuje se ve výpisu

Formulář States slouží pro zadávání stavů. Každý stav je nutné potvrdit odesláním formuláře - tlačítko *insert* nebo klávesa *enter*. Délka stavu není omezená.

To samé platí pro Input symbols a Stack Symbols, akorát je jich délka omezená na 1 znak.

Initial state a Initial stack symbol jsou select pole, které se automaticky plní z předchozích formulářů.

Accepting state obsahuje checkbox pro potvrzení přijímání prázdným zásobníkem. V případě nezakliknutí je třeba určit alespoň jeden stav v poli select multiple níže. (na PC je k označení více stavů nutné držet klávesu *ctrl*) 

Transition function obsahuje 5 polí. Po kliknutí na kterékoliv pole se zobrazí možnosti, kterých toto pole může nabývat. V případě kliknutí na již existující přechod se tento přechod nastaví do již zmíněných polí. Taktéž se stane v případě odstranění přechodu. V případě, že přechod je duplicitní nebo obsahuje symboly a/nebo stavy, které nebyly definovány, má červený okraj. Tento přechod musí být smazán, jinak nelze zásobníkový automat uložit.

### Nahrání souboru

Formulář obsahuje pouze dvě pole - název automatu a pole pro nahrání souboru typu JSON.

### Výpis úložiště

Automaty se vypisují v tabulce, každý řádek odpovídá jednomu automatu v paměti.

Každý řádek obsahuje název automatu a 5 tlačítek:

- zobrazení definice automatu
- editace automatu (v případě změny jména automatu při editaci se automat uloží jako nový záznam, lze tedy použít k vytvoření kopie automatu)
- spuštění simulátoru
- stažení automatu jako JSON soubor
- odstranění automatu z paměti

### Simulátor

Simulátor se skládá z několika částí. V horní části se nachází vstupní páska, na pravé straně zásobník a nalevo pod vstupní páskou je řídící jednotka s výpisem aktuálního stavu. V levém dolním rohu se nachází ovládací tlačítka simulátoru.

Close simulation ukončí simulátor a vrátí uživatele do hlavního menu. Set new tape zobrazí modální okno pro zadání nového vstupu na vstupní pásku. Krajní šipky slouží k nastavené automatického přehrávání, časová mezera mezi jednotlivými kroky se nastavuje posuvníkem níže. Vnitřní šipky slouží pro manuální krokování simulátoru (lze tak použít tlačítka na klávesnici). Tlačítko uprostřed slouží k zastavení automatické simulace. V případě nutnosti výběru dalšího přechodu nedeterministických automatů se možnosti zobrazí v oblasti mezi řídící jednotkou a ovládacími tlačítky a přehraje se animace pro upozornění uživatele

Oblast uprostřed aplikace slouží k zobrazování dodatečný informací, jako je definice aktuálního automatu a historie již použitých přechodů. Toto zobrazení se přepíná tlačítky v horní části oblasti. Na malých obrazovkách se tato oblast zobrazuje tlačítkem uprostřed.




    
