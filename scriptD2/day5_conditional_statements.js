
//if else

    let age = 19
if(age>=18&&age<=60) console.log("Teeager")
    else console.log("Senior Citizen")

//switch

let day = "W"
switch(day){
    case "M":
        console.log("Monday")
        break
    case "Tu":
        console.log("Tuesday")
        break
    default:
        console.log("Not a valid input")
        break
}

//ternery operator

let age1 = 61

age1>=18&&age1<=60 ? console.log("Adult") : console.log("Senior Citizen")

//for loops

for(let i=0;i<10;i++){
    console.log(i)
}

//while loops

let z=0
while(z<10){
    console.log(z)
    z++
}

// for loops for of
console.log("for loops for of")
let marks = [22,33,44,55,66]

console.log(marks[2])

//classical
for(let i=0;i<marks.length;i++){
    console.log(marks[i])
}

//for of
for(const i of marks){
    console.log(i)
}
