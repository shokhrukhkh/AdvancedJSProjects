export const clientName = "Shokhrukh";
export let amount = 200;


// Importing and exporting function

/* export function displayClientInfo (name, amount) {
    return `Client: ${name} - Amount: ${amount}`;
} */

/* export const displayClientInfo = (name, amount) =>  {
    return `Client: ${name} - Amount: ${amount}`;
}  */

// Create the client class
export class Client {
    constructor(name, amount) {
        this.name = name;
        this.amount = amount;
        this.amount = amount;
    }

    displayClientInfo () {
        return `Client: ${this.name} - Amount: ${this.amount}`;
    }
}