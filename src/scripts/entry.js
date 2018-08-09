"use strict";

function createEnrty(title, content, date, id){
    return `<h1>${title}</h1>
            <p>${content}</p>
            <p>${date}</p>
            <button id="deleteButton--${id}">Delete</button>`;
}

module.exports = createEnrty;