const {userValidate} = require("../middlewares/user");
const {productValidate} = require("../middlewares/product");

// Perguntar DATA(any) Especifica
function getById(data, id) {
    const result = data.find((e) => e.id === id);
    return result ? result : 'Not found'
}

// Perguntar DATA(users) Especifica
function createUser(users, user) {
   const errors = userValidate(users, user);

    if (errors.length === 0) {
        const newId = users.length + 1;
        const newUser = {
            id: newId,
            ...user // AQUI
        };
        users.push(newUser);
        return `Success! User: ${user.name} with id: ${newId} was created.`

    } else {
        return errors;

    }
};

///produto COMECA AQUI

function createProduct(products, product) {

   const  validProduct = productValidate(products, product)
 
   if(validProduct) return validProduct

    const newId = products.length + 1;
    const newProduct = {
        id: newId,
        model,
        color,
        price: Number(price),
        sizesAvailable,
        quantity: Number(quantity)
    };
    products.push(newProduct);
    return `Success! Product: ${product.model} with id: ${newId} and you have ${product.quantity} quantity of this product.`
};

function updateUserById(users, user, id){
    for (let i = 0; i < users.length; i++) {
        const e = users[i];
        if (e.id === id) {
            users[i] = {id, ...user}
            return 'alterado com sucesso!'
        }
    }
}

function deleteUser(users, id) {
    const newUsers = [];
    for (let i = 0; i < users.length; i++) {
        const e = users[i];
        if(e.id !== id){
            newUsers.push(e)
        }  
    }
    users.lenght = 0;
    users.push([...newUsers]);
}

//fazer para o produto tbm.
//delete 
//array e objetos sao mutaveis

module.exports = { getById, createUser, createProduct, updateUserById, deleteUser}