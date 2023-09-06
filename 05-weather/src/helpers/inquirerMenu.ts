import 'colors';
import inquirer, { QuestionCollection } from 'inquirer';
import { MenuOptions, Place } from '../models/types';
// import Task from '../model/task';

const questions: QuestionCollection = [
  {
    type: 'list',
    name: 'option',
    message: 'Seleccione una opción',
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
  console.log('   Consulta de clima'.green.bold);
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
