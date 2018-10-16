
document.addEventListener("DOMContentLoaded", () => {
  // const taskList = new TaskList();
  input = document.getElementById('new-task-description')

  input.onkeydown = function(e){
    if(e.keyCode == 13){ // enter key
      doStuff()
    }
  };
  button = document.getElementById("submit-button")
  button.addEventListener("click", function(event) {
    doStuff()
  })
});

function doStuff() {
  list = document.querySelector('ul')
  li = document.createElement('li')
  li.style.color = dropdown.options[dropdown.selectedIndex].value
  li.innerHTML = `${input.value} <button class='edit'>edit</button> <button class='remove'>x</button>`
  list.appendChild(li)
  liID()
  removeLI()
  editLI()
}

function liID() {
  allLI = document.querySelectorAll('li')
  id = 0
  allLI.forEach(element => {
    element.id = `LI${++id}`
  });
}

function removeLI() {
  buttons = document.querySelectorAll('.remove')
  for (let button of buttons) {
    button.addEventListener('click', function(event) {
      button.parentNode.remove()
    })
  }
}

function editLI() {
  buttons = document.querySelectorAll('.edit')
  for (let button of buttons) {
    button.addEventListener('click', function(event) {
      div = document.createElement('div')
      div.innerHTML = `<input id='editInput' type='text'></input> <button class='editButton'>Submit</button>`
      button.appendChild(div)
      editListener()
    }, { once: true })
  }
}

function editListener() {
  editButton = document.querySelectorAll('.editButton')
  for (let el of editButton) {
    el.addEventListener('click', function(event) {
      parent = el.parentNode.parentNode.parentNode
      editInput = document.getElementById('editInput')
      console.log(editInput.value)
      parent.innerHTML = `${editInput.value} <button class='edit'>edit</button> <button class='remove'>x</button>`
      editLI()
      removeLI()
    })
  }
}
