import { state } from "./state.js";
import { loadBalls } from "./ballHandler.js";

export function saveToLocalStorage() {
    localStorage.setItem("ballState", JSON.stringify(state.balls));
}

export function loadFromStorage() {
    try {
        const ballState = localStorage.getItem("ballState");
        state.balls = JSON.parse(ballState)
        console.log(state.balls);
        loadBalls();
    } catch (e) {
        state.balls = [];
        console.log(e);
    }
}

