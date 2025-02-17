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
