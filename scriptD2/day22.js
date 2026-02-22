/*
console.log("begin")
setTimeout(()=>{console.log("set time out 5 sec completed !!")},5000)
setTimeout(()=>{console.log("set time out 1 sec completed !!")},1000)
console.log("end")

const res = fetch("https://reqres.in/api/users?page=2")
console.log(res)
*/

// can we made our own promises ?

console.log("begin")
/*
function addsyncbehaviour(){
    return "PodTest"
}*/

function addAsyncbehaviour(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve("Piyush Saxena")},5000)
    })
}

const res = addAsyncbehaviour()
console.log(res)
console.log("End")

res.then((r1)=>{console.log(r1)})




