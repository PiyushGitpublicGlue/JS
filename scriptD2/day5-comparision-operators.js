let num1 = 7
let num2 = 5

//comparision operator //<= //>= //==
let isGreater = num1>num2
console.log(!isGreater)
console.log(typeof isGreater)

//logical operator //OR //NOT //AND
let gender = 'M'
let age = '18'

if(gender=='M' || age == 19){
    console.log("Teenager boy")
}
else{
    console.log("In else statement")
}

let num3 = 78
let num4 = "78"

if(num3==num4){
    console.log("Equal")
}
else{
    console.log("Not Equal")
} //Equal

if(num3===num4){
    console.log("Equal")
}
else{
    console.log("Not Equal")
} //Not Equal

num4 = Number(num4)
if(num3===num4){
    console.log("Equal")
}
else{
    console.log("Not Equal")
} //Equal

