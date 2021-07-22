"use strict";

const requestURL = "https://coopfeathy.github.io/lesson12/json/directory.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const companies = jsonObject["companies"];
    for (let i = 0; i < companies.length; i++ ) {
        let card = document.createElement("section");
        let h3 = document.createElement("h3");
        let logo = document.createElement("img");
        let contactInfo = document.createElement("div")
        let phone = document.createElement("p");
        let phoneSpan = document.createElement("span");
        let address = document.createElement("p");
        let addressSpan = document.createElement("span");
        let website = document.createElement("p");
        let websiteSpan = document.createElement("span");
        let websiteLink = document.createElement("a");

        h3.textContent = companies[i].name;
        logo.setAttribute("src", companies[i].logo);
        logo.setAttribute("alt", companies[i].name + " " + logo);
        if(companies[i].name == "Utah Transit Authority" || companies[i].name == "Apple Spice") {
          logo.classList.add("small-logo");
        }
        if(companies[i].name != "Kids on the Move" && companies[i].name != "Apple Spice" && companies[i].name != "Utah Transit Authority") {
          logo.classList.add("med-logo");
        }

        phoneSpan.textContent = "phone";
        addressSpan.textContent = "location_on";
        websiteSpan.textContent = "web";
        phoneSpan.classList.add("material-icons");
        addressSpan.classList.add("material-icons");
        websiteSpan.classList.add("material-icons");

        websiteLink.textContent = companies[i].website;
        websiteLink.setAttribute("href", companies[i].sitelink);

        phone.appendChild(phoneSpan);
        address.appendChild(addressSpan);
        website.appendChild(websiteSpan);
        website.appendChild(websiteLink);

        phone.innerHTML = phone.innerHTML + companies[i].phone;
        address.innerHTML = address.innerHTML + companies[i].address;

        card.appendChild(h3);
        card.appendChild(logo);
        card.appendChild(contactInfo);
        contactInfo.appendChild(phone);
        contactInfo.appendChild(address);
        contactInfo.appendChild(website);
        contactInfo.classList.add("contact-info");


        document.querySelector("div.directory").appendChild(card);
    }
  });

