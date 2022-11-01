const { reset } = require('nodemon');
const conectar = require('./conexion');

const postInmobiliaria = (req, res) => {
  const queries = [
    {
      query:
        'INSERT INTO inmobiliarias (correo, estados, nombre, direccion, password, notarios, agentes) values (?,?,?,?,?,?,?)',
      params: [
        req.body.correo,
        req.body.estados,
        req.body.nombre,
        req.body.direccion,
        req.body.password,
        req.body.notarios,
        req.body.agentes,
      ],
    },
    {
      query: 'INSERT INTO cuentas (correo, password, tipo) values (?,?,?)',
      params: [req.body.correo, req.body.password, 'inmobiliaria'],
    },
  ];
  conectar.batch(queries, { prepare: true }, (err, results) => {
    if (err) {
      res.header('Access-Control-Allow-Origin', '*').json({ err });
      return;
    }
    res.header('Access-Control-Allow-Origin', '*').json({ results: true });
  });
};

const postInmueble = (req, res) => {
  const query =
    'INSERT INTO inmuebles(titulo, estado, cuartos, descripcion, direccion, foto, metros_cuadrados, notarios, pisos, precio_renta, precio_venta, servicios, agente, borrado, visible) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
  const params = [
    req.body.titulo,
    req.body.estado,
    req.body.cuartos,
    req.body.descripcion, //text area
    req.body.direccion, //objeto vacio
    req.body.empresa, //
    req.body.foto,
    req.body.metros_cuadrados,
    req.body.notarios, //arreglo
    req.body.pisos, //
    req.body.precio_renta,
    req.body.precio_venta,
    req.body.servicios,
    req.body.agente, //
    false,
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

const postServicio = (req, res) => {
  conectar.execute(
    'INSERT INTO servicio(nombre) VALUES(?)',
    [req.body.nombre],
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

module.exports = {
  postInmobiliaria,
  postInmueble,
  postServicio,
};
