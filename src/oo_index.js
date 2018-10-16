
document.addEventListener("DOMContentLoaded", () => {
  //get enter key input for create new task text field
  input = document.getElementById('new-task-description')
  input.onkeydown = function(e){
    if(e.keyCode == 13){ 
      doStuff()
    }
  };
  //get click input for create new task button
  button = document.getElementById("submit-button")
  button.addEventListener("click", function(event) {
    doStuff()
  })
});

function doStuff() {
  list = document.querySelector('ul')
  li = document.createElement('li')
  li.style.color = dropdown.options[dropdown.selectedIndex].value
  li.innerHTML = `<div>${input.value}</div><button class='edit'>edit</button> <button class='remove'>x</button>`
  li.childNodes[1].addEventListener('click', editListItem)
  li.childNodes[3].addEventListener('click', deteleListItem)
  list.appendChild(li)
}

function editListItem() {
  let button = this
  if (button.dataset.editFormOpened !== "true") {
    button.dataset.editFormOpened = true
    div = document.createElement('div')
    div.innerHTML = `<input id='editInput' type='text'></input> <button class='editSubmitButton'>Submit</button>`
    this.appendChild(div)
    addListenerToEditSubmit(button)
  }
}

function deteleListItem() {
  this.parentElement.remove()
}

function addListenerToEditSubmit(editButton) {
  let submitButton = editButton.firstElementChild.childNodes[2]
  submitButton.addEventListener('click', function(event) {
    event.stopPropagation();
    editInput = submitButton.parentNode.firstElementChild
    editButton.parentElement.firstElementChild.textContent = editInput.value
    while (editButton.firstChild) {
      editButton.removeChild(editButton.firstChild);
    }
    editButton.innerHTML = "edit"
    editButton.dataset.editFormOpened = false
  })
}
