import { UI } from "./ui";
import { registerEvents } from "./events";
import { Storage } from "./storage";
import { FormAutomataBuilder } from "./formAutomataBuilder";

let storage: Storage;
let ui: UI;
let automataBuilder: FormAutomataBuilder;

document.addEventListener("DOMContentLoaded", () => {
    ui = new UI();
    storage = new Storage(ui);
    automataBuilder = new FormAutomataBuilder(storage, ui);
    registerEvents();
    ui.registerEvents();
    storage.registerEvents();
    automataBuilder.registerEvents();
    storage.printAutomatas();
    ui.setTape("aabb");
});
