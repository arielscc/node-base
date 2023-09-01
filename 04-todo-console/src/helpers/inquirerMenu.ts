import 'colors';
import inquirer, { QuestionCollection } from 'inquirer';
import Task from '../model/task';

const questions: QuestionCollection = [
  {
    type: 'list',
    name: 'option',
    message: '¿Qué desea hacer?',
    choices: [
      {
        value: '1',
        name: `${'1.'.green} Crear tarea`,
      },
      {
        value: '2',
        name: `${'2.'.green} Listar tareas`,
      },
      {
        value: '3',
        name: `${'3.'.green} Listar tareas completadas`,
      },
      {
        value: '4',
        name: `${'4.'.green} Listar tareas pendientes`,
      },
      {
        value: '5',
        name: `${'5.'.green} Completar tarea(s)`,
      },
      {
        value: '6',
        name: `${'6.'.green} Borrar tareas`,
      },
      {
        value: '0',
        name: `${'0.'.green} Salir`,
      },
    ],
  },
];

export const inquirerMenu = async (): Promise<string> => {
  console.clear();
  console.log('============================'.green);
  console.log('   Seleccione una opción'.bold);
  console.log('============================'.green);

  const { option } = await inquirer.prompt(questions);
  return option;
};

export const pauseMenu = async () => {
  const question: QuestionCollection = [
    {
      type: 'input',
      name: 'input',
      message: `Presione ${'Enter'.green} para continuar`,
    },
  ];
  await inquirer.prompt(question);
};

export const readInput = async (message: string) => {
  const question: QuestionCollection = [
    {
      type: 'input',
      name: 'description',
      message,
      validate(value: string) {
        if (value.length === 0) {
          return 'Por favor ingrese un valor';
        }
        return true;
      },
    },
  ];
  const { description } = await inquirer.prompt(question);
  return description;
};

export const completeTaskOptions = async (tasks: Task[]) => {
  const options: QuestionCollection = [
    {
      type: 'checkbox',
      name: 'ids',
      message: '¿Qué tarea(s) desea completar?',
      choices: tasks.map((task: Task, index: number) => {
        const idx = `${index + 1}.`.green;
        return {
          value: task.id,
          name: `${idx} ${task.description}`,
          checked: task.completed ? true : false,
        };
      }),
    },
  ];
  const { ids } = await inquirer.prompt(options);
  return ids;
};

export const tasksOptions = async (tasks: Task[]) => {
  const options: QuestionCollection = [
    {
      type: 'list',
      name: 'ids',
      message: '¿Qué tarea desea eliminar?',
      choices: [
        ...tasks.map((task: Task, index: number) => {
          const idx = `${index + 1}.`.green;
          return {
            value: task.id,
            name: `${idx} ${task.description}`,
          };
        }),
        {
          value: '0',
          name: `${'0.'.green} Cancelar`,
        },
      ],
    },
  ];
  const { ids } = await inquirer.prompt(options);
  return ids;
};

export const confirm = async (message: string) => {
  const question: QuestionCollection = [
    {
      type: 'confirm',
      name: 'ok',
      message,
    },
  ];
  const { ok } = await inquirer.prompt(question);
  return ok;
};
