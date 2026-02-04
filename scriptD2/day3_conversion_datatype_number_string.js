//Conversion of datatype
//a) Manual conversion
//b) Automation conversion (coercion)

//Number and String
//Number -> String
//String -> Number

let age = 18 //number
console.log(typeof age)
let friendage = 'Piyush' //string
console.log(typeof friendage)

//converting number -> string
stringAge = String(age) //manual conversion
console.log(stringAge)
console.log(typeof stringAge)
nextAge=stringAge+0 //auto-conversion called coercion
console.log(nextAge)

//converting string -> number
let nFA = Number(friendage)
console.log(nFA)
console.log(typeof nFA)
nextNFA = nFA+2
console.log(nextNFA)



