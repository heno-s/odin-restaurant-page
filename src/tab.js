import { switchTab } from "./tabController";

export function createTab(id, textContent, isActive) {
    const tab = document.createElement("span");
    tab.id = id;
    tab.textContent = textContent;
    tab.classList.add("tab");
    if (isActive) {
        tab.classList.add("active");
    }

    tab.addEventListener("click", function () {
        switchTab(this);
    });

    return tab;
}
