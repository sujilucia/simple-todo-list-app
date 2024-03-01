//gets the element with the ID "input-box" and stores it in the variable "inputBox".
const inputBox = document.getElementById("input-box");
//gets the element with the ID "list-container" and stores it in the variable "listContainer".
const listContainer = document.getElementById("list-container");

// This function adds a new task to the to-do list.
function addTask() {
    if (inputBox.value === '') { //checks if the input box is empty. If it is, then an alert message is displayed.
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li"); //creates a new element of type "li".
        li.innerHTML = inputBox.value; //sets the innerHTML of the new "li" element to the value of the input box.
        listContainer.appendChild(li); //appends the new "li" element to the "listContainer" element.
        let span = document.createElement("span"); //creates a new element of type "span".
        span.innerHTML = "\u00d7"; //sets the innerHTML of the new "span" element to the Unicode character for a close button.
        li.appendChild(span); //appends the new "span" element to the "li" element.
    }
    inputBox.value = ""; //sets the value of the input box to an empty string.
    storeInMemory(); //stores the current state of the to-do list in local storage.
}

// This event listener listens for click events on the "listContainer" element.
listContainer.addEventListener("click", function (e) {
    // Add a "checked" symbol when clicking on a list item
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        storeInMemory();
    }
    // remove list item if click on close button.
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        storeInMemory();
    }
}, false);

// This function stores the current state of the to-do list in local storage.
function storeInMemory() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// This function shows the to-do list.
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data").split(',');
}