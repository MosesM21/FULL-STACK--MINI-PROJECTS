const form = document.getElementById('form');
const numberOneInput = document.getElementById('num1');
const numberTwoInput = document.getElementById('num2');
const resultEl = document.getElementById('result');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const num1 = Number(numberOneInput.value);
    const num2 = Number(numberTwoInput.value);

    const sum = num1 + num2;
    resultEl.textContent = `Sum: ${sum}`;
})
