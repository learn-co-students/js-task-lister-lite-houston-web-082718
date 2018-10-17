let tasks = [];
let taskID = 0;

class Task {

    constructor(task, taskListId) {
        this.task = task;
        this.taskList = taskListId;
        this.id = taskID++;

        tasks.push(this);
    }

}