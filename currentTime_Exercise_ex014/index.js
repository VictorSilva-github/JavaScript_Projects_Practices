
function loading() {
    let msg = window.document.getElementById('msg');
    let img = window.document.getElementById('img');
    let txt = document.getElementById('txt');
    const date = new Date();
    const timeNow = date.getHours();
    const minutes = date.getMinutes(); // Get the current minutes
    // Format minutes to always display two digits
    const formattedMinutes = (minutes < 10 ? '0' : '') + minutes;

    msg.innerHTML = `The current time in your PC is: <strong>${timeNow}:${formattedMinutes}</strong>`;

    if (timeNow >= 0 && timeNow < 12) {
        //morning
        imgTime.src = 'img/morning-round.png';
        document.body.style.background = '#cb7226';
        txt.innerHTML = '<strong>Good Morning</strong>'
    } else if (timeNow >= 12 && timeNow <= 18) {
        // afternoon
        imgTime.src = 'img/afternoon-round.png';
        document.body.style.background = '#727c85';
        txt.innerHTML = '<strong>Good Afternoon</strong>'
    } else {
        //night
        imgTime.src = 'img/night-round.png';
        document.body.style.background = '#222835';
        txt.innerHTML = '<strong>Good Evening</strong>'
    }
}