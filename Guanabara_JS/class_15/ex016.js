let value = [12,21,1,32,43,74,9,11,22,66,88,22,33];


// for (let i = 0; i < value.length; i++) {

//     console.log(`Position ${i} has a value of: ${value[i]}`);
// }

for (const i in value) {
    console.log(`Position ${i} has a value of: ${value[i]}`);
}
    

console.log(`***************** SORT ****************`);

value.sort((a, b) => b - a);

console.log(`Sorted array: ${value}`);
console.log(`here is the array - ${value}`);