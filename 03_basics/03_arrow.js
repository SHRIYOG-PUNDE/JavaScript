const user = {
    userName : "Shriyog",
    price : 6000,
    

    welcomeMessage : function()
    {
        console.log(`welcome ${this.userName} to this site`);   
        // console.log(this)
    }
}
// user.welcomeMessage()
// user.userName = "Ganesh"
// user.welcomeMessage()

// console.log(this);

// function chai()
// {
//     username : "Snatoor"
//     console.log(this.username);
// }
// chai()

// const chai = function()
// {
//     let username = "Snatoor"  // this keywork can be used
//     console.log(this);
// }
// chai()
// const chai1 = () =>
// {
//     let username = "Snatoor"
//     console.log(this);        // this keyword cannot be used
// }
// chai1()


const addTwoNum = (num1, num2) => {
    return num1 + num2  // explicit return
}
const addTwoNum1 = (num1, num2) => ( num1 + num2)   //implecit return
addTwoNum(4, 5)
addTwoNum1(4, 5)