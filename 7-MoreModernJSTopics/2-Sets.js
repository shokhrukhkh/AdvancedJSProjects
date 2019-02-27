// Create a set

let shoppinCart = new Set();
shoppinCart.add('Shirt');
shoppinCart.add('Shoes #1');
shoppinCart.add('Shirt #2');
shoppinCart.add('Shirt #3');
shoppinCart.add('Shirt #4');
shoppinCart.add('Guitar');

console.log(shoppinCart);

// Get the length of the set
console.log(shoppinCart.size);

// Check if the value is exist
console.log(shoppinCart.has('Guitar'));

// Remove from the set

shoppinCart.delete('Shoes #1');

// Clear the set
//shoppinCart.clear();
//console.log(shoppinCart);

shoppinCart.forEach((product, index, isPart) => {
    console.log(` ${index} : ${product}`);
    console.log(isPart === shoppinCart);
});


// Convert the set to an array
console.log(shoppinCart);

const shoppinCartArray = [...shoppinCart];
console.log(shoppinCartArray);