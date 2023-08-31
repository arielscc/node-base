export const formatDate = (date: Date | string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  if (typeof date === 'string') {
    date = new Date(date);
  }
  return new Intl.DateTimeFormat('es-ES', options).format(date);
};
