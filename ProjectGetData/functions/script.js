// Perguntar DATA(any) Especifica
function getById(data, id){
    const result = data.find((e) => e.id === id);
    return result ? result : 'Not found'
}

// Perguntar DATA(users) Especifica
function createUser(users, user){
    users.push(user)
    return `Success! User: ${user.name} with id: ${user.id} was created.` 
}

// verficar se o primeiro paramentro (products e users) é um ARRAY
// fazer o mesmo para user
// verificar produto e objeto
// criar user + newID
// novo user, vericar se é object

// terca 4 horas


function createProduct(products, product){
    
    if(typeof product !== "object") {
        return "Not found, cannot create!"
    }

    const newId = products.length + 1;
    const newProduct = {
        id: newId,
        // ...product
        model: product.model,
        color: product.color,
        price: product.price,
        sizesAvailable: product.sizesAvailable,
        quantity: product.quantity
    }
    products.push(newProduct);
    return `Success! Product: ${product.model} with id: ${newId} and you have ${product.quantity} quantity of this product.`
}

module.exports = {getById, createUser, createProduct}