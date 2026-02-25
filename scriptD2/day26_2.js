//ES6 module is used if you need to import class or file from outside

import { Animal } from "./day26.js"

class Dog extends Animal{

    place
    name = "jerry"

    constructor(place,name,type){
        super(name,type)
        this.place = place
        //this.name = name
        //this.type = type
    }

    eat(){
        console.log(this.name)
        console.log(`Dog is eating at place ${this.place}`)
    }

    walk(){
        console.log(`Dog ${this.name} is walking`)
    }


}

//class obj creation

const tom = new Dog("Delhi","Tom","Labra")
tom.walk()
tom.eat()