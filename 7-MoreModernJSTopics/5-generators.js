// Generators

/* function *createGenerator(){
    // Yield
    yield 1,
    yield 'Name of the person',
    yield 3+3,
    yield true,
    yield 'Hello from Generators'

}

const iterator = createGenerator();

console.log(iterator);
console.log(iterator.next());
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().done);
console.log(iterator.next().done); */

/* // Create generators
function *newGenerator(cart){
    for (let i = 0; i < cart.length; i++) {
        yield cart[i];
        
    }
}

// Shopping cart

const shoppingCart = ['Product1', 'Product2', 'Product3', 'Product4'];

//Loop in the iterator
let iterator = newGenerator(shoppingCart);

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next()) */