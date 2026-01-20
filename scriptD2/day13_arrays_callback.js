const transactions = [44,88,-34,78,-90,50]
/*
for(const amt of transactions){
    if(amt>0) console.log("Amount Credited : ",amt)
    else if(amt<0) console.log(`Amount Debited : ${amt}`)
}
*/

/*
function calc(amt){
    if(amt>0) console.log("Amount Credited : ",amt)
    else if(amt<0) console.log(`Amount Debited : ${amt}`)
}*/


//transactions.forEach((a)=>calc(a))

//normal funtions
/*
transactions.forEach(function calc(amt){
    if(amt>0) console.log("Amount Credited : ",amt)
    else if(amt<0) console.log(`Amount Debited : ${amt}`)
})*/


//anonymos funtions
/*
transactions.forEach(function(amt){
    if(amt>0) console.log("Amount Credited : ",amt)
    else if(amt<0) console.log(`Amount Debited : ${amt}`)
})
*/

// forEach() arrow funtions

transactions.forEach((amt,index,ogarry)=>{
    if(amt>0) return console.log("Amount Credited : ",amt,index,ogarry)
    else if(amt<0) return console.log(`Amount Debited : ${amt} ${index} ${ogarry}`)
})

// map()
console.log("map()")

transactions.map((amt,index,ogarry)=>{
    if(amt>0) console.log("Amount Credited : ",amt,index,ogarry)
    else if(amt<0) console.log(`Amount Debited : ${amt} ${index} ${ogarry}`)
})


const num = [1,2,3,4,5]
const multipleOf5 = num.map((val)=> val*5)
console.log(multipleOf5)

// filter()

const faces = ["😊","😒","😊","😒"]
const smilyFaces = faces.filter((val)=>{return val==="😊"})
console.log(smilyFaces)

//questions

const values = [22,-1,44,56,-32,30,28,98]
console.log(values)
values.reduce((pv,cv,ci,arr)=>{
    console.log(`previous value is ${pv}, current value is ${cv}, current index is ${ci}, array is ${arr}`)
})

// power of functional programing
 const fullName = "Piyush Saxena" //ps
 const output = fullName.split(" ").map((val)=> val.toLowerCase().at(0)).join("")
 console.log(output)
 
