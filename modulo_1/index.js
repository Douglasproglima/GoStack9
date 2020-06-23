const express = require('express');
const server = express();
const port = 3000;

server.get('/', (requestBody, response) => {
  return response.json({ message: 'Hello World'});
});

server.listen(port, () => {
  console.log(`Acessar http://localhost:${port}`);
  console.log(`Servidor executando na porta ${port}`);
});
