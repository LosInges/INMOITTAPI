const conectar = require('./conexion');

const postItem = (req, res) => {
  if (
    !req.body.id ||
    !req.body.nombre ||
    !req.body.alto ||
    !req.body.ancho ||
    !req.body.foto
  ) {
    res
      .header('Access-Control-Allow-Origin', '*')
      .json({ err: 'DATOS INSUFICIENTES' });
      return
  }

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
      res.header('Access-Control-Allow-Origin', '*').json({ err });
      return;
    }
    res.header('Access-Control-Allow-Origin', '*').json({ results: results });
  });
};

module.exports = {
  postItem,
};
