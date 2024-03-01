import { Storage } from "./storage";
import { UI } from "./ui";
import { FormAutomataBuilder } from "./formAutomataBuilder";

export let g_ui: UI = new UI();
export let g_storage: Storage = new Storage();
export let g_automataBuilder: FormAutomataBuilder = new FormAutomataBuilder();

//Simulator
export var simulatorPage: HTMLDivElement;

//Inside simulator
export var divAutomataDefinition: HTMLDivElement;

//Inside simulator
export var divTransitionHistory: HTMLDivElement;

//Inside simulator
//Wrapper for divAutomataDefinition & divTransitionHistory
export var infoDiv: HTMLDivElement;

//Main
//Wrapper for all the pages bellow
export var mainPage: HTMLDivElement;

//Menu
export var menuPage: HTMLDivElement;

//New automata form 
export var newAutomataPage: HTMLDivElement;

//Upload form
export var loadAutomataPage: HTMLDivElement;

//Saved automatas table
export var savedAutomatasPage: HTMLDivElement;

//Overview of saved automata
export var automataOverviewPage: HTMLDivElement;

export enum PageEnum {
    SIMULATOR = 0,
    MENU = 1,
    NEW_AUTOMATA = 2,
    UPLOAD = 3,
    SAVED = 4,
    OVERVIEW = 5,
}

export function changePage(page: PageEnum): void {
    switch(page){
        case PageEnum.SIMULATOR:
            simulatorPage.style.display = "flex";
            mainPage.style.display = "none";
            menuPage.style.display = "none";
            newAutomataPage.style.display = "none";
            loadAutomataPage.style.display = "none";
            savedAutomatasPage.style.display = "none";
            automataOverviewPage.style.display = "none";
            break;
        case PageEnum.MENU:
            simulatorPage.style.display = "none";
            mainPage.style.display = "flex";
            menuPage.style.display = "flex";
            newAutomataPage.style.display = "none";
            loadAutomataPage.style.display = "none";
            savedAutomatasPage.style.display = "none";
            automataOverviewPage.style.display = "none";
            break;
        case PageEnum.NEW_AUTOMATA:
            simulatorPage.style.display = "none";
            mainPage.style.display = "flex";
            menuPage.style.display = "none";
            newAutomataPage.style.display = "flex";
            loadAutomataPage.style.display = "none";
            savedAutomatasPage.style.display = "none";
            automataOverviewPage.style.display = "none";
            break;
        case PageEnum.UPLOAD:
            simulatorPage.style.display = "none";
            mainPage.style.display = "flex";
            menuPage.style.display = "none";
            newAutomataPage.style.display = "none";
            loadAutomataPage.style.display = "flex";
            savedAutomatasPage.style.display = "none";
            automataOverviewPage.style.display = "none";
            break;
        case PageEnum.SAVED:
            simulatorPage.style.display = "none";
            mainPage.style.display = "flex";
            menuPage.style.display = "none";
            newAutomataPage.style.display = "none";
            loadAutomataPage.style.display = "none";
            savedAutomatasPage.style.display = "flex";
            automataOverviewPage.style.display = "none";
            break;
        case PageEnum.OVERVIEW:
            simulatorPage.style.display = "none";
            mainPage.style.display = "flex";
            menuPage.style.display = "none";
            newAutomataPage.style.display = "none";
            loadAutomataPage.style.display = "none";
            savedAutomatasPage.style.display = "none";
            automataOverviewPage.style.display = "flex";
            break;
        default:
            break;
    }
}

function infoDivSwitch(): void {
    infoDiv.classList.toggle("hidden");
    infoDiv.classList.toggle("absolute");
    infoDiv.classList.toggle("top-0");
    infoDiv.classList.toggle("bottom-0");
    infoDiv.classList.toggle("left-0");
    infoDiv.classList.toggle("-right-20");
    infoDiv.classList.toggle("-translate-x-20");
    infoDiv.classList.toggle("md:-right-0");
    infoDiv.classList.toggle("md:-translate-x-0");
};

export function registerEvents(): void {
    divAutomataDefinition = document.getElementById("automataDefinitionDiv") as HTMLDivElement;
    divTransitionHistory = document.getElementById("transitionHistoryDiv") as HTMLDivElement;
    infoDiv = document.getElementById("infoDiv") as HTMLDivElement;
    mainPage = document.getElementById("mainPage") as HTMLDivElement;
    menuPage = document.getElementById("menuPage") as HTMLDivElement;
    newAutomataPage = document.getElementById("newAutomataPage") as HTMLDivElement;
    savedAutomatasPage = document.getElementById("savedAutamatasPage") as HTMLDivElement;
    simulatorPage = document.getElementById("simulatorPage") as HTMLDivElement;
    automataOverviewPage = document.getElementById("automataOverviewPage") as HTMLDivElement;
    loadAutomataPage = document.getElementById("loadAutomataPage") as HTMLDivElement;

    document.getElementById("automataDefinitionButton")?.addEventListener("click", () => {
        divAutomataDefinition.style.display = "block";
        divTransitionHistory.style.display = "none";
    });

    document.getElementById("transitionHistoryButton")?.addEventListener("click", () => {
        divTransitionHistory.style.display = "flex";
        divAutomataDefinition.style.display = "none";
    });

    document.getElementById("showInfoButton")?.addEventListener("click", infoDivSwitch);

    document.getElementById("hideInfoButton")?.addEventListener("click", infoDivSwitch);

    document.getElementById("newAutomataButton")?.addEventListener("click", () => {
        changePage(PageEnum.NEW_AUTOMATA);
    });

    document.getElementById("uploadAutomataButton")?.addEventListener("click", () => {
        changePage(PageEnum.UPLOAD);
    });

    document.getElementById("savedAutomatasButton")?.addEventListener("click", () => {
        changePage(PageEnum.SAVED);
        g_storage.printAutomatas();
    });

    document.getElementById("savedAutomatasBackButton")?.addEventListener("click", () => {
        changePage(PageEnum.MENU);
    });

    document.getElementById("hideOverviewButton")?.addEventListener("click", () => {
        changePage(PageEnum.SAVED);
    });

    document.getElementById("hideLoadButton")?.addEventListener("click", () => {
        changePage(PageEnum.MENU);
        (document.getElementById("loadKeyInput") as HTMLInputElement).value = "";
        (document.getElementById("loadFileInput") as HTMLInputElement).value = "";
    });
}