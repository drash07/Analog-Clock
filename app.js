const hour_hand = document.querySelector('#hour');
const minute_hand = document.querySelector('#minute');
const second_hand = document.querySelector('#second');

let date = new Date();

let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();

let hour_position = (hour * 360 / 12) + (minute * (360 / 60) / 12);
let minute_position = (minute * 360 / 60) + (second * (360 / 60) / 60);
let second_position = (second * 360 / 60);

function time() {
    
    second_position += 6;
    minute_position += (6 / 60);
    hour_position += (3 / 360);

    hour_hand.style.transform = "rotate(" + hour_position + "deg)";
    minute_hand.style.transform = "rotate(" + minute_position + "deg)";
    second_hand.style.transform = "rotate(" + second_position + "deg)";
}

setInterval(time, 1000);