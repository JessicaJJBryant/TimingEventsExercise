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
let minute = 2;
let sec = 00;
const div3 = document.querySelector(`#countdown`);
const p3 = document.createElement(`p`);
p3.innerText = `${minute}:${sec}`;
div3.append(p3);
const countdown = setInterval(() => {
    if (minute > 0 && sec === 00) {
        minute--;
        sec = 59;
        p3.innerText = `${minute}:${sec}`;
    } else if (10 <= sec < 60) {
        p3.innerText = `${minute}:${sec}`;
        sec--;
    } else if (sec < 10) {
        p3.innerText = `${minute}:0${sec}`;
        sec--;
    } else if (minute === 0 && sec === 00) {
        p3.innerText = `TIME IS UP`
        clearInterval(countdown);
    }
}, 1000);