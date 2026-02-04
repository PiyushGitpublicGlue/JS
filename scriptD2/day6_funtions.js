function sum(a,b){ //funtion declaration
    let c = a+b
    return c
}

console.log(sum(7,7)) //funtion calling

const sum1 = function (a,b){ //funtion expression //A)anonymous func
    let c = a+b
    return c
}

const sum2=sum1

console.log(sum2(7,7))

const sum3= (a,b)=>{
    let c =a+b
    return c
}

console.log(sum3(7,7))

const names = ()=> "Piyush Saxena" //arrow funtions
console.log(typeof names())
console.log(names())
console.log(names)



