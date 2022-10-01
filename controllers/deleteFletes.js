const conectar = require('./conexion');

const deleteItem = (req, res) => {
  const query = 'DELETE FROM paquetes WHERE id=? AND id_item=?';
  const params = [req.body.id, req.body.id_item];
  conectar.execute(query, params, { prepare: true }, (err, results) => {
    if (err) {
      res
        .header('Access-Control-Allow-Origin', '*')
        .json({ results: false, err });
      return;
    }
    res.header('Access-Control-Allow-Origin', '*').json({ results: true });
  });
};

const deletePaquete = (req, res) => {
  const queries = [
    {
      query: 'DELETE FROM paquetes WHERE id=?',
      params: [req.body.id],
    },
    {
      query:
        'DELETE FROM transporte_flete WHERE flete=? AND transporte=? AND paquete=?',
      params: [req.body.flete, req.body.transporte, req.body.paquete],
    },
  ];
  conectar.batch(queries, { prepare: true }, (err, results) => {
    if (err) {
      res
        .header('Access-Control-Allow-Origin', '*')
        .json({ results: false, err });
      return;
    }
    res.header('Access-Control-Allow-Origin', '*').json({ results: true });
  });
};

const deleteCargador = (req, res) => {
  const query = 'DELETE FROM cargadores WHERE empresa=? AND rfc=?';
  const params = [req.body.empresa, req.body.rfc];
  conectar.execute(query, params, { prepare: true }, (err, results) => {
    if (err) {
      res.header('Access-Control-Allow-Origin', '*').json({ results: false });
      return;
    }
    res.header('Access-Control-Allow-Origin', '*').json({ results: true });
  });
};

const deleteTransporte = (req, res) => {
  const query =
    'INSERT INTO transporte(empresa, matricula, capacidad, activo) VALUES(?,?,?,?)';
  const params = [
    req.body.empresa,
    req.body.matricula,
    req.body.capacidad,
    false,
  ];
  conectar.execute(query, params, { prepare: true }, (err, results) => {
    if (err) {
      res
        .header('Access-Control-Allow-Origin', '*')
        .json({ results: false, err });
      return;
    }
    res.header('Access-Control-Allow-Origin', '*').json({ results: true });
  });
};

const deletePrecarga = (req, res) => {
  const query = 'DELETE FROM precarga WHERE empresa=? AND id=?';
  const params = [req.body.empresa, req.body.id];
  conectar.execute(query, params, { prepare: true }, (err, results) => {
    if (err) {
      res
        .header('Access-Control-Allow-Origin', '*')
        .json({ results: false, err });
      return;
    }
    res.header('Access-Control-Allow-Origin', '*').json({ results: true });
  });
};

const deleteFlete = (req, res) => {
  const queries = [
    {
      query: 'UPDATE fletes SET activo=? WHERE activo=? AND id=?',
      params: [false, true, req.body.id],
    },
    {
      query: 'UPDATE fletes_cliente SET activo=? WHERE activo=? AND cliente=? AND empresa=? AND id=?',
      params: [false, true, req.body.cliente, req.body.empresa, req.body.id],
    },
    {
      query: 'UPDATE fletes_empresa SET activo=? WHERE activo=? AND empresa=? AND id=?',
      params: [false, true, req.body.empresa, req.body.id],
    },
  ];
  conectar.batch(queries, { prepare: true }, (err, results) => {
    if (err) {
      res
        .header('Access-Control-Allow-Origin', '*')
        .json({ results: false, err });
      return;
    }
    res.header('Access-Control-Allow-Origin', '*').json({ results: true });
  });
};

module.exports = {
  deleteItem,
  deletePaquete,
  deleteCargador,
  deleteTransporte,
  deletePrecarga,
  deleteFlete,
};
