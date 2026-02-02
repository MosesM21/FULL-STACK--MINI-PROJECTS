// PRE-INCREMET OPERATOR
// increments the value of a variable by 1 
// before using it in an expression.

let currentTicketNumber = 0;

function getNextTicketNumber() {
    return ++currentTicketNumber;
}

for (let i = 1; i <= 5; i++) {
    console.log(`Guest ${i}: your ticket number is: ${getNextTicketNumber()}`);
}
