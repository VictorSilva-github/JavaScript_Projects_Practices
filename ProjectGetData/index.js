// importando metodos e data
const users = require('./data/users');
const products = require('./data/products');
const { getById, createUser, createProduct, updateUserById, deleteUser } = require ('./functions/script')

//elemento por ID
// const user_2 = getById(users, 2);
// console.log(user_2);

// //Elemento not FOUND
// const product_2 = getById(products, 20);
// console.log(product_2);


// console.log('***** Criando new User *****');
// const create_user = createUser(users,
//     {
//         name: 'Victor silva',
//         email: 'victor@gmail.com',
//         password: '324342dsfs'
//     });

// console.log(create_user);

// const create_user_1 = createUser(users, {name: "victor"});
// console.log(create_user_1);

// console.log(users);

// const update_1 = updateUserById(users, {
//         name: 'Victor silva',
//         email: 'victor@gmail.com',
//         password: '324342dsfs'
// }, 1) 

// console.log(users)
// console.log(update_1)

const delete_user_1 = deleteUser(users, 2) 
console.log(users)

// console.log('***** Criando new Product *****');
// const create_product_23 = createProduct(products,
//     {
//         model: 'Rog Ally',
//         color: 'White',
//         price: 0,
//         sizesAvailable: [25, 25, 14, 63],
//         quantity: 1
//     });
    
// console.log(create_product_23);

// const create_product_10 = createProduct(products, "Victor");
// console.log(create_product_10);
// console.log(products);
// console.log(products.length);