var b = 28
function f1(){
    var a = 20
    function f2(){
        console.log(a)
        console.log(b)
    }
    return f2
}

var c= f1()
c()