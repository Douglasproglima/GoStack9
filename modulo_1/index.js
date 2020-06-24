const express = require('express');
const server = express();
const port = 3000;

//Informa para o express que as requisições serão trafegadas usando JSON
server.use(express.json());

const users = ['Douglas Lima', 'João Exemplo', 'Débora Leite'];

//http://localhost:3000/login/?name=Douglas
server.get('/login', (request, response) => {
  const name = request.query.name;
  return response.json({ message: `Rota login: Hello World ${name}`});
});

//http://localhost:3000/users/2 => index do array users
server.get('/users', (req, res) => {
  return res.json(users);
});

//http://localhost:3000/users/1
server.get('/users/:id', (req, res) => {
  //const id = req.params.id;
  const { id } = req.params;
  return res.json(users[id]);
});

//http://localhost:3000/users => body: { "name": "nome_usuario" }
server.post('/users', (req, res) => {
  const { name } = req.body;
  users.push(name);
  return res.json(users);
});

server.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  users[id] = name;
  res.json(users);
});

server.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  users.pop(id);
  return res.json(users);
});

server.listen(port, () => {
  console.log(`Acessar http://localhost:${port}`);
  console.log(`Servidor executando na porta ${port}`);
});
