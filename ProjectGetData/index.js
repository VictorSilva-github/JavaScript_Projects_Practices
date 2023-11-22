// importando metodos e data
const users = require('./data/users');
const products = require('./data/products');
const { getById, createUser, createProduct } = require ('./functions/script')

//elemento por ID
// const user_2 = getById(users, 2);
// console.log(user_2);

// //Elemento not FOUND
// const product_2 = getById(products, 20);
// console.log(product_2);


console.log('***** Criando new User *****');
// const create_user_31 = createUser(users,
//     {
//         id: 31,
//         name: 'Victor',
//         email: 'victor@gmail.com',
//         password: 'dsfsf22133'
//     });

// console.log(create_user_31);
// console.log(users);


console.log('***** Criando new Product *****');
// const create_product_23 = createProduct(products,
//     {
//         model: 'Rog Ally',
//         color: 'White',
//         price: 5000,
//         sizesAvailable: [25, 25, 14, 63],
//         quantity: 5
//     });

const create_product_10 = createProduct(products, "Victor");

// console.log(create_product_23);
console.log(create_product_10);
console.log(products);

console.log(products.length);