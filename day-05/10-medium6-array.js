let numbers = [10, 20, 30, 40];

function calculateAvg(numbers){
    let sum = 0;
    for(let number of numbers){
        sum += number;
    }
    return sum/numbers.length;
}

console.log(calculateAvg(numbers));