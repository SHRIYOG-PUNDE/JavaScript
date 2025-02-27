// for 

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
// }

// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);   
//     }
// }

// let myArray = ["bulbul", "lambda", "choty", "pistuly"]
// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }


// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
//     if (element == 5) {
//         console.log("Detected 5")
//         break;  // breaks the loop
//     }
// }

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("Detected 5")
        continue; // skips loop 1 time
    }
    console.log(element);
}