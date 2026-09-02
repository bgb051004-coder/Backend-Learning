let numbers = [3, 7, 2, 9, 5, 8, 4];
let count = 0;

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        count++;
    }
}

console.log(count);