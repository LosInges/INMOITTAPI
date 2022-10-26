const postCliente = require("./controllers/postCliente");
const getCliente = require("./controllers/getCliente");
const express = require("express");
const router = express.Router();


//GET:
router.get("/cliente/:correo",getCliente.getCliente);
//POST
router.post("/cliente", postCliente.postCliente)

//DELETE


module.exports = router;