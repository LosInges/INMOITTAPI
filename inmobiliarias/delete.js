const conectar = require('../controllers/conexion');

const deleteInmobiliaria = (req, res) => {
  const queries = [
    {
      query: 'DELETE FROM inmobiliarias WHERE correo=?',
      params: [req.body.correo],
    },
    {
      query: 'DELETE FROM cuentas WHERE correo=?',
      params: [req.body.correo],
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

const deleteInmueble = (req, res) => {
  const queries = [
    {
      query: 'DELETE FROM inmueble WHERE correo=?',
      params: [req.body.correo],
    },
    {
      query: 'DELETE FROM cuentas WHERE correo=?',
      params: [req.body.correo],
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

const deleteNotario = (req, res) => {
  conectar.execute(
    'DELETE FROM notario WHERE inmobiliaria=? AND rfc=?',
    [req.body.inmobiliaria, req.body.rfc],
    { prepare: true },
    (err, results) => {
      if (err) {
        res
          .header('Access-Control-Allow-Origin', '*')
          .json({ results: false, err });
        return;
      }
      res.header('Access-Control-Allow-Origin', '*').json({ results: true });
    }
  );
};

module.exports = {
  deleteInmobiliaria,
  deleteInmueble,
  deleteNotario
};
