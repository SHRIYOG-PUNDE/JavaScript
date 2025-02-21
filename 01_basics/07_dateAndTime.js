let myDate = new Date()


console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString);          //[Function: toISOString]
console.log(myDate.toJSON);               //function like so
console.log(myDate.toLocaleDateString);   //function like so
console.log(myDate.toLocaleString);       //function like do

console.log(typeof myDate);
let myCreadteDate1 = new Date(2023, 0, 23)    // months start from 0 in js     Mon Jan 23 2023
let myCreadteDate2 = new Date(2023, 0, 23, 5, 3)    // more arguments to specify more fields    1/23/2023, 5:03:00 AM
let myCreadteDate3 = new Date("2023-01-14")  // also works with 14-01-2023
console.log(myCreadteDate1.toDateString());
console.log(myCreadteDate2.toLocaleString());
console.log(myCreadteDate3.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp); //value in milliseconds
console.log(myCreadteDate3.getTime()) // time in milliseconds
console.log(Math.floor(Date.now()/1000)) // time in milliseconds


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

newDate.toLocaleString("default", {
    weekday : "long",                         // to customize date format
})




