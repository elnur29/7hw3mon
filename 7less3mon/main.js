let days = document.getElementById('days')
let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')
let block = document.getElementsByClassName("block");


const formatNum = (num) => {
    return num < 10
        ? `0${num}`
        : num
}

let intervalId = setInterval(() => {
    let date = new Date();
    let deadline = new Date(2024, 2, 0, -0, 0);
    let difference = deadline.getTime() - date.getTime();

    if (difference <= 0) {
        clearInterval(intervalId);
        alert("С днём рождения!");
        return;
    }

    days.textContent = formatNum(Math.floor(difference / 1000 / 60 / 60 / 24));
    hours.textContent = formatNum(Math.floor((difference / 1000 / 60 / 60) % 24));
    minutes.textContent = formatNum(Math.floor((difference / 1000 / 60) % 60));
    seconds.textContent = formatNum(Math.floor((difference / 1000) % 60));
}, 1000);






