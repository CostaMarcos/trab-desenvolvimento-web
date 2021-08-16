const mongoose = require('../database')

const CursoFicSchema = new mongoose.Schema({
    id: Number,
    nome: String
})

const CursoFic = mongoose.model("CursoFic", CursoFicSchema)
module.exports = CursoFic