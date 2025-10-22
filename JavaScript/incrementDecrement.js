let myPoints = 3;

function add3points() {
    myPoints += 3;
}

function removePoint() {
    myPoints -= 1;
}

add3points();
add3points();
add3points();
removePoint();
removePoint();

console.log(myPoints);