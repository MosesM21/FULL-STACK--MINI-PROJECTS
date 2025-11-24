const welcomeEl = document.getElementById("welcome-el")

function greetUser(greeting, name, emoji) {
    welcomeEl.textContent = `${greeting}, ${name}${ emoji }`
}
greetUser("Hello", "Trisolarian", "👋")

function add(num1, num2) {
    let sum = num1 + num2
    welcomeEl.textContent = `The sum is: ${sum}`
}

add(3, 4)

// ARRAYS AS PARAMETERS
function getFirst(arr) {
    console.log(arr[0])
}

getFirst([10, 4, 3])