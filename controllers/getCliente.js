const conectar = require("./conexion");

const getCliente = (req, res) => {
  conectar.execute(
    "SELECT * FROM clientes where correo=?",
    [req.params.correo],
    { prepare: true },
    (err, results) => {
      if (err) {
        res.header("Access-Control-Allow-Origin", "*").json({ err });
        return;
      }
      res.header("Access-Control-Allow-Origin", "*").send(results.rows[0]);
    }
  );
};

module.exports={getCliente};
