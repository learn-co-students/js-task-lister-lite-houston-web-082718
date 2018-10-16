


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
    let prio = document.getElementById("dropdown").value
    let newTask = new Task(text, prio);
    taskList.tasks.push(newTask);
  }

  function addTasksToPage() {
    let lastTask = taskList.tasks[taskList.tasks.length-1]
    document.getElementById("tasks").innerHTML += 
    `<li><font color="${lastTask.color()}">${lastTask.text}</font>
    <button onclick="deleteChild()">X</button>`;
  }
});
function deleteChild() {
  let list = document.getElementById("tasks");
  list.removeChild(list.childNodes[0]);
}

