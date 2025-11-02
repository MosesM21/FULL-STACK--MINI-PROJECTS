let firstCard = 2;
let secondCard = 9;
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackJack = false
let isAlive = true //in the game
let message = ""
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")

// START GAME
function startGame() {
    renderGame()
}

// RENDER FUNCTION
function renderGame() {
    sumEl.textContent = sum
    cardEl.textContent = cards[0] + " and " + cards[1]

    if (sum <= 20) {
        message = 'Do you want to draw a new card 😒';
    
    } else if (sum === 21) {
        message = 'You won!!...BLACKJACK😍😍'
        hasBlackJack = true
    } else {
        message = "You're out of the game!!😭"
        isAlive = false
    }

    messageEl.textContent = message
}


// Get new card button function
function newCard() {
    let card = 10; 
    sum += card
    cards.push(card)
    startGame()
}
// CASH OUT
