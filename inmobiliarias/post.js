const conectar = require('../controllers/conexion');

const postInmobiliaria = (req, res) => {
  const queries = [
    {
      query:
        'INSERT INTO inmobiliarias (correo, estado, nombre, direccion, password, sedes, foto) values (?,?,?,?,?,?,?)',
      params: [
        req.body.correo,
        req.body.estado,
        req.body.nombre,
        req.body.direccion,
        req.body.password,
        req.body.sedes,
        req.body.foto,
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
  const queries = [
    
    { 
      query: 'INSERT INTO INMUEBLES(inmobiliaria,proyecto,titulo, estado, foto, direccion, precio_renta, precio_venta, cuartos, pisos, metros_cuadrados, descripcion,servicios, notario, agente, visible,borrado) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ',
      params: [
        req.body.inmobiliaria,
        req.body.proyecto,
        req.body.titulo,
        req.body.estado,
        req.body.foto,
        req.body.direccion,
        req.body.precio_renta,
        req.body.precio_venta,
        req.body.cuartos,
        req.body.pisos,
        req.body.metros_cuadrados,
        req.body.descripcion,
        req.body.servicios,
        req.body.notario,
        req.body.agente,
        req.body.visible,
        req.body.borrado
      ]
    },
    {
      query: 'INSERT INTO INMUEBLES_AGENTE(inmobiliaria,proyecto,titulo, estado, foto, direccion, precio_renta, precio_venta, cuartos, pisos, metros_cuadrados, descripcion,servicios, notario, agente, visible,borrado) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ',
      params: [
        req.body.inmobiliaria,
        req.body.proyecto,
        req.body.titulo,
        req.body.estado,
        req.body.foto,
        req.body.direccion,
        req.body.precio_renta,
        req.body.precio_venta,
        req.body.cuartos,
        req.body.pisos,
        req.body.metros_cuadrados,
        req.body.descripcion,
        req.body.servicios,
        req.body.notario,
        req.body.agente,
        req.body.visible,
        req.body.borrado
      ]
    },
    {
      query: 'INSERT INTO INMUEBLES_PROYECTO(inmobiliaria,proyecto,titulo, estado, foto, direccion, precio_renta, precio_venta, cuartos, pisos, metros_cuadrados, descripcion,servicios, notario, agente, visible,borrado) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ',
      params: [
        req.body.inmobiliaria,
        req.body.proyecto,
        req.body.titulo,
        req.body.estado,
        req.body.foto,
        req.body.direccion,
        req.body.precio_renta,
        req.body.precio_venta,
        req.body.cuartos,
        req.body.pisos,
        req.body.metros_cuadrados,
        req.body.descripcion,
        req.body.servicios,
        req.body.notario,
        req.body.agente,
        req.body.visible,
        req.body.borrado
      ]
    },
    {
      query: 'INSERT INTO INMUEBLES_NOTARIO(inmobiliaria,proyecto,titulo, estado, foto, direccion, precio_renta, precio_venta, cuartos, pisos, metros_cuadrados, descripcion,servicios, notario, agente, visible,borrado) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ',
      params: [
        req.body.inmobiliaria,
        req.body.proyecto,
        req.body.titulo,
        req.body.estado,
        req.body.foto,
        req.body.direccion,
        req.body.precio_renta,
        req.body.precio_venta,
        req.body.cuartos,
        req.body.pisos,
        req.body.metros_cuadrados,
        req.body.descripcion,
        req.body.servicios,
        req.body.notario,
        req.body.agente,
        req.body.visible,
        req.body.borrado
      ]
    },
  ]
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

const postProyecto = (req, res)=>{
  conectar.execute(
    'INSERT INTO PROYECTOS(inmobiliaria, nombre, ciudad, inicio) VALUES (?,?,?,?)',
    [ 
      req.body.inmobiliaria,
      req.body.nombre,
      req.body.ciudad,
      req.body.inicio
    ],
    { prepare: true},
    (err, results) => {
      if (err) {
        res
          .header('Access-Control-Allow-Origin', '*')
          .json({ results: false, err });
        return;
      }
      res.header('Access-Control-Allow-Origin', '*').json({ results: true });
    }
  )
}
const postProyectoAgente = (req,res)=>{
  conectar.execute(
    'INSERT INTO PROYECTOS_AGENTE(inmobiliaria, agente, nombre, ciudad, inicio) VALUES(?,?,?,?,?)',
    [
       req.body.inmobiliaria,
        req.body.agente,
        req.body.nombre,
        req.body.ciudad,
        req.body.inicio
    ],
    {prepare: true},
    (err, results) => {
      if (err) {
        res
          .header('Access-Control-Allow-Origin', '*')
          .json({ results: false, err });
        return;
      }
      res.header('Access-Control-Allow-Origin', '*').json({ results: true });
    }
  )
}

const postNotarioProyecto = (req, res )=>{
  conectar.execute(
    'INSERT PROYECTOS_NOTARIO(inmobiliaria, notario, nombre, ciudad, inicio) VALUES(?,?,?,?,?)',
    [
       req.body.inmobiliaria,
        req.body.notario,
        req.body.nombre,
        req.body.ciudad,
        req.body.inicio
    ],
    {prepare: true},
    (err, results) => {
      if (err) {
        res
          .header('Access-Control-Allow-Origin', '*')
          .json({ results: false, err });
        return;
      }
      res.header('Access-Control-Allow-Origin', '*').json({ results: true });
    }
  )
}

const postInmuebleCliente = ()=>{
  const queries = [
    {
       query:'INSERT INTO INMUEBLES_CLIENTE(cliente, inmobiliaria, proyecto, titulo, estado, foto, direccion, precio_renta, precio_venta, cuartos, pisos, metros_cuadrados, descripcion, servicios, notario, agente, visible, borrado) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    params: [
      req.body.cliente,
      req.body.inmobiliaria,
      req.body.proyecto,
      req.body.titulo,
      req.body.estado,
      req.body.foto,
      req.body.direccion,
      req.body.precio_renta,
      req.body.precio_venta,
      req.body.cuartos,
      req.body.pisos,
      req.body.metros_cuadrados,
      req.body.descripcion,
      req.body.servicios,
      req.body.notario,
      req.body.agente,
      req.body.visible,
      req.body.borrado
    ]
    },
    {
      query:'INSERT INTO inmuebles_cliente_inmobiliaria(cliente, inmobiliaria, proyecto, titulo, estado, foto, direccion, precio_renta, precio_venta, cuartos, pisos, metros_cuadrados, descripcion, servicios, notario, agente, visible, borrado) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
      params: [
        req.body.cliente,
        req.body.inmobiliaria,
        req.body.proyecto,
        req.body.titulo,
        req.body.estado,
        req.body.foto,
        req.body.direccion,
        req.body.precio_renta,
        req.body.precio_venta,
        req.body.cuartos,
        req.body.pisos,
        req.body.metros_cuadrados,
        req.body.descripcion,
        req.body.servicios,
        req.body.notario,
        req.body.agente,
        req.body.visible,
        req.body.borrado
      ]
    }
  
  ]
  conectar.batch(queries, { prepare: true }, (err, results) => {
    if (err) {
      res
        .header('Access-Control-Allow-Origin', '*')
        .json({ results: false, err });
      return;
    }
    res.header('Access-Control-Allow-Origin', '*').json({ results: true });
  });
}

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

const postNotario = (req, res) => {
  conectar.execute(
    'INSERT INTO notario(inmobiliaria, rfc, nombre, apellido, correo, foto) VALUES(?,?,?,?,?,?)',
    [
      req.body.inmobiliaria,
      req.body.rfc,
      req.body.nombre,
      req.body.apellido,
      req.body.correo,
      req.body.foto,
    ],
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
  postNotario,
  postProyectoAgente,
  postProyecto,
  postNotarioProyecto,
  postInmuebleCliente,
};
