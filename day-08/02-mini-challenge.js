const product = {
    id: 101,
    name: "Keyboard",
    price: 500,
    stock: 10,
    category: "Computer",
};

const {name: productName, price: productPrice} = product;
console.log(productName);
console.log(productPrice);

const { name, price, ...details } = product;
console.log(details);

const updateProduct  = {
    ...product,
    price: 450,
}

console.log(updateProduct);

const tags = ["computer", "accessory"];
const newTags = [...tags, "sale"];
console.log(tags);
console.log(newTags);