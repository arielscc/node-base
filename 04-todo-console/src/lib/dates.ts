export const formatDateTime = (date: Date | string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  if (typeof date === 'string') {
    date = new Date(date);
  }
  return new Intl.DateTimeFormat('es-ES', options).format(date);
};
