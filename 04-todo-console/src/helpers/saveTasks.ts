import { existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from 'fs';
import os from 'os';
import { dirname, join } from 'path';
import Task from '../model/task';

const home = os.homedir();
const DB_FILE = join(home, '.todos-db', 'data.json');

export const saveTasks = (tasks: Task[]) => {
  const dir = dirname(DB_FILE);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
  const tmpFile = `${DB_FILE}.tmp`;
  writeFileSync(tmpFile, JSON.stringify(tasks));
  renameSync(tmpFile, DB_FILE);
};

export const readTasks = () => {
  if (existsSync(DB_FILE)) {
    const data = readFileSync(DB_FILE, 'utf8');
    return JSON.parse(data);
  } else {
    return [];
  }
};
