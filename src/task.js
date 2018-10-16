class Task {
    constructor(text, prio){
    this.text = text
    this.prio = prio
    }
    color(){
        if (this.prio === 'high'){
            return 'red'
        }else if (this.prio === 'medium'){
            return 'orange'
        }else if (this.prio === 'low'){
            return 'blue'
        }
    }
}
