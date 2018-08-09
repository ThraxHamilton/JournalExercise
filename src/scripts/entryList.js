let createEntry = require ("./entry");
let dataManager = require ("./dataManager")


let outputElement = document.querySelector("#journalEntries");

function listEntries() {
    outputElement.innerHTML = "";
    dataManager.getJournalEntries().then(result=>{
        result.forEach(newEntry => {
            let entryComponent = createEntry(newEntry.title, newEntry.content, newEntry.date, newEntry.id);
            writeEntriesToDOM(entryComponent);
        });
})}

function writeEntriesToDOM(entry){
    outputElement.innerHTML += entry
}

module.exports = listEntries;