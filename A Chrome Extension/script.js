let myLeads = [];
const listEl = document.getElementById('list');
const saveEl = document.getElementById('save-btn');
const inputEl = document.getElementById('input-box');
const deleteBtn = document.getElementById('delete-btn');
const leadsFromLocalstorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalstorage) {
    myLeads = leadsFromLocalstorage;
    save(myLeads);
}

function save(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `;
    }
    listEl.innerHTML = listItems; 
}

saveEl.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    inputEl.value = ""; // clear input box after saving

    //Save the myleads array to localStorage
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    save(myLeads);
})

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear();
    myLeads = [];
    save(myLeads);
})
