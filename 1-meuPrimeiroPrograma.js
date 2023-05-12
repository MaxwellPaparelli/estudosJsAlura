const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log("Meu Primeiro programa: trabalhando com variáveis");

    const idade = 27;
    
    console.log(idade);
    console.log(idade+2);
    console.log(idade-2);
    console.log(idade/2);
    
    const idadeSomada = idade+2;
    console.log(idadeSomada);
});