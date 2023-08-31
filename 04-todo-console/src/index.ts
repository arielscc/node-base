import { inquirerMenu, pauseMenu, readInput } from './helpers/inquirerMenu';
import { readTasks, saveTasks } from './helpers/saveTasks';
import Task from './model/task';
import Tasks from './model/tasks';

const main = async () => {
  let opt: string;
  const tasks = new Tasks();

  const tasksFromDB = readTasks();
  if (tasksFromDB) {
    tasks.loadTasks(tasksFromDB);
  }

  do {
    // const task = new Task('Comprar comida');
    // tasks._taskList[task.id] = task;

    opt = await inquirerMenu();

    switch (opt) {
      case '1':
        const description = await readInput('Descripción:');
        tasks.createTask(description);
        break;
      case '2':
        console.log(tasks.taskList);
        break;
      case '3':
        break;
      case '4':
        const uncompletedTasks = Object.keys(tasks._taskList).reduce(
          (acc, key) => {
            const task = tasks._taskList[key];
            if (task.completedAt === null) {
              acc[key] = task;
            }
            return acc;
          },
          {} as Record<string, Task>
        );
        console.log(uncompletedTasks);
      default:
        break;
    }

    saveTasks(tasks.taskList);

    await pauseMenu();
  } while (opt !== '0');
};

main();
