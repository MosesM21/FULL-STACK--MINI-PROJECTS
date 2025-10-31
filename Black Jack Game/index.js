let firstCard = 12;
let secondCard = 9;
let sum = firstCard + secondCard;

let hasBlackJack = false
let isAlive = true //in the game

if (sum <= 20) {
    console.log('Do you want to draw a new card 😒');
    
} else if (sum === 21) {
    console.log('You won!!...BLACKJACK😍😍')
    hasBlackJack = true
} else {
    console.log("You're out of the game!!😭")
    isAlive = false
}

// CASH OUT
console.log(isAlive)