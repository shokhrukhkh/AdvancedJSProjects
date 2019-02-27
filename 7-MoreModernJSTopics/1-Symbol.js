// More Modern JS Topics

// Symbols
// const client = Symbol();
/* 
const client = Symbol('Clients Symbol');

console.log(client);

// Symbols are always different
console.log(Symbol() === Symbol); */

// Symbols in action

let firstName = Symbol();
let lastName = Symbol();

// Create an empty object
const person = {};

person[firstName] = 'Shokhrukh';
person[lastName] = 'Khalilov';

// Standard properties
person.membership = 'Basic';
person.amount = 300;

console.log(person);
console.log(person.membership);
console.log(person[firstName]);

for (let i in person){
    console.log(`${person[i]}`);
}

// You can also add a description 

let clientName = Symbol('Clients Name');

let client = {};

client[clientName] = 'Peter';

// Test 

console.log(client);
console.log(client[clientName]);