const postCliente = require("./post");
const getCliente = require("./get");
const deleteCliente  = require("./delete");
const express = require("express");
const router = express.Router();

//GET:
router.get("/cliente/:correo",getCliente.getCliente);
router.get("/precargasCliente/:correo", getCliente.getPrecargasCliente);
//POST
router.post("/cliente", postCliente.postCliente)
router.post("/precargaCliente", postCliente.postPrecargaCliente);

//DELETE
router.delete("/cliente",deleteCliente.deleteCliente);



module.exports = router;