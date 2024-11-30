import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const startBtn = document.querySelector("[data-start]");
const input = document.querySelector("#datetime-picker");
console.dir(input)
startBtn.disabled = true;
input.disabled = false;



let userSelectedDate = null;

flatpickr("#datetime-picker", {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {

        if (selectedDates[0] > Date.now()) {
            startBtn.disabled = false;
            userSelectedDate = selectedDates[0];
        } else {
             
                iziToast.show({
    theme: 'light',
    icon: 'icon-person',
    title: 'Hey',
    message: "Please choose a date in the future",
    messageColor: 'red',
    position: 'center', 
    progressBarColor: 'rgb(0, 255, 184)',
    buttons: [
        
        ['<button>OK</button>', function (instance, toast) {
            instance.hide({
                transitionOut: 'fadeOutUp',
                onClosing: function(instance, toast, closedBy){
                    console.info('closedBy: ' + closedBy); // 
                }
            }, toast, 'buttonName');
        }]
    ],
    
});

        }
    }
});

class Timer {
    constructor({ onTik }) {
        this.onTik = onTik;
        this.isActive = false;
        this.intervalId = null;
    }

    start() {
        if (this.isActive || !userSelectedDate) return;
        
        this.isActive = true;
            input.disabled = true;
        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const timeRemaining = userSelectedDate - currentTime; 

            if (timeRemaining <= 0) {
                clearInterval(this.intervalId); 
                this.isActive = false;
                input.disabled = false;

                this.onTik({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const time = this.convertMs(timeRemaining);
            this.onTik(time); 

        }, 1000);
    }

    convertMs(ms) {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const days = Math.floor(ms / day);
        const hours = Math.floor((ms % day) / hour);
        const minutes = Math.floor(((ms % day) % hour) / minute);
        const seconds = Math.floor((((ms % day) % hour) % minute) / second);

        return { days, hours, minutes, seconds };
    }
}

const timer = new Timer({ onTik: updateTimerDisplay });

startBtn.addEventListener("click", timer.start.bind(timer));

function updateTimerDisplay({ days, hours, minutes, seconds }) {
        console.log(days)
        if (String(days).length > 1) {
              document.querySelector("[data-days]").textContent = String(days).padStart(3, "0");  
        }else{document.querySelector("[data-days]").textContent = String(days).padStart(2, "0");}
        document.querySelector("[data-hours]").textContent = String(hours).padStart(2, "0");
        document.querySelector("[data-minutes]").textContent = String(minutes).padStart(2, "0");
        document.querySelector("[data-seconds]").textContent = String(seconds).padStart(2, "0");
}