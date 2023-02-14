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

function render() {
    const content = document.querySelector("#content");

    const contactInfo = document.createElement("div");
    contactInfo.classList.add("contact-info");

    const openHours = createOpenHours();
    const address = createAddress();
    const contact = createContact();

    contactInfo.appendChild(openHours);
    contactInfo.appendChild(address);
    contactInfo.appendChild(contact);

    content.appendChild(contactInfo);
}

export default {
    render,
};
