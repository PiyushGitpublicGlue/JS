/*
const url = "127.0.0.1:8000"

fetch(url) //promise : pending - > settled[fulfilled, rejected]
.then() //resolved
.catch() //rejected
*/
/*
// promise using then()
const getCartId = function(){
    return new Promise((resolved, rejected)=>{
            if(Math.random()>0.5) setTimeout(()=>resolved({cartId: "c123"}),1000)
                else setTimeout(()=>{rejected("error occured !")},1000)
            })
}

const res = getCartId()
.then((res)=>{console.log(`promise got resolved ${res.cartId}`)})
.catch((res)=>{console.log(`promise got rejected ${res}`)})
.finally(()=>{console.log(`Finally executed`)})
*/
//console.log(res)

//promise using async
/*
const getCartId = function(){
    return new Promise((resolved, rejected)=>{
            if(Math.random()>0.5) setTimeout(()=>resolved({cartId: "c123"}),1000)
                else setTimeout(()=>{rejected("error occured !")},1000)
            })
}

async function output(){
    try{
      const res =  await getCartId()
      console.log(`response is : ${res.cartId}`)
    }

    catch(err){
        console.log(`error is : ${err}`)
    }
}

output()
*/

//Arrays

const names = ["Piyush", "Akhil"]

const a = names[0] //1 way of desturcturing
const b = names[1]

const [a1,a2] = names //2 way of destructuring

//console.log(a1)
//console.log(a)



//Object Destructuring

const employee1 = {
    name:"Piyush",
    age: 90,
    city: "Delhi",
    gender: "M"

}

const man = {
    bankname : "PNB",
    compname : "QAZ",
    ...employee1
}

//const {age,city} = employee
//console.log(city)

// function f1(obj){
//     console.log(obj)
// }

// function f2({gender,city1}){
//     console.log(gender)
//     console.log(city1)
// }

// f1(employee)
// f2(employee)

//spread operator

// const num1 = [2,3,4,5]
// const num2 = [6,7,8,9]
// const num3 = [...num1,...num2]
// const num4 = [num1,num2]
// console.log(num3)
// console.log(num4)

console.log(man)

