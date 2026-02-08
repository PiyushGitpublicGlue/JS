
/*function f1(){
    var a = 20

    function f2(){
        console.log(a)
    }
    f2()
}

f1()*/

function f1(){
    var a = 20

    function f2(){
        console.log(a)
    }
    return f2
}

c= f1()
c()

