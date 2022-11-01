const postCliente = require("./postCliente");
const getCliente = require("./getCliente");
const deleteCliente  = require("./deleteCliente");
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