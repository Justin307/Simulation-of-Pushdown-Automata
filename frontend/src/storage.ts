import { PushdownAutomata } from "./pushdownAutomata"
import { UI } from "./ui" 
import { automataOverviewPage, savedAutomatasPage, loadAutomataPage, mainPage, simulatorPage, menuPage, g_ui, g_automataBuilder, newAutomataPage } from "./events";
// @ts-expect-error
import * as svg_edit from './svg/edit.svg';
// @ts-expect-error
import * as svg_download from './svg/download.svg';
// @ts-expect-error
import * as svg_delete from './svg/delete.svg';
// @ts-expect-error
import * as svg_open from './svg/open.svg';
// @ts-expect-error
import * as svg_definition from './svg/definition.svg';

export class Storage{
    private savedAutomatasTable?: HTMLTableElement;

    constructor(){
        this.savedAutomatasTable = document.getElementById("savedAutomatasTable") as HTMLTableElement;
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
                g_ui.setAutomata(this.loadAutomata(key));
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

            //name/key
            let cell = row.insertCell()
            cell.classList.add("p-2", "font-bold");
            cell.innerText = key;

            //definition
            cell = row.insertCell();
            cell.classList.add("p-2", "text-center");
            let button = document.createElement("button");
            button.innerHTML = svg_definition;
            button.children[0].classList.add("w-6","h-6","text-gray-800","dark:text-white");
            button.addEventListener("click", this.showAutomata.bind(this, key));
            cell.append(button);

            //open
            cell = row.insertCell();
            cell.classList.add("p-2", "text-center");
            button = document.createElement("button");
            button.innerHTML = svg_open;
            button.children[0].classList.add("w-6","h-6","text-gray-800","dark:text-white");
            button.addEventListener("click", () => {
                mainPage.style.display = "none";
                simulatorPage.style.display = "flex";
                g_ui.setAutomata(this.loadAutomata(key));
            });
            cell.append(button);

            //edit
            cell = row.insertCell();
            cell.classList.add("p-2", "text-center");
            button = document.createElement("button");
            button.innerHTML = svg_edit;
            button.children[0].classList.add("w-6","h-6","text-gray-800","dark:text-white");
            button.addEventListener("click", () => {
                g_automataBuilder.editAutomata(key, this.load<PushdownAutomata>(key));
                savedAutomatasPage.style.display = "none";
                newAutomataPage.style.display = "flex";

            });
            cell.append(button);

            //download
            cell = row.insertCell();
            cell.classList.add("p-2", "text-center");
            button = document.createElement("button");
            button.innerHTML = svg_download;
            button.children[0].classList.add("w-6","h-6","text-gray-800","dark:text-white");
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

            //delete
            cell = row.insertCell();
            cell.classList.add("p-2", "text-center");
            button = document.createElement("button");
            button.innerHTML = svg_delete;
            button.children[0].classList.add("w-6","h-6","text-gray-800","dark:text-white");
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
            for(let i = 1; i < l; i++){
                this.savedAutomatasTable.deleteRow(1);
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