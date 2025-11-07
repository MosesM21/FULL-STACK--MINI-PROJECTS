let fruits = ['🍎', '🍏', '🍊', '🟠']

let orangeEl = document.querySelector("#orange-shelf")
let appleEl = document.querySelector("#apple-shelf")

function sortFruits() {
    for (let i = 0; i < fruits.length; i++){
        if (fruits[i] === '🍎' || fruits[i] === '🍏') {
            appleEl.textContent += '🍎'
            
        } else if (fruits[i] === '🍊' || fruits[i] === '🟠') {
            orangeEl.textContent += '🍊'
        }
    }
}