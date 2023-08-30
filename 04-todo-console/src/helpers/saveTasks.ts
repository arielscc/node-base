import { existsSync, readFileSync, writeFileSync } from 'fs';
import Task from '../model/task';

const DOCUMENT_PATH = './db/data.json';

export const saveTasks = (tasks: Task[]) => {
  writeFileSync(DOCUMENT_PATH, JSON.stringify(tasks));
};

export const readTasks = () => {
  if (existsSync(DOCUMENT_PATH)) {
    const tasks = JSON.parse(readFileSync(DOCUMENT_PATH, { encoding: 'utf-8' }));
    return tasks;
  }
  return null;
};
