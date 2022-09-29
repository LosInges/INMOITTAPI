const conectar = require('./conexion');

const deleteItem = (req, res) => {
  if (!req.body.id) {
    res
      .header('Access-Control-Allow-Origin', '*')
      .json({ err: 'DATOS INSUFICIENTES' });
    return;
  }
  const query = 'DELETE FROM items WHERE id=?';
  const params = [req.body.id];
  conectar.execute(query, params, { prepare: true }, (err, results) => {
    if (err) {
      res.header('Access-Control-Allow-Origin', '*').json({ err });
      return;
    }
    res.header('Access-Control-Allow-Origin', '*').json({ results: true });
  });
};

module.exports = {
  deleteItem,
};
