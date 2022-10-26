const { reset } = require("nodemon");
const conectar = require("./conexion");

const postInmobiliaria = (req, res) => {
    const queries = [
        {
            query: "INSERT INTO inmobiliarias (correo, estado, nombre, direccion, password, notarios, agentes) values (?,?,?,?,?,?,?)",
            params: [req.body.correo, req.body.estado, req.body.nombre, req.body.direccion, req.body.password, req.body.notarios, req.body.agentes]
        },
        {
            query: "INSERT INTO cuentas (correo, password, tipo) values (?,?,?)",
            params: [req.body.correo, req.body.password, "inmobiliaria"]
        }
    ]
    conectar.batch(queries, { prepare: true }, (err, results) => {
        if (err) {
            res
                .header("Access-Control-Allow-Origin", "*")
                .json({ err });
            return;
        }
        res.header("Access-Control-Allow-Origin", "*").json({ results: true });
    })
}


module.exports = { postInmobiliaria }