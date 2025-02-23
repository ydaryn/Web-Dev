document.getElementById('add-task').addEventListener('click', addTask);
document.getElementById('new-task').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') addTask();
});

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";
        checkbox.addEventListener('change', toggleTask);
        /*
        const listItem = document.createElement('li');
        const taskCheckbox = document.createElement('input');
        taskCheckbox.type = "checkbox";
        */

        const task = document.createElement('span');
        task.className = "task";
        task.textContent = taskText;

        const deleteBtn = document.createElement('span');
        deleteBtn.className = "delete";
        deleteBtn.textContent = "🗑";
        deleteBtn.addEventListener('click', deleteTask);

        document.getElementById('btn').addEventListener('click', deleteAllTasks);


        li.appendChild(checkbox);
        li.appendChild(task);
        li.appendChild(deleteBtn);

        document.getElementById('todo-list').appendChild(li);

        taskInput.value = ""; // Clear input
    }

}




function toggleTask(e) {
    const li = e.target.parentElement;
    li.classList.toggle('completed');
    /*const isCompleting = !li.classList.contains('completed');
    const message = isCompleting
        ? "Вы уверены, что хотите отметить задачу как выполненную?"
        : "Вы уверены, что хотите снять отметку о выполнении?";

    let result = confirm(message);

    if (result) {
        li.classList.toggle('completed');
    } else {
        e.target.checked = !e.target.checked;
    }*/
}

function deleteAllTasks() {
    document.getElementById('todo-list').innerHTML = "";
}

function deleteTask(e) {
    const li = e.target.parentElement;
    li.remove();
}
