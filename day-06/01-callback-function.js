let fruits = ["apple", "banana", "orange"];

let result = fruits.map(function(fruit, index) {
    return `${index}: ${fruit}`;
});

console.log(result);