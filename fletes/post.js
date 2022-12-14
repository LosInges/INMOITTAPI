const conectar = require('../controllers/conexion');

const postItem = (req, res) => {
  const query =
    'INSERT INTO paquetes(id, id_item, foto, item, total, alto_item, ancho_item, profundidad) VALUES (?,?,?,?,?,?,?,?)';
  const params = [
    req.body.id,
    req.body.id_item,
    req.body.foto,
    req.body.item,
    req.body.total,
    req.body.alto_item,
    req.body.ancho_item,
    req.body.profundidad,
  ];
  conectar.execute(query, params, { prepare: true }, (err, results) => {
    if (err) {
      res
        .header('Access-Control-Allow-Origin', '*')
        .json({ results: false, err });
      return;
    }
    res.header('Access-Control-Allow-Origin', '*').json({ results: true });
  });
};

const postCargador = (req, res) => {
  const queries = [
    {
      query:
        'INSERT INTO cargadores(empresa, rfc, nombre, apellido, password, telefono, foto) VALUES (?,?,?,?,?,?,?)',
      params: [
        req.body.empresa,
        req.body.rfc,
        req.body.nombre,
        req.body.apellido,
        req.body.password,
        req.body.telefono,
        req.body.foto,
      ],
    },
    {
      query:
        'INSERT INTO cuentas(correo, password, tipo, empresa) VALUES (?,?,?,?)',
      params: [req.body.rfc, req.body.password, 'cargador', req.body.empresa],
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

const postTransporte = (req, res) => {
  const query =
    'INSERT INTO transportes(empresa, matricula, capacidad, activo) VALUES (?,?,?,?)';
  const params = [
    req.body.empresa,
    req.body.matricula,
    req.body.capacidad,
    true,
  ];
  conectar.execute(query, params, { prepare: true }, (err, results) => {
    if (err) {
      res
        .header('Access-Control-Allow-Origin', '*')
        .json({ results: false, err });
      return;
    }
    res.header('Access-Control-Allow-Origin', '*').json({ results: true });
  });
};

const postEmpresa = (req, res) => {
  const queries = [
    {
      query:
        'INSERT INTO empresas_fletes(correo, nombre, password, telefono, estados, logo) VALUES (?,?,?,?,?,?)',
      params: [
        req.body.correo,
        req.body.nombre,
        req.body.password,
        req.body.telefono,
        req.body.estados,
        req.body.logo || '',
      ],
    },
    {
      query: 'INSERT INTO cuentas(correo, password, tipo) VALUES (?,?,?)',
      params: [req.body.correo, req.body.password, 'empresa'],
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

const postPrecarga = (req, res) => {
  const queries = [
    {
      query:
        'INSERT INTO precarga(id, cajas_chicas, cajas_grandes, cajas_medianas, muebles, empresa, cliente, destino, fecha, hora, origen, telefono) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)',
      params: [
        req.body.id,
        req.body.cajas_chicas,
        req.body.cajas_grandes,
        req.body.cajas_medianas,
        req.body.muebles,
        req.body.empresa,
        req.body.cliente,
        req.body.destino,
        req.body.fecha,
        req.body.hora,
        req.body.origen,
        req.body.telefono,
      ],
    },
    {
      query:
        'INSERT INTO precarga_cliente(id, cajas_chicas, cajas_grandes, cajas_medianas, muebles, empresa, cliente, destino, fecha, hora, origen, telefono) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)',
      params: [
        req.body.id,
        req.body.cajas_chicas,
        req.body.cajas_grandes,
        req.body.cajas_medianas,
        req.body.muebles,
        req.body.empresa,
        req.body.cliente,
        req.body.destino,
        req.body.fecha,
        req.body.hora,
        req.body.origen,
        req.body.telefono,
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

const postTransporteFlete = (req, res) => {
  
  const query =
    'INSERT INTO transporte_flete(flete, transporte, paquete, cargadores) VALUES (?,?,?,?)';
  const params = [
    req.body.flete,
    req.body.transporte,
    req.body.paquete,
    req.body.cargadores,
  ];
  conectar.execute(query, params, { prepare: true }, (err, results) => {
    if (err) {
      res
        .header('Access-Control-Allow-Origin', '*')
        .json({ results: false, err });
      return;
    }
    res.header('Access-Control-Allow-Origin', '*').json({ results: true });
  });
};

const postFlete = (req, res) => {
  const queries = [
    {
      query:
        'INSERT INTO fletes(activo, id, empresa, cliente, destino, telefono, origen, fecha, hora) VALUES (?,?,?,?,?,?,?,?,?)',
      params: [
        true,
        req.body.id,
        req.body.empresa,
        req.body.cliente,
        req.body.destino,
        req.body.telefono,
        req.body.origen,
        req.body.fecha,
        req.body.hora,
      ],
    },
    {
      query:
        'INSERT INTO fletes_cliente(activo, cliente, empresa, id, destino, fecha, hora, origen, telefono) VALUES (?,?,?,?,?,?,?,?,?)',
      params: [
        true,
        req.body.cliente,
        req.body.empresa,
        req.body.id,
        req.body.destino,
        req.body.fecha,
        req.body.hora,
        req.body.origen,
        req.body.telefono,
      ],
    },
    {
      query:
        'INSERT INTO fletes_empresa(activo, empresa, id, cliente, destino, fecha, hora, origen, telefono) VALUES (?,?,?,?,?,?,?,?,?)',
      params: [
        true,
        req.body.empresa,
        req.body.id,
        req.body.cliente,
        req.body.destino,
        req.body.fecha,
        req.body.hora,
        req.body.origen,
        req.body.telefono,
      ],
    },
    {
      query: 'DELETE FROM precarga WHERE empresa=? AND id=?',
      params: [req.body.empresa, req.body.id],
    },
    {
      query: 'DELETE FROM precarga_cliente WHERE cliente=? AND id=?',
      params: [req.body.cliente, req.body.id],
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
  postItem,
  postCargador,
  postTransporte,
  postEmpresa,
  postPrecarga,
  postTransporteFlete,
  postFlete,
};
