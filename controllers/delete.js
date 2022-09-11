const conectar = require('./conexion');
const fetch = require('node-fetch');

const deleteCliente = (req, res) => {
  const conn = conectar();
  conn.execute(
    'DELETE FROM cliente WHERE correo = ?',
    [req.body.correo],
    (err, results, fields) => {
      if (err) {
        res.json({ err });
        return;
      }
      res.json({ results }).header('Access-Control-Allow-Origin', '*');
    }
  );
  conn.end();
};

const deleteAdministrador = (req, res) => {
  const conn = conectar();
  conn.execute(
    'DELETE FROM administrador WHERE correo = ?',
    [req.body.correo],
    (err, results, fields) => {
      if (err) {
        res.json({ err });
        return;
      }
      res.json({ results }).header('Access-Control-Allow-Origin', '*');
    }
  );
  conn.end();
};

const deleteGerente = (req, res) => {
  const conn = conectar();
  conn.execute(
    'DELETE FROM gerente_proyectos WHERE correo = ?',
    [req.body.correo],
    (err, results, fields) => {
      if (err) {
        res.json({ err });
        return;
      }
      res.json({ results }).header('Access-Control-Allow-Origin', '*');
    }
  );
  conn.end();
};

const deleteValuador = (req, res) => {
  const conn = conectar();
  conn.execute(
    'DELETE FROM valuador WHERE correo = ?',
    [req.body.correo],
    (err, results, fields) => {
      if (err) {
        res.json({ err });
        return;
      }
      res.json({ results }).header('Access-Control-Allow-Origin', '*');
    }
  );
  conn.end();
};

const deleteAgente = (req, res) => {
  const conn = conectar();
  conn.execute(
    'DELETE FROM agente_ventas WHERE correo = ?',
    [req.body.correo],
    (err, results, fields) => {
      if (err) {
        res.json({ err });
        return;
      }
      res.json({ results }).header('Access-Control-Allow-Origin', '*');
    }
  );
  conn.end();
};

const deleteAdeudo = (req, res) => {
  const conn = conectar();
  conn.execute(
    'DELETE FROM adeudo WHERE idadeudo = ?',
    [req.body.idAdeudo],
    (err, results, fields) => {
      if (err) res.json({ err });
      res.send(results);
    }
  );
  conn.end();
};

const deleteAdeudoInmueble = (req, res) => {
  const conn = conectar();
  conn.execute(
    'DELETE FROM adeudos_inmueble WHERE idadeudo = ? AND idinmueble = ?',
    [req.body.idAdeudo, req.body.idInmueble],
    (err, results, fields) => {
      if (err) {
        res.json({ err });
        return;
      }
      res.json({ results }).header('Access-Control-Allow-Origin', '*');
    }
  );
  conn.end();
};

const deleteServicio = (req, res) => {
  const conn = conectar();
  conn.execute(
    'DELETE FROM servicio WHERE idServicio = ?',
    [req.body.idServicio],
    (err, results, fields) => {
      if (err) {
        res.json({ err });
        return;
      }
      res.json({ results }).header('Access-Control-Allow-Origin', '*');
    }
  );
  conn.end();
};

const deleteServicioInmueble = (req, res) => {
  const conn = conectar();
  conn.execute(
    'DELETE FROM servicio_inmueble WHERE idServicio = ? AND idinmueble = ?',
    [req.body.idServicio, req.body.idInmueble],
    (err, results, fields) => {
      if (err) {
        res.json({ err });
        return;
      }
      res.json({ results }).header('Access-Control-Allow-Origin', '*');
    }
  );
  conn.end();
};

const deleteInmueble = (req, res) => {
  const conn = conectar();
  conn.execute(
    'DELETE FROM inmueble WHERE idinmueble = ?',
    [req.body.idInmueble],
    (err, results, fields) => {
      if (err) {
        res.json({ err });
        return;
      }
      res.json({ results }).header('Access-Control-Allow-Origin', '*');
    }
  );
};

const deleteInmuebleValuador = (req, res) => {
  const conn = conectar();
  conn.execute(
    'DELETE FROM inmueble_valuador WHERE idinmueble = ? AND idvaluador = ?',
    [req.body.idInmueble, req.body.idValuador],
    (err, results, fields) => {
      if (err) {
        res.json({ err });
        return;
      }
      res.json({ results }).header('Access-Control-Allow-Origin', '*');
    }
  );
};

const deleteInmuebleAgente = (req, res) => {
  const conn = conectar();
  conn.execute(
    'DELETE FROM inmueble_agente WHERE idinmueble = ? AND idagente_ventas = ?',
    [req.body.idInmueble, req.body.idAgente],
    (err, results, fields) => {
      if (err) {
        res.json({ err });
        return;
      }
      res.json({ results }).header('Access-Control-Allow-Origin', '*');
    }
  );
};

const deleteInmuebleGerente = (req, res) => {
  const conn = conectar();
  conn.execute(
    'DELETE FROM proyectos_gerente WHERE idinmueble = ? AND idgerente_proyectos = ?',
    [req.body.idInmueble, req.body.idGerente],
    (err, results, fields) => {
      if (err) {
        res.json({ err });
        return;
      }
      res.json({ results }).header('Access-Control-Allow-Origin', '*');
    }
  );
};

module.exports = {
  deleteCliente,
  deleteAdministrador,
  deleteGerente,
  deleteValuador,
  deleteAgente,
  deleteAdeudo,
  deleteAdeudoInmueble,
  deleteServicio,
  deleteServicioInmueble,
  deleteInmueble,
  deleteInmuebleValuador,
  deleteInmuebleAgente,
  deleteInmuebleGerente,
};
