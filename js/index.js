// Set comming day
let countdown = new Date();

let DAYS = 30; // days from now

countdown.setDate(countdown.getDate() + DAYS);

document.querySelector(".js-count-day").innerHTML =
  moment(countdown).format("D MMM YYYY");

// Set countdown
let timer = setInterval(function () {
  let now = Date.now();
  let distance = countdown.getTime() - now;

  let daysLeft, hoursLeft, minsLeft, secsLeft;
  let sec = 1000;
  let min = sec * 60;
  let hour = min * 60;
  let day = hour * 24;

  daysLeft = Math.floor(distance / day);
  hoursLeft = Math.floor((distance % day) / hour);
  minsLeft = Math.floor((distance % hour) / min);
  secsLeft = Math.floor((distance % min) / sec);

  document.querySelector(".js-day").innerHTML = daysLeft;
  document.querySelector(".js-hour").innerHTML = hoursLeft;
  document.querySelector(".js-min").innerHTML = minsLeft;
  document.querySelector(".js-sec").innerHTML = secsLeft;

  if (distance < 0) {
    clearInterval(timer);
    document.querySelector(".js-day").innerHTML = 0;
    document.querySelector(".js-hour").innerHTML = 0;
    document.querySelector(".js-min").innerHTML = 0;
    document.querySelector(".js-sec").innerHTML = 0;
  }
}, 1000);
