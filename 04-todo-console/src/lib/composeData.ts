import Task from '../model/task';
import { formatDateTime } from './dates';

export const composeData = (task: Task, index: number) => {
  return [
    index + 1,
    task.description,
    task.completed ? 'Completada'.green : 'Pendiente'.red,
    formatDateTime(task.createdAt),
    formatDateTime(task.updatedAt),
  ];
};
