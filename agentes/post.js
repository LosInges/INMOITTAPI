const conectar = require("../controllers/conexion");

const postAgentes = (req, res) => {
  const queries = [
    {
      query: "INSERT INTO cuentas (correo, password, tipo) values (?,?,?)",
      params: [req.body.rfc, req.body.password, "agente"],
    },

    {
      query:
        "INSERT INTO agente_inmobiliaria (inmobiliaria, rfc, apellido, foto, nombre, password, correo, telefono) values (?,?,?,?,?,?,?,?)",
      params: [
        req.body.inmobiliaria,
        req.body.rfc,
        req.body.apellido,
        req.body.foto,
        req.body.nombre,
        req.body.password,
        req.body.correo,
        req.body.telefono,
      ],
    },
  ];
  conectar.batch(queries, { prepare: true }, (err, results) => {
    if (err) {
      res.header("Access-Control-Allow-Origin", "*").json({ err });
      return;
    }
    res.header("Access-Control-Allow-Origin", "*").json({ results: true });
  });
};

module.exports = { postAgentes };
