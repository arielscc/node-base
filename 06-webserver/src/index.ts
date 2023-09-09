import express from 'express';
import path from 'path';

const app = express();
const port = 8080;

app.use('/', express.static('public/web-page'));

app.get('/generic', (req, res) => {
  const genericPage = path.join(__dirname, '../public/web-page/generic.html');
  res.sendFile(genericPage);
});

app.get('/elements', (req, res) => {
  const elementsPage = path.join(__dirname, '../public/web-page/elements.html');
  res.sendFile(elementsPage);
});

app.listen(port, () => {
  console.log(`Server is running in http://localhost:${port}`);
});
