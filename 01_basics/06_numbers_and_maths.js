const score = 400
console.log(score);

const Balance = new Number(100)
console.log(Balance);

console.log(Balance.toString.length)
console.log(Balance.toFixed(2))   // this will fix 2 decimal precision in this case 100.00

const otherNumber = 124.7658
console.log(otherNumber.toPrecision(4)); // this will return 4 precision form starting of number in this case 124.8

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));

// MATHS
console.log(Math);
console.log(Math.abs(-4)); //this will convert negative to positive no positive to negative
console.log(Math.round(4.7)); // rounds off values
console.log(Math.ceil(5.6)); // rounds off to higher side here 6
console.log(Math.floor(5.6)); // rounds off to lower side here 5
console.log(Math.min(12, 15, 10, 19)); //min of array
console.log(Math.max(12, 15, 10, 19));  //max of array


console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);











