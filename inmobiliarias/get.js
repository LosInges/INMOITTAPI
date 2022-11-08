const conectar = require("../controllers/conexion");

const getInmobiliaria = (req, res) => {
  conectar.execute(
    `SELECT * FROM inmobiliarias WHERE correo=?`,
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

const getInmobiliarias = (req, res) => {
  conectar.execute(
    `SELECT * FROM inmobiliarias`,
    (err, results) => {
      if (err) {
        res.header('Access-Control-Allow-Origin', '*').json({ err });
        return;
      }
      res.header('Access-Control-Allow-Origin', '*').send(results.rows);
    }
  );
};

const getServicios = (req, res) => {
  conectar.execute(
    'SELECT * FROM servicio',
    (err, results) => {
      if (err) {
        res.header('Access-Control-Allow-Origin', '*').json({ err });
        return;
      }
      res.header('Access-Control-Allow-Origin', '*').send(results.rows);
    }
  );
};

module.exports = {
  getInmobiliaria,
  getInmobiliarias,
  getServicios,
};
