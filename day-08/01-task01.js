const product = {
    id: 101,
    name: "Keyboard",
    price: 500,
    stock: 10,
};

const updateProduct = {
    ...product,
    price: 450,
    stock: 8,

};

console.log(updateProduct);
console.log(product);