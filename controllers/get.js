const conectar = require('./conexion');

const getPrueba = (req, res) => {
  conectar.execute(`SELECT * FROM test`, (err, results) => {
    if (err) {
      res.header('Access-Control-Allow-Origin', '*').json({ err });
      return;
    }
    res
      .header('Access-Control-Allow-Origin', '*')
      .json({ results: results.rows });
  });
};

module.exports = {
  getPrueba,
};
