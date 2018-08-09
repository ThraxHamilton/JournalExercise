let dataManager = Object.create(null, {
    saveJournalEntry: {
        value: (entry) => {
            return fetch("http://localhost:8088/entries", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(entry)
            })
                .then(response => response.json())
        }
    },
    getJournalEntries: {
        value: (entry) => {
            return fetch("http://localhost:8088/entries", {
            })
                .then(response => response.json())
        }

    },
    // Create function to delete entriees
    delJournalEntries: {
        value: (entryid) => {
            // Must fetch from local host, but target ID given when you save.
            return fetch(`http://localhost:8088/entries/${entryid}`, {
                // Delete method
                method:"DELETE"
            })
                .then(response => response.json())
        }
    },
})


module.exports = dataManager
