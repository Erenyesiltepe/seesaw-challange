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

    parent.appendChild(ball);
}