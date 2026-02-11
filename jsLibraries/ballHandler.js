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

    const weight = generateRandomWeight();

    addBallStyle(ball, left, top, weight);

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

export function loadBalls() {
    const plank = document.getElementById("plank");
    state.balls.forEach((oldball) => {
        const ball = document.createElement("div");

        addBallStyle(ball, oldball.left, oldball.top, oldball.weight);

        plank.appendChild(ball);
    });

    animatePlank(plank);
    viewWeight();
}

function generateRandomWeight() {
    return Math.round(Math.random() * 9) + 1;
}

function addBallStyle(ballElement, left, top, weight) {
    ballElement.className = "ball";
    ballElement.style.width = ballSize + "px";
    ballElement.style.height = ballSize + "px";
    ballElement.style.left = `${left}px`;
    ballElement.style.top = `${top}px`;
    ballElement.style.backgroundColor = colorMap[weight];
}