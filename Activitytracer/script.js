document.addEventListener('DOMContentLoaded', (event) => {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    // Load tasks from localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Function to render tasks
    const renderTasks = (tasksToRender) => {
        taskList.innerHTML = '';
        tasksToRender.forEach((task, index) => {
            const taskCard = document.createElement('div');
            taskCard.classList.add('task-card');

            const taskInfo = document.createElement('div');
            taskInfo.classList.add('task-info');
            taskInfo.textContent = task.description;
            taskCard.appendChild(taskInfo);

            const taskTimestamp = document.createElement('div');
            taskTimestamp.classList.add('task-timestamp');
            taskTimestamp.textContent = `Added on: ${task.timestamp}`;
            taskCard.appendChild(taskTimestamp);

            const deleteIcon = document.createElement('i');
            deleteIcon.classList.add('fas', 'fa-trash', 'delete-icon');
            deleteIcon.addEventListener('click', () => {
                tasks.splice(index, 1);
                localStorage.setItem('tasks', JSON.stringify(tasks));
                renderTasks(tasks);
            });

            taskCard.appendChild(deleteIcon);
            taskList.appendChild(taskCard);
        });
    };

    // Initial render
    renderTasks(tasks);

    // Event listener for form submission
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newTaskDescription = taskInput.value.trim();
        if (newTaskDescription) {
            const newTask = {
                description: newTaskDescription,
                timestamp: new Date().toLocaleString()
            };
            tasks.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            renderTasks(tasks);
            taskInput.value = '';
        }
    });

    // Event listener for search button
    searchButton.addEventListener('click', () => {
        const searchQuery = searchInput.value.trim().toLowerCase();
        const filteredTasks = tasks.filter(task => task.description.toLowerCase().includes(searchQuery));
        renderTasks(filteredTasks);
    });
});
