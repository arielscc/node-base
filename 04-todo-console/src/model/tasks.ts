import { composeData } from '../lib/composeData';
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

  loadTasks(tasks: Task[]) {
    tasks.forEach((task) => {
      this._taskList[task.id] = task;
    });
  }

  listAllTasks() {
    const data = this.taskList.map(composeData);
    return data;
  }

  listCompletedTasks() {
    const data = this.taskList.filter((task) => task.completedAt).map(composeData);
    return data;
  }

  listPendingTasks() {
    const data = this.taskList.filter((task) => !task.completedAt).map(composeData);
    return data;
  }
}

export default Tasks;
