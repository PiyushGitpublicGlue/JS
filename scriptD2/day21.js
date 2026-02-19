//syncrounous operations
let a = 25
console.log(`value of a is : ${a}`)

let b = 10

const f1 = ()=>{console.log("executed the code after timeout only")}
function login(a){
    a()
}
setTimeout(f1,5000) //f1 : it is async call back function
login(f1) //f1 : it is sync call back function

const res = fetch("https://reqres.in/api/users?page=2")
console.log(res)

console.log(`value of b is : ${b}`)

let c = a+b
console.log(`value of c is : ${c}`)

// js is a single threaded language, 
// it works in synchronous way

