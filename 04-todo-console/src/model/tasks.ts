interface Task {
  id: string;
  description: string;
  completedAt: Date | null;
}
type TasksList = Record<string, Task>;
class Tasks {
  _taskList: TasksList = {};
  constructor() {
    this._taskList = {};
  }
}

export default Tasks;
