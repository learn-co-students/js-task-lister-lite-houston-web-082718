
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  
  addPriority()

  addSorting()
  
  const submit = document.getElementById('create-task-form').children[2]
  submit.addEventListener('click', function(event) {
    event.preventDefault();
    
    taskList.createTask();

    taskList.showTasks();

  })

  document.addEventListener('click', function(event) {
    event.preventDefault();

    if (event.target.dataset.id === 'delete') {
      taskList.deleteTask(event.target.id)
    }

  })

  sort = document.getElementById('sort');
  sort.addEventListener('click', function(event) {
    event.preventDefault();

    sortBy = document.getElementById('sortBy');

    tasks.sort(function(a, b) {
      return (sortBy.value === 'ASC') ? (a.priority - b.priority) : (b.priority - a.priority);
    })

    taskList.showTasks();

  })

});

function addPriority() {
  const priority = document.createElement('select');
  document.getElementById('create-task-form').appendChild(priority);
  priority.setAttribute('id', 'priority');

  const priorities = ['high', 'medium', 'low'];
  priorities.forEach(function(el) {
      priority.innerHTML += `<option value=${priorities.indexOf(el)}>${el}</option>`;
  })

}

function addSorting() {
  const sortBy = document.createElement('select');
  document.getElementById('list').appendChild(sortBy);
  sortBy.setAttribute('id', 'sortBy');
  
  const sorts = ['ASC', 'DESC'];
  sorts.forEach(function(el) {
    sortBy.innerHTML += `<option value=${el}>${el}</option>`;
  })

  sort = document.createElement('button');
  document.getElementById('list').appendChild(sort);
  sort.setAttribute('id', 'sort')
  sort.innerHTML = "Sort"
}