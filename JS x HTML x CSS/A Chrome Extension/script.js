let myLeads = [];
const listEl = document.getElementById('list');
const inputEl = document.getElementById('input-box');
const saveEl = document.getElementById('save-btn');
const saveTabEl = document.getElementById('saveTab-btn');
const deleteBtn = document.getElementById('delete-btn');
const leadsFromLocalstorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalstorage) {
    myLeads = leadsFromLocalstorage;
    render(myLeads);
}

function render(leads) {
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
    render(myLeads);
})

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})

saveTabEl.addEventListener("click", function () {
    //Grab the current tab URL
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        console.log(tabs)
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    })
})
