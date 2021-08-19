const express = require('express');

const Turma = require('../models/turma');

const router = express.Router();

router.get('/', async (req, res) => {
    const turma = await Turma.find({}).populate('professor', 'cursoFic', 'alunos');
    return res.send({ turma });
})

router.post('cadastrar/', async(req, res) => {
    try{
        const turma = await Turma.create(req.body);

        return res.status(201).send({ turma });
    } catch(err){
        console.log(req);
        return res.status(400).send(err);
    }
})

router.delete('remover/:id', async(req, res)=>{
    try{
        const turma = await Turma.findOneAndDelete({ _id: req.params.id });
        if(turma == null){
            return res.send(404);
        }
        return res.status(200).send({ turma });
    }
    catch(err){
        return res.status(400).send({ erro: 'Não foi possível deletar essa turma'});
    }
})

router.patch('atualizar/:id', async(req, res) =>{
    try{
        const turma = await Turma.findOneAndUpdate({ _id: req.params.id }, req.body);
        return res.status(200).send('Atualizado com sucesso!');
    }catch(err){
        return res.status(304).send({ erro: 'Não foi possível atualizar essa turma' });
    }
})

module.exports = router;