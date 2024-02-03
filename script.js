// Array to store tasks
let tasks = [];

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    // Get the task input value
    const taskText = taskInput.value.trim();

    // Check if the input is not empty
    if (taskText !== '') {
        // Create a new task object
        const task = { id: Date.now(), text: taskText };

        // Add the task to the array
        tasks.push(task);

        // Update the UI
        updateUI();

        // Clear the input field
        taskInput.value = '';
    }
}

// Function to delete a task
function deleteTask(id) {
    // Filter out the task with the specified ID
    tasks = tasks.filter(task => task.id !== id);

    // Update the UI
    updateUI();
}

// Function to update the UI
function updateUI() {
    const taskList = document.getElementById('taskList');

    // Clear the existing tasks
    taskList.innerHTML = '';

    // Add each task to the UI
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${task.text}
            <button onclick="deleteTask(${task.id})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}
