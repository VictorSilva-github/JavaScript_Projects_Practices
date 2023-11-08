// selecting the img
let ladybug = document.querySelector('#ladybug');
let stopMessage = document.querySelector('#stopMessage');

// initial position 
let x = 0;
let y = 0;
// speed in pixels
let speed = 5;

// cannot go out of the edge of your window. 
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

// key: "Enter"
// keyCode: 13
function checkLadybugOverlap() {
    const ladybugRect = ladybug.getBoundingClientRect();
    const stopMessageRect = stopMessage.getBoundingClientRect();

    // Check if ladybug overlaps the stop message text
    // compare both
    const ladybugOverlapsMessage = !(
        ladybugRect.right < stopMessageRect.left ||
        ladybugRect.left > stopMessageRect.right ||
        ladybugRect.bottom < stopMessageRect.top ||
        ladybugRect.top > stopMessageRect.bottom
    );
    return ladybugOverlapsMessage;
}

document.addEventListener('keydown', (e) => {
    // console.log(e); // USING CONSOLE LOG TO SEE WHAT KEYS WAS PRESSED
    if (e.keyCode === 37 && x > 0) {
        // move left
        x -= speed;
        console.log(x); //if the X is 0 is not going to move.
        ladybug.style.left = x + 'px';
        ladybug.style.transform = 'rotate(270deg)';

    } else if (e.keyCode === 38 && y > 0) {
        // move up
        y -= speed;
        console.log(x); //if the Y is 0 is not going to move.
        ladybug.style.top = y + 'px';
        ladybug.style.transform = 'rotate(-0deg)';

    } else if (e.keyCode === 39 && x + 100 < windowWidth) {
        // move right
        x += speed;
        console.log(x); //if the X is 0 is not going to move.
        ladybug.style.left = x + 'px';
        ladybug.style.transform = 'rotate(90deg)';

    } else if (e.keyCode === 40 && y + 100 < windowHeight) {
        // move down
        y += speed;
        console.log(y); //if the Y is 0 is not going to move.
        ladybug.style.top = y + 'px';
        ladybug.style.transform = 'rotate(180deg)';
    }
    // stores the return value in ladybugOverlapsMessage
    // providing a true or false value.
    const ladybugOverlapsMessage = checkLadybugOverlap();

    // This conditional statement checks if ladybugOverlapsMessage is true
    // if is TRUE CSS style will be applied.
    if (ladybugOverlapsMessage) {
        stopMessage.classList.add('hovered');
    } else {
        // FALSE = no overlap, this line removes the 'hovered' 
        stopMessage.classList.remove('hovered');
    }

    // this condition checks if the pressed key's code is 13
    // the 'Enter' key and whether ladybugOverlapsMessage is true.
    // it will toggles the message if both are TRUE.
    if (e.keyCode === 13 && ladybugOverlapsMessage) {
        window.open('https://victorsilva-github.github.io/', '_blank');
    }
});


