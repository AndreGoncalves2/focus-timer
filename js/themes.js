import { Elements } from "./index.js";
import { Sonds } from "./sonds.js";

let sonds = Sonds();

let colors = {};

const cardColors = {

    blue: 'rgb(2, 121, 157)',
    grey: 'rgb(225, 225, 230)',
    white: 'rgb(255, 255, 255)',
    backgroundBlack: 'rgb(41, 41, 46)',
    backgroundBlue: 'rgb(10, 52, 66)',
    black: 'rgb(50, 50, 56)',
    purple: 'rgb(196, 196, 204)'
};

let elementInFocus;

export function Themes() {

    function inFocus() {
        
        if(elementInFocus != document.querySelector('#themes button:focus')) {
            resetFocus();
        };

        elementInFocus = document.querySelector('#themes button:focus');
        if(Elements.dark.classList.contains('hide')) {

            if(elementInFocus.style.backgroundColor == cardColors.blue) {
    
                elementInFocus.style.backgroundColor = cardColors.grey;
                elementInFocus.style.scale = 1;
                elementInFocus.querySelector('svg path').style.fill = cardColors.black;
            } else {
                
                elementInFocus.style.backgroundColor = cardColors.blue;

                elementInFocus.style.scale = 1.1;
                elementInFocus.querySelector('svg path').style.fill = cardColors.white;
            };

        } else {

            if(elementInFocus.style.backgroundColor == cardColors.backgroundBlue) {
    
                elementInFocus.style.backgroundColor = cardColors.backgroundBlack;
                elementInFocus.style.scale = 1;
                elementInFocus.querySelector('svg path').style.fill = cardColors.purple;

            } else {
                
                elementInFocus.style.backgroundColor = cardColors.backgroundBlue;

                elementInFocus.style.scale = 1.1;
                elementInFocus.querySelector('svg path').style.fill = cardColors.white;
            };
        };
    };

    function resetFocus() {

        const notFocus = document.querySelectorAll('#themes button:not(button:focus)');
        const notFocusHover = document.querySelectorAll('#themes button:not(button:focus):hover');

        for(let i = 0; i < notFocus.length; i++) {

            if(Elements.dark.classList.contains('hide')) {

                notFocus[i].style.backgroundColor = cardColors.grey;
                notFocus[i].querySelector('svg path').style.fill = cardColors.black;
            }else {
                
                notFocus[i].style.backgroundColor = cardColors.backgroundBlack;
                notFocus[i].querySelector('svg path').style.fill = cardColors.purple;
            };

            notFocus[i].style.scale = 1;
        };
    };

    function theme(theme) {
                
        const span = document.querySelector('span');
        const buttons = document.querySelectorAll('.buttons button path');;
        const cards = document.querySelectorAll('#themes button');
        const cardsThemes = document.querySelectorAll('#themes button svg path');

        switch(theme) {
            
            case 'dark':

                colors = {
                    
                    number: '#FFFFFF',
                    fill: '#C4C4CC',
                    card: '#29292E',
                    background: '#121214'
                };
                break;
            
            case 'light':

                colors = {
                
                    number: '#323238',
                    fill: '#323238',
                    card: '#E1E1E6',
                    background: '#FFFFFF'
                };
                break;
        };
            
        for(let i = 0; i < cardsThemes.length; i++) {

            cardsThemes[i] .style.fill = colors.fill;
            cards[i].style.backgroundColor = colors.card;
        };
        
        Elements.minutes.style.color = colors.number;
        Elements.minutes.style.backgroundColor = colors.background;
        Elements.seconds.style.color = colors.number;
        span.style.color = colors.number;
        Elements.body.style.backgroundColor = colors.background;


        for(let i = 0; i < buttons.length; i++) {
            
            buttons[i].style.fill = colors.fill;
        };

        resetFocus();
    };

    return {
        inFocus,
        theme
    };
};