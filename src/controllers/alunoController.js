const express = require('express');
const aluno = require('../models/aluno');
const router = express.Router();

router.get('/', async (req, res) => {
    const turma = await aluno.find({});
    return res.send({ aluno });

})

router.post('/cadastro', async(req, res) => {
    try{
        const aluno = await aluno.create(req.body);

        return res.status(201).send({ aluno });
    } catch(err) {
        console.log(res);
        return res.status(400).send(err);
    }
})

router.patch('/atualizar/:id', async(req, res) =>{
    try{
        await aluno.findOneAndUpdate({ _id: req.params.id }, req.body);
        return res.status(200).send('Atualizado com sucesso!');
    }catch(err){
        return res.status(304).send({ erro: 'Não foi possível atualizar' });
    }
})

router.delete('/remover/:id', async(req, res)=>{
    try{
        const aluno = await aluno.findOneAndDelete({ _id: req.params.id });
        if(aluno == null){
            return res.send(404);
        }
        return res.status(200).send({ aluno });
    }
    catch(err){
        return res.status(400).send({ erro: 'Não foi possível deletar'});
    }
})

module.exports = router;