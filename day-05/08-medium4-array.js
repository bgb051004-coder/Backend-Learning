let numbers = [4, 8, 2, -3, 7, 10];

function hasNegative(numbers){
    let found = false;
    for(let number of numbers){
        if(number < 0){
            found = true;
            break;
        }
    }
    return found;
}

console.log(hasNegative(numbers));