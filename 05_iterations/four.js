const myObj = {
    js : "JavaSvrept",
    cpp : "C++",
    rb : "Ruby",
    swift : "By Apple"
}

for (const key in myObj) {
    console.log(`${key} is shorecut for :- ${myObj[key]} `);   
}

// for in loop
const programming = ["java", "cpp", "python", "javaScript", "mongo"]
for(const key in programming)
{
    console.log(programming[key]);
}