const app = require('./app');
require('./database/index');
require('dotenv').config();

const server = require('http').createServer(app);

server.listen(process.env.PORT_SERVER, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT_SERVER}`);
});
