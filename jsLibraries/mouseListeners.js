import { addBall } from "./ballHandler.js"

function clickListener(e) {
    const plank = e.currentTarget;
    let localX = e.offsetX;
    let localY = e.offsetY;

    if (e.target !== e.currentTarget) {
        localX += e.target.offsetLeft;
        localY += e.target.offsetTop;
    }

    addBall(plank, localX, localY);
}

export function bindListeners() {
    const plankElement = document.getElementById("plank");
    plankElement.addEventListener("click", clickListener);
}