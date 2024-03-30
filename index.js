setupPage();
function setupPage() {
    const saveBtn = document.getElementById('input-btn')
    saveBtn.addEventListener("click", saveInput)
}
let myLeads = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el");
const delBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn");


tabBtn.addEventListener("click", saveTab);

function saveTab(event){
    event.preventDefault();
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
    
    
}

delBtn.addEventListener("dblclick", cleanLeads);
// 3. When clicked, clear localStorage, myLeads, and the DOM
function cleanLeads() {
    localStorage.setItem("myLeads", null);
    ulEl.innerHTML = "";
    myLeads = null;
}

function saveInput(event) {
    event.preventDefault();
    myLeads.push(inputEl.value);
    render(myLeads);
    inputEl.value="";
    

    console.log(myLeads)
}

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += "<li><a target='_blank' href='" + leads[i] + "'>" + leads[i] + "</a></li>"
    }
    ulEl.innerHTML = listItems
}
