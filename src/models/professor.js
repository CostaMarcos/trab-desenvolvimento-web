const mongoose = require('../database');

const ProfessorSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    id: {
        type: Number,
        require: true
    }
})

const Professor = mongoose.model('Professor', ProfessorSchema);

module.exports = Professor;