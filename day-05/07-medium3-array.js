let numbers = [3, 8, 5, 10, 7, 12];

function findMax(numbers){
    let max = numbers[0];
    for(let number of numbers){
        if(number > max){
            max = number;
        }
    }
    return max;
}

console.log(findMax(numbers));