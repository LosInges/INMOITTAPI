const cassandra = require('cassandra-driver');
const host = 'localhost'; //Cambiar por 'db' si están desarrollando dentro del contenedor

const conexion = new cassandra.Client({
  contactPoints: [host],
  localDataCenter: 'datacenter1', //No tendría porque cambiar
  keyspace: 'prueba', //nombre de la base de datos a tratar
});

module.exports = conexion;
