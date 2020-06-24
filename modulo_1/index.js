const express = require('express');
const server = express();
const port = 3000;

//http://localhost:3000/login/?name=Douglas
server.get('/login', (request, response) => {
  const name = request.query.name;
  return response.json({ message: `Rota login: Hello World ${name}`});
});

//http://localhost:3000/users/1
server.get('/user/:id', (req, res) => {
  //const id = req.params.id;
  const { id } = req.params;
  return res.json({ message: `Rota: users id: ${id}` });
});

const users = ['Douglas Lima', 'Ana Clara', 'Débora Leite'];
server.get('/users/:index', (req, res) => {
  const { index } = req.params;
  return res.json(users[index]);
});

server.listen(port, () => {
  console.log(`Acessar http://localhost:${port}`);
  console.log(`Servidor executando na porta ${port}`);
});
