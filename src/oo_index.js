


document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  
  document.getElementById("create-task-form").addEventListener("submit", (e) => {
    // create new task
    e.preventDefault()
    change();
    addTasksToPage();
  });
  function change() {
    let text = document.getElementById("new-task-description").value;
    let newTask = new Task(text);
    taskList.tasks.push(newTask);
  }

  function addTasksToPage() {
    document.getElementById("tasks").innerHTML += 
    `<li>${taskList.tasks[taskList.tasks.length-1].text} 
    <button onclick="deleteChild()">X</button>`;
  }
});
function deleteChild() {
  let list = document.getElementById("tasks");
  list.removeChild(list.childNodes[0]);
}

