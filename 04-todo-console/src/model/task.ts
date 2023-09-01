import { v4 as uuidv4 } from 'uuid';
class Task {
  id: string = '';
  description: string = '';
  createdAt: string = '';
  updatedAt: string = '';
  completed: boolean;

  constructor(description: string) {
    this.id = uuidv4();
    this.description = description;
    this.createdAt = new Date().toISOString();
    this.updatedAt = new Date().toISOString();
    this.completed = false;
  }
}

export default Task;
