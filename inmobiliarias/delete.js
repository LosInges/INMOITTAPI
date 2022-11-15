const conectar = require('../controllers/conexion');

const deleteInmobiliaria = (req, res) => {
  const queries = [
    {
      query: 'DELETE FROM inmobiliarias WHERE correo=?',
      params: [req.body.correo],
    },
    {
      query: 'DELETE FROM cuentas WHERE correo=?',
      params: [req.body.correo],
    },
  ];
  conectar.batch(queries, { prepare: true }, (err, results) => {
    if (err) {
      res
        .header('Access-Control-Allow-Origin', '*')
        .json({ results: false, err });
      return;
    }
    res.header('Access-Control-Allow-Origin', '*').json({ results: true });
  });
};

const deleteInmueble = (req, res) => {
  const queries = [
    {
      query:
        'UPDATE inmuebles SET borrado=true WHERE inmobiliaria=? AND proyecto=? AND titulo=?',
      params: [req.body.inmobiliaria, req.body.proyecto, req.body.titulo],
    },
    {
      query:
        'UPDATE inmuebles_agente SET borrado=true WHERE agente=? AND inmobiliaria=? AND proyecto=? AND titulo=?',
      params: [
        req.body.agente,
        req.body.inmobiliaria,
        req.body.proyecto,
        req.body.titulo,
      ],
    },
    {
      query:
        'UPDATE inmuebles_proyecto SET borrado=true WHERE proyecto=? AND inmobiliaria=? AND titulo=?',
      params: [req.body.proyecto, req.body.inmobiliaria, req.body.titulo],
    },
    {
      query:
        'UPDATE inmuebles_notario SET borrado=true WHERE notario=? AND inmobiliaria=? AND proyecto=? AND titulo=?',
      params: [
        req.body.notario,
        req.body.inmobiliaria,
        req.body.proyecto,
        req.body.titulo,
      ],
    },
  ];
  conectar.batch(queries, { prepare: true }, (err, results) => {
    if (err) {
      res
        .header('Access-Control-Allow-Origin', '*')
        .json({ results: false, err });
      return;
    }
    res.header('Access-Control-Allow-Origin', '*').json({ results: true });
  });
};

const deleteInmuebleCliente = (req, res) => {
  const queries = [
    {
      query:
        'UPDATE inmuebles_cliente_inmobiliaria SET borrado=true WHERE inmobiliaria=? AND proyecto=? AND titulo=? AND cliente=?',
      params: [
        req.body.inmobiliaria,
        req.body.proyecto,
        req.body.titulo,
        req.body.cliente,
      ],
    },
    {
      query:
        'UPDATE inmuebles_cliente SET borrado=true WHERE cliente=? AND inmobiliaria=? AND proyecto=? AND titulo=?',
      params: [
        req.body.cliente,
        req.body.inmobiliaria,
        req.body.proyecto,
        req.body.titulo,
      ],
    },
  ];
  conectar.batch(queries, { prepare: true }, (err, results) => {
    if (err) {
      res
        .header('Access-Control-Allow-Origin', '*')
        .json({ results: false, err });
      return;
    }
    res.header('Access-Control-Allow-Origin', '*').json({ results: true });
  });
};

const deleteNotario = (req, res) => {
  conectar.execute(
    'DELETE FROM notario WHERE inmobiliaria=? AND rfc=?',
    [req.body.inmobiliaria, req.body.rfc],
    { prepare: true },
    (err, results) => {
      if (err) {
        res
          .header('Access-Control-Allow-Origin', '*')
          .json({ results: false, err });
        return;
      }
      res.header('Access-Control-Allow-Origin', '*').json({ results: true });
    }
  );
};

const deleteProyecto = (req, res) => {
  const queries = [
    {
      query: 'DELETE FROM proyectos WHERE inmobiliaria=? AND nombre=?',
      params: [req.body.inmobiliaria, req.body.nombre],
    },
    {
      query:
        'UPDATE inmuebles_proyecto SET borrado=true WHERE proyecto=? AND inmobiliaria=?',
      params: [req.body.nombre, req.body.inmobiliaria],
    },
  ];
  conectar.batch(queries, { prepare: true }, (err, results) => {
    if (err) {
      res
        .header('Access-Control-Allow-Origin', '*')
        .json({ results: false, err });
      return;
    }
    res.header('Access-Control-Allow-Origin', '*').json({ results: true });
  });
};

const deleteAgenteProyecto = (req, res) => {
  const queries = [
    {
      query:
        'DELETE FROM agentes_proyecto WHERE nombre=? AND inmobiliaria=? AND agente=?',
      params: [req.body.nombre, req.body.inmobiliaria, req.body.agente],
    },
    {
      query:
        'DELETE FROM proyectos_agente WHERE agente=? AND inmobiliaria=? AND nombre=?',
      params: [req.body.agente, req.body.inmobiliaria, req.body.nombre],
    },
    {
      query:
        'UPDATE inmuebles_agente SET borrado=true WHERE agente=? AND inmobiliaria=? AND proyecto=?',
      params: [req.body.agente, req.body.inmobiliaria, req.body.nombre],
    },
  ];

  conectar.batch(queries, { prepare: true }, (err, results) => {
    if (err) {
      res
        .header('Access-Control-Allow-Origin', '*')
        .json({ results: false, err });
      return;
    }
    res.header('Access-Control-Allow-Origin', '*').json({ results: true });
  });
};

const deleteNotarioProyecto = (req, res) => {
  const queries = [
    {
      query:
        'DELETE FROM notarios_proyecto WHERE nombre=? AND inmobiliaria=? AND notario=?',
      params: [req.body.nombre, req.body.inmobiliaria, req.body.notario],
    },
    {
      query:
        'DELETE FROM proyectos_notario WHERE notario=? AND inmobiliaria=? AND nombre=?',
      params: [req.body.notario, req.body.inmobiliaria, req.body.nombre],
    },
    {
      query:
        'UPDATE inmuebles_notario SET borrado=true WHERE notario=? AND inmobiliaria=? AND proyecto=?',
      params: [req.body.notario, req.body.inmobiliaria, req.body.nombre],
    },
  ];

  conectar.batch(queries, { prepare: true }, (err, results) => {
    if (err) {
      res
        .header('Access-Control-Allow-Origin', '*')
        .json({ results: false, err });
      return;
    }
    res.header('Access-Control-Allow-Origin', '*').json({ results: true });
  });
};

module.exports = {
  deleteInmobiliaria,
  deleteInmueble,
  deleteInmuebleCliente,
  deleteNotario,
  deleteProyecto,
  deleteAgenteProyecto,
  deleteNotarioProyecto,
};
