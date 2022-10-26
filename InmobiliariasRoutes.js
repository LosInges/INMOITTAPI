const express = require("express");
const postInmobiliaria = require("./controllers/postInmobiliaria");
const getInmobiliaria = require ("./controllers/getInmobiliaria");
const router = express.Router();
/// get
    router.get('/inmobiliaria/:correo',getInmobiliaria.getInmobiliaria)
/// post 
    router.post('/inmobiliaria',postInmobiliaria.postInmobiliaria)
/// delete
module.exports=router;
