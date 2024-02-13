import { Storage } from "./storage";

var divAutomataDefinition: HTMLDivElement;
var divTransitionHistory: HTMLDivElement;
var infoDiv: HTMLDivElement;
export var mainPage: HTMLDivElement;
export var menuPage: HTMLDivElement;
export var newAutomataPage: HTMLDivElement;
export var savedAutomatasPage: HTMLDivElement;
export var simulatorPage: HTMLDivElement;
export var automataOverviewPage: HTMLDivElement
export var loadAutomataPage: HTMLDivElement;

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

export function registerEvents(storage: Storage): void {
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
        menuPage.style.display = "none";
        newAutomataPage.style.display = "flex";
    });

    document.getElementById("uploadAutomataButton")?.addEventListener("click", () => {
        menuPage.style.display = "none";
        loadAutomataPage.style.display = "flex";
    });

    document.getElementById("savedAutomatasButton")?.addEventListener("click", () => {
        menuPage.style.display = "none";
        savedAutomatasPage.style.display = "flex";
        storage?.printAutomatas();
    });

    document.getElementById("savedAutomatasBackButton")?.addEventListener("click", () => {
        menuPage.style.display = "flex";
        savedAutomatasPage.style.display = "none";
    });

    document.getElementById("hideOverviewButton")?.addEventListener("click", () => {
        savedAutomatasPage.style.display = "flex";
        automataOverviewPage.style.display = "none";
    });

    document.getElementById("hideLoadButton")?.addEventListener("click", () => {
        menuPage.style.display = "flex";
        loadAutomataPage.style.display = "none";
        (document.getElementById("loadKeyInput") as HTMLInputElement).value = "";
        (document.getElementById("loadFileInput") as HTMLInputElement).value = "";
    });
}