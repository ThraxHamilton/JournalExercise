// console.log("Hey you");
const FormManager = require("./journalForm")
const dataManager = require("./dataManager")
const entryList = require("./entryList")
// Render Enrty Form
document.querySelector("#journalForm").innerHTML = FormManager.createNewForm()
entryList()
// Save Button
document.querySelector("#saveEntryButton").addEventListener("click",() => {
    // Get form field values
    // Create object from them
    // Add timestamp
    const newEntry = {
    title: document.querySelector("#entryTitle").value,
    content: document.querySelector("#entryContent").value,
    date: Date.now()
    }
    dataManager.saveEntries(newEntry).then(() => {
        FormManager.clearForm()
    })
})

// Add event listener to delete button
document.querySelector("#journalEntries").addEventListener("click", (event) => {
    // If statement to target delete button
    if (event.target.id.startsWith("deleteButton")){
        // Split method.
        let currentButtonId = event.target.id.split("--")[1]
        console.log(currentButtonId)
        dataManager.delJournalEntries(currentButtonId).then(() => {
        })
    }
    })
