/* 
PRIMITIVES 
ARE CALL BY VALUE WHERE WHEN COPIED ITS COPY IS 
MADE AND CHANGES WHICH ARE DONE ARE MADE IN COPY

7 TYPES => STRING, NUMBER, BOOLEAN, NULL, UNDEFINED, SYMBOL, BIGINT

NON PREMETIVE (REFERENCE)
ARE CALL BY REFERENCE WHENN CALLED A REFERENCE IS SHARED

ARRAY, OBJECTS, FUNCTIONS
*/
const heros = ["Ram", "Laxhman", "Hanuman"];
console.log(heros);

let employee = 
{
    name : "Shriyog",
    salary : 4000000,
    id : 1
}
console.log(employee.name);
console.log(employee.salary);

const myFunction  = function()
{
    console.log("Hello world")
}

//  STACK (PRIMITIVE), HEAP (NON PRIMITIVE)
 let myCollegename = "Shriyog"
 let myHomeName = myCollegename

 myHomeName = "Vedant"
 console.log(myCollegename);
 console.log(myHomeName);

 let MyEmployee1 = 
 {
    name : "Shriyog",
    email : "Shriyog@google.com"
 }
let MyEmployee2 = MyEmployee1
MyEmployee2.email = "shriyog@meta.com"
console.log(MyEmployee1.email);
console.log(MyEmployee2.email);

 
