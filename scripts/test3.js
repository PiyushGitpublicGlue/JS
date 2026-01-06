//funtion diclaration
/*function firstfun(a,b){
    let c =a+b
    console.log(`the sum of ${a} and ${b} is ${c}`)
    return c
}
//funtion calling
const retunValue = firstfun(3,8)
console.log(`This is return from funtion ${retunValue}`)
*/


//funtion expression
//a) anonymous funtion

/*
const secondfun = function(a,b){
    const c = a + b
    console.log(`the sum of ${a} and ${b} is ${c}`)
}

secondfun(4,6)
const thirdfun = secondfun
thirdfun(7,9)
*/

const newfun = (a,b)=>{
    let c =a+b
    console.log(`the sum of ${a} and ${b} is ${c}`)
    return c
}

newfun(5,6)