const conectar = require('./conexion');

const getItems = (req, res) => {
  conectar.execute(
    'SELECT id_item FROM paquetes WHERE id=?',
    [req.params.paquete],
    (err, results) => {
      if (err) {
        res.header('Access-Control-Allow-Origin', '*').json({ err });
        return;
      }
      res
        .header('Access-Control-Allow-Origin', '*')
        .json({ results: results.rows });
    }
  );
};

const getPaquetes = (req, res) => {
  conectar.execute(
    'SELECT paquete FROM fletes WHERE id=?',
    [req.params.flete],
    (err, results) => {
      if (err) {
        res.header('Access-Control-Allow-Origin', '*').json({ err });
        return;
      }
      res
        .header('Access-Control-Allow-Origin', '*')
        .json({ results: results.rows });
    }
  );
};

const getPaquete = (req, res) => {
  conectar.execute(
    'SELECT * FROM paquetes WHERE id=?',
    [req.params.paquete],
    (err, results) => {
      if (err) {
        res.header('Access-Control-Allow-Origin', '*').json({ err });
        return;
      }
      res
        .header('Access-Control-Allow-Origin', '*')
        .json({ results: results.rows });
    }
  );
};

const getCargadores = (req, res) => {
  conectar.execute(`SELECT * FROM cargadores`, (err, results) => {
    if (err) {
      res.header('Access-Control-Allow-Origin', '*').json({ err });
      return;
    }
    res
      .header('Access-Control-Allow-Origin', '*')
      .json({ results: results.rows });
  });
};

const getCargador = (req, res) => {
  conectar.execute(
    `SELECT * FROM cargadores WHERE id=?`,
    [req.params.cargador],
    (err, results) => {
      if (err) {
        res.header('Access-Control-Allow-Origin', '*').json({ err });
        return;
      }
      res
        .header('Access-Control-Allow-Origin', '*')
        .json({ results: results.rows });
    }
  );
};

const getTransportes = (req, res) => {
  conectar.execute(`SELECT * FROM transportes`, (err, results) => {
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
  getPaquetes,
  getPaquete,
  getCargadores,
  getCargador,
  getTransportes,
};
