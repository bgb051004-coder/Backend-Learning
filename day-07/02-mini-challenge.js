let product = {
    name: "Keyboard",
    price: 500,
    stock: 10,
    tags: ["computer", "accessory"],

    getTotalValue: function() {
        return this.price * this.stock;
    } 
};

console.log(product.name);

let field = "price";
console.log(product[field]);

product.price = 450;

product.brand = "Logitech";

console.log(product.getTotalValue());

delete product.stock;

console.log(Object.keys(product));
