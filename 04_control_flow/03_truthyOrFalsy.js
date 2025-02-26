if(userEmail.length === 0)
{
    console.log("array is empty");
}

const newObj = {}
if (Object.keys(newObj).length === 0) {
    console.log("Object is empty"); 
}

// FALSY VALUES
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// TRUTYH VALUES
// "0", "false", " ", [], {}, function(){}


// false == 0  //true
// false == ""  //true
// 0 == ""    //true

// NULLISH COALESCING OPERATOR (??): NULL UNDEFINED

// let val1 = 5 ?? 10
// console.log(val1);


let val1 = null ?? 10
console.log(val1);

// TERNIARY OPERATORS
// condition ? true : false

const icedTeaPrice = 100
icedTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

