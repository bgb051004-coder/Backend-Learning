let numbers = [4, 8, 2, -3, 7, 10];

function hasNegative(numbers){
    for(let number of numbers){
        if(number < 0){
            return true;
        }
    }
    return false;
}

console.log(hasNegative(numbers));