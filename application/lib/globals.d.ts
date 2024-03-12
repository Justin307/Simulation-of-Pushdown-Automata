import { Storage } from "./storage";
import { SimulatorUI } from "./simulatorUI";
import { FormAutomataBuilder } from "./formAutomataBuilder";
export declare let g_ui: SimulatorUI;
export declare let g_storage: Storage;
export declare let g_automataBuilder: FormAutomataBuilder;
export declare var simulatorPage: HTMLDivElement;
export declare var divAutomataDefinition: HTMLDivElement;
export declare var divTransitionHistory: HTMLDivElement;
export declare var infoDiv: HTMLDivElement;
export declare var mainPage: HTMLDivElement;
export declare var menuPage: HTMLDivElement;
export declare var newAutomataPage: HTMLDivElement;
export declare var loadAutomataPage: HTMLDivElement;
export declare var savedAutomatasPage: HTMLDivElement;
export declare var automataOverviewPage: HTMLDivElement;
export declare enum PageEnum {
    SIMULATOR = 0,
    MENU = 1,
    NEW_AUTOMATA = 2,
    UPLOAD = 3,
    SAVED = 4,
    OVERVIEW = 5
}
export declare function changePage(page: PageEnum): void;
export declare function registerEvents(): void;
