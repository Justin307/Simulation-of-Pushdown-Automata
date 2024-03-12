import { PushdownAutomata } from "./pushdownAutomata";
export declare class Storage {
    private savedAutomatasTable?;
    constructor();
    registerEvents(): void;
    private loadFile;
    private save;
    private load;
    private delete;
    keyExists(key: string): boolean;
    saveAutomata(key: string, automata: PushdownAutomata): boolean;
    loadAutomata(key: string): PushdownAutomata | null;
    private insertRow;
    printAutomatas(): void;
    showAutomata(key: string): void;
}
