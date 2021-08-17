const express = require('express');
const Professor = require('../models/professor');
const router = express.Router();

router.get('/', async (req, res) => {
    const professor = await Professor.find({});
    return res.send({ professor });
})

router.post('/cadastro', async(req, res) => {
    try{
        const professor = await Professor.create(req.body);

        return res.status(201).send({ professor });
    } catch(err){
        console.log(res);
        return res.status(400).send(err);
    }
})

router.delete('/remover/:id', async(req, res)=>{
    try{
        const professor = await Professor.findOneAndDelete({ _id: req.params.id });
        if(professor == null){
            return res.send(404);
        }
        return res.status(200).send({ professor });
    }
    catch(err){
        return res.status(400).send({ erro: 'Não foi possível deletar esse professor'});
    }
})

router.patch('/atualizar/:id', async(req, res) =>{
    try{
        const professor = await Professor.findOneAndUpdate({ _id: req.params.id }, req.body);
        return res.status(200).send('Atualizado com sucesso!');
    }catch(err){
        return res.status(304).send({ erro: 'Não foi possível atualizar esse professor' });
    }
})

module.exports = router;