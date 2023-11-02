let cars = [1,2,3,4,7,3,7,9,11,22,66,88,22,33];

cars[0] = "Teslas"
cars.push("Ford-Ka");
cars.push("UNO");
cars.push("BMW");
console.log(`here is the array - ${cars} `);
console.log(`*********************************`);
console.log(`here is the array - ${cars.length} `);
console.log(`*********************************`);
cars.sort(Number);
console.log(`here is the array - ${cars.sort()}`);
console.log(`*********************************`);

let pos = cars.indexOf(222);
console.log(pos);
let pos1 = cars.indexOf(22);
console.log(pos1);

cars.sort(Number)
console.log(`***************** SORT ****************`);
console.log(`here is the array - ${cars}`);

