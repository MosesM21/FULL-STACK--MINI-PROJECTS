let countEl = document.getElementById("count-el");
let count = 0;

function increaseCount() {
    count += 1;
    countEl.innerText = count;
}

function decreaseCount() {
    if (count > 0) {
        count -= 1;
        countEl.innerText = count;
    }
}

function save() {
    console.log("Count saved: " + count);
}

