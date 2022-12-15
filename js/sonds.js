import { Elements } from "./index.js";

export function Sonds() {
    
    let song;
    let currentTheme;

    function themes(theme) {

        if(song == undefined) {
    
            song = new Audio();
            song.src = `./sounds/${theme}.mp3`;
            song.loop = true;
        
            song.volume = 0.5;

            song.play();
            volumeReset(`${theme}`);

            return song, currentTheme = `${theme}`;
        }

        if(song.src.includes(`${theme}`)) {

            stop();
            return song = null, currentTheme = `${theme}`;

        } else {

            stop();
    
            song = new Audio();
            song.src = `./sounds/${theme}.mp3`;
            song.loop = true;
        
            song.volume = 0.5;

            song.play();

            volumeReset(`${theme}`);

            return song, currentTheme = `${theme}`;
        };
    };
    
    function stop() {
        song != undefined ? song.pause() : song = null;
    };

    function alarm() {

        song = new Audio();
        song.src = 'sounds/alarm.mp3';

        song.play();
    };

    function rangeVolume(card) {
        
        if(currentTheme == card) {

            const volume = document.querySelector(`.volume-${card}`).value;
            
            song.volume = volume / 100;
        };
    };

    function volumeReset(card) {

        document.querySelector(`.volume-${card}`).value = 50;
    };

    function sondReset() {

        song = null;
    }

    return {
        themes,
        stop,
        alarm,
        rangeVolume,
        volumeReset,
        sondReset
    };
};