//menu
function menu(y) {
	y.classList.toggle("change");
    var x = document.getElementById("myTopnav");
    if (x.style.display == "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
        x.style.backgroundColor = "gray"
        x.style.flexDirection = "column"
        x.style.alignItems = "center"
       
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
