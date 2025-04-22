const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

let tasks = [];

function renderTasks() {
  taskList.innerHTML = '';

  // Ordenar: tareas incompletas primero
  const sortedTasks = tasks.sort((a, b) => a.completed - b.completed);

  sortedTasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = task.completed ? 'completed' : '';
    li.innerHTML = `
      ${task.text}
      <div>
        <button onclick="toggleTask(${index})">✔️</button>
        <button onclick="deleteTask(${index})">🗑️</button>
      </div>
    `;
    taskList.appendChild(li);
  });
}

function addTask(text) {
  if (text.trim() === '') return;
  tasks.push({ text, completed: false });
  renderTasks();
  taskInput.value = '';
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

taskInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    addTask(taskInput.value);
  }
});
