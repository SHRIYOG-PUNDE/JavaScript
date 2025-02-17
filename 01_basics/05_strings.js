//OLD WAY

let name = "Shriyog"
let surname = "Punde"
console.log(name + surname + " intrepretor")

// NEW WAY
console.log(`MY NAME IS ${name} and surname ${surname}`)

let gameName = new String("Shriyog-punde-2004")
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("i"));


let newString = gameName.substring(0, 4) //0 included 4 excluded
console.log(newString);

let anotherString = gameName.slice(-13, 4)  //intresting feature can use negative values to reverse
console.log(anotherString);

const newStringOne = "    shriyog  "
console.log(newStringOne.trim())

const url ="https://shriyog.com/shriyog%20punde"
console.log(url.replace("%20", "-"));

console.log(url.includes("shriyog"));
console.log(gameName.split("-"));





