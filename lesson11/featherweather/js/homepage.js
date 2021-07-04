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