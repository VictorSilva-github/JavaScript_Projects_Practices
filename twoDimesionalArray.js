let numberGRID = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [0]
];
console.log(`*************Single content in ARRAY ******************`);
console.log(numberGRID[0][2]);
console.log(numberGRID[1][1]);
console.log(numberGRID[2][2]);
console.log(numberGRID[3][0]);

console.log(`************* FOR LOOP GRID ******************`);
for (let i = 0; i < numberGRID.length; i++) {
    for (let j = 0; j < numberGRID[i].length; j++) {
        process.stdout.write(numberGRID[i][j] + '  ');

        // console.log(numberGRID[i][j]);  OUTRO
    }
    console.log(); // Insert a newline character
}

console.log(`************* NESTED ******************`);
console.log(``);
//NESTED LOOP 
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
        console.log("i = " + i + " -" + " j = " + j);   
    }
}