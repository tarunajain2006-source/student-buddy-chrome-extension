let tasks = [];

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("tasks");
  if (saved) {
    tasks = JSON.parse(saved);
  }

  document.getElementById("addBtn").addEventListener("click", addTask);
  render();
});

function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();
  if (!text) return;

  tasks.push(text);
  input.value = "";

  saveTasks(); 
  render();
}

function render() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;

    li.addEventListener("click", () => {
      tasks.splice(index, 1);
      saveTasks(); 
      render();
    });

    list.appendChild(li);
  });
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
