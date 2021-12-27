// Elements
let happyMessage = document.querySelector('.happy');
let days = document.querySelector('.left-days');
let minutes = document.querySelector('.left-minutes');
let hours = document.querySelector('.left-hours');
let seconds = document.querySelector('.left-seconds');

// Function
function countDate() {
    // get current date and time
    let date = new Date();
    let currentDay = date.getDate();
    let currentHours = date.getHours();
    let currentMinutes = date.getMinutes();
    let currentSeconds = date.getSeconds();

    // set final date
    let finalDay = 31;
    let finalHours = 23;
    let finalMinutes = 59;
    let finalSeconds = 59;

    // calculate
    let daysLeft = finalDay - currentDay;
    let hoursLeft = finalHours - currentHours;
    let minutesLeft = finalMinutes - currentMinutes;
    let secondsLeft = finalSeconds - currentSeconds;

    // add zero
    if (secondsLeft <= 9) {
        secondsLeft = '0' + secondsLeft;
    }
    if (minutesLeft <= 9) {
        minutesLeft = '0' + minutesLeft;
    }
    if (hoursLeft <= 9) {
        hoursLeft = '0' + hoursLeft;
    }

    // display results in elements that you take from html
    days.textContent = `${daysLeft}`;
    hours.textContent = `${hoursLeft}`;
    minutes.textContent = `${minutesLeft}`;
    seconds.textContent = `${secondsLeft}`;

    // add message when time is out 
    if (daysLeft == 0 && hoursLeft == 0 && minutesLeft == 0 && secondsLeft == 0) {
        happyMessage.textContent = 'Happy New Year!';
    }
}

// update calculation every 1 second, set that interval
setInterval(countDate, 1000);