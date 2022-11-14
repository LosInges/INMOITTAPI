const conectar = require('../controllers/conexion');

const getAgente = (req, res) => {
  conectar.execute(
    `SELECT * FROM agente_inmobiliaria WHERE inmobiliaria=? AND rfc=?`,
    [req.params.inmobiliaria, req.params.rfc],
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

const getAgentes = (req, res) => {
  conectar.execute(
    `SELECT * FROM agente_inmobiliaria WHERE inmobiliaria=?`,
    [req.params.inmobiliaria],
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

const getInmueblesAgente = (req, res) => {
  conectar.execute(
    'SELECT * FROM inmuebles_agente WHERE agente=?',
    [req.params.agente],
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
module.exports = { getAgente, getAgentes, getInmueblesAgente };
