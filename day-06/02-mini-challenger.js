let students = [
    {name: "An", score: 8},
    {name: "Binh", score: 4},
    {name: "Linh", score: 10},
    {name: "Dung~", score: 6},
    {name: "Ha?", score: 3},
];

let names = students.map(function(student){
    return student.name;
});

console.log(names);

let passed = students.filter(function(student){
    return student.score >= 5;
});

console.log(passed);

let topStudent = students.find(function(student){
    return student.score > 8;
});

console.log(topStudent);

let hasFailed = students.some(function(student){
    return student.score < 5;
});

console.log(hasFailed);

let allPassed = students.every(function(student){
    return student.score >= 5;
});

console.log(allPassed);

let total = students.reduce(function(accumulator, student){
    return accumulator + student.score;
}, 0);

console.log(total);