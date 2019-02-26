// Destructing

// The old way
/* const client = {
    name: 'Alexa',
    membership: 'Premium'
} */

/* let name = client.name,
    membership = client.membership;

console.log(name);
console.log(membership); */

// New way 

/* 
const client = {
    name: 'Alexa',
    membership: 'Premium'
}

let {name, membership} = client;
console.log(name);
console.log(membership);
 */

// another way
/* 
let name , membership;


const client = {
    name: 'Alexa',
    membership: 'Premium'
}

name = 'Mary';
membership = 'Platinum'; // wilnot work

({name, membership} = client);
console.log(name);
console.log(membership); */

