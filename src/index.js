document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const tasksUl = document.getElementById('tasks');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskText = e.target['new-task-description'].value;
    buildToDo(taskText);
    form.reset();
  });

  function buildToDo(task) {
    if (!task) return;
    const li = document.createElement('li');
    li.textContent = task;
    tasksUl.appendChild(li);
  }
});
