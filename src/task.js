// Your task file is your model. It is responsible for creating tasks and assigning attributes to them. 
const tasks = [];
let taskId = 0;

class Task {
    constructor(description, priority) {
        this.description = description;
        this.priority = priority
        switch(priority) {
            case "0":
                this.color = "red";
                break;
            case "1":
                this.color = "yellow";
                break;
            case "2":
                this.color = "green";
                break;
        }
        this.id = taskId++;
        tasks.push(this);
    }
    
}
