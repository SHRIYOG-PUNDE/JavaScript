// const obj1 = new Object() // SINGELTON OBJECT
// const obj1 = {}  //non singelton object

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "someone@email.com",
    fullname : {
        userFullName : {
            firstName : "Shriyog",
            lastName : "Punde"
        }
    }
}
// console.log(regularUser.fullname.userFullName.firstName);

const obj1 = {1 : "A", 2 : "B"}
const obj2 = {3 : "C", 4 : "D"}
const obj4 = {5 : "E", 6 : "F"}

// const obj3 = {obj1, obj2} // objects inside object 

// const obj3 = Object.assign({}, obj1, obj2, obj4) //first empty bracket is target and other are source 
// // if empty bracket is not given obj1 would be considered as target

const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3);

