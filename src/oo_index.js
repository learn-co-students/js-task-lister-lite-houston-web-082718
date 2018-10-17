let taskLists = []

document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  form = document.querySelector('#create-task-form');
  form.addEventListener('submit', (event) => {
    taskList.newTask(event);
  })

  document.addEventListener('click', event => {
    if (event.target.className === 'delete-button') {
      addDeleteButtonListener(event.target.parentNode)
    }
  })
});

function addDeleteButtonListener(data) {
  let dataid = parseInt(data.id.split("-")[1]);

  const deleteButton = document.querySelector(`#delete-${dataid}`);

  const taskLi = document.querySelector(`#task-${dataid}`);
  taskLi.remove();
};