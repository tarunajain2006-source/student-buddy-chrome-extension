let tasks = [];

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("addBtn").addEventListener("click", addTask);
});

function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();
  if (!text) return;

  tasks.push(text);
  input.value = "";
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
      render();
    });

    list.appendChild(li);
  });
}