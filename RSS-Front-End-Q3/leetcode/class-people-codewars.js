// class Person {
//     constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male',){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.gender = gender;
//         this.age = age;
//     }

//     get sayFullName(){
//         return `${this.firstName} ${this.lastName}`
//     }

//     static greetExtraterrestrials(raceName){
//         return `Welcome to Planet Earth ${raceName}`
//     }
// }

class Person {
    constructor(firstName, lastName, age, gender){
        this.setInfo(firstName, lastName, age, gender)
    }

    setInfo(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male'){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
    }

    sayFullName(){
        return `${this.firstName} ${this.lastName}`
    }

    static greetExtraterrestrials(raceName){
        return `Welcome to Planet Earth ${raceName}`
    }
}

const someOne = new Person('Jane', 'Fonda', 51, 'female');
console.log(someOne.sayFullName());
console.log(Person.greetExtraterrestrials('Squareheaded goats'));