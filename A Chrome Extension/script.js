let myLeads = [];
const listEl = document.getElementById('list');
const saveEl = document.getElementById('save-btn');
const inputEl = document.getElementById('input-box');

let leadsFromLocalstorage = JSON.parse(localStorage.getItem("myLeads"))

console.log(leadsFromLocalstorage + " from localstorage");

function saveLead() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `;

    }
    
    listEl.innerHTML = listItems; 
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

    //Save the myleads array to localStorage
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    
    saveLead();

    console.log(localStorage.getItem("myLeads"));
})
