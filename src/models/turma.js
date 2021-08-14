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
    }
})

const Turma = mongoose.model('Turma', TurmaSchema);

module.exports = Turma;