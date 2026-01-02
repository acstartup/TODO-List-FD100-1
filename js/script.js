/*
have a boolean for add = false
when add is clicked, add = true, in box text adds to list, gets reset back to false
console.log("...")
*/

let button = document.getElementById("submit");
let input = document.getElementById("new-task-title");
let todoList = document.getElementById("list");

function handleAdd(event) {
    event.preventDefault();
    
    let task = input.value;

    if (task !== "") {
        let newTodo = document.createElement("li")
        newTodo.textContent = task;

        todoList.appendChild(newTodo);
        input.value = "";
    }
}

button.addEventListener("click", handleAdd);