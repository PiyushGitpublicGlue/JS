console.log("1. Value of varA before declaration:", varA); 
// console.log("2. Value of letB before declaration:", letB); 

var varA = "I am Var";
let letB = "I am Let";

if (true) {
    var varA = "Var changed inside block";
    let letB = "Let changed inside block";
    console.log("3. Inside block - varA:", varA);
    console.log("4. Inside block - letB:", letB);
}

console.log("5. Outside block - varA:", varA);
console.log("6. Outside block - letB:", letB);