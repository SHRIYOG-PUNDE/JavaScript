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

// const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const user = [  // array of onjects
    {
        id : 1,
        email : "shri@hotmail.con"
    },
    {
        id : 2,
        email : "me@hotmail.con"
    }
]
console.log(user[1].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser));  // gives all keys of tinderUser object
console.log(Object.values(tinderUser));  // gives all values of tinderUser object
console.log(Object.entries(tinderUser));  // gives all key - values of tinderUser object in seperate arry inside array

console.log(tinderUser.hasOwnProperty("name"));


const course = {
    courseName : "Shri ml courses",
    price : 1000,
    instructor : "Master Shri"
}


console.log(course.instructor);
const {instructor} = course
console.log(instructor);






