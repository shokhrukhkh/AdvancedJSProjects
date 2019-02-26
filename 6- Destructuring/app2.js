// Extract object thats inside another object


/* const client = {
    membership: 'Premium',
    name: 'Paul',
    data: {
        clientLocation: {
            city: 'Bukhara',
            country: 'Uzbekistan'
        },
        account: {
            memberSince: '10-12-2012',
            balance: 4000
        }
    }
};

console.log(client);

let {data: {clientLocation}} = client;

console.log(clientLocation);
console.log(clientLocation.city);
console.log(clientLocation.country);

let {data: {account}} = client;

console.log(account);
console.log(account.memberSince);
console.log(account.balance); */

// Default value when destructing
/* 
const client = {
    name: 'Shokhrukh',
}

console.log(client);

// Destructuring

let {name, memberSince = 'Standard', balance = 0} = client;
console.log(name);
console.log(memberSince);
console.log(balance);
 */


 // Destructuring with arrays
/* 
 const cities = ['London', 'New York', 'Tashkent', 'Bukhara'];

 let [
     firstCity,
     secondCity,
     another,
     paris
 ] = cities;

 console.log(firstCity);
 console.log(secondCity);
 console.log(another);
 console.log(paris); */

 // More in depth example

 /* let client = {
     membership: 'Basic',
     balance: 30000,
     data: {
         name: 'Bobur',
         lastname: 'Shoxjahon',
         living: {
             city: 'Bukhara',
             country: 'Tashkent, Bekobod'
         }
     },
     lastMovements: ['12-12-2012','12-12-201','12-12-201']
}

console.log(client)

let {
    data:  {living},
    lastMovements: [, , last]
} = client;

console.log(living);

console.log(last); */



/* // Desturcuturing function (old version)

function reservation(complete, options){
    options = options || {};
    let payment = options.paymentMethod,
        amount = options.amount,
        days = options.days;

        console.log(payment);
        console.log(amount);
        console.log(days);

    //console.log(options);
}

reservation (
    true,
    {
        paymentMethod: 'CrediCard',
        amount: 3000,
        days: 5
    }
) */


/* // Desturcuturing function (new version)

function reservation(complete, options){
    let {paymentMethod, amount, days} = options;

    console.log(paymentMethod)
    console.log(amount)
    console.log(days)
}

reservation (
    true,
    {
        paymentMethod: 'CrediCard',
        amount: 3000,
        //days: 5
    }
) */

// Desturcuturing function (new version) with default parameters

function reservation(complete, 
    
    {
        paymentMethod = 'Cash',
        amount = 0,
        days = 0
    } = {}
    ){

    console.log(paymentMethod)
    console.log(amount)
    console.log(days)
    }   

reservation (
    true,
    {
        paymentMethod: 'CrediCard',
        amount: 3000,
        //days: 5
    }
)