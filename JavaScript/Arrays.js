
// ARRAYS
let greeting = [
    'hello',
    ' how are you',
    ' nice to meet you too'
]

let greetEl = document.querySelector('#greeting-el')

for (let i = 0; i <= greeting.length; i++) {
    greetEl.textContent += greeting[i] + ", "
    }

// count to 10
