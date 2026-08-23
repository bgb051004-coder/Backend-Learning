const age = 22;
const hasID = true;
const isMember = true;

if(age >= 18){
    if(hasID){
        if(!isMember){
            console.log("Access denied: Membership required.");
        } else {
            console.log("Access granted.");
        }
        const message = isMember ? "Welcome back!" : "Not a member.";
        console.log(message);
    } else {
        console.log("Access denied: ID required.");
    }
} else {
    console.log("Too young");
}