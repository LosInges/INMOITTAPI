const cassandra = require('cassandra-driver');
const host = 'db'; //Cambiar por 'localhost' si están desarrollando fuera del contenedor

const conexion = new cassandra.Client({
  contactPoints: [host],
  localDataCenter: 'datacenter1', //No tendría porque cambiar
  keyspace: 'prueba', //nombre de la base de datos a tratar
});

module.exports = conexion;
