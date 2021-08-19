const mongoose = require('../database');

const TurmaSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true,
    },
    dataInicio: {
        type: Date,
        require: true,
    },
    dataFim: {
        type: Date,
        require: true
    },
    professor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Professor',
        require: false
    },
    cursoFic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CursoFic',
        require: false
    },
    alunos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'aluno'
    }]
})

const Turma = mongoose.model('Turma', TurmaSchema);

module.exports = Turma;