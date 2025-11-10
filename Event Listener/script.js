let myLeads = [];
const listEl = document.getElementById('list');
const saveEl = document.getElementById('save-btn');
const inputEl = document.getElementById('input-box');

function saveLead() {
    listEl.innerHTML = "";
    for (let i = 0; i < myLeads.length; i++) {
        listEl.innerHTML += "<li>" + myLeads[i] + "</li>";
    }
}

saveEl.addEventListener("click", function () {
    // ignore empty inputs
    let value = inputEl.value.trim();
    if (value === "") {
        return;
    }

    myLeads.push(value);
    // clear input box after saving
    inputEl.value = "";
    saveLead();
})

