const conectar = require('./conexion');

const deletePrueba = (req, res) => {
  conectar.execute(`DELETE FROM test WHERE id = 1`, (err, results) => {
    if (err) {
      res.header('Access-Control-Allow-Origin', '*').json({ err });
      return;
    }
    res.header('Access-Control-Allow-Origin', '*').json({ results: true });
  });
};

module.exports = {
  deletePrueba,
};
