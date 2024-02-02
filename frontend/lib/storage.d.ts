import { PushdownAutomata } from "./pushdownAutomata";
import { UI } from "./ui";
export declare class Storage {
    savedAutomatasTable?: HTMLTableElement;
    ui: UI;
    constructor(ui: UI);
    registerEvents(): void;
    private loadFile;
    private save;
    private load;
    private delete;
    keyExists(key: string): boolean;
    saveAutomata(key: string, automata: PushdownAutomata): void;
    loadAutomata(key: string): PushdownAutomata | null;
    private insertRow;
    printAutomatas(): void;
    showAutomata(key: string): void;
}
