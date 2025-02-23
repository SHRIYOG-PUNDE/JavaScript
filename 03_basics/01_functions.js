function syaMyName()
{
    console.log(`my first function of today`);
}
// syaMyName()

function addTwoNum(num1, num2)  //parameters recived
{
    let res = num1 + num2
    console.log(res)
}
// addTwoNum() // output will be NaN because no parametera passed
// addTwoNum(3, "4")  // considers two as string

addTwoNum(3, 5)  // arguments passed
// let result = addTwoNum(3, 5) // this result will contain result only if the function returns something

function loggedInUser(userName)
{
    if (userName === undefined) {
        console.log(`please enter user name`);
        return
    }
    return(`${userName} just logged in`);   
}
const result = loggedInUser("Shriyog") // if no value passed then it shows undefined just logged in
console.log(result);


function loggedInUser2(userName = "Shriyog") // provided default value if users pass nothing this will be used
{
    // if (userName === undefined) {
    //     console.log(`please enter user name`);
    //     return
    // }
    return(`${userName} just logged in`);   
}


function calculateCartPrice(...num1)
{
    return num1
}
console.log(calculateCartPrice(100, 200, 400, 50000, 6000000))  

const user = { 
    userName : "Shriyog",
    price : 6000
}

function handleObjects(anyObject)
{
    console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`);
}
handleObjects(user)
handleObjects({
    userName : "Smayy",
    price : 200
})

const myNewArray = [100, 200, 600, 700]

function handleArray(anyArray){
    return anyArray[3]
}
console.log(handleArray(myNewArray))
console.log(handleArray([100, 200, 300, 400, 500]))

