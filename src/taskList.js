// The controller transfers information between the model and the view

class TaskList {

    showTasks() {
        const ul = document.getElementById('tasks');
        ul.innerHTML = ""

        tasks.forEach(function(el) {
            ul.innerHTML += `<li><font color=${el.color}>${el.description}</font> <button data-id="delete" id=${el.id}>X</button></li>`   
        })
    }

    createTask() {
        const description = document.getElementById('new-task-description');
        const priority = document.getElementById('priority');
        new Task(description.value, priority.value);
        description.value = ""
    }

    updateTask() {

    }

    deleteTask(id) {
        tasks.splice(tasks.indexOf(tasks[id]), 1);
        this.showTasks();
    }

}
