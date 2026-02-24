class Employee{

    //How to create class in JS
    //How to create instance of class : Obj of class
    //creating instance variable
    //creating methods
    //creating local variable
    //constructor overloading not allowed
    //creating constructor
    //there is nothing protected in js

    // if you create any instance variable and you want to assign this in constructor
    // make sure you were using this keyword

    // to make private variables & methods use # before it and access it using #
    // private variable are illution in JS
    // static variable

    //instance variables

    firstName //these are private now
    lastName //these are public by default
    static middleName

    //class variable : static variables

    //Constructor
    constructor(firstName,lastName){
        //console.log("Constructor intialted !!", firstName)
        this.firstName = firstName
        this.lastName = lastName
    }

    static printSalary(){
        
    }

    //methods
    seFirstName(firstName){
        this.firstName = firstName
    }

    //methods
    getFirstName(){
        return this.firstName
    }

    //methods
    generateFullName(){
        //local variables
        fullName = `${this.firstName} surname`
        return fullName
    }

}
    const e1 = new Employee("Piyush","Saxena")
    const e2 = new Employee()
    //e1.seFirstName("Piyush")
    console.log(e1)
    console.log(e2)
    //e1.#firstName
    // e1.seFirstName("Piyush")
    // e1.getFirstName()
    // e1.generateFullName()

    //const e2 = new Employee()
    //console.log(e2.fisrtName)