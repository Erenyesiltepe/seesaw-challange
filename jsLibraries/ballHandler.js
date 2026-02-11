import { state } from "./state.js"
import { animatePlank } from "./animation.js";
import { saveToLocalStorage } from "./localStorageHandler.js";

const ballSize = 30;

export function addBall(parent, x, y) {
    const ball = document.createElement("div");

    const left = x - ballSize / 2;
    const top = y - ballSize / 2;
    console.log(x, y, left, top);

    ball.className = "ball";
    ball.style.width = ballSize + "px";
    ball.style.height = ballSize + "px";
    ball.style.left = `${left}px`;
    ball.style.top = `${top}px`;

    const weight = generateRandomWeight();
    state.balls.push({
        weight: weight,
        left: left,
        top: top
    })
    //console.log(state.balls)
    parent.appendChild(ball);
    animatePlank(parent);

    saveToLocalStorage();
}

export function generateRandomWeight() {
    return Math.round(Math.random() * 9) + 1;
}

export function loadBalls() {
    const plank = document.getElementById("plank");
    state.balls.forEach((oldball) => {
        const ball = document.createElement("div");

        ball.className = "ball";
        ball.style.width = ballSize + "px";
        ball.style.height = ballSize + "px";
        ball.style.left = `${oldball.left}px`;
        ball.style.top = `${oldball.top}px`;
        //console.log(state.balls)
        plank.appendChild(ball);
    });

    animatePlank(plank);
}