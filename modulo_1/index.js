const express = require('express');
const server = express();
const port = 3000;

//http://localhost:3000/login/?name=Douglas
server.get('/login', (request, response) => {
  const name = request.query.name;
  return response.json({ message: `Rota login: Hello World ${name}`});
});

//http://localhost:3000/users/1
server.get('/users/:id', (req, res) => {
  //const id = req.params.id;
  const { id } = req.params;
  return res.json({ message: `Rota: users id: ${id}` });
});

server.listen(port, () => {
  console.log(`Acessar http://localhost:${port}`);
  console.log(`Servidor executando na porta ${port}`);
});
