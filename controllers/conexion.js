const mysql = require('mysql2');

// Si estamos dentro de un contenedor, al usar docker compose los nombres de los contenedores se vuelven DNS
contenedor = false;
host = contenedor ? 'bd' : 'localhost';

const conectar = () => {
  return mysql.createConnection({
    host,
    user: 'root',
    password: 'mysql',
    database: 'inmoitt',
  });
};

module.exports = conectar;
