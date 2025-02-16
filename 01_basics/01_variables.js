const accNo = "1234"
let accPass = "shri"
var accName = "shriyog"  // VAR IS NOT USED BACAUSE OF ITS SCOPE PROBLEMS
accCity = "Bhambora"

// accNo = "5678"  THIS IS DECLARED AS CONST SO NO CHANGES ARE ALLOWED
 
accPass = "newPass"
console.log(accPass);
accName = "newName"
console.log(accName);

console.table([accNo, accPass, accName, accCity])

