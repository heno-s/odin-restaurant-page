import home from "./pages/home";
import { createTab } from "./tab";

function createHeader() {
    const header = document.createElement("header");

    const home = createTab("home", "home", true);
    const menu = createTab("menu", "menu", false);
    const contact = createTab("contact", "contact", false);

    header.appendChild(home);
    header.appendChild(menu);
    header.appendChild(contact);

    return header;
}

function createContent() {
    const content = document.createElement("div");
    content.id = "content";
    content.classList.add("content");

    return content;
}

function createFooter() {
    const footer = document.createElement("footer");
    const copyright = document.createElement("span");
    copyright.textContent = "@copyright all rights reserved";

    footer.appendChild(copyright);

    return footer;
}

export function initPage() {
    const header = createHeader();
    const content = createContent();
    const footer = createFooter();

    const container = document.querySelector(".container");
    container.appendChild(header);
    container.appendChild(content);
    container.appendChild(footer);

    home.render();
}
