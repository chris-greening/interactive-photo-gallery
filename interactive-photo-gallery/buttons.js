import { controls } from "./photoDisplay.js";

function toggleIcon(icon, removeClass, addClass) {
    icon.classList.remove(removeClass);
    icon.classList.add(addClass);
}

var pause = document.getElementById("pause-button")
pause.addEventListener("click", function () {
    if (controls.isPaused) {
        controls.isPaused = false;
        //controls.dynamicDampingFactor = 0.2;
        controls._thisAngle = controls.minimumSpeed;
        controls._moveCurr = controls._movePrev;
        toggleIcon(pause, "fa-play", "fa-pause");

    } else {
        controls.isPaused = true;
        //controls.dynamicDampingFactor = 0.5;
        toggleIcon(pause, "fa-pause", "fa-play");

    }
});