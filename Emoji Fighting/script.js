

let fighters = [0, '🦍', '🦁', '🧑‍🤝‍🧑', '🐎', '🏋️‍♂️', '🧜‍♂️']

let stageEl = document.querySelector('#stage')
let fightButton = document.getElementById('fight-btn')



fightButton.addEventListener("click", function () {
    let randomIndex1 = Math.floor(Math.random() * (fighters.length - 1)) + 1
    let randomIndex2 = Math.floor(Math.random() * (fighters.length - 1)) + 1

    let fight = fighters[randomIndex1] + " VS " + fighters[randomIndex2]
    stageEl.textContent = fight
})