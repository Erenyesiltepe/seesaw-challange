import { state } from "./state.js"

export function animatePlank(plank) {
    const torque = calculateTorque();
    const angle = Math.max(-30, Math.min(30, (torque) / 10));
    plank.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;;
}

function calculateTorque() {
    let torque = 0;
    state.balls.forEach((ball) => {
        torque += (ball.left - 200) * ball.weight;
    })
    return torque;
}