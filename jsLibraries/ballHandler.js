import { state } from "./state.js"
import { animatePlank } from "./animation.js";
import { saveToLocalStorage } from "./localStorageHandler.js";
import { viewWeight } from "./weightViewer.js";

const ballSize = 30;
const colorMap = {
    1: "white",
    2: "brown",
    3: "orange",
    4: "red",
    5: "blue",
    6: "skyblue",
    7: "antiquewhite",
    8: "purple",
    9: "yellow",
    10: "grey"
}

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
    ball.style.backgroundColor = colorMap[weight];

    state.balls.push({
        weight: weight,
        left: left,
        top: top
    })
    //console.log(state.balls)
    parent.appendChild(ball);
    animatePlank(parent);
    viewWeight();

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
        ball.style.backgroundColor = colorMap[oldball.weight];
        //console.log(state.balls)
        plank.appendChild(ball);
    });

    animatePlank(plank);
    viewWeight();
}