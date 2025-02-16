let score = "33"
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
/* WHEN  SCORE = "33ABC" IS CONVERTED TO NUMBER JAVASCRIPT CONVERTS IT TO NUMBER BUT THE RESULT OF CONVERSION IS NAN
STRING TO NUMBER
"33" => 33
"33abc" => NaN
"true"/"false" => 1/0
*/

let isLoggedIn = 1
let isLoggedInBoolean = Boolean(isLoggedIn)
console.log(isLoggedInBoolean);
/*
NUMBER TO BOOLEAN
1/0 => true/false

STRING TO BOOLEAN
"shriyog" => true
"" => false
*/
let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber);

