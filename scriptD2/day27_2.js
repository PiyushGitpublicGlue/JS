class Person{
    constructor(firstName){
        this.firstName = firstName
    }

    calcAge(birthYear){
        return 2026-birthYear
    }
}

const p1 = new Person("Piyush")
console.log(p1)
console.log(p1.calcAge(2010))