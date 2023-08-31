import { TableUserConfig, table } from 'table';

const config: TableUserConfig = {
  singleLine: true,
  header: {
    alignment: 'center',
    content: 'Tareas'.yellow,
  },
  columns: {
    1: {
      width: 25,
    },
  },
};

const headers = ['numero', 'descripción', 'estado', 'creado el'].map((header) => header.green);

export const logTable = (data: any[][]) => {
  console.log(table([headers, ...data], config));
};
