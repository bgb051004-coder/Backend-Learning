let scores = [8, 7, 9, 4, 6, 10];

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

console.log(countPassed(scores));
console.log(findMaxScore(scores));