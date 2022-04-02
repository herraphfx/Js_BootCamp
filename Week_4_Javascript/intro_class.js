//Declare a new cllas Rectangle

class Rectangle{
    constructor(height, width){
        this.height = height;
        this.width = width;

    }

    calcArea(){
        return this.height * this.width;
    }

    //getter
    getArea(){
        return this.height * this.width;
    }

    //setters
    setWidth(){
       return this.width = width;
    }

    setHeight(){
        return this.height = height;
    }
}
//Calculate the area



//Create an instance of a rectangle
const square = new Rectangle(100, 100);
console.log(square);

console.log(square.calcArea());


//Exercise 
class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

blackRabbit.speak('black');


//getters - get some data from class
//setters = set some data from class

square.setWidth(200)
console.log(square)

square.width = 250;
console.log(square);



class Animal{
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(`${this.name} makes a noise`);
    }
}

class Dog extends Animal{
    constructor(name, noise){
        super(name);
        this.noise = noise;
    }

    //overwrite existing methods
    speak(){
        console.log(`${this.name} barks. Its says ${this.noise}`);
    }
}

let rocky = new Dog('Rocky', 'Woof');

console.log(rocky);
rocky.speak();
