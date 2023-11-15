const array = [1, 2, 3, 4, 5];

//filter so filtra o array, nao modifica ele.
const newArray = array
.filter( item => item % 2 === 0)
console.log(newArray);


//Aqui retorna filtro e multiplica por 10
const newArray2 = array
.filter( item => item % 2 === 0)
.map(item => item * 10);
console.log(newArray2);
