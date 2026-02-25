class Animal{
    //instance variables
    name
    #type

    
    //constructor
    constructor(name,type){
        this.name=name
        this.#type=type
    }

    walk(){
        console.log(`Animal ${this.name} is walking`)
    }
    
    //methods

}
//ES module exports need to use to make this avaible outside class or file
export {Animal}