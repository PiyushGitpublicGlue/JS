const arr1 = [1,22,41,9,80]
const arr2 = [33,35]
const arr3 = [4,8]
//concat
const arr4 = arr1.concat(arr2).splice(1,2)
console.log(arr4)
console.log(arr1)
console.log(arr2)

const myName = "Piyush Saxena"
console.log(myName.split(" ").at(0).startsWith("P"))

//join
const arr5 = ["Piyush","Saxena","Java","Piyush","JS"]
console.log(arr5)
console.log(arr5.join("|"))

//inclides
console.log(arr5.includes("Saxena")) //true
console.log(arr5.includes("Saxena",2)) //false it starts from 2nd index

//Index of
console.log(arr5.indexOf("Piyush"))
console.log(arr5.indexOf("Saxena",2))

//Last Index of
console.log(arr5.lastIndexOf("Piyush"))

//pop deletion from end of array

const lList = ["JS","Java","Python","Go"]
console.log(lList.pop()) //Go will be removed
console.log(lList)

//push() addition to array at end

console.log(lList.push("C#"))
console.log(lList) // C# will be added at the end of array

//shift() removing 1st element from array

console.log(lList.shift()) // remove JS from array
console.log(lList)

//unshift()

console.log(lList.unshift("TS")) //this will add TS to the beg of array
console.log(lList)




