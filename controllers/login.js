const conexion = require("./conexion");

const login = (req, res) => {
  if (!req.session.email) {
    conexion.execute(
      "SELECT * FROM cuentas WHERE correo=?",
      [req.body.email],
      { prepare: true },
      (err, results) => {
        if (err) {
          res
            .header("Access-Control-Allow-Origin", "*")
            .json({ err, session: req.session });
          return;
        } else if (results.rows.length > 0) {
          if (results.rows[0].password === req.body.password) {
            req.session.email = req.body.email;
            req.session.tipo = results.rows[0].tipo;    
            req.session.empresa = results.rows[0].empresa;
            res
              .header("Access-Control-Allow-Origin", "*")
              .json({ session: req.session });
            return;
          }
        } else {
          res
            .header("Access-Control-Allow-Origin", "*")
            .json({ session: req.session });
          return;
        }
      }
    );
  }
};

const logout = (req, res) => {
  req.session.destroy();
  res.header("Access-Control-Allow-Origin", "*").json({ session: req.session });
};

module.exports = {
  login,
  logout,
};
