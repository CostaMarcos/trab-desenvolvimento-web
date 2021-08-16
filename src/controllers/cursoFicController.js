const express = require('express')
const router = express.Router()

const CursoFic = require("../models/curso_fic")

router.get('/', async (req, res) => {
    const cursoFic = await CursoFic.find({});
    return res.send({ cursoFic });
})

router.post('/cadastro', async(req, res) => {
    try{
        const cursoFic = await CursoFic.create(req.body);

        return res.status(201).send({ cursoFic });
    } catch(err) {
        console.log(res);
        return res.status(400).send(err);
    }
})

router.patch('/atualizar/:id', async(req, res) =>{
    try{
        await CursoFic.findOneAndUpdate({ _id: req.params.id }, req.body);
        return res.status(200).send('Atualizado com sucesso!');
    }catch(err){
        return res.status(304).send({ erro: 'Não foi possível atualizar esse curso FIC' });
    }
})

router.delete('/remover/:id', async(req, res)=>{
    try{
        const cursoFic = await CursoFic.findOneAndDelete({ _id: req.params.id });
        if(cursoFic == null){
            return res.send(404);
        }
        return res.status(200).send({ cursoFic });
    }
    catch(err){
        return res.status(400).send({ erro: 'Não foi possível deletar esse curso FIC'});
    }
})

module.exports = router