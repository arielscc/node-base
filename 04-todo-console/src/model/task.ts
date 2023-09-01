import { v4 as uuidv4 } from 'uuid';
class Task {
  id: string = '';
  description: string = '';
  createdAt: Date;
  updatedAt: Date;
  completed: boolean;

  constructor(description: string) {
    this.id = uuidv4();
    this.description = description;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.completed = false;
  }
}

export default Task;
