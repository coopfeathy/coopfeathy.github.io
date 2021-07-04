//Fish Haven
const weatherURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&appid=3e08552e49dac3ae3cad2390c4518b7c";
fetch(weatherURL)
  .then((response) => response.json())
  .then((jsObject) => {
    document.querySelector("#curr-weather").textContent = jsObject.weather[0].description;
    document.querySelector("#temp").textContent = jsObject.main.temp.toFixed(1) + "°F";
    document.querySelector("#humidity").textContent = jsObject.main.humidity + "%";
    document.querySelector("#windspeed").textContent = jsObject.wind.speed.toFixed(1) + " mph";
    const t = jsObject.main.temp.toFixed(1);
    const s = jsObject.wind.speed.toFixed(1);
    const windchill = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, .16)) + (0.4275 * t * Math.pow(s, .16));
    document.querySelector('#windchill').innerHTML = Math.round(windchill) + "°F";
});

 
//gets forecast
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&appid=3e08552e49dac3ae3cad2390c4518b7c";
fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const filteredForecast = jsObject.list.filter(forecast => forecast.dt_txt.includes("18:00:00"));
    console.log(filteredForecast);
    const imagesrc = "https://openweathermap.org/img/w/";
    for (let i = 0; i < 5; i++) {
        document.querySelector("#icon" + (i + 1)).setAttribute("src", imagesrc + filteredForecast[i].weather[0].icon + ".png");
        document.querySelector("#icon" + (i + 1)).setAttribute("alt", filteredForecast[i].weather[0].description);
        document.querySelector("#temp" + (i + 1)).textContent = filteredForecast[i].main.temp.toFixed(1);
    }    
});

//updates the days row in the forecast table
let now = new Date();
var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
for (let i = 0; i < 5; i++) {
    document.querySelector("#day" + (i+1)).innerHTML = days[(now.getDay() + i) % 7];
}

//add event section
const eventURL = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(eventURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject["towns"];
        const townInfo = towns.filter(town => town.name == "Fish Haven");
        for (let i = 0; i < townInfo[0].events.length; i++) {
            let event = document.createElement('p');
            event.textContent = townInfo[0].events[i];
            document.querySelector(".events-section").appendChild(event);
        }
    });

