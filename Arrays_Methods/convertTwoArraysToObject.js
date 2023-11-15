//CONVERT TWO ARRAYS TO AN OBJECT
const info1 = ["Victor", "Silva"];
const info2 = ["born", 1989];

const infos = [info1, info2];
console.log(infos); //it will print 2 ARRAYs
// OUTPUT
//(2) [Array(2), Array(2)]
//[ [ 'Victor', 'Silva' ], [ 'born', 1989 ] ]

const I = Object.fromEntries(infos);
console.log(I);

//paste in browser (console) 