const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const turma = require('./controllers/turmaController');
const cursoFic = require('./controllers/cursoFicController');
const aluno = require('./controllers/alunoController');

app.use('/turma', turma);
app.use('/cursoFic', cursoFic)
app.use('/aluno', aluno)


app.listen(3000);
