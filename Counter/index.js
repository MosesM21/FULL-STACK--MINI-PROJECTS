let countEl = document.getElementById("count-el");

function increaseCount() {
    let count = parseInt(countEl.innerText);
    count += 1;
    countEl.innerText = count;
}

function decreaseCount() {
    let count = parseInt(countEl.innerText);
    if (count > 0) {
        count -= 1;
        countEl.innerText = count;
    }
}


