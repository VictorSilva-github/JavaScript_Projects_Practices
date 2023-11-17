const array = [1, 2, 3, 4, 5];

//percorre um array
// for(const i of array){
//     console.log(i);
// }


//percorre um array
// array.forEach(item => {
//     console.log(item);
// });


//MAP percorre um array...
// Com o MAP eu consigo fazer um retorno

const newArray = array.map(item =>{
    return item * 10
});
console.log(newArray);