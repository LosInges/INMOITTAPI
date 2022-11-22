const conexion = require('./conexion');

const login = (req, res) => {
  console.log(req.body);
  conexion.execute(
    'SELECT * FROM cuentas WHERE correo=?',
    [req.body.email],
    { prepare: true },
    (err, results) => {
      if (err) {
        res
          .header('Access-Control-Allow-Origin', '*')
          .json({ err, session: req.session });
        return;
      }
      if (results.rows.length > 0) {
        if (results.rows[0].password === req.body.password) {
          req.session.email = req.body.email;
          req.session.tipo = results.rows[0].tipo;
          req.session.empresa = results.rows[0].empresa;
          res
            .header('Access-Control-Allow-Origin', '*')
            .json({ session: req.session, credenciales: true });
          return;
        }
        res
          .header('Access-Control-Allow-Origin', '*')
          .json({ session: req.session, credenciales: false });
      } else {
        res
          .header('Access-Control-Allow-Origin', '*')
          .json({ session: req.session, credenciales: false });
        return;
      }
    }
  );
};

const solicitarRegistro = (req, res) => {
  conexion.execute(
    'SELECT * FROM cuentas WHERE correo=?',
    [req.params.correo],
    { prepare: true },
    (err, results) => {
      if (err) {
        res
          .header('Access-Control-Allow-Origin', '*')
          .json({ err, permiso: false });
        return;
      }
      res
        .header('Access-Control-Allow-Origin', '*')
        .json({ permiso: results.rowLength == 0 });
    }
  );
};

const solicitarRegistroNotario = (req, res) => {
  conexion.execute(
    'SELECT * FROM notario WHERE inmobiliaria=? AND rfc=?',
    [req.params.inmobiliaria, req.params.rfc],
    { prepare: true },
    (err, results) => {
      if (err) {
        res
          .header('Access-Control-Allow-Origin', '*')
          .json({ err, permiso: false });
        return;
      }
      res
        .header('Access-Control-Allow-Origin', '*')
        .json({ permiso: results.rowLength == 0 });
    }
  );
};

module.exports = {
  login,
  solicitarRegistro,
  solicitarRegistroNotario
};
