let myLeads = [];
const listEl = document.getElementById('list');
const saveEl = document.getElementById('save-btn');
const inputEl = document.getElementById('input-box');

let leadsFromLocalstorage;

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
    myLeads.push(input. value);
    inputEl.value = ""; // clear input box after saving

    //Save the myleads array to localStorage
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    saveLead();
})
