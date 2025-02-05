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

        const task = document.createElement('span');
        task.className = "task";
        task.textContent = taskText;

        const deleteBtn = document.createElement('span');
        deleteBtn.className = "delete";
        deleteBtn.textContent = "🗑";
        deleteBtn.addEventListener('click', deleteTask);

        li.appendChild(checkbox);
        li.appendChild(task);
        li.appendChild(deleteBtn);

        document.getElementById('todo-list').appendChild(li);

        taskInput.value = ""; // Clear input after adding task
    }
}

function toggleTask(e) {
    const li = e.target.parentElement;
    li.classList.toggle('completed');
}

function deleteTask(e) {
    const li = e.target.parentElement;
    li.remove();
}
