import {
  completeTaskOptions,
  confirm,
  inquirerMenu,
  pauseMenu,
  readInput,
  tasksOptions,
} from './helpers/inquirerMenu';
import { logTable } from './helpers/logTable';
import { readTasks, saveTasks } from './helpers/saveTasks';
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
        const data = tasks.listAllTasks();
        logTable(data);
        break;
      case '3':
        const completedTasks = tasks.listCompletedTasks();
        logTable(completedTasks);
        break;
      case '4':
        const pendingTasks = tasks.listPendingTasks();
        logTable(pendingTasks);
        break;
      case '5':
        const uncompletedTasks = Object.values(tasks.taskList).filter((task) => !task.completedAt);
        if (uncompletedTasks.length === 0) {
          console.log('No hay tareas pendientes');
          break;
        }
        const ids = await completeTaskOptions(uncompletedTasks);
        ids.forEach((id: string) => {
          tasks._taskList[id].completedAt = new Date();
          tasks._taskList[id].updatedAt = new Date();
        });
        break;
      case '6':
        const taskId = await tasksOptions(Object.values(tasks.taskList));
        if (taskId !== '0') {
          const resp = await confirm('¿Está seguro?');
          if (resp) {
            tasks.deleteTask(taskId);
            console.log('Tarea borrada');
          }
        }
        break;
      default:
        break;
    }

    saveTasks(tasks.taskList);

    await pauseMenu();
  } while (opt !== '0');
};

main();
