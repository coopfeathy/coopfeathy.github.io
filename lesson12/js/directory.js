"use strict";


document.getElementById("directory").style.display = "";

function gridview(){
    document.getElementById("directory").style.display = "grid";  
}

function listview(){
    document.getElementById("directory").style.display = "block";  
}



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
        let phone = document.createElement("p");
        let websiteLink = document.createElement("a");

        h3.textContent = companies[i].name;

        logo.setAttribute("src", companies[i].logo);
        logo.setAttribute("alt", companies[i].name + " " + logo);

        phone.innerHTML = companies[i].phone;
       
        websiteLink.textContent = companies[i].sitelink;
        websiteLink.setAttribute("href", companies[i].sitelink);

        card.appendChild(h3);
        card.appendChild(logo);
        card.appendChild(phone);
        card.appendChild(websiteLink);

        document.querySelector("div.directory").appendChild(card);
    }
  });

