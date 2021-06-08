
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

if (day != 'Friday'){
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