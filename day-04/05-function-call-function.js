function isEven(number) {
    return number % 2 === 0;
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

console.log(countEvenNumbers(1, 10));