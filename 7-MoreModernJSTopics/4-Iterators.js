// Iterators
function createIterator(cart){
    let i = 0;

    return {
        nextProduct: function(){
            let end = (i >= cart.length);
            let value = !end ? cart[i++] : undefined;

            return {
                end: end,
                value: value
            }
        }
    }
}

const shoppingCart = ['Product1', 'Product2', 'Product3', 'Product4']

const shoppingCartIterator = createIterator(shoppingCart);

console.log(shoppingCartIterator.nextProduct());
console.log(shoppingCartIterator.nextProduct());
console.log(shoppingCartIterator.nextProduct());
