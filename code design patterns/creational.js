// //THE GOOD OLD WAY PRE-ES6
// function Server(name, ip) {
//     this.name = name;
//     this.ip = ip;
// }

// Server.prototype.getUrl = function() {
    
// }

// const cat = {
//     name : 'Bertie',
//     breed : 'Cymric',
//     color : 'white',
//     greeting: function() {
//         console.log(`Hello, said ${this.name} the ${this.breed}.`);
//     },
// }

// const cat2 = {
//     name : 'Anthony',
//     breed : 'stray',
//     color : 'black',
//     greeting: function() {
//         console.log(`Hello, said ${this.name} the ${this.breed}.`);
//     },
// }

// function Cat (name, breed, color) {
//     this.name = name;
//     this.breed = breed;
//     this.color = color;
//     this.greeting = function() {
//         console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
//     };
// }

// const cat = new Cat('Bertie', 'Cymric', 'white')
// const cat2 = new Cat('Elfie', 'Aphrodite Giant', 'ginger')

// console.log(cat.greeting());
// console.log(cat2.name)