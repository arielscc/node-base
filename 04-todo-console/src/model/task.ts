import { v4 as uuidv4 } from 'uuid';
class Task {
  id: string = '';
  description: string = '';
  createdAt: Date;
  updatedAt: Date;
  completedAt: Date | null = null;

  constructor(description: string) {
    this.id = uuidv4();
    this.description = description;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.completedAt = null;
  }
}

export default Task;
