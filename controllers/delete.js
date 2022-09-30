const conectar = require('./conexion');

const deleteItem = (req, res) => {
  const query = 'DELETE FROM items WHERE id=?';
  const params = [req.body.id];
  conectar.execute(query, params, { prepare: true }, (err, results) => {
    if (err) {
      res.header('Access-Control-Allow-Origin', '*').json({ results: false });
      return;
    }
    res.header('Access-Control-Allow-Origin', '*').json({ results: true });
  });
};

const deleteItemPaquete = (req, res) => {
  const query = 'DELETE FROM paquetes WHERE id=? AND id_item=?';
  const params = [req.body.id, req.body.id_item];
  conectar.execute(query, params, { prepare: true }, (err, results) => {
    if (err) {
      res.header('Access-Control-Allow-Origin', '*').json({ results: false });
      return;
    }
    res.header('Access-Control-Allow-Origin', '*').json({ results: true });
  });
};

const deletePaquete = (req, res) => {
  const query = 'DELETE FROM paquetes WHERE id=?';
  const params = [req.body.id];
  conectar.execute(query, params, { prepare: true }, (err, results) => {
    if (err) {
      res.header('Access-Control-Allow-Origin', '*').json({ results: false });
      return;
    }
    res.header('Access-Control-Allow-Origin', '*').json({ results: true });
  });
};

const deleteCargador = (req, res) => {
  const query = 'DELETE FROM cargadores WHERE rfc=?';
  const params = [req.body.rfc];
  conectar.execute(query, params, { prepare: true }, (err, results) => {
    if (err) {
      res.header('Access-Control-Allow-Origin', '*').json({ results: false });
      return;
    }
    res.header('Access-Control-Allow-Origin', '*').json({ results: true });
  });
};

const deleteTransporte = (req, res) => {
  const query = 'DELETE FROM transportes WHERE matricula=?';
  const params = [req.body.matricula];
  conectar.execute(query, params, { prepare: true }, (err, results) => {
    if (err) {
      res.header('Access-Control-Allow-Origin', '*').json({ results: false });
      return;
    }
    res.header('Access-Control-Allow-Origin', '*').json({ results: true });
  });
};

module.exports = {
  deleteItem,
  deleteItemPaquete,
  deletePaquete,
  deleteCargador,
  deleteTransporte,
};
