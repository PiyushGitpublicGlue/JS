const obj = {
    employer:"Podtest",
    employeeCount:2
}

const employee = {
                        age:56,
                        fName:"Piyush Saxena",
                        login: function(){
                            console.log("I want to loggin")
                        },
                        marks: [55,66,88],
                        employer: obj
                    }
//export {employee}

//export default employee

const names = ["Piyush", "Saxena", "Akhil"]

console.log(employee["fName"])
employee.login()

employee.adress = "Delhi"
employee.logout = function(){
    console.log("I am logging out")
}

employee.arrowF = ()=>{
    console.log("I am logging out")
}


console.log(employee)
//convert js obj to json
console.log(JSON.stringify(employee))
//convert json to js obj
console.log(JSON.parse(`{"age":56,"fName":"Piyush Saxena","marks":[55,66,88],"employer":{"employer":"Podtest","employeeCount":2},"adress":"Delhi"}`))