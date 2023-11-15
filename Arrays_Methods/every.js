const array = [1, 2, 3, 4, 5]; //se eu colocar uma STRING vai dar FALSE

//retorna TRUE OR FALSE
const everyItemsSaoNumeros = array.every(item => typeof item === 'number');

console.log(everyItemsSaoNumeros);