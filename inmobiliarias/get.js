const conectar = require('../controllers/conexion');

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
  conectar.execute(`SELECT * FROM inmobiliarias`, (err, results) => {
    if (err) {
      res.header('Access-Control-Allow-Origin', '*').json({ err });
      return;
    }
    res.header('Access-Control-Allow-Origin', '*').send(results.rows);
  });
};

const getServicios = (req, res) => {
  conectar.execute('SELECT * FROM servicio', (err, results) => {
    if (err) {
      res.header('Access-Control-Allow-Origin', '*').json({ err });
      return;
    }
    res.header('Access-Control-Allow-Origin', '*').send(results.rows);
  });
};

const getNotarios = (req, res) => {
  conectar.execute(
    'SELECT * FROM notario WHERE inmobiliaria=?',
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

const getNotario = (req, res) => {
  conectar.execute(
    'SELECT * FROM notario WHERE inmobiliaria=? AND rfc=?',
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
const getInmueblesProyecto = (req, res) => {
  conectar.execute(
    'SELECT * FROM inmuebles_proyecto WHERE proyecto=? AND inmobiliaria=?',
    [req.params.proyecto, req.params.inmobiliaria],
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

const getInmueble = (req, res) => {
  conectar.execute(
    'SELECT * FROM inmuebles WHERE inmobiliaria = ? AND PROYECTO =? AND titulo=?',
    [req.params.inmobiliaria, req.params.proyecto, req.params.titulo],
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

const getProyectosAgente = (req, res) => {
  conectar.execute(
    'SELECT * FROM proyectos_agente WHERE agente=?',
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

const getAgentesProyecto = (req, res) => {
  conectar.execute(
    'SELECT * FROM agentes_proyecto WHERE nombre=? AND inmobiliaria=?',
    [req.params.proyecto, req.params.inmobiliaria],
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

const getProyectosInmobiliaria = (req, res) => {
  conectar.execute(
    'SELECT * FROM proyectos WHERE inmobiliaria=?',
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

const getProyectoInmobiliaria = (req, res) => {
  conectar.execute(
    'SELECT * FROM proyectos WHERE inmobiliaria=? AND nombre=?',
    [req.params.inmobiliaria, req.params.nombre],
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

const getProyectosNotario = (req, res) => {
  conectar.execute(
    'SELECT * FROM proyectos_notario WHERE notario=?',
    [req.params.notario],
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

const getNotariosProyecto = (req, res) => {
  conectar.execute(
    'SELECT * FROM notarios_proyecto WHERE nombre=? AND inmobiliaria=?',
    [req.params.proyecto, req.params.inmobiliaria],
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

const getInmueblesProyectoNotario = (req, res) => {
  conectar.execute(
    'SELECT * FROM inmuebles_notario WHERE notario=? AND inmobiliaria=? AND proyecto=?',
    [req.params.notario, req.params.inmobiliaria, req.params.proyecto],
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
    'SELECT * FROM inmuebles_agente WHERE agente=? AND inmobiliaria=? AND proyecto=?',
    [req.params.agente, req.params.inmobiliaria, req.params.proyecto],
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

const getClientesInmueble = (req, res) => {
  conectar.execute(
    'SELECT cliente FROM inmuebles_cliente_inmobiliaria WHERE inmobiliaria=? AND proyecto=? AND titulo=?',
    [req.params.inmobiliaria, req.params.proyecto, req.params.titulo],
    { prepare: true },
    (err, results) => {
      if (err) {
        res.header('Access-Control-Allow-Origin', '*').json({ err });
        return;
      }
      res.header('Access-Control-Allow-Origin', '*').send(results.rows); //
    }
  );
};

const getInmueblesNotario = (req, res) => {
  conectar.execute(
    'SELECT * FROM inmuebles_notario WHERE notario=?',
    [req.params.notario],
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

const getInmueblesCliente = (req, res) => {
  conectar.execute(
    'SELECT * FROM inmuebles_cliente WHERE cliente=?',
    [req.params.cliente],
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

const getImagenesInmueble = (req, res) => {
  conectar.execute(
    'SELECT * FROM imagenes_inmueble WHERE inmobiliaria=? AND proyecto=? AND titulo=?',
    [req.params.inmobiliaria, req.params.proyecto, req.params.titulo],
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

module.exports = {
  getInmobiliaria,
  getInmobiliarias,
  getServicios,
  getNotarios,
  getNotario,
  getInmueblesProyectoNotario,
  getInmueblesProyecto,
  getInmueble,
  getProyectosNotario,
  getNotariosProyecto,
  getProyectosAgente,
  getAgentesProyecto,
  getProyectosInmobiliaria,
  getProyectoInmobiliaria,
  getInmueblesAgente,
  getClientesInmueble,
  getInmueblesNotario,
  getInmueblesCliente,
  getImagenesInmueble
};
