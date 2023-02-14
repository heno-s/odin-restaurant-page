function render() {
    const content = document.querySelector("#content");

    const h1 = document.createElement("h1");
    h1.classList.add("restaurant-title");
    h1.textContent = "Welcome to Franko restaurant";

    const p1 = document.createElement("p");
    p1.classList.add("restaurant-description");
    p1.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing
    elit. Sint debitis nobis esse officia ipsam
    aspernatur odio autem perferendis suscipit
    mollitia impedit dolor ipsa quaerat, corporis
    atque exercitationem voluptatibus quas! Amet,
    necessitatibus, totam itaque consequatur tempore
    voluptates facilis unde iure non quibusdam sunt.
    Quasi expedita nostrum rem odit saepe soluta
    laboriosam!`;

    const p2 = document.createElement("p");
    p2.classList.add("restaurant-description");
    p2.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing
    elit. Alias fugiat amet accusantium, commodi
    corporis adipisci sed molestias libero quaerat
    odit eos dolores magnam perferendis similique, ut
    repellendus? Assumenda, sapiente unde?`;

    content.appendChild(h1);
    content.appendChild(p1);
    content.appendChild(p2);
}

export default {
    render,
};
