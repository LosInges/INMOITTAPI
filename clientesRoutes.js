const postCliente = require("./controllers/postCliente");
const getCliente = require("./controllers/getCliente");
const express = require("express");
const deleteCliente  = require("./controllers/deleteCliente");
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