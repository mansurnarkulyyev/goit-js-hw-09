import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';
import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';

// console.log(flatpickr);

// const refs = {
//     timerElem: document.querySelector('#datetime-picker'),
//     timerStartBtn: document.querySelector('.button [data-start]'),
//     field: document.querySelector('.field'),
//     days: document.querySelector('[data-days]'),
//     hours: document.querySelector('[data-hours]'),
//     minutes: document.querySelector('[data-minutes]'),
//     seconds: document.querySelector('[data-seconds]'),
// }

const refs = {
    timerElem: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
}

refs.startBtn.disabledTime = true;

let timeoutID = null

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] <= options.defaultDate) {
            window.alert('Please choose a date in the future')
            refs.startBtn.disabled = true
        }
        if (selectedDates[0] >= options.defaultDate) {
            {
                refs.startBtn.disabled = false
            }
        }
    },
}


// const options = {
//     enableTime: true,
//     time_24hr: true,
//     defaultDate: new Date(),
//     minuteIncrement: 1,
//     onClose(selectedDates) {
//         // console.log(selectedDates[0]);
//         if (selectedDates[0] <= options.defaultDate) {
//             window.alert('Please choose a date in the future')
//             startBtn;
//         } else if (selectedDates[0] >= options.defaultDate) {
//             startBtn = false;
//         }
//     },
// };

// refs.timerStartBtn = options.enableTime;
// refs.timerElem = options.enableTime;
// const startBtn = refs.timerStartBtn;
// const inputBtn = refs.timerElem;

// console.log(startBtn);
// console.log(inputBtn);


const calendar = flatpickr(refs.timerElem, options)

refs.startBtn.addEventListener('click', onStartBtnClick)

function onStartBtnClick() {
    timeoutID = setInterval(() => {
        updateTime()
    }, 1000)
    refs.timerElem.disabledTime = true
    refs.startBtn.disabledTime = true
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    // Remaining days
    const days = Math.floor(ms / day)
    // Remaining hours
    const hours = Math.floor((ms % day) / hour)
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute)
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second)

    return { days, hours, minutes, seconds }
}

function updateTime() {
    const currentTime = new Date()
    const selectedTime = new Date(refs.timerElem.value)

    const deltaTime = selectedTime - currentTime

    if (deltaTime < 0) {
        return;
    } else {
        const { days, hours, minutes, seconds } = convertMs(deltaTime)
        refs.days.textContent = `${days}`
        refs.hours.textContent = `${hours}`
        refs.minutes.textContent = `${minutes}`
        refs.seconds.textContent = `${seconds}`
    }
}


// ******

// function addLeadingZero(value) {
//     class Timer {
//         constructor({ onTik }) {
//             this.intervalId = null;
//             this.isActive = null;
//             this.onTik = onTik;
//             this.init();
//         }

//         init() {
//             const time = convertMs(0);
//             this.onTik(time);
//         }

//         start() {

//             if (this.isActive) {
//                 return;
//             }
//             const startTime = options.defaultDate;
//             this.isActive = true;

//             this.intervalId = setInterval(() => {
//                 const currentTime = Date.now();

//                 const deltaTime = currentTime.getTime() - startTime.getTime();
//                 const time = convertMs(deltaTime);

//                 this.onTik(time);
//             }, 1000);
//         }

//         // stop() {
//         //     if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
//         //         clearInterval(this.intervalId);
//         //         this.isActive = false;
//         //         const time = this.convertMs(0);
//         //         this.onTik(time);
//         //         alert("Please choose a date in the future");
//         //     }
//         // }

//         convertMs(ms) {  //getTimeComponent
//             // Number of milliseconds per unit of time
//             const second = 1000;
//             const minute = second * 60;
//             const hour = minute * 60;
//             const day = hour * 24;

//             // Remaining days
//             const days = this.pad(Math.floor(ms / day));
//             // Remaining hours
//             const hours = this.pad(Math.floor((ms % day) / hour));
//             // Remaining minutes
//             const minutes = this.pad(Math.floor(((ms % day) % hour) / minute));
//             // Remaining seconds
//             const seconds = this.pad(Math.floor((((ms % day) % hour) % minute) / second));

//             return { days, hours, minutes, seconds };
//         };

       // // addLeadingZero(value)
//         pad(value) {
//             return String(value).padStart(2, '0');
//         };
//     }
// };

// const timer = new Timer({
//     onTik: updateClockFace
// });


// refs.timerBtn.addEventListener('click', () => {
//     if (refs.timerBtn >= 0) {
//         timer.start();
//     }
//     options.onClose();
// });


// function updateClockFace({ days, hours, minutes, seconds }) {
//     refs.field.textContent = `${days}:${hours}:${minutes}:${seconds} `
// }


// **********




// // refs.timerElem = new Date('Jan 1 2024 00:00:00')

// function addLeadingZero(value) {
//     let intervalId;
//     const currentTimer = Date.now();
//     const endTimer = options.defaultDate
//     const ms = endTimer.getTime() - currentTimer.getTime();
//     if (endTimer <= currentTimer) {

//         return;
//     } else if (!intervalId) {
//         intervalId = setInterval(addLeadingZero, 1000);
//     }

//     convertMs(ms);

//     const { days, hours, minutes, seconds } = convertMs(ms);

//     document.querySelector('span[data-days]').textContent = pad(days);
//     document.querySelector('span[data-hours]').textContent = pad(hours);
//     document.querySelector('span[data-minutes]').textContent = pad(minutes);
//     document.querySelector('span[data-seconds]').textContent = pad(seconds);

//     if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
//         clearInterval(intervalId);
//         alert("Please choose a date in the future");
//     }
// }

// refs.timerBtn.addEventListener('click', addLeadingZero);



// function pad(value) {
//     return String(value).padStart(2, '0');
// };

// function convertMs(ms) {  //getTimeComponent
//     // Number of milliseconds per unit of time
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;

//     // Remaining days
//     const days = Math.floor(ms / day);
//     if (days < 10) {
//         days = `0 ${days}`;
//     }
//     // Remaining hours
//     const hours = Math.floor((ms % day) / hour);
//     if (hours < 10) {
//         hours = `0 ${hours}`;
//     }
//     // Remaining minutes
//     const minutes = Math.floor(((ms % day) % hour) / minute);
//     if (minutes < 10) {
//         minutes = `0 ${minutes}`;
//     }
//     // Remaining seconds
//     const seconds = Math.floor((((ms % day) % hour) % minute) / second);
//     if (seconds < 10) {
//         seconds = `0 ${seconds}`;
//     }

//     return { days, hours, minutes, seconds };

// };


// ********


// refs.timerElem = new Date('Jan 1 2024 00:00:00')

// function addLeadingZero(value) {
//     let intervalId;
//     const currentTimer = Date.now();
//     const endTimer = options.defaultDate
//     const ms = endTimer.getTime() - currentTimer.getTime();
//     if (endTimer <= currentTimer) {

//         return;
//     } else if (!intervalId) {
//         intervalId = setInterval(addLeadingZero, 1000);
//     }

//     convertMs(ms);

//     const { days, hours, minutes, seconds } = convertMs(ms);

//     document.querySelector('span[data-days]').textContent = this.pad(days);
//     document.querySelector('span[data-hours]').textContent = this.pad(hours);
//     document.querySelector('span[data-minutes]').textContent = this.pad(minutes);
//     document.querySelector('span[data-seconds]').textContent = this.pad(seconds);

//     if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
//         clearInterval(intervalId);
//         alert("Please choose a date in the future");
//     }

//     pad(this.value) {
//         return String(this.value).padStart(2, '0');
//     },
// }

// refs.timerBtn.addEventListener('click', addLeadingZero);


// // // console.log(options);
// // flatpickr(refs.timerElem, options)
// // console.log(options.onClose);

// **********

// const PROMPT_DELAY = 1000;
// const MAX_PROMPT_ATEMS = 3;

// let promptCounter = 0;
// let hasSubscribed = false;

// const TIMER_DEADLINE = new Date(2022, 5, 3);
// const TIMER_DEADLINE = options.defaultDate;
// const TIMER_DEADLINE = new Date(Date.parse(new Date()) + 11 * 24 * 60 * 60 * 1000);
// if (TIMER_DEADLINE <= selectedDates) {
//     window.alert("Please choose a date in the future")
// }

// const timerEl = document.querySelector('.timer');
// ******


// const buttonClick = document.querySelector('button[data-start]');
// buttonClick.addEventListener('click', () => {

//     const intervalId = setInterval(() => {

//         // if (promptCounter === MAX_PROMPT_ATEMS || hasSubscribed) {
//         //     window.alert("Please choose a date in the future")
//         //     clearInterval(intervalId)
//         //     return;
//         // }
//         console.log('hello ' + Date.now());
//         promptCounter += 1;

//     }, PROMPT_DELAY)
// });


// // *******



// class Timer {
//     constructor({ onTik }) {
//         this.intervalId = null;
//         this.isActive = null;
//         this.onTik = onTik;
//         this.init();
//     }

//     init() {
//         const time = convertMs(0);
//         this.onTik(time);
//     }

//     start() {

//         if (this.isActive) {
//             return;
//         }
//         const startTime = Date.now();
//         this.isActive = true;

//         this.intervalId = setInterval(() => {
//             const currentTime = Date.now();

//             const deltaTime = currentTime - startTime;
//             const time = convertMs(deltaTime);

//             this.onTik(time);
//         }, 1000);
//     }

//     stop() {
//         clearInterval(this.intervalId);
//         this.isActive = false;
//         const time = this.convertMs(0);
//         this.onTik(time);
//     }

//     convertMs(ms) {  //getTimeComponent
//         // Number of milliseconds per unit of time
//         const second = 1000;
//         const minute = second * 60;
//         const hour = minute * 60;
//         const day = hour * 24;

//         // Remaining days
//         const days = this.pad(Math.floor(ms / day));
//         // Remaining hours
//         const hours = this.pad(Math.floor((ms % day) / hour));
//         // Remaining minutes
//         const minutes = this.pad(Math.floor(((ms % day) % hour) / minute));
//         // Remaining seconds
//         const seconds = this.pad(Math.floor((((ms % day) % hour) % minute) / second));

//         return { days, hours, minutes, seconds };
//     };

//     pad(value) {
//         return String(value).padStart(2, '0');
//     };
// }


// const timer = new Timer({
//     onTik: updateClockFace
// });


// refs.startButtonClick.addEventListener('click', () => {
//     timer.start();

// });

// refs.startButtonClick.addEventListener('click', () => {
//     options.onClose();
// });


// function updateClockFace({ days, hours, minutes, seconds }) {
//     refs.field.textContent = `${days}:${hours}:${minutes}:${seconds} `
// }



// ******

// const timer = {
//     intervalId: null,



//     start(rootSelector, deadline) {

//         if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
//             clearInterval(intervalId);
//             alert("Please choose a date in the future");
//         }

//         this.intervalId = setInterval(() => {
//             // const now = new Date();//тоже самое как Date.now()
//             const ms = deadline - Date.now();
//             // console.log(Math.floor(ms / 1000 / 60 / 60 / 24));// как посчитать дни
//             const { days, hours, minutes, seconds } = this.convertMs(ms);

//             rootSelector.querySelector('span[data-days]').textContent = this.pad(days);
//             rootSelector.querySelector('span[data-hours]').textContent = this.pad(hours);
//             rootSelector.querySelector('span[data-minutes]').textContent = this.pad(minutes);
//             rootSelector.querySelector('span[data-seconds]').textContent = this.pad(seconds);
//         }, 1000)
//     },

//     stop(e) {
//         if (e.total <= 0) {
//             window.alert("Please choose a date in the future")
//             clearInterval(this.intervalId)
//         }
//     },

//     pad(value) {
//         return String(value).padStart(2, '0');
//     },

//     convertMs(ms) {
//         // Number of milliseconds per unit of time
//         const second = 1000;
//         const minute = second * 60;
//         const hour = minute * 60;
//         const day = hour * 24;

//         // Remaining days
//         const days = Math.floor(ms / day);
//         // Remaining hours
//         const hours = Math.floor((ms % day) / hour);
//         // Remaining minutes
//         const minutes = Math.floor(((ms % day) % hour) / minute);
//         // Remaining seconds
//         const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//         return { days, hours, minutes, seconds };
//     },

// };


// // // console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// // // console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// // // console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
// timer.start(timerElem, TIMER_DEADLINE);
// // // timer.stop();

// // console.log(Date.now());

// ********
