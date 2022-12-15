import { Timer } from "./timer.js";
import { Control } from "./controls.js";
import { Sonds } from "./sonds.js";
import { Themes } from "./themes.js";

export { Elements };
export { inputNumber }; 

let inputNumber = '05';
let theme;

const Elements = {
    
    minutes: document.querySelector('.minutes'),
    seconds: document.querySelector('.seconds'), 
    
    play: document.querySelector('.play'),
    pause: document.querySelector('.pause'),
    stop: document.querySelector('.stop'),
    sum: document.querySelector('.sum'),
    subtr: document.querySelector('.subtract'),
    
    florest: document.querySelector('.card-florest'),
    rain: document.querySelector('.card-rain'),
    shop: document.querySelector('.card-shop'),
    fireplace: document.querySelector('.card-fireplace'),
    
    volumeFlorest: document.querySelector('.volume-florest'),
    volumeRain: document.querySelector('.volume-rain'),
    volumeShop: document.querySelector('.volume-shop'),
    volumeFireplace: document.querySelector('.volume-fireplace'),
    
    dark: document.querySelector('.dark'),
    light: document.querySelector('.light'),

    body: document.querySelector('body'),
};



const timer = Timer();
const control = Control();
const themes = Themes();
const sounds = Sonds();

timer.updateDisplay();




Elements.minutes.addEventListener('input', () => {

    Elements.minutes.value = Elements.minutes.value.substring(2, 0);
    timer.pause();
    control.pause();
    
    return inputNumber = Elements.minutes.value;
});

Elements.play.addEventListener('click', () => {
    if(Elements.minutes.value >= 0 && Elements.seconds.
    textContent >= 0) {

        if(Elements.minutes.value == 0 && Elements.seconds.
            textContent == 0) {
                return;
            }
        
        timer.cont();
        control.play();
    } else {
        return;
    };
});

Elements.stop.addEventListener('click', () => {
    timer.stop();
    control.pause();
});

Elements.pause.addEventListener('click', () => {
    control.pause();
    timer.pause();
});

Elements.sum.addEventListener('click', () => {
    timer.sumTime();
    inputNumber = Elements.minutes.value;
});

Elements.subtr.addEventListener('click', () => {
    timer.subtrTime();
    inputNumber = Elements.minutes.value;
});

Elements.florest.addEventListener('click', () => {
    themes.inFocus();
    sounds.themes('florest');
});

Elements.rain.addEventListener('click', () => {
    themes.inFocus();
    sounds.themes('rain');
});

Elements.shop.addEventListener('click', () => {
    themes.inFocus();
    sounds.themes('shop');
});

Elements.fireplace.addEventListener('click', () => {
    sounds.themes('fireplace');
    themes.inFocus();
});

Elements.dark.addEventListener('click', () => {
    control.dark();
    themes.theme(theme = 'light');
    sounds.stop()
    sounds.sondReset();
});

Elements.light.addEventListener('click', () => {
control.light();
    themes.theme(theme = 'dark');
    sounds.stop()
    sounds.sondReset();
});

Elements.volumeFlorest.addEventListener('input', () => {
    sounds.rangeVolume('florest');
})
Elements.volumeRain.addEventListener('input', () => {
    sounds.rangeVolume('rain');
})
Elements.volumeShop.addEventListener('input', () => {
    sounds.rangeVolume('shop');
})
Elements.volumeFireplace.addEventListener('input', () => {
    sounds.rangeVolume('fireplace');
})

