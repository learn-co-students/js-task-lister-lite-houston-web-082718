let taskListId = 0;


class TaskList {

    constructor() {
        this.id = taskListId++;
        let newList = {};
        newList.id = this.id;
        newList.tasks = [];
        taskLists.push(this);
    }



    newTask(e) {
        e.preventDefault();
        const taskInput = document.getElementById('new-task-description');
        const newTask = new Task(taskInput.value, this.id);
        const list = document.querySelector('#tasks');
        taskInput.value = "";
        list.innerHTML += `<li id="task-${newTask.id}" data-description="${newTask.task}">${newTask.task} <button class="delete-button" id="delete-${newTask.id}">Delete</button></li>`;

    }

}