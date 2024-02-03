import { UI } from "./ui";
import { PushdownAutomataSimulator } from "./pushdownAutomataSimulator";
import { PushdownAutomata } from "./pushdownAutomata";
import { registerEvents } from "./events";
import { Storage } from "./storage";

var storage: Storage;
var ui: UI;

document.addEventListener("DOMContentLoaded", () => {
    ui = new UI();
    storage = new Storage(ui);
    registerEvents();
    ui.registerEvents();
    storage.registerEvents();
    storage.printAutomatas();
    ui.setTape("aabb");
});