const conectar = require('./conexion');

const postItem = (req, res) => {
  const query =
    'INSERT INTO items(id, nombre, alto, ancho, foto) VALUES (?,?,?,?,?)';
  const params = [
    req.body.id,
    req.body.nombre,
    req.body.alto,
    req.body.ancho,
    req.body.foto,
  ];
  conectar.execute(query, params, { prepare: true }, (err, results) => {
    if (err) {
      res.header('Access-Control-Allow-Origin', '*').json({ results: false });
      return;
    }
    res.header('Access-Control-Allow-Origin', '*').json({ results: true });
  });
};

const postPaquete = (req, res) => {
  const query =
    'INSERT INTO paquetes(id, id_item, foto, item) VALUES (?,?,?,?)';
  const params = [req.body.id, req.body.id_item, req.body.foto, req.body.item];
  conectar.execute(query, params, { prepare: true }, (err, results) => {
    if (err) {
      res.header('Access-Control-Allow-Origin', '*').json({ results: false });
      return;
    }
    res.header('Access-Control-Allow-Origin', '*').json({ results: true });
  });
};

const postCargador = (req, res) => {
  const query =
    'INSERT INTO cargadores(rfc, nombre, apellido, password, telefono) VALUES (?,?,?,?,?)';
  const params = [
    req.body.rfc,
    req.body.nombre,
    req.body.apellido,
    req.body.password,
    req.body.telefono,
  ];
  conectar.execute(query, params, { prepare: true }, (err, results) => {
    if (err) {
      res.header('Access-Control-Allow-Origin', '*').json({ results: false });
      return;
    }
    res.header('Access-Control-Allow-Origin', '*').json({ results: true });
  });
};
const postTransporte = (req, res) => {
  const query = 'INSERT INTO transportes(matricula, capacidad) VALUES (?,?)';
  const params = [req.body.matricula, req.body.capacidad];
  conectar.execute(query, params, { prepare: true }, (err, results) => {
    if (err) {
      res.header('Access-Control-Allow-Origin', '*').json({ results: false });
      return;
    }
    res.header('Access-Control-Allow-Origin', '*').json({ results: true });
  });
};

module.exports = {
  postItem,
  postPaquete,
  postCargador,
  postTransporte,
};
