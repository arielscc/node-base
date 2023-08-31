import Task from '../model/task';
import { formatDate } from './dates';

export const composeData = (task: Task, index: number) => {
  return [
    index + 1,
    task.description,
    task.completedAt ? 'Completada'.green : 'Pendiente'.red,
    formatDate(task.createdAt),
  ];
};
