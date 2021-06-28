
//menu
function menu(x) {
	x.classList.toggle("change");
}
function toggleNav() {
	var x = document.getElementById("myTopnav");
  if (x.style.display == "none") {
    x.style.display = "flex";
    x.style.backgroundColor = "gray"
    x.style.flexDirection = "column"
    x.style.alignItems = "center"
  } else {
    x.style.display = "none";
  }
}

//date
var date = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var months = new Array();
months[0] = "January";
months[1] = "February";
months[2] = "March";
months[3] = "April";
months[4] = "May";
months[5] = "June";
months[6] = "July";
months[7] = "August";
months[8] = "September";
months[9] = "October";
months[10] = "November";
months[11] = "December";

var day = weekday[date.getDay()];
var num = date.getDate();
var month = months[date.getMonth()];
var year = date.getFullYear();

const banner = document.querySelector('.banner');

if ((day != 'Friday')&&(banner != null)){
  banner.style.display = 'none';
}

document.getElementById('date').innerHTML = day + ", " + num + " " + month + " " + year;



//lazy load
const images = document.querySelectorAll("[data-src]");

function preloadImage(img){
    const src = img.getAttribute("data-src")
    if(!src){
        return;
    }
    img.src = src;
    img.removeAttribute("data-src")
}

const imgoptions = {
    threshold: 1,
    rootMargin: "0px 0px 300px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgoptions);

images.forEach(image => {
    imgObserver.observe(image);
});


//stormcenter
function adjustRating(rating) {
  document.getElementById("ratingvalue").innerHTML = rating;
}

//homepage
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
  console.table(jsonObject);  // temporary checking for valid response and data parsing
  const towns = jsonObject['towns'];
  
  for (let i = 0; i < towns.length; i++ ) {
    let card = document.createElement('section');
    let info = document.createElement('div')
    let town = document.createElement('h2');
    let motto = document.createElement('h6')
    let yearFounded = document.createElement('p')
    let currentPopulation = document.createElement('p');
    let averageRainfall = document.createElement('p')
    let photo = document.createElement('img');

    if (towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven" || towns[i].name == "Preston") {
      town.textContent = towns[i].name;
      motto.textContent = towns[i].motto;
      yearFounded.textContent = "Year Founded: " + towns[i].yearFounded;
      currentPopulation.textContent = "Population: " + towns[i].currentPopulation;
      averageRainfall.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
      photo.src = towns[i].photo;

      info.appendChild(town)
      info.appendChild(motto)
      info.appendChild(yearFounded)
      info.appendChild(currentPopulation)
      info.appendChild(averageRainfall)
      card.appendChild(info)
      card.appendChild(photo)
      document.querySelector('div.towns').appendChild(card);
    }
  }
});


//Preston
const weatherURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=3e08552e49dac3ae3cad2390c4518b7c";
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
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=3e08552e49dac3ae3cad2390c4518b7c";
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



