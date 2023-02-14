const openHoursData = [
    {
        day: "Mon",
        time: "10:18",
    },
    {
        day: "Tue",
        time: "10:18",
    },
    {
        day: "Wed",
        time: "10:18",
    },
    {
        day: "Thu",
        time: "10:18",
    },
    {
        day: "Fri",
        time: "10:18",
    },
    {
        day: "Sat",
        time: "closed",
    },
    {
        day: "Sun",
        time: "closed",
    },
];

const addressData = {
    street: "Sládkovičova 3204, 926 01 Sereď",
};

const contactData = {
    email: "franko@gmail.com",
    phone: "+421905811410",
};

function createOpenHour(day, time) {
    const openHour = document.createElement("div");
    openHour.classList.add("open-hour");

    const dayDOM = document.createElement("span");
    dayDOM.classList.add("day");
    dayDOM.textContent = day;

    const timeDOM = document.createElement("span");
    timeDOM.classList.add("time");
    timeDOM.textContent = time;

    openHour.appendChild(dayDOM);
    openHour.appendChild(timeDOM);

    return openHour;
}

function createOpenHours() {
    const openHours = document.createElement("div");
    openHours.classList.add("open-hours");

    const hoursTitle = document.createElement("div");
    hoursTitle.textContent = "open hours";
    openHours.appendChild(hoursTitle);

    openHoursData
        .map(({ day, time }) => createOpenHour(day, time))
        .forEach((openHour) => openHours.appendChild(openHour));

    return openHours;
}

function createAddress() {
    const address = document.createElement("div");
    address.classList.add("address");

    const title = document.createElement("div");
    title.textContent = "address";
    const street = document.createElement("span");
    street.textContent = addressData.street;

    address.appendChild(title);
    address.appendChild(street);

    return address;
}

function createContact() {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const title = document.createElement("div");
    title.textContent = "contact";

    const wrapper = document.createElement("div");
    const email = document.createElement("div");
    email.classList.add("email");
    const emailLabel = document.createElement("span");
    emailLabel.textContent = "email:";
    const emailAddress = document.createElement("span");
    emailAddress.textContent = contactData.email;
    email.appendChild(emailLabel);
    email.appendChild(emailAddress);

    const phone = document.createElement("div");
    phone.classList.add("email");
    const phoneLabel = document.createElement("span");
    phoneLabel.textContent = "phone:";
    const phoneNumber = document.createElement("span");
    phoneNumber.textContent = contactData.phone;
    phone.appendChild(phoneLabel);
    phone.appendChild(phoneNumber);

    wrapper.appendChild(email);
    wrapper.appendChild(phone);

    contact.appendChild(title);
    contact.appendChild(wrapper);

    return contact;
}

function createLocation() {
    const location = document.createElement("div");
    location.classList.add("location");
    const title = document.createElement("div");
    title.textContent = "Location:";

    const map = document.createElement("div");
    map.classList.add("map");
    map.innerHTML = `<iframe
    data-src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC8V96sGgzrasorg2xPOlrlp-cpQFPLSxM&amp;q=U%20Franka%2C%20Pek%C3%A1rska%2014%2C%20Sere%C4%8F%2092601&amp;zoom=17"
    allowfullscreen=""
    height="415"
    width="100%"
    class="js-google-maps-embed-frame js-consent-gated-iframe"
    frameborder="0"
    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC8V96sGgzrasorg2xPOlrlp-cpQFPLSxM&amp;q=U%20Franka%2C%20Pek%C3%A1rska%2014%2C%20Sere%C4%8F%2092601&amp;zoom=17"
    style="border: none"
    ></iframe>`;

    location.appendChild(title);
    location.appendChild(map);

    return location;
}

function render() {
    const content = document.querySelector("#content");

    const contactInfo = document.createElement("div");
    contactInfo.classList.add("contact-info");

    const openHours = createOpenHours();
    const address = createAddress();
    const contact = createContact();
    const location = createLocation();

    contactInfo.appendChild(openHours);
    contactInfo.appendChild(address);
    contactInfo.appendChild(contact);

    content.appendChild(contactInfo);
    content.appendChild(location);
}

export default {
    render,
};
