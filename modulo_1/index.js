const express = require('express');
const server = express();
const port = 3000;

//Informa para o express que as requisições serão trafegadas usando JSON
server.use(express.json());

const users = ['Douglas Lima', 'João Exemplo', 'Débora Leite'];

//Middleware de Log - Global
server.use((req, res, next) => {
  console.log(`Método: ${req.method} | URL: ${req.url}`);

  return next();
});

//Middleware local - Valida se já existe um nome inserido através das requisições de PUT e POST
function isUsernameExistsInDate(req, res, next){
  if(users.find(value => value == req.body.name))
    return res.status(400).json({ message: "Name is exists" });
  
  next();
}

//Middleware local - Valida se contém o parametro 'name' nas requisições de PUT e POST
function isUsernameExists(req, res, next){
  if(users.find(value => value == req.body.name))
    return res.status(400).json({ message: "Name is exists" });
  
  next();
}

//Middleware local - valida se existe o id do usuário informado no ato de listar, alterar ou deletar
function isUserExistsInDate(req, res, next) {
  if(!users[req.params.id])
    return res.status(400).json({ message: 'User does not exists' });

  return next();
}

//Middleware para alterar o valor de req
function checkUserInArray(req, res, next) {
  const user = users[req.params.id];
  if(!user)
    return res.status(400).json({ message: 'User does not exists' });

  req.user = user;

  return next();
}

//http://localhost:3000/login/?name=Douglas
server.get('/login', (request, response) => {
  const name = request.query.name;
  return response.json({ message: `Rota login: Hello World ${name}`});
});

//http://localhost:3000/users/2 => index do array users
server.get('/users', (req, res) => {
  return res.json(users.map((item, index) => ({ index: index, item: item }) ));
});

//http://localhost:3000/users/1
server.get('/users/:id', checkUserInArray, (req, res) => {
  return res.json(req.user); //Vem do middleware checkUserInArray
});

//http://localhost:3000/users => body: { "name": "nome_usuario" }
server.post('/users', isUsernameExists, isUsernameExistsInDate, (req, res) => {
  const { name } = req.body;
  users.push(name);
  return res.json(users);
});

server.put('/users/:id', isUserExistsInDate, isUsernameExists, isUsernameExistsInDate, (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  users[id] = name;
  res.json(users);
});

server.delete('/users/:id', isUserExistsInDate, (req, res) => {
  const { id } = req.params;
  users.pop(id);
  return res.json(users);
});

server.listen(port, () => {
  console.log(`Acessar http://localhost:${port}`);
  console.log(`Servidor executando na porta ${port}`);
});
