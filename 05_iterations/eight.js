const myNums = [1, 2, 3]


// const myTotal = myNums.reduce( function(acc, currVal) {
//     console.log(`acc : ${acc} and cirr Val : ${currVal}`)
//     return acc + currVal
// }, 0)

// const myTotal = myNums.reduce( (acc, currVal) => (acc+currVal), 0)
// console.log(myTotal);


const shoppingCart =[
{
    itemName: 'Js Course',
    price : 2999
},
{
    itemName: 'android dev',
    price : 5999
},
{
    itemName: 'DSA',
    price : 6999
},
{
    itemName: 'LemonJuice',
    price : 2999
}
]
const priceToPay = shoppingCart.reduce( (acc, item) => (acc + item.price), 0)
console.log(priceToPay);
