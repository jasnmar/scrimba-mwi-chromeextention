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

const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]

tabBtn.addEventListener("click", saveTab);

function saveTab(event){
    event.preventDefault();
    console.log(tabs[0].url)
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
