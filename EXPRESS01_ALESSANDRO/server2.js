const express = require('express');
const path = require('path'); 
const server2 = express();

server2.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'principal.html'));
});

server2.get('/servicos', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'servicos.html'));
});

server2.get('/sobre', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'sobre.html'));
});

server2.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'html', '404.html'));
});

server2.listen(3000, () => {
    console.log('Segundo servidor Express rodando na porta 3000');
});