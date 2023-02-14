import home from "./pages/home";
import menu from "./pages/menu";
import contact from "./pages/contact";

export function loadPage(pageId) {
    clearPage();
    switch (pageId) {
        case "home":
            home.render();
            break;
        case "menu":
            menu.render();
            break;
        case "contact":
            contact.render();
            break;
        default:
            home.render();
            break;
    }
}

function clearPage() {
    const content = document.querySelector("#content");
    content.innerHTML = "";
}
