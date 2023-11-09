// calling a function
document.onkeydown = keyboard; 

function keyboard(e) {
    if (e.keyCode == 38) {
        // arrow UP
        document.getElementById('info').innerHTML = 'Arrow UP!'
    }
    else if (e.keyCode == 40) {
        // Arrow Down
        document.getElementById('info').innerHTML = 'Arrow Down!'
    }
    else if (e.keyCode == 37) {
        // Arrow Left
        document.getElementById('info').innerHTML = 'Arrow Left!'
    }
    else if (e.keyCode == 39) {
        // Arrow Right
        document.getElementById('info').innerHTML = 'Arrow Right!'
    }
}

