const express = require("express");
const postInmobiliaria = require("./controllers/postInmobiliaria");
const router = express.Router();
/// get
/// post 
    router.post('/inmobiliaria',postInmobiliaria.postInmobiliaria)
/// delete
module.exports=router;
