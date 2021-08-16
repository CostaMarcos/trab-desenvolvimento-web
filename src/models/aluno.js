const mongoose = require('../database');

const alunoSchema = new mongoose.Schema({
    nome: String,
    matricula: Number
})

const aluno = mongoose.model('aluno', alunoSchema);

module.exports = aluno;
