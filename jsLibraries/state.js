import { loadBalls } from "./ballHandler.js";

export const state = {
    balls: []
}

export function resetState() {
    state.balls = [];
    const plank = document.getElementById("plank");
    plank.innerHTML = "";
    loadBalls();
}