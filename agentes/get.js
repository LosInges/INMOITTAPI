const conectar = require("../controllers/conexion");

const getAgente = (req, res) => {
  conectar.execute(
    `SELECT * FROM agente_inmobiliaria WHERE rfc=?`,
    [req.params.rfc],
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

module.exports = {getAgente}