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

export const logTable = (data: any[][]) => {
  console.log(table(data, config));
};
