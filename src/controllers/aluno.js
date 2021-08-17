const express = require ('express');

const server = express();

server.use(express.json());

const dados = ['Nome do Aluno: Amanda de Souza' , 'Matrícula: 123456'];

//CRUD-----> CREATE, READ, UPDATE, DELETE.

//Plataforma de testes da API: Insomnia, Postman

//retornar um dado
server.get('/dados/:index', (req, res) => {
    const { index } = req.params;  

    return res.json(dados[index]);
})

server.get('/aluno', (req,res) => {
    return res.json(aluno);
});

server.get('/dados/', (req, res) => {
    return res.json(dados);
});

//Criar um dado
server.post('/dados', (req, res) => {
    const { name } = req.body;
    dados.push(name);

    return res.json(dados);
});

//Atualizar um dado
server.put('/dados/:index', (req, res) => {
    const { index } = req.params;
    const{ name } = req.body;

    aluno[index] = name;

    return res.json(aluno);
})

//Deletar um dado
server.delete('/dados/:index', (req,res) => {
    const { index } = req.params;

    dados.splice(index, 1);
    return res.json({ message: "O dado foi deletado"});
});


server.listen(3000);