const postCliente = require("./controllers/postCliente");
const express = require("express");
const router = express.Router();


//GET:

//POST
router.post("/cliente", postCliente.postCliente)

//DELETE


module.exports = router;