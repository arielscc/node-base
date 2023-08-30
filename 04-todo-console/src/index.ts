import { pauseMenu } from './inquirerMenu';
import Task from './model/task';
import Tasks from './model/tasks';

const main = async () => {
  let opt;
  do {
    // const { option } = await inquirerMenu();
    // opt = option
    const tasks = new Tasks();
    const task = new Task('Comprar comida');

    tasks._taskList[task.id] = task;

    console.log(tasks);

    await pauseMenu();
  } while (opt !== '0');
};

main();
