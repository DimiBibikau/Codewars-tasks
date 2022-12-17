class Animal {
    constructor(name, age, legs, species, status) {
        this.name = name;
        this.age = age;
        this.legs = legs;
        this.species = species;
        this.status = status;
    }
    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

class Shark extends Animal {
    constructor(name, age, status) {
        super(name, age);
        this.species = 'shark';
        this.legs = 0;
        this.status = status;
    }
}

class Cat extends Animal {
    constructor(name, age, status) {
        super(name, age);
        this.species = 'cat';
        this.legs = 4;
        this.status = status;
    }

    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
    }
}

class Dog extends Animal {
    constructor(name, age, status, master) {
        super(name, age);
        this.species = 'dog';
        this.legs = 4;
        this.master = master;
        this.status = status;
    }

    greetMaster(){
        return `Hello ${this.master}`;
    }

    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const exampleShark = new Shark("Sharky", 10, "Hunting")
const exampleCat = new Cat("Kitty", 10, "Meowing")
const exampleDog = new Dog("Doggy", 10, "Barking", 'Jamie')
console.log(exampleCat.introduce(), exampleShark.introduce(), exampleDog.introduce())
console.log(exampleDog.greetMaster())
