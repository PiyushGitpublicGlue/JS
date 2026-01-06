//it have 2 input and perform calculations

//higher order funtion
//a) assign a funtion to a variable
//b) you can pass one funtion as argument to another function
//c) return a function from function

/*
const result = function calculate(a,b){

}
*/

function calculate(a,b,fn){
    return fn(a,b)
}

const sum= (a,b) =>{
    return a+b
}

const result = calculate(2,3,sum)
console.log(`Result is ${result}`)

function substract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}

function divide(a,b){
    return a/b
}

