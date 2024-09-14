// script.js

document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    // Function to create a new task
    const createTask = (taskText) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn">Delete</button>
        `;
        taskList.appendChild(listItem);

        // Add event listener to delete button
        listItem.querySelector('.delete-btn').addEventListener('click', () => {
            listItem.remove();
        });
    };

    // Add task on button click
    addButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            createTask(taskText);
            taskInput.value = ''; // Clear input field
        }
    });

    // Optionally, add task on pressing Enter key
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addButton.click();
        }
    });
});
