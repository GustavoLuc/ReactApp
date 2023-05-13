const { Client } = require('pg');

// Configurações de conexão com o banco de dados
const client = new Client({
  host: 'kesavan.db.elephantsql.com',
  port: 5432,
  user: 'wtplkmpo',
  password: '8KmQjeYVOWVrU9iQ0mka5-iLC2p-7MKR ',
  database: 'wtplkmpo'
});

// Estabelece a conexão
var resposta =  client.connect((error) => {
  if (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
    return;
  }
  console.log('Conexão estabelecida com sucesso!');

  // Agora você pode executar consultas ou outras operações no banco de dados aqui

  // Encerra a conexão quando não for mais necessária
  client.end();
});
export default resposta;
