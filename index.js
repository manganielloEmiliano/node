/*const http = require('http');
const port = 8080;

const servidor = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
    res.end('<h1>bienvenido al Mundo!</h1>');
});

servidor.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});*/
/*servidor en express*/
//node --watch .\index.js para ejecutar el servidor en con nodemon



/*app.get('/', (req, res) => {
    //res.send('<h1>Bienvenido al Mundo</h1>');
    res.sendFile(__dirname+'/public/index.html');
    res.sendFile(__dirname+'/public/styles.css');
});*/
const express = require('express');
const app = express();
const port = 8080;

const usuariosRouter = require('./routes/usuarios'); 

app.use(express.json());

app.use('/usuarios', usuariosRouter);
app.get('/', (req, res) => {
    res.send('<h1>Bienvenido al Mundo</h1>');
});
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});