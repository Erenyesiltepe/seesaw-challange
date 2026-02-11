
function clickListener(e) {
    console.log("listener clicked", e.clientX, " ", e.clientY);
}

export function bindListeners() {
    const plankElement = document.getElementById("plank");
    plankElement.addEventListener("click", clickListener);
}