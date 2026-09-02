let numbers = [8, 3, 10, 2, 7];

function findMin(numbers){
    let min = numbers[0];
    for(let number of numbers){
        if(number < min){
            min = number;
        }
    }
    return min;
}

console.log(findMin(numbers));