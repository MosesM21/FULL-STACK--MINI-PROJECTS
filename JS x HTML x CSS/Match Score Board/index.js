let homeEl = document.getElementById("home-el");
let awayEl = document.getElementById("away-el");

let homeScore = 0;
let awayScore = 0;


//Home score buttons
function onePoint() {
    homeScore += 1;
    homeEl.textContent = homeScore;
}

function twoPoints() {
    homeScore += 2;
    homeEl.textContent = homeScore;
}

function threePoints() {
    homeScore += 3;
    homeEl.textContent = homeScore;
}

//Away score buttons
function away1Point() {
    awayScore += 1;
    awayEl.textContent = awayScore;
}

function away2Points() {
    awayScore += 2;
    awayEl.textContent = awayScore;
}

function away3Points() {
    awayScore += 3;
    awayEl.textContent = awayScore;
}

//Reset button
let resetBtn = document.getElementById("reset-btn");

function resetScores() {
    homeScore = 0;
    awayScore = 0;
    homeEl.textContent = homeScore;
    awayEl.textContent = awayScore;
}
