const conectar = require('../controllers/conexion');

const deleteCliente = (req, res) => {
  const queries = [
    {
      query: 'DELETE FROM clientes WHERE correo = ?',
      params: [req.body.correo],
    },
    {
      query: 'DELETE FROM cuentas WHERE correo = ?',
      params: [req.body.correo],
    },
  ];
  conectar.batch(queries, { prepare: true }, (err, results) => {
    if (err) {
      res.header('Access-Control-Allow-Origin', '*').json({ err });
      return;
    }
    res.header('Access-Control-Allow-Origin', '*').json({ results: true });
  });
};

const deletePrecargaCliente = (req, res) => {
  console.log(req.body);
  const queries = [
    {
      query: 'DELETE FROM precarga_cliente WHERE cliente = ? AND id = ?',
      params: [req.body.cliente, req.body.id],
    },
    {
      query: 'DELETE FROM precarga WHERE empresa = ? AND id = ?',
      params: [req.body.empresa, req.body.id],
    },
  ];
  conectar.batch(queries, { prepare: true }, (err, results) => {
    if (err) {
      res.header('Access-Control-Allow-Origin', '*').json({ err });
      return;
    }
    res.header('Access-Control-Allow-Origin', '*').json({ results: true });
  });
};

module.exports = {
  deleteCliente,
  deletePrecargaCliente
};
