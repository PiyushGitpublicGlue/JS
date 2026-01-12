/*This funtion support calculation on 2 numbers and perform below operartions
Sum
Minus
Divide
Multiply
*/

//Higher-order funtion
//a) assign func to variable
//b) pass a function as parameter

function calculate(a,b,fun){
    return fun(a,b)
}
let result = calculate(3,3,divide)
console.log(result)
//sum
//let sum = (a,b)=> {return a+b}
function sum(a,b){
    return a+b
}
//minus
function minus(a,b){
    return a-b
}
//multiply
function multiply(a,b){
    return a*b
}
//divide
function divide(a,b){
    return a/b
}


//c) return a function from a function
function check(){
    return function sum(a,b) {return a+b}
        
}
let checkresult = check()
console.log(check())
console.log(checkresult(4,5))


