
let circle = document.querySelector('.circle');
let moveBy = 5; //number of pixels which the (circle) will move when a ArrowKey is pressed
let intervalId;

// This line calculates the maximum horizontal/vertical
// position of the circle on the screen by 
// subtracting the circle’s width/height from the screen.
let xMax = 600 - circle.offsetWidth;
let yMax = 600 - circle.offsetHeight;

let keysPressed = {}; //empty object (keysPressed) to keep track of which arrow keys are currently pressed.

//The initial position of the circle
// to the top-left corner of the screen.
window.addEventListener('load', () => {
    circle.style.position = 'absolute';
    circle.style.left = 0;
    circle.style.top = 0;
});

// KeyDOWN quer dizer SETA apertada
window.addEventListener('keydown', (e) => {
    keysPressed[e.key] = true;

    // This line clears the interval 
    // that moves the circle if it is already running.
    if (intervalId) {
        clearInterval(intervalId);
    }

    intervalId = setInterval(() => {

        // This line checks if the left arrow key is pressed
        if (keysPressed['ArrowLeft'] && parseInt(circle.style.left) > 0) {
            circle.style.left = parseInt(circle.style.left) - moveBy + 'px';
        }

        // This line checks if the right arrow key is presse
        if (keysPressed['ArrowRight'] && parseInt(circle.style.left) < xMax) {
            circle.style.left = parseInt(circle.style.left) + moveBy + 'px';
        }

        // This line checks if the down arrow key is pressed
        if (keysPressed['ArrowUp'] && parseInt(circle.style.top) > 0) {
            circle.style.top = parseInt(circle.style.top) - moveBy + 'px';
        }
        // This line checks if the down arrow key is pressed 
        if (keysPressed['ArrowDown'] && parseInt(circle.style.top) < yMax) {
            circle.style.top = parseInt(circle.style.top) + moveBy + 'px';
        }
    }, 20);
});

// KEYUP quer dizer SOLTAR a SETA.
window.addEventListener('keyup', (e) => {
    keysPressed[e.key] = false;

    if (!keysPressed['ArrowLeft'] && !keysPressed['ArrowRight'] && !keysPressed['ArrowUp'] && !keysPressed['ArrowDown']) {
        clearInterval(intervalId);
    }
});
