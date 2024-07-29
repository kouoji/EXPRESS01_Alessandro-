const express = require('express');
const server = express();

server.get('/', (req, res) => {
    res.send('<h1>Olá ExpressJS</h1>');
});

server.get('/sobre', (req, res) => {
    res.send('<h2>Somos quem podemos ser</h2>');
});

server.get('/json', (req, res) => {
    res.send({ 'nome': 'Alcebíades' });
});

server.use((req, res) => {
    res.status(404).send("<h1>Erro!!</h1>");
});

server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});