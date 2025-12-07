class Task {
  constructor(title, description = '', status, dueDate) {
    this.id = Task.incrementId();
    this.title = title;
    this.description = description;
    this.status = status;
    this.dueDate = dueDate;
  }

 
  static tasks = [];


  static currentId = 1;
  static incrementId() {
    return this.currentId++;
  }
}

module.exports = Task;
