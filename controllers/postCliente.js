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

module.exports = {
    postCliente
}

