import { addBall } from "./ballHandler.js"

function clickListener(e) {
    //console.log("listener clicked", e.offsetX, " ", e.offsetY);
    const parent = e.currentTarget;
    addBall(parent, e.offsetX, e.offsetY);
}

export function bindListeners() {
    const plankElement = document.getElementById("plank");
    plankElement.addEventListener("click", clickListener);
}