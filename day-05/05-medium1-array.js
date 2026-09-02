let numbers = [3, 8, 5, 10, 7, 12];

function countEvenNumbers(numbers){
    let count = 0;
    for(let number of numbers){
        if(number % 2 === 0){
            count++;
        }
    }
    return count;
}

console.log(countEvenNumbers(numbers));