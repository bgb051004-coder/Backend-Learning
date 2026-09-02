let scores = [8, 7, 9, 4, 6, 10];

function calculateAvg(scores){
    let sum = 0;
    for(let score of scores){
        sum += score;
    }
    return sum/scores.length;
}

function countPassed(scores){
    let count = 0;
    for(let score of scores){
        if(score >= 5){
            count++;
        }
    }
    return count;
}

function findMaxScore(scores){
    let max = scores[0];
    for(let score of scores){
        if(score > max){
            max = score;
        }
    }
    return max;
}

console.log(`Average: ${calculateAvg(scores)}` );
console.log(`Passed: ${countPassed(scores)}`);
console.log(`Max: ${findMaxScore(scores)}`);