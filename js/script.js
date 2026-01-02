/*
have a boolean for add = false
when add is clicked, add = true, in box text adds to list, gets reset back to false
console.log("...")
*/

let addButton = document.getElementById("submit"); // addButton, let = variable set, getElementById relates to index.html id=
let input = document.getElementById("new-task-title"); // input, userInput in textbox id set as "new-task-title"
let todoList = document.getElementById("list"); // todoList, is the UL list from html
let deleteButton = document.getElementById("delete"); // deleteButton is set to X id "delete" from html

function handleAdd(event) {
    event.preventDefault(); // prevents auto page refresh which gets rid of list as not stored locally or in DB

    let task = input.value; // task = the value of the input which is new-task-title, input.value = the type of value, the text while input represents what type input is

    if (task !== "") { // edge case for if there is text in box
        let newTodo = document.createElement("li") // li = each is indiviudal item, child of UL and OL unordered/ordered list
        newTodo.textContent = task; // textContent puts task inside newTodo

        todoList.appendChild(newTodo); // adds newTodo box into todoList
        input.value = ""; // resets new-task-title box
    }
}

function handleDelete() {
    let items = todoList.querySelectorAll("li"); // finds all items that are "li" (list individual) and sets to item
    items.forEach(item => item.remove()); // a while loop that goes for all items until each item is removed
}

addButton.addEventListener("click", handleAdd); // listens for a click on addButton which is id="submit" to active handleAdd
deleteButton.addEventListener("click", handleDelete); // listens for click on deleteButton which is id="delete" to active handleDelete