const promiseOne = new Promise(function(resolve ,reject){
    setTimeout(function(){
        console.log("Async function is complete");
        resolve()
    }, 1000)
})
promiseOne.then(function(){
    console.log("Promise is consumed");
})
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({userName : "Shriyog", password : "1234"})
        }
        else(
            reject("ERROR Something went wrong")
        )
    }, 1000)
})
promiseFour
.then((user)=> {
    console.log(user);
    return user.userName
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error)
})
.finally(()=>console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({userName : "javascript", password : "123"})
        }
        else{
            reject("Error js went wrong ")
        }

    }, 1000)
})

// async function consumePromiseFive(){
//     const response = await promiseFive
//     console.log(response)
// }

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response)
    }catch(error)
    {
        console.log(error)
    }
}
consumePromiseFive()

async function getAllUsers(){
    fetch("")
}