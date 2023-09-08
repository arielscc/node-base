import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
  res.send('Hello Users!');
});

app.get('/users/:name', (req, res) => {
  const { name } = req.params;
  res.send(`Hello ${name}!`);
});

app.get('*', (req, res) => {
  res.send('404 Not Found');
});

app.listen(8080, () => {
  console.log('Server is running in http://localhost:8080');
});
