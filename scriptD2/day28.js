const name1 = "Piyush"
//convert string into an array


// this is string method
const arr = name1.split("")

console.log(arr)

// this is arry method

const arr2 = Array.from(name1)

console.log(arr2)

// Obj key and values to array

const obj1 = {
    name: "Piyush",
    age: 50
}

const arr3 = Array.from(Object.values(obj1))

console.log(arr3)

const arr4 = Array.from(Object.keys(obj1))

console.log(arr4)



const obj2 = {
    0:"Piyush",
    1:"Saxena",
    3:89,
    4:true
}

const arr5 = Array.from(Object.keys(obj2))

console.log(arr5)

//Array like structure

const obj3 = {
    length: 5,
    0:"Piyush",
    1:"Saxena",
    2:89,
    3:true
}

const arr6 = Array.from(obj3)

console.log(arr6)

const obj4 = {
    length: 3
}

const arr7 = Array.from(obj4,(v,k)=> k)

console.log(arr7)

const arr8 = Array.from(obj4,()=> [])

console.log(arr8)