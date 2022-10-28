const { query } = require("express");
const conectar = require("./conexion");

const postCliente = (req, res) => {
  const queries = [
    {
      query:
        "INSERT INTO clientes(correo,nombre,apellido,password) VALUES (?,?,?,?)",
      params: [
        req.body.correo,
        req.body.nombre,
        req.body.apellido,
        req.body.password,
      ],
    },
    {
        query:
        "INSERT INTO cuentas(correo,password,tipo) VALUES (?,?,?)",
        params:[
            req.body.correo,
            req.body.password,
            "cliente"
        ]
    }
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

const postPrecargaCliente =(req, res)=>{
  console.log(req.body)
  const queries = [
    {
      query:
        "INSERT INTO precarga(id,empresa,cliente,muebles, cajas_chicas, cajas_grandes, cajas_medianas, origen, destino, fecha, hora, telefono) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",
      params: [
       req.body.id,
        req.body.empresa,
        req.body.cliente,
        req.body.muebles,
        req.body.cajas_chicas,
        req.body.cajas_grandes,
        req.body.cajas_medianas,
        req.body.origen,
        req.body.destino,
        req.body.fecha,
        req.body.hora,
        req.body.telefono
      ],
    },
    {
      query:
        "INSERT INTO precarga_cliente(id,empresa,cliente,muebles, cajas_chicas, cajas_grandes, cajas_medianas, origen, destino, fecha, hora, telefono) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",
      params: [
       req.body.id,
        req.body.empresa,
        req.body.cliente,
        req.body.muebles,
        req.body.cajas_chicas,
        req.body.cajas_grandes,
        req.body.cajas_medianas,
        req.body.origen,
        req.body.destino,
        req.body.fecha,
        req.body.hora,
        req.body.telefono
      ],
    },
  ]
  //precargaCliente, precarga, 

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

module.exports = {
    postCliente,
    postPrecargaCliente
}

