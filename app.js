// TIMING EVENTS EXERCISE

// 1.
setTimeout(() => {
    const div1 = document.querySelector(`#first`);
    const p1 = document.createElement(`p`);
    p1.innerText = `Hi`;
    div1.append(p1);
}, 1000);

// 2.
setTimeout(() => {
    const divNesting = document.querySelector(`#timeout-nesting`);
    const pParent = document.createElement(`p`);
    pParent.innerText = `One`;
    divNesting.append(pParent);
    setTimeout(() => {
        const pChild = document.createElement(`p`);
        pChild.innerText = `Two`;
        divNesting.append(pChild);
    }, 1000);
}, 2000);

// 3a.
let counter = 1;
let time = setInterval(() => {
    console.log(counter);
    counter++;
}, 1000);
// 3b.
const stop = document.querySelector(`button`);
stop.addEventListener(`click`, () => {
    clearInterval(time);
});

// BONUS 4.
let min = 2;
let sec = 00;
const div3 = document.querySelector(`#countdown`);
const p3 = document.createElement(`p`);
div3.append(p3);
const countdown = setInterval(() => {
    if (min > 0 && sec === 00) {
        p3.innerText = `${min}:0${sec}`;
        sec = 59;
        min--;
    } else if (sec > 9 && sec < 60) {
        p3.innerText = `${min}:${sec}`;
        sec--;
    } else if (sec > 0 && sec < 10) {
        p3.innerText = `${min}:0${sec}`;
        sec--;
    } else if (min === 0 && sec === 00) {
        p3.innerText = `TIME IS UP`
        clearInterval(countdown);
    }
}, 1000);

// OR (with more math and with a ternary)
const countdown2 = document.querySelector(`#countdown`);
const p4 = document.createElement(`p`);
p4.innerText = `2:00`;
countdown2.append(p4);

const startTime = 2;
let currentTime = startTime * 60;
function updateCountdown() {
    const minutes = Math.floor(currentTime / 60);
    let seconds = currentTime % 60;
    seconds = (seconds < 10) ? `0` + seconds : seconds; //ternary
    p4.innerText = `${minutes}:${seconds}`;
    currentTime--;
}
setInterval(() => {
    updateCountdown();
    // After currentTime is less than 0, the p4.innerText is immediately changed to `TIME IS UP` every time the code in the anonymous arrow function is run.
    if (currentTime < 0) {
        p4.innerText = `TIME IS UP`;
    }
}, 1000);