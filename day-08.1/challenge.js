let candidate = {
    name: "  Nguyen An  ",
    email: "  AN.NGUYEN@EXAMPLE.COM",
    skills: "  JavaScript, Node.js, SQL, Git ",
};

let cleanName = candidate.name.trim();
console.log(cleanName);

let cleanEmail = candidate.email.trim().toLowerCase();
console.log(cleanEmail);

let cleanSkills = candidate.skills.trim();
let a = cleanSkills.split(",").map(function(skills){
    return skills.trim();
});
console.log(cleanSkills);
console.log(a);

console.log(a.length);

console.log(a.includes("Node.js"));

console.log(`Nguyen An knows ${a.length} technologies.`);

console.log(candidate);