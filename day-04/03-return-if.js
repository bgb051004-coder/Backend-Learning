function checkAge(age){
    if(age >= 18){
        return "Adult";
    }else{
        return "Minor";
    }
}

console.log(checkAge(20));
console.log(checkAge(12));