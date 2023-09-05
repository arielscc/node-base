import 'colors';
import inquirer, { QuestionCollection } from 'inquirer';
import { MenuOptions, Place } from '../models/types';
// import Task from '../model/task';

const questions: QuestionCollection = [
  {
    type: 'list',
    name: 'option',
    message: '¿Qué desea hacer?',
    choices: [
      {
        value: MenuOptions.BuscarCiudad,
        name: `${(MenuOptions.BuscarCiudad + '.').green} Buscar Ciudad`,
      },
      {
        value: MenuOptions.Historial,
        name: `${(MenuOptions.Historial + '.').green} Historial`,
      },
      {
        value: MenuOptions.Salir,
        name: `${(MenuOptions.Salir + '.').green} Salir`,
      },
    ],
  },
];

export const inquirerMenu = async (): Promise<MenuOptions> => {
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

export const completeTaskOptions = async (tasks: any) => {
  const options: QuestionCollection = [
    {
      type: 'checkbox',
      name: 'ids',
      message: '¿Qué tarea(s) desea completar?',
      choices: tasks.map((task: any, index: number) => {
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

export const selectPlace = async (places: Place[]): Promise<string> => {
  const choices = places.map((place: Place, index: number) => {
    const idx = `${index + 1}.`.green;
    return {
      value: place.id,
      name: `${idx} ${place.name}`,
    };
  });

  choices.unshift({
    value: '0',
    name: '0.'.green + ' Cancelar',
  });

  const options: QuestionCollection = [
    {
      type: 'list',
      name: 'id',
      message: '¿Qué lugar desea seleccionar?',
      choices,
    },
  ];
  const { id } = await inquirer.prompt(options);
  return id;
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
