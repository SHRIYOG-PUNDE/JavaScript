//  SINGELTON
// Object.create

// OBJECT LITERALS
const mySym = Symbol("key1")


const jsUser = {
    name : "Shriyog",
    [mySym] : "myKey1",  // to use symbol must be declared under [] brackets
    age : 20,
    "full name" : "Shriyog Punde",   // THIS VALUE CANNOT BE ACCESDE USING DOT OPERATOR
    email : "shriyog@google.com",
    location : "Pune",
    isLoggedIn : false,
    lastLoggedInDays : ["Monday", "Tuesday"]
}
// console.log(jsUser.age);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
// Object.freeze(jsUser)  // this will freeze the object and prevent updations

jsUser.greetings = function()
{
    console.log(`hello ${jsUser["full name"]}`);
}
jsUser.greetings2 = function()
{
    console.log(`hello ${this["full name"]}`);
}
jsUser.greetings()