
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


