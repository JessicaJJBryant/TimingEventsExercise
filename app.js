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

