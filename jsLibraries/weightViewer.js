import { state } from "./state.js";

export function viewWeight() {
    let leftWeight = 0;
    let rightWeight = 0;
    state.balls.forEach((b) => {
        b.left < 200 ?
            leftWeight += b.weight
            : rightWeight += b.weight
    });

    const leftWeightElement = document.querySelector("#leftweight>:nth-child(2)")
    leftWeightElement.innerHTML = `${leftWeight}kg`;

    const rightWeightElement = document.querySelector("#rightweight>:nth-child(2)")
    rightWeightElement.innerHTML = `${rightWeight}kg`;
}