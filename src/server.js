const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const turma = require('./controllers/turmaController');

app.use('/turma', turma);


app.listen(3000);

