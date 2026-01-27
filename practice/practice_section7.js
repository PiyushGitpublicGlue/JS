//1. Use forEach() to print each element of [1, 2, 3, 4, 5].
let array = [1, 2, 3, 4, 5]
array.forEach(element => {
    console.log(element)
});
//2. Use map() to create a new array with each element doubled from [1, 2, 3]
const dbarray = array.map(element=>element*2)
console.log(dbarray)