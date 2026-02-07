// const guestList = ["PS","SS","AJ"]
// console.log(`pre: ${guestList}`)

// guestList.push("KI")
// console.log(`post: ${guestList}`)

// guestList = ["Piyush"] //compile time error


console.log(`time1 : ${new Date().getSeconds()}`)
setTimeout(()=>{
    console.log(`time3 : ${new Date().getSeconds()}`)
},5000)
console.log(`time2 : ${new Date().getSeconds()}`)

const fname = "Piyush"
const fn = new String("Piyush")
console.log(fname.toLowerCase())
console.log(`fname - ${fname}`)
fn.toLowerCase()
console.log(`fn - ${fn}`)