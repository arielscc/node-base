import { formatDate } from '../lib/dates';
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

  listTasks() {
    const data = this.taskList.map((task, index) => {
      return [
        index + 1,
        task.description,
        task.completedAt ? 'Completada'.green : 'Pendiente'.red,
        formatDate(task.createdAt),
      ];
    });
    const headers = ['numero', 'descripción', 'estado', 'creado el'].map((header) => header.green);
    return [headers, ...data];
  }
}

export default Tasks;
