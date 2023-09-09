import express from 'express';
import hbs from 'hbs';
import path from 'path';

const port = 8080;
const app = express();

// handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, '../views/partials'));

// servir contenido estatico
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Ariel Probando handlebars',
    express: 'Express',
    handlebars: 'Handlebars',
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    title: 'generic',
    express: 'Express',
    handlebars: 'Handlebars',
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    title: 'elements',
    express: 'Express',
    handlebars: 'Handlebars',
  });
});

// app.get('/generic', (req, res) => {
//   const genericPage = path.join(__dirname, '../public/web-page/generic.html');
//   res.sendFile(genericPage);
// });

// app.get('/elements', (req, res) => {
//   const elementsPage = path.join(__dirname, '../public/web-page/elements.html');
//   res.sendFile(elementsPage);
// });

app.listen(port, () => {
  console.log(`Server is running in http://localhost:${port}`);
});
