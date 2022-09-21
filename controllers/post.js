const conectar = require('./conexion');

const postPrueba = (req, res) => {
  conectar.execute(`INSERT INTO test(id) VALUES(1)`, (err, results) => {
    if (err) {
      res.header('Access-Control-Allow-Origin', '*').json({ err });
      return;
    }
    res
      .header('Access-Control-Allow-Origin', '*')
      .json({ results: results });
  });
};

module.exports = {
  postPrueba,
};