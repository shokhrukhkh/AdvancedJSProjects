// Build Iterators in JS

/* const cities = ['London', 'Turkey', 'Madrid', 'Paris'];
const orders = new Set([123, 231, 131, 102]);
const data = new Map();
data.set('Learning', 'Modern JavaScript');
data.set('JSisGreat', true)

 */
// Entries
/* for(let entry of cities.entries()){
    console.log(entry[1]);
}

for(let entry of orders.entries()){
    console.log(entry[0]);
}

for(let entry of data.entries()){
    console.log(entry[0]);
} */

/* for(let entry of cities){
    console.log(entry);
}

for(let entry of orders.values()){
    console.log(entry);
}

for(let entry of data.values()){
    console.log(entry);
}
 */

/* for(let entry of cities.keys()){
    console.log(entry);
}

for(let entry of orders.keys()){
    console.log(entry);
} */

// Iterate a String
/* const message = 'Learning JavaScript'; */

// old way
/* for(let i = 0; i < message.length; i++){
    console.log(message[i]);
} */

/* // new way
for(let letter of message) {
    console.log(letter);
} */

const anchors = document.getElementsByTagName('a');

for(let anchor of anchors){
    console.log(anchor)
    console.log(anchor.href);
}