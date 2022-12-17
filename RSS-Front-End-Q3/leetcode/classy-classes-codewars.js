class Person {
    constructor(name, age) {
        this.setInfo(name, age);
    }

    setInfo(name, age){
        this.name = name;
        this.age = age;
    }

    get info(){
        return `${this.name}s age is ${this.age}`
    }
}
var john = new Person('John Locke', 34)
console.log(john.info)
