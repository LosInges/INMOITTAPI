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
      res.header('Access-Control-Allow-Origin', '*').send(results.rows);
    }
  );
};

const getPaquetes = (req, res) => {
  conectar.execute(
    'SELECT * FROM transporte_flete WHERE flete=?',
    [req.params.flete],
    { prepare: true },
    (err, results) => {
      if (err) {
        res.header('Access-Control-Allow-Origin', '*').json({ err });
        return;
      }
      res.header('Access-Control-Allow-Origin', '*').send(results.rows);
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
      res.header('Access-Control-Allow-Origin', '*').send(results.rows);
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
      res.header('Access-Control-Allow-Origin', '*').send(results.rows);
    }
  );
};

const getCargador = (req, res) => {
  conectar.execute(
    `SELECT * FROM cargadores WHERE empresa=? AND rfc=?`,
    [req.params.empresa, req.params.rfc],
    { prepare: true },
    (err, results) => {
      if (err) {
        res.header('Access-Control-Allow-Origin', '*').json({ err });
        return;
      }
      res.header('Access-Control-Allow-Origin', '*').send(results.rows[0]);
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
      res.header('Access-Control-Allow-Origin', '*').send(results.rows);
    }
  );
};

const getTransporte = (req, res) => {
  conectar.execute(
    'SELECT * FROM transportes WHERE empresa=? AND matricula=?',
    [req.params.empresa, req.params.matricula],
    { prepare: true },
    (err, results) => {
      if (err) {
        res.header('Access-Control-Allow-Origin', '*').json({ err });
        return;
      }
      res.header('Access-Control-Allow-Origin', '*').send(results.rows[0]);
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
      res.header('Access-Control-Allow-Origin', '*').send(results.rows);
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
      res.header('Access-Control-Allow-Origin', '*').send(results.rows);
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
      res.header('Access-Control-Allow-Origin', '*').send(results.rows[0]);
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
      res.header('Access-Control-Allow-Origin', '*').send(results.rows);
    }
  );
};

const getPrecarga = (req, res) => {
  conectar.execute(
    'SELECT * FROM precarga WHERE empresa=? AND id=?',
    [req.params.empresa, req.params.id],
    { prepare: true },
    (err, results) => {
      if (err) {
        res.header('Access-Control-Allow-Origin', '*').json({ err });
        return;
      }
      res.header('Access-Control-Allow-Origin', '*').send(results.rows[0]);
    }
  );
};

const getEmpresas = (req, res) => {
  conectar.execute('SELECT * FROM empresas_fletes', (err, results) => {
    if (err) {
      res.header('Access-Control-Allow-Origin', '*').json({ err });
      return;
    }
    res.header('Access-Control-Allow-Origin', '*').send(results.rows);
  });
};

const getEmpresa = (req, res) => {
  conectar.execute(
    'SELECT * FROM empresas_fletes WHERE correo=?',
    [req.params.correo],
    { prepare: true },
    (err, results) => {
      if (err) {
        res.header('Access-Control-Allow-Origin', '*').json({ err });
        return;
      }
      res.header('Access-Control-Allow-Origin', '*').send(results.rows[0]);
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
  getPrecarga,
  getEmpresas,
  getEmpresa,
};
