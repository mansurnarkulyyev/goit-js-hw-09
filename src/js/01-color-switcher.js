
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');



function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


let timerId = null;

startBtn.addEventListener("click", () => {
    timerId = setInterval(() => {
        const _color = getRandomHexColor();
        console.log(_color)
        document.body.style.backgroundColor = _color
    }, 1000);
});


stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
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


