import { UI } from "./ui";
import { PushdownAutomataSimulator } from "./pushdownAutomataSimulator";
import { PushdownAutomata } from "./pushdownAutomata";
import { registerEvents } from "./events";
import { Storage } from "./storage";
import { FormAutomataBuilder } from "./formAutomataBuilder";

var storage: Storage;
var ui: UI;
var automataBuilder: FormAutomataBuilder;

document.addEventListener("DOMContentLoaded", () => {
    ui = new UI();
    storage = new Storage(ui);
    automataBuilder = new FormAutomataBuilder();
    registerEvents();
    ui.registerEvents();
    storage.registerEvents();
    automataBuilder.registerEvents();
    storage.printAutomatas();
    ui.setTape("aabb");
});