//comman js module:
/*
console.log("I am in module 1")

let firstName = "Piyush Saxena"
exports.login = function (){
    console.log("Log in into the application !!")
}

marks = [34,78,98]

exports.age = 80

exports.addMarks = function(subjectMarks){
    marks.push(subjectMarks)
}

const printMarks = function (){
    console.log(marks)
}
printMarks()
//export 1 or multiple items
//module.exports = {login,firstName,marks,addMarks}
*/
//ES module

function login(){
    console.log("Login to applications")
}

const marks = [100,200,40]

export{login,marks}
