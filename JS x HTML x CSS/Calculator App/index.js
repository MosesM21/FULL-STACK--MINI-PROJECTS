
let answer = 0;
let display = document.getElementById('display');
let numbers = [
        parseFloat(document.getElementById('1').textContent),
        parseFloat(document.getElementById('2').textContent),
        parseFloat(document.getElementById('3').textContent),
        parseFloat(document.getElementById('4').textContent),
        parseFloat(document.getElementById('5').textContent),
        parseFloat(document.getElementById('6').textContent),
        parseFloat(document.getElementById('7').textContent),
        parseFloat(document.getElementById('8').textContent),
        parseFloat(document.getElementById('9').textContent),
        parseFloat(document.getElementById('0').textContent)
];

numbers[i] = document.getElementById()

//Addition
function add() {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
}

//Subtraction
function subtract() {
    let subSymbol = document.getElementById('subtract-btn').textContent = '-';
    display.textContent = subSymbol;
    console.log(subSymbol);
}

//Multiplication
function multiply() {

}

//Division
function divide() {

}

//Equals
function equals() {

}