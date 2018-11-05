class TaskList {

  // createNewTask() {
  //   input = document.querySelector(".new-task-description")
  //   input.addEventListener("keydown", function(event) {
  //     console.log("test")
  //   })
  listen() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const value = e.target['new-task-description'].value;
      const task = new Task(value)
      const li = document.createElement('li');
      const btn = document.createElement('button')
      btn.innerText = "X"
      li.innerText = task.description;
      const ul = document.getElementById('tasks')
      const children = ul.children.length+1
      li.appendChild(btn)
      li.setAttribute('id', 'el' + children)
      btn.setAttribute('li', 'el' + children)
      ul.appendChild(li)
      btn.addEventListener('click', function(e) {
        li.remove()
      })
      document.getElementById('new-task-description').value = ''
    });
  }
}

let tl = new TaskList;
tl.listen();

//append a delete for every task instance
  //on form submit a button should be created
  //create a variable that represents the length of children of the ul tag  + 1
  //set each div id attribute to be 'task' + the current length of children.
  //set the button "sister" attribute to the id of li

//add a an eventlistener to each button
  //all buttons should have the 'delete' class
  //add event listener to that class

//on click the selected li should be deleted
  //get the value of button.sister
  //use that value to get the correct 'task' div
  //delete that div and its children
