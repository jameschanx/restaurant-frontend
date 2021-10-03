const updateDropdownMenus = () => {
    // this function will hit the tables-json endpoint to get the latest table state and update the dropdown menus accordingly
    const xhr = new XMLHttpRequest();
    const url='http://127.0.0.1:3000/api/v1/tables-json';
    xhr.open("GET", url);
    xhr.onload = () => {
        const availableSelections = document.getElementById("availableSelections")
        // TODO - parse information from xhr.response, and populate it to both the available and unavailable dropdown menus
        console.log(xhr.response)
        // =============== code below this line needs to change ===============
        for(let i = 1 ; i < 10 ; i++){
            const option = document.createElement("option")
            option.innerHTML = `Table ${i}`
            option.value = i
            availableSelections.appendChild(option)
        }
        // =============== code above this line needs to change ===============
    }
    xhr.send();
}

const book = () => {
    const messages = document.getElementById("messages")
    // TODO - use XMLHttpRequest to send POST request to book table.
    updateDropdownMenus()
    // TODO - update message log with appropriate table and operation information
    const div = document.createElement("option")
    // =============== code below this line needs to change ===============
    div.innerHTML = "updated x table"
    // =============== code above this line needs to change ===============
    messages.appendChild(div)
}

const clean = () => {
    // TODO - use XMLHttpRequest to send POST request to clean table.
    // TODO - similar to book, update message log with appropriate table and operation information
    updateDropdownMenus()
}

updateDropdownMenus()