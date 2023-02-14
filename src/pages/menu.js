const menusData = [
    {
        name: "bambino burger",
        ingredients: `homemade butter bun, mayonnaise burger,
        field lettuce, beef, BAMBINO liquid
        cheese, scrambled egg with spring onion,
        bacon chips, homemade avocado salsa,
        chilli pepper`,
        imgUrl: "./images/bambino-burger.jpg",
        price: 9.5,
    },
    {
        name: "double beef burger",
        ingredients: `homemade butter bun, burger mayonnaise,
        field lettuce, 150g beef, two slices of
        Chedar cheese, 130g shredded beef, two
        slices of Limburger cheese`,
        imgUrl: "./images/double-beef.jpg",
        price: 17.5,
    },

    {
        name: "ham and cheese pizza",
        ingredients: `pizza dough, tomato base, Chedar cheese,
        ham sausage, corn`,
        imgUrl: "./images/ham-pizza.jpg",
        price: 7.5,
    },
    {
        name: "hot-dog classic",
        ingredients: `homemade butter roll, burger mayonnaise,
        field lettuce, sausage XXL with cheese,
        Cheddar cheese, roasted onions, BBQ sauce`,
        imgUrl: "./images/hot-dog-classic.jpg",
        price: 5.5,
    },
];

function menuItem(name, ingredients, imgUrl, price) {
    const item = document.createElement("div");
    item.classList.add("menu-item");
    const itemDescription = document.createElement("div");

    const itemName = document.createElement("div");
    itemName.classList.add("item-name");
    itemName.textContent = name;
    const itemIngredients = document.createElement("p");
    itemIngredients.classList.add("item-ingredients");
    itemIngredients.textContent = ingredients;

    itemDescription.appendChild(itemName);
    itemDescription.appendChild(itemIngredients);

    const itemImage = document.createElement("img");
    itemImage.src = imgUrl;
    const ItemPrice = document.createElement("div");
    ItemPrice.classList.add("item-price");
    price += "";
    ItemPrice.textContent =
        price.replace(/(?<=\.)\d*/, (match) => match.padEnd(2, "0")) + // make sure price is display with trailing zero
        "€";

    item.appendChild(itemDescription);
    item.appendChild(itemImage);
    item.appendChild(ItemPrice);

    return item;
}

function render() {
    const menus = menusData.map(
        ({ name, ingredients, imgUrl, price }) =>
            menuItem(name, ingredients, imgUrl, price)
    );

    const content = document.querySelector("#content");

    menus.forEach((menu) => content.appendChild(menu));
}

export default {
    render,
};
