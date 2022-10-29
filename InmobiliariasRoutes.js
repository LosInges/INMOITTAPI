const express = require("express");
const postInmobiliaria = require("./controllers/postInmobiliaria");
const getInmobiliaria = require ("./controllers/getInmobiliaria");
const deleteInmobiliaria = require("./controllers/deleteInmobiliaria");
const router = express.Router();
/// get
    router.get('/inmobiliaria/:correo',getInmobiliaria.getInmobiliaria)
/// post 
    router.post('/inmobiliaria',postInmobiliaria.postInmobiliaria)
    router.post('/inmueble',postInmobiliaria.postInmueble)
    router.post('/servicio',postInmobiliaria.agregarServicio)
/// delete
    router.delete('/inmobiliaria',deleteInmobiliaria.deleteInmobiliaria)

module.exports=router;
