let num1 = 5;
document.getElementById('num1-el').textContent = num1;

let num2 = 1;
document.getElementById('num2-el').textContent = num2;

function add() {
    let sum = num1 + num2;
    document.getElementById('result-el').textContent = "= " + sum;
}

function subtract() {
    let difference = num1 - num2;
    document.getElementById('result-el').textContent = "= " + difference;
}

function multiply() {
    let product = num1 * num2;
    document.getElementById('result-el').textContent = "= " + product;
}

function divide() {
    let division = num1 / num2;
    document.getElementById('result-el').textContent = "= " + division;
}