// Regular Expressions

/* const exp1 = new RegExp('/abc/');
const exp2 = /abc/;
 */
/* const year = 1992;

console.log( /[0-9]/.test(year)); */

// Check if the date follows the parent 20-10-2018

/* const dateRegExp = /\d\d-\d\d-\d\d\d\d/;
const date = '20-10-2018';
// const date = '2000-10-10'; // will not work
console.log(dateRegExp.test(data)); */

/* //check for the Time 14:00
const timeRegExp = /\d\d:\d\d/;
const time = '10:55';
console.log(timeRegExp.test(time)); */

/* // check for the time in 12 hours am or pm

const timeRegExpComplete = /\d\d :\d\d \D\D/;
let completeTime;
completeTime = '08:55 30';
console.log(timeRegExpComplete.test(completeTime)); */

/* const numberRegExp = /\d\d\d\d/; // /\d+/; /
const digits = 1234;
console.log(numberRegExp.test(digits)); */


// More Regular expression
/* 
// deny regular expression
const denyRegExp = /[^0-9]/;
const numbers = 12345; // 'hello' respond to true
console.log(denyRegExp.test(numbers));
 */

/* 
const dateRegExp = /\d{1,2}-\d{1,2}-\d{1,4}/;
const date = '20-10-2018';
console.log(dateRegExp.test(date)); */

// check for letters of numbers
/* const messageRegExp = /\w+/;
let message;
message = 'Test message';
message = 1234;
message = ' ';

console.log(messageRegExp.test(message)); */

// check for numbers
/* const checkNumbers = /([0-9])\w+/;

const numbers = 12345;
console.log(checkNumbers.test(numbers)); */

// Evaluate for UpperCase only
/* const checkForUppercase = /([A-Z])\w+/;

let message;
//message = 12345;
//message = 'hello';
message = 'HELLO';


console.log(checkForUppercase.test(message)); */

/* const checkForlowercase = /([a-z])\w+/;

let message;
//message = 12345;
message = 'hello';
//message = 'HELLO';


console.log(checkForlowercase.test(message)); */

const expRegMail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const email = 'email@mail.com';
console.log(expRegMail.test(email));