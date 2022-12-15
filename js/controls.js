import { Elements } from "./index.js";

export { Control };

function Control() {

    function play() {
        
        Elements.play.classList.add('hide');
        Elements.pause.classList.remove('hide');
    };

    function pause() {

        Elements.play.classList.remove('hide');
        Elements.pause.classList.add('hide');
    };

    function dark() {

        Elements.dark.classList.add('hide');
        Elements.light.classList.remove('hide');
    };

    function light() {

        Elements.light.classList.add('hide');
        Elements.dark.classList.remove('hide');
    };

    return {
        play,
        pause,
        dark,
        light
    };
};