// practice
// foreach method
/*
const num = [5,10,20,30,50]
const multiples = num.forEach((val)=>{
    let multiple = val*5
    console.log(multiple)
    return multiple
})
console.log(multiples)
*/

//map
/*
const num = [5,10,20,30,50]
const multiples = num.map((val)=>{
    let multiple = val*5
    console.log(multiple)
    return multiple
})

console.log(multiples)
*/

// filters
/*
const transactions = [10,-20,-3,1,90,200]
const credits = transactions.filter((val)=>{
    if(val>0) return true
    else return false
})

console.log(transactions)
console.log(credits)
*/

// reduce
/*
const transactions = [1,2,3,4,5]
const balance = transactions.reduce((pv,cv,index,arr)=>{
    console.log(`previous val is : ${pv}, current val is : ${cv}, index is : ${index}, array is : ${arr}`)
    const sum = pv+cv
    return sum
})
console.log(balance)
*/
/*
const customernames = ["Piyush Saxena","Ashwani Kumar Rao","Naina S Bala","Suzain M Goswami"]
const output = customernames.map((val)=>{
    if(val.split(" ").length === 2)
        return val
}).filter((val)=>{
    if(val!= undefined) return val
}).reduce((pv,val)=>{
    return pv+1
},0)
console.log(output)
*/
//sorting
//Strings
//ascending order A-Z
/*
const customernames = ["Piyush Saxena","Ashwani Kumar Rao","Naina S Bala","Suzain M Goswami"]
//console.log(customernames.sort().reverse())
console.log(customernames.sort((a,b)=>{
    console.log(`cv is ${a}, pc is ${b}`)
    return 0
}))

// here it compares ASCII values
console.log(customernames.sort((a,b)=>{
    if(a>=b) return 0
    else return -1
}))
*/
//numbers
const transactions = [22,11,55,20,1,90,2]
/*
console.log(transactions.sort((a,b)=>{
    if(a>=b) return -1
    else return 0
}))
*/
console.log(transactions.sort((a,b)=> b-a))
console.log(transactions.sort((a,b)=> a-b))



