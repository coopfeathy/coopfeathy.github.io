const requestURL = "https://coopfeathy.github.io/lesson12/json/directory.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const companies = jsonObject["companies"];
    for (let i = 0; i < companies.length; i++ ) {
        
        if (companies[i].name == "Walmart" || companies[i].name == "NWACC" || companies[i].name == "Sams Club") {
        
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
    }
  });

let today = new Date();
const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

const weatherURL = "https://api.openweathermap.org/data/2.5/onecall?lat=36.3729&lon=94.2088&units=imperial&appid=3e08552e49dac3ae3cad2390c4518b7c";
fetch(weatherURL)
  .then((response) => response.json())
  .then((jsObject) => {

    document.querySelector("#weather").textContent = jsObject.current.weather[0].main;
    document.querySelector("#temp").textContent = jsObject.current.temp.toFixed(1);
    document.querySelector("#humidity").textContent = jsObject.current.humidity + "%";

    for (let i = 1; i <= 3; i++) {
        document.querySelector("#day" + (i)).textContent = days[(today.getDay() + i) % 7];
        document.querySelector("#temp" + (i)).textContent = jsObject.daily[i - 1].temp.day.toFixed(1); 
    }
});
