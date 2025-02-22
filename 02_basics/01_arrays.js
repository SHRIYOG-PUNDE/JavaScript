// ARRAY DECLARATIONS
const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naggaraj", true, 3]   // array can contain multiple data types

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1])

// ARRAY METHODS
myArr.push(6)  //pushes to last
myArr.push(7)
myArr.pop()   // pops last element

myArr.unshift(9) // adds element at start bt resources consuming needs to shift all elements 
myArr.shift() // removes first element


console.log(myArr.includes(9)); // returns true or false
console.log(myArr.indexOf(3)); // returns index

const newArr = myArr.join() // copies array to in string format 
console.log(newArr);
console.log(typeof newArr);


// SLICE AND SPLICE
console.log("A", myArr);
const mna1 = myArr.slice(1, 3)  // 1 included 3 excluded
console.log(mna1);
console.log("B", myArr);
const mna2 = myArr.splice(1, 3)  // includes 1 and 3 and slices the part from original array
console.log(mna2);   // subarray
console.log("C", myArr);  // original array - subarray



