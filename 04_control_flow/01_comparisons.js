const isUserLoggedIn = true
const tempreature = 41

if(tempreature == "41")  // true
{
    console.log("True"); 
}
if(tempreature === "41")  // false
{
    console.log("True");
}

if( 2 != 3)
{
    console.log("True");
}
const score = 500
if(score > 100)
{
    const power = "fly" 
    console.log(`users powers ${power}`);
}

if(score < 500) console.log(`score is ${score}`);

if(score < 150)
{
    console.log("Less then 150");
}
else if (score < 200) {
    console.log("Less then 200");
}
else{
    console.log("Grater then 200");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = true

if(userLoggedIn && debitCard)
{
    console.log("Allowed to buy course");
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User is logged in");
}