document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();

  document.getElementById("create-task-form").addEventListener("submit", e => {
    e.preventDefault();
    change();
    addTasksToPage();
  });

  function addTasksToPage() {
    document.getElementById("tasks").innerHTML += `<li>${
      taskList.tasks[taskList.tasks.length - 1].text
    } <button onclick = "removeList()">X</button></li>`;
  }

  function change() {
    let text = document.getElementById("new-task-description").value;
    let newTask = new Task(text);
    taskList.tasks.push(newTask);
  }
});

function removeList() {
  let list = document.getElementById("tasks");
  list.removeChild(list.childNodes[0]);
}
