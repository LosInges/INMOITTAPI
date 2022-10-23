const conectar = require("./conexion");

const deleteItem = (req, res) => {
  const query = "DELETE FROM paquetes WHERE id=? AND id_item=?";
  const params = [req.body.id, req.body.id_item];
  conectar.execute(query, params, { prepare: true }, (err, results) => {
    if (err) {
      res
        .header("Access-Control-Allow-Origin", "*")
        .json({ results: false, err });
      return;
    }
    res.header("Access-Control-Allow-Origin", "*").json({ results: true });
  });
};

const deleteUltimoItem = (req, res) => {
  const query = "DELETE FROM paquetes WHERE id=?";
  const params = [req.body.id];
  conectar.execute(query, params, { prepare: true }, (err, results) => {
    if (err) {
      res
        .header("Access-Control-Allow-Origin", "*")
        .json({ results: false, err });
      return;
    }
    res.header("Access-Control-Allow-Origin", "*").json({ results: true });
  });
};

const deletePaquete = (req, res) => {
      const query = "DELETE FROM paquetes WHERE id=?";
      const params = [req.body.id];
 
  conectar.execute(query, params, { prepare: true }, (err, results) => {
    if (err) {
      res
        .header("Access-Control-Allow-Origin", "*")
        .json({ results: false, err });
      return;
    }
    res.header("Access-Control-Allow-Origin", "*").json({ results: true });
  });
};

const deleteCargador = (req, res) => {
  const queries = [
    {
      query: "DELETE FROM cargadores WHERE empresa=? AND rfc=?",
      params: [req.body.empresa, req.body.rfc],
    },
    {
      query: "DELETE FROM cuentas WHERE correo=?",
      params: [req.body.rfc],
    },
  ];
  conectar.batch(queries, { prepare: true }, (err, results) => {
    if (err) {
      res.header("Access-Control-Allow-Origin", "*").json({ err });
      console.log(err);
      return;
    }
    res.header("Access-Control-Allow-Origin", "*").json({ results: true });
  });
};

const deleteTransporte = (req, res) => {
  const query =
    "INSERT INTO transportes(empresa, matricula, capacidad, activo) VALUES(?,?,?,?)";
  const params = [
    req.body.empresa,
    req.body.matricula,
    req.body.capacidad,
    false,
  ];
  conectar.execute(query, params, { prepare: true }, (err, results) => {
    if (err) {
      res
        .header("Access-Control-Allow-Origin", "*")
        .json({ results: false, err });
      return;
    }
    res.header("Access-Control-Allow-Origin", "*").json({ results: true });
  });
};

const deletePrecarga = (req, res) => {
  const query = "DELETE FROM precarga WHERE empresa=? AND id=?";
  const params = [req.body.empresa, req.body.id];
  conectar.execute(query, params, { prepare: true }, (err, results) => {
    if (err) {
      res
        .header("Access-Control-Allow-Origin", "*")
        .json({ results: false, err });
      return;
    }
    res.header("Access-Control-Allow-Origin", "*").json({ results: true });
  });
};

const deleteFlete = (req, res) => {
  const queries = [
    {
      query: "DELETE FROM fletes WHERE activo=? AND id=?",
      params: [true, req.body.id],
    },
    {
      query:
        "INSERT INTO fletes(activo, id, empresa, cliente, destino, telefono, origen, fecha, hora) VALUES (?,?,?,?,?,?,?,?,?)",
      params: [
        false,
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
        "DELETE FROM fletes_cliente WHERE activo=? AND cliente=? AND empresa=? AND id=?",
      params: [true, req.body.cliente, req.body.empresa, req.body.id],
    },
    {
      query:
        "INSERT INTO fletes_cliente(activo, cliente, empresa, id, destino, fecha, hora, origen, telefono) VALUES (?,?,?,?,?,?,?,?,?)",
      params: [
        false,
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
      query: "DELETE FROM fletes_empresa WHERE activo=? AND empresa=? AND id=?",
      params: [true, req.body.empresa, req.body.id],
    },
    {
      query:
        "INSERT INTO fletes_empresa(activo, empresa, id, cliente, destino, fecha, hora, origen, telefono) VALUES (?,?,?,?,?,?,?,?,?)",
      params: [
        false,
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

const deleteEmpresa = (req, res) => {
  const queries = [
    {
      query: "DELETE FROM empresas_fletes WHERE correo=?",
      params: [req.body.correo],
    },
    {
      query: "DELETE FROM cuentas WHERE correo=?",
      params: [req.body.correo],
    },
  ];
  conectar.execute(queries, { prepare: true }, (err, results) => {
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
  deleteItem,
  deleteUltimoItem,
  deletePaquete,
  deleteCargador,
  deleteTransporte,
  deletePrecarga,
  deleteFlete,
  deleteEmpresa,
};
