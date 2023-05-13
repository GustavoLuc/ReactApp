const { Client } = require('pg');

// Configurações de conexão com o PostgreSQL
const connectionString = '	postgres://wtplkmpo:8KmQjeYVOWVrU9iQ0mka5-iLC2p-7MKR@kesavan.db.elephantsql.com/wtplkmpo';
const client = new Client({
  connectionString: connectionString
});

// Função para conectar ao PostgreSQL
async function conectar() {
  try {
    await client.connect();
    console.log('Conectado ao PostgreSQL');
  } catch (error) {
    console.error('Erro ao conectar ao PostgreSQL', error);
  }
}

// Função para executar uma consulta no PostgreSQL
async function executarConsulta() {
  try {
    const resultado = await client.query('SELECT * FROM CARROS');
    console.log('Resultado da consulta:', resultado.rows);
  } catch (error) {
    console.error('Erro ao executar consulta', error);
  } finally {
    // Finalize a conexão após a consulta
    await client.end();
    console.log('Conexão fechada');
  }
}

// Chamada das funções
conectar()
  .then(() => executarConsulta())
  .catch((error) => console.error('Erro:', error));

