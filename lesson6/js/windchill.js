const t = document.querySelector('.high').innerHTML;
const s = document.querySelector('.windspeed').innerHTML;

console.log(t);
console.log(s);

const windchill = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, .16)) + (0.4275 * t * Math.pow(s, .16));

console.log(windchill);

document.querySelector('.windchill').innerHTML = Math.round(windchill);
