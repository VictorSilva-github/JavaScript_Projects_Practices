function productValidate(products, product) {
    if (!Array.isArray(products)) {
        return "ERROR! Not an Array!"
    }

    if (typeof product !== "object") {
        return "Not found, cannot create!"
    }

    const { model, price, color, sizesAvailable, quantity } = product;

    if (!model || isNaN(Number(price)) || !color || !sizesAvailable ||
        isNaN(Number(quantity))) {
        return "Invalid form submission. fill in all form.";
    }

    //validacoes adicionais
    if (model.length < 4) {
        return 'The "model" should be more than 4 characters.';
    }

    if (price <= 0 || quantity <= 0) {
        return "Price and quantity should be greater than zero.";
    }


    if (!Array.isArray(sizesAvailable) || sizesAvailable.length < 4) {
        return "ERROR not array! sizes is not valid! it shoud be: 21, 32, 43, 23"
    }

    return null
}


module.exports = {productValidate}