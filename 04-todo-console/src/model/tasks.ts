import Task from './task';

type TasksList = Record<string, Task>;

class Tasks {
  _taskList: TasksList = {};
  constructor() {
    this._taskList = {};
  }

  get taskList() {
    return Object.values(this._taskList);
  }

  createTask(description: string = '') {
    const task = new Task(description);
    this._taskList[task.id] = task;
  }
}

export default Tasks;
