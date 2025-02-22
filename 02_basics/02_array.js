const marvel_heros = ["spiderman", "thor", "hulk"]
const dc_heros = ["flash", "batman", "superman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)  // this pushes array into array as an elemnt [1, 2, 3, [5, 6, 7]]
// console.log(marvel_heros[3][0]); // will print "flash"

// const newHeros = marvel_heros.concat(dc_heros) // returns new array which holdh both array elements
// console.log(newHeros);  

const new_all_heros = [...marvel_heros, ...dc_heros] // works similar to concat works with multiple arrays


const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const usableArray = anotherArray.flat(Infinity)
console.log(usableArray);  
/*
[
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
]
*/
const newSample = ["Shriyog"]
console.log(Array.isArray("Shriyog")); //it will return false
console.log(Array.from("Shriyog"));  //converts everyting into array
console.log(Array.from({name : "Shriyog"}));  // if cannot convert gives empty array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));

 
