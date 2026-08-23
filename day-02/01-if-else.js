//Bai 1
const age = 20;

if(age >= 18){
    console.log("You are an adult.");
}else {
    console.log("You are a minor.")
}
//Bai 2
const score = 75;

if(score >= 90 && score <= 100){
    console.log("A");
} else if(score >= 80){
    console.log("B");
} else if(score >= 70){
    console.log("C");
} else if(score >= 60){
    console.log("D");
} else {
    console.log("F");
}

//Bai 3
const hasID = true;

if(age >= 18 && hasID){
    console.log("Access granted");
} else {
    console.log("Access denied");
}

//Bai 4
const username = "Bao";
const password = "123456";

if(username === "Bao" && password === "123456"){
    console.log("Login successful");
} else {
    console.log("Invalid username or password");
}