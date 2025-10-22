
let answer = 0;
let display = document.getElementById('display');

//Addition
function add() {
    let numbers = [
        parseFloat(document.getElementById('1').textContent = 1),
        parseFloat(document.getElementById('2').textContent = 2),
        parseFloat(document.getElementById('3').textContent = 3),
        parseFloat(document.getElementById('4').textContent = 4),
        parseFloat(document.getElementById('5').textContent = 5),
        parseFloat(document.getElementById('6').textContent = 6),
        parseFloat(document.getElementById('7').textContent = 7),
        parseFloat(document.getElementById('8').textContent = 8),
        parseFloat(document.getElementById('9').textContent = 9),
        parseFloat(document.getElementById('0').textContent = 0)
    ];
    
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