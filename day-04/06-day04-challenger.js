function isEven(number){
    return number % 2 === 0;
}

function sumEvenNumbers(start, end){
    let sum = 0;
    for(let i = start; i <= end; i++){
        if(isEven(i)){
            sum += i;
        }
    }
    return sum;
}

function countEvenNumbers(start, end){
    let count = 0;
    for(let i = start; i <= end; i++){
        if(isEven(i)){
            count++;
        }
    }
    return count;
}

function averageEvenNumbers(start, end){
    let avg = 0;
    return avg = sumEvenNumbers(start, end)/countEvenNumbers(start, end);
}

console.log(averageEvenNumbers(1, 10)); 
console.log(averageEvenNumbers(10, 20)); 