// Import from client.js 
// import {clientName, amount, Client} from './client.js';
import { Client } from './client.js';
import { Business } from './business.js';


/* console.log(clientName);
console.log(amount);  */

// import all
/* import * as clientInfo from './client.js';

console.log(clientInfo)
console.log(clientInfo.clientName)
console.log(clientInfo.amount) */

// Importing and exporting function

// Use the function
/* let client = displayClientInfo(clientName, amount);
console.log(client); */

// USE the Class
let client  = new Client('Khalilov', 500);
//console.log(client);
console.log(client.displayClientInfo());

// Using the business class
let business = new Business('Udemy', 1000000, 'Education');
console.log(business);