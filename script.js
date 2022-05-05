const background = document.getElementById("main");
const clock = document.getElementById("time");
const clock_txt = document.getElementById("clock_txt");
const greet = document.getElementById("greeting");
const dayIcon = document.getElementById("day-icon");
const date = document.getElementById("date");
const desc = document.getElementById("desc");
const title = document.getElementById("title")


const images = [
  "img-1.jpg",
  "img-2.jpg",
  "img-3.jpg",
  "img-4.jpg",
  "img-5.jpg",
  "img-6.jpg",
  "img-7.jpg",
  "img-8.jpg",
  "img-9.jpg",
  "img-10.jpg",
];

const icon = ["sun.png", "moon.png", "sunset.png", "sunrise.png"];

const monthNames = [
  "Januarry",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Octomber",
  "November",
  "December",
];

const quotes = [
  {
    auther: "Ada Lovelace",
    desc: "The science of operations, as derrived from mathematics more especially, is a science of itself, and had its own abstract truth and value.",
  },
  {
    auther: "Lao Tzu",
    desc: "The journey of a thousand miles begins with one step.",
  },
  {
    auther: "Friedrich Nietzsche",
    desc: "That which does not kill us makes us stronger."
  },
  {
    auther: "John Lennon",
    desc: "Life is what happens when you’re busy making other plans."
  },
  {
    auther: "Joe Kennedy",
    desc: "When the going gets tough, the tough get going."
  },
  {
    auther: "Mahatma Gandhi",
    desc: "You must be the change you wish to see in the world."
  },
  {
    auther: "Mae West",
    desc: "You only live once, but if you do it right, once is enough."
  },
];

var counter = 0;
var counter_q = 0;

function clockFunction() {
  var time = new Date();
  var hour = time.getHours();
  var hourReg = hour;
  var min = time.getMinutes();
  var sec = time.getSeconds();
  var month = monthNames[time.getMonth()];

  if (hour == 12) {
    hourReg = 12;
  } else if (hour < 12) {
    hourReg = hour;
  } else {
    hourReg = hourReg - 12;
  }

  if (hour < 10) {
    hour = `0${hour}`;
  } else if (min < 10) {
    min = `0${min}`;
  } else if (sec < 10) {
    sec = `0${sec}`;
  }

  var now = `${hourReg}:${min}:${sec}`;
  var t_str = "AM";
  var greet_text = "GOOD MORNING";

  if (hour >= 19) {
    t_str = "PM";
    greet_text = "GOOD NIGHT";
    dayIcon.src = `assets/icon/${icon[1]}`;
  } else if (hour >= 15) {
    t_str = "PM";
    greet_text = "GOOD EVENING";
    dayIcon.src = `assets/icon/${icon[2]}`;
  } else if (hour >= 12) {
    t_str = "PM";
    greet_text = "GOOD AFTERNOON";
    dayIcon.src = `assets/icon/${icon[0]}`;
  } else if (hour < 8) {
    t_str = "AM";
    greet_text = "GOOD MORNING";
    dayIcon.src = `assets/icon/${icon[3]}`;
    dayIcon.style = "width: 30px";
  } else if (hour < 11) {
    t_str = "AM";
    greet_text = "GOOD MORNING";
    dayIcon.src = `assets/icon/${icon[0]}`;
  }

  if (sec == 59 && counter < images.length && counter_q < quotes.length) {
    counter += 1;
    counter_q += 1;
  } else if (counter >= images.length - 1 && counter_q >= quotes.length - 1) {
    counter = 0;
    counter_q += 0;
  }

  desc.innerText = quotes[counter_q].desc;
  title.innerText = quotes[counter_q].auther;
  background.style.backgroundImage = `url("Assets/images/${images[counter]}")`;
  date.innerText = `${month}, ${time.getDate()}`;
  clock.innerHTML = now;
  clock_txt.innerText = t_str;
  greet.innerText = greet_text;

  setTimeout(clockFunction, 1000);
}

clockFunction();
