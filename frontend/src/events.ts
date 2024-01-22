var divAutomataDefinition: HTMLDivElement;
var divTransitionHistory: HTMLDivElement;

function infoDivSwitch(div: HTMLDivElement): void {
    div.classList.toggle("hidden");
    div.classList.toggle("absolute");
    div.classList.toggle("top-0");
    div.classList.toggle("bottom-0");
    div.classList.toggle("left-0");
    div.classList.toggle("-right-20");
    div.classList.toggle("-translate-x-20");
    div.classList.toggle("md:-right-0");
    div.classList.toggle("md:-translate-x-0");
};

export function registerEvents(): void {
    divAutomataDefinition = document.getElementById("automataDefinitionDiv") as HTMLDivElement;
    divTransitionHistory = document.getElementById("transitionHistoryDiv") as HTMLDivElement;

    document.getElementById("automataDefinitionButton")?.addEventListener("click", () => {
        divAutomataDefinition.style.display = "flex";
        divTransitionHistory.style.display = "none";
    });

    document.getElementById("transitionHistoryButton")?.addEventListener("click", () => {
        divTransitionHistory.style.display = "flex";
        divAutomataDefinition.style.display = "none";
    });

    document.getElementById("showInfoButton")?.addEventListener("click", () => {
        let infoDiv = document.getElementById("infoDiv") as HTMLDivElement;
        infoDivSwitch(infoDiv);
    });

    document.getElementById("hideInfoButton")?.addEventListener("click", () => {
        let infoDiv = document.getElementById("infoDiv") as HTMLDivElement;
        infoDivSwitch(infoDiv);
    });
}