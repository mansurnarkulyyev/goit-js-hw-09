
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body')

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let timerId = null;

stopBtn.disabled = true;


startBtn.addEventListener("click", () => {
    startBtn.disabled = true
    stopBtn.disabled = false

    timerId = setInterval(() => {
        const _color = getRandomHexColor();
        console.log(_color)
        document.body.style.backgroundColor = _color;

    }, 1000);
});


stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    startBtn.disabled = false
    stopBtn.disabled = true
    // console.log(`Interval with id ${timerId} has stopped!`);
});






//     setRandomColor = () => {
//         const _color = getRandomHexColor();
//         console.log(_color)
//         document.body.style.backgroundColor = _color
//     }

// let interval = undefined

// startBtn.addEventListener('click', e => interval = interval ?
//     interval :
//     setInterval(() => setRandomColor(), 1000))

// stopBtn.addEventListener('click', e => clearInterval(interval));



// const intervalId = setInterval(() => {
//     startBtn.addEventListener('click', () => {
//         document.body.style.backgroundColor = getRandomHexColor();
//         //   colorValue.textContent = getRandomHexColor();
//     })
//     // console.log('hello');
// }, 1000)

// stopBtn.addEventListener('click', () => {
//     clearTimeout();
//     // clearInterval(intervalId);


