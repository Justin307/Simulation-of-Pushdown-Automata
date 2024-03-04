import { registerEvents, g_ui, g_storage, g_automataBuilder } from "./globals";

document.addEventListener("DOMContentLoaded", () => {
    registerEvents();
    g_ui.registerEvents();
    g_storage.registerEvents();
    g_automataBuilder.registerEvents();
});
