//global.a = 9;
//global.fetch("https://google.com").then((res)=>console.log(res))

//global.setTimeout(()=>{console.log("set timeout")},5000)
//console.log(global.a);

const add = function(){
    this.setTimeout(() => {
        console.log("Settimeout executed!!")
    }, 1000);
}

add()

const add1 = ()=>{
    this.setTimeout(() => {
        console.log("Settimeout executed!!")
    }, 1000);
}

//add1()

const employee ={
    name:"Piyush Saxena",
    printName: function(){
        console.log(this)
    }

}

employee.printName()