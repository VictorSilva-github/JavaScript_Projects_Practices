const timeNow = new Date();
const hour = timeNow.getHours();

console.log(`The currently time is ${hour} hours.`);

if (hour < 12) {
    console.log('Good Morning');
} else if (hour <= 18){
    console.log('Good afternoon');
} else {
    console.log('Good night');
}