
import Notiflix from 'notiflix';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

console.log(flatpickr);




// // flatpickr(selector, options)
// const TIMER_DEADLINE = new Date(2022, 5, 2);
// const timerEl = document.querySelector('.timer');

// const timer = {
//     intervalId: null,

//     start(rootSelector, deadline) {
//         this.intervalId = setInterval(() => {
//             // const now = new Date();//тоже самое как Date.now()
//             const ms = deadline - Date.now();
//             // console.log(Math.floor(ms / 1000 / 60 / 60 / 24));// как посчитать дни
//             const { days, hours, minutes, seconds } = this.convertMs(ms);

//             rootSelector.querySelector('.field').textContent = this.pad(days);
//             rootSelector.querySelector('.field').textContent = this.pad(hours);
//             rootSelector.querySelector('.field').textContent = this.pad(minutes);
//             rootSelector.querySelector('.field').textContent = this.pad(seconds);
//         }, 1000)
//     },
//     stop() {
//         clearInterval(this.intervalId)
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


// // console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// // console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// // console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
// timer.start(timerEl, TIMER_DEADLINE);
// timer.stop();

// // console.log(Date.now());