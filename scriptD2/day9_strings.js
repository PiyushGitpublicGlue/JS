const myName1 = `❤️Piyush Saxena`
const myName2 = 'Piyush Saxena'
const myName3 = "Piyush Saxena"
const myName4 = new String("Piyush Saxena")

console.log(myName1)
console.log(`length is: ${myName1.length}`)
console.log(`at is: ${myName1.at(0)}`) //beyond index gives undifined
console.log(`char at is: ${myName1.charAt(0)}`) //beyond index gives BLANK
console.log(`char code at is : ${myName1.charCodeAt(0)}`) //ascci value UTF-8
console.log(`char code point at is : ${myName1.codePointAt(0)}`) //ascci value UTF-16

//concatination
let FN = "Piyush"
let LN = "Saxena"
let fullName = FN+LN
let fullName1 = FN.concat(LN)
let arrayOfNames = ["Piyush","Sakshi"]
let fullName2 = FN.concat(arrayOfNames)
console.log(fullName)
console.log(fullName1)
console.log(fullName2)

//search operations
let statement = "MY name is Piyush Saxena, I am learing JS"
console.log(statement.includes("name"))
console.log(statement.includes("Java"))
console.log(statement.startsWith("MY"))
console.log(statement.startsWith("My"))
console.log(statement.endsWith("JS"))
console.log(statement.endsWith("Piyush"))

//getting index position based on substring

let statement1 = "MY name is Piyush Saxena, I am learning JS Piyush"
console.log(statement1.indexOf("Piyush"))
console.log(statement1.lastIndexOf("Piyush"))
console.log(statement1.indexOf("Piyush",12))
console.log(statement1.lastIndexOf("Piyush",12))

//common methods

let statement2 = "MY name is Piyush Saxena, I am learning JS Piyush"
console.log(statement2.toLowerCase())
console.log(statement2.toUpperCase())
console.log(statement2)

let fName = "       Piyush Saxena       "
console.log(fName.trim())
console.log(fName)
console.log(fName.trimStart())
console.log(fName.trimEnd())
console.log(fName)

let fName1 = fName.replaceAll(" ","")
console.log(fName1)

let statement3 = "MY name is Piyush Saxena, I am learning JS Piyush"
console.log(statement3.substring(3,7))
