const conectar = require("../controllers/conexion");

const deleteAgente = (req, res) => {
    const queries = [
        {
          query: "DELETE FROM agente_inmobiliaria WHERE rfc=?",
          params: [req.body.rfc],
        },
        {
          query: "DELETE FROM cuentas WHERE correo=?",
          params: [req.body.rfc],
        },
      ];
      conectar.batch(queries, { prepare: true }, (err, results) => {
        if (err) {
          res
            .header("Access-Control-Allow-Origin", "*")
            .json({ results: false, err });
          return;
        }
        res.header("Access-Control-Allow-Origin", "*").json({ results: true });
      });
      
  };

  module.exports = { deleteAgente }