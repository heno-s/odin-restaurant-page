import { loadPage } from "./pageLoader";

function setActiveTab(tab) {
    const tabs = document.querySelectorAll(".tab");

    tabs.forEach((tab) => tab.classList.remove("active"));
    tab.classList.add("active");
}

export function switchTab(tab) {
    setActiveTab(tab);
    loadPage(tab.id);
}
