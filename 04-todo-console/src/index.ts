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
    opt = await inquirerMenu();

    switch (opt) {
      case '1':
        const description = await readInput('Descripción:');
        tasks.createTask(description);
        break;
      case '2':
        const data = tasks.listAllTasks();
        if (data.length === 0) {
          console.log('No hay tareas registradas'.green);
          break;
        }
        logTable(data);
        break;
      case '3':
        const completedTasks = tasks.listCompletedTasks();
        if (completedTasks.length === 0) {
          console.log('No hay tareas completadas'.green);
          break;
        }
        logTable(completedTasks);
        break;
      case '4':
        const pendingTasks = tasks.listPendingTasks();
        if (pendingTasks.length === 0) {
          console.log('No hay tareas pendientes'.green);
          break;
        }
        logTable(pendingTasks);
        break;
      case '5':
        const currentTasks = Object.values(tasks.taskList);
        const checkedIds = await completeTaskOptions(currentTasks);
        currentTasks.map((task) => {
          task.completed = checkedIds.includes(task.id) ? true : false;
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
