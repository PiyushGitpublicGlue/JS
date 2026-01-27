const customernames = ["Piyush Saxena", "Akhil Jain", "Smith Su", "Hem Cub", "Piyush K"]

//search array and find the first matching element where first name is Piyush

const fullName = customernames.find((val,index,arr)=>{
    if(val.split(" ")[0] === "Smith"){
        console.log(`val is ${val} and index pos is ${index}`)
        return true
    }
    else console.log(`val is ${val} and index pos is ${index}`)
})

console.log(fullName)

const fullNameIndex = customernames.findIndex((val,index,arr)=>{
    if(val.split(" ")[0] === "Smith"){
        console.log(`val is ${val} and index pos is ${index}`)
        return true
    }
    else console.log(`val is ${val} and index pos is ${index}`)
})

console.log(fullNameIndex)



