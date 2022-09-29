const conectar = require('./conexion');

const getItems = (req, res) => {
  conectar.execute(`SELECT * FROM items`, (err, results) => {
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
  getItems,
};
