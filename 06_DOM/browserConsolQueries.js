document.getElementById("basson1")  // this will return h1 tag

document.getElementById("basson1").getAttribute("name")  //this will return lemon 

document.getElementById("basson1").setAttribute("class, gendaful")  // this will set attribute gendaful as class and it always overwrites the previous content 

const title = document.getElementById("basson1")
title.style.backgroundColor = "red"

title.textContent  // this will return html content no matter if its hidden by css properties

title.innerText // this will show only display content

title.innerHTML  // this will give content of tag if u write more html inside it show as it is

document.getElementsByClassName("lemons")
document.querySelector("h2")
document.querySelectorAll("h2")    // this returns node list of elements insteda of array
document.querySelector("#basson1")
document.querySelector(".gendafullo")

const turnGreen = ulvar.querySelector("li")
turnGreen.style.backgroundColor = "green"

const myH1 = querySelectorAll("h1")
myH1[0].style.backgroundColor = "green"  

const liItems = document.querySelectorAll("li")
liItems.forEach(function (liitem) {
    liitem.style.color = "red"
})

tempClassList = document.getElementsByClassName("list-items")
const newXonv = Array.from(tempClassList)
newXonv.forEach(function (li) {
    li.style.backgroundColor = "green"
})