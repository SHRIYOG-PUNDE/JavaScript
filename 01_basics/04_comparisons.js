// ALL BASIC CONVERSIONS ARE OKAY
console.log(2 == 2);
console.log(2 != 1);

console.log("2" > 1);
console.log("02" > 1);

// NULL CONVERSIONS DIFFERS EACH CASE
console.log(null == 0);
console.log(null > 0);
console.log(null >= 0);

// UNDEFINED
console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined < 0);

// STRICTLY CHECK DOES NOT CONVERT STRING VALUES
console.log("hrer");

console.log("2" == 2);  //true

console.log("2" === 2); // false




