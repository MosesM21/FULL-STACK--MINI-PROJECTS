let countEl = document.getElementById("count-el");
    let saveEl = document.getElementById("save-el");
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
    let countStr = count + " -";
    saveEl.textContent += countStr;
    console.log(count);
    
}

