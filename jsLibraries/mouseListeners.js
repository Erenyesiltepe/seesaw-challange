import { addBall } from "./ballHandler.js"
import { resetState } from "./state.js";

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

function moveListener(e) {
    const turret = document.getElementById("turret");

    const gameview = document.getElementById("gameview")
    const rect = gameview.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const turretX = turret.offsetLeft;
    const turretY = turret.offsetTop;

    const dx = mouseX - turretX;
    const dy = mouseY - turretY;
    const angle = Math.atan2(dy, dx) * 180 / Math.PI;

    turret.style.transform = `rotate(${angle}deg)`;
}

export function bindListeners() {
    const plankElement = document.getElementById("plank");
    plankElement.addEventListener("click", clickListener);
    plankElement.addEventListener("mousemove", moveListener);

    const resetElement = document.getElementById("button");
    resetElement.addEventListener("click", resetState);
}