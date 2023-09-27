let totalTasks = 0;

function updateTaskCount() {
  totalTasks = document.querySelectorAll('li').length;
  document.getElementById('totalTasks').textContent = totalTasks;
}

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const taskList = document.getElementById('taskList');

    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      li.remove();
      updateTaskCount();
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);
    taskInput.value = '';
    updateTaskCount();
  }
}

document.getElementById('taskInput').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});

document.getElementById('taskList').addEventListener('click', (event) => {
  const target = event.target;
  if (target.tagName === 'LI') {
    target.classList.toggle('checked');
    updateTaskCount();
  }
});

updateTaskCount();
