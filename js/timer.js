import { Control } from "./controls.js";
import { Elements } from "./index.js";
import { inputNumber } from "./index.js";
import { Sonds } from "./sonds.js";

const control = Control();
const sonds = Sonds();

export function Timer() {

    let timeOut; 

    function cont() {

        timeOut = setTimeout(() => {

            let displaySeconds = Elements.seconds.textContent;
            let displayMinutes = Elements.minutes.value;
            
            if(displaySeconds <= 0 && displayMinutes <= 0) {

                stop();
                control.pause();
                sonds.alarm();
                return;
            }

            if(displaySeconds == 0) {

                Elements.minutes.value = String(--displayMinutes).padStart(2, '0');
                Elements.seconds.textContent = 59;

            } else {

                Elements.minutes.value = String(Elements.minutes.value).padStart(2, '0');
                Elements.seconds.textContent = String(--Elements.seconds.textContent).padStart(2, '0');
            };
            cont();
        }, 1000);
    };

    function stop() {
        
        Elements.minutes.value = String(inputNumber).padStart(2, '0');

        Elements.seconds.textContent = '00';
        pause();
    };

    function pause() {
        clearTimeout(timeOut);
    };
    
    function updateDisplay() {
        Elements.minutes.value = '05'
    };

    function sumTime() {

        const newMinutes = Number(Elements.minutes.value) + 5;

        if(newMinutes > 99) {

            Elements.minutes.value = 99;
            Elements.seconds.textContent = 59;

        } else {
            Elements.minutes.value = String(newMinutes).padStart(2, '0');
        };
    };

    function subtrTime() {

        const newMinutes = Number(Elements.minutes.value) - 5;

        if(newMinutes < 0) {
            return

        } else {
            Elements.minutes.value = String(newMinutes).padStart(2, '0');
        };
        
    };

    return {
        cont,
        updateDisplay,
        pause,
        stop,
        sumTime,
        subtrTime
    };
};