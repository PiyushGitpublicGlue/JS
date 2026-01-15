const arr = [44,22,88,11,98,29,77,100]

console.log(arr[2]) //88
console.log(arr[100]) //undifined
console.log(arr[-1]) //undifined
console.log(arr[-2]) //undifined

//Array methods

//at()
console.log("at()")
console.log(arr.at(2)) //88
console.log(arr.at(-1)) //100

//slice()
console.log("slice()")
console.log(arr.slice(2,4))
console.log(arr)

//splice() - mutation
console.log("splice()")
console.log(arr.splice(2,4))
console.log(arr)

//length property
console.log("length property")
console.log(arr.length)

//reverse method -mutation
console.log("reverse method")
console.log(arr.reverse())
console.log(arr)

