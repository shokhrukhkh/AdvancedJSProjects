// Map
let client = new Map();
client.set('name', 'Shokhrukh');
client.set('membership', 'Basic');
client.set('balance', 3000);


// Foreach into a map
client.forEach((clientInfo, index) => {
    console.log(` ${index} ${clientInfo}`);
}) 

// Access the value
/* console.log(client.get('name'));
console.log(client.get('balance')); */

// Maps method
// Map Size
/* console.log(client.size); */

// check if the value is exists
/* console.log(client.has('memberSince'));
console.log(client.get('memberSince'));
console.log(client.get('membership'));
console.log(client.get('membership'));

 */
/* // Remove the elements from the map
client.delete('name'); */

/* // Clear the map
client.clear();

// Default value into the map
const patient = new Map([['name', 'Patient'], ['room', 'not defined']])
patient.set('name', 'Shokhrukh');
patient.set('room', '404');

console.log([patient]); */