let scores = [8, 7, 9, 6, 10];

function calculateAvg(scores){
    let sum = 0;
    for(let score of scores){
        sum += score;
    }
    return sum/scores.length;
}

console.log(calculateAvg(scores));