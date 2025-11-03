let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true //in the game
let message = "";
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")

// GET RANDOM CARD
function getRandomCard() {
    let randomNum = Math.floor(Math.random() * 13) + 1;

    if (randomNum === 1) {
        return 11;
    } else if (randomNum === 12 || randomNum === 13) {
        return 10;
    }
    return randomNum
}

// START GAME
function startGame() {
    renderGame()
}

// RENDER FUNCTION
function renderGame() {
    sumEl.textContent = sum
    
    // Render all the cards
    cardEl.textContent = ""
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " + "
    }

    if (sum <= 20) {
        message = 'Do you want to draw a new card 😒';
    
    } else if (sum === 21) {
        message = 'You won!!...BLACKJACK😍😍'
        hasBlackJack = true
    } else {
        message = "You're out of the game!!😭"
        isAlive = false
        resetGame()
    }

    messageEl.textContent = message
}


// Get new card button function
function newCard() {
    let card = getRandomCard();
    sum += card
    cards.push(card)
    startGame()
}

// RESET GAME
function resetGame() {
    
}

// CASH OUT
