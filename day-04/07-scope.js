function isPassed(score){
    if(score >= 5){
        return true;
    }else{
        return false;
    }
}

function calculateAvg(score1, score2, score3){
    return (score1 + score2 + score3)/3;
}

function checkStudent(score1, score2, score3){
    let avg = calculateAvg(score1, score2, score3);
    if(isPassed(avg)){
        return "Passed";
    }else{
        return "Failed";
    }
}

console.log(checkStudent(8,7,9));
console.log(checkStudent(5,4,3));