const Person = function(firstName){
    this.firstName = firstName
}

Person.prototype.calcAge = function(birthYear){
    return 2026-birthYear
}

Person.prototype.lastName = "Saxena"

// const p1 = Person("Piyush")
// console.log(p1)

const p2 = new Person("Piyush")
console.log(p2.calcAge(2010))
console.log(Person.prototype)
console.log(p2.__proto__)
