import 'colors';
import inquirer, { QuestionCollection } from 'inquirer';

const questions: QuestionCollection = [
  {
    type: 'list',
    name: 'option',
    message: '¿Qué desea hacer?',
    choices: [
      {
        value: '1',
        name: '1. Crear tarea',
      },
      {
        value: '2',
        name: '2. Listar tareas',
      },
      {
        value: '3',
        name: '3. Listar tareas completadas',
      },
      {
        value: '4',
        name: '4. Listar tareas pendientes',
      },
      {
        value: '5',
        name: '5. Completar tarea(s)',
      },
      {
        value: '6',
        name: '6. Borrar tareas',
      },
      {
        value: '0',
        name: '0. Salir',
      },
    ],
  },
];

export const inquirerMenu = async () => {
  console.clear();
  console.log('============================'.green);
  console.log('   Seleccione una opción'.green);
  console.log('============================'.green);

  // const test = await inquirer.createPromptModule()
  // return await test({
  //   name:"hola",
  //   loop: true,

  // })
  const option = await inquirer.prompt(questions);
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
