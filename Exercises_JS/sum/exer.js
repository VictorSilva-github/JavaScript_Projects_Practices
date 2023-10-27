let action = "mult";
let a = 5;
let b = 10;

switch (action) {
    case "sum":
        console.log(`Sum: ${a + b}`);
        break;
    case "sub":
        console.log(`Sum: ${a - b}`);
        break;
    case "mult":
        console.log(`Sum: ${a * b}`);
        break;

    default:
        console.log("Not number");
        break;
}