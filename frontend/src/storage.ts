import { PushdownAutomata } from "./pushdownAutomata"
import { UI } from "./ui" 
import { automataOverviewPage, savedAutomatasPage, loadAutomataPage, mainPage, simulatorPage, menuPage } from "./events";

export class Storage{
    private savedAutomatasTable?: HTMLTableElement;
    private ui: UI;

    constructor(ui: UI){
        this.savedAutomatasTable = document.getElementById("savedAutomatasTable") as HTMLTableElement;
        if(ui){
            this.ui = ui;
        }
    }

    registerEvents(){
        document.getElementById("loadFileForm").addEventListener("submit", this.loadFile.bind(this));
    }

    private loadFile(e: SubmitEvent) {
        e.preventDefault();
        let keyInput = document.getElementById("loadKeyInput") as HTMLInputElement
        let key = keyInput?.value;
        
        let fileInput = document.getElementById("loadFileInput") as HTMLInputElement
        let file = fileInput?.files?.[0];
        if(!key || !file){
            alert("Please fill in all fields");
            return;
        }
        let overwrite = false;
        if(this.keyExists(key)){
            if(!confirm("Key already exists. Overwrite?")){
                return;
            }
            else{
                overwrite = true;
            }
        }
        try{
            const reader = new FileReader();
            reader.onload = () => {
                const jsonStr = reader.result as string;
                const automata = JSON.parse(jsonStr) as PushdownAutomata;
                
                this.save(key, automata);
                if(!overwrite){
                    this.insertRow(key);
                }
                loadAutomataPage.style.display = "none";
                menuPage.style.display = "flex";
                mainPage.style.display = "none";
                simulatorPage.style.display = "flex";
                this.ui.setAutomata(this.loadAutomata(key));
                keyInput.value = "";
                fileInput.value = "";
            }
            reader.readAsText(file);

        } catch (error){
            alert("Error loading file. Please try again.");
            return;
        }
    }

    private save<T>(key: string, item: T){
        localStorage.setItem(key, JSON.stringify(item))
    }

    private load<T>(key: string): T | null{
        const item = localStorage.getItem(key);
        if (!item){
            return null;
        }

        try{
            return JSON.parse(item) as T;
        } catch (error){
            console.error(`Error parsing localStorage item at key "${key}".`, error);
            return null;
        }
    }

    private delete(key: string){
        localStorage.removeItem(key);
    }

    keyExists(key: string): boolean{
        for(let i = 0; i < localStorage.length; i++){
            if(localStorage.key(i) === key){
                return true;
            }
        }
        return false;
    }

    saveAutomata(key: string, automata: PushdownAutomata): boolean{
        if(this.keyExists(key)){
            if(!confirm("Key already exists. Overwrite?")){
                return false;
            }
        }
        this.save(key, automata);
        return true;
    }

    loadAutomata(key: string): PushdownAutomata | null{
        return Object.setPrototypeOf(this.load<PushdownAutomata>(key),PushdownAutomata.prototype);
    }

    private insertRow(key: string){
        let automata = this.loadAutomata(key);
        if(automata){
            let row = this.savedAutomatasTable.insertRow();
            row.classList.add("border-b");

            let cell = row.insertCell()
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
                mainPage.style.display = "none";
                simulatorPage.style.display = "flex";
                this.ui.setAutomata(this.loadAutomata(key));
            });
            cell.append(button);

            cell = row.insertCell();
            cell.classList.add("p-2", "text-center");
            button = document.createElement("button");
            button.innerHTML = '<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"/></svg>';
            button.addEventListener("click",() => {
                const jsonStr = JSON.stringify(this.loadAutomata(key), null, 2);
                const blob = new Blob([jsonStr], {type: "application/json"});
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = `${key}.json`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            } );
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

    printAutomatas(){
        if(this.savedAutomatasTable){
            let l = this.savedAutomatasTable.rows.length
            for(let i = 0; i < l; i++){
                this.savedAutomatasTable.deleteRow(0);
            }
            for(let i = 0; i < localStorage.length; i++){
                let key = localStorage.key(i);
                this.insertRow(key);
            }
        }
    }

    showAutomata(key: string){
        let automata = this.loadAutomata(key);
        //Key/name
        document.getElementById("overviewName")!.innerText = key;
        //States
        document.getElementById("overviewStates")!.innerText = automata.states.map((s) => s.value).join(", ");
        //Input symbols
        document.getElementById("overviewInputSymbols")!.innerText = automata.inputSymbols.map((s) => s.value).join(", ");
        //Stack symbols
        document.getElementById("overviewStackSymbols")!.innerText = automata.stackSymbols.map((s) => s.value).join(", ");
        //Initial state
        document.getElementById("overviewInitialState")!.innerText = automata.initialState.value;
        //Initial stack symbol
        document.getElementById("overviewInitialStackSymbol")!.innerText = automata.initialStackSymbol?.value;
        //Accepting states
        document.getElementById("overviewAcceptingState")!.innerText = automata.acceptingState?.map((s) => s.value).join(", ") ?? "Acceptance by Empty Stack";
        //Transition functions
        let tFunction =  document.getElementById("overviewTranstionFunction") as HTMLDivElement;
        tFunction.innerHTML = "";
        for(let f of automata.transitionFunction ?? []){
            tFunction.append(UI.generateTransitionFunction(f));
        }
        savedAutomatasPage.style.display = "none";
        automataOverviewPage.style.display = "flex";
    }
}