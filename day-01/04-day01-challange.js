//Bai 1
const name = "Bao";
const age = 22;
const height = 1.65;
const isStudent = true;

console.log(`My name is ${name}. I am ${age} years old. I am ${height} meters tall. I am a student: ${isStudent}.`);

//Bai 2
const birthYear = 2004;
const currentYear = 2026;

const age2= currentYear - birthYear;

console.log(`I am ${age2} years old.`);

//Bai 3
let score = 50;

score += 20;
score *= 2;
score -= 10;

console.log(`Final score: ${score}.`);

//Bai 4
const isAdult = 18;

console.log(`isAdult: ${age >= isAdult}`);

//Bai 5
const hasID = true;
const canEnter = age >= isAdult && hasID;

console.log(`Can enter: ${canEnter}`);

// Bai 6
const price = "100";
const quantity = 3;
//price + quantity = 1003

const total = Number(price) * quantity;

console.log(`Total price: ${total}`);

//Bai 7
const username = "";
const password = "123456";

const canLogin = username !== "" && password.length >= 6;

console.log(`Can login: ${canLogin}`);

// Bai 8
const score2 = "85";
const hasCertificate = true;

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Score: ${Number(score2)}`);
console.log(`Has certificate: ${hasCertificate}`);
console.log(`Adult: ${age >= 18}`);
console.log(`Passed: ${Number(score2) >= 50 && hasCertificate}`);

