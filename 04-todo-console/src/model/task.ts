import { v4 as uuidv4 } from 'uuid';

class Task {
  id = "";
  description = "";
  completedAt = null;

  constructor( description: string) {
    this.id = uuidv4();
    this.description = description;
    this.completedAt = null;
  }
}

export default Task
