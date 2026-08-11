let hands = ["Rock", "Paper", "Scissors"]

function throwHand() {
    let randomNum = Math.floor(Math.random() * 3) + 1

    if (randomNum === 1) {
        console.log(hands[0]);
    } else if (randomNum === 2) {
        console.log(hands[1]);
    } else {
        console.log(hands[2]);
    }
}

throwHand()