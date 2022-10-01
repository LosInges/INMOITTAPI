const conectar = require('./conexion');

const getItems = (req, res) => {
  conectar.execute(
    'SELECT * FROM paquetes WHERE id=?',
    [req.params.paquete],
    { prepare: true },
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
    'SELECT paquete FROM fletes WHERE activo=? AND id=?',
    [true, req.params.flete],
    { prepare: true },
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
  conectar.execute(
    `SELECT * FROM cargadores WHERE empresa=?`,
    [req.params.empresa],
    { prepare: true },
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

const getCargadoresFlete = (req, res) => {
  conectar.execute(
    'SELECT transporte, cargadores FROM transporte_flete WHERE flete=?',
    [req.params.flete],
    { prepare: true },
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

const getCargador = (req, res) => {
  conectar.execute(
    `SELECT * FROM cargadores WHERE empresa=? AND rfc=?`,
    [req.params.empresa, req.params.cargador],
    { prepare: true },
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
  conectar.execute(
    `SELECT * FROM transportes WHERE empresa=?`,
    [req.params.empresa],
    { prepare: true },
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

const getTransporte = (req, res) => {
  conectar.execute(
    'SELECT * FROM transporte WHERE empresa=? AND matricula=?',
    [req.params.empresa, req.params.matricula],
    { prepare: true },
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

const getFletesEmpresa = (req, res) => {
  conectar.execute(
    'SELECT * FROM fletes_empresa WHERE activo=? AND empresa=?',
    [true, req.params.empresa],
    { prepare: true },
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

const getFletesCliente = (req, res) => {
  conectar.execute(
    'SELECT * FROM fletes_cliente WHERE activo=? AND cliente=?',
    [true, req.params.cliente],
    { prepare: true },
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

const getFlete = (req, res) => {
  conectar.execute(
    'SELECT * FROM fletes WHERE activo=? AND id=?',
    [true, req.params.flete],
    { prepare: true },
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

const getPrecargas = (req, res) => {
  conectar.execute(
    'SELECT * FROM precarga WHERE empresa=?',
    [req.params.empresa],
    { prepare: true },
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

module.exports = {
  getItems,
  getPaquetes,
  getCargadores,
  getCargador,
  getCargadoresFlete,
  getTransportes,
  getTransporte,
  getFlete,
  getFletesEmpresa,
  getFletesCliente,
  getPrecargas,
};
