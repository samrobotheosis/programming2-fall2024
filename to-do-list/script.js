let tasks = ["do laundry", "eat dinner"];

function showTasks() {
    let listHTML = document.getElementById("list");
    listHTML.innerHTML = "";
    for (i = 0; i < tasks.length; i++) {
        let li = document.createElement("li");
        li.innerText = tasks[i];
        listHTML.appendChild(li);
    }
}

function add() {
    let newItem = prompt("Enter your task", "Have fun");
    tasks.push(newItem);
    showTasks();
}
function remove() {
    let removal = prompt("Enter which task you'd like to remove");
    let templist = [];
    for (i = 0; i < tasks.length; i++) {
        if (tasks[i] != removal) {
            templist.push(tasks[i]);
        }
    }
    tasks = templist;
    showTasks();
}
function clearlist() {
    console.log("a");
    tasks = [];
    showTasks();
}
