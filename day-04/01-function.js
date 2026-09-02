function showNumbers(){
    for(let i = 1; i <= 5; i++){
        console.log(i);
    }
}

function printEvenNumbers(start, end){
    for(let i = start; i <= end; i++){
        if(i % 2 === 0){
            console.log(i);
        }
    }
}

console.log("Bai 1:");
showNumbers();
console.log("Bai 2:");
printEvenNumbers(1, 20);
console.log(" ");
printEvenNumbers(10, 30);
