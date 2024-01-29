var divAutomataDefinition: HTMLDivElement;
var divTransitionHistory: HTMLDivElement;
var infoDiv: HTMLDivElement;

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
}